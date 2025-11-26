"use client"

import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import * as icon from "lucide-react";

export function Header({ session }: { session: any }) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    async function handleLogout() {
        setLoading(true)
        await authClient.signOut()
        setLoading(false)
        router.refresh()
    }

    async function handleLogin() {
        setLoading(true)
        router.push('/action/login')
        setLoading(false)
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" href="/">{"Ordi'Simple"}</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            {session ? (
                <div className="navbar-end">
                    <div className="dropdown">
                        <div className="btn border-" tabIndex={0} role="button"> <icon.UserCheck /> <div>{session.user.name}</div> </div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 top-15 right-0 shadow-sm">
                            <div className="flex w-full flex-col">
                                <div className="card rounded-box grid place-items-center">
                                    <li><a>Dashboard</a></li>
                                    <li><a>Paramètres</a></li>
                                </div>
                                <div className="divider"></div>
                                <div className="card rounded-box grid place-items-center bottom-2">
                                    <li><a>Déconnexion</a></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="navbar-end">
                    <a className="btn" href="/action/login">Button2</a>
                </div>
            )}
        </div>
    )
}