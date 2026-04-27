import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Solar Rebates NSW 2026 | Every Incentive Explained",
  description:
    "Every NSW solar rebate in 2026 — STC scheme ($2,800–$3,800), Cheaper Home Batteries Program, NSW DER Incentive, feed-in tariffs. How to claim, how much you'll get.",
  alternates: { canonical: "https://www.coastalsolarco.com/solar-rebates-nsw" },
  openGraph: {
    title: "Solar Rebates NSW 2026 | Complete Guide | Coastal Solar Co.",
    description:
      "Every NSW solar rebate explained — STC, battery rebate, VPP bonus, feed-in tariffs. Updated April 2026.",
    url: "https://www.coastalsolarco.com/solar-rebates-nsw",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.coastalsolarco.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solar Rebates NSW",
          item: "https://www.coastalsolarco.com/solar-rebates-nsw",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Solar Rebates NSW 2026 — Every Incentive Explained",
      description:
        "Complete 2026 guide to every NSW solar rebate: STC scheme, Cheaper Home Batteries Program, DER Incentive and feed-in tariffs.",
      datePublished: "2026-04-19",
      dateModified: "2026-04-19",
      author: { "@type": "Person", name: "Mo", worksFor: { "@type": "Organization", name: "Coastal Solar Co." } },
      publisher: {
        "@type": "Organization",
        name: "Coastal Solar Co.",
        logo: { "@type": "ImageObject", url: "https://www.coastalsolarco.com/logo.png" },
      },
      mainEntityOfPage: "https://www.coastalsolarco.com/solar-rebates-nsw",
    },
  ],
};

export default function SolarRebatesNSWPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li className="font-medium" style={{ color: "var(--color-primary)" }}>Solar Rebates NSW</li>
          </ol>
        </div>
      </nav>

      <section className="gradient-hero text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-white/70 mb-4">
            Updated April 2026
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
            Solar Rebates NSW — Every 2026 Incentive
          </h1>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Four layers of rebates and incentives apply to NSW solar installs in 2026. Here&apos;s exactly what&apos;s available, how much you&apos;ll get, and how to stack them correctly.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              { label: "Federal STC", value: "$2,800–$3,800" },
              { label: "Battery rebate", value: "up to $2,000" },
              { label: "NSW VPP bonus", value: "$400–$1,500" },
              { label: "Feed-in tariff", value: "5–10¢/kWh" },
            ].map((k, i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "var(--color-accent)" }}>
                <p className="text-xl sm:text-2xl font-black" style={{ color: "var(--color-secondary)" }}>{k.value}</p>
                <p className="text-xs text-gray-600 mt-1">{k.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            1. Federal STC Rebate — $2,800–$3,800
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The federal Small-scale Technology Certificate (STC) scheme is the biggest rebate available to NSW homeowners. Under current 2026 settings, your installer earns STCs based on system size, location and a deeming period that reduces each year. These are applied as a direct point-of-sale discount on your invoice.
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
                  <th className="px-4 py-3 border border-gray-200 text-left">System</th>
                  <th className="px-4 py-3 border border-gray-200 text-left">STCs earned (2026)</th>
                  <th className="px-4 py-3 border border-gray-200 text-left">Rebate value @ $40/STC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-200">6.6kW</td>
                  <td className="px-4 py-3 border border-gray-200">~73</td>
                  <td className="px-4 py-3 border border-gray-200 font-semibold">~$2,920</td>
                </tr>
                <tr style={{ backgroundColor: "var(--color-accent)" }}>
                  <td className="px-4 py-3 border border-gray-200">10kW</td>
                  <td className="px-4 py-3 border border-gray-200">~110</td>
                  <td className="px-4 py-3 border border-gray-200 font-semibold">~$4,400</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-200">13kW</td>
                  <td className="px-4 py-3 border border-gray-200">~143</td>
                  <td className="px-4 py-3 border border-gray-200 font-semibold">~$5,720</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The STC scheme phases down by one deeming year each 1 January until 2031. Installing before 1 January 2027 locks in the current value — roughly $400–$500 more than the same install in 2027. Read our <Link href="/blog/stc-rebate-dropping-2027" className="font-semibold" style={{ color: "var(--color-secondary)" }}>STC 2027 analysis</Link>.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            2. Cheaper Home Batteries Program — up to $2,000
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Launched 1 July 2025, the federal Cheaper Home Batteries Program gives roughly 30% off eligible battery systems — up to $2,000 per household. Available to all Australian homeowners, applied automatically at point of sale by your installer. Covers retrofits to existing solar as well as new solar + battery bundles.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Full eligibility and stacking detail in our <Link href="/blog/cheaper-home-batteries-program-nsw" className="font-semibold" style={{ color: "var(--color-secondary)" }}>Cheaper Home Batteries Program NSW guide</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            3. NSW DER Incentive — $400–$1,500 VPP bonus
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            NSW doesn&apos;t currently run a panel-specific state rebate, but the NSW Distributed Energy Resources (DER) Incentive pays an additional bonus for batteries that connect to an approved Virtual Power Plant. You&apos;ll typically earn $400–$1,500 upfront plus ongoing credits for allowing the VPP operator to discharge your battery to the grid during peak events (capped, with user controls).
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
            4. Feed-in tariffs — 5–10¢/kWh (2026)
          </h2>
          <p className="text-white/85 text-lg leading-relaxed mb-4">
            Feed-in tariffs are what your retailer pays you for excess solar exported to the grid. They&apos;re not technically a rebate but they directly affect your solar ROI. In 2026, NSW feed-in rates vary significantly by retailer:
          </p>
          <ul className="text-white/85 space-y-2 list-disc pl-6">
            <li><strong>Amber Electric</strong> — wholesale-linked, averaging 8–12¢/kWh in 2026</li>
            <li><strong>Energy Locals</strong> — 8–10¢/kWh for first 10kWh/day</li>
            <li><strong>OVO Energy</strong> — 7–9¢/kWh (solar-boost plans)</li>
            <li><strong>AGL / Origin / EnergyAustralia</strong> — 5–7¢/kWh standard</li>
          </ul>
          <p className="text-white/85 leading-relaxed mt-4">
            Shopping retailers annually is worth it — the gap between the best and worst in 2026 is often $200–$400/year for a typical NSW solar home.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            How to stack NSW solar rebates correctly
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            All four incentives can stack. A typical NSW 10kW + 10kWh battery install in 2026 looks like this:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6 font-mono text-sm">
            <p>Gross install cost ............... $17,500</p>
            <p>Less federal STC rebate .......... ($4,400)</p>
            <p>Less Cheaper Home Batteries ...... ($2,000)</p>
            <p>Less NSW DER VPP bonus ........... ($800)</p>
            <p className="border-t border-gray-300 pt-2 mt-2 font-bold">Net cost after rebates ........... $10,300</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Plus ~$2,400/year in bill savings and feed-in credits — payback in roughly 4.5 years.
          </p>
          <div className="mt-8 text-center">
            <Link href="/solar-calculator" className="btn-primary text-lg px-8 py-4 inline-block">
              Calculate my NSW rebate stack →
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        route="solar-rebates-nsw"
        title="NSW solar rebate FAQs"
        intro="Every rebate question we get from NSW homeowners — STC values, Cheaper Home Batteries Program, NSW DER incentive, feed-in tariffs and more."
        limit={15}
        variant="tint"
      />
    </>
  );
}
