import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    console.log('middleware')
    try {
        let cookie = request.cookies.get('client')
        console.log(cookie)
        return cookie
    } catch (error) {
        console.log(error);
    }
}
