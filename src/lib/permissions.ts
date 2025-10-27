import { createAccessControl } from "better-auth/plugins/access";

const statement = {
    ticket: ["create", "update", "delete"],
    user: ["ban", "edit", "create"]
} as const;

export const ac = createAccessControl(statement);

export const user = ac.newRole({
    ticket: ["create", "delete"]
})

export const admin = ac.newRole({
    ticket: ["create", "update", "delete"],
    user: ["ban", "edit", "create"]
})