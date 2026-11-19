import { MetadataRoute } from 'next';

// Public pages are open to all mainstream search engines and AI crawlers.
// Only internal API routes are disallowed.
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
                    // Search engines
                    'Googlebot',
                    'Bingbot',
                    'Applebot',
                    // OpenAI (training, ChatGPT Search, user-initiated fetches)
                    'GPTBot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    // Anthropic (training, Claude search, user-initiated fetches)
                    'ClaudeBot',
                    'Claude-SearchBot',
                    'Claude-User',
                    // Perplexity
                    'PerplexityBot',
                    'Perplexity-User',
                    // Google Gemini / Apple Intelligence controls
                    'Google-Extended',
                    'Applebot-Extended',
                    // Common Crawl
                    'CCBot',
                ],
                allow: '/',
                disallow: ['/api/'],
            },
        ],
        sitemap: 'https://www.examghost.com/sitemap.xml',
    };
}
