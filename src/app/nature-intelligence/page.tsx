import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TechHero from '@/components/technology/TechHero';
import SystemArchitectureDiagram from '@/components/visuals/SystemArchitectureDiagram';
import ThermalVisualizer from '@/components/visuals/ThermalVisualizer';

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
