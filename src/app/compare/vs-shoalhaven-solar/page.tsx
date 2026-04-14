import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coastal Solar Co. vs Shoalhaven Solar | Berry Solar Comparison",
  description: "Comparing Coastal Solar Co. and Shoalhaven Solar. Both are local, family-owned South Coast installers — here's how they differ on warranty, coverage, and transparency.",
  alternates: { canonical: "https://coastalsolar.com.au/compare/vs-shoalhaven-solar" },
};

const rows = [
  { factor: "Base location", us: "Wollongong (Illawarra hub)", them: "Berry (South Coast focus)" },
  { factor: "Upfront pricing", us: "✅ Published ranges", them: "❌ Quote only" },
  { factor: "Workmanship warranty", us: "10 years", them: "Not publicly confirmed" },
  { factor: "Callback guarantee", us: "✅ 5 minutes", them: "❌ Not stated" },
  { factor: "Free inspections", us: "✅ Included", them: "✅ Offered" },
  { factor: "Knowledge base / education", us: "✅ Full blog + calculator", them: "✅ Good knowledge base" },
  { factor: "Coverage area", us: "Wollongong → Ulladulla", them: "Berry / Shoalhaven focus" },
  { factor: "Battery expertise", us: "✅ Full guidance", them: "Offered" },
  { factor: "Free solar calculator", us: "✅ Online", them: "❌ Not available" },
];

export default function VsShoalhavenSolarPage() {
  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo; <Link href="/compare" className="hover:text-white">Compare</Link> &rsaquo; <span className="text-white">vs Shoalhaven Solar</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Coastal Solar Co. vs Shoalhaven Solar
          </h1>
          <p className="text-xl text-white/85 max-w-2xl">Two local, family-owned South Coast installers — compared honestly.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 mb-10" style={{ backgroundColor: "var(--color-accent)" }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>TL;DR</h2>
            <p className="text-gray-700">Shoalhaven Solar is a genuine family business based in Berry with a good educational approach — their knowledge base content is commendable. However, they share the same &ldquo;local family&rdquo; positioning as every other competitor, without differentiation on pricing transparency or warranty. Coastal Solar Co. offers a 10-year workmanship warranty, published pricing ranges, and a 5-minute callback guarantee — across a wider service area including the full Illawarra and South Coast.</p>
          </div>

          <h2 className="text-2xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Head-to-Head Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "rgba(43,76,94,0.15)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "var(--color-primary)" }}>
                  <th className="text-left px-6 py-4 text-white font-semibold">Factor</th>
                  <th className="text-left px-6 py-4 font-bold" style={{ color: "var(--color-secondary)" }}>Coastal Solar Co.</th>
                  <th className="text-left px-6 py-4 text-white font-semibold">Shoalhaven Solar</th>
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
        </div>
      </section>

      <section className="py-16 gradient-hero text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Let the numbers do the talking</h2>
          <p className="text-white/85 mb-8">Calculate your savings with our free tool, then compare any quotes you receive.</p>
          <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings →</Link>
        </div>
      </section>
    </>
  );
}
