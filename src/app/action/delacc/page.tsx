import { DelAccount } from "@/components/del_compo";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DeleteAccount() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        redirect('/action/login')
    }

    return (
        <html>
            <body>
                <DelAccount session={session}/>
            </body>
        </html>
    )
}