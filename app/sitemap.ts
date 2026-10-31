import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: "2026-10-23",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/commercial-estimating-service`,
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/residential-estimating-services`,
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/painting-estimating-services`,
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: "2026-10-31",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
