'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ShieldCheck, Award, Leaf } from 'lucide-react';

const PRESS = [
  { name: 'WIRED', quote: '"The future of indoor botanical technology."' },
  { name: 'TechCrunch', quote: '"Creating an entirely new category: Nature Intelligence."' },
  { name: 'Fast Company', quote: '"Design innovation of the year candidate."' },
  { name: 'Wallpaper*', quote: '"Kiln-fired ceramic meets cutting-edge biophysics."' },
  { name: 'Nature Biotech', quote: '"Non-invasive stomatal sensing done right."' },
];

export const HomeTrustBar: React.FC = () => {
  return (
    <section className="py-14 bg-[#030504] border-y border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 space-y-8">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/5 pb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8AD74C]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% On-Device SRAM Edge Privacy Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#E8D07C]">
              <Award className="w-4 h-4" />
              <span>Peer-Reviewed Transpiration Algorithm</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#A3B18A]">
              <Leaf className="w-4 h-4" />
              <span>Plastic-Free Artisan Packaging</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Press Quotes Ticker Grid */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {PRESS.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0F2B18]/30 border border-white/5 text-center space-y-1.5 hover:border-[#8AD74C]/30 transition-colors"
              >
                <div className="font-display font-bold text-sm tracking-wider text-[#F7F6F2]">
                  {item.name}
                </div>
                <div className="text-[11px] text-[#A3B18A] italic leading-tight">
                  {item.quote}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HomeTrustBar;
