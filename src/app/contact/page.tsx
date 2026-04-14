"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", suburb: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="bg-white rounded-2xl p-12 text-center max-w-md shadow-lg">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Message received!
          </h2>
          <p className="text-gray-600">We&apos;ll call you within 5 minutes during business hours.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
              Get in Touch
            </h1>
            <p className="text-xl text-white/85">
              Fill in the form and we&apos;ll call you within 5 minutes during business hours. Or call us directly: <a href="tel:0212345678" className="font-bold underline">(02) 1234 5678</a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: "Full Name *", type: "text", required: true, placeholder: "Your name" },
                  { id: "email", label: "Email Address *", type: "email", required: true, placeholder: "you@example.com" },
                  { id: "phone", label: "Phone Number", type: "tel", required: false, placeholder: "04xx xxx xxx" },
                  { id: "suburb", label: "Suburb", type: "text", required: false, placeholder: "e.g. Wollongong" },
                ].map(field => (
                  <div key={field.id}>
                    <label className="block font-semibold mb-2 text-sm" style={{ color: "var(--color-text)" }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))}
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-semibold mb-2 text-sm" style={{ color: "var(--color-text)" }}>Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your home and what you're hoping to achieve..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none resize-none"
                  />
                </div>
                <button type="submit" className="w-full btn-primary text-lg py-4">
                  Send Message →
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                Contact details
              </h2>
              <div className="space-y-6">
                {[
                  { icon: "📞", label: "Phone", value: "(02) 1234 5678", href: "tel:0212345678" },
                  { icon: "✉️", label: "Email", value: "info@coastalsolar.com.au", href: "mailto:info@coastalsolar.com.au" },
                  { icon: "📍", label: "Office", value: "123 Crown Street, Wollongong NSW 2500", href: null },
                  { icon: "🕐", label: "Hours", value: "Mon–Fri 8am–5pm", href: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-500">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium hover:underline" style={{ color: "var(--color-primary)" }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium" style={{ color: "var(--color-primary)" }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl" style={{ backgroundColor: "var(--color-accent)" }}>
                <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                  5-Minute Callback Guarantee
                </h3>
                <p className="text-gray-600 text-sm">
                  Fill in the form and we&apos;ll call you within 5 minutes during business hours — or your first maintenance visit is free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
