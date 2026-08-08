import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "@/styles/globals.css";
import CookieConsentBanner from "@/components/ui/CookieConsentBanner";
import ToastContainer from "@/components/ui/Toast";
import { Analytics } from "@vercel/analytics/react";
import JsonLd, { organizationJsonLd, websiteJsonLd } from "@/components/seo/JsonLd";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vrikshvani.com';

export const metadata: Metadata = {
  title: "Vriksh Vani — Let your plant speak.",
  description: "Vriksh Vani is the pioneer of the Nature Intelligence category. Let your plant speak through non-invasive FLIR thermal biometrics, quad-gas sensing, and neural voice synthesis. Reserve your NIH-01 hub today.",
  keywords: ["Vriksh Vani", "Nature Intelligence Category", "Let your plant speak", "Plant Transpiration", "FLIR Thermal Sensor", "Bosch BME688", "Neural Voice Synthesis", "Plant Care AI", "plant health monitor", "plant voice AI"],
  authors: [{ name: "Siddhant Tiwari", url: siteUrl }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: 'https://www.vrikshvani.com',
  },
  openGraph: {
    title: "Vriksh Vani — Let your plant speak.",
    description: "Nature Intelligence Category — Decodes plant health, stress, and emotions using non-invasive thermal biometrics and voice AI.",
    url: 'https://www.vrikshvani.com',
    siteName: "Vriksh Vani",
    images: [
      {
        url: `${siteUrl}/og`,
        width: 1200,
        height: 630,
        alt: "Vriksh Vani — Let your plant speak. (Nature Intelligence Category)",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    title: "Vriksh Vani — Let your plant speak.",
    description: "Nature Intelligence Category — Decodes plant health, stress, and emotions using non-invasive thermal biometrics and voice AI.",
    images: [`${siteUrl}/og`],
    creator: "@vrikshvani",
  },
  verification: {
    // Add your Google Search Console verification token here when you get it
    // google: 'YOUR_GOOGLE_VERIFICATION_TOKEN',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}>
      <body className="bg-[#070B08] text-[#F7F6F2] font-sans antialiased selection:bg-[#8AD74C] selection:text-[#070B08]">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
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


