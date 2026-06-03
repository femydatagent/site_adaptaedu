import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdaptaIA - Educação de qualidade para todos",
  description:
    "Adapte conteúdo escolar automaticamente para estudantes com necessidades de acessibilidade. IA que transforma educação em inclusão.",
  keywords: [
    "AdaptaIA",
    "educação inclusiva",
    "acessibilidade",
    "adaptação de conteúdo",
    "TEA",
    "TDAH",
    "educação especial",
  ],
  authors: [{ name: "AdaptaIA" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
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
        className={`${geistSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
