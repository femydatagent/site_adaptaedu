---
date: 2026-06-05
---

# Architecture — AdaptaIA

## Design Pattern: Static SPA with State-Based Routing

The app is a single-page React application that simulates multi-page navigation using React `useState`. There is no URL-based routing — no Next.js `<Link>`, no `useRouter()`.

### Routing Model

```
src/app/page.tsx (HOME)
│
├── <Landing onNavigateEscolas={goToEscolas} />
│
└── <Escolas onNavigateHome={goToHome} />
```

A single `'use client'` component in `src/app/page.tsx` holds state `currentPage` (type `'home' | 'escolas'`) and conditionally renders either the Landing or Escolas component. Each component accepts a navigation callback prop.

## Layer Architecture

### Layer 1: Page Components (Presentation)

| File | Lines | Role |
|------|-------|------|
| `src/components/landing.tsx` | ~890+ | Main marketing landing page — hero, pipeline, profiles, plans, testimonials, footer |
| `src/components/escolas.tsx` | 687 | Schools management page — mock dashboard, features, packages, grades |
| `src/components/fade-in.tsx` | ~20 | Reusable `FadeIn` wrapper using `framer-motion` `whileInView` |

All page components are `'use client'` — they contain `useState`, `useEffect`, event handlers, and browser APIs.

### Layer 2: App Root

| File | Lines | Role |
|------|-------|------|
| `src/app/layout.tsx` | 274 | Root layout — metadata, JSON-LD schemas (Organization, SoftwareApplication, FAQPage), font setup, OpenGraph, social tags |
| `src/app/page.tsx` | 25 | State-based router — single source of truth for page switching |
| `src/app/globals.css` | 117 | Tailwind v4 import, CSS custom properties, utility classes |

### Layer 3: API / Data

- `src/app/api/route.ts` — stub GET endpoint (5 lines, returns `Hello, world!`)
- `src/lib/db.ts` — Prisma client singleton (SQLite)
- `prisma/schema.prisma` — User + Post models (not used anywhere in the UI)

### Layer 4: Blog (Server Component)

| File | Lines | Role |
|------|-------|------|
| `src/app/blog/page.tsx` | 92 | Blog listing — renders static `posts` array from `posts.ts` |
| `src/app/blog/posts.ts` | 259 | Static blog content — 5 posts with full markdown content, keywords, metadata |
| `src/app/blog/[slug]/page.tsx` | — | Individual post renderer (dynamic route) |
| `@mdxeditor/editor` | — | Installed for blog post editing |

## Data Flow

```
User action → setState in page.tsx → React re-renders → conditional component
  (Landing ↔ Escolas toggle, or blog listing)
```

There is **no data fetching** in production components. All content is static:
- Marketing copy is hard-coded in module-level constants in `landing.tsx`
- Pricing data is a JavaScript array
- Testimonials are hard-coded
- Blog posts are a TypeScript array
- Dashboard stats in `escolas.tsx` are mock data

The Prisma + API route layer exists but is not wired to any UI interaction.

## Component Composition

No sub-components. Each page component contains ALL sections as inline JSX within a single function. The components are monolithic:
- `landing.tsx`: hero, pipeline, profiles, content-adaptation, school-types, legal, stats, testimonials, plans → all in one ~900-line file
- `escolas.tsx`: hero, control-features, subjects, packages, how-it-works, dashboard-mockup, benefits, cta, footer → all in one 687-line file

The only exception is `<FadeIn>` which wraps sections for scroll animations.

## Entry Points

1. **`src/app/layout.tsx`** — Root layout with metadata and JSON-LD
2. **`src/app/page.tsx`** — App root, state router
3. **`src/app/globals.css`** — Global styles, CSS vars
4. **`src/app/blog/page.tsx`** — Blog listing page (static route)

## Key Architectural Decisions

1. **No Next.js router** — State-based page switching keeps the SPA simple but means no deep-linking, no browser history, and no SEO for the second "page" (Escolas)
2. **Server components only for blog** — Blog pages are server components (no `'use client'`), which is correct for SEO
3. **No API integration** — The Prisma + API route layer is disconnected from UI; all data is static
4. **shadcn/ui primitives prepared but unused** — 48 UI components exist in `src/components/ui/` but page-level components use raw Tailwind classes instead
