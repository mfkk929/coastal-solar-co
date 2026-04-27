import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import faqsData from "@/data/faqs.json";

export const metadata: Metadata = {
  title: "Solar & Battery FAQ — 500+ Answers | Coastal Solar Co.",
  description:
    "The most complete solar and battery FAQ for NSW. 500+ answers on costs, rebates, batteries, STCs, installation, inverters, VPPs and more. Updated 2026.",
  alternates: { canonical: "https://www.coastalsolarco.com/faq" },
  openGraph: {
    title: "Solar & Battery FAQ — 500+ Answers",
    description:
      "The most complete solar & battery FAQ for NSW: costs, rebates, batteries, STCs, installation, warranties, inverters and more.",
    url: "https://www.coastalsolarco.com/faq",
    type: "website",
  },
};

const totalFaqs = (faqsData as { faqs: unknown[] }).faqs.length;

// Category order for the in-page ToC (matches the FAQ spreadsheet categories)
const categories = [
  "Solar Basics",
  "System Sizing",
  "Costs & Pricing",
  "Rebates & STC",
  "Cheaper Home Batteries Program",
  "Feed-in Tariffs",
  "Solar Panels",
  "Inverters",
  "Batteries",
  "Installation Process",
  "Council & Approvals (NSW)",
  "Grid Connection",
  "Performance & Monitoring",
  "Maintenance & Cleaning",
  "Warranties",
  "ROI & Payback",
  "Bills & Savings",
  "Roof Suitability",
  "Shading & Orientation",
  "EV Charging",
  "Virtual Power Plants",
  "Solar Finance",
  "Insurance & Home Value",
  "Troubleshooting",
  "Illawarra/NSW Local",
  "Safety",
];

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function FAQPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.coastalsolarco.com" },
      { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.coastalsolarco.com/faq" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li className="font-medium" style={{ color: "var(--color-primary)" }}>FAQ</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="py-16 text-white"
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary) 0%, #2B4C5E 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl lg:text-5xl font-black mb-4 leading-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Solar &amp; Battery FAQ
          </h1>
          <p className="text-xl text-white/85 max-w-3xl">
            {totalFaqs}+ answers on solar panels, batteries, rebates, STCs,
            inverters, installation and everything in between. Updated 2026 for
            NSW households and businesses.
          </p>
          <p className="text-white/70 text-sm mt-6">
            Can&apos;t find your answer? Call us on{" "}
            <a href="tel:0493531857" className="underline hover:text-white">
              0493 531 857
            </a>{" "}
            — 5-minute callback guarantee.
          </p>
        </div>
      </section>

      {/* Category ToC */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-500">
            Jump to a topic
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <a
                key={c}
                href={`#${slug(c)}`}
                className="text-sm px-3 py-1.5 rounded-full border transition-colors hover:bg-gray-50"
                style={{
                  borderColor: "var(--color-secondary)",
                  color: "var(--color-primary)",
                }}
              >
                {c}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All FAQs, grouped by category */}
      <FAQSection
        route="hub"
        title="Every question we've been asked"
        intro="Grouped by topic. Every answer reflects 2026 NSW pricing, rebates and network rules."
        limit={600}
        grouped
        variant="tint"
      />

      {/* Bottom CTA */}
      <section
        className="py-16 text-white"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-black mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Still have questions?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Mo answers every first call personally. CEC-accredited, Kiama-based,
            servicing Wollongong to Ulladulla.
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
