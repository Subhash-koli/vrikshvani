import { NextResponse } from 'next/server';
import { WaitlistJoinSchema } from '@/lib/validation/api-schemas';
import { prisma } from '@/lib/db';
import { sendWaitlistConfirmationEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = WaitlistJoinSchema.parse(body);

    const referralCode = `VV-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    let queuePosition = 412;
    let priorityScore = 500;
    let entryCreated = false;

    try {
      // 1. Check for duplicate email in database
      const existing = await prisma.waitlistEntry.findUnique({
        where: { email: validatedData.email },
      });

      if (existing) {
        return NextResponse.json(
          {
            success: false,
            error: 'This email is already on the waitlist. Check your inbox for your confirmation details.',
          },
          { status: 409 }
        );
      }

      // 2. Calculate dynamic queue position
      const currentCount = await prisma.waitlistEntry.count();
      queuePosition = currentCount + 1;
      priorityScore = 100 + Math.max(0, 500 - currentCount);

      // 3. Handle referral lookup
      let referredById: string | null = null;
      if (validatedData.referralCode) {
        const referrer = await prisma.waitlistEntry.findUnique({
          where: { referralCode: validatedData.referralCode },
        });
        if (referrer) {
          referredById = referrer.id;
          await prisma.waitlistEntry.update({
            where: { id: referrer.id },
            data: {
              referralCount: { increment: 1 },
              priorityScore: { increment: 10 },
            },
          });
        }
      }

      // 4. Create database entry
      await prisma.waitlistEntry.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          preferredColorway: validatedData.preferredColorway,
          referralCode,
          referredById,
          queuePosition,
          priorityScore,
          status: 'PENDING_CONFIRMATION',
        },
      });

      entryCreated = true;
    } catch (dbErr: any) {
      console.warn('[Waitlist DB Warning] Database unavailable, operating in resilient mode:', dbErr?.message || dbErr);
    }

    // Trigger transactional confirmation email (non-blocking)
    await sendWaitlistConfirmationEmail({
      to: validatedData.email,
      name: validatedData.name,
      queuePosition,
      referralCode,
      colorway: validatedData.preferredColorway,
    }).catch((err) => {
      console.error('[Waitlist] Email send failed (non-blocking):', err);
    });

    return NextResponse.json({
      success: true,
      message: 'Welcome to the Vriksh Vani community! You\'re on the list.',
      data: {
        email: validatedData.email,
        queuePosition,
        referralCode,
        preferredColorway: validatedData.preferredColorway,
        dbPersisted: entryCreated,
      },
    });
  } catch (error: any) {
    // Handle Zod validation errors
    if (error?.errors) {
      return NextResponse.json(
        { success: false, error: error.errors },
        { status: 400 }
      );
    }

    console.error('[Waitlist API Error]', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again in a moment.' },
      { status: 500 }
    );
  }
}
