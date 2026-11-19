import { MetadataRoute } from 'next';
import { FACTS, isIndexable } from '@/data/competitor-facts';
import { PLATFORMS_DATA } from '@/data/platforms';

// lastModified values are real content-change dates, not synthetic ones. Update a group's date only when
// that group's content changes meaningfully (Google ignores lastmod once it proves unreliable).
// priority / changefreq are intentionally omitted: Google ignores both.
const LAST_MODIFIED_HOME = new Date('2026-11-18T00:00:00.000Z'); // hero + schema revision
const LAST_MODIFIED_CORE = new Date('2026-03-29T00:00:00.000Z');
const LAST_MODIFIED_LEGAL = new Date('2026-03-01T00:00:00.000Z');
const LAST_MODIFIED_LMS = new Date('2026-10-23T00:00:00.000Z');
const LAST_MODIFIED_COMPARISONS = new Date('2026-11-18T00:00:00.000Z'); // testimonials, ratings, titles and model names revised

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.examghost.com';

    // Unique canonical competitor slugs (excluding redirecting alias classlogy-vs-examghost)
    // Only comparison pages backed by verified facts are indexable; thin legacy pages are noindex and left out.
    const competitorRoutes = Object.keys(FACTS)
        .filter((slug) => isIndexable(FACTS[slug]))
        .map((slug) => ({
            url: `${baseUrl}/${slug}`,
            lastModified: LAST_MODIFIED_COMPARISONS,
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
        { url: `${baseUrl}/compare`, lastModified: LAST_MODIFIED_COMPARISONS },
        ...lmsRoutes,
        { url: `${baseUrl}/features`, lastModified: LAST_MODIFIED_CORE },
        { url: `${baseUrl}/faq`, lastModified: LAST_MODIFIED_CORE },
        { url: `${baseUrl}/about`, lastModified: LAST_MODIFIED_HOME },
        { url: `${baseUrl}/contact`, lastModified: LAST_MODIFIED_LEGAL },
        { url: `${baseUrl}/privacy`, lastModified: LAST_MODIFIED_LEGAL },
        { url: `${baseUrl}/terms`, lastModified: LAST_MODIFIED_LEGAL },
        ...competitorRoutes,
    ];
}
