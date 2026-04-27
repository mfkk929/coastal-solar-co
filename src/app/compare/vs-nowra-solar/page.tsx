import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coastal Solar Co. vs Nowra Solar | 2026 Shoalhaven Solar Comparison",
  description:
    "Coastal Solar Co. vs Nowra Solar — honest Shoalhaven comparison on pricing, warranty, coverage and approach. Real detail for Nowra & South Coast homeowners.",
  alternates: { canonical: "https://www.coastalsolarco.com/compare/vs-nowra-solar" },
};

const rows = [
  { factor: "Primary service area", us: "Wollongong → Ulladulla", them: "Primarily Shoalhaven" },
  { factor: "Base location", us: "Kiama", them: "Nowra" },
  { factor: "Upfront pricing", us: "✅ Published ranges on /pricing", them: "❌ Quote only" },
  { factor: "Workmanship warranty", us: "10 years", them: "Not publicly stated" },
  { factor: "Callback guarantee", us: "✅ 5 minutes in business hours", them: "❌ Not publicly stated" },
  { factor: "Free online solar calculator", us: "✅ Instant estimate, no email", them: "❌ Not available" },
  { factor: "$0 deposit financing", us: "✅ Available", them: "✅ Available" },
  { factor: "CEC-accredited designer", us: "✅ Founder-designed every system", them: "✅ Yes" },
  { factor: "In-house battery specialist", us: "✅ Dedicated guidance", them: "Offered" },
  { factor: "Published blog / guides", us: "✅ 16+ local articles", them: "Limited" },
  { factor: "Coverage consistency (Wollongong)", us: "✅ Weekly crews", them: "Occasional" },
  { factor: "Tesla Powerwall certified", us: "✅ Yes", them: "Status not confirmed" },
];

const faqs = [
  {
    q: "Is Nowra Solar a good solar installer in the Shoalhaven?",
    a: "Yes — Nowra Solar is a legitimate, locally based installer that has been operating in the Shoalhaven for years. They offer $0-deposit financing and in-house engineering, both of which are genuine positives. Their pricing is custom-quote-only and their public service commitments (warranty length, callback time) are not explicitly documented online.",
  },
  {
    q: "How does Coastal Solar Co. compare to Nowra Solar on pricing?",
    a: "Like-for-like pricing is competitive between the two. The difference is transparency: Coastal Solar Co. publishes price ranges for every system size on the /pricing page, so you can see a 6.6kW ($5,500–$6,500), 10kW ($7,800–$9,500) or 10kW + battery ($14,000–$17,000) before booking a consult. Nowra Solar quotes custom after a site visit.",
  },
  {
    q: "Which company covers the Shoalhaven better?",
    a: "Nowra Solar is Shoalhaven-first by location — they're literally in Nowra. Coastal Solar Co. is Kiama-based but runs weekly install crews across the Shoalhaven (Nowra, Bomaderry, Worrigee, Berry, Huskisson, Jervis Bay, Ulladulla). Both cover the area well. Coastal Solar Co.'s advantage is that we also cover Kiama, Gerringong and the full Illawarra — useful if you have friends or family comparing notes further north.",
  },
  {
    q: "What warranty does Coastal Solar Co. offer compared to Nowra Solar?",
    a: "Coastal Solar Co. offers a 10-year workmanship warranty on every residential install. Nowra Solar's specific workmanship warranty length is not publicly stated. Equipment warranties (panels, inverters) are set by the manufacturer and are the same for both installers using tier-one brands — 25 years on panels, 10–12 years on most inverters.",
  },
  {
    q: "Are the '#1 in Shoalhaven' claims real?",
    a: "Marketing claims like '#1 in Shoalhaven' are not substantiated by any independent ranking. There is no formal rating body that names a #1 installer in any region. Review count and ratio are a better quality signal. Both companies have positive review profiles; neither has published data supporting a #1 claim.",
  },
  {
    q: "Should I get quotes from both for my Shoalhaven install?",
    a: "Yes — getting two or three quotes is standard for a $6,000–$20,000 residential install. The best approach is to use our free solar calculator first for an independent benchmark, then compare two real quotes (one from Nowra Solar, one from Coastal Solar Co., or any two CEC-accredited installers) against that number.",
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
    { "@type": "ListItem", position: 3, name: "vs Nowra Solar", item: "https://www.coastalsolarco.com/compare/vs-nowra-solar" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Coastal Solar Co. vs Nowra Solar — 2026 Shoalhaven Solar Comparison",
  author: { "@type": "Person", name: "Mo", url: "https://www.coastalsolarco.com/about/mo" },
  publisher: {
    "@type": "Organization",
    name: "Coastal Solar Co.",
    url: "https://www.coastalsolarco.com",
    logo: { "@type": "ImageObject", url: "https://www.coastalsolarco.com/logo.png" },
  },
  datePublished: "2026-04-22",
  dateModified: "2026-04-22",
  mainEntityOfPage: "https://www.coastalsolarco.com/compare/vs-nowra-solar",
  inLanguage: "en-AU",
};

export default function VsNowraSolarPage() {
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
            <span className="text-white">vs Nowra Solar</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Coastal Solar Co. vs Nowra Solar
          </h1>
          <p className="text-xl text-white/85 max-w-2xl">Shoalhaven solar — who actually delivers on service, warranty and transparency?</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 mb-10" style={{ backgroundColor: "var(--color-accent)" }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>TL;DR</h2>
            <p className="text-gray-700">
              Nowra Solar is a Shoalhaven-based installer that offers $0-deposit financing and custom-engineered
              systems — both genuine strengths. Their marketing claims &ldquo;#1 Shoalhaven&rdquo; status, which isn&apos;t
              backed by any independent ranking but reflects a general confidence in their position. Coastal
              Solar Co. is Kiama-based and runs weekly install crews through Nowra, Bomaderry, Berry, Jervis Bay
              and down to Ulladulla. We publish our pricing, we commit to a 10-year workmanship warranty and a
              5-minute callback guarantee in writing, and we back that up with 200+ five-star reviews. For
              Shoalhaven homeowners who want service commitments documented, we&apos;re the stronger fit. For
              customers who specifically want a Nowra-based business, Nowra Solar is a reasonable choice.
            </p>
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

          <h2 className="text-2xl font-black mt-16 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Service Area: Shoalhaven vs Full Corridor</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Nowra Solar&apos;s positioning is Shoalhaven-first. They&apos;re based in Nowra, their staff live in the
              area, and most of their installs happen within 30–40km of their base. That local density is a real
              advantage for Shoalhaven customers — the crew is never more than 20 minutes from your roof.
            </p>
            <p>
              Coastal Solar Co. is based in{" "}
              <Link href="/locations/kiama" className="font-bold" style={{ color: "var(--color-secondary)" }}>Kiama</Link>{" "}
              and runs install crews across the full corridor from Wollongong down through Kiama, Gerringong,
              Berry, Nowra, Bomaderry, Worrigee, Jervis Bay, Huskisson and Ulladulla. Our Shoalhaven scheduling
              density is high — we&apos;re usually in Nowra or Berry at least once a week. So practically, if
              you&apos;re a Shoalhaven homeowner, both companies can install your system on a similar timeline.
              The choice comes down to other factors: pricing transparency, warranty, and published service
              commitments.
            </p>
            <p>
              Where our coverage footprint matters is when you&apos;re comparing notes with family or friends in
              Kiama or Gerringong — both of whom Nowra Solar services less frequently. If household decisions
              span the full South Coast corridor, we offer more consistency across suburbs.
            </p>
          </div>

          <h2 className="text-2xl font-black mt-12 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Pricing &amp; Financing</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Nowra Solar offers $0-deposit financing — a useful option for customers who want to spread the
              system cost over monthly instalments rather than pay upfront. Coastal Solar Co. also offers $0
              deposit through mainstream solar finance partners. Neither company manufactures finance in-house;
              both use the established Australian solar-finance providers. Finance rates and fees should be
              confirmed case-by-case — sometimes the advertised &ldquo;$0 down&rdquo; is competitive, sometimes the
              total interest paid outweighs cash purchase savings substantially.
            </p>
            <p>
              On sticker pricing, Coastal Solar Co.&apos;s{" "}
              <Link href="/pricing" className="font-bold" style={{ color: "var(--color-secondary)" }}>published pricing page</Link>{" "}
              shows 6.6kW, 10kW, 10kW + 10kWh battery and 13kW + 15kWh battery price ranges — all after rebates.
              Nowra Solar provides pricing on quote. Both will give you a firm number during the quoting stage;
              the difference is how much information you have before that conversation.
            </p>
          </div>

          <h2 className="text-2xl font-black mt-12 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Warranty &amp; Documented Commitments</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Coastal Solar Co. publishes two firm commitments: a 10-year workmanship warranty on every install
              (longer than industry standard of 5–7 years) and a 5-minute callback guarantee in business hours.
              Both are stated on every quote.
            </p>
            <p>
              Nowra Solar&apos;s specific workmanship warranty length is not publicly documented, nor is a callback
              time window. Many customers will never need to invoke either, so documentation may not matter to
              you. For customers who want written commitments in case something goes wrong, ours are explicit.
            </p>
          </div>

          <h2 className="text-2xl font-black mt-12 mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Battery Integration &amp; Rebate Navigation</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Battery storage has become a major part of the 2026 solar conversation now that feed-in tariffs
              sit at 5–8¢/kWh. Both the NSW Cheaper Home Batteries Program and the federal battery rebate can
              be stacked, knocking $2,000–$4,000 off a 10kWh battery. Navigating both programs requires
              specialist familiarity — eligibility, paperwork, timing.
            </p>
            <p>
              Coastal Solar Co. has dedicated battery guidance as part of every quote where a battery is being
              considered. We&apos;re Tesla Powerwall certified and install Enphase, BYD and Sungrow batteries. See
              our{" "}
              <Link href="/blog/cheaper-home-batteries-program-nsw" className="font-bold" style={{ color: "var(--color-secondary)" }}>Cheaper Home Batteries explainer</Link>{" "}
              and{" "}
              <Link href="/blog/are-solar-batteries-worth-it-2026" className="font-bold" style={{ color: "var(--color-secondary)" }}>2026 battery payback analysis</Link>.
              Nowra Solar offers battery systems as part of their standard offering; specific depth of rebate
              guidance is not publicly documented.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="rounded-2xl p-6 border" style={{ borderColor: "rgba(43,76,94,0.15)" }}>
              <h3 className="font-bold mb-3" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>Choose Nowra Solar if:</h3>
              <ul className="text-gray-700 text-sm space-y-2 list-disc pl-4">
                <li>You specifically prefer a Nowra-based business with Nowra staff</li>
                <li>You&apos;re comfortable with custom-quote-only pricing</li>
                <li>You want $0-deposit finance as the primary purchase path</li>
                <li>Your install is deep in the southern Shoalhaven</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
              <h3 className="font-bold mb-3" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}>Choose Coastal Solar Co. if:</h3>
              <ul className="text-white/85 text-sm space-y-2 list-disc pl-4">
                <li>You want published pricing before you book a consult</li>
                <li>A 10-year workmanship warranty matters to you</li>
                <li>You want a 5-minute callback guarantee in writing</li>
                <li>You&apos;re considering a battery and want specialist rebate navigation</li>
                <li>You want an installer covering the full Wollongong → Ulladulla corridor</li>
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
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Get your own Shoalhaven quote</h2>
          <p className="text-white/85 mb-8">Use our free calculator, then compare against any quote you receive.</p>
          <Link href="/solar-calculator" className="btn-primary text-lg">Calculate My Savings →</Link>
        </div>
      </section>
    </>
  );
}
