import { adminClient, organizationClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
import { ac, admin, user } from "@/lib/permissions"

export const authClient = createAuthClient({
    baseURL: "http://51.68.120.20:3002",
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