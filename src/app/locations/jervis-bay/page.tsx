import type { Metadata } from "next";
import LocationPageLayout, {
  getDefaultPricingRows,
  type LocationPageData,
} from "@/components/LocationPageLayout";

const data: LocationPageData = {
  name: "Jervis Bay",
  slug: "jervis-bay",
  postcode: "2540",
  serviceAreas: ["Vincentia", "Hyams Beach", "Huskisson", "Sanctuary Point", "St Georges Basin", "Tomerong", "Myola"],
  gridOperator: "Essential Energy",
  peakSunHours: "5.0",
  metaTitle: "Solar Panels Jervis Bay | Vincentia & Hyams Beach",
  metaDescription:
    "Solar in Jervis Bay, Vincentia & Hyams Beach. Dual-rated coastal + bushfire compliant installs. 6.6kW from $5,500. Essential Energy approvals, 10-yr warranty.",
  heroH1: "Solar Panels for Jervis Bay Homes",
  heroSubhead:
    "Vincentia, Hyams Beach, Sanctuary Point — the Bay's some of the best solar irradiance in NSW (5.0 peak sun hours) paired with BAL-rated bushfire zones and full-marine coastal exposure. Dual-rated gear is non-negotiable.",
  stats: [
    { value: "40+", label: "Jervis Bay installs" },
    { value: "5.0", label: "Peak sun hours/day" },
    { value: "10 days", label: "Quote to install" },
    { value: "10 yr", label: "Workmanship warranty" },
  ],
  sections: [
    {
      heading: "Jervis Bay's Solar Irradiance Is Genuinely Elite",
      paragraphs: [
        "We're not exaggerating: Jervis Bay averages around 5.0 peak sun hours a day, consistently the highest number anywhere in our service area. The combination of the bay's east-facing orientation, minimal cloud cover, and gentle coastal topography gives it solar generation numbers that embarrass most Sydney installs. A 6.6kW system in Vincentia typically generates 10,500–11,500 kWh/year — roughly 10% more than the same system in Wollongong.",
        "On payback maths alone, Jervis Bay homes are among the strongest solar candidates we see. For holiday homes (common in Hyams Beach and Vincentia), self-consumption patterns differ — less load during the week, more on weekends — but the generation number is so strong that even moderate self-consumption rates deliver fast returns.",
      ],
    },
    {
      heading: "BAL Ratings + Marine Exposure: Double Compliance",
      paragraphs: [
        "Here's the catch that ruins lazy quotes: Jervis Bay properties typically have BAL bushfire ratings (BAL-12.5 through BAL-29 most commonly, BAL-40 in bushfire-prone parts of Tomerong and St Georges Basin) AND sit within 1–2 km of salt water. Solar hardware has to meet both standards simultaneously — ember-resistant for bushfire compliance, and marine-corrosion-resistant for 20-year coastal performance.",
        "Not all installers understand this dual-rating requirement. We've replaced plenty of non-compliant mounting on Jervis Bay homes where the original installer used BAL-rated hardware that rusted out in five years, or marine-grade fittings that weren't ember-rated. Every Coastal Solar Co. install in Jervis Bay uses dual-rated materials — and we document which hardware meets which standard on the quote. Adds roughly $400–$700 to a standard install; non-negotiable for serious long-term performance.",
      ],
    },
    {
      heading: "Essential Energy on Rural South Coast Circuits",
      paragraphs: [
        "Jervis Bay sits on Essential Energy's distribution network. Pre-install approvals for standard residential are typically 7–12 business days. Some rural circuits around St Georges Basin, Tomerong and Myola have tighter export limits than town-centre Vincentia — we confirm your specific circuit capacity during the site assessment, not on install day.",
        "For holiday-home configurations where you're away from the property much of the time, we often recommend an internet-connected monitoring setup plus a remote isolator — so you can see what the system is doing from Sydney and safely shut it down if there's an event while you're away. This adds about $300 to a standard install.",
      ],
    },
    {
      heading: "Scheduling &amp; Support from Kiama",
      paragraphs: [
        "Jervis Bay is about 80 minutes south of our Kiama base. We run a crew through roughly every 10 days — so install turnaround from signed contract is typically 10 business days. For urgent Vincentia work (a holiday let needing service before the Christmas rush, for example) we'll batch around it.",
        "Post-install support is the same as for Illawarra customers: 10-year workmanship warranty, 5-minute callback guarantee during business hours. The physical drive is longer, but for monitoring and remote support — which covers 90% of post-install questions — we resolve most issues without needing a truck roll.",
      ],
    },
  ],
  pricingNote:
    "Jervis Bay installs include dual-rated coastal-and-bushfire compliant mounting as standard. BAL compliance for ratings above BAL-29 is quoted case-by-case. Holiday-home remote monitoring adds approximately $300 to the standard install.",
  pricingRows: getDefaultPricingRows(),
  testimonial: {
    quote:
      "Vincentia weekender, BAL-19, literally three streets back from the beach. Two installers quoted us gear that was either bushfire-rated or marine-rated but not both. Coastal Solar walked us through the dual-rating requirement, quoted specific hardware, and delivered. System produces ridiculous amounts of power — more than twice what our Sydney home's much-larger array manages.",
    author: "Andrew &amp; Jess M.",
    suburb: "Vincentia",
    systemSize: "10kW + 10kWh battery",
    rating: 5,
  },
  faqIntro:
    "Common questions from Jervis Bay, Vincentia, Hyams Beach, Sanctuary Point, St Georges Basin and Tomerong homeowners about BAL-rated bushfire compliance, marine-grade installs, holiday-home monitoring and rebates.",
  faqLimit: 10,
  relatedArticles: [
    { slug: "are-solar-batteries-worth-it-2026", title: "Are Solar Batteries Worth It in 2026?" },
    { slug: "complete-guide-buying-solar-nsw", title: "The Complete Guide to Buying Solar in NSW" },
    { slug: "nsw-solar-rebates-2026", title: "NSW Solar Rebates 2026: Every Incentive Explained" },
  ],
  ctaHeading: "Ready to go solar on Jervis Bay?",
  ctaSubhead:
    "Free site assessment. No deposit. Dual-rated hardware, Essential Energy approvals handled, and a 10-year workmanship warranty that actually applies to marine + bushfire conditions.",
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

export default function JervisBayPage() {
  return <LocationPageLayout data={data} />;
}
