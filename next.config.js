/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pemweb-api.aldam.my.id",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["pemweb-api.aldam.my.id"],
  },
};

module.exports = nextConfig;
