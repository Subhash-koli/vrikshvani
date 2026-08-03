import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AppHero from '@/components/app/AppHero';

export default function MobileAppPage() {
  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <AppHero />
      <Footer />
    </main>
  );
}
