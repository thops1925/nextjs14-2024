import { url } from 'inspector'
import { NextResponse } from 'next/server'

const isLogin: boolean = false

export function middleware (request: Request) {
  if (!isLogin && request.url === 'http://localhost:3000/profile') {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}

export const config = {}
