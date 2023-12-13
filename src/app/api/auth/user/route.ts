import { Encryption } from '@/lib/encryption';
import { NextRequest } from "next/server";

const encryption = new Encryption();

export async function POST(req: NextRequest, res) {
    try {
        let cookie = (await req.json()).cookie.value;
        if (!cookie) return Response.json({ user: null });

        // Decrypt cookie
        let _json: Object = await JSON.parse(encryption.decrypt(cookie || ""));

        return Response.json({ user: _json });
    } catch(e) {
        return Response.json({ user: null });
    }
}