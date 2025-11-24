import { adminClient, organizationClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
import { ac, admin, user } from "@/lib/permissions"
import { organization } from "better-auth/plugins"

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000",
    plugins: [
        adminClient({
            ac,
            roles: {
                admin,
                user
            }
        }),
        organizationClient()
    ]
})