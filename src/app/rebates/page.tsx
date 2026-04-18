import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Rebates & Incentives 2026 | NSW | Coastal Solar Co.",
  description:
    "Understand all available solar rebates in 2026 — STC scheme, Federal Battery Rebate, and feed-in tariffs. The 2026 rebate is the best you'll ever get.",
  alternates: { canonical: "https://coastalsolarco.com/rebates" },
  openGraph: {
    title: "Solar Rebates 2026 | Coastal Solar Co.",
    description: "STC rebate worth $2,800–$3,800. Federal Battery Rebate up to $3,000. Claim before rates drop.",
    url: "https://coastalsolarco.com/rebates",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is the solar rebate in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In 2026, the Federal Government's STC (Small-scale Technology Certificate) scheme provides a point-of-sale discount worth approximately $2,800–$3,800 on a standard 6.6kW system, depending on your location and current STC spot price.",
      },
    },
    {
      "@type": "Question",
      name: "How does the STC rebate work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you purchase a solar system, your installer applies for STCs on your behalf. The value of these certificates is deducted from your invoice at point of sale. You never need to manage the paperwork — Coastal Solar Co. handles everything.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Federal Battery Rebate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Cheaper Home Batteries Program (launched July 2025) provides eligible homeowners with approximately 30% off the cost of a battery system — up to $3,000 in savings. It applies to batteries installed alongside new or existing solar systems.",
      },
    },
    {
      "@type": "Question",
      name: "Will the solar rebate get smaller?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The STC scheme reduces the number of deeming years by one every January. It dropped from 6 to 5 years deeming on 1 January 2026, and will drop to 4 years in 2027 — reducing the rebate value by approximately 17% each time.",
      },
    },
  ],
};

export default function RebatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
            Solar Rebates & Incentives — 2026
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto">
            The 2026 solar rebate is the best you&apos;ll ever get. Here&apos;s exactly what&apos;s available — and why acting now saves you the most money.
          </p>
        </div>
      </section>

      {/* STC Rebate */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="text-5xl">☀️</div>
              <div>
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                  STC Rebate (Small-scale Technology Certificates)
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The Federal Government&apos;s STC scheme is a point-of-sale discount applied directly to your solar invoice. For a standard 6.6kW system installed in the Illawarra in 2026, this is worth approximately:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "6.6kW system", value: "~$3,040" },
                    { label: "10kW system", value: "~$4,600" },
                    { label: "13kW system", value: "~$5,980" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl p-4 text-center" style={{ backgroundColor: "var(--color-accent)" }}>
                      <p className="text-2xl font-black" style={{ color: "var(--color-secondary)" }}>{item.value}</p>
                      <p className="text-sm text-gray-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-12">
              <h3 className="font-bold text-red-800 text-lg mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                ⚠️ The rebate gets smaller every year
              </h3>
              <p className="text-red-700">
                The STC scheme reduces the &quot;deeming period&quot; by one year every January. It dropped from 6 to 5 years on 1 Jan 2026. It will drop to 4 years in 2027 — reducing the rebate by approximately 17%. The longer you wait, the less you get.
              </p>
            </div>

            {/* Battery Rebate */}
            <div className="flex items-start gap-6 mb-8">
              <div className="text-5xl">🔋</div>
              <div>
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                  Federal Battery Rebate — Cheaper Home Batteries Program
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Launched in July 2025, this Federal Government program provides approximately 30% off the cost of an eligible battery system — up to $3,000 in savings. This stacks on top of the STC rebate.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { label: "Typical saving on 10kWh battery", value: "~$2,500" },
                    { label: "Typical saving on 13.5kWh battery", value: "~$3,000" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl p-4 text-center" style={{ backgroundColor: "var(--color-accent)" }}>
                      <p className="text-2xl font-black" style={{ color: "var(--color-secondary)" }}>{item.value}</p>
                      <p className="text-sm text-gray-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feed-in Tariffs */}
            <div className="flex items-start gap-6 mb-12">
              <div className="text-5xl">⚡</div>
              <div>
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                  Feed-in Tariffs (FiT)
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Feed-in tariffs are credits on your electricity bill for any solar energy you export back to the grid. Typical rates in NSW are 5–10¢/kWh — much lower than what you pay to buy electricity (28–33¢/kWh). This is why battery storage is increasingly popular.
                </p>
                <p className="text-gray-600">
                  We recommend maximising self-consumption first, then considering battery storage if you have significant export, before relying on feed-in credits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Rebate FAQs
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>
                  {faq.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Calculate your 2026 rebate value.
          </h2>
          <p className="text-xl text-white/85 mb-8">Enter your details and see exactly what you&apos;ll save.</p>
          <Link href="/solar-calculator" className="btn-primary text-lg px-8 py-4">
            Calculate My Rebate →
          </Link>
        </div>
      </section>
    </>
  );
}
