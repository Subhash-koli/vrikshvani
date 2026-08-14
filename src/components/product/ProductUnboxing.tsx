import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Box, Cable, FileText, Award, Leaf } from 'lucide-react';

const BOX_ITEMS = [
  {
    icon: Box,
    name: 'NIH-01 Hub Unit Concept',
    desc: 'Kiln-fired biophilic ceramic shell target with integrated thermal optics, sensors & speaker.',
    badge: 'Design Target',
  },
  {
    icon: Cable,
    name: 'Woven USB-C Cable (2m)',
    desc: 'Targeting braided recycled nylon cable matching your chosen ceramic colorway.',
    badge: 'Target 100% Recycled',
  },
  {
    icon: Award,
    name: 'Founding Member Certificate',
    desc: 'Numbered Founding Member certificate printed on FSC-certified paper.',
    badge: 'Cohort Allocation',
  },
  {
    icon: FileText,
    name: 'Quickstart Care Guide',
    desc: 'Illustrated botanical guide covering sensor placement, VPD basics, and NTE™ voice setup.',
    badge: 'Soy Ink Print Target',
  },
  {
    icon: Leaf,
    name: 'Zero-Plastic Packaging Concept',
    desc: 'Targeting custom-molded bamboo & sugarcane pulp tray designed for home compostability.',
    badge: 'Target Biodegradable',
  },
];

export const ProductUnboxing: React.FC = () => {
  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="lime">Proposed Product Experience</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Target Packaging &amp; Unboxing Concept.
          </h2>
          <p className="text-[#A3B18A] text-base md:text-lg">
            Conceptual packaging and accessory direction targeted for the future NIH-01 prototype cohort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOX_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#8AD74C]" />
                    </div>
                    <Badge variant="glass" className="text-[10px]">{item.badge}</Badge>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F7F6F2]">{item.name}</h3>
                  <p className="text-xs text-[#A3B18A] leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductUnboxing;
