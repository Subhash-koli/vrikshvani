import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PricingHero from '@/components/pricing/PricingHero';
import HomePricingPreview from '@/components/home/HomePricingPreview';

export const metadata: Metadata = {
  title: 'NIH-01 Pricing & Pre-Order | Vriksh Vani',
  description: 'Reserve your NIH-01 Nature Intelligence Hub for ₹24,999. Includes kiln-fired ceramic hub, 7-year right-to-repair warranty, and zero monthly subscriptions for life.',
  keywords: ['NIH-01 price', 'Vriksh Vani pre-order', 'smart plant sensor price', 'Batch 01 reservation'],
  alternates: {
    canonical: 'https://www.vrikshvani.com/pricing',
  },
  openGraph: {
    title: 'NIH-01 Pricing & Pre-Order | Vriksh Vani',
    description: 'Transparent hardware pricing with lifetime free cloud sync. Reserve your Batch 01 Founding Member unit.',
    url: 'https://www.vrikshvani.com/pricing',
    siteName: 'Vriksh Vani',
    images: [
      {
        url: 'https://www.vrikshvani.com/og?title=NIH-01%20Pricing%20%26%20Pre-Order&subtitle=%E2%82%B924%2C999%20Batch%2001%20Reservation',
        width: 1200,
        height: 630,
        alt: 'NIH-01 Pricing & Pre-Order',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIH-01 Pricing & Pre-Order | Vriksh Vani',
    description: 'Reserve your NIH-01 Batch 01 unit for ₹24,999.',
    images: ['https://www.vrikshvani.com/og?title=NIH-01%20Pricing%20%26%20Pre-Order&subtitle=%E2%82%B924%2C999%20Batch%2001%20Reservation'],
    creator: '@vrikshvani',
  },
};

export default function PricingPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <PricingHero />
      <HomePricingPreview />
      <Footer />
    </main>
  );
}
