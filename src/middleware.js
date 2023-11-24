import { NextResponse } from 'next/server'

export function middleware(request) {
    if (!request.cookies.has("atlasmed_token")){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
  matcher: [
    '/perfilMedico/:path*',
  ]
}