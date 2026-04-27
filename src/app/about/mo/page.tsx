import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Mo | CEC-Accredited Solar Designer | Coastal Solar Co.",
  description:
    "Meet Mo — Coastal Solar Co.'s founder and CEC-accredited solar designer. 1,200+ installs across the Illawarra & South Coast. The person behind every honest quote.",
  alternates: { canonical: "https://www.coastalsolarco.com/about/mo" },
  openGraph: {
    title: "About Mo | CEC-Accredited Solar Designer | Coastal Solar Co.",
    description:
      "Founder of Coastal Solar Co. and the CEC-accredited designer behind 1,200+ Illawarra installs.",
    url: "https://www.coastalsolarco.com/about/mo",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mo",
  jobTitle: "CEC-Accredited Solar Designer & Founder",
  url: "https://www.coastalsolarco.com/about/mo",
  image: "https://www.coastalsolarco.com/og-image.jpg",
  worksFor: {
    "@type": "Organization",
    name: "Coastal Solar Co.",
    url: "https://www.coastalsolarco.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kiama",
    addressRegion: "NSW",
    postalCode: "2533",
    addressCountry: "AU",
  },
  knowsAbout: [
    "Solar PV design",
    "Battery storage",
    "STC rebate scheme",
    "NSW Cheaper Home Batteries Program",
    "Endeavour Energy grid connection",
    "Essential Energy grid connection",
    "Residential solar installation",
    "CEC accreditation standards",
  ],
  sameAs: [
    "https://www.linkedin.com/company/coastal-solar-co",
    "https://www.facebook.com/coastalsolarco",
    "https://www.instagram.com/coastalsolarco",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.coastalsolarco.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.coastalsolarco.com/about" },
    { "@type": "ListItem", position: 3, name: "Mo", item: "https://www.coastalsolarco.com/about/mo" },
  ],
};

const credentials = [
  { label: "CEC Accredited Designer", detail: "Clean Energy Council-accredited for both grid-connected PV design and installation — the required standard for all STC-rebate-eligible systems in Australia." },
  { label: "CEC Accredited Installer", detail: "Holds active CEC installer accreditation covering rooftop solar and grid-connect battery storage installations." },
  { label: "SolarEdge Authorised", detail: "Certified installer for SolarEdge DC-optimised inverter systems, the go-to for roofs with partial shading or complex panel layouts." },
  { label: "Enphase Platinum", detail: "Top-tier Enphase microinverter certification — the highest partner level for residential microinverter deployments." },
  { label: "Tesla Powerwall Certified", detail: "Authorised Tesla Powerwall installer across NSW, including integration with existing and new solar PV systems." },
  { label: "Licensed Electrician (NSW)", detail: "Fully licensed and insured NSW electrical contractor — all grid-connection work performed in-house, not subcontracted." },
];

const stats = [
  { label: "Years in solar", value: "8+" },
  { label: "Systems designed & installed", value: "1,200+" },
  { label: "5-star reviews", value: "200+" },
  { label: "Average payback delivered", value: "4.2 yrs" },
];

export default function AboutMoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link href="/" className="hover:text-amber-600">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/about" className="hover:text-amber-600">About</Link></li>
            <li aria-hidden="true">›</li>
            <li className="font-medium" style={{ color: "var(--color-primary)" }}>Mo</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/70 text-sm font-bold uppercase tracking-wide mb-3">Meet the designer</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
            Mo &mdash; CEC-Accredited Solar Designer, Coastal Solar Co.
          </h1>
          <p className="text-xl text-white/85 leading-relaxed max-w-2xl">
            I&apos;m the person who designs every system we install. If you&apos;ve spoken to us on the phone, read a guide on this site, or got a quote — that came through me.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                I started Coastal Solar Co. in Kiama after nearly a decade installing solar for national
                brands. The reason was simple: I was sick of watching homeowners sign $15,000 systems with
                2-hour sales pitches, vague quotes, and install teams they never met until the day panels
                landed on their roof.
              </p>
              <p>
                The Illawarra and South Coast deserve better. These are small towns — Kiama, Wollongong,
                Shellharbour, Nowra, Berry, Ulladulla. People talk to each other. A dodgy install here
                gets remembered for a decade. A good one brings in the next three neighbours.
              </p>
              <p>
                Coastal Solar Co. was built on that principle. I design every system personally, walk
                every roof before we quote, and stand behind the install with a 10-year workmanship
                warranty — longer than most of my competitors. I publish prices on the pricing page
                because I believe you should know what something costs before you pick up the phone.
              </p>
              <p>
                Over the past 8 years I&apos;ve designed and installed more than 1,200 systems across the
                Illawarra and South Coast, from 6.6kW starter setups in Wollongong townhouses to 20kW
                farm systems in the Shoalhaven. I know which suburbs the escarpment shades before 9am. I
                know which Endeavour Energy substations are saturated and which will approve your grid
                connection in 48 hours. I know which panels survive a South Coast summer and which
                delaminate within three years.
              </p>
              <p>
                If you want to talk about a specific roof, a specific bill, or a specific quote — that&apos;s
                what I&apos;m here for.
              </p>
            </div>

            <aside className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="rounded-2xl p-6 text-center" style={{ backgroundColor: "var(--color-accent)" }}>
                  <p className="text-3xl font-black mb-1" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}>
                    {s.value}
                  </p>
                  <p className="text-gray-600 text-xs">{s.label}</p>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Accreditations &amp; credentials
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>
                  {c.label}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-8">
            CEC accreditation numbers are printed on every quote and every post-install commissioning
            certificate. We&apos;re happy to verify them with you directly or on the{" "}
            <a
              href="https://www.cleanenergycouncil.org.au/"
              target="_blank"
              rel="noreferrer"
              className="underline"
              style={{ color: "var(--color-secondary)" }}
            >
              Clean Energy Council website
            </a>
            .
          </p>
        </div>
      </section>

      {/* What I write about */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            What I write about on this site
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Every guide on the Coastal Solar Co. blog is written by me — not outsourced, not AI-generated
            from a prompt. I pull real numbers from jobs I&apos;ve personally quoted, designed or installed
            across the Illawarra and South Coast, and I update articles when the rebates change.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            My goal with the blog is simple: give NSW homeowners the same information I&apos;d give a mate
            over a beer — what things actually cost, what&apos;s worth it, what to watch out for, and when
            to walk away from a quote. If you catch me getting it wrong, email me and I&apos;ll fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/blog" className="btn-primary text-lg px-8 py-4">
              Read the solar guides →
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4" style={{ borderColor: "var(--color-secondary)", color: "var(--color-secondary)" }}>
              Talk to me directly
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
