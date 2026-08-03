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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2] selection:bg-[#8AD74C] selection:text-[#070B08]">
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
