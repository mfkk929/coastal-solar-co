import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Residential Solar Panels Wollongong | Coastal Solar Co.",
  description:
    "Residential solar panels for Illawarra and South Coast homes. 6.6kW from $5,500 after rebates. CEC accredited, 10-year workmanship warranty. Free quote.",
  alternates: { canonical: "https://www.coastalsolarco.com/solar-systems/residential" },
  openGraph: {
    title: "Residential Solar Panels | Coastal Solar Co.",
    description: "Solar systems designed for South Coast homes. Honest pricing, fast installation.",
    url: "https://www.coastalsolarco.com/solar-systems/residential",
  },
};

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-secondary font-semibold mb-3" style={{ color: "var(--color-secondary)" }}>
              Solar Systems / Residential
            </p>
            <h1 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
              Residential Solar Panels for South Coast Homes
            </h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              Purpose-designed solar systems for Illawarra and South Coast homeowners. Transparent pricing, fast installation, and a team that actually picks up the phone.
            </p>
            <Link href="/solar-calculator" className="btn-primary text-lg px-8 py-4">
              Calculate My Home Savings →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Residential */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                The right system for your home — not just the easiest one to sell you.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Most solar companies push a 6.6kW system regardless of your usage. We start by understanding your electricity bills, roof orientation, shading, and goals before recommending anything.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                If a 10kW + battery system will pay back faster given your usage patterns, we&apos;ll tell you — even if it&apos;s not the cheapest option. That&apos;s how we&apos;ve built 200+ five-star reviews on the South Coast.
              </p>
              <Link href="/solar-calculator" className="btn-primary">
                Get My Free Assessment
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Avg. quarterly bill before solar", value: "$380" },
                { label: "Avg. quarterly bill after solar", value: "$65" },
                { label: "Average bill reduction", value: "74%" },
                { label: "Average payback period", value: "4.2 yrs" },
              ].map((stat, i) => (
                <div key={i} className="bg-accent rounded-2xl p-6 text-center" style={{ backgroundColor: "var(--color-accent)" }}>
                  <p className="text-3xl font-black mb-2" style={{ color: "var(--color-secondary)" }}>{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Options */}
      <section className="py-20" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Residential system pricing
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
              <thead style={{ backgroundColor: "var(--color-primary)" }}>
                <tr>
                  {["System", "Best For", "Annual Production", "Cost After Rebates", "Annual Savings"].map(h => (
                    <th key={h} className="text-left text-white font-semibold px-6 py-4 text-sm">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { system: "6.6kW Entry", best: "1–2 person home, bill <$200/qtr", prod: "~9,500 kWh", cost: "$5,500–$6,500", savings: "$1,200–$1,800" },
                  { system: "10kW Popular", best: "Family home, bill $200–$350/qtr", prod: "~14,500 kWh", cost: "$7,800–$9,500", savings: "$1,800–$2,600" },
                  { system: "10kW + 10kWh Battery", best: "Family + evening usage", prod: "~14,500 kWh", cost: "$14,000–$17,000", savings: "$2,400–$3,200" },
                  { system: "13kW + 15kWh Battery", best: "Large home, pool, EV", prod: "~18,800 kWh", cost: "$20,000–$26,000", savings: "$3,500–$5,000" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="px-6 py-4 font-semibold" style={{ color: "var(--color-primary)" }}>{row.system}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{row.best}</td>
                    <td className="px-6 py-4 text-gray-700">{row.prod}</td>
                    <td className="px-6 py-4 font-bold" style={{ color: "var(--color-secondary)" }}>{row.cost}</td>
                    <td className="px-6 py-4 font-semibold text-green-700">{row.savings}/yr</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Premium equipment. Authorised installers only.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { brand: "SolarEdge", type: "Inverters", desc: "Industry-leading monitoring and performance optimisation" },
              { brand: "Enphase", type: "Microinverters", desc: "Panel-level monitoring for maximum output in partial shade" },
              { brand: "Tesla Powerwall", type: "Battery Storage", desc: "The world's most popular home battery system" },
              { brand: "SunPower", type: "Solar Panels", desc: "Highest efficiency panels available for Australian conditions" },
            ].map((eq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 card-hover">
                <p className="text-lg font-bold mb-1" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>{eq.brand}</p>
                <p className="text-sm font-semibold mb-3" style={{ color: "var(--color-secondary)" }}>{eq.type}</p>
                <p className="text-gray-600 text-sm">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        route="residential"
        title="Residential solar FAQs"
        intro="The most common questions we get from NSW homeowners about system sizing, panels, batteries, installation and warranties."
        limit={15}
        variant="tint"
      />

      {/* CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4" style={{ fontFamily: "var(--font-montse