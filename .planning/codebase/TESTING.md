---
date: 2026-06-05
---

# Testing — AdaptaIA

## Current State

**NO TESTS EXIST.** No test files, no test configuration, no coverage tooling.

### What's Installed but Unused

| Package | Test Role | Used? |
|---------|-----------|-------|
| `@tanstack/react-query` | Testing utilities | No |
| Vitest/Jest | Test runner | Not in `devDependencies` |
| Playwright | E2E testing | Not installed |
| `@testing-library/*` | React testing | Not installed |
| `prisma` | `prisma generate` for testing | Schema exists |

### Build/CI Scripts

No test commands in `package.json`:
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

No `test`, `test:coverage`, or `test:e2e` scripts. No CI/CD pipeline files (`.github/workflows/` not present).

## Codebase Characteristics Relevant to Testing

### Components That Would Need Testing

| Component | Testability | Complexity |
|-----------|-------------|------------|
| `src/components/landing.tsx` | High — pure rendered output, static data | Very high (~900 lines, many sections) |
| `src/components/escolas.tsx` | High — pure rendered output, static data | High (687 lines) |
| `src/app/page.tsx` | Medium — state + conditional rendering | Low (25 lines) |
| `src/app/blog/page.tsx` | High — server component, static | Low (92 lines) |
| `src/app/blog/posts.ts` | Low — data only | Low |
| `src/components/fade-in.tsx` | Medium — framer-motion dependency | Very Low |

### Testable Units (if tests were written today)

1. **State transitions** in `page.tsx` — home ↔ escolas toggle
2. **Navigation callbacks** — verify callbacks fire on button clicks
3. **Data integrity** — `posts` array has required fields, no duplicates
4. **Type safety** — TypeScript compilation passes
5. **Accessibility** — aria-labels, semantic elements, heading hierarchy

## What's NOT Tested

| Area | Status |
|------|--------|
| Unit tests for any component | None |
| Integration tests for page switching | None |
| E2E tests for user flows | None |
| API route tests | None |
| Prisma schema tests | None |
| Build test (ci) | None |
| Lint check (ci) | None |

## Recommended Testing Approach

Given the static, presentation-only nature of the codebase:

1. **Component tests** (Vitesting): Verify Landing and Escolas render without errors and render key text content
2. **E2E tests** (Playwright): Test page navigation (home → escolas), blog listing, scroll behavior
3. **API tests**: Verify `api/route.ts` returns proper JSON response
4. **Build check**: `bun run build` in CI as a regression gate

## Coverage Target (Recommended)

Given the current state:
- 100% of data files (`posts.ts`, `page.tsx` state)
- 100% of render paths for Landing and Escolas components
- All navigation flows (page switching, blog access)
- API route response verification
