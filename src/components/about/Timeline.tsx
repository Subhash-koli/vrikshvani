'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Milestone } from 'lucide-react';

const MILESTONES = [
  {
    quarter: 'Phase 01',
    title: 'The Seed Idea & Problem Discovery',
    desc: 'Observing the disconnect between visible plant appearance and invisible transpiration dynamics. Conceptualizing the Nature Intelligence framework.',
    status: 'Completed',
  },
  {
    quarter: 'Phase 02',
    title: 'Biophysics Research & Sensor Selection',
    desc: 'Investigating LWIR thermal imaging (FLIR Lepton), environmental humidity (SHT41), and atmospheric VOC gas sensing (BME688) as non-invasive biometrics.',
    status: 'Completed',
  },
  {
    quarter: 'Phase 03',
    title: 'NTE™ Neural Voice Architecture Concept',
    desc: 'Designing the Nature Translation Engine pipeline to map biophysical stress patterns to natural human expressions on ESP32-S3 TinyML compute.',
    status: 'Completed',
  },
  {
    quarter: 'Phase 04',
    title: 'Hardware Architecture & Ceramic Industrial Design',
    desc: 'Designing the slip-cast ceramic enclosure, thermal optical window cutouts, and acoustic chamber for NIH-01 prototype development.',
    status: 'Current Phase',
  },
  {
    quarter: 'Phase 05',
    title: 'Prototype Cohort & Open Research Validation',
    desc: 'Deploying initial bench prototypes with our founding tester community to collect real-world plant telemetry and validate early stress models.',
    status: 'Upcoming Milestone',
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
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Our Journey &amp; Development Roadmap</h3>
            <p className="text-xs text-[#A3B18A]">From Initial Question to Nature Intelligence Prototype</p>
          </div>
        </div>
        <Badge variant="lime">Open Research Journey</Badge>
      </div>

      {/* Timeline Steps */}
      <div className="space-y-4 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-white/10">
        {MILESTONES.map((m, idx) => (
          <div key={idx} className="relative pl-9 space-y-1 group">
            <div className="absolute left-2.5 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#070B08] border-2 border-[#8AD74C] group-hover:scale-125 transition-transform" />
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-mono text-xs text-[#8AD74C] font-bold">{m.quarter}</span>
              <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded border ${
                m.status === 'Current Phase'
                  ? 'text-[#8AD74C] bg-[#8AD74C]/20 border-[#8AD74C] font-bold shadow-[0_0_12px_rgba(138,215,76,0.3)]'
                  : 'text-[#A3B18A] bg-white/5 border-white/10'
              }`}>
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
