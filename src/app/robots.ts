import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://ibps-clerk.koydo.app/sitemap.xml",
    host: "https://ibps-clerk.koydo.app",
  };
}
