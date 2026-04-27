import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-primary)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Solar Systems */}
          <div>
            <h3
              className="font-bold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              Solar Systems
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Residential", href: "/solar-systems/residential" },
                { label: "Commercial", href: "/solar-systems/commercial" },
                { label: "Battery Storage", href: "/solar-systems/battery-storage" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3
              className="font-bold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              Locations
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Wollongong", href: "/locations/wollongong" },
                { label: "Shellharbour", href: "/locations/shellharbour" },
                { label: "Kiama", href: "/locations/kiama" },
                { label: "Nowra", href: "/locations/nowra" },
                { label: "Ulladulla", href: "/locations/ulladulla" },
                { label: "View All →", href: "/locations" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3
              className="font-bold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Free Calculator", href: "/solar-calculator" },
                { label: "Solar Panels NSW", href: "/solar-panels-nsw" },
                { label: "NSW Solar Rebates", href: "/solar-rebates-nsw" },
                { label: "Rebates Guide", href: "/rebates" },
                { label: "Compare", href: "/compare" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="font-bold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              className="font-bold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              Legal
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
              style={{ backgroundColor: "var(--color-secondary)" }}
            >
              CS
            </div>
            <span className="font-bold text-white">Coastal Solar Co.</span>
          </div>
          <p className="text-white/50 text-sm text-center">
            © {new Date().getFullYear()} Coastal Solar Co. All rights reserved. CEC Accredited Installer.
            Based in Kiama, NSW 2533.
          </p>
          <p className="text-white/50 text-sm">
            <a href="tel:0493531857" className="hover:text-white transition-colors">
              0493 531 857
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
