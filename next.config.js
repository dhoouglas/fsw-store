/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['https://google.com', 'fsw-store.s3.sa-east-1.amazonaws.com'], 
    },
}

module.exports = nextConfig
