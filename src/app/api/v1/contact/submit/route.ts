import type { Metadata } from 'next';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactTicketConfirmationEmail } from '@/lib/email';

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

    const ticketId = `TICK-${Date.now().toString(36).toUpperCase()}`;

    // Trigger confirmation email
    await sendContactTicketConfirmationEmail({
      to: data.email,
      name: data.name,
      subject: data.subject,
      ticketId,
      reason: data.reason,
    });

    return NextResponse.json({
      success: true,
      ticketId,
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
