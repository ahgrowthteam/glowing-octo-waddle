import { MetadataRoute } from 'next';
import { FACTS, isIndexable } from '@/data/competitor-facts';
import { PLATFORMS_DATA } from '@/data/platforms';

// lastModified values are real content-change dates, not synthetic ones. Update a group's date only when
// that group's content changes meaningfully (Google ignores lastmod once it proves unreliable).
// priority / changefreq are intentionally omitted: Google ignores both.
const LAST_MODIFIED_HOME = new Date('2026-11-19T00:00:00.000Z'); // homepage rebuild + header
const LAST_MODIFIED_CORE = new Date('2026-11-19T00:00:00.000Z'); // features, demo, faq rebuilt
const LAST_MODIFIED_LEGAL = new Date('2026-03-01T00:00:00.000Z');
const LAST_MODIFIED_LMS = new Date('2026-10-23T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.examghost.com';

    // Only the 42 M3 "index" comparison pages are emitted; consolidated redirects and noindex pages are excluded.
    const indexableSlugs = Object.keys(FACTS).filter((slug) => isIndexable(FACTS[slug]));
    const latestComparisonIso = indexableSlugs.reduce(
        (m, slug) => (FACTS[slug].lastChecked > m ? FACTS[slug].lastChecked : m),
        '2026-11-27'
    );
    const lastModifiedCompare = new Date(`${latestComparisonIso}T00:00:00.000Z`);

    const competitorRoutes = indexableSlugs.map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: new Date(`${FACTS[slug].lastChecked}T00:00:00.000Z`),
    }));

    // Only platform pages with unique content are indexable.
    const lmsServiceSlugs = PLATFORMS_DATA.filter((p) => p.indexable).map((p) => p.slug);

    const lmsRoutes = lmsServiceSlugs.map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: LAST_MODIFIED_LMS,
    }));

    return [
        { url: baseUrl, lastModified: LAST_MODIFIED_HOME },
        { url: `${baseUrl}/canvas-quiz-solver-free-demo`, lastModified: LAST_MODIFIED_CORE },
        { url: `${baseUrl}/compare`, lastModified: lastModifiedCompare },
        ...lmsRoutes,
        { url: `${baseUrl}/features`, lastModified: LAST_MODIFIED_CORE },
        { url: `${baseUrl}/video-demo`, lastModified: LAST_MODIFIED_CORE },
        { url: `${baseUrl}/faq`, lastModified: LAST_MODIFIED_CORE },
        { url: `${baseUrl}/about`, lastModified: LAST_MODIFIED_HOME },
        { url: `${baseUrl}/contact`, lastModified: LAST_MODIFIED_LEGAL },
        { url: `${baseUrl}/privacy`, lastModified: LAST_MODIFIED_LEGAL },
        { url: `${baseUrl}/terms`, lastModified: LAST_MODIFIED_LEGAL },
        ...competitorRoutes,
    ];
}
