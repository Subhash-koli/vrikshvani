import React from 'react';
import { Badge } from '@/components/ui/Badge';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 bg-[#070B08] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#8AD74C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge variant="gold">Our Mission &amp; Purpose</Badge>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#F7F6F2] leading-tight">
            Building the Bridge to <span className="text-[#8AD74C]">Nature Intelligence.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#A3B18A] max-w-2xl mx-auto leading-relaxed">
            Vriksh Vani is an independent project exploring how non-invasive thermal biometrics and embedded edge AI can help humans understand the silent signals of living systems.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-mono text-[#8AD74C] bg-[#8AD74C]/10 border border-[#8AD74C]/40 px-3 py-1 rounded-full font-bold shadow-[0_0_12px_rgba(138,215,76,0.25)]">
              CURRENT STAGE: PHASE 04 — HARDWARE ARCHITECTURE &amp; CERAMIC DESIGN
            </span>
            <span className="text-xs font-mono text-[#E8D07C] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              UPCOMING: PHASE 05 — PROTOTYPE VALIDATION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
