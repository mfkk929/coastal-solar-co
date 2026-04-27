import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Battery Storage Systems NSW | Coastal Solar Co.",
  description:
    "Tesla Powerwall, BYD & Sungrow battery storage from Coastal Solar Co. Up to $3,000 off with the Federal Battery Rebate. Illawarra & South Coast.",
  alternates: { canonical: "https://www.coastalsolarco.com/solar-systems/battery-storage" },
  openGraph: {
    title: "Battery Storage Systems | Coastal Solar Co.",
    description: "Store your solar energy and use it at night. Tesla Powerwall authorised installer.",
    url: "https://www.coastalsolarco.com/solar-systems/battery-storage",
  },
};

export default function BatteryStoragePage() {
  return (
    <>
      <section className="gradient-hero text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-semibold mb-3" style={{ color: "var(--color-secondary)" }}>Solar Systems / Battery Storage</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
              Battery Storage: Use Your Solar Power 24/7
            </h1>
            <p className="text-xl text-white/85 mb-4 leading-relaxed">
              Stop sending your solar energy back to the grid for 5¢/kWh and buying it back at 30¢/kWh. Add battery storage and use your own electricity around the clock.
            </p>
            <div className="inline-block bg-secondary text-white font-bold px-4 py-2 rounded-lg mb-8 text-sm" style={{ backgroundColor: "var(--color-secondary)" }}>
              🔋 Federal Battery Rebate: Save up to $3,000 — available now
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/solar-calculator" className="btn-primary text-lg px-8 py-4">
                Calculate Battery Savings →
              </Link>
              <Link href="/rebates" className="btn-outline text-lg px-8 py-4" style={{ borderColor: "rgba(255,255,255,0.6)", color: "white" }}>
                See Battery Rebate →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Battery options we install
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                brand: "Tesla Powerwall 3",
                capacity: "13.5kWh",
                power: "11.5kW continuous",
                price: "$12,000–$14,000 installed",
                rebate: "~$3,000 rebate available",
                features: ["Whole-home backup", "Gateway included", "Expandable", "10-yr warranty"],
              },
              {
                brand: "BYD Battery Box Premium",
                capacity: "8.0–15.4kWh",
                power: "5kW continuous",
                price: "$7,500–$12,000 installed",
                rebate: "~$2,500 rebate available",
                features: ["Modular design", "Lithium iron phosphate", "Indoor/outdoor", "10-yr warranty"],
              },
              {
                brand: "Sungrow SBR",
                capacity: "9.6–25.6kWh",
                power: "5kW continuous",
                price: "$6,500–$16,000 installed",
                rebate: "~$2,000+ rebate available",
                features: ["Modular & scalable", "Affordable entry", "Compact design", "10-yr warranty"],
              },
            ].map((bat, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm card-hover">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>{bat.brand}</h3>
                <p className="text-3xl font-black mb-1" style={{ color: "var(--color-secondary)" }}>{bat.capacity}</p>
                <p className="text-sm text-gray-500 mb-4">{bat.power}</p>
                <p className="font-bold text-gray-800 mb-1">{bat.price}</p>
                <p className="text-sm text-green-700 font-semibold mb-4">{bat.rebate}</p>
                <ul className="space-y-1">
                  {bat.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        route="battery-storage"
        title="Battery storage FAQs"
        intro="Questions NSW homeowners ask about batteries — sizing, warranties, Tesla vs BYD vs Sungrow, blackout backup, VPPs and the Cheaper Home Batteries Program."
        limit={15}
        variant="tint"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
              The Federal Battery Rebate — act before it changes.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              The Cheaper Home Batteries Program (launched July 2025) gives eligible homeowners approximately 30% off the cost 