import { MetadataRoute } from "next";
import { promises as fs } from "fs";
import path from "path";

const BASE_URL = "https://www.coastalsolarco.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const staticPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/solar-panels-nsw", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/faq", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/solar-systems", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/solar-systems/residential", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/solar-systems/commercial", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/solar-systems/battery-storage", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/rebates", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/how-it-works", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/solar-calculator", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/locations", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/locations/wollongong", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/locations/nowra", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/locations/kiama", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/shellharbour", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/ulladulla", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/thirroul", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/dapto", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/albion-park", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/gerringong", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/berry", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/jervis-bay", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/huskisson", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/bomaderry", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/compare", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/compare/vs-solarblu", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/compare/vs-hott-electrics", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/compare/vs-nowra-solar", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/compare/vs-shoalhaven-solar", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/about/mo", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  // Dynamically load all blog articles from meta.json
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const metaPath = path.join(process.cwd(), "src/app/blog/_articles/meta.json");
    const metaRaw = await fs.readFile(metaPath, "utf-8");
    const articles: { slug: string; date: string }[] = JSON.parse(metaRaw);
    blogPages = articles.map((article) => ({
      url: `${BASE_URL}/blog/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // meta.json unreadable — blog pages omitted gracefully
  }

  const staticUrls: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [...staticUrls, ...blogPages];
}
