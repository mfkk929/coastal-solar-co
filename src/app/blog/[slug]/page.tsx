import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  image?: string;
  imageAlt?: string;
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
  const ogImage = article.image ?? "https://coastalsolarco.com/og-image.jpg";
  return {
    title: `${article.title} | Coastal Solar Co.`,
    description: article.metaDescription ?? article.excerpt,
    alternates: { canonical: `https://coastalsolarco.com/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.metaDescription ?? article.excerpt,
      url: `https://coastalsolarco.com/blog/${slug}`,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.imageAlt ?? article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription ?? article.excerpt,
      images: [ogImage],
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

  const faqPairs: { q: string; a: string }[] = [];
  if (content) {
    const re = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
    let m: RegExpExecArray | null;
    while ((m = re.exec(content)) !== null) {
      const q = m[1].replace(/<[^>]+>/g, "").trim();
      const a = m[2].replace(/<[^>]+>/g, "").trim();
      if (q && a && q.length > 8 && a.length > 20) {
        faqPairs.push({ q, a });
      }
    }
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription ?? article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: "Mo",
      worksFor: {
        "@type": "Organization",
        name: "Coastal Solar Co.",
        url: "https://coastalsolarco.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Coastal Solar Co.",
      url: "https://coastalsolarco.com",
      logo: {
        "@type": "ImageObject",
        url: "https://coastalsolarco.com/logo.png",
      },
    },
    mainEntityOfPage: `https://coastalsolarco.com/blog/${slug}`,
    url: `https://coastalsolarco.com/blog/${slug}`,
    image: article.image
      ? [
          {
            "@type": "ImageObject",
            url: article.image,
            width: 1200,
            height: 630,
            caption: article.imageAlt ?? article.title,
          },
        ]
      : "https://coastalsolarco.com/og-image.jpg",
    articleSection: article.category,
    inLanguage: "en-AU",
    keywords: [article.category, "solar NSW", "solar Wollongong", "solar Illawarra"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://coastalsolarco.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://coastalsolarco.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://coastalsolarco.com/blog/${slug}`,
      },
    ],
  };

  const faqSchema =
    faqPairs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqPairs.map((p) => ({
            "@type": "Question",
            name: p.q,
            acceptedAnswer: { "@type": "Answer", text: p.a },
          })),
        }
      : null;

  const relatedArticles = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/blog" className="hover:text-amber-600">Blog</Link></li>
            <li aria-hidden="true">›</li>
            <li className="font-medium truncate" style={{ color: "var(--color-primary)" }}>{article.title}</li>
          </ol>
        </div>
      </nav>
      <section
        className="relative text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, var(--color-primary) 0%, ${categoryColor}99 100%)` }}
      >
        {article.image && (
          <>
            <Image
              src={article.image}
              alt={article.imageAlt ?? article.title}
              fill
              sizes="100vw"
              className="object-cover opacity-40"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, var(--color-primary)cc 0%, ${categoryColor}cc 100%)`,
              }}
            />
          </>
        )}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
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

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
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
          </div>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="py-16" style={{ backgroundColor: "var(--color-accent)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-black mb-8"
              style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}
            >
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  aria-label={a.title}
                  className="group block bg-white rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  {a.image && (
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={a.image}
                        alt={a.imageAlt ?? a.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-full text-white mb-3 inline-block"
                      style={{ backgroundColor: categoryColors[a.category] ?? "#1a3a5c" }}
                    >
                      {a.category}
                    </span>
                    <h3
                      className="font-bold text-base mb-2 leading-snug transition-colors group-hover:text-amber-600"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {a.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{a.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 text-white" style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-black mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Ready to go solar?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Get a free quote from Coastal Solar Co. — CEC-accredited, Kiama-based installers serving the Illawarra &amp; South Coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Get a Free Quote →
            </Link>
            <a href="tel:0493531857" className="btn-outline-white text-lg px-8 py-4">
              Call 0493 531 857
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
