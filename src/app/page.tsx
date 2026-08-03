import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeHero from '@/components/home/HomeHero';
import HomeVisionBrief from '@/components/home/HomeVisionBrief';
import HomeTechBreakdown from '@/components/home/HomeTechBreakdown';
import HomeProductShowcase from '@/components/home/HomeProductShowcase';
import HomeAppPreview from '@/components/home/HomeAppPreview';
import HomeCommunityWall from '@/components/home/HomeCommunityWall';
import HomePricingPreview from '@/components/home/HomePricingPreview';
import HomeBlogPreview from '@/components/home/HomeBlogPreview';
import HomeFaq from '@/components/home/HomeFaq';
import HomeFinaleCta from '@/components/home/HomeFinaleCta';

import HowItWorks60s from '@/components/home/HowItWorks60s';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2] selection:bg-[#8AD74C] selection:text-[#070B08]">
      <Header />
      <HomeHero />
      <HowItWorks60s />
      <HomeVisionBrief />
      <HomeTechBreakdown />
      <HomeProductShowcase />
      <HomeAppPreview />
      <HomeCommunityWall />
      <HomePricingPreview />
      <HomeBlogPreview />
      <HomeFaq />
      <HomeFinaleCta />
      <Footer />
    </main>
  );
}
