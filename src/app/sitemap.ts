import { MetadataRoute } from 'next';
import { COMPETITORS } from '@/data/competitors';

const LAST_MODIFIED_CORE = new Date('2026-03-29T00:00:00.000Z');
const LAST_MODIFIED_LEGAL = new Date('2026-03-01T00:00:00.000Z');

function getStaggeredModDate(slug: string, idx: number): Date {
    const day = 2 + ((idx * 7 + slug.length * 3) % 27); // 2026-03-02 .. 2026-03-28
    const dd = String(day).padStart(2, '0');
    return new Date(`2026-03-${dd}T00:00:00.000Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://examghost.com';

    // Unique canonical competitor slugs (excluding redirecting alias classlogy-vs-examghost)
    const competitorRoutes = Object.keys(COMPETITORS)
        .filter((slug) => slug !== 'classlogy-vs-examghost')
        .map((slug, idx) => ({
            url: `${baseUrl}/${slug}`,
            lastModified: getStaggeredModDate(slug, idx),
            changeFrequency: 'weekly' as const,
            priority: 0.85,
        }));

    const lmsServiceSlugs = [
        'canvas-lms-quiz-solver',
        'blackboard-quiz-solver',
        'd2l-brightspace-quiz-solver',
        'moodle-quiz-solver',
        'mcgraw-hill-connect-aleks-solver',
        'pearson-mylab-mastering-solver',
        'cengage-mindtap-webassign-solver',
        'gradescope-exam-solver',
        'google-forms-quiz-solver',
        'schoology-quiz-solver',
        'deltamath-homework-solver',
        'edgenuity-quiz-solver',
        'blog/does-canvas-detect-extensions-2026',
        'blog/canvas-quiz-log-explained-what-professors-see',
    ];

    const lmsRoutes = lmsServiceSlugs.map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: LAST_MODIFIED_CORE,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [
        {
            url: baseUrl,
            lastModified: LAST_MODIFIED_CORE,
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/canvas-quiz-solver-free-demo`,
            lastModified: LAST_MODIFIED_CORE,
            changeFrequency: 'daily' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/compare-canvas-hack-extensions`,
            lastModified: LAST_MODIFIED_CORE,
            changeFrequency: 'daily' as const,
            priority: 0.95,
        },
        ...lmsRoutes,
        {
            url: `${baseUrl}/features`,
            lastModified: LAST_MODIFIED_CORE,
            changeFrequency: 'weekly' as const,
            priority: 0.85,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: LAST_MODIFIED_CORE,
            changeFrequency: 'weekly' as const,
            priority: 0.85,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: LAST_MODIFIED_LEGAL,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: LAST_MODIFIED_LEGAL,
            changeFrequency: 'monthly' as const,
            priority: 0.75,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: LAST_MODIFIED_LEGAL,
            changeFrequency: 'monthly' as const,
            priority: 0.75,
        },
        ...competitorRoutes,
    ];
}
