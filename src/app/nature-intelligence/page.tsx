import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TechHero from '@/components/technology/TechHero';

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <TechHero />
      <Footer />
    </main>
  );
}
