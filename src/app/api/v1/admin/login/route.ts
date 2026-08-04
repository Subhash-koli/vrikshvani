import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const expectedPassword = process.env.ADMIN_PASSWORD || process.env.ADMIN_SECRET || 'vriksh_vani_admin_2026';

    if (password !== expectedPassword) {
      return NextResponse.json(
        { success: false, error: 'Invalid admin password' },
        { status: 401 }
      );
    }

    // Set secure HTTP-Only session cookie
    const response = NextResponse.json({
      success: true,
      message: 'Admin authentication successful',
    });

    response.cookies.set('vriksh_admin_token', 'authenticated_admin_session_active', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
