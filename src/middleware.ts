import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const locale = req.cookies.get('locale')?.value;

  if (!locale) {
    res.cookies.set('locale', 'en', {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  return res;
}
