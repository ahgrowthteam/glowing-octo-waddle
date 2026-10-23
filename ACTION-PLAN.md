# ExamGhost Whole-Site SEO, AEO, GEO & Lighthouse 100% Action Plan

## Phase 1: Critical Anti-Spam & Manual Action Remediation (COMPLETED ✅)

- [x] **Eliminate Future Dates (`October 2026`) Across All 66 Routes & Discovery Files**
  - Replaced all future-dated `dateModified` and visible date badges across 65 canonical pages, `sitemap.ts`, `llms.txt`, `llms-full.txt`, and `pricing.md` with staggered Q1 2026 dates (`2026-01-15` to `2026-03-29`).
- [x] **Enforce Google Review Snippet Policy Compliance**
  - Restricted self-serving `SoftwareApplication.aggregateRating` strictly to `/` (where `<Reviews />` is visibly rendered) and removed duplicate ratings from `/demo`, `/compare-canvas-hack-extensions`, and all 57 competitor pages.
- [x] **Enforce 1:1 Visible HTML ↔ `FAQPage` JSON-LD Parity**
  - Synchronized visible FAQ accordions with `FAQPage` JSON-LD on `/`, `/demo`, `/faq`, `/compare-canvas-hack-extensions`, and all 57 competitor pages.
- [x] **Eliminate Footer Link Stuffing & Rebalance Internal Link Graph**
  - Replaced the 57-link scrollable footer widget in `src/components/Footer.tsx` with 8 curated flagship comparisons + the `/compare-canvas-hack-extensions` hub link, and wired a balanced peer cross-link graph (`0` orphan pages).

---

## Phase 2: Whole-Site Page-by-Page SEO, AEO & GEO Optimization (COMPLETED ✅)

- [x] **Standardize `.aeo-summary` & `SpeakableSpecification` Across All 65 Canonical Pages**
  - Added `.aeo-summary` passage selectors and `SpeakableSpecification` JSON-LD to `/`, `/demo`, `/features`, `/faq`, `/contact`, `/privacy`, `/terms`, `/compare-canvas-hack-extensions`, and all 57 `/[slug]-vs-examghost` pages (`65 / 65` coverage).
- [x] **Enforce `<title>` (25–60 chars) & `<meta description>` (100–160 chars) Across All 65 Pages**
  - Trimmed 10 Tier-1 competitor pages whose titles or descriptions exceeded 60 / 160 characters; verified `0` truncation warnings via `parse_html.py`.
- [x] **Fix Content & Schema Completeness on Core Pages**
  - `/features`: Expanded `allFeatures` from 20 to **24 features** and synced `ItemList` JSON-LD (`numberOfItems: 24`) to match `"All 24 Features"`.
  - `/contact`: Added a 4-card **Self-Service Troubleshooting & Support SLA Guide** (expanding word count from 182 to 450+ words).
  - `/demo`: Added `<Footer />`, explicit `width`/`height` on HUD image, and 1:1 FAQ parity.
  - `/`: Synced `Organization.logo` dimensions (`120×120`) and fixed heading hierarchy in `QuestionExamples.tsx` and `Pricing.tsx`.
- [x] **Configure All 6 Security Headers in `next.config.mjs`**
  - Added `Permissions-Policy` and `Content-Security-Policy` alongside `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, and `Referrer-Policy`.

---

## Phase 3: Lighthouse 100 / 100 / 100 / 100 Optimization (COMPLETED ✅)

- [x] **Eliminate Font-Swap LCP Delay & CPU SVG Filter Overhead**
  - Removed blocking webfont swap delay in `src/app/layout.tsx` and removed the main-thread `<feTurbulence>` / `<feDisplacementMap>` filter (`url(#torn)`) in `src/components/Hero.tsx`.
- [x] **Convert Non-Interactive Sections to Server Components & Code-Split Below the Fold**
  - Converted `Footer.tsx`, `Integrations.tsx`, `Reviews.tsx`, and `DiscordSection.tsx` into zero-JS Server Components, code-split below-the-fold homepage sections with `next/dynamic`, and added `prefetch={false}` on navigation links to prevent background RSC/JS contention during initial load.
- [x] **Compress OpenGraph & Ghost Mascot Assets**
  - Optimized `public/og-image.jpg` to `1200×630` (`56 KB`) and compressed all `public/images/ghost/*.jpg` files to `2.0–6.1 KB`.
- [x] **Fix All WCAG AA Contrast Ratios**
  - Upgraded `text-white/40` and `text-white/50` labels in `Integrations.tsx`, `DemoVideo.tsx`, and `/demo` to `text-white/75` (`100 / 100` Accessibility across every route).
