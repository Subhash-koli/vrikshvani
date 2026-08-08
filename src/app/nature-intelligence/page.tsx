import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TechHero from '@/components/technology/TechHero';
import NiosFrameworkDiagram from '@/components/technology/NiosFrameworkDiagram';
import HomeSolutionDemo from '@/components/home/HomeSolutionDemo';
import HomeFeatureGrid from '@/components/home/HomeFeatureGrid';
import HomeFinaleCta from '@/components/home/HomeFinaleCta';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Nature Intelligence Category & NIOS Architecture | Vriksh Vani',
  description: 'Explore the 6-stage Nature Intelligence OS (NIOS) framework. Combines thermal transpiration sensing, quad-gas analysis, and local TinyML neural voice synthesis.',
  keywords: ['Nature Intelligence', 'NIOS architecture', 'plant biophysics AI', 'NTE voice engine', 'plant transpiration thermal sensing'],
  alternates: {
    canonical: 'https://www.vrikshvani.com/nature-intelligence',
  },
  openGraph: {
    title: 'Nature Intelligence Category & NIOS Architecture | Vriksh Vani',
    description: 'Learn how tiny ML and FLIR thermal optics decode invisible plant stress into natural human speech.',
    url: 'https://www.vrikshvani.com/nature-intelligence',
    siteName: 'Vriksh Vani',
    images: [
      {
        url: 'https://www.vrikshvani.com/og?title=Nature%20Intelligence%20Category&subtitle=Bridging%20Plant%20Biophysics%20%26%20Human%20Speech',
        width: 1200,
        height: 630,
        alt: 'Nature Intelligence Category & NIOS Architecture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nature Intelligence Category | Vriksh Vani',
    description: 'Discover how Vriksh Vani decodes plant biometrics into natural human speech.',
    images: ['https://www.vrikshvani.com/og?title=Nature%20Intelligence%20Category&subtitle=Bridging%20Plant%20Biophysics%20%26%20Human%20Speech'],
    creator: '@vrikshvani',
  },
};

const ThermalVisualizer = dynamic(() => import('@/components/visuals/ThermalVisualizer'), {
  loading: () => <div className="h-64 rounded-2xl bg-[#0F2B18]/20 animate-pulse border border-white/5" />,
});

const SystemArchitectureDiagram = dynamic(() => import('@/components/visuals/SystemArchitectureDiagram'), {
  loading: () => <div className="h-64 rounded-2xl bg-[#0F2B18]/20 animate-pulse border border-white/5" />,
});

export default function TechnologyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <TechHero />

      {/* Interactive NTE Voice Demo */}
      <HomeSolutionDemo />

      {/* NIOS 6-Stage Framework */}
      <NiosFrameworkDiagram />

      {/* Interactive Hardware & System Visualizers */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* FLIR Thermal Visualizer */}
          <ThermalVisualizer />

          {/* System Architecture Diagram */}
          <SystemArchitectureDiagram />
        </div>
      </section>

      {/* 8 Core Hardware & AI Capabilities */}
      <HomeFeatureGrid />

      <HomeFinaleCta />
      <Footer />
    </main>
  );
}
