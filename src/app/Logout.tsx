'use client'

import { useRouter } from 'next/navigation';
import { deleteUser } from '@/actions/deleteUser';

export default function Logout() {

    const router = useRouter();

    return (
        <p
            style={{ cursor: "pointer" }}
            onClick={() => {
                deleteUser();
                router.refresh();
            }}
        >
            Logout
        </p>
    )
}