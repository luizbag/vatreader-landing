# AGENTS.md

## Commands
- Install: `pnpm install` (pnpm 10.15.1; use `corepack pnpm` if pnpm is not on PATH)
- Dev: `pnpm dev` (Turbopack, http://localhost:3000)
- Build: `pnpm build` (compiles, type-checks, prerenders static pages)
- Migrate: `pnpm migrate` (runs `scripts/migrate.mjs` against `POSTGRES_URL`)
- Start (prod): `pnpm start`
- Typecheck: `npx tsc --noEmit` (no script exists)
- Lint: `pnpm lint` runs `next lint`, but no ESLint config is tracked, so it prompts interactively. Do not rely on it in CI or non-interactive runs.

## Package manager
- Canonical lockfile is `pnpm-lock.yaml`; `packageManager` pins pnpm@10.15.1.
- `package-lock.json` is npm-generated/untracked; do not commit it.
- Generated artifacts (`.next/`, `*.tsbuildinfo`, `next-env.d.ts`) are gitignored; do not edit or commit them.

## Structure
- Next.js 15 (App Router), React 19.
- Route groups: `app/(default)` (marketing pages + Header/Footer/AOS) and `app/(auth)` (signin/signup/reset-password).
- Shared UI in `components/` and `components/ui/`. Import alias `@/*` maps to repo root.
- API route: `app/api/waitlist/route.ts` (POST, validates email, stores in Vercel Postgres).
- Root layout `app/layout.tsx` loads `app/css/style.css` and the Inter font.

## Styling
- Tailwind v4 is CSS-first: no `tailwind.config.*`. Theme tokens, `@theme`, and `@plugin "@tailwindcss/forms"` live in `app/css/style.css` plus `app/css/additional-styles/*`.
- PostCSS uses `@tailwindcss/postcss` (`postcss.config.js`).

## Quirks
- `app/(default)/layout.tsx` is a client component that initializes AOS; keep `"use client"`.
- No test suite or test runner is configured; `pnpm build` is the main verification.
- `next lint` is deprecated (removed in Next.js 16); the migration has not been done.
- Waitlist API requires `POSTGRES_URL` (Vercel Postgres); see `.env.example`.