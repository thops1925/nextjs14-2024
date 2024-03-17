import { NextResponse } from 'next/server'

const isLogin: boolean = false

export function middleware (request: Request) {
  if (isLogin) {
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ['/profile/:path*']
}
