"use client"

import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

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
            <div className="flex items-center gap-3">
                <Image 
                    src="/logo.png" 
                    alt="Logo" 
                    width={40} 
                    height={40}
                    className="object-contain"
                />
                <h1>Mon App</h1>
            </div>

            {
                session ? (
                    <div>
                        <span>Bonjour {session.user?.name}</span>
                        <button onClick={handleLogout}>Déconnexion</button>
                    </div>
                ) : (
                    <a href="/action/login">Connexion</a>
                )
            }
        </header>
    )
}