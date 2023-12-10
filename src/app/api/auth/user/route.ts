import { cookies } from "next/headers";
import { Encryption } from '@/lib/encryption';
import { NextRequest, NextResponse } from "next/server";

const encryption = new Encryption();

export async function POST(req: NextRequest, res) {
    try {
        let cookie = (await req.json()).cookie.value;
        if (!cookie) return NextResponse.json({ user: null });

        // Decrypt cookie
        let _json: Object = await JSON.parse(encryption.decrypt(cookie || ""));

        return NextResponse.json({ user: _json });
    } catch(e) {
        return NextResponse.json({ user: null });
    }
}