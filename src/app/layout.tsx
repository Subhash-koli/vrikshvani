import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "@/styles/globals.css";
import CookieConsentBanner from "@/components/ui/CookieConsentBanner";
import ToastContainer from "@/components/ui/Toast";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vriksh Vani — Decoded Plant Intelligence & Thermal Sensing",
  description: "Vriksh Vani decodes the silent biophysical language of plants using FLIR thermal biometrics, quad-gas sensing, and neural voice output. Join the Batch 01 waitlist today.",
  keywords: ["Vriksh Vani", "Nature Intelligence", "Plant Transpiration", "FLIR Thermal Sensor", "Bosch BME688", "Neural Voice Synthesis", "Plant Care AI"],
  authors: [{ name: "Siddhant Tiwari", url: "https://vrikshvani.com" }],
  openGraph: {
    title: "Vriksh Vani — Decoded Plant Intelligence",
    description: "Decodes plant health, stress, and emotions using non-invasive thermal biometrics and voice AI.",
    url: "https://vrikshvani.com",
    siteName: "Vriksh Vani",
    images: [
      {
        url: "https://cdn.vrikshvani.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vriksh Vani NIH-01 Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  manifest: "/manifest.json",
  themeColor: "#0F2B18",
  twitter: {
    card: "summary_large_image",
    title: "Vriksh Vani — Decoded Plant Intelligence",
    description: "Decodes plant health, stress, and emotions using non-invasive thermal biometrics and voice AI.",
    creator: "@vrikshvani",
  },
};

import JsonLd, { organizationJsonLd } from "@/components/seo/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}>
      <body className="bg-[#070B08] text-[#F7F6F2] font-sans antialiased selection:bg-[#8AD74C] selection:text-[#070B08]">
        <JsonLd data={organizationJsonLd} />
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
        <CookieConsentBanner />
        <ToastContainer />
        <Analytics />
      </body>
    </html>
  );
}


