import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY as string,
  process.env.MAILJET_SECRET_KEY as string
);

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, message }: ContactPayload = await req.json();

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "Champs manquants" }),
        { status: 400 }
      )
    }

    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAIL_FROM,
            Name: "Formulaire Site",
          },
          To: [
            {
              Email: process.env.MAIL_TO,
              Name: "Contact Pro",
            },
          ],
          Subject: "Nouveau message de contact",
          TextPart: `
Nom: ${name}
Email: ${email}

Message:
${message}
          `,
          HTMLPart: `
            <h3>Nouveau message</h3>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Téléphone :</strong> ${phone}</p>
            <p><strong>Message :</strong><br/>${message}</p>
          `,
        },
      ],
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Mailjet error:", error);
    return new Response(
      JSON.stringify({ error: "Erreur serveur" }),
      { status: 500 }
    );
  }
}