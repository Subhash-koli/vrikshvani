import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FeaturesHero from '@/components/features/FeaturesHero';
import FeaturesSpeciesSearch from '@/components/features/FeaturesSpeciesSearch';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <FeaturesHero />
      <FeaturesSpeciesSearch />
      <Footer />
    </main>
  );
}
