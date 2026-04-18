import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Solar Installation Works | Coastal Solar Co.",
  description:
    "See exactly how Coastal Solar Co. takes you from enquiry to installation. Transparent 4-step process. Average 6 business days from quote to install.",
  alternates: { canonical: "https://coastalsolarco.com/how-it-works" },
  openGraph: {
    title: "How It Works | Coastal Solar Co.",
    description: "From enquiry to lower electricity bills — our transparent 4-step solar installation process.",
    url: "https://coastalsolarco.com/how-it-works",
  },
};

const steps = [
  {
    step: "01",
    title: "Use Our Free Calculator",
    duration: "2 minutes",
    desc: "Enter your postcode, roof direction, quarterly electricity bill, and battery interest. Our calculator gives you an instant system recommendation and estimated savings — no email required.",
    details: [
      "Instant system size recommendation",
      "Estimated savings and payback period",
      "Current rebate value for your location",
      "CO2 offset calculation",
    ],
    cta: { label: "Start calculator →", href: "/solar-calculator" },
  },
  {
    step: "02",
    title: "Get Your Custom Quote",
    duration: "Within 5 minutes",
    desc: "Once you submit your details, our team calls you within 5 minutes during business hours. We ask a few follow-up questions, conduct a remote roof assessment using satellite imagery, and prepare a detailed, itemised quote.",
    details: [
      "5-minute callback guarantee",
      "Remote roof assessment via satellite",
      "Itemised quote with equipment details",
      "No obligation, no pressure",
    ],
    cta: null,
  },
  {
    step: "03",
    title: "We Handle Everything",
    duration: "Average 6 business days",
    desc: "Once you accept the quote, we take care of everything — STC paperwork, network approval, council requirements, and scheduling. You don't need to make a single phone call or fill in a single form.",
    details: [
      "STC rebate paperwork (no upfront cost)",
      "Network connection application",
      "Council DA if required",
      "Installation scheduling",
    ],
    cta: null,
  },
  {
    step: "04",
    title: "Installation + Walkthrough",
    duration: "1–2 days on-site",
    desc: "Our CEC-accredited installers arrive on time. After installation, your installer spends 30 minutes walking you through your system, showing you the monitoring app, and answering every question.",
    details: [
      "CEC-accredited installers only",
      "30-minute system walkthrough",
      "Monitoring app setup",
      "10-year workmanship warranty activated",
    ],
    cta: null,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
            From Enquiry to Lower Bills in 4 Steps
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto">
            No surprises. No pressure. Here&apos;s exactly what happens when you get solar with Coastal Solar Co.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-black"
                    style={{ backgroundColor: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}
                  >
                    {s.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                      {s.title}
                    </h2>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      {s.duration}
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">{s.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                    {s.details.map((d, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-600">
                        <span className="text-green-500 font-bold">✓</span> {d}
                      </li>
                    ))}
                  </ul>
                  {s.cta && (
                    <Link href={s.cta.href} className="btn-primary inline-block mt-2">
                      {s.cta.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Your questions answered
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { q: "How long does installation take?", a: "Most residential systems are installed in 1 day. Larger systems with batteries may take 2 days." },
              { q: "Do I need to be home during installation?", a: "Yes, someone needs to be home to provide access. Our team will confirm a start time the day before." },
              { q: "What happens if it rains?", a: "We monitor the weather and will contact you to reschedule if conditions aren't suitable for safe installation." },
              { q: "How long until my system is turned on?", a: "After installation, network energisation typically takes 2–5 business days. Your system generates power immediately but exports after energisation." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Ready to get started?</h2>
          <p className="text-xl text-white/85 mb-8">Use our free calculator to see your savings in 60 seconds.</p>
          <Link href="/solar-calculator" className="btn-primary text-lg px-8 py-4">
            Calculate My Savings →
          </Link>
        </div>
      </section>
    </>
  );
}
