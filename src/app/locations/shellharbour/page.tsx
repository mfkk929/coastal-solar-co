import type { Metadata } from "next";
import LocationPageLayout, {
  getDefaultPricingRows,
  type LocationPageData,
} from "@/components/LocationPageLayout";

const data: LocationPageData = {
  name: "Shellharbour",
  slug: "shellharbour",
  postcode: "2529",
  serviceAreas: ["Shell Cove", "Oak Flats", "Blackbutt", "Barrack Heights", "Flinders", "Warilla", "Dunmore"],
  gridOperator: "Endeavour Energy",
  peakSunHours: "4.8",
  metaTitle: "Solar Panels Shellharbour | Local Installer | Coastal Solar Co.",
  metaDescription:
    "Solar in Shellharbour, Shell Cove & Flinders. 6.6kW from $5,500 after rebates. 3-phase advantage on newer estates — CEC-accredited, 10-yr warranty.",
  heroH1: "Solar Panels for Shellharbour Homes",
  heroSubhead:
    "Shell Cove, Flinders, Blackbutt and Oak Flats — mostly three-phase, mostly unshaded, and mostly the smoothest solar installs in the Illawarra. We run weekly crews across every Shellharbour postcode.",
  stats: [
    { value: "120+", label: "Shellharbour installs" },
    { value: "74%", label: "Avg bill reduction" },
    { value: "6 days", label: "Quote to install" },
    { value: "10 yr", label: "Workmanship warranty" },
  ],
  sections: [
    {
      heading: "Shellharbour: Newer Estates, 3-Phase Power, Bigger Systems",
      paragraphs: [
        "Shellharbour's newer suburbs — particularly Shell Cove, Flinders, Blackbutt and Dunmore — were built from the 2000s onwards with three-phase power as standard. That matters for solar. A three-phase home has higher default export limits from Endeavour Energy (typically 15–20kW instead of the 5–10kW cap on older single-phase streets), plays nicely with larger inverters, and doesn't trip the grid-reinforcement conversations that delay some older Dapto and Warrawong installs.",
        "What this means in practice: if you live in Shell Cove or Flinders and you have the roof space, a 10kW or even 13kW system is usually straightforward to approve and install. Older Shellharbour postcodes (Warilla, parts of Oak Flats, some of the original Blackbutt streets) are single-phase and behave more like Dapto — still fine, just with a lower practical export ceiling.",
      ],
    },
    {
      heading: "The Shellharbour Roof Advantage",
      paragraphs: [
        "Newer Shellharbour estates give us some of the best solar roofs in the region to work with. Clean Colorbond metal roofs with consistent pitch, generous north-facing aspects, minimal shading from neighbouring buildings, and set-back designs that mean rarely do we fight roofing-code clearances for ventilation. A 10kW install in Shell Cove typically takes our crew 5–6 hours on the roof — cleaner than almost any equivalent Wollongong job.",
        "Coastal proximity varies. Homes in Shell Cove and Blackbutt within 2 km of the ocean get marine-grade mounting by default — same standard we use in Kiama. Further inland (parts of Flinders, Dunmore, Albion Park-adjacent Shellharbour) we use standard mounting, which keeps cost down slightly without compromising life-span.",
      ],
    },
    {
      heading: "Pricing &amp; Rebates for Shellharbour",
      paragraphs: [
        "Shellharbour is Zone 3 for the federal STC scheme — same as Wollongong and Kiama. A 6.6kW install in 2026 receives approximately $2,900–$3,300 as a point-of-sale STC discount, a 10kW around $4,500–$5,000. The scheme steps down each 1 January; installing in 2026 is worth roughly $400 more than waiting a year.",
        "For battery-equipped homes, the NSW Cheaper Home Batteries Program plus the federal battery rebate combined take $2,000–$4,000 off a 10kWh battery. A growing number of our Shell Cove customers are choosing the 10kW + 10kWh package — the combination pays back faster here than in shaded inland suburbs because generation is consistently strong.",
      ],
    },
    {
      heading: "What to Ask Any Shellharbour Solar Installer",
      paragraphs: [
        "Three things we'd recommend any Shellharbour homeowner confirms in writing before signing a quote. First: is the system sized to take advantage of your phase capacity? On a three-phase home, quoting you a small single-phase-style system is leaving savings on the table. Second: does the quote spell out the STC rebate value and per-certificate price? Clear line items prevent disputes later. Third: what's the grid connection timeline for your specific street? Most Shell Cove approvals come back in 3–7 business days — some older Warilla streets take longer because of transformer loading.",
        "Every Coastal Solar Co. quote answers all three. If you're collecting comparison quotes, run them against the same three questions and see who struggles.",
      ],
    },
  ],
  pricingNote:
    "Shellharbour homes on three-phase power (Shell Cove, Flinders, Dunmore) typically qualify for larger inverters without grid reinforcement. Final quote confirmed after a free on-site assessment.",
  pricingRows: getDefaultPricingRows(),
  testimonial: {
    quote:
      "Our Shell Cove house is three-phase. The first two companies we called quoted the same 6.6kW system they'd pitch on any single-phase Dapto job. Coastal Solar actually looked at the switchboard, sized a 13kW system, and it produces more power every day than the neighbours' 10kW combined.",
    author: "James P.",
    suburb: "Shell Cove",
    systemSize: "13kW + 10kWh battery",
    rating: 5,
  },
  faqIntro:
    "Common questions from Shellharbour, Shell Cove, Oak Flats, Flinders and Warilla homeowners about solar, batteries, rebates and three-phase sizing.",
  faqLimit: 10,
  relatedArticles: [
    { slug: "6kw-vs-10kw-solar-illawarra", title: "6.6kW vs 10kW Solar: Which System Is Right for an Illawarra Home?" },
    { slug: "is-solar-worth-it-wollongong-2026", title: "Is Solar Worth It in Wollongong in 2026?" },
    { slug: "nsw-solar-rebates-2026", title: "NSW Solar Rebates 2026: Every Incentive Explained" },
  ],
  ctaHeading: "Ready to go solar in Shellharbour?",
  ctaSubhead:
    "Free site assessment. No deposit. We'll confirm your phase capacity before we quote — so the system we design actually uses your home's headroom.",
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

export default function ShellharbourPage() {
  return <LocationPageLayourm Endeavour Energy approvals before quoting and handle every form on your behalf.",
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

export default function ShellharbourPage() {
  return <LocationPageLayout data={data} />;
}
