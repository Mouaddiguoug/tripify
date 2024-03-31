/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '13.48.44.188:8000',
                port: '8000',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
