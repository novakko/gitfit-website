# GitFit Website

Marketing site for **GitFit** — the offline-first, privacy-first strength & nutrition tracker. Live at [gitfit.health](https://gitfit.health).

## Stack

React 19 · TypeScript · Vite 6 · Tailwind CSS 3.4 (npm build) · react-router-dom v7 (HashRouter) · lucide-react

Design system = the app's **Modern Neon** theme (dark `#0D0D1A`, purple `#9D4EDD`, cyan `#00D9FF`, magenta `#FF6FA3`, CTA gradient magenta→orange). Tokens live in `tailwind.config.js`; site facts/URLs in `config.ts`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & verify locally

```bash
npm run build
npm run preview  # serves dist/ on http://localhost:4173
```

## Deploy

GitHub Actions (`.github/workflows/deploy-pages.yml`) builds on push to `main` and publishes `dist/` to GitHub Pages (custom domain `gitfit.health` via `public/CNAME`).

> Note: all current work lives on `neon-redesign` (branched from `fix_index`, which is ahead of `main`). To ship: merge `fix_index` + `neon-redesign` into `main`, then push.

## Content rules

All marketing claims trace to the app's App Store listing / app repo docs (version, features, price, support email). Legal pages mirror the canonical policies in the app repo. Do not add claims that aren't verifiable there.
