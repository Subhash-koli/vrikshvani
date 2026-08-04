import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AppHero from '@/components/app/AppHero';
import AppUiGallery from '@/components/app/AppUiGallery';
import HomeFinaleCta from '@/components/home/HomeFinaleCta';

export const metadata: Metadata = {
  title: 'Vriksh Vani iOS & Android Companion App — Nature Intelligence',
  description: 'Explore the companion app for your NIH-01 hub. Real-time VPD dashboards, custom plant voice personalities, fleet management, and offline local Bluetooth sync.',
  openGraph: {
    title: 'Vriksh Vani Companion App — iOS & Android',
    description: 'Listen to your plant voice, track transpiration trends, and receive gentle non-alarmist care notifications.',
    url: 'https://vrikshvani.com/app',
  },
};

export default function MobileAppPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <AppHero />
      <AppUiGallery />
      <HomeFinaleCta />
      <Footer />
    </main>
  );
}
