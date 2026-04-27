/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath: '/portpolio', // 만약 https://jade9.github.io/portpolio 주소로 배포하신다면 주석을 해제해주세요!
};

export default nextConfig;
