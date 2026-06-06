import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conexões em Cores | Exposição de Arte",
  description: "Exposição coletiva de pinturas, fotografias e artes digitais na Biblioteca Pública de Santa Catarina. De 1 a 30 de abril de 2026. Entrada gratuita.",
  keywords: ["exposição de arte", "Conexões em Cores", "arte contemporânea", "pintura", "fotografia", "arte digital", "Florianópolis", "Santa Catarina", "BPSC"],
  authors: [
    { name: "Orlando Castro" },
    { name: "Alessandra Rodrigues" },
    { name: "Mauricio Riqué" },
    { name: "Kamalini Nazareth" },
    { name: "Wesley Carvalho" },
  ],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Conexões em Cores | Exposição de Arte",
    description: "Mostra coletiva de pinturas, fotografias e artes digitais. De 1 a 30 de abril de 2026 na Biblioteca Pública de Santa Catarina.",
    url: "https://cultura.sc.gov.br",
    siteName: "Conexões em Cores",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conexões em Cores | Exposição de Arte",
    description: "Mostra coletiva de pinturas, fotografias e artes digitais na BPSC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
