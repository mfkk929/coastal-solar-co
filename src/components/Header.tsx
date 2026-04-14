"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solarDropdown, setSolarDropdown] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-lg"
              style={{ backgroundColor: "var(--color-secondary)" }}
            >
              CS
            </div>
            <span
              className="font-bold text-white text-lg"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Coastal Solar Co.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Solar Systems Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolarDropdown(true)}
              onMouseLeave={() => setSolarDropdown(false)}
            >
              <button className="flex items-center gap-1 text-white/90 hover:text-white font-medium transition-colors">
                Solar Systems
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {solarDropdown && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-2 z-50">
                  <Link
                    href="/solar-systems/residential"
                    className="block px-4 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
                    style={{ color: "var(--color-text)" }}
                  >
                    Residential Solar
                  </Link>
                  <Link
                    href="/solar-systems/commercial"
                    className="block px-4 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
                    style={{ color: "var(--color-text)" }}
                  >
                    Commercial Solar
                  </Link>
                  <Link
                    href="/solar-systems/battery-storage"
                    className="block px-4 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
                    style={{ color: "var(--color-text)" }}
                  >
                    Battery Storage
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/how-it-works"
              className="text-white/90 hover:text-white font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-white/90 hover:text-white font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/rebates"
              className="text-white/90 hover:text-white font-medium transition-colors"
            >
              Rebates
            </Link>
            <Link
              href="/solar-calculator"
              className="text-white/90 hover:text-white font-medium transition-colors"
            >
              Free Calculator
            </Link>
            <Link
              href="/solar-calculator"
              className="btn-primary text-sm px-5 py-2.5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Get My Free Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-white/20"
          style={{ backgroundColor: "var(--color-primary-dark, #1e3545)" }}
        >
          <div className="px-4 py-4 space-y-1">
            <div className="py-2 text-white/60 text-xs font-semibold uppercase tracking-wider">
              Solar Systems
            </div>
            <Link
              href="/solar-systems/residential"
              className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Residential Solar
            </Link>
            <Link
              href="/solar-systems/commercial"
              className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Commercial Solar
            </Link>
            <Link
              href="/solar-systems/battery-storage"
              className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Battery Storage
            </Link>
            <div className="border-t border-white/20 my-2" />
            <Link
              href="/how-it-works"
              className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/rebates"
              className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Rebates
            </Link>
            <Link
              href="/solar-calculator"
              className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Free Calculator
            </Link>
            <div className="pt-2">
              <Link
                href="/solar-calculator"
                className="btn-primary block w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                Get My Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
