'use server'

import { NextRequest, NextResponse } from "next/server";
import { steam } from "@/lib/steam";

export async function GET(request: NextRequest) {
    const redirectURL = await steam.getRedirectUrl();
    return NextResponse.redirect(redirectURL);
}