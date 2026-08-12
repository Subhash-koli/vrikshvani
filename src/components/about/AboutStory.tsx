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
            <Badge variant="lime">The Origin</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              Bridging Biology and Human Senses.
            </h2>
            <p className="text-[#A3B18A] text-base leading-relaxed">
              Vriksh Vani began with an observation: conventional plant care relies entirely on reactive human vision. By the time visual symptoms like leaf curl or chlorosis appear, a plant has often experienced days of unaddressed biophysical stress.
            </p>
            <p className="text-[#A3B18A] text-base leading-relaxed">
              We asked: <strong className="text-[#F7F6F2]">What if non-invasive thermal imaging and atmospheric gas sensing could reveal leaf transpiration dynamics before damage occurs?</strong> That inquiry launched our journey into Nature Intelligence.
            </p>
          </div>

          <Card className="p-8 space-y-4 border-[#8AD74C]/30 shadow-lime-glow bg-[#0F2B18]/40">
            <h3 className="font-display text-2xl font-bold text-[#8AD74C]">Our 3 Core Commitments</h3>
            <ul className="space-y-4 text-sm text-[#F7F6F2]">
              <li className="flex gap-3">
                <span className="text-[#8AD74C] font-mono font-bold">01.</span>
                <span><strong>Truth Before Growth:</strong> We share our hypotheses, experiments, and limitations openly without exaggerating what is proven.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8AD74C] font-mono font-bold">02.</span>
                <span><strong>Privacy-First by Architecture:</strong> No RGB cameras and no continuous room video recording. Edge computation in volatile RAM.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8AD74C] font-mono font-bold">03.</span>
                <span><strong>Artisan Durability:</strong> Handcrafted ceramic housings designed to be cherished alongside plants, avoiding disposable plastic electronics.</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
