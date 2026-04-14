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
  title: "Solar Panels Wollongong & South Coast NSW | Coastal Solar Co.",
  description:
    "Get honest solar pricing for Illawarra and South Coast homes. 5-minute callback guarantee. 10-year warranty. Free savings calculator. Call (02) 1234 5678.",
  openGraph: {
    siteName: "Coastal Solar Co.",
    locale: "en_AU",
    type: "website",
    url: "https://coastalsolar.com.au",
    images: [
      {
        url: "https://coastalsolar.com.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coastal Solar Co. – Solar Panels Wollongong & South Coast NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Panels Wollongong & South Coast NSW | Coastal Solar Co.",
    description:
      "Get honest solar pricing for Illawarra and South Coast homes. 5-minute callback guarantee. 10-year warranty.",
  },
  metadataBase: new URL("https://coastalsolar.com.au"),
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
