import type { NextConfig } from "next";
import { legacyHosts, siteHost } from "./lib/site";

const nextConfig: NextConfig = {
  trailingSlash: true,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${siteHost}` }],
        destination: `https://${siteHost}/:path*`,
        permanent: true,
      },
      ...legacyHosts.flatMap((host) => [
        {
          source: "/:path*",
          has: [{ type: "host" as const, value: host }],
          destination: `https://${siteHost}/:path*`,
          permanent: true,
        },
        {
          source: "/:path*",
          has: [{ type: "host" as const, value: `www.${host}` }],
          destination: `https://${siteHost}/:path*`,
          permanent: true,
        },
      ]),
    ];
  },
};

export default nextConfig;
