import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import type { ReactNode } from "react";

export interface LocationStat {
  value: string;
  label: string;
}

export interface LocationSection {
  heading: string;
  paragraphs: ReactNode[];
}

export interface LocationTestimonial {
  quote: string;
  author: string;
  suburb?: string;
  systemSize?: string;
  rating?: number;
}

export interface LocationPricingRow {
  size: string;
  label: string;
  price: string;
  savings: string;
  best: string;
  highlight?: boolean;
}

export interface LocationPageData {
  /** The primary city/town name, e.g. "Wollongong" */
  name: string;
  /** URL slug, e.g. "wollongong" */
  slug: string;
  postcode: string;
  /** Suburbs or neighbouring towns this page covers */
  serviceAreas: string[];
  /** e.g. "Endeavour Energy" or "Essential Energy" */
  gridOperator: string;
  /** Peak Sun Hours/day */
  peakSunHours: string;
  metaTitle: string;
  metaDescription: string;
  heroH1: string;
  heroSubhead: string;
  stats: LocationStat[];
  /** 3-5 prose sections with suburb-specific expertise */
  sections: LocationSection[];
  pricingNote?: string;
  pricingRows: LocationPricingRow[];
  testimonial?: LocationTestimonial;
  faqIntro: string;
  faqLimit?: number;
  /** Up to 3 related blog slugs shown in "Further reading" */
  relatedArticles?: { slug: string; title: string }[];
  ctaHeading: string;
  ctaSubhead: string;
}

const DEFAULT_PRICING_ROWS: LocationPricingRow[] = [
  { size: "6.6kW", label: "Starter", price: "$5,500–$6,500", savings: "$1,200–$1,800/yr", best: "2–3 person household" },
  { size: "10kW", label: "Popular", price: "$7,800–$9,500", savings: "$1,800–$2,600/yr", best: "3–5 person household", highlight: true },
  { size: "10kW + Battery", label: "Premium", price: "$14,000–$17,000", savings: "$2,400–$3,200/yr", best: "Energy independence" },
];

export function getDefaultPricingRows() {
  return DEFAULT_PRICING_ROWS;
}

// Decode HTML-style ampersands so JSX renders "&" instead of "&amp;"
function clean(s: string): string {
  return s.replace(/&amp;/g, "&");
}

export default function LocationPageLayout({ data }: { data: LocationPageData }) {
  const url = `https://www.coastalsolarco.com/locations/${data.slug}`;
  const pricingRows = data.pricingRows.length ? data.pricingRows : DEFAULT_PRICING_ROWS;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": `Coastal Solar Co. — Solar Panels ${data.name}`,
        "url": url,
        "telephone": "+61493531857",
        "priceRange": "$$",
        "image": "https://www.coastalsolarco.com/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": data.name,
          "addressRegion": "NSW",
          "postalCode": data.postcode,
          "addressCountry": "AU",
        },
        "areaServed": [{ "@type": "City", "name": data.name }, ...data.serviceAreas.map((s) => ({ "@type": "Place", name: s }))],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.coastalsolarco.com" },
          { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.coastalsolarco.com/locations" },
          { "@type": "ListItem", position: 3, name: data.name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo;{" "}
            <Link href="/locations" className="hover:text-white">Locations</Link> &rsaquo;{" "}
            <span className="text-white">{data.name}</span>
          </nav>

          {/* STC step-down urgency badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold"
            style={{ backgroundColor: "rgba(232,160,32,0.18)", color: "var(--color-secondary)" }}
          >
            <span aria-hidden="true">⚡</span>
            <span>STC rebate steps down 1 Jan 2027 — lock in 2026 pricing</span>
          </div>

          <h1
            className="text-4xl lg:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {clean(data.heroH1)}
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-8">{data.heroSubhead}</p>

          {/* Hero CTAs incl. click-to-call */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings →</Link>
            <Link href="/contact" className="btn-outline text-lg">Get Free Quote</Link>
            <a
              href="tel:0493531857"
              className="btn-outline text-lg"
              aria-label="Call Coastal Solar Co. on 0493 531 857"
            >
              <span aria-hidden="true">☎️</span> 0493 531 857
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75">
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> CEC-accredited installer</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> 10-yr workmanship warranty</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> 5-min callback guarantee</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> No deposit required</span>
          </div>
        </div>
      </section>

      {/* Local expertise content + stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Prose columns */}
            <div className="lg:col-span-2 space-y-10">
              {data.sections.map((s, i) => (
                <div key={i}>
                  <h2
                    className="text-2xl lg:text-3xl font-black mb-4"
                    style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}
                  >
                    {clean(s.heading)}
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    {s.paragraphs.map((p, pi) => (
                      <p key={pi}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}

              {data.relatedArticles && data.relatedArticles.length > 0 && (
                <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--color-accent)" }}>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Further reading
                  </p>
                  <div className="space-y-2">
                    {data.relatedArticles.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/blog/${a.slug}`}
                        className="block text-sm font-medium hover:underline"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        → {a.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Stats sidebar */}
            <aside>
              <div
                className="rounded-2xl p-8 text-white sticky top-6"
                style={{ background: "linear-gradient(135deg, #2B4C5E, #1e3545)" }}
              >
                <div className="text-center mb-6">
                  <div className="text-5xl font-black mb-1" style={{ color: "var(--color-secondary)" }}>
                    {data.peakSunHours}
                  </div>
                  <div className="text-sm font-semibold text-white/80">Peak Sun Hours / Day</div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  {data.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-black" style={{ color: "var(--color-secondary)" }}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/70 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/60 text-center">
                  Grid: {data.gridOperator}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 section-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            {data.name} Solar Pricing (After Rebates)
          </h2>
          {data.pricingNote && (
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">{data.pricingNote}</p>
          )}
          <div className="grid md:grid-cols-3 gap-6">
            {pricingRows.map((pkg) => (
              <div
                key={pkg.size}
                className={`rounded-2xl p-8 ${pkg.highlight ? "text-white shadow-xl" : "bg-white shadow-sm"}`}
                style={pkg.highlight ? { backgroundColor: "var(--color-primary)" } : {}}
              >
                {pkg.highlight && (
                  <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--color-secondary)" }}>
                    Most Popular
                  </div>
                )}
                <div className="text-sm font-semibold mb-1" style={{ color: pkg.highlight ? "rgba(255,255,255,0.7)" : "var(--color-secondary)" }}>
                  {pkg.label}
                </div>
                <div className="text-2xl font-black mb-1" style={{ fontFamily: "var(--font-montserrat)", color: pkg.highlight ? "#fff" : "var(--color-primary)" }}>
                  {pkg.size}
                </div>
                <div className="text-3xl font-black mb-3" style={{ color: "var(--color-secondary)" }}>{pkg.price}</div>
                <div className="text-sm mb-2" style={{ color: pkg.highlight ? "rgba(255,255,255,0.8)" : "var(--color-text)" }}>
                  Saves {pkg.savings}
                </div>
                <div className="text-xs" style={{ color: pkg.highlight ? "rgba(255,255,255,0.6)" : "#666" }}>
                  Best for: {pkg.best}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/solar-calculator" className="btn-primary text-lg">
              Get My Exact {data.name} Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial (optional) */}
      {data.testimonial && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="text-4xl mb-6" style={{ color: "var(--color-secondary)" }}>
              {"★".repeat(data.testimonial.rating ?? 5)}
            </div>
            <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
              &ldquo;{data.testimonial.quote}&rdquo;
            </blockquote>
            <cite className="font-semibold not-italic" style={{ color: "var(--color-primary)" }}>
              — {clean(data.testimonial.author)}
              {data.testimonial.suburb ? `, ${clean(data.testimonial.suburb)}` : ""}
              {data.testimonial.systemSize ? ` (${clean(data.testimonial.systemSize)})` : ""}
            </cite>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQSection
        route="locations"
        title={`${data.name} Solar FAQs`}
        intro={data.faqIntro}
        limit={data.faqLimit ?? 10}
        locationName={data.name}
        variant="tint"
      />

      {/* Final CTA with risk reversal */}
      <section className="py-16 gradient-hero text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            {clean(data.ctaHeading)}
          </h2>
          <p className="text-white/85 mb-6 text-lg">{data.ctaSubhead}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings →</Link>
            <Link href="/contact" className="btn-outline text-lg">Talk to Us Now</Link>
            <a href="tel:0493531857" className="btn-outline text-lg" aria-label="Call Coastal Solar Co. on 0493 531 857">
              <span aria-hidden="true">☎️</span> 0493 531 857
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span>✓ Free site assessment</span>
            <span>✓ No deposit required</span>
            <span>✓ 5-minute callback</span>
            <span>✓ 10-year workmanship warranty</span>
          </div>
        </div>
      </section>
    </>
  );
}
