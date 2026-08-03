import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(_req: NextRequest) {
  return NextResponse.json({
    status: 'ok',
    service: 'Vriksh Vani API',
    version: '1.0.0',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
}
