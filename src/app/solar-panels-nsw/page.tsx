import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Solar Panels NSW 2026 | Prices, Rebates & Best Installers",
  description:
    "Solar panels NSW in 2026 — real installed prices, every rebate explained, payback periods and how to choose a CEC-accredited installer. Honest local guide.",
  alternates: { canonical: "https://www.coastalsolarco.com/solar-panels-nsw" },
  openGraph: {
    title: "Solar Panels NSW 2026 | Complete Guide | Coastal Solar Co.",
    description:
      "Real installed prices for solar panels in NSW, every rebate explained, and how to choose the right installer. Updated April 2026.",
    url: "https://www.coastalsolarco.com/solar-panels-nsw",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Panels NSW 2026 — Prices, Rebates & Installers",
    description:
      "The honest 2026 guide to solar panels in NSW — real numbers, every rebate.",
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
          name: "Solar Panels NSW",
          item: "https://www.coastalsolarco.com/solar-panels-nsw",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Solar Panels NSW 2026 — Prices, Rebates & Best Installers",
      description:
        "Complete 2026 guide to solar panels in NSW — prices, rebates, payback and how to choose a trustworthy installer.",
      datePublished: "2026-04-19",
      dateModified: "2026-04-19",
      author: {
        "@type": "Person",
        name: "Mo",
        worksFor: { "@type": "Organization", name: "Coastal Solar Co." },
      },
      publisher: {
        "@type": "Organization",
        name: "Coastal Solar Co.",
        logo: { "@type": "ImageObject", url: "https://www.coastalsolarco.com/logo.png" },
      },
      mainEntityOfPage: "https://www.coastalsolarco.com/solar-panels-nsw",
      image: "https://www.coastalsolarco.com/og-image.jpg",
      about: { "@type": "Thing", name: "Solar Panels NSW" },
      articleSection: "Solar Energy",
    },
  ],
};

export default function SolarPanelsNSWPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm">
          <ol className="flex items-center gap-2 text-gray-500">
            <li>
              <Link href="/" className="hover:text-amber-600">
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="font-medium" style={{ color: "var(--color-primary)" }}>
              Solar Panels NSW
            </li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="gradient-hero text-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-white/70 mb-4">
            NSW Solar Guide · Updated April 2026
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Solar Panels NSW — The Honest 2026 Guide
          </h1>
          <p className="text-xl text-white/85 max-w-3xl mx-auto mb-8 leading-relaxed">
            Real installed prices, every rebate explained, payback for NSW homes, and how to choose a CEC-accredited installer you can trust. Written by a Kiama-based installer who&apos;s completed 1,200+ jobs across the Illawarra and South Coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solar-calculator" className="btn-primary text-lg px-8 py-4">
              Calculate my savings →
            </Link>
            <a href="tel:0493531857" className="btn-outline text-lg px-8 py-4" style={{ borderColor: "rgba(255,255,255,0.6)", color: "white" }}>
              Call 0493 531 857
            </a>
          </div>
        </div>
      </section>

      {/* TOC / KEY FACTS */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-10 text-center">
            {[
              { label: "6.6kW installed", value: "$5,500–$8,500" },
              { label: "10kW installed", value: "$10,800–$13,500" },
              { label: "Typical payback", value: "4–6 years" },
              { label: "NSW homes with solar", value: "1 in 3" },
            ].map((k, i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "var(--color-accent)" }}>
                <p className="text-2xl font-black" style={{ color: "var(--color-secondary)" }}>
                  {k.value}
                </p>
                <p className="text-xs text-gray-600 mt-1">{k.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-6 bg-gray-50 border border-gray-200">
            <p className="font-bold mb-3" style={{ color: "var(--color-primary)" }}>
              On this page
            </p>
            <ol className="grid sm:grid-cols-2 gap-y-1 gap-x-4 text-sm text-gray-700 list-decimal pl-5">
              <li><a href="#costs" className="hover:underline">How much solar panels cost in NSW</a></li>
              <li><a href="#rebates" className="hover:underline">Every NSW solar rebate in 2026</a></li>
              <li><a href="#size" className="hover:underline">What size system you need</a></li>
              <li><a href="#payback" className="hover:underline">Payback periods for NSW homes</a></li>
              <li><a href="#installer" className="hover:underline">Choosing the right installer</a></li>
              <li><a href="#process" className="hover:underline">The NSW install process</a></li>
              <li><a href="#battery" className="hover:underline">Should you add a battery?</a></li>
              <li><a href="#faq" className="hover:underline">Frequently asked questions</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* COSTS */}
      <section id="costs" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            How much do solar panels cost in NSW in 2026?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            A quality 6.6kW solar system in NSW costs between $5,500 and $8,500 installed after the federal STC rebate. A 10kW system costs $10,800–$13,500, and a 10kW + 10kWh battery bundle costs $11,000–$15,000 after both the STC rebate and Cheaper Home Batteries Program are applied at point of sale.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
                  <th className="px-4 py-3 border border-gray-200">System size</th>
                  <th className="px-4 py-3 border border-gray-200">Installed price (after STC)</th>
                  <th className="px-4 py-3 border border-gray-200">Annual generation</th>
                  <th className="px-4 py-3 border border-gray-200">Annual savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-200 font-semibold">6.6kW</td>
                  <td className="px-4 py-3 border border-gray-200">$5,500–$8,500</td>
                  <td className="px-4 py-3 border border-gray-200">9,500–10,500 kWh</td>
                  <td className="px-4 py-3 border border-gray-200">$1,200–$1,800</td>
                </tr>
                <tr style={{ backgroundColor: "var(--color-accent)" }}>
                  <td className="px-4 py-3 border border-gray-200 font-semibold">10kW</td>
                  <td className="px-4 py-3 border border-gray-200">$10,800–$13,500</td>
                  <td className="px-4 py-3 border border-gray-200">14,500–16,000 kWh</td>
                  <td className="px-4 py-3 border border-gray-200">$2,000–$2,800</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-200 font-semibold">10kW + 10kWh battery</td>
                  <td className="px-4 py-3 border border-gray-200">$11,000–$15,000</td>
                  <td className="px-4 py-3 border border-gray-200">14,500–16,000 kWh</td>
                  <td className="px-4 py-3 border border-gray-200">$2,500–$3,500</td>
                </tr>
                <tr style={{ backgroundColor: "var(--color-accent)" }}>
                  <td className="px-4 py-3 border border-gray-200 font-semibold">13kW + 15kWh battery</td>
                  <td className="px-4 py-3 border border-gray-200">$18,000–$24,000</td>
                  <td className="px-4 py-3 border border-gray-200">19,000–21,000 kWh</td>
                  <td className="px-4 py-3 border border-gray-200">$4,000–$5,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Prices vary across NSW by roof type, switchboard condition and panel brand. Regional NSW towns typically see prices within $500–$1,000 of metropolitan Sydney. See our detailed <Link href="/blog/solar-panel-cost-wollongong-2026" className="font-semibold" style={{ color: "var(--color-secondary)" }}>Wollongong price breakdown</Link> for a localised comparison.
          </p>
        </div>
      </section>

      {/* REBATES */}
      <section id="rebates" className="py-16" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Every NSW solar rebate in 2026
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Four layers of rebates and incentives apply to NSW solar installs in 2026. A reputable installer applies all of them at point of sale — you should never have to claim anything yourself.
          </p>
          <div className="space-y-4">
            {[
              {
                name: "Federal STC Rebate",
                value: "$2,800–$3,800 on a 6.6kW system",
                desc: "Small-scale Technology Certificates (STCs) are assigned based on system size and location. Your installer applies STCs as a direct discount on your invoice. Deeming years drop from 5 to 4 on 1 January 2027 — a ~17% reduction.",
              },
              {
                name: "Cheaper Home Batteries Program",
                value: "Up to $2,000 off a new battery",
                desc: "Launched July 2025. Available to all Australian homeowners. Coastal Solar Co. handles the application and applies the rebate at point of sale.",
              },
              {
                name: "NSW DER Incentive (VPP bonus)",
                value: "$400–$1,500 for VPP participation",
                desc: "Additional incentive for connecting your battery to a Virtual Power Plant. Optional but often worth stacking if your retailer supports it.",
              },
              {
                name: "Feed-in tariffs",
                value: "5–10¢/kWh",
                desc: "Set by your retailer (not us). AGL, Origin, EnergyAustralia, Red Energy, Amber Electric and others offer different rates. The top retailers in 2026 are paying 8–10¢ for the first 5–10kWh/day.",
              },
            ].map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg" style={{ color: "var(--color-primary)" }}>{r.name}</h3>
                  <span className="font-black" style={{ color: "var(--color-secondary)" }}>{r.value}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-6">
            Full breakdown at our <Link href="/solar-rebates-nsw" className="font-semibold" style={{ color: "var(--color-secondary)" }}>NSW Solar Rebates guide</Link>.
          </p>
        </div>
      </section>

      {/* SIZE */}
      <section id="size" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            What size solar system do NSW homes need?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            For most NSW homes in 2026, a 10kW system is the sweet spot. It costs only 35–40% more than the traditional 6.6kW but generates 50% more energy — and pairs better with a future battery. The 6.6kW is still the right call for small single-storey homes, very low-usage households, or constrained roofs.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            See the full analysis in our <Link href="/blog/6kw-vs-10kw-solar-illawarra" className="font-semibold" style={{ color: "var(--color-secondary)" }}>6.6kW vs 10kW comparison</Link>.
          </p>
        </div>
      </section>

      {/* PAYBACK */}
      <section id="payback" className="py-16" style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
            How fast do NSW solar systems pay for themselves?
          </h2>
          <p className="text-white/85 text-lg leading-relaxed mb-4">
            In NSW in 2026, with retail electricity at 28–34¢/kWh and solar feed-in at 5–10¢/kWh, a well-designed 6.6–10kW system typically pays for itself in <strong>4–6 years</strong>. Homes with high daytime consumption (EVs, heat-pump hot water, work-from-home offices) reach payback in 3.5–4.5 years.
          </p>
          <p className="text-white/85 text-lg leading-relaxed">
            Adding a battery extends payback to 7–9 years but increases lifetime savings by $15,000–$25,000 over a 15-year system life.
          </p>
          <Link href="/solar-calculator" className="inline-block mt-6 bg-white font-bold px-6 py-3 rounded-lg" style={{ color: "var(--color-primary)" }}>
            Run your own numbers →
          </Link>
        </div>
      </section>

      {/* INSTALLER */}
      <section id="installer" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            How to choose a NSW solar installer
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            NSW has 400+ CEC-accredited solar installers, but quality varies widely. Use this five-point checklist before signing any contract:
          </p>
          <ol className="space-y-3 text-gray-700 list-decimal pl-6">
            <li><strong>CEC accreditation number visible on the quote.</strong> Check it at cleanenergycouncil.org.au — no exceptions.</li>
            <li><strong>10-year workmanship warranty in writing.</strong> Not 5, not 2. Ten.</li>
            <li><strong>Specific panel and inverter models listed</strong> — not &ldquo;Tier 1 brand.&rdquo; You should see Jinko, Trina, REC, Fronius, Sungrow or similar named in the quote.</li>
            <li><strong>Transparent pricing shown before a site visit.</strong> If they won&apos;t give you a price range without a 2-hour home visit, walk away.</li>
            <li><strong>Local team, not lead-gen middlemen.</strong> Ask who will install and who answers the phone 6 months later.</li>
          </ol>
          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            Our <Link href="/blog/solar-installer-checklist" className="font-semibold" style={{ color: "var(--color-secondary)" }}>10 questions to ask any solar installer</Link> guide expands this list.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            What to expect: the NSW solar install process
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Free quote (5 minutes)", desc: "Use our calculator or call us. We give you a real quote over the phone, often without visiting." },
              { step: "2", title: "Site survey (30–60 minutes)", desc: "We inspect your roof, switchboard, meter and shading. Quote is finalised same day." },
              { step: "3", title: "Grid connection application", desc: "We submit to Endeavour Energy, Essential Energy or Ausgrid. Takes 1–5 business days." },
              { step: "4", title: "Installation (1 day for 6.6kW; 1-2 days for 10kW)", desc: "CEC-accredited team installs panels, inverter, isolators and monitoring. You don't need to be home." },
              { step: "5", title: "Inspection & meter change", desc: "Post-install inspection (sometimes required), then your retailer installs a bi-directional meter. Solar generates from day one." },
              { step: "6", title: "30-minute walkthrough", desc: "Your installer sets up your monitoring app, explains your system and answers every question." },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-5 flex gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black flex-shrink-0" style={{ backgroundColor: "var(--color-secondary)" }}>
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "var(--color-primary)" }}>{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BATTERY */}
      <section id="battery" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Should NSW homes add a battery in 2026?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The case for batteries in NSW strengthened significantly in 2025 when the Cheaper Home Batteries Program launched — now a 10kWh battery retrofit pays back in 7–9 years, down from 10–13 years pre-rebate. For households with high evening usage (EVs charging at night, electric hot water, work-from-home), batteries have become genuinely worthwhile.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Read our detailed <Link href="/blog/are-solar-batteries-worth-it-2026" className="font-semibold" style={{ color: "var(--color-secondary)" }}>2026 battery ROI analysis</Link> with real dollar numbers for a Shellharbour household.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <div id="faq">
        <FAQSection
          route="solar-panels-nsw"
          title="NSW solar FAQs"
          intro="The most-asked questions from NSW homeowners about solar panels — pricing, rebates, system sizing, payback and installer selection."
          limit={18}
          variant="tint"
        />
        <div className="text-center py-6 bg-white">
          <Link href="/faq" className="font-semibold underline" style={{ color: "var(--color-secondary)" }}>
            See our complete FAQ library →
          </Link>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Ready for a real NSW solar quote?
          </h2>
          <p className="text-xl text-white/85 mb-8 max-w-2xl mx-auto">
            Get personalised numbers for your home in 60 seconds. No email required. CEC-accredited. 5-minute callback.
          </p>
          <Link href="/solar-calculator" className="btn-primary text-lg px-10 py-5 inline-block">
            Show me my savings →
          </Link>
        </div>
      </section>
    </>
  );
}
