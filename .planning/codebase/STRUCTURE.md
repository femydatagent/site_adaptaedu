---
date: 2026-06-05
---

# Structure — AdaptaIA

## Directory Layout

```
site_adapataai/
├── src/
│   ├── app/                      # Next.js App Router root
│   │   ├── layout.tsx            # Root layout — metadata, fonts, JSON-LD, body
│   │   ├── page.tsx              # State-based router — Landing ↔ Escolas toggle
│   │   ├── globals.css           # Tailwind v4 import, CSS vars, custom utilities
│   │   ├── sitemap.ts            # Sitemap generation
│   │   ├── opengraph-image.tsx   # OpenGraph image generation
│   │   ├── api/
│   │   │   └── route.ts          # Stub API route (GET → "Hello, world!")
│   │   └── blog/                 # Blog route group
│   │       ├── page.tsx          # Blog listing page
│   │       ├── posts.ts          # Static blog posts content
│   │       └── [slug]/
│   │           └── page.tsx      # Single post page (dynamic route)
│   ├── components/               # Page-level React components
│   │   ├── landing.tsx           # Main landing page (~890 lines)
│   │   ├── escolas.tsx           # Schools management page (687 lines)
│   │   └── fade-in.tsx           # FadeIn animation wrapper
│   ├── hooks/                    # Custom React hooks
│   │   ├── use-mobile.ts         # Mobile breakpoint hook
│   │   └── use-toast.ts          # Toast notification hook
│   └── lib/                      # Shared utilities
│       ├── db.ts                 # Prisma client singleton
│       └── utils.ts              # `cn()` helper for conditional Tailwind classes
├── prisma/
│   └── schema.prisma             # Prisma schema — User + Post models (unused in UI)
├── public/                       # Static assets
│   ├── favicon.svg               # Site icon
│   ├── logo.svg                  # Brand logo
│   ├── robots.txt                # SEO robots directive
│   └── sitemap.xml               # Manual sitemap
├── src/components/ui/            # shadcn/ui primitives (48 files)
│   ├── accordion.tsx
│   ├── alert-dialog.tsx
│   ├── aspect-ratio.tsx
│   ├── avatar.tsx
│   ├── badge.tsx
│   ├── breadcrumb.tsx
│   ├── button.tsx
│   ├── calendar.tsx
│   ├── card.tsx
│   ├── carousel.tsx
│   ├── chart.tsx
│   ├── checkbox.tsx
│   ├── collapsible.tsx
│   ├── command.tsx
│   ├── context-menu.tsx
│   ├── dialog.tsx
│   ├── drawer.tsx
│   ├── dropdown-menu.tsx
│   ├── form.tsx
│   ├── hover-card.tsx
│   ├── input-otp.tsx
│   ├── input.tsx
│   ├── label.tsx
│   ├── menubar.tsx
│   ├── navigation-menu.tsx
│   ├── pagination.tsx
│   ├── popover.tsx
│   ├── progress.tsx
│   ├── radio-group.tsx
│   ├── resizable.tsx
│   ├── scroll-area.tsx
│   ├── select.tsx
│   ├── separator.tsx
│   ├── sheet.tsx
│   ├── sidebar.tsx
│   ├── skeleton.tsx
│   ├── slider.tsx
│   ├── sonner.tsx
│   ├── switch.tsx
│   ├── table.tsx
│   ├── tabs.tsx
│   ├── textarea.tsx
│   ├── toast.tsx
│   ├── toggle-group.tsx
│   ├── toggle.tsx
│   └── tooltip.tsx
├── examples/                     # Non-production experiments
│   └── websocket/                # WebSocket spike (not wired in)
├── .zscripts/                    # Dev scripts
│   ├── dev.sh                    # Development launch
│   ├── build.sh                  # Build script
│   └── start.sh                  # Production startup
├── Caddyfile                     # Caddy reverse proxy config
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind v4 theme config
├── tsconfig.json                 # TypeScript config with @/* alias
├── package.json                  # Dependencies and scripts
├── prisma/
│   └── schema.prisma             # Prisma schema
└── db/
    └── custom.db                 # SQLite database file
```

## Key File Locations

| Concern | File |
|---------|------|
| Global CSS / design tokens | `src/app/globals.css` |
| Site metadata / SEO | `src/app/layout.tsx` |
| Page routing | `src/app/page.tsx` |
| Landing page | `src/components/landing.tsx` |
| Schools page | `src/components/escolas.tsx` |
| Shadcn primitives | `src/components/ui/` |
| Database/Prisma | `src/lib/db.ts`, `prisma/schema.prisma` |
| API endpoint | `src/app/api/route.ts` |
| Blog content | `src/app/blog/posts.ts` |
| Blog listing | `src/app/blog/page.tsx` |
| Blog single post | `src/app/blog/[slug]/page.tsx` |
| Utility helper | `src/lib/utils.ts` |
| Animations | `src/components/fade-in.tsx` |

## Naming Conventions

- **Components**: PascalCase, single default export per file (`Landing`, `Escolas`, `FadeIn`)
- **Hooks**: `useCamelCase` (`use-mobile.ts`, `use-toast.ts`)
- **CSS custom properties**: `--kebab-case` (`--color-primary`, `--radius-md`)
- **Tailwind classes**: standard shorthand (`bg-amber-500`, `text-muted-foreground`, `shadow-lg`)
- **Pages**: kebab-case directory names (`blog`, `api`)
- **Dynamic routes**: bracket notation (`[slug]`)

## Module Organization

- **No barrel exports** — each file is imported individually
- **No sub-component decomposition** — all page sections are inline JSX within a single large component per page
- **Data arrays at module level** — `profiles`, `plans`, `testimonials` etc. are top-level const arrays in their component files, not fetched or stored separately
- **No index.ts re-exports** — components are imported by filename directly
