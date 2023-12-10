'use server'

import { cookies } from 'next/headers'

export async function getUser() {
    try {
        let user = await fetch(`${process.env.URL}/api/auth/user`, {
            method: "POST",
            cache: 'no-store',
            body: JSON.stringify({
                cookie: cookies().get("steam") || ""
            })
        });
        return (await user.json())?.user || null;
    } catch(e) {
        return null;
    }
}