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
  title: 'Nature Intelligence™ & NIOS Architecture — Vriksh Vani Technology',
  description: 'Explore the 6-stage Nature Intelligence OS (NIOS) framework. Thermal transpiration sensing, quad-gas analysis, and local TinyML neural voice engine.',
  openGraph: {
    title: 'Nature Intelligence™ & NIOS Architecture — Vriksh Vani',
    description: 'Learn how tiny ML and FLIR thermal optics decode invisible plant stress into natural human speech.',
    url: 'https://vrikshvani.com/nature-intelligence',
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
