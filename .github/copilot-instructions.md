# Copilot / AI Agent Instructions for this repository

Purpose: help an AI coding agent be immediately productive in this Next.js + TypeScript repo.

Quick facts
- Framework: Next.js App Router (using `app/` directory). See `app/layout.tsx` and `app/page.tsx` for examples.
- Language: TypeScript (files use `.tsx`). See `tsconfig.json` and `package.json` devDependencies.
- Styling: Tailwind + PostCSS; global CSS lives in `app/globals.css` and Tailwind is configured via `postcss.config.mjs`.
- Assets: static assets served from `public/` and consumed with `next/image` (see `app/page.tsx`).

Project workflows (explicit commands)
- Development: `npm run dev` (runs `next dev`).
- Build: `npm run build` (runs `next build`).
- Production start: `npm run start` (runs `next start`).
- Linting: `npm run lint` (runs `eslint`).

Architecture & conventions
- App Router: create routes by adding folders under `app/` with `page.tsx` exports (example: add `app/about/page.tsx`).
- Layout & metadata: `app/layout.tsx` exports a `metadata` object (type `Metadata`) and a root layout — preserve this when adding nested layouts.
- Fonts: `next/font` is used (`Geist`, `Geist_Mono`) with CSS variables such as `--font-geist-sans`. Use those variables on `body` or component wrapper classes.
- Styling pattern: use Tailwind utility classes directly in `className`; prefer utilities over handcrafted CSS except for global variables in `app/globals.css`.
- Images: use `next/image` with `public/` paths (e.g., `/next.svg`, `/vercel.svg`) and pass `width`/`height` props.

Files to inspect for examples
- Route example: `app/page.tsx` (component structure, Tailwind usage, `next/image`).
- Layout example: `app/layout.tsx` (font injection, `metadata` export).
- Scripts and deps: `package.json` (scripts: `dev`, `build`, `start`, `lint`).
- Repo README: `README.md` (project bootstrap notes and common dev commands).

Integration points and external behavior
- Deployment: repo is a standard Next.js app suitable for Vercel (see `README.md`).
- CSS pipeline: Tailwind + PostCSS; changes to Tailwind config or PostCSS need to respect `postcss.config.mjs`.
- Linter: `eslint` is present but there is no preconfigured `--fix` script; run `npm run lint` and add file paths if needed.

What an AI should do first (practical checklist)
1. Run `npm install` then `npm run dev` to validate runtime assumptions.
2. Open `app/page.tsx` and `app/layout.tsx` to mirror patterns when adding routes/components.
3. When adding pages, export a default React component from `app/<route>/page.tsx` and add optional `metadata` or `layout.tsx` for nested behaviour.
4. Use `next/image` for images and `public/` for static files.

Patterns to follow (do not invent)
- Keep TypeScript types consistent with Next's types (e.g., `Metadata`, `React.ReactNode` as used in `app/layout.tsx`).
- Prefer Tailwind utility classes; match the dark/light class patterns used in `app/page.tsx`.

Limitations discovered
- No test runner is present in `package.json`; do not add test instructions unless explicitly requested.
- Lint script is minimal; CI or pre-commit hooks are not present in the repo.

If you modify build or lint behavior
- Update `package.json` scripts and mention the change in this file so future AI agents notice the canonical workflow.

Questions for maintainers (if unclear)
- Do you want a recommended `lint:fix` or a test framework added to `package.json`?
- Any preferred folder structure beyond the root `app/` (e.g., `components/`, `lib/`)?

If anything above is out-of-date, reply with the files or commands to inspect and I'll update this guidance.
