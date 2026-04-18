import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  metaDescription?: string;
}

const articlesDir = path.join(process.cwd(), "src/app/blog/_articles");

function getMeta(): ArticleMeta[] {
  const metaPath = path.join(articlesDir, "meta.json");
  const raw = fs.readFileSync(metaPath, "utf-8");
  return JSON.parse(raw);
}

function getContent(slug: string): string | null {
  const filePath = path.join(articlesDir, `${slug}.html`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}

export async function generateStaticParams() {
  const articles = getMeta();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const articles = getMeta();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | Coastal Solar Co.`,
    description: article.metaDescription ?? article.excerpt,
    alternates: { canonical: `https://coastalsolarco.com/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.metaDescription ?? article.excerpt,
      url: `https://coastalsolarco.com/blog/${slug}`,
    },
  };
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

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articles = getMeta();
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const content = getContent(slug);
  const categoryColor = categoryColors[article.category] ?? "#1a3a5c";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.metaDescription ?? article.excerpt,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Person",
      "name": "Mo",
      "worksFor": {
        "@type": "Organization",
        "name": "Coastal Solar Co.",
        "url": "https://coastalsolarco.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Coastal Solar Co.",
      "url": "https://coastalsolarco.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://coastalsolarco.com/logo.png"
      }
    },
    "mainEntityOfPage": `https://coastalsolarco.com/blog/${slug}`,
    "url": `https://coastalsolarco.com/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Hero */}
      <section
        className="py-20 text-white"
        style={{ background: `linear-gradient(135deg, var(--color-primary) 0%, ${categoryColor}99 100%)` }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-white/70 text-sm hover:text-white transition-colors">
              ← Back to Blog
            </Link>
          </div>
          <span
            className="text-xs font-bold px-3 py-1 rounded-full text-white mb-4 inline-block"
            style={{ backgroundColor: categoryColor }}
          >
            {article.category}
          </span>
          <h1
            className="text-3xl lg:text-5xl font-black mb-6 leading-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>By Mo, Coastal Solar Co.</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article body */}
            <div className="lg:col-span-2">
              {content ? (
                <div
                  className="prose prose-lg max-w-none"
                  style={{ color: "var(--color-text)" }}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              ) : (
                <div className="text-gray-500 italic">
                  <p>{article.excerpt}</p>
                  <p className="mt-4">Full article coming soon.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA card */}
                <div
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  <h3
                    className="font-black text-lg mb-3"
                    style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}
                  >
                    Get a Free Quote
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    CEC-accredited installers. 5-minute callback guarantee.
                  </p>
                  <Link href="/contact" className="btn-primary block text-center text-sm py-3">
                    Contact Us →
                  </Link>
                </div>

                {/* Calculator card */}
                <div className="rounded-2xl p-6 border-2" style={{ borderColor: "var(--color-secondary)" }}>
                  <h3
                    className="font-black text-lg mb-3"
                    style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}
                  >
                    See Your Savings
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Find out exactly how much you could save with our free calculator.
                  </p>
                  <Link href="/solar-calculator" className="btn-outline block text-center text-sm py-3">
                    Free Calculator →
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="rounded-2xl p-6 bg-white border border-gray-100">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Why Coastal Solar Co.
                  </p>
                  {[
                    "✅ CEC Accredited",
                    "⚡ 6-Day Installation",
                    "🛡️ 10-Year Warranty",
                    "📞 5-Min Callback",
                  ].map((item, i) => (
                    <p key={i} className="text-sm text-gray-700 mb-2">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
      