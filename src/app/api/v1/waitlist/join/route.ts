import { NextResponse } from 'next/server';
import { WaitlistJoinSchema } from '@/lib/validation/api-schemas';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = WaitlistJoinSchema.parse(body);

    // Mock successful reservation response
    const referralCode = `LEAFCODE-${Math.floor(1000 + Math.random() * 9000)}`;

    return NextResponse.json({
      success: true,
      message: "Batch 01 Founding Member reservation successful!",
      data: {
        email: validatedData.email,
        queuePosition: 413,
        referralCode,
        preferredColorway: validatedData.preferredColorway,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.errors || "Invalid input data" },
      { status: 400 }
    );
  }
}
