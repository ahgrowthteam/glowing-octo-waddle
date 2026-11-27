// Kept identical to next.config.mjs so no deploy path can drop the CSP, security headers or redirects.
// build:vercel no longer overwrites next.config.mjs; edit next.config.mjs and mirror changes here.
/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    async redirects() {
        return [
            {
                source: '/demo',
                destination: '/canvas-quiz-solver-free-demo',
                permanent: true,
            },
            {
                source: '/classlogy-vs-examghost',
                destination: '/classology-vs-examghost',
                permanent: true,
            },
            {
                source: '/collegetools-vs-examghost',
                destination: '/mindko-vs-examghost',
                permanent: true,
            },
            {
                source: '/canvasanswers-vs-examghost',
                destination: '/smartsolve-vs-examghost',
                permanent: true,
            },
            {
                source: '/cheatpal-vs-examghost',
                destination: '/compare',
                permanent: true,
            },
            {
                source: '/mylabsolver-vs-examghost',
                destination: '/compare',
                permanent: true,
            },
            {
                source: '/quizper-vs-examghost',
                destination: '/compare',
                permanent: true,
            },
            {
                source: '/studybotpro-vs-examghost',
                destination: '/compare',
                permanent: true,
            },
            {
                source: '/compare-canvas-hack-extensions',
                destination: '/compare',
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                // Static images are not content-hashed, so cache for a day and revalidate in the background
                // (they previously re-validated on every request: max-age=0).
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, stale-while-revalidate=604800',
                    },
                ],
            },
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; media-src 'self' blob: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https://www.youtube-nocookie.com https://www.youtube.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
