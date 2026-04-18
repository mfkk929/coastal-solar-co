import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coastal Solar Co. vs Nowra Solar | Comparison",
  description: "Comparing Coastal Solar Co. vs Nowra Solar for solar installation in the Shoalhaven. Pricing, warranty, transparency, and service coverage compared.",
  alternates: { canonical: "https://coastalsolarco.com/compare/vs-nowra-solar" },
};

const rows = [
  { factor: "Primary claim", us: "Transparent pricing, 5-min callback", them: '"#1 Shoalhaven" (unsubstantiated)' },
  { factor: "Upfront pricing", us: "✅ Published ranges", them: "❌ Quote only" },
  { factor: "Workmanship warranty", us: "10 years", them: "Not clearly stated" },
  { factor: "Callback guarantee", us: "✅ 5 minutes or free service", them: "❌ Not stated" },
  { factor: "$0 deposit", us: "✅ Available", them: "✅ Available" },
  { factor: "Coverage area", us: "Wollongong → Ulladulla", them: "Primarily Shoalhaven" },
  { factor: "Free solar calculator", us: "✅ Online", them: "❌ Not available" },
  { factor: "In-house engineering", us: "✅ Custom design", them: "✅ Yes" },
  { factor: "Battery expertise", us: "✅ Full guidance", them: "Offered" },
];

export default function VsNowraSolarPage() {
  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo; <Link href="/compare" className="hover:text-white">Compare</Link> &rsaquo; <span className="text-white">vs Nowra Solar</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Coastal Solar Co. vs Nowra Solar
          </h1>
          <p className="text-xl text-white/85 max-w-2xl">Shoalhaven solar — who actually delivers?</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 mb-10" style={{ backgroundColor: "var(--color-accent)" }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>TL;DR</h2>
            <p className="text-gray-700">Nowra Solar claims the &ldquo;#1 Shoalhaven&rdquo; position and offers $0 deposit and in-house engineering — both genuine positives. However, their pricing transparency is limited (quote-only), and their coverage is primarily Shoalhaven. Coastal Solar Co. serves from Wollongong to Ulladulla, publishes real price ranges upfront, and backs every install with a 5-minute callback guarantee and 10-year workmanship warranty.</p>
          </div>

          <h2 className="text-2xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Head-to-Head Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "rgba(43,76,94,0.15)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "var(--color-primary)" }}>
                  <th className="text-left px-6 py-4 text-white font-semibold">Factor</th>
                  <th className="text-left px-6 py-4 font-bold" style={{ color: "var(--color-secondary)" }}>Coastal Solar Co.</th>
                  <th className="text-left px-6 py-4 text-white font-semibold">Nowra Solar</th>
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
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Get your own Shoalhaven quote</h2>
          <p className="text-white/85 mb-8">Use our free calculator, then compare against any quote you receive.</p>
          <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings →</Link>
        </div>
      </section>
    </>
  );
}
