import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Coastal Solar Co. | Wollongong's Local Solar Installer",
  description:
    "Learn about Coastal Solar Co. — a local Wollongong solar company built on honest pricing, fast installation, and genuine customer service. CEC accredited.",
  alternates: { canonical: "https://coastalsolar.com.au/about" },
  openGraph: {
    title: "About Coastal Solar Co.",
    description: "A local Wollongong solar installer built on transparency and results.",
    url: "https://coastalsolar.com.au/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
              We&apos;re Coastal Solar Co.
            </h1>
            <p className="text-xl text-white/85 leading-relaxed">
              A Wollongong-based solar company built by locals, for locals. We got into this industry because we were frustrated watching homeowners get ripped off by interstate companies with no local accountability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                Our story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Coastal Solar Co. was founded in Wollongong by a team of CEC-accredited electricians and solar designers who&apos;d spent years working for the big installers — and grew tired of the way things were done.
                </p>
                <p>
                  The 2-hour sales pitch. The &quot;we&apos;ll get back to you in 3 weeks&quot; installation timeline. The paperwork dumped on the customer. The no-show support after the install.
                </p>
                <p>
                  We built Coastal Solar Co. around a simple idea: what if a solar company just did what it said it would do, showed prices upfront, and treated customers like adults?
                </p>
                <p>
                  200+ five-star reviews later, the approach seems to be working.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years in business", value: "8+" },
                { label: "Systems installed", value: "1,200+" },
                { label: "5-star reviews", value: "200+" },
                { label: "Average payback", value: "4.2 yrs" },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl p-8 text-center" style={{ backgroundColor: "var(--color-accent)" }}>
                  <p className="text-4xl font-black mb-2" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}>
                    {s.value}
                  </p>
                  <p className="text-gray-600 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: "var(--font-montserrat)" }}>
            Our accreditations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "CEC Accredited", desc: "Clean Energy Council accredited installers and designers" },
              { title: "SolarEdge Authorised", desc: "Authorised installer for SolarEdge inverter systems" },
              { title: "Enphase Platinum", desc: "Enphase Platinum installer — highest certification tier" },
              { title: "Tesla Powerwall", desc: "Authorised Tesla Powerwall installer in NSW" },
            ].map((a, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>{a.title}</h3>
                <p className="text-white/70 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Come and talk to us.
          </h2>
          <p className="text-gray-600 text-lg mb-8">We&apos;re based in Wollongong and service the entire Illawarra and South Coast.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Contact Us</Link>
            <Link href="/solar-calculator" className="btn-outline text-lg px-8 py-4" style={{ borderColor: "var(--color-secondary)", color: "var(--color-secondary)" }}>
              Free Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
