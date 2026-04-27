import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Solar Systems | Residential, Commercial & Battery | Coastal Solar Co." },
  description:
    "Residential, commercial and battery storage solar systems across the Illawarra and South Coast. CEC-accredited, 10-yr warranty, honest pricing.",
  alternates: { canonical: "https://www.coastalsolarco.com/solar-systems" },
  openGraph: {
    title: "Solar Systems | Residential, Commercial & Battery | Coastal Solar Co.",
    description:
      "Choose the right solar system for your home or business. Residential, commercial and battery storage options.",
    url: "https://www.coastalsolarco.com/solar-systems",
  },
};

const systems = [
  {
    href: "/solar-systems/residential",
    title: "Residential Solar",
    sub: "6.6kW–13kW systems for homes",
    body: "From a starter 6.6kW for a 2-bedroom unit through to 13kW arrays for family homes with EV charging — every residential install includes a free site assessment and a 10-year workmanship warranty.",
  },
  {
    href: "/solar-systems/commercial",
    title: "Commercial Solar",
    sub: "30kW–100kW for businesses",
    body: "Commercial systems for retail, light industrial and agribusiness sites across the Illawarra and South Coast. Power-purchase models, financing options and full Endeavour/Essential Energy approvals handled.",
  },
  {
    href: "/solar-systems/battery-storage",
    title: "Battery Storage",
    sub: "Tesla Powerwall, Sungrow, BYD",
    body: "Battery storage that pairs with new or existing solar — eligible for the NSW Cheaper Home Batteries rebate plus the federal battery program. Designed for evening use, blackout backup and self-consumption.",
  },
];

export default function SolarSystemsHub() {
  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo;{" "}
            <span className="text-white">Solar Systems</span>
          </nav>
          <h1
            className="text-4xl lg:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Solar Systems for Homes & Businesses
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-8">
            Residential, commercial and battery storage — designed for the Illawarra and South Coast, installed by a CEC-accredited local team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings →</Link>
            <Link href="/contact" className="btn-outline text-lg">Get Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {systems.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h2
                  className="text-2xl font-black mb-2"
                  style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}
                >
                  {s.title}
                </h2>
                <p className="text-sm font-semibold mb-4" style={{ color: "var(--color-secondary)" }}>
                  {s.sub}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">{s.body}</p>
                <span className="text-sm font-semibold group-hover:underline" style={{ color: "var(--color-secondary)" }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-hero text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Not sure which system is right?
          </h2>
          <p className="text-white/85 mb-8 text-lg">
            Use our free Solar Savings Calculator or call us — we&apos;ll talk through your bill, your roof and your goals before quoting anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings →</Link>
            <a href="tel:0493531857" className="btn-outline text-lg">📞 0493 531 857</a>
          </div>
        </div>
      </section>
    </>
  );
}
