import type { Metadata } from "next";
import LocationPageLayout, {
  getDefaultPricingRows,
  type LocationPageData,
} from "@/components/LocationPageLayout";

const data: LocationPageData = {
  name: "Berry",
  slug: "berry",
  postcode: "2535",
  serviceAreas: ["Broughton Vale", "Back Forest", "Beaumont", "Woodhill", "Jaspers Brush", "Kangaroo Valley"],
  gridOperator: "Essential Energy",
  peakSunHours: "4.7",
  metaTitle: "Solar Panels Berry | Southern Highlands Installer | Coastal Solar Co.",
  metaDescription:
    "Solar in Berry & Kangaroo Valley. Heritage-home mounting expertise, Essential Energy approvals, 6.6kW from $5,500. CEC-accredited, 10-yr warranty.",
  heroH1: "Solar Panels for Berry &amp; Southern Highlands Homes",
  heroSubhead:
    "Berry is on Essential Energy, not Endeavour. Add heritage homes, slate-adjacent roof types and rural blocks, and you get an installer checklist most competitors skip. We install here weekly.",
  stats: [
    { value: "50+", label: "Berry-area installs" },
    { value: "74%", label: "Avg bill reduction" },
    { value: "8 days", label: "Quote to install" },
    { value: "10 yr", label: "Workmanship warranty" },
  ],
  sections: [
    {
      heading: "Berry: Heritage Homes, Essential Energy, Rural Character",
      paragraphs: [
        "Berry sits at the southern edge of the Illawarra and the northern gateway to the Shoalhaven. The town is on the Essential Energy distribution network — not Endeavour — which affects approval timelines (7–12 business days typical, vs 3–10 on Endeavour) and a few of the technical rules around export limits. We process Essential Energy paperwork every week so the extra days are baked into your install schedule, not a surprise.",
        "Beyond the grid operator, Berry has its own specific solar considerations: lots of older character homes with heritage-sensitive rooflines, more rural blocks than typical Illawarra suburbs, and a mix of roof types from Colorbond on newer sections to older tile and occasional slate in the heritage streets. We do not install on slate roofs and will tell you so upfront — no one should.",
      ],
    },
    {
      heading: "Heritage-Home Mounting Considerations",
      paragraphs: [
        "Central Berry has many homes that predate 1940 — gorgeous, but with roof structures and heritage considerations that standard solar install packages don't always anticipate. Older tile patterns require replacement stock that matches; random builder's-merchant tiles look wrong on a heritage streetscape and are disallowed in several Berry street conservation zones. We source matching tile stock through local yards before install.",
        "Structural assessment matters more on heritage homes too. Older rafter spans and batten thicknesses aren't always rated for the ~20kg/panel load without additional bracing. Every Berry heritage-home install starts with a proper structural check, not a ladder-glance. If the roof can't safely take the array, we'll tell you — and sometimes the right answer is a smaller system or a ground-mount alternative on acreage blocks.",
      ],
    },
    {
      heading: "Rural Blocks &amp; Larger Systems",
      paragraphs: [
        "Berry's surrounding area — Kangaroo Valley, Broughton Vale, Jaspers Brush, Back Forest — has a high proportion of acreage and hobby-farm properties. For these, sizing can go well above typical suburban limits. Sheds, pumps, cool rooms and sometimes commercial-scale kitchens justify 13kW, 20kW or even larger systems where the economics don't just work, they excel.",
        "For rural Berry properties considering ground-mount systems or larger roof arrays, we provide a full sizing proposal based on your actual daytime load pattern — not just a guess based on the house roof. Rural installs typically take a day longer on the install and a few more days on Essential Energy approval, but paybacks on properly-sized rural systems frequently land inside 4 years.",
      ],
    },
    {
      heading: "Install Scheduling for Berry",
      paragraphs: [
        "Berry is about 30 minutes south of our Kiama base. We run crews through weekly and most Berry installs happen within 8 business days of contract — slightly longer than pure Illawarra jobs because of Essential Energy approval timing. For rural Kangaroo Valley properties in particular, we schedule install days with weather margins because the access road is the first thing to get cut when it rains heavily.",
        "The 10-year workmanship warranty and 5-minute callback guarantee apply to every install regardless of location. We're 30 minutes away, not interstate, if something needs attention in year 8.",
      ],
    },
  ],
  pricingNote:
    "Berry and Kangaroo Valley installs factor in Essential Energy's 7–12 day approval timeline. Heritage-home and rural-property assessments are included in the free site visit — no additional charge.",
  pricingRows: getDefaultPricingRows(),
  testimonial: {
    quote:
      "1920s Berry home with a tile roof, heritage-conservation street. Two installers refused the job, one quoted and then disappeared. Coastal Solar sourced matching replacement tiles, did a structural assessment first, and put in a clean 8kW system with no visible mess on the street-facing elevation. Council was happy, we're happy.",
    author: "Helen &amp; Marcus T.",
    suburb: "Berry",
    systemSize: "8kW with Enphase microinverters",
    rating: 5,
  },
  faqIntro:
    "Common questions from Berry, Kangaroo Valley, Broughton Vale, Beaumont and Jaspers Brush homeowners about solar on heritage homes, Essential Energy approvals, rural systems and rebates.",
  faqLimit: 10,
  relatedArticles: [
    { slug: "complete-guide-buying-solar-nsw", title: "The Complete Guide to Buying Solar in NSW" },
    { slug: "questions-ask-solar-installer", title: "10 Questions to Ask a Solar Installer" },
    { slug: "solar-installation-time-nsw", title: "How Long Does Solar Installation Take in NSW?" },
  ],
  ctaHeading: "Ready to go solar in Berry?",
  ctaSubhead:
    "Free site assessment. No deposit. We know Essential Energy's process, we know heritage-home mounting, and we'll give you a proper structural check before quoting.",
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

export default function BerryPage() {
  return <LocationPageLayout data={data} />;
}
