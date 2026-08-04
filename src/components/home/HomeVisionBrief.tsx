import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Heart, Activity, Cpu } from 'lucide-react';

export const HomeVisionBrief: React.FC = () => {
  return (
    <section className="py-20 bg-[#070B08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gold">The Cause & Philosophy</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Plants are not silent. <span className="text-[#8AD74C]">We just forgot how to listen.</span>
          </h2>
          <p className="text-[#A3B18A] text-base md:text-lg">
            For 3.8 billion years, flora developed intricate thermal and biochemical signalling networks. Vriksh Vani bridges biology and technology to make plant consciousness audible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#8AD74C]/10 border border-[#8AD74C]/30 flex items-center justify-center">
              <Activity className="w-6 h-6 text-[#8AD74C]" />
            </div>
            <h3 className="font-display text-xl font-semibold text-[#F7F6F2]">Thermal Transpiration</h3>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              FLIR thermal sensors measure micro-kelvin fluctuations on leaf surfaces to detect stomatal stress hours before wilting occurs.
            </p>
          </Card>

          <Card className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8D07C]/10 border border-[#E8D07C]/30 flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#E8D07C]" />
            </div>
            <h3 className="font-display text-xl font-semibold text-[#F7F6F2]">Emotional Speech Engine</h3>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              NTE™ maps biophysical states to natural human expressions across 8 native languages, giving your Monstera or Ficus a distinct personality.
            </p>
          </Card>

          <Card className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#8AD74C]/10 border border-[#8AD74C]/30 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-[#8AD74C]" />
            </div>
            <h3 className="font-display text-xl font-semibold text-[#F7F6F2]">Zero-Cloud Edge AI</h3>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              ARM Cortex-M4 NPU runs TinyML inference directly inside the ceramic hub. Thermal frames are processed in volatile RAM and immediately purged.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeVisionBrief;
