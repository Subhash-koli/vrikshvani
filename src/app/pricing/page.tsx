import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PricingHero from '@/components/pricing/PricingHero';
import HomePricingPreview from '@/components/home/HomePricingPreview';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <PricingHero />
      <HomePricingPreview />
      <Footer />
    </main>
  );
}
