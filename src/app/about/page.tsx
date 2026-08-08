import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutWhyWeExist from '@/components/about/AboutWhyWeExist';
import AboutFounder from '@/components/about/AboutFounder';
import AboutTeam from '@/components/about/AboutTeam';
import AboutMilestones from '@/components/about/AboutMilestones';
import AboutPartners from '@/components/about/AboutPartners';
import AboutOffices from '@/components/about/AboutOffices';
import AboutPressKit from '@/components/about/AboutPressKit';
import AboutMasterSummary from '@/components/about/AboutMasterSummary';
import Timeline from '@/components/about/Timeline';

export const metadata: Metadata = {
  title: 'Our Story & 100-Year Vision | About Vriksh Vani',
  description: 'Vriksh Vani was founded to bridge plant biophysics and human communication. Meet our team of hardware engineers and plant parents building Nature Intelligence.',
  keywords: ['About Vriksh Vani', 'Nature Intelligence founder', 'Siddhant Tiwari', 'Vriksh Vani story', 'plant technology startup', 'Bengaluru hardware startup'],
  alternates: {
    canonical: 'https://www.vrikshvani.com/about',
  },
  openGraph: {
    title: 'Our Story & 100-Year Vision | About Vriksh Vani',
    description: 'Technology should disappear. Nature should become understandable. Discover the mission and team behind Vriksh Vani.',
    url: 'https://www.vrikshvani.com/about',
    siteName: 'Vriksh Vani',
    images: [
      {
        url: 'https://www.vrikshvani.com/og?title=Our%20Story%20%26%20100-Year%20Vision&subtitle=Decoding%20Plant%20Biometrics',
        width: 1200,
        height: 630,
        alt: 'About Vriksh Vani — Nature Intelligence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Story & 100-Year Vision | About Vriksh Vani',
    description: 'Discover the mission and team behind Vriksh Vani Nature Intelligence.',
    images: ['https://www.vrikshvani.com/og?title=Our%20Story%20%26%20100-Year%20Vision&subtitle=Decoding%20Plant%20Biometrics'],
    creator: '@vrikshvani',
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2] selection:bg-[#8AD74C] selection:text-[#070B08]">
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutWhyWeExist />
      <AboutFounder />
      <AboutTeam />
      <AboutMilestones />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Timeline />
      </div>
      <AboutPartners />
      <AboutOffices />
      <AboutPressKit />
      <AboutMasterSummary />
      <Footer />
    </main>
  );
}
