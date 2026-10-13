import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: ['GPTBot', 'PerplexityBot', 'ClaudeBot', 'Google-Extended', 'Applebot'],
                allow: '/',
            }
        ],
        sitemap: 'https://examghost.com/sitemap.xml',
        host: 'https://examghost.com',
    };
}
