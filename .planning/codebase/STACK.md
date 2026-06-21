---
date: 2026-06-05
scope: full-repo
---

# Stack — AdaptaIA

## Overview

Next.js 16 + React 19 + Tailwind v4 + shadcn/ui landing site for an AI-powered educational content accessibility platform. Two-page SPA (Landing + Escolas) with client-side state-based routing.

## Languages & Runtime

| Item | Version / Detail |
|------|-----------------|
| **TypeScript** | ^5 (target ES2017, strict mode on) |
| **React** | 19.0.0 (Client Components) |
| **Next.js** | 16.1.1 (App Router, standalone output) |
| **Bun** | Runtime (no npm/yarn — bun.lock present) |

## Backend & Data

| Item | Version / Detail |
|------|-----------------|
| **Prisma** | ^6.11.1 (SQLite provider) |
| **SQLite** | File database (`db/custom.db`, via `DATABASE_URL` env var) |
| **API route** | Single GET endpoint at `src/app/api/route.ts` (returns JSON `Hello, world!`) |

## Frontend Stack

| Package | Purpose |
|---------|---------|
| `tailwindcss` ^4 + `@tailwindcss/postcss` | Utility CSS (v4, `@import "tailwindcss"` syntax) |
| `tailwindcss-animate` + `tw-animate-css` | Animation utilities |
| `class-variance-authority` + `tailwind-merge` | Variant-based component styling |
| shadcn/ui | 48 primitive components in `src/components/ui/` |
| `framer-motion` | Scroll-triggered `FadeIn` animations |
| `lucide-react` | Icon library (all icons throughout app) |
| `z-ai-web-dev-sdk` | AI integration (not yet wired into app) |

## State & Data Management

| Package | Purpose |
|---------|---------|
| `zustand` | Client-side store (not yet used in app components) |
| `@tanstack/react-query` | Server state caching (not yet used) |
| `@tanstack/react-table` | Table utilities (not yet used) |
| `react-hook-form` + `@hookform/resolvers` + `zod` | Form handling + validation schemas |

## UI Libraries

| Package | Purpose |
|---------|---------|
| `cmdk` | Command palette (not yet used) |
| `vaul` | Drawer component (not yet used) |
| `embla-carousel-react` | Carousel (not yet used) |
| `recharts` | Charts (not yet used) |
| `date-fns` + `react-day-picker` | Date picking |
| `next-themes` | Theme switching (not yet used) |
| `input-otp` | OTP input |
| `react-resizable-panels` | Resizable panels |
| `react-syntax-highlighter` | Code highlighting |
| `react-markdown` | Markdown rendering |
| `@mdxeditor/editor` | MDX editor (blog infrastructure) |
| `sonner` | Toast notifications |

## Navigation Routing

| Package | Purpose |
|---------|---------|
| `next-intl` | Internationalization (installed, not configured) |
| `next-auth` v4 | Authentication (installed, not configured) |
| `@dnd-kit/*` | Drag-and-drop utilities (not yet used) |

## Configuration & Tooling

| File | Purpose |
|------|---------|
| `next.config.ts` | Standalone output, `reactStrictMode: true` |
| `tailwind.config.ts` | Content globbing, shadcn color variables, dark mode class |
| `postcss.config.mjs` | `@tailwindcss/postcss` plugin |
| `tsconfig.json` | `@/*` path alias → `./src/*`, isolatedModules, strict |
| `eslint.config.mjs` | Extends `eslint-config-next`, ~25 rules disabled |
| `components.json` | shadcn/ui "new-york" style, `@/alias` wiring |
| `Caddyfile` | Reverse proxy → localhost:3000 (with dynamic port via query param) |

## Dev Scripts

```json
"dev": "next dev -p 3000 2>&1 | tee dev.log"
"build": "next build && cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/"
"start": "NODE_ENV=production bun .next/standalone/server.js 2>&1 | tee server.log"
"lint": "eslint ."
"db:push": "prisma db push"
"db:generate": "prisma generate"
"db:migrate": "prisma migrate dev"
"db:reset": "prisma migrate reset"
```

## Unused Dependencies (likely bloat)

- `@dnd-kit/*` (3 packages) — no drag-and-drop in app
- `@tanstack/react-query`, `@tanstack/react-table` — no data-fetching or data tables
- `z-ai-web-dev-sdk` — AI SDK not wired in
- `zustand` — no global state used
- `next-auth` — no auth configured
- `next-intl` — no internationalization
- `react-day-picker`, `react-syntax-highlighter`, `sonner`, `cmdk`, `vaul`, `embla-carousel`, `recharts`, `input-otp`, `react-resizable-panels`, `react-hook-form` — all installed but not imported
