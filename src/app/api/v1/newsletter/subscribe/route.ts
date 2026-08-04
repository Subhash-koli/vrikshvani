import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';

const NewsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = NewsletterSchema.parse(body);

    // Create or update visitor user record
    await prisma.user.upsert({
      where: { email: validated.email },
      update: { role: 'VISITOR' },
      create: {
        email: validated.email,
        role: 'VISITOR',
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Welcome to the Nature Intelligence Dispatch! Check your inbox soon.',
    });
  } catch (error: any) {
    if (error?.errors) {
      return NextResponse.json(
        { success: false, error: error.errors[0]?.message || 'Invalid email address' },
        { status: 400 }
      );
    }

    console.error('[Newsletter API Error]', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
