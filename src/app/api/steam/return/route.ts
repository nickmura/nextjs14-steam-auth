import { NextRequest } from "next/server";
import { steam } from "../../../lib/api/config";

export async function GET(request:NextRequest, response:NextRequest) {
    console.log('test')
    const user  = await steam.authenticate(request);
    request.cookies.set('client', JSON.stringify(user._json))
    return Response.redirect('http://localhost:3000');
}