'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Quote, Sparkles } from 'lucide-react';

export const AboutFounder: React.FC = () => {
  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="p-8 space-y-6 border-[#8AD74C]/30 shadow-2xl bg-[#0F2B18]/30">
            <Quote className="w-10 h-10 text-[#8AD74C]/40" />
            <blockquote className="font-display text-lg md:text-xl font-medium text-[#F7F6F2] leading-relaxed italic">
              &ldquo;We spent a century building technology that separates us from nature. Vriksh Vani is an attempt to build technology that does the opposite: technology that makes us pause, listen, and understand the living systems around us.&rdquo;
            </blockquote>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="font-display font-bold text-lg text-[#8AD74C]">Subhash Koli</div>
                <div className="text-xs text-[#A3B18A] font-mono">Founder, Vriksh Vani</div>
              </div>
              <Badge variant="lime" className="text-[10px] font-mono">
                Bengaluru, India
              </Badge>
            </div>
          </Card>

          <div className="space-y-6">
            <Badge variant="gold" className="gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Founder &amp; Vision
            </Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              The Question That Started Vriksh Vani
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#A3B18A] leading-relaxed">
              <p>
                Vriksh Vani started from a simple, nagging question: <strong className="text-[#F7F6F2]">Why do we only notice a plant is struggling when it&apos;s already wilting or yellowing?</strong>
              </p>
              <p>
                Plants are constantly responding to light, water, temperature, and atmospheric conditions through subtle physical and chemical signals. In nature, nothing is truly silent &mdash; we just lack the tools to interpret the language of living systems.
              </p>
              <p>
                Rather than building another generic moisture meter or disposable plastic gadget, Subhash started Vriksh Vani as an open exploration of <strong className="text-[#8AD74C]">Nature Intelligence</strong> &mdash; exploring how thermal biometrics, environmental sensing, and on-device AI can help humans build genuine understanding of living systems.
              </p>
              <p>
                The technology is the bridge. <strong className="text-[#F7F6F2]">Understanding is the destination.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
