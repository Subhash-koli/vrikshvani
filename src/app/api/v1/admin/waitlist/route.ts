import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Production Security Layer: Validate ADMIN_SECRET or admin key in production
    if (process.env.NODE_ENV === 'production') {
      const adminSecret = process.env.ADMIN_SECRET;
      const authHeader = request.headers.get('authorization');
      const secretParam = request.nextUrl.searchParams.get('key');

      const isAuthorized =
        (adminSecret && authHeader === `Bearer ${adminSecret}`) ||
        (adminSecret && secretParam === adminSecret);

      if (adminSecret && !isAuthorized) {
        return NextResponse.json(
          { success: false, error: 'Unauthorized access' },
          { status: 401 }
        );
      }
    }

    const entries = await prisma.waitlistEntry.findMany({
      orderBy: [
        { priorityScore: 'desc' },
        { joinedAt: 'asc' },
      ],
    });

    const totalCount = entries.length;
    const sageCount = entries.filter((e) => e.preferredColorway === 'BIOPHILIC_SAGE').length;
    const creamCount = entries.filter((e) => e.preferredColorway === 'CREAM_WHITE').length;
    const totalReferrals = entries.reduce((acc, curr) => acc + (curr.referralCount || 0), 0);

    return NextResponse.json({
      success: true,
      data: {
        totalCount,
        sageCount,
        creamCount,
        totalReferrals,
        entries,
      },
    });
  } catch (error: any) {
    console.error('[Admin Waitlist API Error]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve pre-orders from database' },
      { status: 500 }
    );
  }
}
