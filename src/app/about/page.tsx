import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutWhyWeExist from '@/components/about/AboutWhyWeExist';
import AboutFounder from '@/components/about/AboutFounder';
import Timeline from '@/components/about/Timeline';
import AboutPressKit from '@/components/about/AboutPressKit';

export const metadata: Metadata = {
  title: 'Our Story & Vision | About Vriksh Vani',
  description: 'Vriksh Vani is an independent Nature Intelligence project exploring how non-invasive sensing and edge AI can help humans understand plant signals.',
  keywords: ['About Vriksh Vani', 'Nature Intelligence founder', 'Subhash Koli', 'Vriksh Vani story', 'plant technology project', 'Bengaluru hardware project'],
  alternates: {
    canonical: 'https://www.vrikshvani.com/about',
  },
  openGraph: {
    title: 'Our Story & Vision | About Vriksh Vani',
    description: 'Technology should disappear. Nature should become understandable. Discover the mission and founder behind Vriksh Vani.',
    url: 'https://www.vrikshvani.com/about',
    siteName: 'Vriksh Vani',
    images: [
      {
        url: 'https://www.vrikshvani.com/og?title=Our%20Story%20%26%20Vision&subtitle=Building%20Nature%20Intelligence',
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
    title: 'Our Story & Vision | About Vriksh Vani',
    description: 'Discover the mission and founder behind Vriksh Vani Nature Intelligence.',
    images: ['https://www.vrikshvani.com/og?title=Our%20Story%20%26%20Vision&subtitle=Building%20Nature%20Intelligence'],
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
      <div className="max-w-5xl mx-auto px-4 py-16">
        <Timeline />
      </div>
      <AboutPressKit />
      <Footer />
    </main>
  );
}
