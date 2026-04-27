import type { Metadata } from "next";
import LocationPageLayout, {
  getDefaultPricingRows,
  type LocationPageData,
} from "@/components/LocationPageLayout";

const data: LocationPageData = {
  name: "Ulladulla",
  slug: "ulladulla",
  postcode: "2539",
  serviceAreas: ["Mollymook", "Narrawallee", "Lake Tabourie", "Milton", "Burrill Lake", "Bawley Point"],
  gridOperator: "Essential Energy",
  peakSunHours: "4.9",
  metaTitle: "Solar Panels Ulladulla | South Coast Installer",
  metaDescription:
    "Solar in Ulladulla, Mollymook & Milton. Bushfire-zone (BAL-rated) compliant installs, Essential Energy approvals. 6.6kW from $5,500. 10-yr warranty.",
  heroH1: "Solar Panels for Ulladulla &amp; South Coast Homes",
  heroSubhead:
    "Ulladulla and the lower South Coast sit in bushfire zones with real BAL ratings attached. We install BAL-compliant systems every week — a level of detail most Illawarra-based installers quote around rather than address.",
  stats: [
    { value: "45+", label: "Ulladulla-area installs" },
    { value: "74%", label: "Avg bill reduction" },
    { value: "10 days", label: "Quote to install" },
    { value: "10 yr", label: "Workmanship warranty" },
  ],
  sections: [
    {
      heading: "Bushfire Attack Level (BAL) Ratings &amp; Your Solar Install",
      paragraphs: [
        "If you live in Ulladulla, Mollymook, Narrawallee, Lake Tabourie, Milton or Bawley Point, your property likely has a formal Bushfire Attack Level (BAL) rating — BAL-12.5, BAL-19, BAL-29, BAL-40 or the very rare BAL-FZ (flame zone). This rating is set during development approval and governs what materials and construction standards apply to external elements of your home, including solar mounting, cabling and isolator boxes.",
        "BAL-rated properties require specific compliance on solar installs: ember-resistant mounting hardware, fire-rated cable conduits, sealed isolator enclosures, and sometimes distance-from-structure considerations for roof-mounted arrays. BAL-40 and above triggers extra engineering overhead, and BAL-FZ is complex enough that we assess case-by-case. We charge no extra labour for BAL compliance up to BAL-29 — but we do charge for BAL-compliant materials, which typically adds $300–$600 to a 6.6kW install on BAL-29 rated properties.",
      ],
    },
    {
      heading: "Essential Energy Approvals on the South Coast",
      paragraphs: [
        "Ulladulla and the entire lower South Coast are on the Essential Energy distribution network. Pre-install approvals take 7–12 business days typically, slightly longer than Endeavour Energy's 3–10 in the Illawarra. We batch our Ulladulla applications weekly to keep the timeline consistent, and we have established working relationships with Essential Energy's regional office in Nowra.",
        "One Ulladulla-specific note: Essential Energy's rural circuits south of Milton have tighter export limits than metro Illawarra streets. We confirm your circuit's capacity during the site assessment so the system we design won't fight an unexpected export cap post-install.",
      ],
    },
    {
      heading: "Coastal Exposure + Bushfire = Specific Design Requirements",
      paragraphs: [
        "Ulladulla, Mollymook and Narrawallee are coastal — most properties within 1–3 km of the ocean. That means marine-grade mounting (stainless steel fasteners, anodised rail, coastal sealants) is standard on every install. The challenge is combining coastal corrosion resistance with bushfire ember resistance — not all coastal fixings are BAL-rated, and not all BAL-rated fixings handle marine air. We use dual-rated materials that meet both standards.",
        "This dual-rating is a cost-and-sourcing challenge not all installers take seriously. If a quote you receive doesn't spell out both coastal and BAL compliance as separate line items, ask why. For most Ulladulla homes, both matter.",
      ],
    },
    {
      heading: "Scheduling for Ulladulla &amp; Lower South Coast",
      paragraphs: [
        "Ulladulla is about 90 minutes south of our Kiama base. We run a crew through the lower South Coast roughly every 10 days — so typical install turnaround from signed contract is 10 business days, a few days longer than Illawarra jobs. For Bawley Point, Burrill Lake and further south, we batch to make the drive economical.",
        "For post-install support, the 10-year workmanship warranty and 5-minute callback guarantee apply. Anything physical we need to attend to (a loose connection, monitoring fault, etc.) is a 90-minute drive — still local, not interstate.",
      ],
    },
  ],
  pricingNote:
    "Ulladulla installs include coastal-grade mounting as standard. BAL compliance materials (BAL-12.5 through BAL-29) typically add $300–$600 to the install; BAL-40 and above is assessed case-by-case. Confirmed during the free site assessment.",
  pricingRows: getDefaultPricingRows(),
  testimonial: {
    quote:
      "Mollymook, BAL-29 property, two kilometres from the beach. Four quotes — three of them either dodged the BAL question or quoted non-compliant hardware. Coastal Solar understood both the bushfire and marine requirements from the first call and delivered exactly what they said. System's been flawless through one summer already.",
    author: "Susan R.",
    suburb: "Mollymook",
    systemSize: "10kW BAL-29 compliant",
    rating: 5,
  },
  faqIntro:
    "Common questions from Ulladulla, Mollymook, Narrawallee, Milton, Lake Tabourie and Bawley Point homeowners about solar on bushfire-rated properties, Essential Energy approvals, coastal compliance and rebates.",
  faqLimit: 10,
  relatedArticles: [
    { slug: "complete-guide-buying-solar-nsw", title: "The Complete Guide to Buying Solar in NSW" },
    { slug: "solar-installation-time-nsw", title: "How Long Does Solar Installation Take in NSW?" },
    { slug: "nsw-solar-rebates-2026", title: "NSW Solar Rebates 2026: Every Incentive Explained" },
  ],
  ctaHeading: "Ready to go solar on the lower South Coast?",
  ctaSubhead:
    "Free site assessment. No deposit. We handle BAL compliance, Essential Energy paperwork, and marine-grade mounting — all the things that matter south of Milton.",
};

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: { canonical: `https://www.coastalsolarco.com/locations/${data.slug}` },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `https://www.coastalsolarco.com/locations/${data.slug}`,
  },
};

export default function UlladullaPage() {
  return <LocationPageLayout data={data} />;
}
