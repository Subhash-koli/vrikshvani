import { NextResponse } from 'next/server';
import { WaitlistJoinSchema } from '@/lib/validation/api-schemas';
import { prisma } from '@/lib/db';
import { sendWaitlistConfirmationEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = WaitlistJoinSchema.parse(body);

    // Check for duplicate email
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

    // Generate unique referral code
    const referralCode = `VV-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Calculate queue position based on current count
    const currentCount = await prisma.waitlistEntry.count();
    const queuePosition = currentCount + 1;

    // Calculate priority score: Base(100) + early bonus
    const priorityScore = 100 + Math.max(0, 500 - currentCount);

    // Handle optional referral
    let referredById: string | null = null;
    if (validatedData.referralCode) {
      const referrer = await prisma.waitlistEntry.findUnique({
        where: { referralCode: validatedData.referralCode },
      });
      if (referrer) {
        referredById = referrer.id;
        // Increment referrer's referral count and boost their priority
        await prisma.waitlistEntry.update({
          where: { id: referrer.id },
          data: {
            referralCount: { increment: 1 },
            priorityScore: { increment: 10 },
          },
        });
      }
    }

    // Create waitlist entry in database
    const entry = await prisma.waitlistEntry.create({
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

    // Trigger transactional confirmation email (graceful failure)
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
        email: entry.email,
        queuePosition,
        referralCode,
        preferredColorway: entry.preferredColorway,
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

    // Handle Prisma/DB errors gracefully
    console.error('[Waitlist API Error]', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again in a moment.' },
      { status: 500 }
    );
  }
}
