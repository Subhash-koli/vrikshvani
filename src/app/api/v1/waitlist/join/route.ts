import { NextResponse } from 'next/server';
import { WaitlistJoinSchema } from '@/lib/validation/api-schemas';
import { sendWaitlistConfirmationEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = WaitlistJoinSchema.parse(body);

    const referralCode = `LEAFCODE-${Math.floor(1000 + Math.random() * 9000)}`;
    const queuePosition = Math.floor(400 + Math.random() * 50);

    // Trigger transactional confirmation email
    await sendWaitlistConfirmationEmail({
      to: validatedData.email,
      name: validatedData.name,
      queuePosition,
      referralCode,
      colorway: validatedData.preferredColorway,
    });

    return NextResponse.json({
      success: true,
      message: "Batch 01 Founding Member reservation successful!",
      data: {
        email: validatedData.email,
        queuePosition,
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
