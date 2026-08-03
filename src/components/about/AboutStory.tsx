'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const AboutStory: React.FC = () => {
  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="lime">Origin Story</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              Born in a Bengaluru Bio-Physics Lab.
            </h2>
            <p className="text-[#A3B18A] text-base leading-relaxed">
              When founder Siddhant Tiwari noticed his rare Monstera dying despite following every online care guide, he realized traditional soil probes only measure external dirt — not internal plant physiology.
            </p>
            <p className="text-[#A3B18A] text-base leading-relaxed">
              Partnering with bio-physicists at IISc Bengaluru, they discovered that leaf transpiration creates micro-kelvin surface temperature signatures. The NIH-01 was born to decode those signatures into human speech.
            </p>
          </div>

          <Card className="p-8 space-y-4 border-[#8AD74C]/30 shadow-lime-glow">
            <h3 className="font-display text-2xl font-bold text-[#8AD74C]">The 3 Core Guiding Axioms</h3>
            <ul className="space-y-4 text-sm text-[#F7F6F2]">
              <li className="flex gap-3">
                <span className="text-[#8AD74C] font-mono font-bold">01.</span>
                <span><strong>Plants Are Sentient Organisms:</strong> They communicate biophysically; we simply need the sensitivity to listen.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8AD74C] font-mono font-bold">02.</span>
                <span><strong>Zero Privacy Compromise:</strong> No video cameras, no cloud image harvesting. Local SRAM frame purging is mandatory.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8AD74C] font-mono font-bold">03.</span>
                <span><strong>Intergenerational Durability:</strong> Slip-cast ceramic housings engineered to outlast disposable plastic gadgets.</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
