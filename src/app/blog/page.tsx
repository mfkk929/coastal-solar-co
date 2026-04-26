import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Solar Tips & Guides for NSW Homeowners | Coastal Solar Co. Blog",
  description:
    "Rebate news, installation guides, and honest solar advice for Wollongong, Kiama, and the South Coast. Written by Coastal Solar Co.'s CEC-accredited team.",
  alternates: { canonical: "https://coastalsolarco.com/blog" },
  openGraph: {
    title: "Solar Blog | Coastal Solar Co.",
    description: "Rebate news, installation guides, and honest solar advice for Illawarra & South Coast homeowners.",
    url: "https://coastalsolarco.com/blog",
  },
};

interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  image?: string;
  imageAlt?: string;
}

function getArticles(): ArticleMeta[] {
  const metaPath = path.join(process.cwd(), "src/app/blog/_articles/meta.json");
  const raw = fs.readFileSync(metaPath, "utf-8");
  const articles: ArticleMeta[] = JSON.parse(raw);
  return [...articles].reverse();
}

const categoryColors: Record<string, string> = {
  Rebates: "#E8A020",
  "Battery Storage": "#2B4C5E",
  "Buying Guide": "#16a34a",
  "Local Guide": "#7c3aed",
  ROI: "#E8A020",
  Battery: "#2B4C5E",
  "Buyer Guide": "#16a34a",
  Local: "#7c3aed",
};

export default function BlogPage() {
  const articles = getArticles();

  return (
    <>
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
            Solar Blog
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto">
            Honest guides, rebate news, and energy tips from Wollongong&apos;s most trusted solar installer.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, i) => {
              const color = categoryColors[article.category] ?? "#1a3a5c";
              return (
                <Link
                  key={i}
                  href={`/blog/${article.slug}`}
                  aria-label={article.title}
                  className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-2xl"
                >
                  <article className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover h-full transition-shadow group-hover:shadow-lg">
                    <div className="relative h-48 overflow-hidden">
                      {article.image ? (
                        <Image
                          src={article.image}
                          alt={article.imageAlt ?? article.title}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={i < 2}
                        />
                      ) : (
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg, var(--color-primary) 0%, ${color}88 100%)`,
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <span
                        className="absolute bottom-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: color }}
                      >
                        {article.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h2
                        className="text-lg font-bold mb-3 leading-snug transition-colors group-hover:text-amber-600"
                        style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}
                      >
                        {article.title}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                      <span
                        className="text-sm font-bold inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        Read more →
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Ready to calculate your savings?
          </h2>
          <Link href="/solar-calculator" className="btn-primary text-lg px-8 py-4">
            Free Solar Calculator →
          </Link>
        </div>
      </section>
    </>
  );
}
