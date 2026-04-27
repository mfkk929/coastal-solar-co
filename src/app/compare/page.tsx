import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare Solar Installers | Coastal Solar Co.",
  description: "Honest comparisons between Coastal Solar Co. and Illawarra & South Coast solar installers. Where we're better — and where competitors might suit you.",
  alternates: { canonical: "https://www.coastalsolarco.com/compare" },
};

const comparisons = [
  { href: "/compare/vs-solarblu", title: "Coastal Solar Co. vs SolarBlu", desc: "SolarBlu has 10+ years and a Dapto showroom. We offer a longer warranty, more transparency, and wider coverage." },
  { href: "/compare/vs-hott-electrics", title: "Coastal Solar Co. vs HOTT Electrics", desc: "HOTT Electrics has 800+ five-star reviews. They're electricians first. We're solar specialists first." },
  { href: "/compare/vs-nowra-solar", title: "Coastal Solar Co. vs Nowra Solar", desc: "Nowra Solar claims the #1 spot in Shoalhaven. We compare head-to-head on price, warranty, and transparency." },
  { href: "/compare/vs-shoalhaven-solar", title: "Coastal Solar Co. vs Shoalhaven Solar", desc: "Shoalhaven Solar is family-owned in Berry. We compare approach, warranty, and service coverage." },
];

export default function ComparePage() {
  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            How We Compare to Local Competitors
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto">
            We believe in honest comparisons. We&apos;ll tell you where we&apos;re the better choice — and where a competitor might suit you better.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {comparisons.map((c) => (
              <Link key={c.href} href={c.href} className="card-hover block p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: "rgba(43,76,94,0.15)" }}>
                <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>{c.title}</h2>
                <p className="text-gray-600 mb-4">{c.desc}</p>
                <span className="font-semibold" style={{ color: "var(--color-secondary)" }}>Read comparison →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-accent text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Still comparing? Let the numbers decide.
          </h2>
          <p className="text-gray-700 mb-8">Use our free solar calculator to get a personalised estimate — then compare it against any other quote you receive.</p>
          <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings →</Link>
        </div>
      </section>
    </>
  );
}
