/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@woocommerce/woocommerce-rest-api"],
  },
};

export default nextConfig;
