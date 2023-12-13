export const dynamic = 'force-dynamic'

import { cookies } from 'next/headers';
import Server, { NextResponse } from 'next/server';
import { NextRequest } from "next/server";
import { steam } from "@/lib/steam";
import { Encryption } from '@/lib/encryption';

const encryption = new Encryption();

export async function GET(request: NextRequest, response: NextResponse) {

    let toRedirect: string
    toRedirect = process.env.URL || "/";

    try {
        const user  = await steam.authenticate(request);
        const month = 24 * 60 * 60 * 1000 * 30;
        let encrypted = encryption.encrypt(JSON.stringify(user._json));
        if (encrypted) cookies().set('steam', encrypted, { expires: month });
        return NextResponse.redirect(toRedirect, {
            headers: {
                'Set-Cookie': `steam=${encrypted}; path=/; Max-Age=${month};`
            }
        });

        return response;
    } catch(e) {
        return Server.NextResponse.redirect(process.env.URL || "/");
    }
}