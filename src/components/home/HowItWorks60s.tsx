import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Thermometer, Wind, Volume2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

const STEPS = [
  {
    step: '01',
    title: 'Thermal Sensing',
    subtitle: 'FLIR Lepton 3.5 thermal camera reads true leaf surface temperature non-invasively — not just ambient room air.',
    icon: Thermometer,
    color: 'text-[#E8D07C]',
    border: 'border-[#E8D07C]/30',
    bg: 'bg-[#E8D07C]/10',
  },
  {
    step: '02',
    title: 'Real-Time VPD Calculation',
    subtitle: 'NIH-01 computes Vapour Pressure Deficit every 60 seconds to detect transpiration stress before leaves roll or wilt.',
    icon: Wind,
    color: 'text-[#8AD74C]',
    border: 'border-[#8AD74C]/30',
    bg: 'bg-[#8AD74C]/10',
  },
  {
    step: '03',
    title: 'NTE™ Spoken Voice Concept',
    subtitle: 'On-device TinyML translates biometrics into natural, calm spoken language helping interpret what your plant may be experiencing.',
    icon: Volume2,
    color: 'text-emerald-400',
    border: 'border-emerald-400/30',
    bg: 'bg-emerald-400/10',
  },
];

export default function HowItWorks60s() {
  return (
    <section className="py-20 bg-[#0F2B18]/20 border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 space-y-12">
        <ScrollReveal>
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <Badge variant="lime">Simplicity First</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">
              How Vriksh Vani Works in 60 Seconds
            </h2>
            <p className="text-[#A3B18A] text-base">
              No complex charts needed unless you want them. NIH-01 transforms invisible plant biophysics into natural human speech.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={idx} stagger={idx}>
                <Card className={`p-6 space-y-4 border ${s.border} relative overflow-hidden group h-full`}>
                  <span className="absolute top-4 right-4 text-xs font-mono text-[#A3B18A]/40 font-bold">{s.step}</span>
                  <div className={`w-12 h-12 rounded-2xl ${s.bg} border ${s.border} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${s.color}`} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-xl text-[#F7F6F2]">{s.title}</h3>
                    <p className="text-xs text-[#A3B18A] leading-relaxed">{s.subtitle}</p>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Action Link */}
        <ScrollReveal delay={200}>
          <div className="text-center pt-2">
            <Link href="/vpd-guide" className="inline-flex items-center gap-2 text-sm text-[#8AD74C] hover:underline font-semibold">
              <span>Try the Interactive VPD Simulator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
