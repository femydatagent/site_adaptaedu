---
date: 2026-06-05
---

# Concerns — AdaptaIA

## CRITICAL

### 1. No Functional Backend

The entire app is a frontend mockup with zero backend integration.

- `src/app/api/route.ts` returns `{"message": "Hello, world!"}` — a placeholder
- Prisma models (`User`, `Post`) exist but are never imported or used in any component
- `src/lib/db.ts` has a Prisma client singleton but no queries reference it
- All "features" described in marketing copy (upload → adapt → download) are purely UI descriptions with no implementation

**Impact**: The product cannot process any documents. Every core value proposition is unimplemented.

**Fix needed**: Implement the AI content adaptation pipeline — file upload, content extraction, AI processing, adaptive formatting, and download.

### 2. No Payment Integration

Pricing plans are displayed but no checkout flow exists:
- Landing page shows R$50/mo (Professor) and R$500/mo (Escola) plans
- `layout.tsx` JSON-LD includes pricing in BRL
- No Stripe, MercadoPago, or any payment provider is integrated
- "Começar Grátis" and "Teste Grátis" buttons are non-functional — no `onClick` or `href`

### 3. Hardcoded Marketing Numbers

Social proof figures are fabricated:
- `+500 Escolas` in landing page
- `+12.000 Alunos Impactados` 
- `4.9/5 Professores` rating
- Dashboard stats mock data: `1.247 conteúdos`, `855 adaptações`, `24 professores`
- Testimonials with real-sounding names but unverifiable sources

## HIGH

### 4. Monolithic Components

| File | Lines | Concerns |
|------|-------|----------|
| `landing.tsx` | ~900 | Hero, pipeline, profiles, content-adaptation, schools, legal, stats, testimonials, plans, footer — all in one component |
| `escolas.tsx` | 687 | Hero, control features, subjects, packages, how-it-works, dashboard mockup, benefits, CTA, footer — all in one component |

- No sub-component decomposition
- Difficult to test or maintain
- Difficult to re-use sections independently
- No storybook or visual regression setup

### 5. Massive Unused Dependency Surface

**15+ packages installed but never imported or used:**
- `@tanstack/react-query`, `@tanstack/react-table`, `zustand` — state management
- `next-auth`, `next-intl` — auth/i18n
- `recharts`, `sonner`, `cmdk`, `vaul`, `embla-carousel`, `react-day-picker`, `react-syntax-highlighter`, `input-otp`, `react-resizable-panels`
- `@dnd-kit/*` (3 packages) — drag-and-drop
- `z-ai-web-dev-sdk` — AI SDK not wired in
- `react-hook-form` + `@hookform/resolvers` — form library

**Impact**: Increased bundle size, dependency attack surface, slower `bun install`.

### 6. shadcn/ui Primitives Prepared But Unused

48 components exist in `src/components/ui/` but page-level components use raw Tailwind classes. This creates:
- Maintenance burden (maintaining components you don't use)
- Inconsistent design token usage (some places use CSS vars, others don't)

### 7. No Error Handling or Error Pages

- No `error.tsx` or `not-found.tsx` in the app
- No `React.ErrorBoundary` wrapping
- No try/catch anywhere in components
- No loading/error states in the UI

### 8. All Button Links Are Void

Multiple buttons have `href="#"` or no handler at all:
- `page.tsx:l214` — Logo links to `#`
- `landing.tsx:l218` — "Para Escolas" navigation (uses `Building2` icon, links to section anchor)
- `landing.tsx:social links` — "Política de Privacidade", "Termos de Uso", "LGPD" all `href="#"`
- Multiple CTA buttons: "Adaptar Conteúdo Grátis", "Ver Como Funciona", "Entrar" — no click handlers
- `escolas.tsx:school footer` — privacy, terms, LGPD links are `href="#"`

### 9. ESLint Nearly Fully Disabled

`eslint.config.mjs` disables ~25 rules across TypeScript, React, and JavaScript categories. Effectively, linting provides zero protection against common issues.

## MEDIUM

### 10. SEO: Fake AggregateRating JSON-LD

`layout.tsx` includes structured data claiming a 4.9/5 rating from 500 reviews. This is fabricated data that could violate search engine guidelines and trigger manual penalties.

### 11. Missing OG Image

OpenGraph metadata references `${siteUrl}/og-image.png` but the file does not exist in `public/`. A programmatic OG image component exists at `src/app/opengraph-image.tsx` but is not generating a static file.

### 12. Footer Copyright Inconsistency

- `landing.tsx` uses "© 2026 AdaptaIA. Todos os direitos reservados." (line ~920)
- `escolas.tsx` uses "2026 AdaptaIA. Todos os direitos reservados." (line 681) — different format
- Blog footer uses "© 2026 AdaptaIA. Todos os direitos reservados." (line 88)

### 13. Blog Content Is Static, Not CMS-Driven

- 5 blog posts with 3KB+ of markdown each in `posts.ts`
- `@mdxeditor/editor` is installed suggesting planned server-side editing
- No CMS, no git-based content, no API to manage posts
- Blog content is part of the application bundle

### 14. Security: `dangerouslySetInnerHTML` for JSON-LD

`layout.tsx` uses `dangerouslySetInnerHTML` to inject JSON-LD. While the content is server-compiled, no sanitization layer exists and it's a pattern that could become unsafe if content sources change.

### 15. External Favicon

The favicon references `https://z-cdn.chatglm.cn/...` (an external CDN from a Chinese AI company). This should be replaced with a local asset before production.

### 16. Privacy/Terms/LGPD Links Point Nowhere

Footer navigation links to privacy policy, terms, and LGPD pages that don't exist. For a Brazilian edtech platform claiming legal compliance, these pages are essential.

### 17. No Analytics

No Google Analytics, PostHog, or similar. The product describes user-facing metrics (80% adoption rate, 500+ schools) with no way to verify them.

## LOW

### 18. `bun-types` in devDependencies

`"bun-types": "^1.3.4"` in devDependencies suggests TypeScript type definitions for Bun runtime — but the app uses standard Node/Bun APIs. Could rely on standard `@types/node` instead.

### 19. No `.env.example`

No example environment file to document required variables. `DATABASE_URL` is used in `prisma/schema.prisma` but there's no visible template.

### 20. `next.config.ts` Sets `reactStrictMode: true`

AGENTS.md notes `reactStrictMode: false` but the actual `next.config.ts` shows `reactStrictMode: true`. These are contradictory.

### 21. WebSocket Spike Left in Repo

`examples/websocket/` contains a WebSocket spike that's not wired into the app. Dead code left behind from experimentation.
