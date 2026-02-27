/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  experimental: { serverComponentsExternalPackages: ['mongoose'] }
};
export default nextConfig;
