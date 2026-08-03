import { NextResponse } from 'next/server';
import { z } from 'zod';

const EnterpriseQuoteSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  unitCount: z.enum(['5-14', '15-49', '50-99', '100+']),
  industry: z.enum(['CORPORATE', 'GREENHOUSE', 'BOTANICAL', 'RETAIL', 'HOSPITALITY']),
  notes: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = EnterpriseQuoteSchema.parse(body);

    const quoteRef = `VV-ENT-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      message: "Enterprise quote request received. Our team will respond within 1 business day.",
      data: {
        quoteRef,
        company: validatedData.company,
        email: validatedData.email,
        unitCount: validatedData.unitCount,
        industry: validatedData.industry,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.errors || "Invalid input data" },
      { status: 400 }
    );
  }
}
