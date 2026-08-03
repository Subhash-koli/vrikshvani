'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Calendar, CheckCircle2, Award, ShieldCheck, Milestone } from 'lucide-react';

const MILESTONES = [
  {
    quarter: 'Q1 2024',
    title: 'Initial Biophysics Research',
    desc: 'Research initiated at IISc Bengaluru studying leaf surface temperature correlation with VPD and stomatal conductance across 30 tropical species.',
    status: 'Completed',
  },
  {
    quarter: 'Q3 2024',
    title: 'Hardware Alpha Prototype',
    desc: 'Integration of FLIR Lepton 3.5 LWIR thermal camera with Bosch BME688 gas sensor on custom PCB architecture.',
    status: 'Completed',
  },
  {
    quarter: 'Q1 2025',
    title: 'NTE™ Model v1.0 & Patent Filing',
    desc: 'Developed quantized INT8 speech synthesis model running on ESP32-S3. Patent Pending filed (#202641012903) for non-invasive plant voice translation.',
    status: 'Completed',
  },
  {
    quarter: 'Q4 2025',
    title: 'Global Beta Programme (Batch 00)',
    desc: 'Deployed 150 Batch 00 hubs across 23 countries, collecting 1.2M+ daily biometric readings to validate species VPD targets.',
    status: 'Completed',
  },
  {
    quarter: 'Q3 2026',
    title: 'Batch 01 Production & Open Data Launch',
    desc: 'Stoneware ceramic production in Bengaluru + public release of the Vriksh Vani Open Data Programme datasets.',
    status: 'Current Milestone',
  },
];

export default function Timeline() {
  return (
    <Card className="p-6 md:p-8 space-y-6 border-[#8AD74C]/30 bg-[#0F2B18]/30">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#8AD74C]/10 border border-[#8AD74C]/30 flex items-center justify-center">
            <Milestone className="w-5 h-5 text-[#8AD74C]" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Development Timeline & Milestones</h3>
            <p className="text-xs text-[#A3B18A]">2024–2026 Research & Hardware Engineering Roadmap</p>
          </div>
        </div>
        <Badge variant="lime">Patent Pending #202641012903</Badge>
      </div>

      {/* Timeline Steps */}
      <div className="space-y-4 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-white/10">
        {MILESTONES.map((m, idx) => (
          <div key={idx} className="relative pl-9 space-y-1 group">
            <div className="absolute left-2.5 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#070B08] border-2 border-[#8AD74C] group-hover:scale-125 transition-transform" />
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-mono text-xs text-[#8AD74C] font-bold">{m.quarter}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3B18A] bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                {m.status}
              </span>
            </div>
            <h4 className="font-display font-bold text-base text-[#F7F6F2]">{m.title}</h4>
            <p className="text-xs text-[#A3B18A] leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
