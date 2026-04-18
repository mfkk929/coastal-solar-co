import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Solar | South Coast NSW | Coastal Solar Co.",
  description:
    "Commercial solar for Illawarra and South Coast businesses. Cut energy costs by up to 80% with a tailored 20–100kW+ system. CEC accredited, full project management included.",
  alternates: { canonical: "https://coastalsolarco.com/solar-systems/commercial" },
  openGraph: {
    title: "Commercial Solar Systems | Coastal Solar Co.",
    description: "Reduce your business energy costs with a tailored commercial solar system.",
    url: "https://coastalsolarco.com/solar-systems/commercial",
  },
};

export default function CommercialPage() {
  return (
    <>
      <section className="gradient-hero text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-semibold mb-3" style={{ color: "var(--color-secondary)" }}>Solar Systems / Commercial</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
              Commercial Solar for South Coast Businesses
            </h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              Cut your energy bills by up to 80% with a commercial solar system designed around your business usage. Full project management from design to energisation.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get a Commercial Quote →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Commercial solar systems — what&apos;s available
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { size: "20–30kW", ideal: "Small business, retail, café", savings: "$8,000–$14,000/yr", cost: "$20,000–$35,000" },
              { size: "30–60kW", ideal: "Medium business, warehouse, gym", savings: "$14,000–$28,000/yr", cost: "$35,000–$65,000" },
              { size: "60–100kW+", ideal: "Large facility, factory, school", savings: "$28,000–$50,000/yr", cost: "$65,000–$110,000+" },
            ].map((tier, i) => (
              <div key={i} className="rounded-2xl p-8 card-hover" style={{ backgroundColor: "var(--color-accent)" }}>
                <p className="text-3xl font-black mb-2" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}>{tier.size}</p>
                <p className="font-semibold text-gray-700 mb-4">{tier.ideal}</p>
                <p className="text-sm text-gray-500 mb-1">System cost</p>
                <p className="text-xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>{tier.cost}</p>
                <p className="text-sm text-gray-500 mb-1">Annual savings</p>
                <p className="text-xl font-bold text-green-700">{tier.savings}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: "var(--font-montserrat)" }}>
            Why businesses choose Coastal Solar Co.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📊", title: "Full energy audit", desc: "We analyse your bills and usage patterns before recommending a system size." },
              { icon: "🏗️", title: "Structural assessment", desc: "Roof load calculations, shading analysis, and panel layout optimisation." },
              { icon: "📋", title: "Complete project management", desc: "Council DA if required, network approval, grid connection — we handle it all." },
              { icon: "⚡", title: "Minimal downtime", desc: "Installation scheduled around your business hours to avoid disruption." },
              { icon: "📱", title: "Live monitoring", desc: "Real-time production and consumption data via our monitoring platform." },
              { icon: "🔧", title: "Ongoing support", desc: "Annual maintenance checks and priority support for commercial clients." },
            ].map((f, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>{f.title}</h3>
                <p className="text-white/75 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Let&apos;s talk about your business energy costs.
          </h2>
          <p className="text-gray-600 text-lg mb-8">Commercial quotes are tailored — we&apos;ll need a few details about your premises and usage.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Request Commercial Quote
          </Link>
        </div>
      </section>
    </>
  );
}
