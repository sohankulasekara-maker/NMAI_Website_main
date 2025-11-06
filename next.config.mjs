/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false, // let Next optimize images for clarity
    deviceSizes: [340, 680, 1024, 1536, 1920], // sizes Next will generate
    imageSizes: [64, 128, 256, 512],           // for icons/thumbnails
    formats: ["image/avif", "image/webp"],     // modern formats
  },
};

export default nextConfig;
