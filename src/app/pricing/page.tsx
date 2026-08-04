import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PricingHero from '@/components/pricing/PricingHero';
import HomePricingPreview from '@/components/home/HomePricingPreview';

export const metadata: Metadata = {
  title: 'NIH-01 Pricing & Founding Member Tiers — Vriksh Vani',
  description: 'Explore founding member pricing for the Vriksh Vani NIH-01 Nature Intelligence Hub. Lock in pre-order pricing with zero subscription fees for life.',
  openGraph: {
    title: 'NIH-01 Pricing & Founding Member Tiers — Vriksh Vani',
    description: 'Transparent hardware pricing with lifetime free basic cloud sync. Founding member discounts available for Batch 01.',
    url: 'https://vrikshvani.com/pricing',
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
