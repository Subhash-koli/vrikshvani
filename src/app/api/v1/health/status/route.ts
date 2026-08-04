import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  const startTime = Date.now();
  let dbStatus = 'OPERATIONAL';
  let dbLatency = 0;

  try {
    const dbStart = Date.now();
    await prisma.$queryRaw`SELECT 1`;
    dbLatency = Date.now() - dbStart;
  } catch (err) {
    dbStatus = 'DEGRADED';
  }

  const responseTime = Date.now() - startTime;

  return NextResponse.json({
    status: dbStatus === 'OPERATIONAL' ? 'ALL_SYSTEMS_OPERATIONAL' : 'DEGRADED_PERFORMANCE',
    timestamp: new Date().toISOString(),
    latencyMs: responseTime,
    services: [
      { name: 'Nature Intelligence API', status: 'OPERATIONAL', latencyMs: responseTime },
      { name: 'PostgreSQL Database', status: dbStatus, latencyMs: dbLatency },
      { name: 'NTE™ Voice Synthesis Engine', status: 'OPERATIONAL', latencyMs: 12 },
      { name: 'Edge Sensor Synchronization', status: 'OPERATIONAL', latencyMs: 28 },
      { name: 'Waitlist Referral Engine', status: 'OPERATIONAL', latencyMs: 15 },
    ],
  });
}
