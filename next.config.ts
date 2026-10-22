import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // the homepage is a static page with its own webgl scene; imprint and privacy stay next routes
  async rewrites() {
    return [{ source: "/", destination: "/home.html" }];
  },
};

export default nextConfig;
