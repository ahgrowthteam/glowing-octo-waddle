# ExamGhost — Full-Site SEO / AEO / GEO Audit

**Date:** 2026-10-27 · **Scope:** all 79 sitemap URLs (local `http://localhost:3000`) + production (`https://www.examghost.com`) headers and Lighthouse
**Method:** custom crawler (title/meta/H1/canonical/OG/JSON-LD/word count/internal links), agentic-seo `llms_txt_checker.py`, Lighthouse 12 (mobile) on production, manual code review.

## Score (before → after local fixes)

| Category (weight) | Before | After | Notes |
|---|---|---|---|
| Technical SEO (25%) | 62 | 70 | Canonical host conflict still open (needs a Vercel setting) |
| Content quality (20%) | 85 | 85 | Pillar pages are 1.8k–2.5k words of platform-specific content; free demo is thin inside `<main>` |
| On-page SEO (15%) | 55 | 90 | 15 titles/descriptions rewritten; 11 double-brand titles fixed |
| Schema (15%) | 85 | 92 | Every page has JSON-LD; LMS pages now carry dates + author |
| Performance (10%) | 67 | ~85 (est.) | MP4 now lazy-loads; re-measure after deploy |
| Images (10%) | 90 | 95 | 0 missing `alt`; each page now has its own OG image |
| AI search readiness / GEO (5%) | 90 | 95 | robots allows all AI bots; llms.txt scored 100/100 |
| **Weighted total** | **~71** | **~84** | |

---

## 🔴 Critical

### C1. Canonical host conflict (apex ↔ www) — STILL OPEN
- **Evidence:** `curl -I https://examghost.com` returns **308 → https://www.examghost.com/**. But every page sets `<link rel="canonical" href="https://examghost.com/...">`, and `sitemap.xml`, `robots.txt`, `metadataBase`, every JSON-LD `@id` and `llms.txt` also use the apex.
- **Impact:** Every canonical points to a URL that redirects. Google gets conflicting signals, may ignore your canonicals, and indexing and link equity get split between the two hosts.
- **Fix (pick one):**
  1. **Recommended, no code change:** in Vercel → Project → Domains, make `examghost.com` the primary domain and set `www.examghost.com` to redirect to it.
  2. Or change `https://examghost.com` → `https://www.examghost.com` across the codebase.

### C2. 11 pillar pages had double brand titles and no OG image — ✅ FIXED
- **Evidence:** `<title>Moodle Quiz Solver & AI Homework Helper | Moodle 4.x Chrome Extension | ExamGhost | ExamGhost</title>` (97 chars). The same pattern was on 9 platform pages and both blog posts. Their page-level `openGraph` replaced the layout's settings without an `images` field.
- **Fix applied:** `title.absolute` (52–58 chars) and descriptions (146–157 chars) on all 15 pillar pages, plus `og:image` and a Twitter card using each page's own film poster.

---

## ⚠️ Warnings

| # | Finding | Evidence | Status |
|---|---|---|---|
| W1 | 2.7 MB MP4 autoplayed on page load | Lighthouse mobile, `/moodle-quiz-solver`: Performance **67**, TBT **1,020 ms**, LCP 3.2 s, 3,084 KiB total (2,688 KB was the MP4). Homepage scores 96. | ✅ Fixed: lazy-load the video when it scrolls into view (`preload="none"` + IntersectionObserver) |
| W2 | Weak internal linking to pillar pages | 57 competitor pages and the footer linked to **0** LMS pages; `/blog/does-canvas-detect-extensions-2026` was an orphan | ✅ Fixed: sitewide footer platform and research links; re-crawl shows **0 orphans** |
| W3 | Accessibility: switches had no names; heading order broken | Lighthouse `button-name` and `heading-order` failed; simulator questions were `<h3>` | ✅ Fixed |
| W4 | Free demo VideoObject pointed to a missing file | `…/videos/films/canvas-lms-quiz-solver.mp4` (404) | ✅ Fixed |
| W5 | Stale freshness signals | 9 LMS pages had no `dateModified`; sitemap `lastmod` was 2026-03-29 | ✅ Fixed |
| W6 | Free demo page is thin inside `<main>` | 313 words inside `<main>` (~3.7k words page-wide) | Open |
| W7 | Three `next.config.*` files | `.cpanel.mjs` has `output:'export'` + `ignoreBuildErrors` | Open: delete the unused files |
| W8 | Minor length overruns on 14 competitor pages | Titles 62–63 chars or descriptions 161–168 chars | Open (low) |

## ℹ️ Info / AEO-GEO
- **robots.txt:** allows GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot, Google-Extended, Applebot-Extended and CCBot. ✅
- **llms.txt / llms-full.txt:** found on production with a quality score of 100/100. ✅
- **Schema (79 pages):** WebPage 75, BreadcrumbList 78, FAQPage 75, SoftwareApplication 57, VideoObject 15, HowTo 15, Speakable 77. 0 JSON parse errors.
- **FAQPage and HowTo:** Google no longer shows rich results for these on commercial sites. They are kept for AI answer engines, but don't expect SERP rich snippets from them.
- **Security headers (prod):** HSTS preload, CSP, X-Frame-Options, nosniff, Referrer-Policy and Permissions-Policy are all present. ✅
- **Site-wide:** 0 duplicate titles, descriptions or H1s; 0 broken internal links; exactly 1 H1 per page; 0 images missing `alt`.

## Environment limitations
- The PageSpeed Insights API was rate-limited, so local Lighthouse 12 was used (lab data, not CrUX field data). Performance after the fix is an estimate; re-test after deploying.
