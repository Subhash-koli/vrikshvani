import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const adminCookie = request.cookies.get('vriksh_admin_token')?.value;
    const authHeader = request.headers.get('authorization');
    const adminSecret = process.env.ADMIN_SECRET || 'vriksh_vani_admin_secret_2026';

    const isAuthenticated =
      adminCookie === 'authenticated_admin_session_active' ||
      authHeader === `Bearer ${adminSecret}` ||
      process.env.NODE_ENV === 'development';

    if (!isAuthenticated) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized access. Please log in to the admin portal.' },
        { status: 401 }
      );
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
