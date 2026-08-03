import type { Metadata } from 'next';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(1, 'Name required').max(100),
  email: z.string().email('Valid email required'),
  subject: z.string().min(1, 'Subject required').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  reason: z.enum(['general', 'enterprise', 'press', 'technical', 'accessibility']),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = ContactSchema.parse(body);

    // In production: send via Resend email API
    // await resend.emails.send({
    //   from: 'Contact Form <hello@vrikshvani.com>',
    //   to: ['hello@vrikshvani.com'],
    //   subject: `[${data.reason.toUpperCase()}] ${data.subject}`,
    //   text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
    // });

    console.log('[Contact] New submission:', {
      name: data.name,
      email: data.email,
      reason: data.reason,
      subject: data.subject,
    });

    return NextResponse.json({
      success: true,
      message: 'Your message has been received. We will reply within 1–2 business days.',
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
