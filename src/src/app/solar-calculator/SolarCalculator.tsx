"use client";

import { useState, useEffect, useRef } from "react";

type Step = 1 | 2 | 3;
type BillRange = "$50–$100" | "$100–$200" | "$200–$350" | "$350–$500" | "$500+";
type Battery = "Yes" | "Maybe" | "No";
type Direction = "North" | "North-East" | "North-West" | "East" | "West";

interface FormData {
  postcode: string;
  direction: Direction | "";
  bill: BillRange | "";
  battery: Battery | "";
}

interface Results {
  systemSize: number;
  cost: [number, number];
  rebate: number;
  annualSavings: [number, number];
  paybackYears: number;
  co2Tonnes: number;
  treesEquivalent: number;
}

function billToQuarterlyAmount(bill: BillRange): number {
  const map: Record<BillRange, number> = {
    "$50–$100": 75,
    "$100–$200": 150,
    "$200–$350": 275,
    "$350–$500": 425,
    "$500+": 600,
  };
  return map[bill];
}

function calculateResults(data: FormData): Results {
  const quarterly = billToQuarterlyAmount(data.bill as BillRange);
  const annual = quarterly * 4;

  let systemSize: number;
  if (quarterly < 200) systemSize = 6.6;
  else if (quarterly < 350) systemSize = 10;
  else systemSize = 13;

  // Cost ranges after rebates
  const costMap: Record<number, [number, number]> = {
    6.6: [5500, 6500],
    10: [7800, 9500],
    13: [20000, 26000],
  };
  const cost = costMap[systemSize];

  // Rebate (scales with system size from 3040 base at 6.6kW)
  const rebate = Math.round((systemSize / 6.6) * 3040);

  // Annual savings (74% bill reduction)
  const reduction = 0.74;
  const annualSavings: [number, number] = [
    Math.round(annual * reduction * 0.85),
    Math.round(annual * reduction * 1.15),
  ];

  // Payback
  const avgCost = (cost[0] + cost[1]) / 2;
  const avgSavings = (annualSavings[0] + annualSavings[1]) / 2;
  const paybackYears = Math.round((avgCost / avgSavings) * 10) / 10;

  // CO2
  const co2Tonnes = Math.round(systemSize * 1.4 * 10) / 10;
  const treesEquivalent = Math.round(co2Tonnes / 0.022);

  return { systemSize, cost, rebate, annualSavings, paybackYears, co2Tonnes, treesEquivalent };
}

function AnimatedNumber({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [current, setCurrent] = useState(0);
  const startTime = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    startTime.current = null;
    const duration = 1200;

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target]);

  return (
    <span>
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function SolarCalculator() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>({ postcode: "", direction: "", bill: "", battery: "" });
  const [results, setResults] = useState<Results | null>(null);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadError, setLeadError] = useState("");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const errs: Partial<FormData> = {};
    if (!form.postcode || form.postcode.length < 4) errs.postcode = "Enter a valid postcode" as never;
    if (!form.direction) errs.direction = "Select a direction" as never;
    if (!form.bill) errs.bill = "Select a bill range" as never;
    if (!form.battery) errs.battery = "Select an option" as never;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCalculate = () => {
    if (!validate()) return;
    const r = calculateResults(form);
    setResults(r);
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadLoading(true);
    setLeadError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadForm,
          suburb: form.postcode,
          message: `Postcode: ${form.postcode} | Roof: ${form.direction} | Bill: ${form.bill} | Battery: ${form.battery} | System: ${results?.systemSize}kW | Est. savings: $${results?.annualSavings[0]}–$${results?.annualSavings[1]}/yr`,
          source: "calculator",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setLeadError("Something went wrong — please call us directly or try again.");
    } finally {
      setLeadLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="bg-white rounded-2xl p-12 text-center max-w-md shadow-lg">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
            Report on its way!
          </h2>
          <p className="text-gray-600 mb-6">
            We&apos;ll call you within 5 minutes during business hours with your full personalised report.
          </p>
          <p className="text-sm text-gray-400">Can&apos;t wait? Call us: <a href="tel:0493531857" className="font-semibold" style={{ color: "var(--color-secondary)" }}>0493 531 857</a></p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: "var(--color-accent)" }}>
      <div className="max-w-2xl mx-auto px-4">
        {/* Progress */}
        <div className="flex items-center justify-between mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors"
                style={{
                  backgroundColor: step >= s ? "var(--color-secondary)" : "#e5e7eb",
                  color: step >= s ? "white" : "#6b7280",
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                {s}
              </div>
              <span className="text-sm font-medium hidden sm:block" style={{ color: step >= s ? "var(--color-primary)" : "#9ca3af" }}>
                {s === 1 ? "Your Details" : s === 2 ? "Your Savings" : "Get Report"}
              </span>
              {s < 3 && <div className={`w-16 sm:w-24 h-1 rounded ${step > s ? "bg-secondary" : "bg-gray-200"}`} style={step > s ? { backgroundColor: "var(--color-secondary)" } : {}} />}
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black mb-2" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
              Calculate Your Solar Savings
            </h2>
            <p className="text-gray-500 mb-8">Takes 60 seconds. No email required to see results.</p>

            <div className="space-y-6">
              <div>
                <label className="block font-semibold mb-2 text-sm" style={{ color: "var(--color-text)" }}>
                  Your Postcode
                </label>
                <input
                  type="text"
                  maxLength={4}
                  placeholder="e.g. 2500"
                  value={form.postcode}
                  onChange={e => setForm(f => ({ ...f, postcode: e.target.value.replace(/\D/g, "") }))}
                  className="w-full border-2 rounded-lg px-4 py-3 text-lg focus:outline-none transition-colors"
                  style={{ borderColor: errors.postcode ? "#ef4444" : "#e5e7eb" }}
                />
                {errors.postcode && <p className="text-red-500 text-sm mt-1">{errors.postcode}</p>}
              </div>

              <div>
                <label className="block font-semibold mb-2 text-sm" style={{ color: "var(--color-text)" }}>
                  Primary Roof Direction
                </label>
                <select
                  value={form.direction}
                  onChange={e => setForm(f => ({ ...f, direction: e.target.value as Direction }))}
                  className="w-full border-2 rounded-lg px-4 py-3 text-lg focus:outline-none bg-white"
                  style={{ borderColor: errors.direction ? "#ef4444" : "#e5e7eb" }}
                >
                  <option value="">Select direction</option>
                  {["North", "North-East", "North-West", "East", "West"].map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                {errors.direction && <p className="text-red-500 text-sm mt-1">{errors.direction as string}</p>}
              </div>

              <div>
                <label className="block font-semibold mb-2 text-sm" style={{ color: "var(--color-text)" }}>
                  Average Quarterly Electricity Bill
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(["$50–$100", "$100–$200", "$200–$350", "$350–$500", "$500+"] as BillRange[]).map(b => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, bill: b }))}
                      className="border-2 rounded-lg px-3 py-3 text-sm font-semibold transition-all"
                      style={{
                        borderColor: form.bill === b ? "var(--color-secondary)" : "#e5e7eb",
                        backgroundColor: form.bill === b ? "var(--color-secondary)" : "white",
                        color: form.bill === b ? "white" : "var(--color-text)",
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
                {errors.bill && <p className="text-red-500 text-sm mt-1">{errors.bill as string}</p>}
              </div>

              <div>
                <label className="block font-semibold mb-2 text-sm" style={{ color: "var(--color-text)" }}>
                  Interested in Battery Storage?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(["Yes", "Maybe", "No"] as Battery[]).map(b => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, battery: b }))}
                      className="border-2 rounded-lg px-3 py-3 text-sm font-semibold transition-all"
                      style={{
                        borderColor: form.battery === b ? "var(--color-secondary)" : "#e5e7eb",
                        backgroundColor: form.battery === b ? "var(--color-secondary)" : "white",
                        color: form.battery === b ? "white" : "var(--color-text)",
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
                {errors.battery && <p className="text-red-500 text-sm mt-1">{errors.battery as string}</p>}
              </div>

              <button
                onClick={handleCalculate}
                className="w-full btn-primary text-xl py-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Show Me My Savings →
              </button>
            </div>
          </div>
        )}

        {/* Step 2 - Results */}
        {step === 2 && results && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-black mb-2" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
                Your Estimated Savings
              </h2>
              <p className="text-gray-500 mb-8">Based on your bill, postcode, and roof direction.</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl p-5 text-center" style={{ backgroundColor: "var(--color-accent)" }}>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Recommended System</p>
                  <p className="text-3xl font-black" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}>
                    {results.systemSize}kW
                  </p>
                </div>
                <div className="rounded-xl p-5 text-center" style={{ backgroundColor: "var(--color-accent)" }}>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Your Rebate Value</p>
                  <p className="text-3xl font-black" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}>
                    <AnimatedNumber target={results.rebate} prefix="$" />
                  </p>
                </div>
                <div className="rounded-xl p-5 text-center" style={{ backgroundColor: "var(--color-accent)" }}>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Annual Savings</p>
                  <p className="text-2xl font-black" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}>
                    $<AnimatedNumber target={results.annualSavings[0]} />
                    –$<AnimatedNumber target={results.annualSavings[1]} />
                  </p>
                </div>
                <div className="rounded-xl p-5 text-center" style={{ backgroundColor: "var(--color-accent)" }}>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Payback Period</p>
                  <p className="text-3xl font-black" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-montserrat)" }}>
                    {results.paybackYears} yrs
                  </p>
                </div>
              </div>

              <div className="border border-gray-100 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-gray-600 text-sm">System cost after rebates</span>
                  <span className="font-bold" style={{ color: "var(--color-primary)" }}>${results.cost[0].toLocaleString()}–${results.cost[1].toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-gray-600 text-sm">CO₂ offset</span>
                  <span className="font-bold" style={{ color: "var(--color-primary)" }}>{results.co2Tonnes} tonnes/yr</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 text-sm">Equivalent trees planted</span>
                  <span className="font-bold" style={{ color: "var(--color-primary)" }}>{results.treesEquivalent.toLocaleString()} trees/yr</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(3)} className="btn-primary flex-1 text-lg py-4">
                  Get My Full Report →
                </button>
                <button onClick={() => setStep(1)} className="btn-outline flex-1 text-lg py-4">
                  Recalculate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 - Lead Capture */}
        {step === 3 && results && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black mb-2" style={{ fontFamily: "var(--font-montserrat)", color: "var(--color-primary)" }}>
              Get Your Full Personalised Report
            </h2>
            <p className="text-gray-500 mb-8">We&apos;ll prepare a full report and call you within 5 minutes with your exact quote.</p>

            <form onSubmit={handleSubmitLead} className="space-y-5">
              <div>
                <label className="block font-semibold mb-2 text-sm" style={{ color: "var(--color-text)" }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="First and last name"
                  value={leadForm.name}
                  onChange={e => setLeadForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary"
                  style={{ borderColor: "#e5e7eb" }}
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-sm" style={{ color: "var(--color-text)" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={leadForm.email}
                  onChange={e => setLeadForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none"
                  style={{ borderColor: "#e5e7eb" }}
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-sm" style={{ color: "var(--color-text)" }}>
                  Phone (optional — for 5-min callback)
                </label>
                <input
                  type="tel"
                  placeholder="04xx xxx xxx"
                  value={leadForm.phone}
                  onChange={e => setLeadForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none"
                  style={{ borderColor: "#e5e7eb" }}
                />
              </div>
              {leadError && (
                <p className="text-red-600 text-sm font-medium">{leadError}</p>
              )}
              <button type="submit" disabled={leadLoading} className="w-full btn-primary text-xl py-4 disabled:opacity-60">
                {leadLoading ? "Sending…" : "Get My Full Report →"}
              </button>
              <p className="text-center text-xs text-gray-400">No spam. No obligation. We call you with numbers, not a sales pitch.</p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
