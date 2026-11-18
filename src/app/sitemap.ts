import { MetadataRoute } from 'next';
import { COMPETITORS } from '@/data/competitors';

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
    const competitorRoutes = Object.keys(COMPETITORS)
        .filter((slug) => slug !== 'classlogy-vs-examghost')
        .map((slug) => ({
            url: `${baseUrl}/${slug}`,
            lastModified: LAST_MODIFIED_COMPARISONS,
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
        'wileyplus-quiz-solver',
        'zybooks-homework-solver',
        'webwork-math-solver',
        'sakai-lms-quiz-solver',
        'macmillan-achieve-smartwork-solver',
        'tophat-quiz-solver',
        'knewton-alta-solver',
        'hawkes-learning-certify-solver',
        'blog/does-canvas-detect-extensions-2026',
        'blog/canvas-quiz-log-explained-what-professors-see',
    ];

    const lmsRoutes = lmsServiceSlugs.map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: LAST_MODIFIED_LMS,
    }));

    return [
        { url: baseUrl, lastModified: LAST_MODIFIED_HOME },
        { url: `${baseUrl}/canvas-quiz-solver-free-demo`, lastModified: LAST_MODIFIED_CORE },
        { url: `${baseUrl}/compare-canvas-hack-extensions`, lastModified: LAST_MODIFIED_CORE },
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
