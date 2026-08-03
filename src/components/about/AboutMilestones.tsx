'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const AboutMilestones: React.FC = () => {
  const milestones = [
    { year: "2024", title: "Lab Proof of Concept", desc: "First FLIR thermal leaf transpiration reading validated at IISc Bengaluru." },
    { year: "2025", title: "Artisanal Ceramic Shell", desc: "Crafted first slip-cast ceramic prototype with optical thermal window." },
    { year: "2026 Q1", title: "NTE™ Voice Synthesis", desc: "Trained local TinyML NPU voice engine across 8 native languages." },
    { year: "2026 Q4", title: "Batch 01 Global Launch", desc: "Shipping first 500 numbered Founding Member hardware hubs." },
  ];

  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="lime">Company Roadmap</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Our Milestones & History.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <Card key={idx} className="space-y-3 relative">
              <span className="font-mono text-2xl font-bold text-[#8AD74C]">{m.year}</span>
              <h3 className="font-display text-lg font-semibold text-[#F7F6F2]">{m.title}</h3>
              <p className="text-xs text-[#A3B18A] leading-relaxed">{m.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMilestones;
