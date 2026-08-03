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
  title: 'NIH-01 vs Competitors — Vriksh Vani Product Comparison',
  description:
    'How does NIH-01 compare to Xiaomi Mi Flora, Planta App, Sustee aquameter, and standard soil sensors? Side-by-side feature comparison.',
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
    <span className={`font-mono font-semibold ${highlight ? 'text-[#E8D07C]' : 'text-[#F7F6F2]/60'}`}>
      {label}
    </span>
  );
}

const comparisonRows = [
  {
    feature: 'Sensing Method',
    nih01: <CellYes label="FLIR Thermal + Quad-Gas + Humidity" />,
    miFlora: <CellNo label="Soil EC probe" />,
    sustee: <CellNo label="Water capillary" />,
    generic: <CellNo label="Soil EC probe" />,
  },
  {
    feature: 'Plant Speech / Voice Output',
    nih01: <CellYes label="NTE™ (8 languages)" />,
    miFlora: <CellNo label="None" />,
    sustee: <CellNo label="None" />,
    generic: <CellNo label="None" />,
  },
  {
    feature: 'FLIR Thermal Camera',
    nih01: <CellYes label="Lepton 3.5 (160×120)" />,
    miFlora: <CellNo label="Not included" />,
    sustee: <CellNo label="Not included" />,
    generic: <CellNo label="Not included" />,
  },
  {
    feature: 'VOC / Gas Analysis',
    nih01: <CellYes label="Bosch BME688" />,
    miFlora: <CellNo label="None" />,
    sustee: <CellNo label="None" />,
    generic: <CellNo label="None" />,
  },
  {
    feature: 'VPD Measurement',
    nih01: <CellYes label="Calculated real-time" />,
    miFlora: <CellNo label="Not supported" />,
    sustee: <CellNo label="Not supported" />,
    generic: <CellNo label="Not supported" />,
  },
  {
    feature: 'On-Device AI',
    nih01: <CellYes label="ARM Cortex-M4 NPU" />,
    miFlora: <CellNo label="None" />,
    sustee: <CellNo label="None" />,
    generic: <CellNo label="None" />,
  },
  {
    feature: 'Cloud Dependency',
    nih01: <CellYes label="Fully offline" />,
    miFlora: <CellWarn label="Required" />,
    sustee: <CellYes label="None" />,
    generic: <CellYes label="None" />,
  },
  {
    feature: 'Housing Material',
    nih01: <CellYes label="Kiln-Fired Ceramic" />,
    miFlora: <CellNo label="Plastic" />,
    sustee: <CellNo label="Plastic" />,
    generic: <CellNo label="Plastic" />,
  },
  {
    feature: 'Species Database',
    nih01: <CellYes label="847+ species" />,
    miFlora: <CellNo label="15 species" />,
    sustee: <CellNo label="Not applicable" />,
    generic: <CellNo label="Not applicable" />,
  },
  {
    feature: 'Right to Repair',
    nih01: <CellYes label="7 Years" />,
    miFlora: <CellNo label="Proprietary" />,
    sustee: <CellNo label="Disposable" />,
    generic: <CellNo label="None" />,
  },
  {
    feature: 'Price',
    nih01: <CellPrice label="₹24,999" highlight />,
    miFlora: <CellPrice label="₹2,499" />,
    sustee: <CellPrice label="₹1,899" />,
    generic: <CellPrice label="₹299–899" />,
  },
];

const differentiators = [
  {
    icon: Camera,
    title: 'Thermal Biometrics, Not Soil Probes',
    desc:
      'NIH-01 reads leaf surface temperature using FLIR Lepton 3.5 — detecting stomatal closure, water stress gradients, and photosynthetic activity before any visible wilting. Soil probes measure dirt. NIH-01 measures the plant itself.',
  },
  {
    icon: Mic,
    title: 'Plants That Actually Speak',
    desc:
      'Neural Translation Engine™ converts sensor fusion data into grammatically coherent plant speech across 8 languages. No app required. The NIH-01 tells you, in plain language, what your plant is experiencing right now.',
  },
  {
    icon: Cpu,
    title: 'Intelligence Lives On the Device',
    desc:
      "With an ARM Cortex-M4 NPU running TensorFlow Lite Micro, every inference happens locally at under 45ms latency. No cloud latency. No subscription. No data sold. Your plant's biometric data stays in your home.",
  },
];

export default function ComparisonPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Badge variant="lime">Product Comparison</Badge>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#F7F6F2] leading-tight">
            No Sensor Has Done
            <br className="hidden md:block" /> This Before.
          </h1>
          <p className="text-[#A3B18A] text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            NIH-01 is not a soil probe with better marketing. It is a plant biometric
            intelligence hub — a fundamentally different category of device. Here&apos;s
            the proof.
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
                    Feature
                  </th>
                  <th className="text-left px-6 py-5 text-xs uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-2 text-[#8AD74C]">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#8AD74C]" />
                      NIH-01
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

          {/* Footnote */}
          <div className="mt-8 text-center">
            <p className="text-[#A3B18A] text-sm italic max-w-2xl mx-auto leading-relaxed">
              &ldquo;NIH-01 doesn&apos;t compete in the same category as soil sensors.
              It&apos;s the first plant biometric intelligence hub.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 3 Key Differentiators */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <Badge variant="gold">Why It&apos;s Different</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              Three Reasons NIH-01 Stands Alone
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
          <Badge variant="glass">Batch 01 — Limited Units</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            The Benchmark Has Changed.
          </h2>
          <p className="text-[#A3B18A] text-base md:text-lg leading-relaxed">
            Join the waitlist for NIH-01. Batch 01 ships to a limited number of early
            adopters across India. Reserve your spot before they&apos;re gone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/product#waitlist">
              <Button variant="primary" size="lg">
                Join the Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/product/specifications">
              <Button variant="secondary" size="lg">
                Full Specifications
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
