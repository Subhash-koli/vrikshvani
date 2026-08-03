import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TechHero from '@/components/technology/TechHero';
import dynamic from 'next/dynamic';

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

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* FLIR Thermal Visualizer */}
          <ThermalVisualizer />

          {/* System Architecture Diagram */}
          <SystemArchitectureDiagram />
        </div>
      </section>

      <Footer />
    </main>
  );
}
