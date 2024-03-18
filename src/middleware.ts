import { NextRequest, NextResponse } from 'next/server'

const isLogin: boolean = true

export function middleware (request: NextRequest) {
  let cookies = new Headers(request.headers)
  if (isLogin) {
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ['/profile/:path*']
}
