import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Check, X, Sparkles } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    feature: 'Sensing Technology',
    traditional: 'Soil Probe (Moisture only)',
    appOnly: 'Manual Reminders (No Sensors)',
    vrikshVani: 'FLIR Thermal + Bosch BME688 VOC + Leaf Delta (Target)',
    highlight: true,
  },
  {
    feature: 'Plant Stress Detection',
    traditional: 'Post-wilting (Soil dried out)',
    appOnly: 'Calendar Guesswork',
    vrikshVani: 'Pre-wilting Transpiration Shift (Research Hypothesis)',
    highlight: true,
  },
  {
    feature: 'Voice & Emotion Translation',
    traditional: '❌ None',
    appOnly: '❌ None',
    vrikshVani: '✅ NTE™ Neural Spoken Voice Concept (8 Languages Target)',
    highlight: true,
  },
  {
    feature: 'Privacy & Security',
    traditional: 'Local analog',
    appOnly: 'Cloud App Data',
    vrikshVani: '✅ Volatile SRAM Frame Overwrite Architecture',
    highlight: false,
  },
  {
    feature: 'Smart Home Integration',
    traditional: '❌ None',
    appOnly: '❌ None',
    vrikshVani: '✅ Home Assistant, Matter & BLE 5.0 (Planned)',
    highlight: false,
  },
  {
    feature: 'Aesthetic & Craftsmanship',
    traditional: 'Industrial Plastic Probe',
    appOnly: 'Screen Only',
    vrikshVani: 'Handcrafted Kiln-Fired Ceramic Shell Target',
    highlight: true,
  },
];

export const ProductComparisonTable: React.FC = () => {
  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="lime">Category Comparison</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Why Nature Intelligence Changes Everything.
          </h2>
          <p className="text-[#A3B18A] text-base md:text-lg">
            Compare NIH-01 target hardware capabilities against traditional soil probes and reminder apps.
          </p>
        </div>

        <Card className="p-0 overflow-hidden border-[#8AD74C]/30 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#0F2B18] border-b border-white/10 text-xs font-mono uppercase tracking-wider text-[#A3B18A]">
                  <th className="p-5 font-semibold text-[#F7F6F2]">Capability</th>
                  <th className="p-5 opacity-60">Soil Moisture Probe</th>
                  <th className="p-5 opacity-60">Plant Reminder Apps</th>
                  <th className="p-5 text-[#8AD74C] font-bold bg-[#8AD74C]/10 border-x border-[#8AD74C]/20 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#8AD74C]" /> Vriksh Vani NIH-01 (Concept Target)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className={row.highlight ? 'bg-white/[0.02]' : ''}>
                    <td className="p-5 font-display font-semibold text-[#F7F6F2]">
                      {row.feature}
                    </td>
                    <td className="p-5 text-[#A3B18A] text-xs">
                      {row.traditional}
                    </td>
                    <td className="p-5 text-[#A3B18A] text-xs">
                      {row.appOnly}
                    </td>
                    <td className="p-5 text-xs font-semibold text-[#8AD74C] bg-[#8AD74C]/5 border-x border-[#8AD74C]/20">
                      {row.vrikshVani}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-[#030504] border-t border-white/5 text-center text-xs text-[#A3B18A]">
            * Note: Vriksh Vani specifications represent target architecture and research hypotheses currently in prototype validation.
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProductComparisonTable;
