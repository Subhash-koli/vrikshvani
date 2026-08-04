'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Star, Quote, Leaf } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Dr. Ananya Roy',
    role: 'Botanical Researcher, IISc Bengaluru',
    quote: 'NIH-01 proved that thermal transpiration variance correlates directly with root stress 36 hours before visual symptoms. It is a game-changer for plant biophysics.',
    plantCount: '45+ Plants',
    badge: 'Batch 00 Tester',
  },
  {
    name: 'Marcus Vance',
    role: 'Rare Monstera Collector, London',
    quote: 'Hearing my Monstera Variegata tell me its air humidity was too low saved a $2,000 leaf from crisping. The natural spoken voice is magical.',
    plantCount: '120+ Rare Aroids',
    badge: 'Founding Member',
  },
  {
    name: 'Elena Rostova',
    role: 'Biophilic Interior Designer, SF',
    quote: 'The ceramic craftsmanship is extraordinary. It feels like an art piece on the sideboard rather than a tech gadget. The privacy design gave my clients complete confidence.',
    plantCount: '30+ Studio Plants',
    badge: 'Design Guild',
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
              <Quote className="w-3.5 h-3.5" /> Early Tester Dispatches
            </Badge>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Loved by botanists, trusted by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D07C] to-[#8AD74C]">
                plant parents worldwide.
              </span>
            </h2>

            <p className="text-[#A3B18A] text-base sm:text-lg leading-relaxed">
              Read how early Batch 00 prototype testers transformed their relationship with their indoor gardens.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollReveal key={idx} stagger={idx}>
              <Card className="p-8 space-y-6 border-white/10 nidl-glass-hover h-full flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Stars & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#E8D07C] text-[#E8D07C]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-[#8AD74C] bg-[#0F2B18] px-2 py-0.5 rounded border border-[#8AD74C]/20">
                      {t.badge}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-[#F7F6F2]/90 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-display font-bold text-sm text-[#F7F6F2]">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-[#A3B18A]">
                      {t.role}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#E8D07C]">
                    <Leaf className="w-3.5 h-3.5" />
                    <span>{t.plantCount}</span>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
