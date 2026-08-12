import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Check,
  X,
  AlertTriangle,
  Cpu,
  Mic,
  Camera,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'NIH-01 Concept vs Traditional Monitors | Vriksh Vani',
  description: 'Compare NIH-01 concept with traditional soil probes and reminder apps. Explores non-invasive thermal optics, quad-gas sensing, and NTE™ voice AI.',
  keywords: ['NIH-01 vs soil probes', 'plant sensor concept comparison', 'plant monitor comparison'],
  alternates: {
    canonical: 'https://www.vrikshvani.com/product/comparison',
  },
  openGraph: {
    title: 'NIH-01 Concept vs Traditional Monitors | Vriksh Vani',
    description: 'Side-by-side concept comparison: non-invasive thermal biometrics vs standard soil moisture probes.',
    url: 'https://www.vrikshvani.com/product/comparison',
    siteName: 'Vriksh Vani',
    images: [{ url: 'https://www.vrikshvani.com/og?title=NIH-01%20vs%20Competitors&subtitle=Side-by-Side%20Feature%20Comparison' }],
  },
};

function CellYes({ label }: { label: string }) {
  return (
    <span className="flex items-start gap-2 text-[#8AD74C]">
      <Check className="w-4 h-4 mt-0.5 shrink-0" />
      <span>{label}</span>
    </span>
  );
}

function CellNo({ label }: { label: string }) {
  return (
    <span className="flex items-start gap-2 text-[#F7F6F2]/40">
      <X className="w-4 h-4 mt-0.5 shrink-0 text-red-400" />
      <span>{label}</span>
    </span>
  );
}

function CellWarn({ label }: { label: string }) {
  return (
    <span className="flex items-start gap-2 text-[#E8D07C]">
      <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
      <span>{label}</span>
    </span>
  );
}

function CellPrice({ label, highlight }: { label: string; highlight?: boolean }) {
  return (
    <span className={`font-mono font-semibold ${highlight ? 'text-[#8AD74C]' : 'text-[#F7F6F2]/60'}`}>
      {label}
    </span>
  );
}

const comparisonRows = [
  {
    feature: 'Sensing Method',
    nih01: <CellYes label="FLIR Thermal + Quad-Gas (Target)" />,
    miFlora: <CellNo label="Soil EC probe" />,
    sustee: <CellNo label="Water capillary" />,
    generic: <CellNo label="Soil EC probe" />,
  },
  {
    feature: 'Plant Voice Synthesis',
    nih01: <CellYes label="NTE™ Neural Voice Concept" />,
    miFlora: <CellNo label="None" />,
    sustee: <CellNo label="None" />,
    generic: <CellNo label="None" />,
  },
  {
    feature: 'Thermal Array Optics',
    nih01: <CellYes label="FLIR Lepton 3.5 Target" />,
    miFlora: <CellNo label="Not included" />,
    sustee: <CellNo label="Not included" />,
    generic: <CellNo label="Not included" />,
  },
  {
    feature: 'VOC / Gas Analysis',
    nih01: <CellYes label="Bosch BME688 Target" />,
    miFlora: <CellNo label="None" />,
    sustee: <CellNo label="None" />,
    generic: <CellNo label="None" />,
  },
  {
    feature: 'VPD Calculation',
    nih01: <CellYes label="Calculated Real-Time" />,
    miFlora: <CellNo label="Not supported" />,
    sustee: <CellNo label="Not supported" />,
    generic: <CellNo label="Not supported" />,
  },
  {
    feature: 'On-Device AI Engine',
    nih01: <CellYes label="ESP32-S3 TinyML Compute" />,
    miFlora: <CellNo label="None" />,
    sustee: <CellNo label="None" />,
    generic: <CellNo label="None" />,
  },
  {
    feature: 'Cloud Dependency',
    nih01: <CellYes label="Local Edge Inference" />,
    miFlora: <CellWarn label="Required" />,
    sustee: <CellYes label="None" />,
    generic: <CellYes label="None" />,
  },
  {
    feature: 'Housing Material',
    nih01: <CellYes label="Artisan Ceramic Concept" />,
    miFlora: <CellNo label="Plastic" />,
    sustee: <CellNo label="Plastic" />,
    generic: <CellNo label="Plastic" />,
  },
  {
    feature: 'Species Research',
    nih01: <CellYes label="Growing Research Library" />,
    miFlora: <CellNo label="15 species" />,
    sustee: <CellNo label="Not applicable" />,
    generic: <CellNo label="Not applicable" />,
  },
  {
    feature: 'Commercial Stage',
    nih01: <CellPrice label="Research Prototype" highlight />,
    miFlora: <CellPrice label="Commercial Product" />,
    sustee: <CellPrice label="Commercial Product" />,
    generic: <CellPrice label="Commercial Product" />,
  },
];

const differentiators = [
  {
    icon: Camera,
    title: 'Thermal Biometrics, Not Soil Probes',
    desc:
      'NIH-01 is designed to observe leaf surface temperature using thermal optics — evaluating stomatal dynamics and water stress gradients. Soil probes measure external dirt; NIH-01 observes the plant itself.',
  },
  {
    icon: Mic,
    title: 'Natural Plant Speech Concept',
    desc:
      'The Nature Translation Engine™ concept maps biophysical sensor data into natural language plant expressions. Translating complex biophysics into accessible human insights.',
  },
  {
    icon: Cpu,
    title: 'Intelligence Lives on the Device',
    desc:
      'Designed around the ESP32-S3 microcontroller running quantized TinyML models. Inference is designed to execute locally for complete home privacy.',
  },
];

export default function ComparisonPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Badge variant="lime">Conceptual Comparison</Badge>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#F7F6F2] leading-tight">
            A New Approach to
            <br className="hidden md:block" /> Plant Intelligence.
          </h1>
          <p className="text-[#A3B18A] text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            NIH-01 is not another plastic soil probe. It is a research prototype exploring non-invasive plant biometrics and edge AI.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm font-mono min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-[#0F2B18]/60">
                  <th className="text-left px-6 py-5 text-xs uppercase tracking-widest text-[#A3B18A] font-semibold w-[200px]">
                    Capability
                  </th>
                  <th className="text-left px-6 py-5 text-xs uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-2 text-[#8AD74C]">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#8AD74C]" />
                      NIH-01 Concept
                    </span>
                  </th>
                  <th className="text-left px-6 py-5 text-xs uppercase tracking-widest text-[#F7F6F2]/50 font-semibold">
                    Mi Flora
                  </th>
                  <th className="text-left px-6 py-5 text-xs uppercase tracking-widest text-[#F7F6F2]/50 font-semibold">
                    Sustee
                  </th>
                  <th className="text-left px-6 py-5 text-xs uppercase tracking-widest text-[#F7F6F2]/50 font-semibold">
                    Generic Soil Sensor
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-white/5 transition-colors hover:bg-white/[0.02] ${
                      idx % 2 === 0 ? 'bg-[#070B08]' : 'bg-[#0a0f0a]'
                    }`}
                  >
                    <td className="px-6 py-4 font-sans font-semibold text-[#F7F6F2] text-xs whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-xs">{row.nih01}</td>
                    <td className="px-6 py-4 text-xs">{row.miFlora}</td>
                    <td className="px-6 py-4 text-xs">{row.sustee}</td>
                    <td className="px-6 py-4 text-xs">{row.generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3 Key Differentiators */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <Badge variant="gold">Architectural Vision</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              Three Pillars of the NIH-01 Concept
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((d, idx) => {
              const Icon = d.icon;
              return (
                <Card key={idx} className="space-y-5 border border-white/8 p-8">
                  <div className="w-14 h-14 rounded-xl bg-[#8AD74C]/10 flex items-center justify-center border border-[#8AD74C]/20">
                    <Icon className="w-7 h-7 text-[#8AD74C]" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#F7F6F2]">
                    {d.title}
                  </h3>
                  <p className="text-[#A3B18A] text-sm leading-relaxed">{d.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Badge variant="glass">Founding Research Cohort</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Help Shape Nature Intelligence.
          </h2>
          <p className="text-[#A3B18A] text-base md:text-lg leading-relaxed">
            Join the research waitlist for NIH-01. Participate in prototype testing cohorts and help validate our plant biophysics models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/waitlist">
              <Button variant="primary" size="lg">
                Join Research Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
