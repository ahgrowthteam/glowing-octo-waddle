/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export' configures Next.js to build a static HTML/CSS/JS export
    // which is required for shared hosting environments like cPanel.
    output: 'export',
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
