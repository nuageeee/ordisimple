import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/headers";
import { auth } from "@/lib/auth";
import Script from "next/script";
import { headers } from "next/headers";
import { Footer } from "@/components/footers";


export const metadata: Metadata = {
  title: "Ordi'Simple",
  description: "Entreprise de réparation et de maintenance informatique.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  return (
    <html lang="fr" data-theme="light">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <script defer src="http://umami.ordisimple.com/script.js" data-website-id="82c61f8f-b0f0-4b81-8e96-7e8237623f42"></script>
      </head>
      <body className="flex flex-col min-h-screen">
        <Header session={session} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
