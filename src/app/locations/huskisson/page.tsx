import type { Metadata } from "next";
import LocationPageLayout, {
  getDefaultPricingRows,
  type LocationPageData,
} from "@/components/LocationPageLayout";

const data: LocationPageData = {
  name: "Huskisson",
  slug: "huskisson",
  postcode: "2540",
  serviceAreas: ["Vincentia", "Myola", "Woollamia", "Cudmirrah", "Huskisson Beach", "Currambene"],
  gridOperator: "Essential Energy",
  peakSunHours: "4.9",
  metaTitle: "Solar Panels Huskisson | Jervis Bay Village Installer",
  metaDescription:
    "Solar in Huskisson & Jervis Bay village. Holiday-home battery installs, marine + bushfire compliant. 6.6kW from $5,500. Essential Energy, 10-yr warranty.",
  heroH1: "Solar Panels for Huskisson &amp; Jervis Bay Village Homes",
  heroSubhead:
    "Huskisson combines strong solar conditions with a mix of year-round residents and holiday homes — each needing a slightly different system design. We design for both, with dual-rated coastal + bushfire hardware as standard.",
  stats: [
    { value: "30+", label: "Huskisson-area installs" },
    { value: "4.9", label: "Peak sun hours/day" },
    { value: "10 days", label: "Quote to install" },
    { value: "10 yr", label: "Workmanship warranty" },
  ],
  sections: [
    {
      heading: "Huskisson: Mixed Residential and Holiday-Home Solar",
      paragraphs: [
        "Huskisson is a small, compact coastal village on the western side of Jervis Bay. The population is genuinely mixed — long-term residents who use their home year-round, alongside holiday homes and short-term rentals. That matters for solar because the optimal system design is different for each.",
        "For year-round homes, standard system sizing applies: 6.6–10kW covers most households, payback in 4–5 years, battery makes sense given the feed-in vs grid-price gap. For holiday homes, the equation shifts — you're not home to self-consume during the week, so a larger array without battery often makes less financial sense than a smaller array with a battery. We design differently for each case and will flag it in your quote.",
      ],
    },
    {
      heading: "Holiday-Home Specifics: Monitoring, Remote Isolation, Battery",
      paragraphs: [
        "Holiday-home solar needs features regular residential installs don't: reliable remote monitoring so you can see system status from home in Sydney or Canberra, a remotely-controlled isolator for safety during storms or fire events while you're away, and — where appropriate — battery storage that keeps essentials running during short outages at the property.",
        "A typical Huskisson holiday-home setup runs 6.6–10kW solar + 10kWh battery + cellular monitoring for about $15,000–$17,500 after rebates. It's not the cheapest option available; it is the option that actually makes sense for a holiday property where you're 2–3 hours away from the nearest power button. We build and commission these regularly.",
      ],
    },
    {
      heading: "The Dual-Rating Requirement (Same as Jervis Bay)",
      paragraphs: [
        "Huskisson sits in the same geographic and regulatory context as the rest of Jervis Bay: coastal proximity plus BAL bushfire ratings. Most Huskisson homes are BAL-12.5 to BAL-19, occasionally higher for properties in Cudmirrah and Woollamia near bushland. Mounting hardware has to meet both coastal-corrosion and ember-resistance standards.",
        "We spec dual-rated materials on every Huskisson install. The cost premium over single-standard hardware is $400–$700 depending on property size and BAL rating. It's the right materials choice for a system that needs to survive 20+ years of salt air and the occasional fire event. No installer should cut this corner on a Jervis Bay property.",
      ],
    },
    {
      heading: "Scheduling and Post-Install",
      paragraphs: [
        "Huskisson is about 75 minutes south of Kiama. Our crew runs through the Jervis Bay villages every 10 business days or so, coordinating installs to make the drive economical. From signed contract to commissioned system is typically 10 days for Huskisson — the same as Jervis Bay proper and Vincentia.",
        "Post-install support uses the same approach as for all our locations: 10-year workmanship warranty documented on your paperwork, 5-minute callback guarantee during business hours, cellular monitoring so we can diagnose 90% of issues remotely before anyone needs to drive down. For holiday-home owners, that last point is the operational win — problems get resolved while you're still in Sydney.",
      ],
    },
  ],
  pricingNote:
    "Huskisson installs include dual-rated coastal + bushfire compliant mounting. Holiday-home configurations typically add approximately $300 for cellular monitoring and a remote isolator.",
  pricingRows: getDefaultPricingRows(),
  testimonial: {
    quote:
      "Holiday place in Huskisson, empty most weekdays. We didn't want a big solar system just spilling generation back to the grid for 5¢. Coastal Solar designed a 6.6kW + 10kWh battery with cellular monitoring — system covers the fridge, pool pump and aircon when we're down, stores the rest. We can see everything from the Sydney house. Exactly right for a holiday home.",
    author: "Nicholas B.",
    suburb: "Huskisson",
    systemSize: "6.6kW + 10kWh battery",
    rating: 5,
  },
  faqIntro:
    "Common questions from Huskisson, Vincentia, Myola, Woollamia and Cudmirrah homeowners about holiday-home solar, dual-rated hardware, remote monitoring and Essential Energy approvals.",
  faqLimit: 10,
  relatedArticles: [
    { slug: "are-solar-batteries-worth-it-2026", title: "Are Solar Batteries Worth It in 2026?" },
    { slug: "cheaper-home-batteries-program-nsw", title: "The Cheaper Home Batteries Program Explained" },
    { slug: "solar-installation-time-nsw", title: "How Long Does Solar Installation Take in NSW?" },
  ],
  ctaHeading: "Ready to go solar in Huskisson?",
  ctaSubhead:
    "Free site assessment. No deposit. Remote monitoring for holiday homes, dual-rated hardware for coastal + bushfire — and a 10-year workmanship warranty that travels with the property.",
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

export default function HuskissonPage() {
  return <LocationPageLayout data={data} />;
}
