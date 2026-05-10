import { site } from "../data/portfolio";

export default function sitemap() {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-05-10"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
