import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: [
                    'GPTBot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'PerplexityBot',
                    'Perplexity-User',
                    'ClaudeBot',
                    'Claude-SearchBot',
                    'Claude-User',
                    'Google-Extended',
                    'Applebot',
                    'Applebot-Extended',
                    'CCBot',
                ],
                allow: '/',
            },
        ],
        sitemap: 'https://examghost.com/sitemap.xml',
    };
}
