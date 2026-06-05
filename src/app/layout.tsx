import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://adaptaia.com.br";

// ─── SEO-optimized metadata ───────────────────────────────────────────────────
// Primary keyword: "adaptação de conteúdo educacional para acessibilidade"
// Secondary: "educação inclusiva escolas", "material adaptado TEA TDAH"
// Title: 58 chars — keyword-first, brand at end
const siteTitle = "Adaptação de Conteúdo Educacional com IA | AdaptaIA";

// Description: 155 chars — action + value prop + social proof
const siteDescription =
  "Adapte materiais escolares automaticamente para TEA, TDAH, Dislexia e mais 5 perfis. Usado por 500+ escolas brasileiras. Conforme o Decreto 12.773/25.";

const ogTitle = "AdaptaIA — IA que adapta conteúdo educacional para inclusão";
const ogDescription =
  "Faça upload de PDFs e DOCX e receba versões acessíveis para 8 perfis de necessidade em minutos. Para escolas particulares, públicas e professores.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | AdaptaIA",
  },
  description: siteDescription,
  keywords: [
    // Primary
    "adaptação de conteúdo educacional",
    "material adaptado para alunos com deficiência",
    "educação inclusiva escolas",
    "plataforma educação especial",
    // Secondary
    "adaptação para TEA",
    "material adaptado TDAH",
    "conteúdo acessível dislexia",
    "adaptação pedagógica inteligência artificial",
    "tecnologia assistiva educação",
    "AEE atendimento educacional especializado",
    // Long-tail
    "como adaptar material escolar para alunos com TEA",
    "ferramenta adaptação conteúdo escola inclusiva",
    "software educação especial escola particular",
    "decreto 12773 educação inclusiva",
    "adaptação de atividades para alunos com deficiência intelectual",
    // Brand
    "AdaptaIA",
    "adapta ia",
  ],
  authors: [{ name: "AdaptaIA", url: siteUrl }],
  creator: "AdaptaIA",
  publisher: "AdaptaIA",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: siteUrl,
    siteName: "AdaptaIA",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AdaptaIA — Plataforma de adaptação de conteúdo educacional com IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [`${siteUrl}/og-image.png`],
  },
};

// ─── JSON-LD: múltiplos schemas para máxima cobertura ─────────────────────────
const jsonLdGraph = [
  // 1. Organization
  {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "AdaptaIA",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/favicon.svg`,
    },
    description:
      "Plataforma de inteligência artificial para adaptação de conteúdo educacional para alunos com necessidades de acessibilidade.",
    foundingDate: "2024",
    areaServed: "BR",
    knowsAbout: [
      "Educação Inclusiva",
      "Tecnologia Assistiva",
      "Adaptação Pedagógica",
      "TEA",
      "TDAH",
      "Dislexia",
    ],
  },
  // 2. SoftwareApplication (enhanced)
  {
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#software`,
    name: "AdaptaIA",
    applicationCategory: "EducationApplication",
    applicationSubCategory: "Assistive Technology",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    description: siteDescription,
    url: siteUrl,
    inLanguage: "pt-BR",
    offers: [
      {
        "@type": "Offer",
        name: "Plano Professor",
        price: "50.00",
        priceCurrency: "BRL",
        priceValidUntil: "2026-12-31",
        description: "25 adaptações por mês para professores",
      },
      {
        "@type": "Offer",
        name: "Plano Escola",
        price: "500.00",
        priceCurrency: "BRL",
        priceValidUntil: "2026-12-31",
        description: "Multi-tenant para escolas com gestão de professores",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "500",
      bestRating: "5",
    },
    featureList: [
      "Adaptação para TEA",
      "Adaptação para TDAH",
      "Adaptação para Dislexia",
      "Adaptação para Discalculia",
      "Adaptação para Disgrafia",
      "Adaptação para Baixa Visão",
      "Adaptação para DI",
      "Adaptação para TPAC",
      "Upload de PDF e DOCX",
      "Exportação em PDF",
      "Dashboard de métricas",
      "Multi-tenant para escolas",
    ],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: ["teacher", "administrator", "school principal"],
    },
    publisher: { "@id": `${siteUrl}/#organization` },
  },
  // 3. WebSite com SearchAction
  {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "AdaptaIA",
    description: siteDescription,
    inLanguage: "pt-BR",
    publisher: { "@id": `${siteUrl}/#organization` },
  },
  // 4. FAQPage — otimizado para GEO (ChatGPT, Perplexity, Gemini)
  {
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é o AdaptaIA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AdaptaIA é uma plataforma de inteligência artificial que adapta automaticamente materiais educacionais para 8 perfis de acessibilidade: TEA, TDAH, TPAC, Deficiência Intelectual, Baixa Visão, Dislexia, Discalculia e Disgrafia. Professores fazem upload de PDFs ou DOCX e recebem versões adaptadas em minutos.",
        },
      },
      {
        "@type": "Question",
        name: "Como adaptar material escolar para alunos com TEA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para alunos com Transtorno do Espectro Autista (TEA), o AdaptaIA aplica automaticamente estrutura visual previsível, redução de estímulos excessivos, instruções claras e literais e apoios visuais consistentes. Basta fazer upload do material e selecionar o perfil TEA.",
        },
      },
      {
        "@type": "Question",
        name: "O AdaptaIA está em conformidade com a legislação de educação inclusiva?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O AdaptaIA foi desenvolvido em conformidade com o Decreto 12.773/25 e a legislação brasileira de educação inclusiva, que garante o direito de estudantes com deficiência a materiais pedagógicos acessíveis e tecnologias assistivas em todas as etapas da Educação Básica.",
        },
      },
      {
        "@type": "Question",
        name: "Qual é o preço do AdaptaIA para escolas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O plano Professor custa R$50/mês com 25 adaptações mensais e 3 adaptações gratuitas para testar. O plano Escola custa R$500/mês e inclui multi-tenant com gestão de professores, todos os 8 perfis de acessibilidade e dashboard de métricas. Redes de ensino têm plano sob consulta.",
        },
      },
      {
        "@type": "Question",
        name: "Quais tipos de arquivo o AdaptaIA aceita?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O AdaptaIA aceita PDFs, documentos DOCX e imagens. O material adaptado pode ser exportado em PDF ou DOCX, pronto para distribuição aos alunos.",
        },
      },
      {
        "@type": "Question",
        name: "Como o AdaptaIA ajuda escolas particulares?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para escolas particulares, o AdaptaIA oferece uma conta administrativa com gestão centralizada de professores, controle de uso, geração de pacotes de conteúdo adaptado por segmento (Fundamental I, II, Ensino Médio) e dashboard de métricas. É um diferencial competitivo que atende às demandas das famílias por inclusão real.",
        },
      },
    ],
  },
];

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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": jsonLdGraph,
            }),
          }}
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
