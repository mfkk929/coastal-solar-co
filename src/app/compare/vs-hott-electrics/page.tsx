import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coastal Solar Co. vs HOTT Electrics | Solar Comparison",
  description: "Comparing Coastal Solar Co. vs HOTT Electrics for solar installation in Wollongong. Review volume, warranties, pricing transparency, and coverage.",
  alternates: { canonical: "https://coastalsolar.com.au/compare/vs-hott-electrics" },
};

const rows = [
  { factor: "Primary focus", us: "Solar specialist", them: "Electrical + Solar" },
  { factor: "Review volume", us: "Growing fast", them: "800+ ★★★★★ (impressive)" },
  { factor: "Upfront pricing", us: "✅ Published ranges", them: "❌ Quote only" },
  { factor: "Workmanship warranty", us: "10 years", them: "Not publicly stated" },
  { factor: "South Coast coverage", us: "Wollongong → Ulladulla", them: "Primarily Wollongong/Illawarra" },
  { factor: "Battery expertise", us: "✅ Full specialist", them: "General offering" },
  { factor: "Free solar calculator", us: "✅ Online", them: "❌ Not available" },
  { factor: "Commercial solar", us: "✅ Yes", them: "✅ Yes" },
  { factor: "Callback guarantee", us: "✅ 5 minutes", them: "❌ Not stated" },
];

export default function VsHottElectricsPage() {
  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo; <Link href="/compare" className="hover:text-white">Compare</Link> &rsaquo; <span className="text-white">vs HOTT Electrics</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Coastal Solar Co. vs HOTT Electrics
          </h1>
          <p className="text-xl text-white/85 max-w-2xl">Solar specialist vs Wollongong&apos;s most reviewed electrical company.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 mb-10" style={{ backgroundColor: "var(--color-accent)" }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>TL;DR</h2>
            <p className="text-gray-700">HOTT Electrics is Wollongong&apos;s most reviewed solar/electrical company, with 800+ five-star reviews. That&apos;s genuinely impressive. They&apos;re electricians first who do solar. We&apos;re solar-first specialists. If you need electrical work alongside solar, HOTT is worth a look. If solar is your primary project, our system design depth, 10-year workmanship warranty, and full-corridor coverage from Wollongong to Ulladulla make us the stronger choice.</p>
          </div>

          <h2 className="text-2xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Head-to-Head Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "rgba(43,76,94,0.15)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "var(--color-primary)" }}>
                  <th className="text-left px-6 py-4 text-white font-semibold">Factor</th>
                  <th className="text-left px-6 py-4 font-bold" style={{ color: "var(--color-secondary)" }}>Coastal Solar Co.</th>
                  <th className="text-left px-6 py-4 text-white font-semibold">HOTT Electrics</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "var(--color-accent)" } : {}}>
                    <td className="px-6 py-4 font-medium text-gray-800">{row.factor}</td>
                    <td className="px-6 py-4 font-semibold" style={{ color: "var(--color-primary)" }}>{row.us}</td>
                    <td className="px-6 py-4 text-gray-600">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="rounded-2xl p-6 border" style={{ borderColor: "rgba(43,76,94,0.15)" }}>
              <h3 className="font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>Who HOTT Electrics is best for:</h3>
              <p className="text-gray-700 text-sm">Customers who need electrical work done at the same time as solar, or who value the reassurance of a high review volume above other factors.</p>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
              <h3 className="font-bold mb-3" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}>Who Coastal Solar Co. is best for:</h3>
              <p className="text-white/85 text-sm">Customers for whom solar is the primary project and who want specialist depth, transparent pricing, and coverage across the full South Coast corridor.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-hero text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>See the numbers for yourself</h2>
          <p className="text-white/85 mb-8">Use our free calculator and compare any quote you receive — no obligation.</p>
          <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings →</Link>
        </div>
      </section>
    </>
  );
}
