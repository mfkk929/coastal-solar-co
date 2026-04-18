import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Panels Wollongong | Coastal Solar Co.",
  description: "Solar panel installation in Wollongong. 6.6kW from $5,500 after rebates. CEC-accredited local team, 5-minute callback guarantee, 6-day installation, 10-year warranty.",
  alternates: { canonical: "https://coastalsolarco.com/locations/wollongong" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Coastal Solar Co. — Solar Panels Wollongong",
      "url": "https://coastalsolarco.com/locations/wollongong",
      "telephone": "0493531857",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wollongong",
        "addressRegion": "NSW",
        "postalCode": "2500",
        "addressCountry": "AU",
      },
      "areaServed": { "@type": "City", "name": "Wollongong" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://coastalsolarco.com" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://coastalsolarco.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Wollongong", "item": "https://coastalsolarco.com/locations/wollongong" },
      ],
    },
  ],
};

export default function WollongongPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo; <Link href="/locations" className="hover:text-white">Locations</Link> &rsaquo; <span className="text-white">Wollongong</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Solar Panels for Wollongong Homes
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-8">
            Wollongong&apos;s most transparent solar installer. We show you real prices upfront, call you within 5 minutes, and install in an average of 6 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings →</Link>
            <Link href="/contact" className="btn-outline text-lg">Get Free Quote</Link>
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                Why Wollongong is Perfect for Solar
              </h2>
              <p className="text-gray-700 mb-4">
                Wollongong enjoys an average of 4.8 peak sun hours per day — well above the national threshold for strong solar returns. With north-facing blocks common across suburbs like Figtree, Mount Keira, and Keiraville, most Wollongong homes are ideal candidates for a 6.6–10kW system.
              </p>
              <p className="text-gray-700 mb-4">
                The Endeavour Energy network services Wollongong, and we handle all grid connection paperwork and network applications — you don&apos;t fill in a single form.
              </p>
              <p className="text-gray-700">
                We&apos;ve installed systems across all Wollongong suburbs: Figtree, Fairy Meadow, Mount Ousley, Balgownie, Mangerton, Coniston, Port Kembla, and the CBD. We know which roofs face which way, and we design accordingly.
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Further reading</p>
                <Link href="/blog/is-solar-worth-it-wollongong-2026" className="block text-sm font-medium hover:underline" style={{ color: "var(--color-secondary)" }}>
                  → Is Solar Worth It in Wollongong in 2026?
                </Link>
                <Link href="/blog/solar-panel-cost-wollongong-2026" className="block text-sm font-medium hover:underline" style={{ color: "var(--color-secondary)" }}>
                  → Solar Panel Cost Wollongong: Real Prices After Rebates
                </Link>
                <Link href="/blog/nsw-solar-rebates-2026" className="block text-sm font-medium hover:underline" style={{ color: "var(--color-secondary)" }}>
                  → NSW Solar Rebates 2026: Every Incentive Explained
                </Link>
              </div>
            </div>
            <div className="rounded-2xl p-10 text-white text-center" style={{ background: "linear-gradient(135deg, #2B4C5E, #1e3545)" }}>
              <div className="text-5xl font-black mb-2" style={{ color: "var(--color-secondary)" }}>4.8</div>
              <div className="text-lg font-semibold mb-6">Peak Sun Hours / Day</div>
              <div className="grid grid-cols-2 gap-6">
                <div><div className="text-3xl font-black" style={{ color: "var(--color-secondary)" }}>74%</div><div className="text-sm text-white/70">Average bill reduction</div></div>
                <div><div className="text-3xl font-black" style={{ color: "var(--color-secondary)" }}>6 days</div><div className="text-sm text-white/70">Quote to install</div></div>
                <div><div className="text-3xl font-black" style={{ color: "var(--color-secondary)" }}>10yr</div><div className="text-sm text-white/70">Workmanship warranty</div></div>
                <div><div className="text-3xl font-black" style={{ color: "var(--color-secondary)" }}>5 min</div><div className="text-sm text-white/70">Callback guarantee</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 section-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Wollongong Solar Pricing (After Rebates)
          </h2>
          <p className="text-center text-gray-600 mb-10">Indicative pricing for Wollongong homes — get your exact quote in minutes.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { size: "6.6kW", label: "Starter", price: "$5,500–$6,500", savings: "$1,200–$1,800/yr", best: "2–3 person household" },
              { size: "10kW", label: "Popular", price: "$7,800–$9,500", savings: "$1,800–$2,600/yr", best: "3–5 person household", highlight: true },
              { size: "10kW + Battery", label: "Premium", price: "$14,000–$17,000", savings: "$2,400–$3,200/yr", best: "Energy independence" },
            ].map((pkg) => (
              <div key={pkg.size} className={`rounded-2xl p-8 ${pkg.highlight ? "text-white shadow-xl" : "bg-white shadow-sm"}`} style={pkg.highlight ? { backgroundColor: "var(--color-primary)" } : {}}>
                {pkg.highlight && <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--color-secondary)" }}>Most Popular</div>}
                <div className="text-sm font-semibold mb-1" style={{ color: pkg.highlight ? "rgba(255,255,255,0.7)" : "var(--color-secondary)" }}>{pkg.label}</div>
                <div className="text-2xl font-black mb-1" style={{ fontFamily: "var(--font-montserrat)", color: pkg.highlight ? "#fff" : "var(--color-primary)" }}>{pkg.size}</div>
                <div className="text-3xl font-black mb-3" style={{ color: "var(--color-secondary)" }}>{pkg.price}</div>
                <div className="text-sm mb-2" style={{ color: pkg.highlight ? "rgba(255,255,255,0.8)" : "var(--color-text)" }}>Saves {pkg.savings}</div>
                <div className="text-xs" style={{ color: pkg.highlight ? "rgba(255,255,255,0.6)" : "#666" }}>Best for: {pkg.best}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/solar-calculator" className="btn-primary text-lg">Get My Exact Wollongong Quote →</Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-4xl mb-6" style={{ color: "var(--color-secondary)" }}>★★★★★</div>
          <blockquote className="text-xl text-gray-700 italic mb-6">
            &ldquo;I got three quotes. Coastal Solar was the only company that showed me actual numbers upfront, not just &lsquo;call us for a price.&rsquo; Installed in two days, works perfectly.&rdquo;
          </blockquote>
          <cite className="font-semibold" style={{ color: "var(--color-primary)" }}>— Meredith T., Kiama (Wollongong area customer)</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Ready to go solar in Wollongong?</h2>
          <p className="text-white/85 mb-8 text-lg">Use our free calculator to see your savings, or call us for a no-pressure quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings →</Link>
            <Link href="/contact" className="btn-outline text-lg">Talk to Us Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
