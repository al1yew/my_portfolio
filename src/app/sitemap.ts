import type { MetadataRoute } from "next";
import { site } from "../data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-05-10"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
