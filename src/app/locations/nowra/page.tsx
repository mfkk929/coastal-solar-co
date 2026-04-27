import type { Metadata } from "next";
import LocationPageLayout, {
  getDefaultPricingRows,
  type LocationPageData,
} from "@/components/LocationPageLayout";

const data: LocationPageData = {
  name: "Nowra",
  slug: "nowra",
  postcode: "2541",
  serviceAreas: ["South Nowra", "North Nowra", "Worrigee", "Cambewarra", "Bomaderry", "Terara", "Nowra Hill"],
  gridOperator: "Essential Energy",
  peakSunHours: "4.9",
  metaTitle: "Solar Panels Nowra | Shoalhaven Specialist | Coastal Solar Co.",
  metaDescription:
    "Solar in Nowra & the Shoalhaven. 6.6kW from $5,500 after rebates. We handle Essential Energy approvals (different from Endeavour) — 10-yr warranty.",
  heroH1: "Solar Panels for Nowra Homes",
  heroSubhead:
    "Nowra is on Essential Energy, not Endeavour — a distinction most Illawarra-based installers forget. We run weekly crews through the Shoalhaven and know the approval rules both sides of the line.",
  stats: [
    { value: "100+", label: "Shoalhaven installs" },
    { value: "74%", label: "Avg bill reduction" },
    { value: "8 days", label: "Quote to install (Nowra)" },
    { value: "10 yr", label: "Workmanship warranty" },
  ],
  sections: [
    {
      heading: "Essential Energy vs Endeavour Energy: Why It Matters in Nowra",
      paragraphs: [
        "Here's the thing most Illawarra-based installers miss when they quote a Nowra job: Nowra is not on the Endeavour Energy network. South of Berry, you switch to Essential Energy's distribution network — a different organisation with a different approval process, different export-limit rules and different paperwork timelines. Installers who quote all-of-NSW at the Endeavour defaults typically hit surprises in the final week before install.",
        "Essential Energy pre-install approvals typically take 7–12 business days for a straightforward residential connection — slightly slower than Endeavour's 3–10. The commissioning inspection after install follows a similar protocol. None of this is difficult; it just has to be done correctly. We process Essential Energy paperwork every week so there are no surprises — we bake the extra few days into your install schedule upfront.",
      ],
    },
    {
      heading: "Nowra's Solar Advantage: Space, Sun, and Rural Blocks",
      paragraphs: [
        "Nowra enjoys 4.9 peak sun hours a day — marginally better than Wollongong, comfortably ahead of Sydney. Most Nowra residential roofs face north or north-east and are minimally shaded. For rural blocks in Worrigee, Cambewarra and Terara, roof or ground-mount options open up systems well beyond the typical 10kW ceiling — we've installed 13kW and 20kW systems on hobby farms that pay back in under 5 years because of high daytime load (pumps, sheds, air-con).",
        "For standard suburban Nowra homes (South Nowra, North Nowra, Bomaderry), a 6.6–10kW system covers most household needs with quick paybacks. If you're on a rural block, tell us at the quoting stage — we'll size for your actual load, not the typical suburban assumption.",
      ],
    },
    {
      heading: "Which Shoalhaven Suburbs We Cover from Nowra",
      paragraphs: [
        "Nowra is our Shoalhaven hub. From here we install weekly through South Nowra, North Nowra, Bomaderry, Worrigee, Cambewarra, Terara, Nowra Hill, Berry, Gerringong to the north, and Huskisson, Vincentia and Jervis Bay to the east. If you're further south (Ulladulla, Mollymook), we still service you — just expect an extra day or two on scheduling while we batch jobs.",
        "For Shoalhaven customers specifically, being based in Kiama (not Sydney or Wollongong) means our install crew doesn't drive past you back to a northern depot at 5pm. Most of our techs live in the Shoalhaven itself.",
      ],
    },
    {
      heading: "Rebates for Nowra Homeowners",
      paragraphs: [
        "Nowra is Zone 3 for the federal STC scheme, same as the Illawarra — so rebate values are identical. A 6.6kW install in 2026 receives approximately $2,900–$3,300 as a point-of-sale STC discount; a 10kW, around $4,500–$5,000. The scheme reduces each 1 January.",
        "For battery storage, the NSW Cheaper Home Batteries Program plus the federal battery rebate together knock $2,000–$4,000 off a 10kWh battery. Eligibility is income-assessed; we check during the quote. For Nowra homes with rural blocks or occasional outages, batteries do double duty — payback plus backup power during short grid interruptions.",
      ],
    },
  ],
  pricingNote:
    "Nowra install timelines run a couple of days longer than Illawarra installs because Essential Energy pre-approval typically takes 7–12 business days (vs Endeavour's 3–10). Pricing is identical to our Illawarra pricing.",
  pricingRows: getDefaultPricingRows(),
  testimonial: {
    quote:
      "Had two quotes from Illawarra installers that totally missed that we're on Essential Energy. Coastal Solar walked us through the difference on the first call, adjusted the timeline, and delivered exactly when they said they would. 10kW system on a rural block in Cambewarra — we're basically off-grid during daylight hours.",
    author: "Rob M.",
    suburb: "Cambewarra",
    systemSize: "10kW + 15kWh battery",
    rating: 5,
  },
  faqIntro:
    "Common questions from Nowra, South Nowra, North Nowra, Bomaderry, Worrigee and Cambewarra homeowners about solar, batteries, Essential Energy approvals and rebates.",
  faqLimit: 10,
  relatedArticles: [
    { slug: "complete-guide-buying-solar-nsw", title: "The Complete Guide to Buying Solar in NSW" },
    { slug: "solar-installation-time-nsw", title: "How Long Does Solar Installation Take in NSW?" },
    { slug: "are-solar-batteries-worth-it-2026", title: "Are Solar Batteries Worth It in 2026?" },
  ],
  ctaHeading: "Ready to go solar in the Shoalhaven?",
  ctaSubhead:
    "Free site assessment. No deposit. We handle the Essential Energy paperwork — you never see a form.",
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

export default function NowraPage() {
  return <LocationPageLayout data={data} />;
}
