// my-performance-improvement/src/middleware.ts

import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest) {
    console.log('미들웨어가 실행!');
    if(req.nextUrl.pathname.startsWith('/products/1004')) {
        console.log('경로를 리다이렉트!!');
        return NextResponse.redirect(new URL('/products', req.url));
    }
}

export const config = {
    matcher: ['/products/:path*'],
}