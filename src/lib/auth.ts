import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { createPool } from "mysql2/promise";

export const auth = betterAuth({
    database: createPool({
        host: "localhost",
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWD,
        database: "betterauth",
    }),
    trustedOrigins: [
        "http://51.68.120.20:3000"
    ],
    emailAndPassword: {
        enabled: true
    },
    plugins: [nextCookies()],
    user: {
        deleteUser: {
            enabled: true
        }
    }
})