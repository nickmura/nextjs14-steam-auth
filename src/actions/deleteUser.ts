'use server'

import { cookies } from 'next/headers'

export async function deleteUser() {
    try {
        cookies().set("steam", '', { expires: Date.now() - 1000 * 60 * 60 * 24 });
    } catch(e) {
        return null;
    }
}