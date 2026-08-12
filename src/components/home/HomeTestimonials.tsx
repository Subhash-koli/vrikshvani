'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Compass, Lightbulb, ShieldCheck, HeartHandshake } from 'lucide-react';

const COMMUNITY_PILLARS = [
  {
    title: 'Biophysical Stress Sensing',
    icon: Lightbulb,
    desc: 'Exploring whether thermal leaf cooling and micro-climates can reveal plant stress hours before physical wilting occurs.',
    badge: 'Research Hypothesis',
    color: 'text-[#E8D07C]',
  },
  {
    title: 'Zero-Video Privacy Architecture',
    icon: ShieldCheck,
    desc: 'Designing hardware where thermal frames are processed strictly in volatile RAM and immediately overwritten.',
    badge: 'Privacy Standard',
    color: 'text-[#8AD74C]',
  },
  {
    title: 'Human–Plant Connection',
    icon: HeartHandshake,
    desc: 'Translating invisible plant physiology into empathetic, natural language to help humans care for living systems.',
    badge: 'Category Vision',
    color: 'text-emerald-400',
  },
];

export const HomeTestimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#030504] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#E8D07C]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10 space-y-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="gold" className="gap-1.5">
              <Compass className="w-3.5 h-3.5" /> Founding Principles
            </Badge>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Built on radical honesty,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D07C] to-[#8AD74C]">
                guided by science.
              </span>
            </h2>

            <p className="text-[#A3B18A] text-base sm:text-lg leading-relaxed">
              We are at the beginning of the Nature Intelligence journey. Here is the commitment we make to our research community.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMMUNITY_PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={idx} stagger={idx}>
                <Card className="p-8 space-y-6 border-white/10 nidl-glass-hover h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-white/10 flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${p.color}`} />
                      </div>
                      <span className="text-[10px] font-mono text-[#8AD74C] bg-[#0F2B18] px-2 py-0.5 rounded border border-[#8AD74C]/20">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-[#F7F6F2]">
                      {p.title}
                    </h3>

                    <p className="text-sm text-[#A3B18A] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A3B18A]">
                    <span>Vriksh Vani Charter</span>
                    <span className="text-[#8AD74C]">Truth Before Growth</span>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
