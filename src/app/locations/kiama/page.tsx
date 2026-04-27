import type { Metadata } from "next";
import LocationPageLayout, {
  getDefaultPricingRows,
  type LocationPageData,
} from "@/components/LocationPageLayout";

const data: LocationPageData = {
  name: "Kiama",
  slug: "kiama",
  postcode: "2533",
  serviceAreas: ["Kiama Downs", "Minnamurra", "Bombo", "Kiama Heights", "Jamberoo", "Gerringong", "Gerroa"],
  gridOperator: "Endeavour Energy",
  peakSunHours: "4.9",
  metaTitle: "Solar Panels Kiama | Local CEC-Accredited Installer | Coastal Solar Co.",
  metaDescription:
    "Solar in Kiama. 6.6kW from $5,500 after rebates. Your Kiama-based installer — marine-grade mounting, 5-min callback, 10-yr warranty.",
  heroH1: "Solar Panels for Kiama Homes",
  heroSubhead:
    "We're based in Kiama. Over 150 local installs from Minnamurra to Gerringong — with marine-grade mounting as standard because sea air is non-negotiable on the south coast.",
  stats: [
    { value: "150+", label: "Kiama installs" },
    { value: "3.9 yr", label: "Avg payback (best in region)" },
    { value: "6 days", label: "Quote to install" },
    { value: "10 yr", label: "Workmanship warranty" },
  ],
  sections: [
    {
      heading: "Kiama: Our Home Town, and One of the Best Solar Locations in NSW",
      paragraphs: [
        "Kiama's coastal hinterland position gives it some of the strongest solar conditions in the state. We see 4.9 peak sun hours a day on average — slightly better than Wollongong, meaningfully better than Sydney. Minimal shading on most blocks, generous north-facing roof orientations across Kiama Downs, Bombo, Minnamurra and Jamberoo, and steady coastal winds that keep panel temperatures just low enough to sidestep the worst of summer efficiency loss.",
        "The result: our Kiama installs average a 3.9-year payback — the fastest of any suburb we service across the Illawarra and South Coast. If you're in Kiama and your roof faces anything vaguely northerly, the financial case for going solar is essentially unarguable.",
      ],
    },
    {
      heading: "Sea-Air Corrosion: Why Kiama Roofs Need Marine-Grade Mounting",
      paragraphs: [
        "Coastal Kiama homes sit within 2–3 km of the ocean. That means constant salt-air exposure, which — over a 20-year system life — eats standard aluminium and galvanised steel mounting hardware. We've replaced mounting kits on Kiama roofs where non-marine-grade bolts corroded through within 5–7 years. Not the panels; the mounts holding them.",
        "Every Coastal Solar Co. install in Kiama uses marine-grade stainless fixings, anodised rail extrusions, and sealant rated for coastal exposure. It adds roughly $200 to the bill and it's non-negotiable. If a quote you receive doesn't specify marine-grade mounting, ask explicitly — and if you don't get a clear answer, walk away. It's the single biggest mistake interstate installers make when quoting south-coast jobs.",
      ],
    },
    {
      heading: "Which Kiama Suburbs We've Worked In",
      paragraphs: [
        "We've installed systems across the full Kiama LGA: Kiama CBD, Kiama Heights, Kiama Downs, Minnamurra, Bombo, Jamberoo, Werri Beach, and down into Gerringong and Gerroa. Roof types range from Colorbond metal on newer estates (quick, clean installs) to concrete tile on older Kiama Downs streets (slightly more complex, still straightforward) to the occasional heritage slate — which we do not install on and will tell you so upfront.",
        "Because we're based here, scheduling is tight: most Kiama installs happen within 6 business days of signed contract. Our crew lives in the Illawarra, so call-outs for post-install questions don't involve anyone driving up from Sydney.",
      ],
    },
    {
      heading: "Rebates for Kiama Homeowners",
      paragraphs: [
        "Kiama sits in Zone 3 for the federal STC scheme, so a 6.6kW install in 2026 generates approximately 85 Small-scale Technology Certificates worth $2,900–$3,300 as an upfront discount on the install. The rebate steps down each 1 January — so installing in 2026 is worth roughly $400 more than waiting until 2027.",
        "For battery storage, the NSW Cheaper Home Batteries Program combined with the federal battery rebate can knock $2,000–$4,000 off a 10kWh battery added to your solar system. Eligibility depends on income and property type — we check your status during the quote. Most Kiama customers adding a battery now pay $5,000–$6,500 for a 10kWh setup, which pays back in 7–9 years at current electricity rates.",
      ],
    },
  ],
  pricingNote:
    "Kiama pricing includes marine-grade mounting as standard (no extra charge vs. our metro pricing elsewhere). Final quote confirmed after a free on-site assessment.",
  pricingRows: getDefaultPricingRows(),
  testimonial: {
    quote:
      "We compared four quotes. Coastal Solar was the only one that even mentioned salt-air corrosion — the others quoted standard mounting hardware that would have been rusted through in a decade. System's been flawless for 14 months, and when we had a monitoring question at 8pm on a Sunday, Mo called us back in 4 minutes.",
    author: "David & Anna K.",
    suburb: "Kiama Downs",
    systemSize: "10kW + 10kWh battery",
    rating: 5,
  },
  faqIntro:
    "Common questions from Kiama, Kiama Downs, Minnamurra, Bombo, Jamberoo and Gerringong homeowners about solar, batteries, sea-air corrosion and rebates.",
  faqLimit: 10,
  relatedArticles: [
    { slug: "case-study-kiama-78-percent", title: "Case Study: How a Kiama Family Cut Their Power Bill by 78%" },
    { slug: "solar-payback-period-illawarra", title: "How Long Does Solar Take to Pay for Itself in the Illawarra?" },
    { slug: "nsw-solar-rebates-2026", title: "NSW Solar Rebates 2026: Every Incentive Explained" },
  ],
  ctaHeading: "Kiama locals installing for Kiama locals",
  ctaSubhead:
    "Free site assessment. No deposit. We'll show you the same quote format we'd give a neighbour — because half the time we literally are.",
};

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: `https://www.coastalsolarco.com/locations/${data.slug}` },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `https://www.coastalsolarco.com/locations/${data.slug}`,
  },
};

export default function KiamaPage() {
  return <LocationPageLayout data={data} />;
}
