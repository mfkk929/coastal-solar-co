import type { Metadata } from "next";
import Link from "next/link";
import ComparePageLayout, {
  type CompareRow,
  type CompareFaq,
  type CompareDeepSection,
} from "@/components/ComparePageLayout";

export const metadata: Metadata = {
  title: "Coastal Solar Co. vs SolarBlu | 2026 Illawarra Solar Comparison",
  description:
    "Honest side-by-side of Coastal Solar Co. vs SolarBlu. Warranty, pricing, callback, coverage, approach — the full detail for Illawarra homeowners in 2026.",
  alternates: { canonical: "https://www.coastalsolarco.com/compare/vs-solarblu" },
};

const rows: CompareRow[] = [
  { factor: "Years in operation", us: "8+ years under current brand, 10+ combined experience", them: "10+ years" },
  { factor: "Base location", us: "Kiama (full Illawarra + South Coast coverage)", them: "Dapto (primarily Illawarra)" },
  { factor: "Upfront pricing", us: "✅ Published ranges on /pricing", them: "❌ Quote only" },
  { factor: "Workmanship warranty", us: "10 years", them: "7 years" },
  { factor: "Panel performance warranty", us: "25 years (tier-one brands)", them: "25 years (tier-one brands)" },
  { factor: "Callback guarantee", us: "✅ 5 minutes in business hours", them: "❌ Not publicly stated" },
  { factor: "Free site assessment", us: "✅ No-obligation", them: "✅ Offered" },
  { factor: "30-minute owner walkthrough", us: "✅ Included on install day", them: "Not confirmed" },
  { factor: "Free online solar calculator", us: "✅ Instant estimate, no email", them: "❌ Not available" },
  { factor: "Battery rebate guidance", us: "✅ Full eligibility check", them: "Offered" },
  { factor: "Published blog / guides", us: "✅ 16+ local articles", them: "Limited" },
  { factor: "Coverage area", us: "Wollongong → Ulladulla", them: "Primarily Illawarra" },
];

const deepSections: CompareDeepSection[] = [
  {
    heading: "Pricing & Transparency",
    paragraphs: [
      "SolarBlu operates on a custom-quote model: you contact the showroom or submit an enquiry, they book a home visit, and pricing is provided after a site assessment. This is the traditional Australian solar sales model and it works fine — you do, however, need to invest time in the visit before you see a number.",
      <>
        Coastal Solar Co. publishes a{" "}
        <Link href="/pricing" className="font-bold" style={{ color: "var(--color-secondary)" }}>
          price range for every standard system size
        </Link>{" "}
        on our pricing page. A 6.6kW system is $5,500–$6,500, a 10kW is $7,800–$9,500, a 10kW + 10kWh battery package is $14,000–$17,000 — all after STC and battery rebates. These are the actual numbers we quote. The range exists because roof type, inverter choice, shading management (microinverters vs DC optimisers vs string) and site complexity do move pricing a few hundred dollars — but you&apos;ll land in the published range 95%+ of the time.
      </>,
      "Neither approach is inherently better. Published pricing lets you pre-qualify the budget on your own and ensures you're never surprised by a 2-hour in-home pitch designed to close you that day. Custom-quote-only lets the installer tailor a pitch to your specific situation. If you value knowing the number before the sales conversation, we're the better fit.",
    ],
  },
  {
    heading: "Warranty & Aftercare",
    paragraphs: [
      "This is where the two companies most clearly diverge. SolarBlu's publicly stated workmanship warranty is 7 years. Coastal Solar Co.'s is 10 years. Three years of additional coverage matters more than it sounds: the majority of installation-related issues (water ingress at roof penetrations, mounting kit corrosion, conduit degradation) surface between years 6 and 10, not in the first 12 months.",
      "Panel and inverter warranties — which cover actual product defects — are set by the manufacturer and are effectively identical between installers. Tier-one panels (Jinko, Trina, Longi, REC, Q CELLS) carry 25-year product warranties. Modern inverters carry 10–12 year warranties extendable to 25. Both companies install reputable brands, so this is a wash.",
      "Post-install support: Coastal Solar Co. includes a 30-minute owner walkthrough on install day, covers system monitoring setup, and manages the grid connection and STC paperwork end-to-end. We call back on support requests within the same 5-minute guarantee as initial enquiries. SolarBlu's exact post-install support model is not publicly documented but is understood to be broadly similar in scope.",
    ],
  },
  {
    heading: "Coverage & Response Time",
    paragraphs: [
      "SolarBlu is based in Dapto and primarily services the Illawarra — Wollongong, Shellharbour, Dapto, Albion Park and surrounding suburbs. They'll service further afield on request, but their scheduling density is heaviest close to home.",
      <>
        Coastal Solar Co. is based in Kiama and runs install crews across the full corridor from Wollongong down through Kiama, Gerringong, Berry, Nowra, Huskisson, Jervis Bay and Ulladulla. If you&apos;re south of the Illawarra in the{" "}
        <Link href="/locations/nowra" className="font-bold" style={{ color: "var(--color-secondary)" }}>
          Shoalhaven
        </Link>{" "}
        or further south along the South Coast, our scheduling density is a concrete advantage — we run a crew down that way most weeks.
      </>,
      "Response time is the other axis. Coastal Solar Co. publishes a 5-minute callback guarantee during business hours. SolarBlu does not publicly commit to a callback window, though a walk-in Dapto showroom naturally provides a fast-response option for customers close to it.",
    ],
  },
  {
    heading: "System Design Approach",
    paragraphs: [
      <>
        Both companies install tier-one panels and mainstream inverters and both are CEC-accredited. The design philosophy is where individual designers differ more than companies do. At Coastal Solar Co. every system is designed by our founder Mo (see{" "}
        <Link href="/about/mo" className="font-bold" style={{ color: "var(--color-secondary)" }}>
          about Mo
        </Link>
        ), who has designed 1,200+ Illawarra and South Coast installs. That means consistent design calls on shading, string architecture, and inverter selection.
      </>,
      "One specific detail worth asking either installer about: shading-management choice. If you live close to the Illawarra Escarpment (Keiraville, Mount Keira, parts of Thirroul, Mount Pleasant) and your quote uses a standard string inverter without DC optimisers or microinverters, the quote is under-engineered for your roof. Our default for shaded roofs is DC optimisers (SolarEdge) or microinverters (Enphase). Any honest installer will do the same — but check explicitly.",
    ],
  },
  {
    heading: "Reviews & Reputation",
    paragraphs: [
      "SolarBlu has a longer Google Business presence and a larger review count that reflects their decade-plus in the market. Coastal Solar Co. has 200+ five-star reviews across platforms and is growing fast. Raw review count favours the longer-established business; ratio (five-star percentage) is close between the two.",
      <>
        If review volume is your top decision criterion, SolarBlu wins on absolute numbers. If review <em>quality</em> — reading what customers specifically praise — is what you&apos;re looking at, both companies score well on install quality and post-install support, with Coastal Solar Co. additionally cited for pricing transparency and fast callbacks.
      </>,
    ],
  },
];

const faqs: CompareFaq[] = [
  {
    q: "Is SolarBlu a good solar installer in Wollongong?",
    a: "Yes — SolarBlu is one of the longest-running solar businesses in the Illawarra, with a physical Dapto showroom and a decade-plus track record. They're a legitimate local installer and a safe choice for customers who want a long-established name with a walk-in location.",
  },
  {
    q: "How does Coastal Solar Co.'s warranty compare to SolarBlu's?",
    a: "Coastal Solar Co. provides a 10-year workmanship warranty on every install. SolarBlu's publicly stated workmanship warranty is 7 years. Equipment warranties (panels, inverters) are set by the manufacturer and are effectively identical between the two — both install tier-one panel brands and mainstream inverters that carry 12–25 year manufacturer warranties.",
  },
  {
    q: "Which company has better pricing?",
    a: "Like-for-like pricing is very close between the two. The meaningful difference is transparency: Coastal Solar Co. publishes system price ranges on the /pricing page so you can see what a 6.6kW, 10kW or 10kW + battery system costs before you book a consult. SolarBlu provides pricing by custom quote only. Neither approach is 'wrong' — but one lets you pre-qualify the budget on your own.",
  },
  {
    q: "Who installs faster?",
    a: "Both companies typically install within 2–6 weeks of signing, depending on Endeavour Energy approval and panel/inverter stock. Coastal Solar Co. averages 6 business days from signed contract to install day for standard jobs with stock on hand. SolarBlu's installation timeline is not publicly published but is understood to be in the same range.",
  },
  {
    q: "Which installer covers my suburb?",
    a: "SolarBlu is primarily focused on the Illawarra — Wollongong, Dapto, Shellharbour and surrounding suburbs. Coastal Solar Co. covers the full corridor from Wollongong south to Ulladulla, including Kiama, Gerringong, Berry, Nowra, Huskisson, Jervis Bay and the Shoalhaven. If you're south of Kiama, Coastal Solar Co. is the more natural fit.",
  },
  {
    q: "Should I get quotes from both?",
    a: "For most homeowners, yes. Getting 2–3 quotes is standard practice for a $6,000–$20,000 purchase. Running our free solar calculator first gives you an independent benchmark figure, then comparing two real quotes against that benchmark quickly shows which installer is pricing fairly.",
  },
];

export default function VsSolarBluPage() {
  return (
    <ComparePageLayout
      competitor="SolarBlu"
      slug="vs-solarblu"
      h1="Coastal Solar Co. vs SolarBlu"
      subhead="Two Illawarra solar installers, compared honestly. Warranty, pricing, coverage and approach — with no spin."
      tldr="SolarBlu is one of the longest-running solar companies in the Illawarra, with a physical Dapto showroom and a strong decade-plus track record. If you want a well-established local name and you're close to Dapto, they're absolutely worth considering. Coastal Solar Co. is a newer brand but run by a team with 10+ years of combined experience, and we differ on three specific fronts: published pricing (vs quote-only), a 10-year workmanship warranty (vs their 7-year), and a 5-minute callback guarantee. We also cover a wider area — from Wollongong down to Ulladulla — which matters if you're south of Kiama. For customers who want transparency and service commitments in writing before they pick up the phone, we're the stronger fit."
      rows={rows}
      deepSections={deepSections}
      chooseThemHeading="Choose SolarBlu if:"
      chooseThemList={[
        "You're close to Dapto and value a walk-in showroom",
        "A decade-plus local track record matters most to you",
        "You're comfortable with custom-quote-only pricing",
        "A 7-year workmanship warranty is acceptable",
      ]}
      chooseUsHeading="Choose Coastal Solar Co. if:"
      chooseUsList={[
        "You want published pricing before you book a consult",
        "A 10-year workmanship warranty matters to you",
        "You're south of Kiama or in the Shoalhaven",
        "You value a 5-minute callback guarantee",
        "You want to read 16+ local guides before deciding",
      ]}
      faqs={faqs}
      ctaHeading="Compare quotes from both"
      ctaLead="Run our free calculator for an independent benchmark, then compare any quote you receive — no obligation."
    />
  );
}
