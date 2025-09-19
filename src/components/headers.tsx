"use client"

import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function Header({ session }: {session : any}) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    async function handleLogout() {
        setLoading(true)
        await authClient.signOut()
        setLoading(false)
        router.refresh()
    }

    return (
        <header className="p-4 border-b flex justify-between items-center">
            <h1>Mon App</h1>

            {
                session ? (
                    <div>
                        <span>Bonjour {session.user?.name}</span>
                        <button onClick={handleLogout}>Déconnexion</button>
                    </div>
                ) : (
                    <a href="/login">Connexion</a>
                )
            }
        </header>
    )
}