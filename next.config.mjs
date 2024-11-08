/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth/login",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
