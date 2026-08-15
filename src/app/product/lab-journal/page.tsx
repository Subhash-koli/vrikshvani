import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Cpu, Flame, Camera, Wind, CheckCircle2, ArrowRight, ImageIcon, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hardware R&D Lab Journal | Vriksh Vani NIH-01',
  description:
    'Behind-the-scenes laboratory notes, ceramic stoneware glaze tests, thermal core mounts, and sensor PCB benchtop logs for NIH-01.',
  openGraph: {
    title: 'Hardware R&D Lab Journal | Vriksh Vani NIH-01',
    description: 'Authentic hardware development notes, sensor calibration benchtop logs, and ceramic kiln firing tests.',
    url: 'https://www.vrikshvani.com/product/lab-journal',
  },
};

const LAB_ENTRIES = [
  {
    id: 'LOG-004',
    date: '12 August 2026',
    title: 'Bosch BME688 Gas Resistance Baseline Calibration',
    category: 'Sensor Calibration',
    icon: Wind,
    iconColor: 'text-[#8AD74C]',
    summary:
      'Calibrated baseline MOX gas resistance values (480–590 kΩ) across varied ambient relative humidity levels (28%–65% RH) to eliminate false VOC spike alerts during natural humidity shifts.',
    details: [
      'Configured 3.3V power supply rail with low-noise LDO regulator',
      'Calculated 24-hour baseline thermal stabilization period for MOX heater element',
      'Integrated temperature/humidity compensation via Sensirion SHT41 reference',
    ],
  },
  {
    id: 'LOG-003',
    date: '05 August 2026',
    title: 'FLIR Lepton 3.5 Thermal Core Isolation Chamber',
    category: 'Thermal Optics',
    icon: Camera,
    iconColor: 'text-[#E8D07C]',
    summary:
      'Engineered an isolated internal thermal chamber using ceramic fiber insulation to prevent ESP32-S3 CPU heat dissipation (0.8W) from bleeding into FLIR thermal sensor measurements.',
    details: [
      'Measured +2.8°C thermal leakage without isolation barrier',
      'Designed 2.5mm ceramic fiber thermal barrier around compute PCB',
      'Achieved zero measurable CPU heat leakage into LWIR optical path',
    ],
  },
  {
    id: 'LOG-002',
    date: '28 July 2026',
    title: 'High-Temperature Stoneware Ceramic Glaze Firing (1,250°C)',
    category: 'Ceramic Craftsmanship',
    icon: Flame,
    iconColor: 'text-[#8AD74C]',
    summary:
      'Executed high-firing glaze tests on Karnataka stoneware clay. Achieved zero-porosity vitrification while maintaining precise optical window recessed tolerance (&plusmn;0.2mm).',
    details: [
      'Formulated 92% recycled ceramic clay body mixture',
      '14-hour ramp-up high-firing curve reaching peak 1,250°C',
      'Verified zero liquid absorption in post-firing water submergence test',
    ],
  },
  {
    id: 'LOG-001',
    date: '18 July 2026',
    title: 'ESP32-S3 Benchtop PCB & Local INT8 Model Flash',
    category: 'Embedded AI',
    icon: Cpu,
    iconColor: 'text-sky-400',
    summary:
      'Flashed quantized INT8 TensorFlow Lite for Microcontrollers (TFLite Micro) model onto ESP32-S3 benchtop developer board for local transpiration state inference.',
    details: [
      'Model footprint: 184KB Flash, 62KB SRAM allocation',
      'Average inference latency: 38ms per sensor fusion frame',
      'Verified zero external cloud network calls during local inference',
    ],
  },
];

export default function LabJournalPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="lime" className="px-4 py-1.5 font-mono text-xs">
              Authentic Hardware R&amp;D Journal
            </Badge>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Behind the Clay &amp; Circuitry
            </h1>

            <p className="text-[#A3B18A] text-base sm:text-lg leading-relaxed">
              Living engineering logs documenting physical ceramic glaze firings, sensor benchtop testbeds, and local TinyML compute development for the NIH-01 prototype.
            </p>
          </div>

          {/* Lab Entries List */}
          <div className="space-y-6">
            {LAB_ENTRIES.map((entry) => {
              const Icon = entry.icon;
              return (
                <Card key={entry.id} className="p-8 space-y-4 border-white/10 nidl-glass-hover">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className={`w-5 h-5 ${entry.iconColor}`} />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-[#8AD74C] font-bold">{entry.id}</span>
                        <h2 className="font-display text-xl font-bold text-[#F7F6F2]">{entry.title}</h2>
                      </div>
                    </div>
                    <div className="text-right text-xs font-mono text-[#A3B18A]">
                      <span className="block text-[#F7F6F2]">{entry.date}</span>
                      <span>{entry.category}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#A3B18A] leading-relaxed">
                    {entry.summary}
                  </p>

                  <div className="p-4 rounded-xl bg-[#030504] border border-white/5 space-y-2">
                    <p className="text-xs font-mono text-[#8AD74C] uppercase tracking-wider">Benchtop Verification Notes:</p>
                    <ul className="text-xs text-[#A3B18A] space-y-1.5 list-disc pl-4">
                      {entry.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Photo Journal Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-[#8AD74C]" />
                <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Benchtop Photo Journal</h2>
              </div>
              <p className="text-sm text-[#A3B18A]">Photographic documentation of physical hardware tests, ceramic kiln events, and sensor array setups. Photos are published as physical evidence becomes available.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'BME688 Breakout Wiring', date: '12 Aug 2026', status: 'PHOTO PENDING', note: 'Benchtop breadboard wiring of BME688 + SHT41 to ESP32-S3 DevKit. Photo to be uploaded.' },
                { label: 'Ceramic Glaze Firing — Kiln Exit', date: '28 Jul 2026', status: 'PHOTO PENDING', note: 'Post-firing stoneware ceramic body at 1,250°C vitrification. Photographic documentation planned.' },
                { label: 'FLIR Isolation Chamber', date: '05 Aug 2026', status: 'PHOTO PENDING', note: 'Ceramic fiber thermal barrier around compute PCB. Physical photograph to follow hardware assembly.' },
                { label: 'ESP32-S3 UART Serial Output', date: '18 Jul 2026', status: 'PHOTO PENDING', note: 'Terminal output showing INT8 inference logs at 38ms latency. Screenshot to be published.' },
                { label: 'Monstera deliciosa Test Subject', date: 'Aug 2026', status: 'PHOTO PENDING', note: 'Specimen used in Research Note #001 thermal transpiration trial. Photo documentation forthcoming.' },
                { label: 'Next Physical Prototype Assembly', date: 'Phase 05 (Planned)', status: 'AWAITING HARDWARE', note: 'NIH-01 ceramic prototype photographic documentation. Awaiting PCB fabrication and enclosure assembly.' },
              ].map((slot, i) => (
                <Card key={i} className="p-5 border-white/10 space-y-3">
                  <div className="w-full h-32 rounded-xl bg-[#030504] border border-white/5 flex flex-col items-center justify-center gap-2">
                    <ImageIcon className="w-8 h-8 text-white/10" />
                    <span className="text-xs font-mono text-white/20 uppercase tracking-wider">{slot.status}</span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-display text-sm font-bold text-[#F7F6F2]">{slot.label}</p>
                    <p className="text-xs font-mono text-[#A3B18A]">{slot.date}</p>
                    <p className="text-xs text-[#A3B18A] leading-relaxed">{slot.note}</p>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-4 border-amber-500/20 bg-amber-950/10">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-200 leading-relaxed">
                  Physical photographs will replace placeholder slots as hardware development progresses in Phase 05. Photographic evidence is a core part of our Truth Before Growth research transparency commitment.
                </p>
              </div>
            </Card>
          </div>

          {/* CTA Box */}
          <Card className="p-8 border border-[#8AD74C]/30 text-center space-y-4">
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Join the Founding Prototype Cohort</h3>
            <p className="text-xs text-[#A3B18A] max-w-lg mx-auto leading-relaxed">
              Be among the first researchers, developers, and collectors to evaluate early benchtop telemetry models and hardware testbed updates.
            </p>
            <div>
              <Link
                href="/waitlist"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-bold text-sm text-white bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050] hover:brightness-110 transition-all"
              >
                Join Founding Waitlist Queue &rarr;
              </Link>
            </div>
          </Card>

        </div>
      </section>

      <Footer />
    </main>
  );
}
