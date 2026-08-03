'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Quote } from 'lucide-react';

export const AboutFounder: React.FC = () => {
  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="p-8 space-y-6 border-[#8AD74C]/30 shadow-2xl">
            <Quote className="w-10 h-10 text-[#8AD74C]/40" />
            <blockquote className="font-display text-lg md:text-xl font-medium text-[#F7F6F2] leading-relaxed italic">
              "We spent a century treating technology as something that separates us from nature. At Vriksh Vani, we build technology whose sole purpose is to make you pause, listen, and care for the living plant beside you."
            </blockquote>
            <div className="pt-4 border-t border-white/10">
              <div className="font-display font-bold text-lg text-[#8AD74C]">Siddhant Tiwari</div>
              <div className="text-xs text-[#A3B18A] font-mono">Founder & CEO, Vriksh Vani</div>
            </div>
          </Card>

          <div className="space-y-6">
            <Badge variant="lime">Founder & Leadership</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              Siddhant Tiwari
            </h2>
            <p className="text-[#A3B18A] text-base leading-relaxed">
              Former hardware lead and embedded systems architect with over a decade of experience in thermal imaging and low-power Edge NPU design.
            </p>
            <p className="text-[#A3B18A] text-base leading-relaxed">
              Passionate botanist managing a personal collection of 150+ rare tropical species in Bengaluru, driving Vriksh Vani's mission to harmonize technology and plant life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
