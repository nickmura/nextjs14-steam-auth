'use server'

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from "next/server";
import { steam } from "@/lib/steam";
import { Encryption } from '@/lib/encryption';

const encryption = new Encryption();

export async function GET(request: NextRequest, response: NextRequest) {
    const user  = await steam.authenticate(request);
    if ( user) console.log(true)
    const month = Date.now() + 24 * 60 * 60 * 1000 * 30;
    let encrypted = encryption.encrypt(JSON.stringify(user._json));
    if (encrypted) cookies().set('steam', encrypted, { expires: month });
    
    let toRedirect: string = process.env.URL || "/";
    return Response.redirect(toRedirect);

    // console.log('test')
    // const user  = await steam.authenticate(request);
    // request.cookies.set('client', JSON.stringify(user._json))
    // return Response.redirect('http://localhost:3000');
}