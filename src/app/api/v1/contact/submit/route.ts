import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { sendContactTicketConfirmationEmail } from '@/lib/email';

const ContactSchema = z.object({
  name: z.string().min(1, 'Name required').max(100),
  email: z.string().email('Valid email required'),
  subject: z.string().min(1, 'Subject required').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  reason: z.enum(['general', 'enterprise', 'press', 'technical', 'accessibility']),
});

// Map frontend reason values to the Prisma TicketDepartment enum
const reasonToDepartment: Record<string, 'ORDERS' | 'TECHNICAL' | 'ENTERPRISE' | 'LEGAL_PRIVACY'> = {
  general: 'ORDERS',
  enterprise: 'ENTERPRISE',
  press: 'ORDERS',
  technical: 'TECHNICAL',
  accessibility: 'LEGAL_PRIVACY',
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = ContactSchema.parse(body);

    const department = reasonToDepartment[data.reason] || 'ORDERS';

    // Persist to database
    const ticket = await prisma.contactTicket.create({
      data: {
        department,
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    });

    // Trigger confirmation email (non-blocking)
    await sendContactTicketConfirmationEmail({
      to: data.email,
      name: data.name,
      subject: data.subject,
      ticketId: ticket.id,
      reason: data.reason,
    }).catch((err) => {
      console.error('[Contact] Email send failed (non-blocking):', err);
    });

    return NextResponse.json({
      success: true,
      ticketId: ticket.id,
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

    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please email us directly at hello@vrikshvani.com.' },
      { status: 500 }
    );
  }
}
