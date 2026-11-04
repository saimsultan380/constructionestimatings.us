import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: "2026-10-23",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/commercial-estimating-service/"),
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/residential-estimating-services/"),
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/painting-estimating-services/"),
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/industrial-estimating-services/"),
      lastModified: "2026-11-02",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/concrete-estimating-services/"),
      lastModified: "2026-11-02",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/fireproofing-estimating-services/"),
      lastModified: "2026-11-04",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/electrical-estimating-services/"),
      lastModified: "2026-11-04",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/masonry-estimating-services/"),
      lastModified: "2026-11-04",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact/"),
      lastModified: "2026-10-31",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
