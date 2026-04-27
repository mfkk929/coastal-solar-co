import type { Metadata } from "next";
import SolarCalculator from "./SolarCalculator";

export const metadata: Metadata = {
  title: "Free Solar Savings Calculator | Coastal Solar Co.",
  description:
    "Use our free solar calculator to see how much you could save in 60 seconds. Personalised system recommendation, rebate estimate, and payback period.",
  alternates: { canonical: "https://www.coastalsolarco.com/solar-calculator" },
  openGraph: {
    title: "Free Solar Savings Calculator | Coastal Solar Co.",
    description: "Calculate your solar savings in 60 seconds. No email required.",
    url: "https://www.coastalsolarco.com/solar-calculator",
  },
};

export default function SolarCalculatorPage() {
  return (
    <>
      <section className="gradient-hero text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Free Solar Savings Calculator
          </h1>
          <p className="text-lg text-white/85 max-w-xl mx-auto">
            See your personalised system recommendation and savings in 60 seconds. No email required.
          </p>
        </div>
      </section>
      <SolarCalculator />
    </>
  );
}
