import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Activity, Eye, Brain, Heart, Sparkles, ShieldCheck } from 'lucide-react';

const STAGES = [
  {
    step: 'STAGE 01',
    name: 'SIGNAL',
    icon: Activity,
    title: 'Biological Signal Capture',
    desc: 'FLIR thermal arrays measure leaf temperature fluctuations; BME688 gas sensor captures VOCs.',
    color: 'text-[#E8D07C]',
    border: 'border-[#E8D07C]/30',
  },
  {
    step: 'STAGE 02',
    name: 'OBSERVATION',
    icon: Eye,
    title: 'Biophysical Telemetry',
    desc: 'Local SHT41 ambient sensors compute real-time Vapour Pressure Deficit (VPD) to monitor transpiration load.',
    color: 'text-[#8AD74C]',
    border: 'border-[#8AD74C]/30',
  },
  {
    step: 'STAGE 03',
    name: 'INTERPRETATION',
    icon: Brain,
    title: 'Edge TinyML Classification',
    desc: 'On-device ESP32-S3 compute evaluates candidate physiological states such as stomatal behavior, hydration-related stress, and thermal stress.',
    color: 'text-[#8AD74C]',
    border: 'border-[#8AD74C]/30',
  },
  {
    step: 'STAGE 04',
    name: 'UNDERSTANDING',
    icon: Sparkles,
    title: 'NTE™ Neural Voice Concept',
    desc: 'Translates biophysical states into natural human expressions across multiple language profiles.',
    color: 'text-[#E8D07C]',
    border: 'border-[#E8D07C]/30',
  },
  {
    step: 'STAGE 05',
    name: 'CONNECTION',
    icon: Heart,
    title: 'Empathy-Driven Awareness',
    desc: 'Transforms plant care from guesswork into an intuitive bond between human and living nature.',
    color: 'text-[#8AD74C]',
    border: 'border-[#8AD74C]/30',
  },
  {
    step: 'STAGE 06',
    name: 'CARE',
    icon: ShieldCheck,
    title: 'Actionable Guidance',
    desc: 'Translates measured signals into possible plant-care insights before physical wilting occurs.',
    color: 'text-[#8AD74C]',
    border: 'border-[#8AD74C]/30',
  },
];

export const NiosFrameworkDiagram: React.FC = () => {
  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="lime">Category Framework</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            The NIOS 6-Stage Pipeline.
          </h2>
          <p className="text-[#A3B18A] text-base md:text-lg">
            Nature Intelligence Operating System (NIOS) transforms raw bio-physics into audible human understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STAGES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Card key={idx} className={`p-6 space-y-4 border ${s.border} h-full flex flex-col justify-between`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#A3B18A]">{s.step}</span>
                    <Badge variant="glass" className="text-[10px]">{s.name}</Badge>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-white/10 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F7F6F2]">{s.title}</h3>
                  <p className="text-xs text-[#A3B18A] leading-relaxed">{s.desc}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NiosFrameworkDiagram;
