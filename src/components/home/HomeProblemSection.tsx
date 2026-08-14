'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { EyeOff, AlertTriangle, Droplets, ThermometerSnowflake, Activity } from 'lucide-react';

const MISALIGNMENTS = [
  {
    humanSee: 'Soil feels moist to touch',
    plantFeel: 'Root Hypoxia & Anoxia',
    detail: 'Overwatering can reduce oxygen availability around roots, impairing root respiration and function days before visible yellowing occurs.',
    icon: Droplets,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    bgColor: 'bg-amber-500/10',
    latency: 'Sub-surface stress builds silently',
  },
  {
    humanSee: 'Leaves look green and vibrant',
    plantFeel: 'Transpiration Shutdown',
    detail: 'High vapor pressure deficit forces stomatal closure to preserve moisture, slowing photosynthesis despite green appearance.',
    icon: ThermometerSnowflake,
    color: 'text-sky-400',
    borderColor: 'border-sky-500/20',
    bgColor: 'bg-sky-500/10',
    latency: 'Stomatal closure precedes wilting',
  },
  {
    humanSee: 'Plant droops suddenly',
    plantFeel: 'Thermal Stress Response',
    detail: 'Visual wilting is an emergency state. Thermal surface shifts occur earlier as transpiration cooling diminishes.',
    icon: Activity,
    color: 'text-rose-400',
    borderColor: 'border-rose-500/20',
    bgColor: 'bg-rose-500/10',
    latency: 'Thermal shifts lead visual symptoms',
  },
];

export const HomeProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#070B08] relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#E8D07C]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10 space-y-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="gold" className="gap-1.5">
              <EyeOff className="w-3.5 h-3.5" /> Our Philosophy
            </Badge>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Plants respond continuously.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D07C] to-[#A3B18A]">
                Humans just need the right interface.
              </span>
            </h2>

            <p className="text-[#A3B18A] text-base sm:text-lg leading-relaxed">
              Plants continuously exchange signals with their environment and exhibit measurable physiological responses. Vriksh Vani is exploring whether some of those signals can be measured, interpreted, and communicated.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Misalignment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MISALIGNMENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} stagger={idx}>
                <Card className={`p-8 space-y-6 border ${item.borderColor} nidl-glass-hover h-full flex flex-col justify-between`}>
                  <div className="space-y-4">
                    {/* Header Pill */}
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl ${item.bgColor} border ${item.borderColor} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-[#A3B18A] uppercase">
                        Case #0{idx + 1}
                      </span>
                    </div>

                    {/* What Human Sees vs What Plant Feels */}
                    <div className="space-y-3 pt-2">
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono text-[#A3B18A]/60 uppercase tracking-wider block">
                          Human Perception
                        </span>
                        <p className="text-sm font-semibold text-[#F7F6F2]/70 line-through decoration-red-500/50">
                          &ldquo;{item.humanSee}&rdquo;
                        </p>
                      </div>

                      <div className="space-y-1 pt-1 border-t border-white/5">
                        <span className="text-[11px] font-mono text-[#8AD74C] uppercase tracking-wider block font-bold">
                          Biophysical Reality
                        </span>
                        <p className={`text-lg font-display font-bold ${item.color}`}>
                          {item.plantFeel}
                        </p>
                      </div>
                    </div>

                    {/* Detail Explanation */}
                    <p className="text-xs text-[#A3B18A] leading-relaxed pt-2">
                      {item.detail}
                    </p>
                  </div>

                  {/* Warning Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-[#A3B18A]/70">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item.latency}</span>
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

export default HomeProblemSection;
