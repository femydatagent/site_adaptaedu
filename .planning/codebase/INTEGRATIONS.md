---
date: 2026-06-05
---

# Integrations — AdaptaIA

## Direct Integrations

| Integration | Location | Status |
|-------------|----------|--------|
| **Prisma (SQLite)** | `prisma/schema.prisma` → `src/lib/db.ts` | Wired; schema defined but no models referenced in UI code |
| **API route** | `src/app/api/route.ts` | GET only, returns `{ message: "Hello, world!" }` |

## CDN & External Assets

| Asset | Location | Notes |
|-------|----------|-------|
| **Google Fonts (Geist)** | `src/app/layout.tsx` — `Geist({ variable: "--font-geist-sans" })` | Loaded from fonts.googleapis.com |
| **favicon** | `public/favicon.svg` — external URL `z-cdn.chatglm.cn` | Referenced in `layout.tsx` metadata; should be replaced with local asset before production |

## Infrastructure

| Service | Location | Notes |
|---------|----------|-------|
| **Caddy** | `Caddyfile` | Reverse proxy to localhost:3000 with dynamic port support via `XTransformPort` query param |
| **Standalone Next.js** | `next config: output: "standalone"` | Built output copies `.next/static` and `public` into standalone directory |

## Installed but Not Wired

The following are in `package.json` but not imported or configured in any source file:

- `@tanstack/react-query` — server state management
- `@tanstack/react-table` — data table rendering
- `z-ai-web-dev-sdk` — AI SDK for web development
- `zustand` — global state
- `next-auth` — authentication (v4)
- `next-intl` — internationalization
- `recharts` — charting
- `sonner` — toast notifications
- `cmdk` — command palette
- `vaul` — drawer
- `embla-carousel-react` — carousel
- `react-day-picker` — date picker
- `react-syntax-highlighter` — code syntax highlighting
- `input-otp` — OTP input field
- `react-resizable-panels` — resizable panel layout
- `@dnd-kit/*` — drag-and-drop
- `react-hook-form` + `@hookform/resolvers` — form library

These 15+ packages add to bundle size without providing functionality. Consider tree-shaking or removal.

## Planned Integrations (mentioned in metadata but not implemented)

| Feature | Where mentioned | Implementation status |
|---------|----------------|----------------------|
| **AI content adaptation** | `z-ai-web-dev-sdk`, landing page copy | Not implemented — copy describes future functionality |
| **Payment/subscription** | Pricing plans in `landing.tsx` (Professor R$50/mo, Escola R$500/mo) | No Stripe/Payment provider wired |
| **Multi-tenant school management** | Escolas page dashboard, plans | Fully mock/static — no real data |
| **School registration/auth** | "Agendar demonstração" buttons | No auth or registration flow |
| **File upload (PDF/DOCX)** | Landing copy describes upload → adapt → download flow | Not implemented |
| **Blog CMS** | `src/app/blog/` with MDX editor | Static posts from `posts.ts`; no CMS backend |
| **Analytics** | None configured | No GA, PostHog, or similar |
