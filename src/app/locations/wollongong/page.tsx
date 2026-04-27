import type { Metadata } from "next";
import LocationPageLayout, {
  getDefaultPricingRows,
  type LocationPageData,
} from "@/components/LocationPageLayout";

const data: LocationPageData = {
  name: "Wollongong",
  slug: "wollongong",
  postcode: "2500",
  serviceAreas: [
    "Figtree",
    "Fairy Meadow",
    "Mount Ousley",
    "Balgownie",
    "Coniston",
    "Port Kembla",
    "Keiraville",
    "Mount Keira",
    "Mount Pleasant",
    "Gwynneville",
  ],
  gridOperator: "Endeavour Energy",
  peakSunHours: "4.8",
  metaTitle: "Solar Panels Wollongong | CEC-Accredited Installer",
  metaDescription:
    "Solar in Wollongong. 6.6kW from $5,500 after rebates. CEC-accredited, 5-min callback, 10-yr warranty. Over 400 Illawarra installs.",
  heroH1: "Solar Panels for Wollongong Homes",
  heroSubhead:
    "Over 400 Wollongong installs. Published pricing, 5-minute callback, 10-year workmanship warranty that actually covers the escarpment roofs most installers quote blind.",
  stats: [
    { value: "400+", label: "Wollongong installs" },
    { value: "74%", label: "Avg bill reduction" },
    { value: "6 days", label: "Quote to install" },
    { value: "10 yr", label: "Workmanship warranty" },
  ],
  sections: [
    {
      heading: "Why Wollongong is One of NSW's Best Solar Markets",
      paragraphs: [
        "Wollongong averages 4.6–4.9 peak sun hours a day year-round — comfortably ahead of Sydney's 4.3 and Melbourne's 3.6. Combine that with retail electricity prices now sitting at 30–34 cents per kilowatt-hour on the Endeavour Energy network, and the payback maths works harder here than almost anywhere on the NSW coast. A well-designed 6.6kW system on a Wollongong home typically pays for itself in 4 to 6 years and keeps saving for another two decades after that.",
        "Feed-in tariffs, meanwhile, have dropped to 5–8 cents per kWh. That 25-cent gap between what you pay for grid power and what you're paid for solar exports is the key financial driver behind every Wollongong quote we write — and the reason battery storage now makes sense for most of the homes we design for.",
      ],
    },
    {
      heading: "The Illawarra Escarpment: The One Thing Most Installers Get Wrong",
      paragraphs: [
        "Wollongong's geography creates a local design problem interstate installers routinely miss. The Illawarra Escarpment rises sharply west of the Princes Highway and casts a long morning shadow from April through August. Homes in Keiraville, Mount Keira, Mount Kembla, Mount Pleasant, Gwynneville, Balgownie and parts of Figtree West can lose 60 to 120 minutes of winter generation every morning — which on a standard string-inverter system drags the entire array's output down.",
        "On any roof with partial shading, we default to DC optimisers (SolarEdge) or microinverters (Enphase) so every panel performs independently. A cheap string-inverter quote on an escarpment roof can underperform a properly-designed system by 15–25% — year after year, for the life of the install. That's typically thousands of dollars in lost savings over a 20-year system life. If a Wollongong quote doesn't mention shading analysis or uses a plain string inverter on a western-aspect home, it's under-engineered.",
        "East of the highway — the CBD, Coniston, Fairy Meadow, Port Kembla, Warrawong, Corrimal, Towradgi, Bulli — most roofs are unshaded and standard designs work well. Our install crew covers both sides of the highway weekly, so we've seen how each suburb's roofs behave.",
      ],
    },
    {
      heading: "Endeavour Energy Approvals in Wollongong",
      paragraphs: [
        "Wollongong homes connect to the Endeavour Energy distribution network. Every grid-connected solar install needs two approvals: a pre-install connection application (returned in 3–10 business days) and a post-install commissioning inspection that releases your formal export permission. We handle every step of the paperwork end-to-end — you never file a form.",
        "One Wollongong-specific wrinkle: some older streets in Port Kembla, Warrawong and parts of Dapto sit on saturated substations with a 5kW export cap, not the 10kW that's standard elsewhere. That doesn't stop you installing a larger system — you just need a battery to soak up what would otherwise be clipped, or a smart inverter configured to throttle at the limit. We check your street's transformer capacity before we quote, so the number on the page is the number you'll actually get.",
      ],
    },
    {
      heading: "System Sizing for Wollongong Households",
      paragraphs: [
        "For most Wollongong homes, the sweet spot is between 6.6kW and 10kW. A 6.6kW system is plenty for a 2–3 person household with moderate daytime use; a 4-bedroom family home with air-conditioning, a pool pump, or an EV on the horizon usually justifies 10kW or more. Panels are cheap relative to roof penetrations and install labour, so the marginal cost of going bigger is small — we typically see 30–40% more price bought 50% more generation.",
        "If you're working from home — increasingly common across Wollongong — self-consumption rates of 65–75% are achievable, which pushes payback under 4 years. For evening-heavy loads (families with school kids, cooking and laundry after 5pm), a battery rescues the electricity you'd otherwise export for pennies and use it at the 32-cent rate later that night.",
      ],
    },
  ],
  pricingNote:
    "Published ranges for Wollongong installs. Roofs with escarpment shading (Keiraville, Mount Keira, parts of Thirroul) typically require DC optimisers or microinverters, which adds roughly $600–$900 to a standard 6.6–10kW install. Quoted on-site after a free assessment.",
  pricingRows: getDefaultPricingRows(),
  testimonial: {
    quote:
      "Three quotes, three different stories. Coastal Solar was the only company that explained why my Keiraville roof needed optimisers — the others were going to put a plain string inverter on it. Installed in two days, monitoring app works perfectly, and I can see in the data they were right about the morning shading.",
    author: "Meredith T.",
    suburb: "Keiraville",
    systemSize: "10kW + 10kWh battery",
    rating: 5,
  },
  faqIntro:
    "Common questions from Figtree, Fairy Meadow, Mount Ousley, Keiraville, Balgownie, Coniston and CBD homeowners about solar, batteries, rebates and escarpment-shaded roofs.",
  faqLimit: 12,
  relatedArticles: [
    { slug: "is-solar-worth-it-wollongong-2026", title: "Is Solar Worth It in Wollongong in 2026?" },
    { slug: "solar-panel-cost-wollongong-2026", title: "Solar Panel Cost Wollongong: Real Prices After Rebates" },
    { slug: "wollongong-solar-guide", title: "Going Solar in Wollongong: The Complete 2026 Guide" },
  ],
  ctaHeading: "Ready to go solar in Wollongong?",
  ctaSubhead:
    "Free site assessment. No deposit. No 2-hour in-home sales pitch. If our quote isn't the most detailed you receive, tell us — we'll buy you a coffee.",
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

export default function WollongongPage() {
  return <LocationPageLayout data={data} />;
}
