/** @type {import('next').NextConfig} */
const remotePatterns = [
    {
        protocol: 'https',
        hostname: 'images.unsplash.com',
    },
    {
        protocol: 'https',
        hostname: 'randomuser.me',
    },
    {
        protocol: 'http',
        hostname: '127.0.0.1',
    },
    {
        protocol: 'http',
        hostname: 'localhost',
    }
];

if (process.env.NEXT_PUBLIC_API_URL) {
    try {
        const parsedUrl = new URL(process.env.NEXT_PUBLIC_API_URL);
        remotePatterns.push({
            protocol: parsedUrl.protocol.replace(':', ''),
            hostname: parsedUrl.hostname,
        });
    } catch (e) {
        console.error('Error parsing NEXT_PUBLIC_API_URL in next.config.mjs:', e);
    }
}

const nextConfig = {
    images: {
        remotePatterns,
    },
};

export default nextConfig;
