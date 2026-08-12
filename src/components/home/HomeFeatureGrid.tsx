'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import {
  Thermometer,
  Wind,
  Volume2,
  Cpu,
  ShieldCheck,
  Globe,
  BookOpen,
  Sparkles,
} from 'lucide-react';

const FEATURES = [
  {
    title: 'FLIR Thermal Biometrics',
    desc: 'Targeting FLIR Lepton 3.5 thermal array to read true leaf surface temperature non-invasively without physical contact.',
    icon: Thermometer,
    tag: 'Planned Sensor',
    color: 'text-[#E8D07C]',
  },
  {
    title: 'Bosch Quad-Gas Sensing',
    desc: 'Designing with BME688 AI gas sensor to measure VOCs, CO2 proxies, and organic transpiration compounds.',
    icon: Wind,
    tag: 'Planned Sensor',
    color: 'text-sky-400',
  },
  {
    title: 'NTE Spoken Voice Engine',
    desc: 'Translating biophysical readings into calm voice interpretations across multiple languages on-device.',
    icon: Volume2,
    tag: 'AI Concept',
    color: 'text-[#8AD74C]',
  },
  {
    title: 'TinyML Edge Compute',
    desc: 'On-device neural inference designed for low latency with zero dependence on cloud servers or constant internet.',
    icon: Cpu,
    tag: 'Design Target',
    color: 'text-emerald-400',
  },
  {
    title: '100% Volatile SRAM Privacy',
    desc: 'Thermal frame buffers exist strictly in volatile RAM. No visual images or audio are ever recorded or stored.',
    icon: ShieldCheck,
    tag: 'Privacy Standard',
    color: 'text-[#8AD74C]',
  },
  {
    title: 'Matter & Smart Home Vision',
    desc: 'Designed to integrate with Home Assistant, Apple Home, Google Home, and Alexa via Thread and Wi-Fi mesh protocols.',
    icon: Globe,
    tag: 'Roadmap Integration',
    color: 'text-[#E8D07C]',
  },
  {
    title: 'Species Research Library',
    desc: 'Building species-specific biophysical profiles for tropicals, succulents, and indoor house plants step by step.',
    icon: BookOpen,
    tag: 'Ongoing Research',
    color: 'text-amber-400',
  },
  {
    title: 'Kiln-Fired Artisan Ceramic',
    desc: 'Designed with slip-cast biophilic ceramic fired at high temperatures to blend into living spaces.',
    icon: Sparkles,
    tag: 'Design Craft',
    color: 'text-rose-400',
  },
];

export const HomeFeatureGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8AD74C]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10 space-y-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="lime">Core Capabilities Vision</Badge>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Engineered for absolute clarity,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AD74C] to-[#E8D07C]">
                crafted for beauty.
              </span>
            </h2>

            <p className="text-[#A3B18A] text-base sm:text-lg leading-relaxed">
              Every planned component inside the NIH-01 hub concept is chosen to respect plant biology and human privacy.
            </p>
          </div>
        </ScrollReveal>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, idx) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={idx} stagger={idx % 4}>
                <Card className="p-6 space-y-4 border-white/10 nidl-glass-hover h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-white/10 flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${f.color}`} />
                      </div>
                      <span className="text-[10px] font-mono text-[#8AD74C] uppercase tracking-wider bg-[#0F2B18] px-2 py-0.5 rounded border border-[#8AD74C]/20">
                        {f.tag}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-lg text-[#F7F6F2]">
                        {f.title}
                      </h3>
                      <p className="text-xs text-[#A3B18A] leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
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

export default HomeFeatureGrid;
