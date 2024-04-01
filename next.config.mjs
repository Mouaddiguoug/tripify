/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tripify-backend-amkd.onrender.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
