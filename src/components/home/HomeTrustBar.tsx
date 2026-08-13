'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ShieldCheck, Leaf, FlaskConical, Fingerprint, Sprout } from 'lucide-react';

const DESIGN_PRINCIPLES = [
  {
    icon: ShieldCheck,
    label: 'Privacy-First Architecture',
    sub: 'On-device processing design',
    color: 'text-[#8AD74C]',
  },
  {
    icon: FlaskConical,
    label: 'Open Research Approach',
    sub: 'Hypotheses shared publicly',
    color: 'text-[#E8D07C]',
  },
  {
    icon: Fingerprint,
    label: 'Non-Invasive Sensing',
    sub: 'Zero contact with plant tissue',
    color: 'text-[#A3B18A]',
  },
  {
    icon: Sprout,
    label: 'Artisan & Sustainable',
    sub: 'Plastic-free design goal',
    color: 'text-[#8AD74C]',
  },
  {
    icon: Leaf,
    label: 'India-Born, Nature-Driven',
    sub: 'Built in Bengaluru',
    color: 'text-[#E8D07C]',
  },
];

export const HomeTrustBar: React.FC = () => {
  return (
    <section id="philosophy" className="py-14 bg-[#030504] border-y border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 space-y-8">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/5 pb-6">
            <span className="text-[10px] font-mono text-[#A3B18A]/60 uppercase tracking-widest mr-4">
              Our Principles
            </span>
          </div>
        </ScrollReveal>

        {/* Design Principles Grid */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
            {DESIGN_PRINCIPLES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0F2B18]/30 border border-white/5 text-center space-y-2 hover:border-[#8AD74C]/30 transition-colors"
                >
                  <Icon className={`w-5 h-5 mx-auto ${item.color}`} />
                  <div className="font-display font-bold text-xs tracking-wide text-[#F7F6F2]">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-[#A3B18A] italic leading-tight">
                    {item.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HomeTrustBar;
