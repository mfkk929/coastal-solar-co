import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Panels Illawarra & South Coast NSW | Coastal Solar Co.",
  description: "Coastal Solar Co. installs solar panels across Wollongong, Nowra, Kiama, Shellharbour, Ulladulla and 10+ South Coast suburbs. Find your local installer.",
  alternates: { canonical: "https://www.coastalsolarco.com/locations" },
};

const locations = [
  { name: "Wollongong", href: "/locations/wollongong", desc: "Illawarra's largest city — full residential & commercial coverage" },
  { name: "Shellharbour", href: "/locations/shellharbour", desc: "Shellharbour City & surrounds including Warilla and Barrack Heights" },
  { name: "Kiama", href: "/locations/kiama", desc: "Kiama, Gerringong, and the Kiama Downs area" },
  { name: "Gerringong", href: "/locations/gerringong", desc: "Gerringong, Gerroa and Berry area installs" },
  { name: "Berry", href: "/locations/berry", desc: "Berry and the Southern Highlands gateway" },
  { name: "Nowra", href: "/locations/nowra", desc: "Shoalhaven's capital — Nowra, Bomaderry, South Nowra" },
  { name: "Bomaderry", href: "/locations/bomaderry", desc: "North Nowra and the Bomaderry corridor" },
  { name: "Jervis Bay", href: "/locations/jervis-bay", desc: "Huskisson, Vincentia, Callala Bay" },
  { name: "Huskisson", href: "/locations/huskisson", desc: "Huskisson & Jervis Bay village" },
  { name: "Ulladulla", href: "/locations/ulladulla", desc: "Milton, Ulladulla and the South Coast corridor" },
  { name: "Thirroul", href: "/locations/thirroul", desc: "Thirroul, Austinmer and Northern Illawarra" },
  { name: "Dapto", href: "/locations/dapto", desc: "Dapto, Kanahooka and Lake Illawarra suburbs" },
  { name: "Albion Park", href: "/locations/albion-park", desc: "Albion Park, Albion Park Rail and Calderwood" },
];

export default function LocationsPage() {
  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Solar Installers Across the Illawarra & South Coast
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto">
            We cover every suburb from Thirroul to Ulladulla. Find your local page below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="card-hover block p-6 rounded-xl border border-gray-100 shadow-sm hover:border-secondary transition-colors"
                style={{ borderColor: "rgba(43,76,94,0.1)" }}
              >
                <h2 className="text-xl font-bold mb-2" style={{ color: "var(--color-primary)", fontFamily: "var(--font-montserrat)" }}>
                  Solar Panels {loc.name}
                </h2>
                <p className="text-sm text-gray-600">{loc.desc}</p>
                <span className="mt-3 inline-block text-sm font-semibold" style={{ color: "var(--color-secondary)" }}>
                  View local page →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-hero text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Don&apos;t see your suburb?
          </h2>
          <p className="text-white/85 mb-8 text-lg">We serve many more areas. Call us or use the calculator — if you&apos;re on the South Coast, we can reach you.</p>
          <Link href="/solar-calculator" className="btn-primary text-lg">
            Calculate My Savings →
          </Link>
        </div>
      </section>
    </>
  );
}
