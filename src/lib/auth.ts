import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { admin as adminPlugin, organization } from "better-auth/plugins";
import {Pool} from "pg"
import { ac, admin, user } from "@/lib/permissions"

export const auth = betterAuth({
    // Default option
/*     database: createPool({
        host: "51.68.120.20",
        port: 60010,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWD,
        database: "betterauth",
        timezone: "Z"
    }), */
    database: new Pool({
        connectionString: "postgres://betterauth:Better_%24%21R%23PyH72@51.77.193.180:5432/betterauth"
    }),
    trustedOrigins: [
        "http://51.68.120.20:3002",
        "http://localhost:3000"
    ],
    emailAndPassword: {
        enabled: true,
        minPasswordLength: 6
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
        organization(),
        nextCookies()
    ],
    // User options 
    user: {
        deleteUser: {
            enabled: true
        },
        additionalFields: {
            
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
    },
    advanced: {
        disableOriginCheck: true
    }
})