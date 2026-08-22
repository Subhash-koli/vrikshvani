import { Suspense } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Wind, Thermometer, Droplets } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VPD Guide — Understanding Vapour Pressure Deficit | Vriksh Vani',
  description: 'The definitive beginner-to-expert guide to Vapour Pressure Deficit (VPD): what it is, how to calculate it, why it matters for plant care, and how NIH-01 monitors it in real time.',
};

const vpdRanges = [
  { range: '< 0.4 kPa', label: 'Too Low', color: 'text-blue-400', desc: 'Plant unable to transpire. Stomata effectively closed. Nutrient uptake halted. Risk of fungal disease on foliage.' },
  { range: '0.4–0.8 kPa', label: 'Optimal (High Humidity)', color: 'text-[#8AD74C]', desc: 'Ideal for high-humidity tropical species (Orchids, Calathea, Ferns). Gentle transpiration and steady nutrient flow.' },
  { range: '0.8–1.2 kPa', label: 'Optimal (General)', color: 'text-[#8AD74C]', desc: 'The target range for most common indoor plants including Monstera, Pothos, Peace Lily. Balanced transpiration.' },
  { range: '1.2–1.6 kPa', label: 'Elevated', color: 'text-[#E8D07C]', desc: 'Acceptable for drought-tolerant species. Tropical plants begin to show stomatal stress responses. Monitor closely.' },
  { range: '> 1.6 kPa', label: 'Critical Stress', color: 'text-red-400', desc: 'Plants lose water faster than roots can supply. Wilting, leaf curl, and tip burn risk. Immediate intervention required.' },
];

import dynamic from 'next/dynamic';

const VpdCalculator = dynamic(() => import('@/components/vpd/VpdCalculator'), {
  loading: () => <div className="h-64 rounded-2xl bg-[#0F2B18]/20 animate-pulse border border-white/5" />,
});

export default function VpdGuidePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="lime">VPD Guide</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              The Complete VPD Guide for Plant Care
            </h1>
            <p className="text-[#A3B18A]">Everything you need to understand Vapour Pressure Deficit — and why it is one of the most significant environmental metrics for understanding indoor plant transpiration.</p>
          </div>

          <Card className="p-8 space-y-4">
            <div className="flex items-center gap-3">
              <Wind className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">What Is VPD?</h2>
            </div>
            <p className="text-[#A3B18A] leading-relaxed">
              Vapour Pressure Deficit (VPD) is the difference between the amount of moisture in the air and the maximum moisture the air can hold at a given temperature. It is expressed in kilopascals (kPa) and is the single most accurate metric for understanding how hard a plant has to work to transpire.
            </p>
            <p className="text-[#A3B18A] leading-relaxed">
              Unlike relative humidity alone — which tells you nothing about temperature — VPD combines temperature and humidity into a single number that directly describes the atmospheric &apos;pull&apos; on your plant&apos;s leaves.
            </p>
            <div className="bg-[#030504] border border-white/5 rounded-xl p-4 font-mono text-sm text-[#A3B18A]">
              <p className="text-[#8AD74C]">// Simplified VPD formula</p>
              <p>VPD = SVP × (1 – RH/100)</p>
              <p>SVP = 0.6108 × e^(17.27 × T / (T + 237.3))</p>
              <p className="text-[#A3B18A] mt-1">Where T = temperature (°C), RH = relative humidity (%)</p>
            </div>
          </Card>

          {/* Interactive Calculator */}
          <Suspense fallback={<div className="h-64 rounded-2xl bg-[#0F2B18]/20 animate-pulse border border-white/5" />}>
            <VpdCalculator />
          </Suspense>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Thermometer className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">VPD Ranges & Plant Response</h2>
            </div>
            <div className="space-y-3">
              {vpdRanges.map((r, idx) => (
                <Card key={idx} className="flex items-start gap-4">
                  <div className="shrink-0">
                    <p className={`font-mono text-sm font-bold ${r.color}`}>{r.range}</p>
                    <p className={`text-xs font-mono ${r.color}`}>{r.label}</p>
                  </div>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{r.desc}</p>
                </Card>
              ))}
            </div>
            <div className="p-3 rounded-xl bg-[#070B08]/80 border border-[#E8D07C]/20 text-xs text-[#A3B18A] leading-relaxed">
              <strong className="text-[#E8D07C]">Scientific note:</strong> VPD ranges above are general guidelines derived from published horticultural literature and plant physiology research. Optimal ranges vary significantly by species, acclimatisation history, growth stage, substrate, and environmental context. Always cross-reference with species-specific data when available.
            </div>
          </div>

          <Card className="p-8 space-y-4">
            <div className="flex items-center gap-3">
              <Droplets className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">How NIH-01 Target Architecture Monitors VPD</h2>
            </div>
            <p className="text-[#A3B18A] leading-relaxed">
              The NIH-01 target hardware design combines precision SHT41 humidity/temperature sensing (&plusmn;1.8% RH, &plusmn;0.2&deg;C) with FLIR thermal optics to evaluate two correlated values: ambient VPD and leaf-surface VPD. The thermal delta (&Delta;T) between these values serves as an empirical indicator of transpiration rate.
            </p>
            <p className="text-[#A3B18A] leading-relaxed">
              In prototype benchtop validation, continuous telemetry is processed locally. When VPD deviates from target species parameters, the NTE™ neural voice model expresses physiological stress indicators.
            </p>
          </Card>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/nature-intelligence/whitepaper">
              <Button variant="outline">Read the Full Whitepaper</Button>
            </Link>
            <Link href="/species">
              <Button variant="primary">Browse Species VPD Profiles →</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
