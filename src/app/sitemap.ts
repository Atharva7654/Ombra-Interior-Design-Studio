import type { MetadataRoute } from "next";
import { articles, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticRoutes = ["", "/contact", "/privacy", "/terms"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.6,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${base}/journal/${article.slug}`,
    lastModified: new Date(article.isoDate),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...articleRoutes];
}
