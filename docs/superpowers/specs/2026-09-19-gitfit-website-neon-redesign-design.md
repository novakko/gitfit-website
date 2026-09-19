# GitFit Website — Modern Neon Redesign (Design Spec)

Date: 2026-09-19
Status: approved-by-brief (user pre-specified theme "modern neon", scope: website only, autonomous loop to 95%+ match confidence)
Scope: `~/Repo/gitfit-website` only. **No changes to `~/Repo/gitfit-progress-power`** (app repo is source of truth, read-only).

## 1. Problem

The website (gitfit.health, GitHub Pages) still presents the app as it was in Dec 2025: light warm-orange design, "iOS-exclusive" HealthKit framing, a £6.99 "Supporter" purchase, and none of the features shipped since (programs, challenges, progressive overload, equipment swapping, 70-Day Cut). The app (v1.1.3, store release 2026-09-18) is a dark **Modern Neon** themed, fully free tracker with an active App Store listing under the name **"GitFit Health"**. Deploy blocker discovered: `main` is 7 commits behind `fix_index`; the deploy workflow only triggers on push to `main`.

## 2. Verified facts (research base — no guesses)

### 2.1 App design tokens (from `gitfit_flutter/lib/core/theme/`)
| Token | Value | Source |
|---|---|---|
| Background | `#0D0D1A`, page gradient `#1A1A2E → #0D0D1A` (diagonal) | `NeonGradients`/`glassmorphism_background.dart` |
| Surface/card | `#1A1A2E` @ 70% alpha | `_getNeonTheme` |
| Primary | `#9D4EDD` neon purple (container `#5E2B94`, on-container `#EEDCFF`) | `_getNeonTheme` |
| Secondary | `#00D9FF` neon cyan (on-container `#B8F4FF`) | `_getNeonTheme` |
| Tertiary | `#FF6FA3` neon magenta (container `#4F1237`) | `_getNeonTheme` |
| CTA gradient | `#FF6FA3 → #FF9500` (magenta→orange) | `NeonGradients.ctaButton` |
| Banner gradient | `#9D4EDD → #00D9FF` | `NeonGradients.activeWorkoutBanner` |
| Outline | `#2A2A4A` / `#1F1F36` | `_getNeonTheme` |
| Text | white / `#B7B7D4` muted | `onSurface`/`onSurfaceVariant` |
| Accents | lime `#00FF88`, orange `#FF9500`, coral `#FF8A65`, lavender `#C6A5FF`, aqua `#7AD6FF`, blue `#4D9FFF`, pink `#FF6B9D` | `NeonColors` |
| Chart colors | weight `#9D4EDD`, calories `#FF9500`, protein `#00D9FF`, steps `#00FF88`, sleep `#4D9FFF`, strength `#FF006E`, goal line `#FFCA28` | `chart_theme_extension.dart` |
| Error | `#FF7A7A`; wellness rest/tired/stress `#10B981`/`#F59E0B`/`#EF4444` | theme code |
| Radius | 20 (cards, buttons, inputs) | theme shape |
| Glows | accent @12% blur12 / @25% blur20 spread2 / rim @35% blur8 | `NeonGlows` |
| Fonts | system (SF/Roboto); headings w600, letterSpacing ≈ −0.8 on display text; nav labels w600 | theme + splash |
| Brand mark | app icon stays **orange** (`#FF6B47`→`#FF8A6B`, adaptive bg `#E8784A`); logo.png 1024×1024 | pubspec/icons + logo.png |
| Mode | dark only (neon forces `AppThemeMode.dark`) | `ThemeNotifier._normalizeTheme` |

### 2.2 App facts
- Store name **"GitFit Health"**, v1.1.3, free, seller Lukasz Kowalski, iOS 16+, genres Health & Fitness / Lifestyle. App Store URL (verified via itunes lookup by bundle id `com.gitfit.app.gitfitFlutter`): `https://apps.apple.com/us/app/gitfit-health/id6757233673`. Released 2026-09-18.
- Play Store: **not published** (404 for applicationId) → site must not claim Android availability.
- Tagline (repo `app_store_description.txt`): **"Your gym. Your rules. Your data."** Closing CTA: "Free. Private. Powerful. Start lifting."
- Store description pillars: THE GITFIT PROMISE — Total Privacy / Fully Free ("No subscriptions, no locked features, and no ads") / Built by lifters. "No account required… No data harvesting. No mandatory cloud sync."
- 5 tabs: Dashboard, Workouts, Progress, Check-In, Nutrition (verified in screenshots + `main_scaffold.dart`).
- Features verified in code/docs/screens: customizable dashboard w/ Today's Snapshot + quick actions; workout logging w/ PBs, supersets, rest timer, resume; templates ("The Iron Standard"…, 400 exercises in `exercises.json`); Plans & Programs (questionnaire-generated, 9 curated 8-week programs, 70-Day Cut `plan_70day_cut.json`, program detail w/ 8-week progression); Challenges (10 named challenges incl. "100,000 Steps in 7 Days", "12 Workouts in 30 Days", "50,000 kg Volume Month") + 12 badges (`assets/badges/*.png`); progressive overload engine (1RM, plateau detection); check-ins (weight, body fat, sleep, steps, HRV, mood, energy, stress, water, photos); nutrition (diary, macro rings, OpenFoodFacts barcode scan, AI-Vision Scan Food, meal planning); progress (Daily Habits / Data / Photos tabs, goal lines, body map); Apple Health & wearable sync w/ morning/evening sync windows; offline-first; biometric lock; AES-256 encrypted optional cloud backup (Supabase); JSON export; equipment profiles + exercise substitution (Sep 2026).
- v1.1.3 release notes (2026-09-18): edit any exercise; Workouts tabs (My Workouts / Plans & Programs / Exercises); exercise info opens on Details; program days stay on the program; data survives update.

### 2.3 Website facts
- Stack: React 19 + Vite 6 + TS, `react-router-dom` v7 **HashRouter**, lucide-react, Tailwind via **Play CDN** (no npm Tailwind), Inter font. CI (`deploy-pages.yml`) builds on push to `main` → deploys `dist/`. Custom domain `gitfit.health` (CNAME + `.nojekyll` in `public/`). No `base` config needed.
- Routes: `/`, `/privacy`, `/terms`, `/how-to`, `/faq`, `/pricing`(nav "Support Us"), orphan `/contact`.
- Stale/broken: hero CTA `href="#"`; `apps.apple.com/app/gitfit` fake URL; `support@gitfit.app` vs `support@gitfit.health`; fake Contact form; "Premium Billing" option; Terms §23 raw `<a href="/privacy">` breaks out of HashRouter; no favicon/OG; template leftovers in package.json/metadata.json/vite.config; unused `screenshot5–8.png`; staged `main_screen.png`/`data_charts.png` show the **old light theme** (unusable for neon presentation); `data_charts.png` 2.4 MB.
- Git: branch `fix_index` = `main` + 7 commits (all real content + workflow). Live deploy requires `main`.

### 2.4 Knowledge base
Canonical LocalKnowledge v2 vault: `~/Obsidian/dev-vault/` (v1 `~/vault/` dead; `.dyrygento` empty). Convention: `projects/<repo>/{index.md,decisions/,learnings/,sessions/}`, notes `YYYY-MM-DD-<slug>.md`, frontmatter `tags/project/status`, wiki-links, sections Context/Decision/Consequences/Verification/Links. No `gitfit-website` project exists yet. App KB: `~/Obsidian/dev-vault/projects/gitfit-progress-power/` + `graphify-out/`.

## 3. Design direction

Dark neon single-theme site mirroring the app: `#0D0D1A` page with `#1A1A2E→#0D0D1A` diagonal gradient sections; cards `#1A1A2E` @70% + 20px radius + neon glow shadows; purple primary, cyan secondary, magenta tertiary; magenta→orange gradient CTAs; purple→cyan banner accents; white/`#B7B7D4` text; Inter w/ tight-tracked bold headings; lucide icons. Glass dark navbar. Neon glow blobs (purple/cyan, blur-3xl) as ambience. App's orange brand mark reserved for logo/favicon (authentic brand continuity).

## 4. Information architecture

| Route | Content |
|---|---|
| `/` | Hero (tagline, real App Store CTA, real store screenshots in phone frames, neon glows) → "The GitFit Promise" (Total Privacy / Fully Free / No account required) → Features grid (5-tab pillars + programs, challenges, overload engine, sync, offline, biometric, export) → Challenges & Badges strip (real badge PNGs, real challenge names) → Programs showcase (workout hero JPGs, 8-week progression + 70-Day Cut) → What's New (v1.1.3 release notes) → Screenshots gallery (all 8 store shots) → final CTA |
| `/how-to` | Rewritten to real 5-tab navigation + onboarding reality (nickname/theme/measurements/health sync), programs wizard, challenges |
| `/faq` | Rewritten: price (fully free), iOS 16+ only (verified), no account required, cloud sync optional AES-256, HealthKit sync windows, data export/deletion, contact (mailto) |
| `/privacy` | Synced verbatim from app repo `PRIVACY_POLICY.md` (canonical), React-formatted |
| `/terms` | Synced verbatim from app repo `TERMS_OF_SERVICE.md`, fixed router links |
| `/contact` | Honest static page: support email `support@gitfit.health` via `mailto:` form (works without backend), response expectation |
| `/pricing` | **Removed** (app is fully free; £6.99 offer is false). Nav: Home · How To · FAQ · Contact + Download CTA |

## 5. Assets plan
- `public/screenshots/store/*.jpg`: the 8 official App Store screenshots at 600×0w (600×1298), named by screen; used in hero/gallery/mockups.
- `public/icons/`: favicon 32/180 + 512 from app `logo.png` (sips resize); og-image (logo or dashboard shot composite).
- `public/images/badges/`: 3–4 real badge PNGs (dark, glowing — fit theme).
- `public/images/programs/`: 3–4 real workout hero JPGs.
- Delete from `public/screenshots/`: old light-theme PNGs (`dashboard.png`, `nutrition.png`, `progress-*.png`, `screenshot5–8.png`, staged `main_screen.png`, `data_charts.png`) once unreferenced.

## 6. Technical changes
1. Replace Tailwind Play CDN with `tailwindcss@^3.4` + PostCSS + `tailwind.config.js` defining the neon palette exactly (§2.1 tokens as named colors: `neon-bg #0D0D1A`, `neon-surface #1A1A2E`, `neon-purple #9D4EDD`, `neon-cyan #00D9FF`, `neon-magenta #FF6FA3`, `neon-orange #FF9500`, `neon-lime #00FF88`, `neon-line #2A2A4A`, `neon-muted #B7B7D4`, etc.) + glow box-shadow utilities in a small CSS layer.
2. `src/config.ts` (or `config.ts`) single source: APP_STORE_URL (verified id6757233673), SUPPORT_EMAIL, APP_VERSION "1.1.3", RELEASE_DATE, TAGLINE, app name "GitFit".
3. `index.html`: meta description/OG/Twitter tags, favicon links, theme-color `#0D0D1A`, keep Inter, remove CDN script.
4. Fix Terms router links; remove `href="#"`; unify emails; drop GEMINI define + rename package + real README + metadata.json.
5. Keep HashRouter, ScrollToTop, fixed navbar offset, vite port 3000, CI workflow untouched.

## 7. Testing & acceptance (95% gate)
- `npm install` + `npm run build` clean; `vite preview` serves; every route renders, zero console errors.
- Browser screenshots (desktop 1440 + mobile 390) of every route; visual check against token sheet (colors/radii/glows from §2.1) and content against §2.2 facts.
- Link audit: all `href`/`to` resolve (no `#`, no raw cross-SPA anchors); App Store URL verified live; emails consistent.
- Content audit: every claim traceable to store listing / repo docs / theme code; no £6.99, no subscription, no Android availability claim, no fake data.
- Perf sanity: images ≤ ~300 KB each, total page weight reasonable.

## 8. Deployment (user actions, not pushed by agent)
Work commits on branch `neon-redesign` (from `fix_index`). To go live: merge `fix_index` + `neon-redesign` into `main`, push — CI builds and deploys to gitfit.health.

## 9. Knowledge base update
Create `~/Obsidian/dev-vault/projects/gitfit-website/index.md` (project MOC per `_meta/templates/project-index.md`), `decisions/2026-09-19-neon-redesign.md`, `sessions/2026-09-19-*-neon-redesign.md`; cross-link `[[projects/gitfit-progress-power/index|GitFit Progress Power MOC]]`; register project in `_global/index.md` per vault conventions.
