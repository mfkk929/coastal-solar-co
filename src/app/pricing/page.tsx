import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Solar System Pricing | Transparent Costs | Coastal Solar Co.",
  description:
    "Transparent solar pricing for Illawarra & South Coast homes. 6.6kW from $5,500, 10kW from $7,800, batteries from $7,500 — all after rebates.",
  alternates: { canonical: "https://www.coastalsolarco.com/pricing" },
  openGraph: {
    title: "Solar Pricing | Coastal Solar Co.",
    description: "Honest, upfront solar pricing. 6.6kW from $5,500 after rebates.",
    url: "https://www.coastalsolarco.com/pricing",
  },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Residential Solar & Battery Systems",
  description:
    "CEC-accredited residential solar PV and battery systems installed across the Illawarra and NSW South Coast. All prices include the federal STC rebate.",
  brand: { "@type": "Brand", name: "Coastal Solar Co." },
  image: "https://www.coastalsolarco.com/og-image.jpg",
  category: "Residential Solar Installation",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "AUD",
    lowPrice: "5500",
    highPrice: "26000",
    offerCount: 4,
    availability: "https://schema.org/InStock",
    url: "https://www.coastalsolarco.com/pricing",
    seller: {
      "@type": "LocalBusiness",
      name: "Coastal Solar Co.",
      url: "https://www.coastalsolarco.com",
      telephone: "+61493531857",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kiama",
        addressRegion: "NSW",
        postalCode: "2533",
        addressCountry: "AU",
      },
    },
    offers: [
      {
        "@type": "Offer",
        name: "6.6kW Solar System",
        description:
          "Entry-level 6.6kW rooftop solar system — CEC-accredited installation with tier-one panels and inverter.",
        priceCurrency: "AUD",
        price: "5500",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "AUD",
          minPrice: "5500",
          maxPrice: "6500",
        },
        availability: "https://schema.org/InStock",
        url: "https://www.coastalsolarco.com/pricing",
      },
      {
        "@type": "Offer",
        name: "10kW Solar System",
        description:
          "Most popular 10kW rooftop solar system for larger Illawarra homes and work-from-home households.",
        priceCurrency: "AUD",
        price: "7800",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "AUD",
          minPrice: "7800",
          maxPrice: "9500",
        },
        availability: "https://schema.org/InStock",
        url: "https://www.coastalsolarco.com/pricing",
      },
      {
        "@type": "Offer",
        name: "10kW Solar + 10kWh Battery",
        description:
          "10kW solar paired with 10kWh battery storage — eligible for the NSW Cheaper Home Batteries Program.",
        priceCurrency: "AUD",
        price: "14000",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "AUD",
          minPrice: "14000",
          maxPrice: "17000",
        },
        availability: "https://schema.org/InStock",
        url: "https://www.coastalsolarco.com/pricing",
      },
      {
        "@type": "Offer",
        name: "13kW Solar + 15kWh Battery",
        description:
          "Full off-grid-capable 13kW solar + 15kWh battery system for high-consumption households.",
        priceCurrency: "AUD",
        price: "20000",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "AUD",
          minPrice: "20000",
          maxPrice: "26000",
        },
        availability: "https://schema.org/InStock",
        url: "https://www.coastalsolarco.com/pricing",
      },
    ],
  },
};

const pricingBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.coastalsolarco.com" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.coastalsolarco.com/pricing" },
  ],
};

const pricingRows = [
  { system: "6.6kW Entry", production: "~9,500 kWh", cost: "$5,500–$6,500", savings: "$1,200–$1,800", popular: false },
  { system: "10kW Popular", production: "~14,500 kWh", cost: "$7,800–$9,500", savings: "$1,800–$2,600", popular: true },
  { system: "10kW + 10kWh Battery", production: "~14,500 kWh", cost: "$14,000–$17,000", savings: "$2,400–$3,200", popular: false },
  { system: "13kW + 15kWh Battery", production: "~18,800 kWh", cost: "$20,000–$26,000", savings: "$3,500–$5,000", popular: false },
];

const included = [
  "Full system design by CEC-accredited designer",
  "All equipment (panels, inverter, mounting, wiring)",
  "CEC-accredited installation",
  "Grid connection application",
  "STC rebate paperwork",
  "Network approval management",
  "System monitoring setup",
  "30-minute owner walkthrough",
  "10-year workmanship warranty",
  "25-year panel performance warranty",
];

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingBreadcrumbSchema) }}
      />
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
            Transparent Solar Pricing
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto">
            We publish our prices because we have nothing to hide. All prices shown are after government rebates and include everything — no surprises on installation day.
          </p>
        </div>
      </section>

      {/* Main Pricing Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: "var(--color-primary)" }}>
                  <th className="text-left text-white font-bold px-6 py-5">System</th>
                  <th className="text-left text-white font-bold px-6 py-5">Annual Production</th>
                  <th className="text-left text-white font-bold px-6 py-5">Cost (After Rebates)</th>
                  <th className="text-left text-white font-bold px-6 py-5">Annual Savings</th>
                  <th className="text-left text-white font-bold px-6 py-5"></th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-white" : ""} border-b border-gray-100`}
                    style={i % 2 === 1 ? { backgroundColor: "var(--color-accent)" } : {}}>
                    <td className="px-6 py-5">
                      <span className="font-bold text-lg" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>
                        {row.system}
                      </span>
                      {row.popular && (
                        <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: "var(--color-secondary)" }}>
                          POPULAR
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-5 text-gray-700">{row.production}</td>
                    <td className="px-6 py-5 font-bold text-xl" style={{ color: "var(--color-secondary)" }}>{row.cost}</td>
                    <td className="px-6 py-5 font-bold text-green-700 text-lg">{row.savings}/yr</td>
                    <td className="px-6 py-5">
                      <Link href="/solar-calculator" className="btn-primary text-sm px-4 py-2">
                        Get Quote
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            * Prices are indicative. Your exact quote depends on roof type, location, and equipment selection. All prices include STC rebate.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            What&apos;s included in every system
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rebates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
              Government rebates already included
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              All prices shown above already include the Federal Government&apos;s STC (Small-scale Technology Certificate) rebate — worth $2,800–$3,800 on a standard 6.6kW system. You never see or manage this rebate — we deduct it from your invoice at point of sale.
            </p>
            <Link href="/rebates" className="btn-primary text-lg px-8 py-4">
              Learn More About Rebates →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        route="pricing"
        title="Solar pricing FAQs"
        intro="The questions NSW homeowners ask most about solar system pricing, rebates, finance and what's actually included in a quote."
        limit={15}
        variant="tint"
      />

      {/* CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Get your ex