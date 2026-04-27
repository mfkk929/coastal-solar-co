import { MetadataRoute } from "next";

/**
 * robots.txt — explicitly allow AI search crawlers (GPTBot, ClaudeBot,
 * PerplexityBot, Google-Extended) so Coastal Solar Co. content can be
 * cited in AI Overviews, ChatGPT, Perplexity and Claude answers.
 * Blocks internal/admin/api routes only.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Traditional search engines
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      // AI search & LLM crawlers — explicitly allowed for citation
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: "https://www.coastalsolarco.com/sitemap.xml",
    host: "https://www.coastalsolarco.com",
  };
}
