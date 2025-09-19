"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function DelAccount({ session }: { session: any }) {
    const router = useRouter();

    async function handleDel() {
        await authClient.deleteUser()
        router.refresh()
    }

    return (
        <div>
            <h1>Supprimez votre compte? {session.user.name}</h1>
            <button onClick={handleDel}>Supprimez</button>
        </div>
    )
}