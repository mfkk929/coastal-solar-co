import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coastal Solar Co. vs Shoalhaven Solar | 2026 South Coast Comparison",
  description:
    "Coastal Solar Co. vs Shoalhaven Solar — two local, family-owned South Coast installers compared on warranty, coverage, transparency and pricing.",
  alternates: { canonical: "https://www.coastalsolarco.com/compare/vs-shoalhaven-solar" },
};

const rows = [
  { factor: "Base location", us: "Kiama (Illawarra hub)", them: "Berry (South Coast hub)" },
  { factor: "Business type", us: "Family-owned, specialist solar", them: "Family-owned, specialist solar" },
  { factor: "Upfront pricing", us: "✅ Published ranges on /pricing", them: "❌ Quote only" },
  { factor: "Workmanship warranty", us: "10 years", them: "Not publicly confirmed" },
  { factor: "Callback guarantee", us: "✅ 5 minutes in business hours", them: "❌ Not publicly stated" },
  { factor: "Free site assessments", us: "✅ Included, no-obligation", them: "✅ Offered" },
  { factor: "Knowledge base / blog", us: "✅ 16+ local articles", them: "✅ Good knowledge base" },
  { factor: "Free online solar calculator", us: "✅ Instant estimate, no email", them: "❌ Not available" },
  { factor: "CEC-accredited designer", us: "✅ Founder-designed every system", them: "✅ Yes" },
  { factor: "Battery specialist", us: "✅ Dedicated rebate guidance", them: "Offered" },
  { factor: "Coverage area", us: "Wollongong → Ulladulla", them: "Berry / Shoalhaven focus" },
  { factor: "Tesla Powerwall certified", us: "✅ Yes", them: "Status not confirmed" },
];

const faqs = [
  {
    q: "Is Shoalhaven Solar a legitimate South Coast installer?",
    a: "Yes — Shoalhaven Solar is a genuine family-owned business based in Berry with an established presence on the South Coast. They've built a good educational knowledge base on their site and have a solid local reputation among Berry and lower South Coast customers.",
  },
  {
    q: "How does Coastal Solar Co. differ from Shoalhaven Solar?",
    a: "Both are family-owned, CEC-accredited, specialist solar installers with local South Coast focus. The differences: Coastal Solar Co. publishes system pricing ranges upfront (vs Shoalhaven Solar's custom-quote model), offers a documented 10-year workmanship warranty, and commits to a 5-minute callback guarantee. Coverage is also broader — Coastal services the full Illawarra (including Wollongong, Kiama, Shellharbour) while Shoalhaven Solar is focused on the Berry / Shoalhaven area.",
  },
  {
    q: "Which installer is better for a Berry or Shoalhaven homeowner?",
    a: "Both will install competently in Berry and Nowra. Shoalhaven Solar has geographic advantage by being based in Berry. Coastal Solar Co. runs install crews through Berry, Nowra, Bomaderry and Jervis Bay weekly from our Kiama base. Decision comes down to transparency preferences: if you want published pricing and a 10-year workmanship warranty in writing, we're the stronger fit. If you specifically prefer a Berry-based business, Shoalhaven Solar is a reasonable choice.",
  },
  {
    q: "Do both companies handle NSW battery rebates?",
    a: "Both can process battery rebate paperwork for customers installing a battery system. Coastal Solar Co. has dedicated battery guidance as part of every battery-inclusive quote and navigates both the NSW Cheaper Home Batteries Program and the federal battery rebate. See our Cheaper Home Batteries Program explainer for full program detail. Shoalhaven Solar offers battery systems as part of their standard service.",
  },
  {
    q: "Which installer has longer warranties?",
    a: "Coastal Solar Co. publishes a 10-year workmanship warranty — longer than the 5–7 years that most Australian solar installers offer. Shoalhaven Solar's specific workmanship warranty length isn't publicly stated on their website. Equipment warranties (panels, inverters) are set by manufacturer and are identical between installers using tier-one brands.",
  },
  {
    q: "Should I get quotes from both companies?",
    a: "Yes — two or three quotes is standard for a solar install of $6,000–$20,000. Use our free solar calculator first to establish an independent benchmark, then compare two real quotes against that figure. This usually makes the final decision straightforward.",
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
    { "@type": "ListItem", position: 3, name: "vs Shoalhaven Solar", item: "https://www.coastalsolarco.com/compare/vs-shoalhaven-solar" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Coastal Solar Co. vs Shoalhaven Solar — 2026 South Coast Solar Comparison",
  author: { "@type": "Person", name: "Mo", url: "https://www.coastalsolarco.com/about/mo" },
  publisher: {
    "@type": "Organization",
    name: "Coastal Solar Co.",
    url: "https://www.coastalsolarco.com",
    logo: { "@type": "ImageObject", url: "https://www.coastalsolarco.com/logo.png" },
  },
  datePublished: "2026-04-22",
  dateModified: "2026-04-22",
  mainEntityOfPage: "https://www.coastalsolarco.com/compare/vs-shoalhaven-solar",
  inLanguage: "en-AU",
};

export default function VsShoalhavenSolarPage() {
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
            <span className="text-white">vs Shoalhaven Solar</span>
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
            <p className="text-gray-700">
              Shoalhaven Solar is a genuine family-owned business based in Berry with an established South Coast
              track record and a commendable educational approach — their customer-facing knowledge base is good.
              They share the &ldquo;local family business&rdquo; positioning with several South Coast competitors
              without specific differentiation on published pricing or written warranty commitments. Coastal Solar
              Co. is also family-owned and CEC-accredited, but we differentiate on three concrete fronts:
              published price ranges (vs custom-quote-only), a documented 10-year workmanship warranty, and a
              5-minute callback guarantee. Our coverage also extends further north into the full Illawarra — useful
              if you&apos;re weighing options across the broader region.
            </p>
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

          <h2 className="text-2xl font-black mt-16 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Family-Owned Solar: What Actually Makes a Difference</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              &ldquo;Local family business&rdquo; is the single most common positioning in the Australian solar
              industry. Shoalhaven Solar uses it. Coastal Solar Co. uses it. Half of every installer page in NSW
              uses it. In the abstract, it doesn&apos;t mean much — what actually matters is what the family
              commits to in writing.
            </p>
            <p>
              For us, family-owned translates into three concrete commitments: a 10-year workmanship warranty
              (because if we damage your roof in year 8, that should still be our problem), published pricing
              (because a family business hiding behind custom-only quotes is behaving like a bigger business),
              and a 5-minute callback guarantee in business hours (because a small team without call centres
              can actually deliver this). Shoalhaven Solar&apos;s exact commitments are not public — which isn&apos;t
              a criticism, just a difference in how we each present our offer.
            </p>
            <p>
              The other substantive difference is coverage footprint. Both companies are Illawarra/South Coast
              focused; Coastal Solar Co. operates across a wider corridor (Wollongong → Ulladulla) while
              Shoalhaven Solar is primarily Berry and surrounding Shoalhaven suburbs.
            </p>
          </div>

          <h2 className="text-2xl font-black mt-12 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Pricing Transparency</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Coastal Solar Co. publishes{" "}
              <Link href="/pricing" className="font-bold" style={{ color: "var(--color-secondary)" }}>real price ranges for every system size</Link>{" "}
              — 6.6kW, 10kW, 10kW + battery, 13kW + battery — all after STC and NSW battery rebates are applied.
              You can see these numbers without talking to us.
            </p>
            <p>
              Shoalhaven Solar uses a custom-quote model. You enquire, they do a site assessment, and pricing
              follows. This is the Australian solar industry default — perfectly normal, but it means you invest
              time in the assessment before you know whether the budget works.
            </p>
            <p>
              Neither approach is objectively better. Published pricing works best if you&apos;re early in the
              decision and want to know whether solar is affordable for your household before you book consults.
              Custom quotes work better if you have unusual site conditions (steep tile roofs, multi-storey,
              complex shading) where averaged pricing may not apply.
            </p>
          </div>

          <h2 className="text-2xl font-black mt-12 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Warranty Positioning</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              The Australian solar industry standard workmanship warranty sits between 5 and 7 years. Coastal
              Solar Co. publishes 10 years on every install and states it on every quote. Shoalhaven Solar&apos;s
              specific workmanship warranty length is not publicly documented. If warranty length matters to
              you (and it should — installation-related issues frequently surface between years 6 and 10),
              it&apos;s worth explicitly asking Shoalhaven Solar what they offer and getting it in writing.
            </p>
            <p>
              Panel and inverter warranties are equipment-side and are set by manufacturers. Both companies
              install tier-one panels (Jinko, Trina, Longi, REC, Q CELLS) with 25-year panel warranties and
              mainstream inverters (SolarEdge, Enphase, Fronius, Sungrow, GoodWe) with 10–12 year warranties.
              Those are identical between the two.
            </p>
          </div>

          <h2 className="text-2xl font-black mt-12 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Coverage: Berry / Shoalhaven vs Full Corridor</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Shoalhaven Solar is Berry-based and focuses on Berry, Nowra, Bomaderry, Kangaroo Valley and the
              surrounding Shoalhaven area. Install scheduling density is highest close to Berry.
            </p>
            <p>
              Coastal Solar Co. is Kiama-based and runs weekly crews through the Illawarra and South Coast:
              Wollongong, Shellharbour, Dapto, Kiama, Gerringong, Berry, Nowra, Bomaderry, Worrigee, Huskisson,
              Jervis Bay and Ulladulla. For Berry customers specifically, Shoalhaven Solar has the closer base;
              for customers comparing across Kiama, Gerringong and Berry (common for people considering a move
              or helping family), we offer more consistent coverage across suburbs.
            </p>
          </div>

          <h2 className="text-2xl font-black mt-12 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Education &amp; Customer Resources</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Shoalhaven Solar publishes a reasonable knowledge base covering the basics of solar for South
              Coast buyers — credit where due; not every installer does this. Coastal Solar Co. maintains a{" "}
              <Link href="/blog" className="font-bold" style={{ color: "var(--color-secondary)" }}>solar blog</Link>{" "}
              with 16+ in-depth articles specifically focused on Illawarra and South Coast conditions:
              escarpment shading, Endeavour Energy approvals, 2026 STC rebate detail, battery rebate stacking,
              real payback math for Illawarra homes. We also publish a{" "}
              <Link href="/solar-calculator" className="font-bold" style={{ color: "var(--color-secondary)" }}>free solar calculator</Link>{" "}
              that produces an instant estimate without an email. Both companies invest in customer education;
              we invest more in Illawarra-specific depth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="rounded-2xl p-6 border" style={{ borderColor: "rgba(43,76,94,0.15)" }}>
              <h3 className="font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>Choose Shoalhaven Solar if:</h3>
              <ul className="text-gray-700 text-sm space-y-2 list-disc pl-4">
                <li>You&apos;re specifically in Berry or close to it</li>
                <li>You specifically want a Berry-based business with local Berry staff</li>
                <li>You&apos;re comfortable with custom-quote-only pricing</li>
                <li>Written warranty length isn&apos;t a priority for you</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
              <h3 className="font-bold mb-3" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}>Choose Coastal Solar Co. if:</h3>
              <ul className="text-white/85 text-sm space-y-2 list-disc pl-4">
                <li>You want published pricing before you book a consult</li>
                <li>A 10-year workmanship warranty matters to you</li>
                <li>You want a 5-minute callback guarantee in writing</li>
                <li>You&apos;re evaluating options across the Illawarra and South Coast</li>
                <li>You&apos;re considering a battery and want specialist rebate navigation</li>
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
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Let the numbers do the talking</h2>
          <p className="text-white/85 mb-8">Calculate your savings with our free tool, then compare any quotes you receive.</p>
          <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings →</Link>
        </div>
      </section>
    </>
  );
}
