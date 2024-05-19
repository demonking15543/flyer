import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const user = request.cookies.get('user');

  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*',
   '/api/protected/:path*',
 '/profile'
], // Define the paths to apply the middleware
};
