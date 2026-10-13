import { MetadataRoute } from 'next';
import { COMPETITORS } from '@/data/competitors';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://examghost.com';

    // Unique competitor slugs (excluding alias if needed, or including both)
    const competitorRoutes = Object.keys(COMPETITORS).map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/demo`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/compare-canvas-hack-extensions`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/features`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.85,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.85,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.75,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.75,
        },
        ...competitorRoutes,
    ];
}
