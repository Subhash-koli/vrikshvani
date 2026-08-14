import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeHero from '@/components/home/HomeHero';
import HomeTrustBar from '@/components/home/HomeTrustBar';
import HomeProblemSection from '@/components/home/HomeProblemSection';
import HomeSolutionDemo from '@/components/home/HomeSolutionDemo';
import HowItWorks60s from '@/components/home/HowItWorks60s';
import HomeProductShowcase from '@/components/home/HomeProductShowcase';
import HomeFeatureGrid from '@/components/home/HomeFeatureGrid';
import HomeTechBreakdown from '@/components/home/HomeTechBreakdown';
import HomeAppPreview from '@/components/home/HomeAppPreview';
import HomeTestimonials from '@/components/home/HomeTestimonials';
import HomeVisionBrief from '@/components/home/HomeVisionBrief';
import HomeCommunityWall from '@/components/home/HomeCommunityWall';
import HomePricingPreview from '@/components/home/HomePricingPreview';
import HomeBlogPreview from '@/components/home/HomeBlogPreview';
import HomeFaq from '@/components/home/HomeFaq';
import HomeFinaleCta from '@/components/home/HomeFinaleCta';

import JsonLd, { faqJsonLd } from '@/components/seo/JsonLd';

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2] selection:bg-[#8AD74C] selection:text-[#070B08]">
      <JsonLd data={faqJsonLd} />
      <Header />

      {/* CHAPTER 01 — THE PROBLEM */}
      <section id="chapter-01-problem">
        <HomeHero />
        <HomeTrustBar />
        <HomeProblemSection />
      </section>

      {/* CHAPTER 02 — THE IDEA & NATURE INTELLIGENCE */}
      <section id="chapter-02-idea">
        <HomeSolutionDemo />
        <HowItWorks60s />
      </section>

      {/* CHAPTER 03 — THE SYSTEM (SENSING -> INTERPRETATION -> CARE) */}
      <section id="chapter-03-system">
        <HomeProductShowcase />
        <HomeFeatureGrid />
        <HomeTechBreakdown />
        <HomeAppPreview />
      </section>

      {/* CHAPTER 04 — THE RESEARCH & PHILOSOPHY */}
      <section id="chapter-04-research">
        <HomeVisionBrief />
        <HomeBlogPreview />
      </section>

      {/* CHAPTER 05 — THE JOURNEY (COMMUNITY & WAITLIST) */}
      <section id="chapter-05-journey">
        <HomeTestimonials />
        <HomeCommunityWall />
        <HomeFaq />
        <HomeFinaleCta />
      </section>

      <Footer />
    </main>
  );
}
