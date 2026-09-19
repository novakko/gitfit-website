# GitFit Website Neon Redesign — Implementation Plan (v3, validated)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**v3 changelog (iteration 3 — mechanical validation):** all risky commands dry-run verified: og-image recipe yields exactly 1200×630 (`sips --resampleWidth 1200` + `sips -c 630 1200`); badge `sips -Z 220` → 86 KB / 216×220 (≤200 KB gate holds); `tailwindcss@3.4.19` confirmed in npm registry; instagram.com/gitfit.app returns 301 (IG login wall — existence unverifiable non-JS; keep as carry-over from live site, not a regression). Execution mode: **inline (superpowers:executing-plans)** — visual verification requires main-agent browser-use (subagents cannot drive the browser), and tasks share one design system; research/critique subagents already used in planning.

**v2 changelog (iteration 2):** CSS entry point fixed (root `index.css` imported by root `index.tsx` — repo has no `src/`); store-shot mapping corrected (3=progress, 6=challenges); "no purchase mentions" constraint rescoped to marketing pages (legal pages exempt, canonical text preserved); `config.ts`/`index.css` live at repo root; explicit `git add` paths + early deletion of stale 3.4 MB PNGs; CTA gradient 90deg (Flutter `centerLeft→centerRight`); "400 exercises" exact + Apple Health reads-only; explicit og-image sips recipe; badge resize gate; `<Link to="/how-to">` + no-raw-hash-anchor rule; navbar pinned `h-16`; junk npm token removed; pillar accents per observed screens; Terms = targeted fix only, Privacy = full resync; `tsc --noEmit` added to gates; docs/ + orphan sweep in Task 8.

**Goal:** Rebuild gitfit-website (React 19 + Vite + TS, GitHub Pages) as a dark "Modern Neon" site matching GitFit app v1.1.3 design tokens, features and messaging exactly.

**Architecture:** Same SPA shell (HashRouter, fixed `h-16` navbar + `pt-16` main, footer), neon token layer via npm Tailwind 3.4 (root `index.css`, imported first in `index.tsx`, replacing Play CDN), one root `config.ts` source of truth, real App Store assets (8 official neon screenshots, 12 badges, program hero images), Privacy fully re-synced from app-repo canonical policy, Terms targeted fix.

**Tech Stack:** React 19, Vite 6, TypeScript, react-router-dom v7 (HashRouter), tailwindcss 3.4 (npm) + PostCSS + Autoprefixer, lucide-react.

## Global Constraints

- App repo `~/Repo/gitfit-progress-power` is READ-ONLY. Copy assets OUT of it; never write into it.
- Design tokens (exact, from app `app_theme.dart` unless noted): bg `#0D0D1A`; page gradient `#1A1A2E→#0D0D1A` 135deg (topLeft→bottomRight); surface `#1A1A2E`@70%; purple `#9D4EDD` (deep `#5E2B94`, soft `#EEDCFF`); cyan `#00D9FF` (soft `#B8F4FF`); magenta `#FF6FA3` (deep `#4F1237`, soft `#FFDAE8`); **CTA gradient 90deg** `#FF6FA3→#FF9500` (Flutter default alignment); banner gradient 135deg `#9D4EDD→#00D9FF`; line `#2A2A4A` / soft `#1F1F36`; muted text `#B7B7D4`; lime `#00FF88`; orange `#FF9500`; blue `#4D9FFF`; lavender `#C6A5FF`; radius 20px cards/buttons; glows accent@12% blur12 offset(0,4) / @25% blur20 spread2 offset(0,6) / rim @35% blur8.
- Marketing-page facts that MUST NOT drift: App Store URL `https://apps.apple.com/us/app/gitfit-health/id6757233673`; app version "1.1.3" (store release 2026-09-18); iOS 16+; price **Free** ("No subscriptions, no locked features, and no ads. Just results." — verbatim from **live** store listing, not the repo txt); support email `support@gitfit.health`; tagline "Your gym. Your rules. Your data."; Apple Health **reads** (never "read/write" in marketing copy); exercise catalog is exactly **400** exercises; NO Android availability claims. **Scope:** these constraints apply to Home/HowTo/FAQ/Contact/Navbar/Footer/meta only — `pages/Privacy.tsx` and `pages/Terms.tsx` carry canonical legal text (which mentions the historical "Support Developer" purchase) and are exempt from the no-purchase rule; do not edit policy wording.
- Routing stays HashRouter; navbar exactly `h-16` (main uses `pt-16`); **no raw `#`-fragment anchors anywhere** (HashRouter eats them) — cross-page = `<Link to>`, in-page nav avoided; CI workflow unchanged; CNAME/.nojekyll preserved.
- Branch: `neon-redesign` from `fix_index`. Commit after every task (explicit paths, never bare `git add .`). Never push.
- Verification per task: `npm run build` AND `npx tsc --noEmit` clean + targeted greps/screenshots as listed.

---

### Task 1: Branch + real asset pipeline + root config

**Files:**
- Create: `public/screenshots/store/{dashboard,workouts,workout-detail,progress,challenges,checkin,nutrition,program}.jpg`
- Create: `public/icons/{favicon.png,apple-touch-icon.png,icon-512.png}`, `public/images/og-image.jpg`
- Create: `public/images/badges/{volume_hunter,iron_habit,minutes_master,plank_bank}.png` (resized ≤200 KB each)
- Create: `public/images/programs/{the_iron_standard,the_booty_blueprint,the_furnace,full_body_moves}.jpg`
- Create: `config.ts` (repo root — full content below)
- Delete: `public/screenshots/main_screen.png`, `public/screenshots/data_charts.png` (stale 3.4 MB, untracked — remove now so they never enter history)

- [ ] **Step 1: Branch** `cd ~/Repo/gitfit-website && git checkout fix_index && git checkout -b neon-redesign`
- [ ] **Step 2: Store screenshots** — `curl -s "https://itunes.apple.com/lookup?bundleId=com.gitfit.app.gitfitFlutter&country=us"`, take `results[0].screenshotUrls`, for each replace suffix `320x480bb.jpg`→`600x0w.jpg` and save in index order: **0=dashboard, 1=workouts, 2=workout-detail, 3=progress, 4=checkin, 5=nutrition, 6=challenges, 7=program** (NOTE: 3/6 mapping per visual verification).
- [ ] **Step 3: Icons from app logo** (source `~/Repo/gitfit-progress-power/logo.png`, 1024², read-only): `sips -z 32 32` → `favicon.png`; `sips -z 180 180` → `apple-touch-icon.png`; `sips -z 512 512` → `icon-512.png` into `public/icons/`.
- [ ] **Step 4: OG image (explicit recipe)** — `cp public/screenshots/store/dashboard.jpg /tmp/og.jpg && sips --resampleWidth 1200 /tmp/og.jpg && sips -c 630 1200 /tmp/og.jpg && cp /tmp/og.jpg public/images/og-image.jpg` (center band of dashboard shot; accept the crop — verified feasible; logo-composite option dropped, sips cannot composite).
- [ ] **Step 5: Badges (resize, gate ≤200 KB)** — copy the 4 PNGs from `gitfit_flutter/assets/badges/`, then `sips -Z 220 <file>` (longest side 220 ≈ 2× display size); verify with `ls -la` each ≤200 KB.
- [ ] **Step 6: Program heroes** — copy the 4 JPGs from `gitfit_flutter/assets/images/workout_background/` unchanged (~600×803).
- [ ] **Step 7: `config.ts`** (repo root):

```ts
export const SITE = {
  appName: 'GitFit',
  storeName: 'GitFit Health',
  tagline: 'Your gym. Your rules. Your data.',
  version: '1.1.3',
  releaseDate: '2026-09-18',
  appStoreUrl: 'https://apps.apple.com/us/app/gitfit-health/id6757233673',
  supportEmail: 'support@gitfit.health',
  domain: 'gitfit.health',
} as const;
```

- [ ] **Step 8: Verify** `ls public/screenshots/store` = 8 files ~95–160 KB each at 600×1298 (`sips -g pixelWidth -g pixelHeight` on one); `npm run build` green (assets not yet referenced).
- [ ] **Step 9: Commit (explicit paths)** `git add config.ts public/screenshots/store public/icons public/images && git rm --cached --ignore-unmatch public/screenshots/main_screen.png public/screenshots/data_charts.png 2>/dev/null; git commit -m "chore: verified store assets, icons, program imagery, site config"`

### Task 2: Neon token layer (npm Tailwind + root index.css + index.html)

**Files:**
- Modify: `package.json` (name → "gitfit-website", add devDeps), `vite.config.ts` (drop GEMINI `define` block), `index.tsx` (**add `import './index.css';` as first import**)
- Create: `tailwind.config.js`, `postcss.config.js`, `index.css` (repo root, next to index.tsx)
- Rewrite: `index.html` (meta/OG/favicon/theme-color; **remove** CDN `<script>` and the inline `<style>` block — `.glass` consumer Navbar is rewritten in Task 3, `.app-shadow` has zero consumers, body font/bg superseded by preflight + fontFamily.sans)

- [ ] **Step 1: install** `npm install -D tailwindcss@^3.4 postcss autoprefixer`
- [ ] **Step 2: `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './index.tsx', './App.tsx', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-bg': '#0D0D1A', 'neon-surface': '#1A1A2E',
        'neon-purple': '#9D4EDD', 'neon-purple-deep': '#5E2B94', 'neon-purple-soft': '#EEDCFF',
        'neon-cyan': '#00D9FF', 'neon-cyan-soft': '#B8F4FF',
        'neon-magenta': '#FF6FA3', 'neon-magenta-deep': '#4F1237', 'neon-magenta-soft': '#FFDAE8',
        'neon-orange': '#FF9500', 'neon-lime': '#00FF88', 'neon-blue': '#4D9FFF',
        'neon-lavender': '#C6A5FF',
        'neon-line': '#2A2A4A', 'neon-line-soft': '#1F1F36', 'neon-muted': '#B7B7D4',
        'neon-error': '#FF7A7A', 'brand-orange': '#FF6B47',
      },
      borderRadius: { neon: '20px' },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(90deg,#FF6FA3,#FF9500)',
        'banner-gradient': 'linear-gradient(135deg,#9D4EDD,#00D9FF)',
        'page-gradient': 'linear-gradient(135deg,#1A1A2E,#0D0D1A)',
      },
      boxShadow: {
        'glow-card': '0 4px 12px rgba(157,78,221,0.12)',
        'glow-active': '0 6px 20px rgba(0,217,255,0.25), 0 0 2px rgba(0,217,255,0.35)',
        'glow-rim': '0 0 8px rgba(0,217,255,0.35)',
        'glow-cta': '0 6px 20px rgba(255,111,163,0.35)',
      },
      fontFamily: { sans: ['Inter','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','sans-serif'] },
    },
  },
  plugins: [],
}
```

- [ ] **Step 3: `postcss.config.js`** `export default { plugins: { tailwindcss: {}, autoprefixer: {} } }`
- [ ] **Step 4: `index.css`** (root):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
  body { @apply bg-neon-bg text-white font-sans antialiased; }
}
@layer components {
  .glass-dark { background: rgba(13,13,26,.78); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
  .neon-card { @apply bg-neon-surface/70 border border-neon-line rounded-neon; }
  .glow-blob { @apply absolute rounded-full pointer-events-none; filter: blur(90px); opacity: .35; }
}
```

- [ ] **Step 5: `index.tsx`** — add `import './index.css';` **as the first import** (this is the Task 1-review blocker fix; without it no CSS is ever compiled).
- [ ] **Step 6: `index.html`** — title `GitFit — Your gym. Your rules. Your data.`; meta description: "Training is hard enough—tracking it shouldn't be. GitFit is the offline-first strength & nutrition tracker that lives on your phone. No account required. No ads. Free."; canonical `https://gitfit.health/`; OG (`og:title`, `og:description`, `og:type=website`, `og:url`, `og:image=/images/og-image.jpg`, `twitter:card=summary_large_image`); favicon `<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon.png">` + `apple-touch-icon` 180; `<meta name="theme-color" content="#0D0D1A">`; keep Inter Google-Fonts links; keep `<div id="root">` + module script.
- [ ] **Step 7: Verify** `npm run build && npx tsc --noEmit` green; **`ls dist/assets/*.css` exists (load-bearing check)**; `grep -c "cdn.tailwindcss" dist/index.html` = 0.
- [ ] **Step 8: Commit** `git add package.json package-lock.json vite.config.ts index.html index.tsx index.css tailwind.config.js postcss.config.js && git commit -m "feat: neon token layer — npm tailwind, meta/OG, css entry"`

### Task 3: Shared components

**Files:** Rewrite `components/Navbar.tsx`, `components/Footer.tsx`; Create `components/PhoneFrame.tsx`, `components/CTAButton.tsx`, `components/SectionHeading.tsx`. Delete `components/AppMockup.tsx` **in Task 8** (Home still imports it until Task 4).

**Interfaces (consumed by Tasks 4–6):**
- `PhoneFrame({src, alt, className?}: {src: string; alt: string; className?: string})` — JSX; dark bezel `border-[10px] border-[#050510] rounded-[44px] bg-black shadow-glow-card overflow-hidden`, Dynamic Island div, `<img className="w-full h-full object-cover rounded-[34px]" loading="lazy">`. Fixed width via caller className (e.g. `w-[280px]`).
- `CTAButton({href, children, variant}: {href: string; children: ReactNode; variant: 'gradient' | 'outline'})` — `variant='gradient'`: `bg-cta-gradient shadow-glow-cta text-white rounded-full px-6 py-3 font-semibold`; `'outline'`: `border border-neon-cyan/60 text-neon-cyan rounded-full px-6 py-3`. External hrefs get `target="_blank" rel="noopener"`.
- `SectionHeading({eyebrow, title, sub?, id?}: {...})` — eyebrow `text-neon-cyan uppercase tracking-widest text-sm font-semibold`; title `text-3xl md:text-5xl font-extrabold tracking-tight`; sub `text-neon-muted`.
- `SITE` from root `config.ts` (`import { SITE } from '../config'`).

- [ ] **Step 1: PhoneFrame.tsx** (per interface; static markup, no state).
- [ ] **Step 2: Navbar.tsx** — fixed top, `h-16 glass-dark border-b border-neon-line/60` (height pinned — main is `pt-16`); logo: `bg-brand-orange` rounded-lg box w/ white `Dumbbell` icon + "GitFit" bold white; links: Home `/`, How To `/how-to`, FAQ `/faq`, Contact `/contact` (NavLink active = `text-neon-cyan`); CTA pill `bg-cta-gradient` "Get GitFit" → `SITE.appStoreUrl` (target blank); mobile hamburger with same links; **all internal links are `<Link>`/`<NavLink>`, zero raw `#`**.
- [ ] **Step 3: Footer.tsx** — `border-t border-neon-line bg-neon-bg`; brand col: logo + "Privacy-first strength training. Your data stays yours."; Product: Home, How To, FAQ, Contact (Links); Legal: Privacy Policy `/privacy`, Terms `/terms`; Connect: `mailto:SITE.supportEmail` (Mail icon) + Instagram `https://instagram.com/gitfit.app` (carry-over; Task 8 verifies reachable, drop if dead); bottom bar: `© {year} {SITE.appName} · Free. Private. Powerful.` + "Made for iPhone · iOS 16+".
- [ ] **Step 4: CTAButton.tsx + SectionHeading.tsx** (per interfaces).
- [ ] **Step 5: Verify** `npm run build && npx tsc --noEmit` green (components may be unused-yet; no unused-import errors).
- [ ] **Step 6: Commit** explicit paths.

### Task 4: Home page (neon)

**Files:** Rewrite `pages/Home.tsx` (delete AppMockup import). Copy sources: live store description (THE GITFIT PROMISE wording verbatim), release notes v1.1.3, screenshots, theme tokens.

**Sections (all internal navigation via `<Link>`; store links via `SITE.appStoreUrl`):**
1. **Hero**: badge "v1.1.3 · Free on the App Store"; H1 `Your gym.` / `Your rules.` (cta-gradient text) / `Your data.`; sub: "GitFit is the offline-first strength & nutrition tracker that lives entirely on your phone. No account required. No ads. No one looking over your shoulder." (store wording); primary `CTAButton gradient` "Download on the App Store"; secondary `CTAButton outline` "See how it works" → **`<Link to="/how-to">`** (never `/#how-to`); right: 3 tilted `PhoneFrame`s — `store/dashboard.jpg` (front), `store/workouts.jpg`, `store/challenges.jpg` — over purple `#9D4EDD` + cyan `#00D9FF` glow blobs.
2. **The GitFit Promise** (3 `neon-card`s): "Total Privacy — Your data is yours. It stays encrypted on your device. We don't see your lifts, your weight, or your photos." / "Fully Free — No subscriptions, no locked features, and no ads. Just results." / "Built by Lifters — Built by lifters, for lifters. No bloat, just progress. 400 exercises included."
3. **Five pillars** (id="features", 5 `neon-card`s, icon + accent): Dashboard (LayoutDashboard, lavender `#C6A5FF`) "Quick actions, Today's Snapshot and health widgets — arranged your way."; Workouts (Dumbbell, magenta) "Log sets, reps and PBs. Supersets, rest timers, resume — training that keeps up with you."; Progress (TrendingUp, purple `#9D4EDD`) "Trend charts with goal lines, daily habits and progress photos."; Check-In (CheckCircle, lime `#00FF88`) "Weight, sleep, steps, HRV, mood — your daily story in under a minute."; Nutrition (UtensilsCrossed, orange) "Macro rings, meal planning, barcode scan and AI-Vision food scanning."
4. **Plans & Programs**: left copy — questionnaire-built adaptive plans, 9 curated 8-week programs, the 70-Day Cut ("Strength, Speed & 5k"), warm-up blocks and week-by-week progression; right: `PhoneFrame store/program.jpg` + 3 hero-image cards (`the_iron_standard`, `the_booty_blueprint`, `full_body_moves`) with names + tags (Gym · Intermediate etc.).
5. **Challenges**: left: `PhoneFrame store/challenges.jpg`; right copy — "10 challenges… '100,000 Steps in 7 Days', '12 Workouts in 30 Days', '50,000 kg Volume Month'" + 4 badge PNGs with `shadow-glow-card`.
6. **Progress you can see**: copy (Daily Habits / Data / Photos; goal lines; everything on-device) + `PhoneFrame store/progress.jpg`.
7. **What's new in 1.1.3** (dated 2026-09-18, from release notes): edit any exercise (title/description/photo); My Workouts / Plans & Programs / Exercises tabs; exercise sheets open on Details; program days stay on the program; your data survives updates.
8. **Gallery**: horizontal `overflow-x-auto snap-x` row of all 8 PhoneFrames (`store/*.jpg`).
9. **Final CTA**: `bg-banner-gradient` rounded card "Free. Private. Powerful. Start lifting." + white store button.

- [ ] Steps: write full JSX → `npm run build && npx tsc --noEmit` → `npm run preview` + browser screenshots (1440, 390) → compare vs token sheet → fix → **Commit**.

### Task 5: HowTo + FAQ rewrite

**Files:** Rewrite `pages/HowTo.tsx`, `pages/FAQ.tsx`.

- **HowTo** — 4 numbered steps reflecting the real app: 1 "Create your profile" (onboarding: nickname, measurements, theme); 2 "Connect Apple Health (optional)" — GitFit **reads** steps, weight, sleep, energy; automatic sync windows morning 05:00–10:59 & evening 19:00–23:59; 3 "Train" — Workouts tab: My Workouts / Plans & Programs / Exercises; templates, supersets, rest timer, auto-PB detection; 4 "Track daily" — Check-In metrics, Nutrition diary, Progress charts/photos. Pro tips cards: "Works offline" (magenta accent) + "Private by default" (cyan accent: Face ID lock, JSON export, no account).
- **FAQ** — 8 accordion items: Price ("GitFit is fully free — no subscriptions, no locked features, and no ads."); Platforms ("GitFit is available on iPhone, iOS 16 or later."); Account ("No account required. Optional cloud sync/backup is AES-256 encrypted (Supabase); delete your account and your server data is removed within 30 days."); Apple Health ("GitFit reads steps, weight, sleep and energy with your permission. Automatic sync windows: 05:00–10:59 and 19:00–23:59."); Offline ("Fully offline-first — SQLite on your device. Sync/export when you choose."); Export ("Export everything as JSON anytime from Settings."); Delete ("Delete your account in Settings → Privacy & Data; cloud data removed within 30 days. Local data goes with the app."); Contact ("Email support@gitfit.health — a mailto contact form lives on the Contact page."). Contact modal (like current FAQ) builds a `mailto:` link.
- [ ] Steps: write → build+tsc → preview screenshots → **Commit** (one per page).

### Task 6: Contact (mailto) + remove Pricing + App.tsx routes

**Files:** Rewrite `pages/Contact.tsx`; Delete `pages/Pricing.tsx`; Modify `App.tsx` (drop `/pricing` import/route; add `/contact`).

- Contact: cards — "Email: support@gitfit.health", "Typical response: under 24 hours", "Independent · Built in the UK"; form (name, email, subject select: General / Technical Support / Feedback & Ideas, message) whose submit builds an encoded `mailto:support@gitfit.health?subject=…&body=…` and sets `window.location.href` — **no fake success state**; note under form: "This opens your email app — nothing is sent through a web server."
- [ ] Steps: write → build+tsc → **gate: `grep -rniE "£6\.99|supporter|premium billing" pages/Home.tsx pages/HowTo.tsx pages/FAQ.tsx pages/Contact.tsx components/ index.html` = 0 matches** (legal pages exempt) → screenshots → **Commit**.

### Task 7: Legal sync

**Files:** Rewrite `pages/Privacy.tsx` (full resync from `~/Repo/gitfit-progress-power/PRIVACY_POLICY.md`); Modify `pages/Terms.tsx` minimally (Terms page already matches canonical except §23's raw `<a href="/privacy">` → replace with `<Link to="/privacy">`; verify against the .md with a diff-by-eyeball pass and fix any drift).

- Privacy resync rules: canonical text verbatim (it mentions the historical Support Developer purchase — keep, do not harmonize); convert headings/lists/paragraphs; **the two markdown tables ("How We Use Your Data", "Data Retention") become styled `<table>`s — reuse the existing table markup pattern from current `pages/Privacy.tsx`**; effective date "30 December 2025" per canonical; contact section: website `https://gitfit.health`; all internal links `<Link>`.
- [ ] Steps: write → build+tsc → gate: `grep -c "Support Developer" pages/Privacy.tsx` ≥ 1 (canonical preserved) AND `grep -c 'href="/privacy"' pages/Terms.tsx` = 0 → **Commit**.

### Task 8: Housekeeping + full local verification (the 95% gate)

- [ ] Delete now-unreferenced `public/screenshots/*.png` (old set) after `grep -rn "screenshots/[a-z_0-9]*\.png" pages components index.html` = 0 store-external matches; delete `components/AppMockup.tsx`; rewrite `README.md` (stack, dev/build, deploy = push main, branch note fix_index→main); fix `metadata.json` (name "GitFit Website", real description).
- [ ] Commit docs: `git add docs/` (spec + this plan).
- [ ] **Build gates:** `npm run build && npx tsc --noEmit` clean; `npm run preview` on :4173.
- [ ] **Browser pass (browser-use skill, main agent):** screenshots of `/`, `/how-to`, `/faq`, `/contact`, `/privacy`, `/terms` at 1440 and 390 widths; console errors = 0; visual token check (bg `#0D0D1A`, purple/cyan/magenta present, radius-20 cards, gradient CTAs).
- [ ] **Link audit:** script/grep all `to="…"` (resolve to defined routes) and `href="…"` (only: `SITE.appStoreUrl`, `mailto:support@gitfit.health`, instagram, policy-external links); **zero `href="#"` or `href="/#…"`**.
- [ ] **Weight audit:** `du -sh dist`; every `public` image ≤300 KB (badges were resized in Task 1; re-check).
- [ ] **Instagram check:** `curl -sI https://instagram.com/gitfit.app` — if 404, remove the icon from Footer.
- [ ] Fix all findings → re-run failed gates → **Commit**.

### Task 9: Knowledge base + handoff

- [ ] Create `~/Obsidian/dev-vault/projects/gitfit-website/index.md` (per `_meta/templates/project-index.md`: frontmatter `project/type: project-index/updated/tags: [moc, gitfit-website]`; one-line description; Current state; Architecture; Key entry points; decisions/learnings/sessions lists; link `[[projects/gitfit-progress-power/index|GitFit Progress Power MOC]]`).
- [ ] `decisions/2026-09-19-neon-redesign.md` (Context / Decision / Consequences / Verification / Links; tags `[decision, website, neon, tailwind, gitfit]`, `project: gitfit-website`) + `sessions/2026-09-19-<HHMM>-neon-redesign.md` (Goal / What changed / Decisions made / What I learned / Open / Cross-references).
- [ ] Register project in `_global/index.md` (inspect `scripts/lk-*.sh` first; use them if trivially safe, else minimal manual edit consistent with existing entries).
- [ ] Final report: what was implemented, critique table (implemented vs improvable), merge/push instructions (`git checkout main && git merge fix_index && git merge neon-redesign && git push origin main` — user action).
