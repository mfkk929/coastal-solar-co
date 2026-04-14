import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Blog | News & Guides | Coastal Solar Co.",
  description:
    "Solar guides, rebate news, and energy tips for South Coast homeowners from Coastal Solar Co.",
  alternates: { canonical: "https://coastalsolar.com.au/blog" },
  openGraph: {
    title: "Solar Blog | Coastal Solar Co.",
    description: "Solar guides and energy tips for South Coast homeowners.",
    url: "https://coastalsolar.com.au/blog",
  },
};

const articles = [
  {
    slug: "2026-stc-rebate-explained",
    title: "The 2026 STC Solar Rebate Explained — And Why You Should Act Now",
    date: "April 10, 2026",
    category: "Rebates",
    excerpt:
      "The Federal Government's Small-scale Technology Certificate scheme is the biggest solar rebate available in Australia — worth $2,800–$3,800 on a standard 6.6kW install. Here's exactly how it works, what you'll get in 2026, and why waiting costs you money.",
    readTime: "6 min read",
  },
  {
    slug: "battery-storage-worth-it-2026",
    title: "Is Battery Storage Worth It in 2026? An Honest Look at the Numbers",
    date: "March 28, 2026",
    category: "Battery Storage",
    excerpt:
      "Feed-in tariffs have dropped to 5–8¢/kWh while electricity rates sit at 28–33¢/kWh. We run the numbers on whether adding a Tesla Powerwall or BYD battery makes financial sense for South Coast homeowners.",
    readTime: "8 min read",
  },
  {
    slug: "solar-installer-checklist",
    title: "10 Questions to Ask Any Solar Installer Before You Sign Anything",
    date: "March 15, 2026",
    category: "Buying Guide",
    excerpt:
      "Not all solar quotes are equal — and some are downright deceptive. Before you sign anything, ask these 10 questions. A reputable installer will answer all of them without hesitation.",
    readTime: "5 min read",
  },
  {
    slug: "wollongong-solar-guide",
    title: "Going Solar in Wollongong: What Illawarra Homeowners Need to Know",
    date: "February 20, 2026",
    category: "Local Guide",
    excerpt:
      "Wollongong and the Illawarra have some of the best solar conditions in NSW — but there are local factors that affect your system's performance. Here's what we've learned from installing 1,200+ systems in the region.",
    readTime: "7 min read",
  },
];

const categoryColors: Record<string, string> = {
  Rebates: "#E8A020",
  "Battery Storage": "#2B4C5E",
  "Buying Guide": "#16a34a",
  "Local Guide": "#7c3aed",
};

export default function BlogPage() {
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
            {articles.map((article, i) => (
              <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover">
                {/* Article header graphic */}
                <div
                  className="h-48 flex items-end p-6"
                  style={{
                    background: `linear-gradient(135deg, var(--color-primary) 0%, ${categoryColors[article.category]}88 100%)`,
                  }}
                >
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: categoryColors[article.category] }}
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
                  <h2 className="text-lg font-bold mb-3 leading-snug" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-sm font-bold"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
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
