export const dynamic = 'force-dynamic'

import Server from 'next/server';
import { NextRequest } from "next/server";
import { steam } from "@/lib/steam";

export async function GET(request: NextRequest) {
    const redirectURL = await steam.getRedirectUrl();
    return Server.NextResponse.redirect(redirectURL);
}