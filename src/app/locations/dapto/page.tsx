import type { Metadata } from "next";
import LocationPageLayout, {
  getDefaultPricingRows,
  type LocationPageData,
} from "@/components/LocationPageLayout";

const data: LocationPageData = {
  name: "Dapto",
  slug: "dapto",
  postcode: "2530",
  serviceAreas: ["Lake Illawarra", "Primbee", "Koonawarra", "Berkeley", "Unanderra", "Kembla Grange", "Horsley"],
  gridOperator: "Endeavour Energy",
  peakSunHours: "4.8",
  metaTitle: "Solar Panels Dapto | Lake Illawarra Installer | Coastal Solar Co.",
  metaDescription:
    "Solar in Dapto & Lake Illawarra. Most streets have 5kW export caps — batteries pay back fast. 6.6kW from $5,500. CEC-accredited, 10-yr warranty.",
  heroH1: "Solar Panels for Dapto Homes",
  heroSubhead:
    "Dapto and the Lake Illawarra catchment sit on some of the Illawarra's most saturated substations. Most streets have 5kW export caps — which is exactly why battery storage pays back faster in Dapto than almost anywhere else.",
  stats: [
    { value: "80+", label: "Dapto installs" },
    { value: "74%", label: "Avg bill reduction" },
    { value: "6 days", label: "Quote to install" },
    { value: "10 yr", label: "Workmanship warranty" },
  ],
  sections: [
    {
      heading: "The Dapto Export-Cap Problem — and the Solution",
      paragraphs: [
        "Dapto and the Lake Illawarra catchment were heavily solar-adopted in the early 2010s boom, which left many local transformers at or near their network capacity. The practical consequence: Endeavour Energy caps solar export on many Dapto, Primbee, Koonawarra and Berkeley streets at 5kW, rather than the 10kW standard elsewhere in the Illawarra. Your 10kW system can generate fine — but anything above 5kW that isn't consumed on-site gets export-clipped, meaning you lose the benefit of that generation.",
        "For most Dapto homes, this changes the optimal system design entirely. A 10kW system with a 10kWh battery pairs beautifully: the battery soaks up daytime generation that would otherwise be clipped at 5kW, then releases it through the evening peak when you'd otherwise pay 32¢/kWh to the grid. Payback for the battery alone is 6–8 years in Dapto — faster than in most Illawarra suburbs, purely because the export cap makes self-consumption more valuable.",
      ],
    },
    {
      heading: "We Check Your Substation Before We Quote",
      paragraphs: [
        "Not every Dapto street is export-capped to 5kW. Newer sections of Horsley, Kembla Grange and some parts of Unanderra have higher limits — sometimes full 10kW, occasionally more if they're on three-phase service. The only way to know for your specific address is to check with Endeavour Energy, which we do as part of every Dapto quote. You get a number in writing before you sign, not a surprise on commissioning day.",
        "If your street happens to be uncapped, we may recommend a simpler system without battery to keep the price down. If you're capped at 5kW, battery becomes the obvious play. Either way, we don't sell the same design to every home — the substation data drives the recommendation.",
      ],
    },
    {
      heading: "Dapto Solar Design: Sizing for the Real Export Ceiling",
      paragraphs: [
        "For a typical Dapto home on a 5kW-capped street, here's how the maths plays: a 10kW array generates roughly 14,000 kWh/year. At 50% self-consumption, you use 7,000 kWh directly — saving about $2,200 a year. With a battery, you can push self-consumption to 75–85%, which adds another $1,100/year in savings (what you would have exported and lost to clipping). That's the economic case for batteries in Dapto.",
        "Without a battery, the maths still works — but a 6.6kW system often pays back faster than a 10kW on capped streets because you're not over-generating into clipping. We'll sometimes recommend the smaller system specifically because of your street — a surprise for customers used to installers pushing the biggest possible system regardless of site conditions.",
      ],
    },
    {
      heading: "What This Means for Your Quote",
      paragraphs: [
        "Every Dapto quote we issue states (a) your substation export limit as confirmed by Endeavour, (b) the expected annual clipping without a battery, and (c) the estimated battery payback for your specific usage pattern. No guesswork, no spreadsheet magic that hides the cap. If you're comparing Dapto solar quotes, ask the other installers the same three questions — and see who struggles.",
        "For the rest of the install — STC rebate, NSW battery program eligibility, Endeavour Energy pre-approval, warranty terms — Dapto is straightforward. Same 10-year workmanship warranty, same 5-minute callback, same published pricing as every other suburb we cover.",
      ],
    },
  ],
  pricingNote:
    "For Dapto and Lake Illawarra homes on 5kW-capped streets, battery storage typically improves ROI significantly. We confirm your street's export limit with Endeavour before quoting — so the savings numbers we show you are real, not theoretical.",
  pricingRows: getDefaultPricingRows(),
  testimonial: {
    quote:
      "The first installer quoted us a 13kW system without mentioning our street has a 5kW export cap. Would've been clipping half our generation. Coastal Solar explained it upfront, recommended 10kW + battery instead, and the real-world savings are exactly what they predicted.",
    author: "Kate W.",
    suburb: "Koonawarra",
    systemSize: "10kW + 10kWh battery",
    rating: 5,
  },
  faqIntro:
    "Common questions from Dapto, Lake Illawarra, Primbee, Koonawarra, Berkeley and Unanderra homeowners about export caps, batteries, rebates and grid approvals.",
  faqLimit: 10,
  relatedArticles: [
    { slug: "are-solar-batteries-worth-it-2026", title: "Are Solar Batteries Worth It in 2026?" },
    { slug: "cheaper-home-batteries-program-nsw", title: "The Cheaper Home Batteries Program Explained" },
    { slug: "6kw-vs-10kw-solar-illawarra", title: "6.6kW vs 10kW Solar: Which System Is Right for an Illawarra Home?" },
  ],
  ctaHeading: "Ready to go solar in Dapto?",
  ctaSubhead:
    "Free site assessment. No deposit. We'll check your street's export cap with Endeavour before quoting so there are no surprises.",
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

export default function DaptoPage() {
  return <LocationPageLayout data={data} />;
}
