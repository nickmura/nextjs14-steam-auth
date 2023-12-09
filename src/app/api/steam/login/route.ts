import { NextRequest } from "next/server";
import { steam } from "../../../lib/api/config";

export async function GET(request:NextRequest) {

    const redirectURL = await steam.getRedirectUrl();
    return Response.redirect(redirectURL);

}