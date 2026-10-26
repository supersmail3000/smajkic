import type { NextConfig } from "next";

// files that never change under the same name are cached for a year
const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];

const nextConfig: NextConfig = {
  // the homepage is a static page with its own webgl scene; imprint and privacy stay next routes
  async rewrites() {
    return [{ source: "/", destination: "/home.html" }];
  },
  // one address for google: www answers with a permanent move to the bare domain the canonical names
  async redirects() {
    return [{ source: "/:path*", has: [{ type: "host", value: "www.smailsmajkic.com" }], destination: "https://smailsmajkic.com/:path*", permanent: true }];
  },
  async headers() {
    return [
      { source: "/vendor/:path*", headers: immutable },
      { source: "/hdri/:path*", headers: immutable },
      { source: "/fonts/:path*", headers: immutable },
    ];
  },
};

export default nextConfig;
