import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Panels Albion Park | Coastal Solar Co.",
  description: "Solar panel installation in Albion Park & Calderwood. 6.6kW from $5,500 after rebates. CEC-accredited local team, 5-minute callback, 6-day installation, 10-year warranty.",
  alternates: { canonical: "https://coastalsolarco.com/locations/albion-park" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Coastal Solar Co. — Solar Panels Albion Park",
      "url": "https://coastalsolarco.com/locations/albion-park",
      "telephone": "0493531857",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Albion Park",
        "addressRegion": "NSW",
        "postalCode": "2527",
        "addressCountry": "AU",
      },
      "areaServed": { "@type": "City", "name": "Albion Park" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://coastalsolarco.com" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://coastalsolarco.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Albion Park", "item": "https://coastalsolarco.com/locations/albion-park" },
      ],
    },
  ],
};

export default function AlbionParkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo; <Link href="/locations" className="hover:text-white">Locations</Link> &rsaquo; <span className="text-white">Albion Park</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Solar Panels for Albion Park Homes
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-8">Solar panels in Albion Park, Albion Park Rail and Calderwood.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings &rarr;</Link>
            <Link href="/contact" className="btn-outline text-lg">Get Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                Solar Installation in Albion Park
              </h2>
              <p className="text-gray-700 mb-4">Albion Park and its surrounding suburbs — including Albion Park Rail, Calderwood, and Tullimbar — are among the fastest-growing areas in the Illawarra. New home builders in these estates are ideally positioned to incorporate solar from day one, and we work with many builders and homeowners in the area.</p>
              <p className="text-gray-700 mb-4">We handle all grid connection paperwork — you don&apos;t fill in a single form. Every install includes a 30-minute walkthrough and monitoring app setup.</p>
              <p className="text-gray-700">From quote to installation, our average turnaround is just 6 business days.</p>
            </div>
            <div className="rounded-2xl p-10 text-white" style={{ background: "linear-gradient(135deg, #2B4C5E, #1e3545)" }}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "74%", label: "Average bill reduction" },
                  { val: "6 days", label: "Quote to install" },
                  { val: "10yr", label: "Workmanship warranty" },
                  { val: "5 min", label: "Callback guarantee" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl font-black" style={{ color: "var(--color-secondary)" }}>{s.val}</div>
                    <div className="text-sm text-white/70 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-10" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Albion Park Solar Pricing (After Rebates)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { size: "6.6kW Starter", price: "$5,500–$6,500", savings: "$1,200–$1,800/yr", best: "2–3 person household" },
              { size: "10kW Popular", price: "$7,800–$9,500", savings: "$1,800–$2,600/yr", best: "3–5 person household", highlight: true },
              { size: "10kW + Battery", price: "$14,000–$17,000", savings: "$2,400–$3,200/yr", best: "Energy independence" },
            ].map((pkg) => (
              <div key={pkg.size} className={`rounded-2xl p-8 ${pkg.highlight ? "text-white shadow-xl" : "bg-white shadow-sm"}`}
                style={pkg.highlight ? { backgroundColor: "var(--color-primary)" } : {}}>
                {pkg.highlight && <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--color-secondary)" }}>Most Popular</div>}
                <div className="text-xl font-black mb-2" style={{ fontFamily: "var(--font-montserrat)", color: pkg.highlight ? "#fff" : "var(--color-primary)" }}>{pkg.size}</div>
                <div className="text-3xl font-black mb-2" style={{ color: "var(--color-secondary)" }}>{pkg.price}</div>
                <div className="text-sm mb-1" style={{ color: pkg.highlight ? "rgba(255,255,255,0.8)" : "#555" }}>Saves {pkg.savings}</div>
                <div className="text-xs" style={{ color: pkg.highlight ? "rgba(255,255,255,0.6)" : "#888" }}>Best for: {pkg.best}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/solar-calculator" className="btn-primary text-lg">Get My Exact Albion Park Quote &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-hero text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Ready to go solar in Albion Park?</h2>
          <p className="text-white/85 mb-8 text-lg">No obligation. No pressure. Just honest numbers and a real quote.</p>
          <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings &rarr;</Link>
        </div>
      </section>
    </>
  );
}
