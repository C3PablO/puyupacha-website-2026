import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/admin",
          destination: "/admin/index.html",
        },
        {
          source: "/admin/:path*",
          destination: "/admin/:path*",
        },
      ],
    };
  },
};

export default withNextIntl(nextConfig);
