import type { Metadata } from "next";
import LocationPageLayout, {
  getDefaultPricingRows,
  type LocationPageData,
} from "@/components/LocationPageLayout";

const data: LocationPageData = {
  name: "Albion Park",
  slug: "albion-park",
  postcode: "2527",
  serviceAreas: ["Calderwood", "Yellow Rock", "Dunmore", "Tongarra", "Albion Park Rail", "Tullimbar"],
  gridOperator: "Endeavour Energy",
  peakSunHours: "4.8",
  metaTitle: "Solar Panels Albion Park | Calderwood Installer",
  metaDescription:
    "Solar in Albion Park & Calderwood. Newer three-phase estates = larger systems without grid headaches. 6.6kW from $5,500. 10-yr warranty.",
  heroH1: "Solar Panels for Albion Park &amp; Calderwood Homes",
  heroSubhead:
    "Calderwood's new estates are three-phase by default — giving you a 15–20kW export ceiling instead of 5kW. Most Albion Park homes we design for are hitting 10kW+ without grid-reinforcement delays.",
  stats: [
    { value: "60+", label: "Albion Park / Calderwood installs" },
    { value: "74%", label: "Avg bill reduction" },
    { value: "6 days", label: "Quote to install" },
    { value: "10 yr", label: "Workmanship warranty" },
  ],
  sections: [
    {
      heading: "Calderwood &amp; the Three-Phase Advantage",
      paragraphs: [
        "Calderwood is one of the youngest residential estates in the Illawarra. Construction kicked off in the mid-2010s and most homes there — along with newer sections of Yellow Rock, Tullimbar and Albion Park Rail — have three-phase power as standard. For solar, this is a meaningful advantage over older single-phase Illawarra suburbs: three-phase homes face much higher default export limits from Endeavour Energy (typically 15–20kW, sometimes more) and handle larger inverters without the grid-reinforcement dance.",
        "What that means practically: the 4- and 5-bedroom family homes common in Calderwood justify — and can absorb the generation of — 10kW to 13kW systems. Payback for a properly sized Calderwood install frequently lands at 4 years, sometimes under, because we're not leaving generation clipped on the table.",
      ],
    },
    {
      heading: "Typical Calderwood / Albion Park Home Energy Profile",
      paragraphs: [
        "The homes we install for in this area tend to be large-family, multi-appliance setups: ducted reverse-cycle air-conditioning, electric hot water, pool pumps, sometimes EV charging. These loads drive up total electricity consumption (quarterly bills of $900–$1,500 are common) but also make self-consumption rates strong because much of that load runs during daylight.",
        "For a typical Calderwood home running air-con most summer afternoons, a 10kW system will hit 65–75% self-consumption — meaning most of what you generate you use directly at the 32¢/kWh grid price. That's where the real economic case lives: every kWh you self-consume saves you a full 32¢, while every kWh you export only earns 5–8¢.",
      ],
    },
    {
      heading: "Albion Park's Older Streets vs Newer Estates",
      paragraphs: [
        "Not every Albion Park home is new. The older sections of central Albion Park, around the town centre and on streets that predate the 1990s, are single-phase and behave more like Dapto or Unanderra — 5–10kW export caps, smaller practical system sizes. Still great solar candidates; just a different design conversation.",
        "We confirm your phase configuration (single vs three-phase) during the site assessment before quoting. Homes with the right metering in place can often upgrade to three-phase if needed, though at $3,000–$6,000 it's rarely worthwhile unless you're also planning EV charging or a large pool heat pump alongside solar.",
      ],
    },
    {
      heading: "Install Scheduling &amp; Support",
      paragraphs: [
        "Albion Park and Calderwood sit about halfway between Wollongong and Kiama, so our install crews pass through regularly. Typical turnaround from signed quote to install day is 6 business days — sometimes faster for Calderwood homes because access is straightforward and new-estate roofs install cleanly.",
        "Post-install support is the same across all our suburbs: 10-year workmanship warranty, 5-minute callback guarantee during business hours, system-monitoring app walkthrough included. Calderwood's newer homes rarely throw up surprises — no roof access issues, no legacy wiring, no escarpment shading to work around.",
      ],
    },
  ],
  pricingNote:
    "Most Calderwood and newer Albion Park homes are three-phase and can support 10kW+ systems without grid reinforcement. Older Albion Park streets are single-phase — still fine, just a smaller practical system size. Confirmed during the free site assessment.",
  pricingRows: getDefaultPricingRows(),
  testimonial: {
    quote:
      "Calderwood home, three-phase, two kids and an air-con habit. Coastal Solar sized a 10kW system with a 10kWh battery. Bills went from $1,400 a quarter to about $180. Had one monitoring question after 6 months and got a callback in under 5 minutes.",
    author: "Lauren B.",
    suburb: "Calderwood",
    systemSize: "10kW + 10kWh battery",
    rating: 5,
  },
  faqIntro:
    "Common questions from Albion Park, Calderwood, Yellow Rock, Tullimbar and Albion Park Rail homeowners about three-phase solar sizing, export limits, rebates and install timelines.",
  faqLimit: 10,
  relatedArticles: [
    { slug: "6kw-vs-10kw-solar-illawarra", title: "6.6kW vs 10kW Solar: Which System Is Right for an Illawarra Home?" },
    { slug: "are-solar-batteries-worth-it-2026", title: "Are Solar Batteries Worth It in 2026?" },
    { slug: "solar-payback-period-illawarra", title: "How Long Does Solar Take to Pay for Itself in the Illawarra?" },
  ],
  ctaHeading: "Ready to go solar in Albion Park?",
  ctaSubhead:
    "Free site assessment. No deposit. We confirm your phase configuration and substation capacity before quoting — so the system we design matches what your home can actually take.",
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

export default function AlbionParkPage() {
  return <LocationPageLayout data={data} />;
}
