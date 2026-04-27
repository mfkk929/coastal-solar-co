import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coastal Solar Co. vs HOTT Electrics | 2026 Wollongong Solar Comparison",
  description:
    "Solar specialist vs Wollongong's most reviewed electrician — Coastal Solar Co. vs HOTT Electrics compared on warranty, approach, pricing and coverage.",
  alternates: { canonical: "https://www.coastalsolarco.com/compare/vs-hott-electrics" },
};

const rows = [
  { factor: "Primary discipline", us: "Solar specialist (design + install)", them: "Electrical contractor + solar" },
  { factor: "Review volume", us: "200+ five-star (growing fast)", them: "800+ five-star (market-leading)" },
  { factor: "Upfront pricing", us: "✅ Published ranges on /pricing", them: "❌ Quote only" },
  { factor: "Workmanship warranty", us: "10 years", them: "Not publicly stated" },
  { factor: "Callback guarantee", us: "✅ 5 minutes in business hours", them: "❌ Not publicly stated" },
  { factor: "Free online solar calculator", us: "✅ Instant estimate, no email", them: "❌ Not available" },
  { factor: "Published blog / guides", us: "✅ 16+ local articles", them: "General electrical blog" },
  { factor: "CEC-accredited solar designer", us: "✅ In-house", them: "✅ Yes" },
  { factor: "Battery specialist offering", us: "✅ Dedicated guidance", them: "Standard offering" },
  { factor: "South Coast coverage", us: "Wollongong → Ulladulla", them: "Primarily Illawarra" },
  { factor: "Electrical alongside solar", us: "Standard grid-connect work", them: "✅ Full electrical scope" },
  { factor: "Years under current brand", us: "8+", them: "Long-established" },
];

const faqs = [
  {
    q: "Is HOTT Electrics a legitimate solar installer in Wollongong?",
    a: "Yes — HOTT Electrics is a well-established Wollongong electrical business with 800+ five-star reviews. They've earned a reputation for reliable electrical and solar work and are a completely legitimate choice, particularly for customers who need electrical work done alongside their solar install.",
  },
  {
    q: "What's the difference between an electrician doing solar and a solar specialist?",
    a: "Both are legitimate, but the emphasis differs. An electrical-contractor-first business like HOTT Electrics has deep grid-connect and wiring expertise and does solar as part of a broader electrical offering. A solar-first specialist like Coastal Solar Co. focuses all its design and installation effort on solar PV systems — shading analysis, string architecture, inverter selection, battery integration and rebate paperwork. For a complex solar-only project, specialist depth usually wins. For a project that bundles solar with a switchboard upgrade, EV charger install or major rewire, an electrical generalist may be smoother.",
  },
  {
    q: "Does HOTT Electrics' higher review count mean they're better?",
    a: "Higher review volume reflects years of operation and a larger customer base more than it does install quality. Both companies score very high on five-star ratio, which is the more useful quality signal. If raw review count is your top decision criterion, HOTT wins. If you value a published warranty, transparent pricing, and a specialist focus on solar, Coastal Solar Co. is the stronger fit.",
  },
  {
    q: "Which company offers a longer warranty?",
    a: "Coastal Solar Co. publishes a 10-year workmanship warranty on every residential solar install. HOTT Electrics' specific workmanship warranty length for solar is not publicly stated on their website. Equipment warranties (panels, inverters, batteries) are set by manufacturers and are effectively identical between installers using tier-one brands.",
  },
  {
    q: "Should I get quotes from both companies?",
    a: "For most Wollongong homeowners, yes. Getting 2–3 quotes is standard for a solar install. Using our free solar calculator first gives you an independent benchmark before you talk to either company, which makes side-by-side comparison much easier.",
  },
  {
    q: "Who covers the Shoalhaven and South Coast better?",
    a: "Coastal Solar Co. runs crews across the full corridor from Wollongong down through Kiama, Gerringong, Berry, Nowra, Huskisson, Jervis Bay and Ulladulla. HOTT Electrics is primarily focused on the Wollongong/Illawarra area. If you're south of Kiama, Coastal Solar Co. is the more natural scheduling fit.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.coastalsolarco.com" },
    { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.coastalsolarco.com/compare" },
    { "@type": "ListItem", position: 3, name: "vs HOTT Electrics", item: "https://www.coastalsolarco.com/compare/vs-hott-electrics" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Coastal Solar Co. vs HOTT Electrics — 2026 Wollongong Solar Comparison",
  author: { "@type": "Person", name: "Mo", url: "https://www.coastalsolarco.com/about/mo" },
  publisher: {
    "@type": "Organization",
    name: "Coastal Solar Co.",
    url: "https://www.coastalsolarco.com",
    logo: { "@type": "ImageObject", url: "https://www.coastalsolarco.com/logo.png" },
  },
  datePublished: "2026-04-22",
  dateModified: "2026-04-22",
  mainEntityOfPage: "https://www.coastalsolarco.com/compare/vs-hott-electrics",
  inLanguage: "en-AU",
};

export default function VsHottElectricsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo;{" "}
            <Link href="/compare" className="hover:text-white">Compare</Link> &rsaquo;{" "}
            <span className="text-white">vs HOTT Electrics</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Coastal Solar Co. vs HOTT Electrics
          </h1>
          <p className="text-xl text-white/85 max-w-2xl">
            Solar specialist vs Wollongong&apos;s most reviewed electrical company — compared honestly.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 mb-10" style={{ backgroundColor: "var(--color-accent)" }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>TL;DR</h2>
            <p className="text-gray-700">
              HOTT Electrics is one of the most reviewed electrical/solar companies in Wollongong — 800+ five-star
              reviews is genuinely impressive and reflects a long track record of reliable service. They&apos;re
              electricians first who also install solar. Coastal Solar Co. is solar-first: the whole business is
              designed around residential solar PV, battery storage and rebate navigation. If solar is the primary
              project, specialist focus wins on design depth, warranty length (our 10 years vs their unstated), and
              transparency (our published pricing vs their quote-only model). If you need a broader electrical
              scope — EV charger, switchboard upgrade, rewire, full sparky work alongside solar — HOTT&apos;s generalist
              capability is a genuine advantage.
            </p>
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

          <h2 className="text-2xl font-black mt-16 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Specialist vs Generalist: What It Actually Means</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              The core difference between the two companies sits here. HOTT Electrics is a well-run electrical
              contracting business that offers solar as one of several services. Solar sits alongside their core
              electrical work — switchboards, wiring, commercial electrical, EV chargers and so on. Coastal Solar
              Co. is a solar-only business: solar PV design, battery integration, rebate paperwork, commissioning
              and post-install monitoring. Every person in our business works exclusively on solar.
            </p>
            <p>
              The practical implication: our system design depth is higher on solar-specific detail. We know which
              Endeavour Energy substations in Wollongong are saturated and will cap exports. We know which roofs
              in Keiraville and Mount Kembla need microinverters because the escarpment takes morning sun. We
              know when a Tesla Powerwall beats a BYD Battery-Box on the numbers and when it doesn&apos;t. A
              generalist electrician can do solid solar work — plenty do — but specialist knowledge compounds.
            </p>
            <p>
              Where the generalist model clearly wins: bundled projects. If you need a switchboard upgrade, EV
              charger install, hot water swap and a solar system all at the same time, having one company do all
              of it is simpler and usually cheaper on labour coordination than splitting the work. HOTT does this
              comfortably; we coordinate with trusted local sparkies but don&apos;t take on out-of-scope electrical work.
            </p>
          </div>

          <h2 className="text-2xl font-black mt-12 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Pricing Transparency</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Coastal Solar Co. publishes{" "}
              <Link href="/pricing" className="font-bold" style={{ color: "var(--color-secondary)" }}>a real price range for every system size</Link>{" "}
              on our website. You can see the cost of a 6.6kW, 10kW, 10kW + 10kWh battery and 13kW + 15kWh
              battery package before you talk to us. All prices are after STC and battery rebates.
            </p>
            <p>
              HOTT Electrics operates on a custom-quote model: contact them, they assess your site, and pricing
              is provided after. This is the industry default and it works — but it does mean you invest time
              in a site visit before you see a number. If you want to pre-qualify a budget before any sales
              conversation, our published pricing is a concrete advantage.
            </p>
          </div>

          <h2 className="text-2xl font-black mt-12 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Warranty &amp; Service Commitments</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Coastal Solar Co. publishes two firm service commitments: a 10-year workmanship warranty on every
              residential install, and a 5-minute callback guarantee during business hours for new enquiries and
              support requests. Both are documented and both are stated on every quote we issue.
            </p>
            <p>
              HOTT Electrics does not publicly publish a workmanship warranty length for solar specifically, and
              does not commit to a specific callback window on their website. That doesn&apos;t mean their service
              is poor — their 800+ five-star reviews suggest it is not — but it does mean the commitment lives in
              customer experience rather than in writing. For homeowners who want specifics documented before
              they sign, ours are more explicit.
            </p>
          </div>

          <h2 className="text-2xl font-black mt-12 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Reviews &amp; Reputation</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              HOTT Electrics has built one of the strongest review profiles of any Wollongong trades business —
              over 800 five-star reviews. That volume reflects years of good service and a large customer base.
              Coastal Solar Co. has 200+ five-star reviews, growing quickly, with similar ratios.
            </p>
            <p>
              If you&apos;re the kind of buyer who wants the reassurance of a massive review count, HOTT wins
              comfortably. If you&apos;re reading reviews for <em>content</em> — looking at what customers
              specifically mention — both score well on install quality and post-install responsiveness. Coastal
              Solar Co. is additionally called out for pricing transparency and fast callbacks; HOTT for broad
              capability and long relationships with long-time customers.
            </p>
          </div>

          <h2 className="text-2xl font-black mt-12 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Coverage &amp; Service Area</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              HOTT Electrics is Wollongong-based and primarily services the Illawarra — Wollongong, Shellharbour,
              Dapto and surrounds. They will travel further on request but their scheduling is heaviest close to
              home.
            </p>
            <p>
              Coastal Solar Co. is based in Kiama and runs regular install crews from Wollongong down to
              Ulladulla. If you&apos;re in the{" "}
              <Link href="/locations/nowra" className="font-bold" style={{ color: "var(--color-secondary)" }}>Shoalhaven</Link>,{" "}
              <Link href="/locations/jervis-bay" className="font-bold" style={{ color: "var(--color-secondary)" }}>Jervis Bay</Link>{" "}
              or further south, our scheduling density is a concrete advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="rounded-2xl p-6 border" style={{ borderColor: "rgba(43,76,94,0.15)" }}>
              <h3 className="font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>Choose HOTT Electrics if:</h3>
              <ul className="text-gray-700 text-sm space-y-2 list-disc pl-4">
                <li>You need electrical work alongside solar (switchboard, EV charger, rewire)</li>
                <li>Raw review volume is your top decision criterion</li>
                <li>You&apos;re in central Wollongong and want a Wollongong-based business</li>
                <li>You&apos;re comfortable with custom-quote-only pricing</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
              <h3 className="font-bold mb-3" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}>Choose Coastal Solar Co. if:</h3>
              <ul className="text-white/85 text-sm space-y-2 list-disc pl-4">
                <li>Solar is the primary project and you want specialist depth</li>
                <li>You want published pricing before you book a consult</li>
                <li>A 10-year workmanship warranty matters to you</li>
                <li>You&apos;re south of Kiama, in the Shoalhaven, or coastal South Coast</li>
                <li>You value a 5-minute callback guarantee in writing</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-black mt-16 mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>{f.q}</h3>
                <p className="text-gray-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
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
