import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar System Pricing | Transparent Costs | Coastal Solar Co.",
  description:
    "Transparent solar pricing for Illawarra and South Coast homes. 6.6kW systems from $5,500 after rebates. No hidden costs. View full pricing table.",
  alternates: { canonical: "https://coastalsolarco.com/pricing" },
  openGraph: {
    title: "Solar Pricing | Coastal Solar Co.",
    description: "Honest, upfront solar pricing. 6.6kW from $5,500 after rebates.",
    url: "https://coastalsolarco.com/pricing",
  },
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

      {/* CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Get your exact, personalised quote.
          </h2>
          <p className="text-xl text-white/85 mb-8">Use our calculator for a custom estimate based on your specific home and usage.</p>
          <Link href="/solar-calculator" className="btn-primary text-lg px-8 py-4">
            Calculate My Exact Savings →
          </Link>
        </div>
      </section>
    </>
  );
}
