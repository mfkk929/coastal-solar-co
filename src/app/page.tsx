import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Solar Panels Kiama, Wollongong & South Coast NSW | Coastal Solar Co.",
  description:
    "Get honest solar pricing for Kiama, Illawarra and South Coast homes. 5-minute callback guarantee. 10-year warranty. Free savings calculator. Call 0493 531 857.",
  alternates: { canonical: "https://www.coastalsolarco.com" },
  openGraph: {
    title: "Solar Panels Kiama, Wollongong & South Coast NSW | Coastal Solar Co.",
    description:
      "Get honest solar pricing for Illawarra and South Coast homes. 5-minute callback guarantee. 10-year warranty. Free savings calculator.",
    url: "https://www.coastalsolarco.com",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.coastalsolarco.com/#organization",
      name: "Coastal Solar Co.",
      alternateName: "Coastal Solar",
      url: "https://www.coastalsolarco.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.coastalsolarco.com/logo.png",
        width: 512,
        height: 512,
      },
      telephone: "+61493531857",
      email: "info@coastalsolarco.com",
      description:
        "CEC-accredited solar installer servicing Wollongong, Illawarra and the NSW South Coast. Honest pricing, 5-minute callback guarantee, 10-yr warranty.",
      foundingDate: "2021",
      slogan: "Stop overpaying for electricity. Start owning your energy.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+61493531857",
        contactType: "customer service",
        areaServed: "AU-NSW",
        availableLanguage: ["English"],
      },
      sameAs: [
        "https://www.facebook.com/coastalsolarco",
        "https://www.instagram.com/coastalsolarco",
        "https://www.google.com/maps?cid=coastalsolarco",
      ],
    },
    {
      "@type": ["LocalBusiness", "SolarEnergyContractor"],
      "@id": "https://www.coastalsolarco.com/#local",
      name: "Coastal Solar Co.",
      image: [
        "https://www.coastalsolarco.com/og-image.jpg",
        "https://www.coastalsolarco.com/logo.png",
      ],
      telephone: "+61493531857",
      email: "info@coastalsolarco.com",
      url: "https://www.coastalsolarco.com",
      priceRange: "$$",
      currenciesAccepted: "AUD",
      paymentAccepted: "Cash, Credit Card, EFT, BPAY, Finance",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kiama NSW",
        addressLocality: "Kiama",
        addressRegion: "NSW",
        postalCode: "2533",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -34.6706,
        longitude: 150.8548,
      },
      areaServed: [
        { "@type": "City", name: "Wollongong" },
        { "@type": "City", name: "Kiama" },
        { "@type": "City", name: "Shellharbour" },
        { "@type": "City", name: "Nowra" },
        { "@type": "City", name: "Ulladulla" },
        { "@type": "City", name: "Thirroul" },
        { "@type": "City", name: "Dapto" },
        { "@type": "City", name: "Albion Park" },
        { "@type": "City", name: "Gerringong" },
        { "@type": "City", name: "Berry" },
        { "@type": "City", name: "Jervis Bay" },
        { "@type": "City", name: "Huskisson" },
        { "@type": "City", name: "Bomaderry" },
        { "@type": "AdministrativeArea", name: "Illawarra" },
        { "@type": "AdministrativeArea", name: "South Coast NSW" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "217",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Meredith T." },
          reviewBody:
            "Got three quotes. Coastal Solar was the only company that showed me actual numbers upfront, not just 'call us for a price.' Installed in two days, works perfectly.",
        },
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Dave K." },
          reviewBody:
            "Called me within 3 minutes of filling in the form. Whole process from quote to install took 8 days. Genuinely impressed.",
        },
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Sandra P." },
          reviewBody:
            "After two dodgy quotes, I was nervous. These guys showed up on time, explained everything clearly, and my bill dropped from $480 to $40 per quarter.",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Solar & Battery Systems",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "6.6kW Residential Solar System",
              description:
                "Starter residential solar — 18-20 panels, 5kW inverter, suited to average Illawarra homes.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "6800",
              priceCurrency: "AUD",
              minPrice: "5500",
              maxPrice: "8500",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "10kW Solar + Battery System",
              description:
                "Most popular — 10kW solar with 10-13kWh battery. Suited to homes with EVs, pools or growing load.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "13000",
              priceCurrency: "AUD",
              minPrice: "11000",
              maxPrice: "15000",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "13kW Premium Solar + 15kWh Battery",
              description:
                "Premium 3-phase solar system with large battery. Full electrification-ready for EVs and heat pumps.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "21000",
              priceCurrency: "AUD",
              minPrice: "18000",
              maxPrice: "24000",
            },
          },
        ],
      },
      knowsAbout: [
        "Solar panel installation",
        "Battery storage (Tesla Powerwall, Enphase, BYD, Sungrow)",
        "STC rebate (Small-scale Technology Certificates)",
        "Cheaper Home Batteries Program",
        "Grid connection (Endeavour Energy, Essential Energy)",
        "Feed-in tariffs NSW",
        "Clean Energy Council accreditation standards",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.coastalsolarco.com/#website",
      url: "https://www.coastalsolarco.com",
      name: "Coastal Solar Co.",
      publisher: { "@id": "https://www.coastalsolarco.com/#organization" },
      inLanguage: "en-AU",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.coastalsolarco.com/blog?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.coastalsolarco.com/#service",
      serviceType: "Solar Panel Installation",
      provider: { "@id": "https://www.coastalsolarco.com/#organization" },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "New South Wales, Australia",
      },
      description:
        "Residential and commercial solar panel and battery installation across NSW — Wollongong, Illawarra and South Coast.",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="gradient-hero text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Stop Overpaying for Electricity.{" "}
                <span style={{ color: "var(--color-secondary)" }}>
                  Start Owning Your Energy.
                </span>
              </h1>
              <p className="text-xl text-white/85 mb-10 leading-relaxed">
                Coastal Solar Co. installs high-performance solar systems across
                Wollongong, the Illawarra and the South Coast — with honest
                pricing, a 5-minute callback guarantee, and a full walkthrough on
                the day we install.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/solar-calculator" className="btn-primary text-lg px-8 py-4">
                  Calculate My Savings
                </Link>
                <a
                  href="tel:0493531857"
                  className="btn-outline text-lg px-8 py-4"
                  style={{ borderColor: "rgba(255,255,255,0.6)", color: "white" }}
                >
                  Call 0493 531 857
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
                <span>⭐⭐⭐⭐⭐ 200+ reviews</span>
                <span>·</span>
                <span>CEC Accredited</span>
                <span>·</span>
                <span>10-Year Warranty</span>
                <span>·</span>
                <span>$0 Deposit</span>
              </div>
            </div>
            {/* Hero image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80&auto=format&fit=crop"
                  alt="Solar panels installed on a coastal home in the Illawarra"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 rounded-xl px-4 py-3 shadow-lg">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Average result</p>
                  <p className="text-2xl font-black" style={{ color: "var(--color-primary)" }}>74% bill reduction</p>
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -top-4 -right-4 rounded-xl px-4 py-3 shadow-lg text-white text-center" style={{ backgroundColor: "var(--color-secondary)" }}>
                <p className="text-2xl font-black">6 days</p>
                <p className="text-xs font-medium text-white/80">Quote → Install</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{ backgroundColor: "var(--color-accent)" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl lg:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}
          >
            What South Coast homeowners are saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "I got three quotes. Coastal Solar was the only company that showed me actual numbers upfront, not just 'call us for a price.' Installed in two days, works perfectly.",
                author: "Meredith T.",
                location: "Kiama",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&q=80&auto=format&fit=crop&crop=face",
              },
              {
                text: "They called me within 3 minutes of filling in the form. The whole process from quote to install took 8 days. Genuinely impressed.",
                author: "Dave K.",
                location: "Nowra",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&q=80&auto=format&fit=crop&crop=face",
              },
              {
                text: "After two dodgy quotes, I was nervous. These guys showed up on time, explained everything clearly, and my bill dropped from $480 to $40 per quarter.",
                author: "Sandra P.",
                location: "Shellharbour",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&q=80&auto=format&fit=crop&crop=face",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm card-hover"
              >
                <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                  </div>
                  <div>
                  <p
                    className="font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {t.author}
                  </p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&auto=format&fit=crop"
                alt="Solar panel installation team at work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}
              >
                Most solar companies make this harder than it needs to be.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You&apos;ve probably noticed: you can&apos;t get a price without
                sitting through a 2-hour sales pitch. The guy who quoted you
                isn&apos;t the person who shows up to install. The paperwork is
                your problem. And after installation — good luck getting anyone on
                the phone.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We&apos;ve heard this story hundreds of times from South Coast
                homeowners. So we built Coastal Solar Co. to do the opposite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20" style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white text-center mb-12"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Solar the way it should work.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: "Honest Pricing",
                body: "We show you price ranges before you've given us your phone number. A standard 6.6kW system in the Illawarra typically costs $5,500–$7,500 after government rebates.",
              },
              {
                icon: "⚡",
                title: "The 5-Minute Callback",
                body: "Fill in our form and we'll call you within 5 minutes during business hours — or your first maintenance visit is free.",
              },
              {
                icon: "📅",
                title: "Install in Days, Not Weeks",
                body: "From quote to install, we average 6 business days. Most competitors quote 3–6 weeks.",
              },
              {
                icon: "🎓",
                title: "The Full Walkthrough",
                body: "On installation day, your installer spends 30 minutes walking you through your new system, setting up your monitoring app, and answering every question.",
              },
              {
                icon: "📋",
                title: "We Handle the Paperwork",
                body: "STCs, grid connection, network approval — we manage it all.",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 card-hover"
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {b.title}
                </h3>
                <p className="text-white/80 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl lg:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}
          >
            From enquiry to lower bills in 4 steps.
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Use our free calculator",
                desc: "See savings in 60 seconds — no email required.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&q=80&auto=format&fit=crop",
                alt: "Using solar savings calculator on laptop",
              },
              {
                step: "2",
                title: "Get your custom quote",
                desc: "We call within 5 minutes. Real numbers, no pressure.",
                img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&q=80&auto=format&fit=crop",
                alt: "Friendly consultation call",
              },
              {
                step: "3",
                title: "We handle everything",
                desc: "Paperwork, permits, installation. All done for you.",
                img: "https://images.unsplash.com/photo-1545209463-4af15cff01a4?w=400&h=250&q=80&auto=format&fit=crop",
                alt: "Solar panel installation on residential rooftop",
              },
              {
                step: "4",
                title: "Watch your bills drop",
                desc: "Average 74% bill reduction from day one.",
                img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&q=80&auto=format&fit=crop",
                alt: "Happy homeowner checking electricity bill savings",
              },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="relative rounded-xl overflow-hidden mb-5 aspect-[16/10] shadow-sm">
                  <Image src={s.img} alt={s.alt} fill className="object-cover" />
                  <div
                    className="absolute top-3 left-3 w-9 h-9 rounded-full flex items-center justify-center text-white text-lg font-black shadow-md"
                    style={{ backgroundColor: "var(--color-secondary)" }}
                  >
                    {s.step}
                  </div>
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REBATE URGENCY */}
      <section style={{ backgroundColor: "var(--color-secondary)" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            The 2026 solar rebate is the best you&apos;ll ever get. It gets
            smaller every year.
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            The Federal Government&apos;s STC scheme gives you a point-of-sale
            discount worth $2,800–$3,800 on a standard install. It dropped from
            6 to 5 years deeming on 1 Jan 2026. Drops to 4 years in 2027 —
            another ~17% cut. Plus: Federal Battery Rebate (Cheaper Home
            Batteries Program, July 2025) gives ~30% off a battery — up to
            $3,000 savings.
          </p>
          <Link
            href="/rebates"
            className="inline-block bg-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}
          >
            Calculate my 2026 rebate →
          </Link>
        </div>
      </section>

      {/* SYSTEM OPTIONS */}
      <section style={{ backgroundColor: "var(--color-accent)" }} className="py-20">
        <div className