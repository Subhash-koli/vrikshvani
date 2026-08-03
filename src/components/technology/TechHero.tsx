'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Cpu, ShieldCheck, Zap } from 'lucide-react';

export const TechHero: React.FC = () => {
  return (
    <section className="pt-36 pb-24 bg-[#070B08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <Badge variant="gold">Embedded Intelligence</Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2]">
            ARM Cortex-M4 TinyML Local Neural Processing.
          </h1>
          <p className="text-[#A3B18A] text-base md:text-lg">
            Sub-45 millisecond local inference with zero video streaming and zero cloud latency dependence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="space-y-4">
            <Cpu className="w-8 h-8 text-[#8AD74C]" />
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">120MHz NPU Micro-Core</h3>
            <p className="text-xs text-[#A3B18A]">Quantized TinyML neural models run directly on internal hardware silicon.</p>
          </Card>
          <Card className="space-y-4">
            <ShieldCheck className="w-8 h-8 text-[#E8D07C]" />
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Volatile RAM Overwrite</h3>
            <p className="text-xs text-[#A3B18A]">Thermal frames are processed in SRAM and overwritten 20 times per second.</p>
          </Card>
          <Card className="space-y-4">
            <Zap className="w-8 h-8 text-[#8AD74C]" />
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Open Python / TS SDK</h3>
            <p className="text-xs text-[#A3B18A]">Connect RAW telemetry streams to custom Home Assistant or research pipelines.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechHero;
