import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.coastalsolarco.com"),
  title: {
    default: "Solar Panels NSW | Wollongong & South Coast | Coastal Solar Co.",
    template: "%s | Coastal Solar Co.",
  },
  description:
    "Solar panels NSW — honest pricing, CEC-accredited installers, 5-minute callback. Servicing Wollongong, Illawarra and South Coast. 10-year warranty. Call 0493 531 857.",
  keywords: [
    "solar panels NSW",
    "solar rebates NSW",
    "solar installer NSW",
    "solar panels Wollongong",
    "solar panels Illawarra",
    "solar panels South Coast",
    "CEC accredited solar installer",
    "STC rebate 2026",
    "Cheaper Home Batteries Program",
    "battery storage NSW",
  ],
  authors: [{ name: "Coastal Solar Co.", url: "https://www.coastalsolarco.com" }],
  creator: "Coastal Solar Co.",
  publisher: "Coastal Solar Co.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: "Coastal Solar Co.",
    locale: "en_AU",
    type: "website",
    url: "https://www.coastalsolarco.com",
    title: "Solar Panels NSW | Wollongong & South Coast | Coastal Solar Co.",
    description:
      "Solar panels NSW — honest pricing, CEC-accredited installers, 5-minute callback. Servicing Wollongong, Illawarra and South Coast.",
    images: [
      {
        url: "https://www.coastalsolarco.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coastal Solar Co. – CEC-accredited solar installers in NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Solar Panels NSW | Coastal Solar Co.",
      template: "%s | Coastal Solar Co.",
    },
    description:
      "CEC-accredited solar installers across the Illawarra and South Coast. Honest pricing, 5-minute callback, 10-year warranty.",
    images: ["https://www.coastalsolarco.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.coastalsolarco.com",
  },
  category: "Solar Energy",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
