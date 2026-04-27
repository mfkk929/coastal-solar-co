import type { Metadata } from "next";
import LocationPageLayout, {
  getDefaultPricingRows,
  type LocationPageData,
} from "@/components/LocationPageLayout";

const data: LocationPageData = {
  name: "Bomaderry",
  slug: "bomaderry",
  postcode: "2541",
  serviceAreas: ["North Nowra", "Cambewarra Village", "Illaroo", "Terara", "Brundee"],
  gridOperator: "Essential Energy",
  peakSunHours: "4.8",
  metaTitle: "Solar Panels Bomaderry | North Nowra Installer | Coastal Solar Co.",
  metaDescription:
    "Solar in Bomaderry & North Nowra. Suburban installs on Essential Energy. 6.6kW from $5,500. CEC-accredited, 5-min callback, 10-yr warranty.",
  heroH1: "Solar Panels for Bomaderry &amp; North Nowra Homes",
  heroSubhead:
    "Bomaderry is north of Nowra on the Essential Energy network — a commuter-friendly suburb with straightforward suburban roofs. We install here weekly as part of our Shoalhaven rounds.",
  stats: [
    { value: "35+", label: "Bomaderry / North Nowra installs" },
    { value: "74%", label: "Avg bill reduction" },
    { value: "8 days", label: "Quote to install" },
    { value: "10 yr", label: "Workmanship warranty" },
  ],
  sections: [
    {
      heading: "Bomaderry: Straightforward Suburban Solar",
      paragraphs: [
        "Bomaderry sits just north of Nowra on the Essential Energy network. The housing stock is largely post-1970s suburban — Colorbond and concrete-tile roofs, generous blocks, mostly unshaded aspects, and standard residential electrical setups. Of all the South Coast suburbs we install in, Bomaderry is probably the most textbook: fast, clean installs with minimal complications.",
        "4.8 peak sun hours a day, typical 6.6–10kW systems fitting most household profiles, payback sitting consistently in the 4.5–5.5 year range. If you're a Bomaderry homeowner with a standard roof and average household consumption, the quoting process is short and the install is quick.",
      ],
    },
    {
      heading: "Essential Energy Approval — Same as Nowra",
      paragraphs: [
        "Because Bomaderry sits on Essential Energy's network, approval timelines follow the same pattern as Nowra: 7–12 business days pre-install, and a standard commissioning inspection post-install. We handle all the paperwork; you fill in nothing. From signed contract to commissioned system is typically 8 business days in Bomaderry.",
        "Export limits on Bomaderry streets are generally standard Essential Energy residential settings — not the tight caps you see on older Dapto streets. That means a 10kW system with standard inverter settings is usually approved without issue.",
      ],
    },
    {
      heading: "Bomaderry Household Profiles",
      paragraphs: [
        "Most Bomaderry homeowners we quote are commuters — working in Nowra, Sydney (via train), or remotely from home. Daytime self-consumption varies with lifestyle: work-from-home households hit 65–75% self-consumption and see 4-year paybacks; dual-commute households with empty daytime homes run 30–40% self-consumption and the economics shift towards battery storage to keep more generation on-site.",
        "For Bomaderry homes where both adults work out of the area, we often recommend 10kW + 10kWh battery as the smart pairing. The battery banks daytime generation for evening use rather than exporting it at 5–8¢/kWh, which materially shifts the payback maths in your favour.",
      ],
    },
    {
      heading: "Scheduling &amp; Support",
      paragraphs: [
        "Bomaderry is part of our weekly Shoalhaven rounds. Our crew runs through Nowra, Bomaderry, Worrigee and Cambewarra most weeks. Typical install turnaround from signed contract is 8 business days — identical to Nowra.",
        "Post-install support: 10-year workmanship warranty, 5-minute callback guarantee during business hours, monitoring app walkthrough included on install day. Any physical follow-up is under an hour's drive from our Kiama base; most issues are resolved remotely through the monitoring platform.",
      ],
    },
  ],
  pricingNote:
    "Bomaderry pricing follows our standard Illawarra/South Coast pricing. Essential Energy's 7–12 day pre-approval window is factored into the 8-day install timeline.",
  pricingRows: getDefaultPricingRows(),
  testimonial: {
    quote:
      "Straightforward install on our Bomaderry place, three days from quote acceptance to actually getting a confirmed date. System's been running perfectly for about 18 months. Bills went from $650 a quarter to about $110. No issues, no surprises.",
    author: "Daniel H.",
    suburb: "Bomaderry",
    systemSize: "6.6kW",
    rating: 5,
  },
  faqIntro:
    "Common questions from Bomaderry, North Nowra, Cambewarra Village and Illaroo homeowners about solar, batteries, Essential Energy approvals and rebates.",
  faqLimit: 10,
  relatedArticles: [
    { slug: "complete-guide-buying-solar-nsw", title: "The Complete Guide to Buying Solar in NSW" },
    { slug: "6kw-vs-10kw-solar-illawarra", title: "6.6kW vs 10kW Solar: Which System Is Right?" },
    { slug: "solar-payback-period-illawarra", title: "How Long Does Solar Take to Pay for Itself?" },
  ],
  ctaHeading: "Ready to go solar in Bomaderry?",
  ctaSubhead:
    "Free site assessment. No deposit. Quick install, clean process, 10-year workmanship warranty. The straightforward option.",
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

export default function BomaderryPage() {
  return <LocationPageLayout data={data} />;
}
