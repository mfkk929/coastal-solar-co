import type { Metadata } from "next";
import LocationPageLayout, {
  getDefaultPricingRows,
  type LocationPageData,
} from "@/components/LocationPageLayout";

const data: LocationPageData = {
  name: "Thirroul",
  slug: "thirroul",
  postcode: "2515",
  serviceAreas: ["Austinmer", "Bulli", "Woonona", "Corrimal", "Towradgi", "Scarborough", "Clifton", "Coalcliff"],
  gridOperator: "Endeavour Energy",
  peakSunHours: "4.7",
  metaTitle: "Solar Panels Thirroul | Northern Illawarra Installer",
  metaDescription:
    "Solar in Thirroul, Austinmer & Bulli. Tile-roof expertise, escarpment shading designs, 6.6kW from $5,500. CEC-accredited, 10-yr warranty.",
  heroH1: "Solar Panels for Thirroul &amp; Northern Illawarra Homes",
  heroSubhead:
    "Thirroul, Austinmer, Bulli and the northern Illawarra have more character tile roofs than anywhere south. We install on tile, Colorbond and tin — and we know which streets the escarpment takes at 8am in June.",
  stats: [
    { value: "90+", label: "Northern Illawarra installs" },
    { value: "74%", label: "Avg bill reduction" },
    { value: "6 days", label: "Quote to install" },
    { value: "10 yr", label: "Workmanship warranty" },
  ],
  sections: [
    {
      heading: "The Northern Illawarra's Character Tile Roof Problem",
      paragraphs: [
        "Thirroul, Austinmer and Bulli have a lot of older homes with concrete or terracotta tile roofs — character houses from the early 20th century, many still in original configuration. Tile roofs are perfectly fine to install solar on, but they require installers who actually work on tile regularly. Galvanised steel tile hooks (not the aluminium ones metal-roof installers reach for by default), tile replacement protocols for the inevitable cracked tile, and waterproofing approaches that don't rely on tape-and-hope.",
        "Every Coastal Solar Co. install in the northern Illawarra includes a tile allowance — we expect to replace 2–5 tiles per install (that's normal) and we bring replacement stock on the day. Installers who don't budget for this either refuse tile jobs outright or leave homeowners with water ingress after the first heavy rain. If you're in a character home and your quote doesn't mention tile handling, ask about it explicitly.",
      ],
    },
    {
      heading: "Escarpment Shading in the Northern Illawarra",
      paragraphs: [
        "The Illawarra Escarpment runs north all the way to Stanwell Tops. Homes in western streets of Austinmer, Bulli, Thirroul and Scarborough can lose 45–90 minutes of morning sun between April and August as the cliff line shadows the eastern sky. This matters less on a well-designed system with DC optimisers or microinverters — each panel produces independently, so one shaded panel doesn't drag the whole array. It matters a lot on a cheap string-inverter quote.",
        "Homes closer to the coast or east of the Princes Highway — much of central Thirroul, Woonona, Corrimal, Towradgi — are typically unshaded. Standard string-inverter designs work fine. We decide on site: any quote that recommends DC optimisers or microinverters on a Thirroul job should have a specific shading reason behind it, not a blanket upsell.",
      ],
    },
    {
      heading: "The Northern Illawarra Solar Sweet Spot",
      paragraphs: [
        "Despite the escarpment, northern Illawarra generation is still strong — 4.7 peak sun hours a day on average, and the coastal cloud patterns favour consistent generation rather than extremes. A typical 6.6kW system in Thirroul produces 9,000–10,500 kWh/year. Homes with electric hot water, reverse-cycle air-con or EV charging find payback lands between 4 and 6 years.",
        "For homes in Scarborough, Clifton and Coalcliff — right up on the coastal cliff edge — marine-grade mounting applies. Sea spray reaches properties closer to the water here than in most of Wollongong proper. We default to marine-grade fixings on any property within 2 km of the coast, regardless of whether it was specifically quoted as such.",
      ],
    },
    {
      heading: "Scheduling in the Northern Illawarra",
      paragraphs: [
        "We run crews through the northern Illawarra at least once a week. Most Thirroul/Austinmer installs happen within 6–8 business days of contract signing. Access is straightforward for most homes, though some of the older terrace streets in Bulli and Woonona require careful crane or ladder positioning — we scope that during the site assessment rather than discover it on install day.",
        "Warranty and support — 10-year workmanship warranty and 5-minute callback during business hours — apply regardless of suburb. Post-install questions come back to our Kiama office; the install crew is local to the Illawarra.",
      ],
    },
  ],
  pricingNote:
    "Character tile roofs (common in Thirroul, Austinmer and Bulli) add no extra charge to our standard pricing — tile replacement stock and proper hooks are included. Final quote confirmed after a free on-site assessment.",
  pricingRows: getDefaultPricingRows(),
  testimonial: {
    quote:
      "Our 1920s Thirroul place has a tile roof and three of the four quotes we got either refused the job or pushed for a roof replacement before solar. Coastal Solar replaced six tiles during install (they had replacements in the van), no leaks, clean finish. Works perfectly through winter even with the morning shading.",
    author: "Elise J.",
    suburb: "Thirroul",
    systemSize: "6.6kW with SolarEdge optimisers",
    rating: 5,
  },
  faqIntro:
    "Common questions from Thirroul, Austinmer, Bulli, Woonona, Corrimal, Scarborough and northern Illawarra homeowners about solar on tile roofs, shading, rebates and install timelines.",
  faqLimit: 10,
  relatedArticles: [
    { slug: "is-solar-worth-it-wollongong-2026", title: "Is Solar Worth It in Wollongong in 2026?" },
    { slug: "questions-ask-solar-installer", title: "10 Questions to Ask a Solar Installer" },
    { slug: "solar-installation-time-nsw", title: "How Long Does Solar Installation Take in NSW?" },
  ],
  ctaHeading: "Ready to go solar in Thirroul?",
  ctaSubhead:
    "Free site assessment. No deposit. Tile-roof experience, shading analysis, and a 10-year workmanship warranty that covers water ingress — because on older homes, that's what matters.",
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

export default function ThirroulPage() {
  return <LocationPageLayout data={data} />;
}
