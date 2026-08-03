import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const NewsletterSchema = z.object({
  email: z.string().email('Valid email required'),
  firstName: z.string().min(1).max(100).optional(),
  interests: z.array(z.enum(['plant-science', 'product-updates', 'community', 'enterprise'])).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = NewsletterSchema.parse(body);

    // In production: add to Resend audience / Mailchimp list
    // For now we log and return a success response
    console.log('[Newsletter] New subscriber:', data.email, data.interests);

    return NextResponse.json({
      success: true,
      message: 'You\'ve been added to the Nature Intelligence Dispatch!',
      data: {
        email: data.email,
        subscribedAt: new Date().toISOString(),
      },
    }, { status: 201 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Validation failed',
        details: error.errors,
      }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
