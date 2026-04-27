import Link from "next/link";
import type { ReactNode } from "react";

export interface CompareRow {
  factor: string;
  us: string;
  them: string;
}

export interface CompareFaq {
  q: string;
  a: string;
}

export interface CompareDeepSection {
  heading: string;
  /** Rendered as <p> inside the section. Accepts ReactNode for inline links. */
  paragraphs: ReactNode[];
}

export interface ComparePageLayoutProps {
  competitor: string;
  slug: string;
  h1: string;
  subhead: string;
  tldr: string;
  rows: CompareRow[];
  deepSections: CompareDeepSection[];
  chooseThemHeading: string;
  chooseThemList: string[];
  chooseUsHeading: string;
  chooseUsList: string[];
  faqs: CompareFaq[];
  ctaHeading: string;
  ctaLead: string;
  datePublished?: string;
  dateModified?: string;
}

export default function ComparePageLayout({
  competitor,
  slug,
  h1,
  subhead,
  tldr,
  rows,
  deepSections,
  chooseThemHeading,
  chooseThemList,
  chooseUsHeading,
  chooseUsList,
  faqs,
  ctaHeading,
  ctaLead,
  datePublished = "2026-04-22",
  dateModified = "2026-04-22",
}: ComparePageLayoutProps) {
  const url = `https://www.coastalsolarco.com/compare/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    author: { "@type": "Person", name: "Mo", url: "https://www.coastalsolarco.com/about/mo" },
    publisher: {
      "@type": "Organization",
      name: "Coastal Solar Co.",
      url: "https://www.coastalsolarco.com",
      logo: { "@type": "ImageObject", url: "https://www.coastalsolarco.com/logo.png" },
    },
    datePublished,
    dateModified,
    mainEntityOfPage: url,
    inLanguage: "en-AU",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.coastalsolarco.com" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.coastalsolarco.com/compare" },
      { "@type": "ListItem", position: 3, name: `vs ${competitor}`, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo;{" "}
            <Link href="/compare" className="hover:text-white">Compare</Link> &rsaquo;{" "}
            <span className="text-white">vs {competitor}</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            {h1}
          </h1>
          <p className="text-xl text-white/85 max-w-2xl">{subhead}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TL;DR */}
          <div className="rounded-2xl p-8 mb-10" style={{ backgroundColor: "var(--color-accent)" }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>
              TL;DR
            </h2>
            <p className="text-gray-700">{tldr}</p>
          </div>

          {/* Comparison Table */}
          <h2 className="text-2xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Head-to-Head Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "rgba(43,76,94,0.15)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "var(--color-primary)" }}>
                  <th className="text-left px-6 py-4 text-white font-semibold">Factor</th>
                  <th className="text-left px-6 py-4 font-bold" style={{ color: "var(--color-secondary)" }}>
                    Coastal Solar Co.
                  </th>
                  <th className="text-left px-6 py-4 text-white font-semibold">{competitor}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.factor}
                    className={i % 2 === 0 ? "bg-white" : ""}
                    style={i % 2 !== 0 ? { backgroundColor: "var(--color-accent)" } : {}}
                  >
                    <td className="px-6 py-4 font-medium text-gray-800">{row.factor}</td>
                    <td className="px-6 py-4 font-semibold" style={{ color: "var(--color-primary)" }}>
                      {row.us}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Deep dive sections */}
          {deepSections.map((section, si) => (
            <div key={si}>
              <h2
                className="text-2xl font-black mt-16 mb-4"
                style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}
              >
                {section.heading}
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {section.paragraphs.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Decision */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="rounded-2xl p-6 border" style={{ borderColor: "rgba(43,76,94,0.15)" }}>
              <h3 className="font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>
                {chooseThemHeading}
              </h3>
              <ul className="text-gray-700 text-sm space-y-2 list-disc pl-4">
                {chooseThemList.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
              <h3 className="font-bold mb-3" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}>
                {chooseUsHeading}
              </h3>
              <ul className="text-white/85 text-sm space-y-2 list-disc pl-4">
                {chooseUsList.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <h2
            className="text-2xl font-black mt-16 mb-6"
            style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-gray-100 pb-6">
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}
                >
                  {f.q}
                </h3>
                <p className="text-gray-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            {ctaHeading}
          </h2>
          <p className="text-white/85 mb-8">{ctaLead}</p>
          <Link href="/solar-calculator" className="btn-primary text-lg">
            Calculate My Savings →
          </Link>
        </div>
      </section>
    </>
  );
}
