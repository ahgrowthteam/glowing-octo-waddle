/** @type {import('next').NextConfig} */
const nextConfig = {
    // Vercel and VPS environments do not need 'export' as they run Node.js servers natively.
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
