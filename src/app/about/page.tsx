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
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

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
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        <Timeline />

        {/* Surface Area Classification Matrix */}
        <Card className="p-8 border-[#8AD74C]/30 bg-[#0F2B18]/40 space-y-6">
          <div className="text-center space-y-1">
            <Badge variant="lime">Project Transparency Matrix</Badge>
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">
              Vriksh Vani Capability Classification
            </h2>
            <p className="text-xs text-[#A3B18A]">
              Explicitly distinguishing active deliverables, ongoing research, upcoming prototype targets, and long-term vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2 text-xs">
            <div className="p-5 rounded-2xl bg-[#070B08] border border-[#8AD74C]/40 space-y-2">
              <span className="font-mono text-[#8AD74C] font-bold uppercase tracking-wider">NOW · LIVE</span>
              <h3 className="font-display text-base font-bold text-[#F7F6F2]">What Exists Today</h3>
              <ul className="text-[#A3B18A] space-y-1.5 list-disc pl-4">
                <li>Live Waitlist Database API</li>
                <li>Evidence &amp; Truth Registry</li>
                <li>Open Sample Telemetry JSON</li>
                <li>Published Research Note #001 &amp; #002</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B08] border border-[#E8D07C]/40 space-y-2">
              <span className="font-mono text-[#E8D07C] font-bold uppercase tracking-wider">RESEARCH · ACTIVE</span>
              <h3 className="font-display text-base font-bold text-[#F7F6F2]">What We Are Investigating</h3>
              <ul className="text-[#A3B18A] space-y-1.5 list-disc pl-4">
                <li>Leaf surface thermography vs VPD shift</li>
                <li>Stomatal resistance pre-wilting signals</li>
                <li>ESP32-S3 INT8 TinyML quantization</li>
                <li>BME688 MOX gas baseline drift</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B08] border border-sky-400/40 space-y-2">
              <span className="font-mono text-sky-400 font-bold uppercase tracking-wider">NEXT · BUILDING</span>
              <h3 className="font-display text-base font-bold text-[#F7F6F2]">What We Are Building Next</h3>
              <ul className="text-[#A3B18A] space-y-1.5 list-disc pl-4">
                <li>NIH-01 Ceramic Enclosure Prototypes</li>
                <li>Physical Benchtop Sensor Arrays</li>
                <li>Prototype Cohort Tester Program</li>
                <li>NTE Voice Engine On-Device Build</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B08] border border-white/10 space-y-2">
              <span className="font-mono text-[#A3B18A] font-bold uppercase tracking-wider">FUTURE · VISION</span>
              <h3 className="font-display text-base font-bold text-[#F7F6F2]">Long-Term Roadmap</h3>
              <ul className="text-[#A3B18A] space-y-1.5 list-disc pl-4">
                <li>Matter &amp; Smart Home Integration</li>
                <li>Open vrikshvani-py SDK Package</li>
                <li>Commercial Ceramic Batch Manufacturing</li>
                <li>Ecosystem Botanical Garden Fleets</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <AboutPressKit />
      <Footer />
    </main>
  );
}
