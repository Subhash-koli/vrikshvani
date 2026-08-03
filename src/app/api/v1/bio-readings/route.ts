import { NextResponse } from 'next/server';
import { z } from 'zod';

const BioReadingSchema = z.object({
  plantProfileId: z.string(),
  leafSurfaceTemp: z.number().min(5).max(60),
  ambientTemp: z.number().min(5).max(60),
  relativeHumidity: z.number().min(0).max(100),
  computedVpd: z.number().min(0).max(5),
  vocGasResistance: z.number().min(0),
  healthScore: z.number().min(0).max(100),
  emotionTag: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = BioReadingSchema.parse(body);

    const readingId = `br_${Date.now().toString(36)}`;

    return NextResponse.json({
      success: true,
      message: 'Bio-signal reading ingested successfully.',
      data: {
        id: readingId,
        plantProfileId: validatedData.plantProfileId,
        healthScore: validatedData.healthScore,
        emotionTag: validatedData.emotionTag,
        computedVpd: validatedData.computedVpd,
        readingTimestamp: new Date().toISOString(),
      },
    }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.errors || 'Invalid telemetry payload' },
      { status: 400 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const plantProfileId = searchParams.get('plantProfileId');
  const limit = parseInt(searchParams.get('limit') ?? '24');

  if (!plantProfileId) {
    return NextResponse.json({ success: false, error: 'plantProfileId is required' }, { status: 400 });
  }

  // Mock telemetry time-series — in production queries Prisma with time-series pagination
  const mockReadings = Array.from({ length: Math.min(limit, 24) }, (_, i) => ({
    id: `br_mock${i}`,
    plantProfileId,
    leafSurfaceTemp: 23.4 + Math.random() * 2,
    ambientTemp: 24.1 + Math.random() * 1.5,
    relativeHumidity: 58 + Math.random() * 10,
    computedVpd: 1.05 + Math.random() * 0.3,
    healthScore: Math.floor(88 + Math.random() * 12),
    emotionTag: 'Photosynthetic Joy 🌿',
    readingTimestamp: new Date(Date.now() - i * 15 * 60 * 1000).toISOString(),
  }));

  return NextResponse.json({ success: true, data: mockReadings });
}
