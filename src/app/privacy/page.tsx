import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Coastal Solar Co.",
  description: "Coastal Solar Co. privacy policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://coastalsolarco.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black mb-2" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: April 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>Coastal Solar Co. (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.</p>

          <h2 className="text-2xl font-bold mt-8" style={{ color: "var(--color-primary)" }}>Information We Collect</h2>
          <p>We may collect the following types of personal information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, and phone number when you submit an enquiry or use our solar calculator</li>
            <li>Property details (postcode, roof orientation, electricity usage) for the purpose of providing a solar quote</li>
            <li>Usage data collected automatically via analytics tools (e.g., pages visited, time on site)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8" style={{ color: "var(--color-primary)" }}>How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your enquiry and provide a solar system quote</li>
            <li>To improve our website and services</li>
            <li>To send you relevant information about solar incentives and updates (with your consent)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8" style={{ color: "var(--color-primary)" }}>Data Sharing</h2>
          <p>We do not sell your personal information. We may share it with trusted third parties only where necessary to provide our services (e.g., installation partners, finance providers with your explicit consent).</p>

          <h2 className="text-2xl font-bold mt-8" style={{ color: "var(--color-primary)" }}>Your Rights</h2>
          <p>You have the right to access, correct, or delete personal information we hold about you. Contact us at privacy@coastalsolarco.com.</p>

          <h2 className="text-2xl font-bold mt-8" style={{ color: "var(--color-primary)" }}>Contact</h2>
          <p>Questions about this policy? Contact us at <a href="mailto:privacy@coastalsolarco.com" className="underline" style={{ color: "var(--color-secondary)" }}>privacy@coastalsolarco.com</a></p>
        </div>
      </div>
    </section>
  );
}
