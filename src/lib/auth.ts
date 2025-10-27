import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { admin as adminPlugin, captcha, organization } from "better-auth/plugins";
import { createPool } from "mysql2/promise";
import { ac, admin, user } from "@/lib/permissions"

export const auth = betterAuth({
    // Default option
    database: createPool({
        host: "51.68.120.20",
        port: 32768,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWD,
        database: "betterauth",
    }),
    trustedOrigins: [
        "http://51.68.120.20:3000"
    ],
    emailAndPassword: {
        enabled: true,
        minPasswordLength: 12
    },
    // Plugins options
    plugins: [
        adminPlugin({
            ac,
            roles: {
                admin,
                user
            },
            defaultBanExpiresIn: 60 * 60 * 24
        }),
        captcha({
            provider: "hcaptcha",
            secretKey: process.env.HCAPTCHA_KEY!,
        }),
        organization(),
        nextCookies()
    ],
    // User options 
    user: {
        deleteUser: {
            enabled: true
        }
    },
    // Dev options
    logger: {
        disabled: false,
        level: "debug",
        log: (level, message, ...args) => {
            console.log(`[${level}] ${message}`, ...args)
        }
    },
    telemetry: {
        enabled: true
    }
})