import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Coastal Solar Co.",
  description: "Coastal Solar Co. terms and conditions for solar installation services across Illawarra and South Coast NSW.",
  alternates: { canonical: "https://www.coastalsolarco.com/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black mb-2" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Terms & Conditions</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: April 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>These terms govern your use of the Coastal Solar Co. website and our solar installation services. By engaging our services you agree to these terms.</p>

          <h2 className="text-2xl font-bold mt-8" style={{ color: "var(--color-primary)" }}>Services</h2>
          <p>Coastal Solar Co. provides solar panel installation, battery storage installation, and related services to residential and commercial customers across Illawarra and South Coast NSW. All pricing estimates are indicative. A formal written quote is provided before any work commences.</p>

          <h2 className="text-2xl font-bold mt-8" style={{ color: "var(--color-primary)" }}>Warranties</h2>
          <p>We provide a 10-year workmanship warranty on all installations. Panel and inverter manufacturer warranties are passed through to the customer as per the terms of the respective manufacturers. Warranty claims must be reported in writing to warranty@coastalsolarco.com.</p>

          <h2 className="text-2xl font-bold mt-8" style={{ color: "var(--color-primary)" }}>Pricing & Payment</h2>
          <p>All prices are in Australian Dollars and include GST. Government rebates (STCs) are applied as a point-of-sale discount where eligible. Final pricing is confirmed in a written quote. Payment terms are outlined in individual contracts.</p>

          <h2 className="text-2xl font-bold mt-8" style={{ color: "var(--color-primary)" }}>Limitation of Liability</h2>
          <p>To the extent permitted by law, Coastal Solar Co. is not liable for indirect or consequential losses. Our liability is limited to the value of the services provided.</p>

          <h2 className="text-2xl font-bold mt-8" style={{ color: "var(--color-primary)" }}>Governing Law</h2>
          <p>These terms are governed by the laws of New South Wales, Australia.</p>

          <h2 className="text-2xl font-bold mt-8" style={{ color: "var(--color-primary)" }}>Contact</h2>
          <p>Questions? Email us at <a href="mailto:info@coastalsolarco.com" className="underline" style={{ color: "var(--color-secondary)" }}>info@coastalsolarco.com</a></p>
        </div>
      </div>
    </section>
  );
}
