import type { Metadata } from "next";
import { Inter, Outfit, Poppins, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
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

// Poppins — bold brand name "Vriksh Vani"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

// Libre Baskerville — serif tagline "LET YOUR PLANT SPEAK" (Cambria-like)
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vrikshvani.com';

export const metadata: Metadata = {
  title: "Vriksh Vani — Let your plant speak.",
  description: "Vriksh Vani is the pioneer of the Nature Intelligence category. Exploring non-invasive FLIR thermal biometrics, quad-gas sensing, and neural voice synthesis to interpret plant signals.",
  keywords: ["Vriksh Vani", "Nature Intelligence Category", "Let your plant speak", "Plant Transpiration", "FLIR Thermal Sensor", "Bosch BME688", "Neural Voice Synthesis", "Plant Care AI", "plant health monitor", "plant voice AI"],
  authors: [{ name: "Subhash Koli", url: siteUrl }],
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
  icons: {
    icon: [
      { url: '/assets/vrikshvani_logo/Vriksh%20vani%20logo%20favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/assets/vrikshvani_logo/Vriksh%20vani%20logo%20favicon.png',
    apple: '/assets/vrikshvani_logo/Vriksh%20vani%20logo%20favicon.png',
  },
  twitter: {
    card: "summary_large_image",
    title: "Vriksh Vani — Let your plant speak.",
    description: "Nature Intelligence Category — Decodes plant health, stress, and emotions using non-invasive thermal biometrics and voice AI.",
    images: [`${siteUrl}/og`],
    creator: "@vrikshvani",
  },
  verification: {
    google: 'fMaBohNpJhKpLbMOQac6KinW_xT47TUXyT2ZVbZDvkI',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${poppins.variable} ${libreBaskerville.variable} dark scroll-smooth`}>
      <head>
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W2Y29Y1XP6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W2Y29Y1XP6', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
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


