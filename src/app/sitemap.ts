import { MetadataRoute } from "next";

const BASE_URL = "https://coastalsolarco.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/solar-systems/residential", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/solar-systems/commercial", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/solar-systems/battery-storage", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/rebates", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/how-it-works", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/solar-calculator", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/locations", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/wollongong", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/locations/nowra", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/locations/kiama", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/shellharbour", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/ulladulla", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/thirroul", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/dapto", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/albion-park", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/kiama", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/gerringong", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/berry", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/jervis-bay", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/huskisson", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/bomaderry", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/compare", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/compare/vs-solarblu", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/compare/vs-hott-electrics", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/compare/vs-nowra-solar", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/compare/vs-shoalhaven-solar", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return staticPages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
