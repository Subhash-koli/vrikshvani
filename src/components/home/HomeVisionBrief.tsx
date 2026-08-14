import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Heart, Activity, Cpu } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const HomeVisionBrief: React.FC = () => {
  return (
    <section className="py-20 bg-[#070B08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="gold">The Cause & Philosophy</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              Plants are not silent. <span className="text-[#8AD74C]">We just forgot how to listen.</span>
            </h2>
            <p className="text-[#A3B18A] text-base md:text-lg">
              For 3.8 billion years, flora developed intricate thermal and biochemical signalling networks. Vriksh Vani bridges biology and technology to make plant signals interpretable to humans.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal stagger={0}>
            <Card className="space-y-4 h-full">
              <div className="w-12 h-12 rounded-xl bg-[#8AD74C]/10 border border-[#8AD74C]/30 flex items-center justify-center">
                <Activity className="w-6 h-6 text-[#8AD74C]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#F7F6F2]">Thermal Transpiration</h3>
              <p className="text-sm text-[#A3B18A] leading-relaxed">
                Investigating how FLIR thermal sensors can measure sub-degree surface temperature shifts on leaf surfaces to detect stomatal stress.
              </p>
              <div className="pt-2">
                <a
                  href="/nature-intelligence/research/note-001"
                  className="text-xs font-mono text-[#8AD74C] hover:underline inline-flex items-center gap-1"
                >
                  Read Research Note #001 &rarr;
                </a>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal stagger={1}>
            <Card className="space-y-4 h-full">
              <div className="w-12 h-12 rounded-xl bg-[#E8D07C]/10 border border-[#E8D07C]/30 flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#E8D07C]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#F7F6F2]">Empathetic Speech Engine</h3>
              <p className="text-sm text-[#A3B18A] leading-relaxed">
                NTE™ is designed to map biophysical states into natural human expressions, translating complex sensor telemetry into understandable plant perspectives.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal stagger={2}>
            <Card className="space-y-4 h-full">
              <div className="w-12 h-12 rounded-xl bg-[#8AD74C]/10 border border-[#8AD74C]/30 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-[#8AD74C]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#F7F6F2]">Zero-Cloud Edge AI</h3>
              <p className="text-sm text-[#A3B18A] leading-relaxed">
                ESP32-S3 TinyML compute is designed to run inference directly inside the ceramic hub. Thermal frames are processed in volatile RAM and immediately purged.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HomeVisionBrief;
