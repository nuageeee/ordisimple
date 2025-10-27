import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {data, error} = await resend.emails.send({
        from: 'Joachin <joachinloison@outlook.fr>',
        to: ['contact@ordisimple.com'],
        subject: 'Hello world',
        react: EmailTemplate({ firstName: 'Joachin'})
    })
}