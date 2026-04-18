import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coastal Solar Co. vs SolarBlu | Which is Right for You?",
  description: "An honest comparison between Coastal Solar Co. and SolarBlu. We compare warranty, pricing transparency, callback time, coverage, and more.",
  alternates: { canonical: "https://coastalsolarco.com/compare/vs-solarblu" },
};

const rows = [
  { factor: "Years in operation", us: "New (10+ yrs combined experience)", them: "10+ years" },
  { factor: "Upfront pricing", us: "✅ Published ranges", them: "❌ Quote only" },
  { factor: "Workmanship warranty", us: "10 years", them: "7 years" },
  { factor: "Callback guarantee", us: "✅ 5 minutes", them: "❌ Not stated" },
  { factor: "Installation walkthrough", us: "✅ 30 min included", them: "Not confirmed" },
  { factor: "Battery rebate expertise", us: "✅ Full guidance", them: "Offered" },
  { factor: "Suburb coverage", us: "Wollongong → Ulladulla", them: "Primarily Illawarra" },
  { factor: "Free solar calculator", us: "✅ Online", them: "❌ Not available" },
];

export default function VsSolarBluPage() {
  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo; <Link href="/compare" className="hover:text-white">Compare</Link> &rsaquo; <span className="text-white">vs SolarBlu</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Coastal Solar Co. vs SolarBlu
          </h1>
          <p className="text-xl text-white/85 max-w-2xl">Which solar company is right for your Illawarra home?</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 mb-10" style={{ backgroundColor: "var(--color-accent)" }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>TL;DR</h2>
            <p className="text-gray-700">SolarBlu is one of the longest-running solar companies in Illawarra, with a physical showroom in Dapto and a solid track record. If you want a well-established local name and are in the Dapto area, they&apos;re worth considering. Coastal Solar Co. offers a newer but more transparent approach: published price ranges, a 5-minute callback guarantee, and a 10-year workmanship warranty vs SolarBlu&apos;s 7-year. We&apos;re better matched to customers who want to know what they&apos;re getting before they pick up the phone.</p>
          </div>

          <h2 className="text-2xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Head-to-Head Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "rgba(43,76,94,0.15)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "var(--color-primary)" }}>
                  <th className="text-left px-6 py-4 text-white font-semibold">Factor</th>
                  <th className="text-left px-6 py-4 font-bold" style={{ color: "var(--color-secondary)" }}>Coastal Solar Co.</th>
                  <th className="text-left px-6 py-4 text-white font-semibold">SolarBlu</th>
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
              <h3 className="font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>Who SolarBlu is best for:</h3>
              <p className="text-gray-700 text-sm">Customers who want the comfort of a long-established showroom business with face-to-face service in the Dapto/Wollongong area.</p>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
              <h3 className="font-bold mb-3" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}>Who Coastal Solar Co. is best for:</h3>
              <p className="text-white/85 text-sm">Customers who want transparency, speed, and a longer workmanship warranty from a team that serves the full Illawarra to South Coast corridor.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-hero text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Compare quotes from both</h2>
          <p className="text-white/85 mb-8">Or get our honest assessment of what system you actually need — no pressure.</p>
          <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings →</Link>
        </div>
      </section>
    </>
  );
}
