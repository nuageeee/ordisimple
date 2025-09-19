import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function dashboard() {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    if(!session) {
        redirect('/login')
    }

    return (
        <div>
            Welcome back {session.user.name}
        </div>
    )
}