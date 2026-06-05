import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://adaptaia.com.br";
const siteTitle = "AdaptaIA - Educação de qualidade para todos";
const siteDescription =
  "Adapte conteúdo escolar automaticamente para estudantes com necessidades de acessibilidade. IA que transforma educação em inclusão.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
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
    icon: "/favicon.svg",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "AdaptaIA",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AdaptaIA",
  applicationCategory: "EducationApplication",
  operatingSystem: "Web",
  description: siteDescription,
  url: siteUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "teacher",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
