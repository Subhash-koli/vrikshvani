import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WaitlistHero from '@/components/waitlist/WaitlistHero';

export const metadata: Metadata = {
  title: 'Join Batch 01 Waitlist — Vriksh Vani NIH-01 Pre-Order',
  description: 'Reserve your Batch 01 NIH-01 Nature Intelligence Hub. FLIR thermal biometrics, quad-gas analysis, and neural plant voice. Limited founding units available.',
  openGraph: {
    title: 'Join Batch 01 Waitlist — Vriksh Vani NIH-01',
    description: 'Reserve your founding unit of the NIH-01 Nature Intelligence Hub. Limited Batch 01 quantity.',
    url: 'https://www.vrikshvani.com/waitlist',
  },
};

export default function WaitlistPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <WaitlistHero />
      <Footer />
    </main>
  );
}
