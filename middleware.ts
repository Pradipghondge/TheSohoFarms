import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/server/auth';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path === '/admin/login') {
    return NextResponse.next();
  }

  if (path.startsWith('/admin')) {
    const sessionCookie = request.cookies.get('session')?.value;

    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const payload = await decrypt(sessionCookie);

    if (!payload) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
