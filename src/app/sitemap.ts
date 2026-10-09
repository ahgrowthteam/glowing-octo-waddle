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
            url: `${baseUrl}/compare`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/features`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        ...competitorRoutes,
    ];
}
