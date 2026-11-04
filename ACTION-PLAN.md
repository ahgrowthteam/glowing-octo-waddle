# ExamGhost SEO / AEO / GEO Action Plan (2026-10-27)

## Done in this pass (local, not yet deployed)
- [x] Rewrote titles and descriptions on all 15 pillar pages and removed the duplicate `| ExamGhost | ExamGhost`
- [x] Gave each pillar page its own OG and Twitter image (its film poster)
- [x] Explainer MP4 now lazy-loads (`preload="none"` + IntersectionObserver), which removes ~2.7 MB from the initial mobile load
- [x] Sitewide footer links to all 12 platform pages and both research posts (0 orphans)
- [x] Fixed accessibility issues: switch `aria-label`; quiz-question text no longer marked up as headings
- [x] Fixed the free demo VideoObject `contentUrl` (was pointing to a missing file)
- [x] JSON-LD freshness: `datePublished`/`dateModified`/`author` on LMS WebPage nodes; sitemap `lastmod` set to 2026-10-23

## Do next
| Priority | Action | Effort | Owner |
|---|---|---|---|
| 🔴 P0 | Fix the canonical host: in Vercel → Domains, make **examghost.com** primary and redirect www to it (or move all URLs in the code to www) | 5 min | You (Vercel dashboard) |
| 🔴 P0 | Deploy, then re-run Lighthouse mobile on `/moodle-quiz-solver` (target Performance ≥ 85, TBT < 300 ms) | 10 min | |
| ⚠️ P1 | Submit `sitemap.xml` in Google Search Console and Bing Webmaster after the host fix; request indexing for the 15 pillar URLs | 15 min | You |
| ⚠️ P1 | Free demo: move the guide/FAQ content inside `<main>` | 15 min | |
| ⚠️ P1 | Delete the unused `next.config.cpanel.mjs` / `next.config.vercel.mjs` | 1 min | |
| ⚠️ P2 | Reduce simulator main-thread work (3.7 s): lazy-mount `LmsInteractiveVideoDemo` with `next/dynamic` and `ssr:false` below the fold | 1 h | |
| ⚠️ P2 | Compress the MP4s (≈2.7 MB each → target < 1.2 MB with H.264 CRF 28, or add a WebM/AV1 source) | 30 min | |
| ⚠️ P2 | Trim 14 competitor-page titles/descriptions by 2–8 characters | 20 min | |
| ℹ️ P3 | Earn off-site citations (Reddit/Discord/YouTube posts with the films) so AI engines have third-party mentions to cite | Ongoing | |
