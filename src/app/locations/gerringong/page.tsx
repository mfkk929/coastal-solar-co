import type { Metadata } from "next";
import LocationPageLayout, {
  getDefaultPricingRows,
  type LocationPageData,
} from "@/components/LocationPageLayout";

const data: LocationPageData = {
  name: "Gerringong",
  slug: "gerringong",
  postcode: "2534",
  serviceAreas: ["Gerroa", "Werri Beach", "Broughton Village", "Rose Valley", "Foxground"],
  gridOperator: "Endeavour Energy",
  peakSunHours: "4.9",
  metaTitle: "Solar Panels Gerringong | Kiama Coastal Installer | Coastal Solar Co.",
  metaDescription:
    "Solar in Gerringong & Gerroa. Some of the best unshaded coastal roofs in NSW. 6.6kW from $5,500. Marine-grade mounting, 10-yr warranty.",
  heroH1: "Solar Panels for Gerringong &amp; Gerroa Homes",
  heroSubhead:
    "Gerringong has some of the best unshaded coastal roofs in NSW — and our install crew is 10 minutes up the road in Kiama. Marine-grade mounting as standard. Fast paybacks, minimal fuss.",
  stats: [
    { value: "60+", label: "Gerringong / Gerroa installs" },
    { value: "4.1 yr", label: "Avg payback" },
    { value: "6 days", label: "Quote to install" },
    { value: "10 yr", label: "Workmanship warranty" },
  ],
  sections: [
    {
      heading: "Gerringong's Unmatched Solar Conditions",
      paragraphs: [
        "Gerringong sits on rolling coastal hinterland with some of the cleanest, most unshaded residential roofs in the state. 4.9 peak sun hours a day, minimal tree canopy on typical blocks, generous north-facing aspects, and steady coastal winds that keep summer panel temperatures manageable. The result: our Gerringong installs average 4.1-year paybacks — second only to Kiama proper in our service area.",
        "For rural-leaning blocks in Rose Valley, Foxground and the hinterland behind Gerroa, sizing can go well above typical suburban limits. We've installed 10–13kW systems on hobby farms where the shed, pumps and kitchen alone justify bigger generation. If you have the roof space and the daytime load, Gerringong rarely under-delivers.",
      ],
    },
    {
      heading: "Coastal Exposure &amp; Mounting Specs",
      paragraphs: [
        "Gerringong, Gerroa and Werri Beach are all within 2–3 km of the ocean. Salt-air exposure is real and cumulative — standard aluminium mounting hardware corrodes measurably faster here than in inland Illawarra. Every Coastal Solar Co. install in Gerringong uses marine-grade stainless fasteners, anodised rail extrusions, and coastal-rated sealants. Same standard as Kiama, same price.",
        "Gerroa specifically has a few streets close to the Werri Lagoon and Seven Mile Beach where onshore winds deposit salt nearly year-round. We sometimes specify upgraded fixings (316-grade stainless rather than 304-grade) for those properties — adds roughly $100 to the bill, doubles the expected hardware life-span.",
      ],
    },
    {
      heading: "Scheduling from Kiama",
      paragraphs: [
        "Gerringong is 10 minutes south of our Kiama base. That translates to faster scheduling, faster callbacks, and a crew that knows the local roads well enough to navigate a narrow Rose Valley driveway without measuring twice. Most Gerringong installs happen within 5–7 business days of signed contract.",
        "Post-install service is the same as for Kiama customers: 10-year workmanship warranty, 5-minute callback during business hours, and a team who lives where you live. If something goes wrong in year 8, we're still around.",
      ],
    },
    {
      heading: "Gerringong Rebates &amp; Pricing",
      paragraphs: [
        "Gerringong is Zone 3 for the federal STC scheme, same as the rest of the Illawarra. A 6.6kW install receives approximately $2,900–$3,300 as a point-of-sale STC discount in 2026; a 10kW, around $4,500–$5,000. The rebate steps down each 1 January.",
        "For battery storage, the NSW Cheaper Home Batteries Program plus the federal battery rebate combine to take $2,000–$4,000 off a 10kWh battery. With feed-in tariffs at 5–8¢/kWh and grid electricity at 32¢/kWh, battery payback in Gerringong sits at 7–9 years for households with moderate evening load.",
      ],
    },
  ],
  pricingNote:
    "Gerringong pricing includes marine-grade mounting as standard. Rural blocks in Rose Valley or Foxground with larger generation potential can be quoted for 13kW+ systems — confirmed after a free on-site assessment.",
  pricingRows: getDefaultPricingRows(),
  testimonial: {
    quote:
      "Rural block outside Gerringong, lots of roof space, no trees. Coastal Solar suggested 13kW where everyone else quoted 6.6kW. Three summers later, that system covers our entire electricity bill plus pays us about $300 a quarter in export credits. Best purchase we've made on this property.",
    author: "Peter H.",
    suburb: "Rose Valley",
    systemSize: "13kW ground-mount",
    rating: 5,
  },
  faqIntro:
    "Common questions from Gerringong, Gerroa, Werri Beach, Broughton Village and Rose Valley homeowners about solar, batteries, rural systems and rebates.",
  faqLimit: 10,
  relatedArticles: [
    { slug: "solar-payback-period-illawarra", title: "How Long Does Solar Take to Pay for Itself in the Illawarra?" },
    { slug: "6kw-vs-10kw-solar-illawarra", title: "6.6kW vs 10kW Solar: Which System Is Right for an Illawarra Home?" },
    { slug: "nsw-solar-rebates-2026", title: "NSW Solar Rebates 2026: Every Incentive Explained" },
  ],
  ctaHeading: "Ready to go solar in Gerringong?",
  ctaSubhead:
    "Free site assessment. No deposit. Our crew is 10 minutes away in Kiama — so the install experience is as local as it gets.",
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

export default function GerringongPage() {
  return <LocationPageLayout data={data} />;
}
