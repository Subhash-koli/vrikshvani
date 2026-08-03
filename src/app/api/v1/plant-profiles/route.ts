import { NextResponse } from 'next/server';
import { z } from 'zod';

const PlantProfileCreateSchema = z.object({
  userId: z.string().cuid(),
  nickname: z.string().min(1).max(60),
  voicePersonality: z.enum(['CALM_WARM', 'PLAYFUL_CURIOUS', 'SCIENTIFIC_PRECISION', 'MEDITATIVE_ZEN']),
  deviceId: z.string().optional(),
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ success: false, error: 'userId query param is required' }, { status: 400 });
  }

  // Mock response — in production this queries Prisma
  return NextResponse.json({
    success: true,
    data: [
      {
        id: 'cpl_example001',
        userId,
        nickname: 'Milo the Monstera',
        voicePersonality: 'CALM_WARM',
        healthScore: 94,
        currentEmotion: 'Photosynthetic Joy 🌿',
        createdAt: new Date().toISOString(),
      },
    ],
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = PlantProfileCreateSchema.parse(body);

    const newProfileId = `cpl_${Date.now().toString(36)}`;

    return NextResponse.json({
      success: true,
      message: 'Plant profile created successfully.',
      data: {
        id: newProfileId,
        userId: validatedData.userId,
        nickname: validatedData.nickname,
        voicePersonality: validatedData.voicePersonality,
        healthScore: 100,
        currentEmotion: 'First Light Wonder 🌱',
        createdAt: new Date().toISOString(),
      },
    }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.errors || 'Invalid input data' },
      { status: 400 }
    );
  }
}
