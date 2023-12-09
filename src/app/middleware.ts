import { NextRequest, NextResponse } from "next/server";
import { steam } from './lib/api/config';

export async function middleware(request: NextRequest) {
    try {
        let cookie = request.cookies.get('client')
        // console.log(cookie)

        return cookie
    } catch (error) {
        console.log(error);
    }
}
