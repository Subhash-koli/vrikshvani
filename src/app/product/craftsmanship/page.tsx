import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Flame,
  Cpu,
  Wind,
  Speaker,
  Package,
  Camera,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Craftsmanship & Materials — Vriksh Vani NIH-01',
  description:
    'Every NIH-01 is hand-thrown stoneware ceramic fired at 1250°C. Inside: FLIR Lepton 3.5, Bosch BME688, ARM Cortex-M4, and braided copper speaker grille.',
};

const materials = [
  {
    icon: Flame,
    accentColor: '#E8D07C',
    label: 'Material 01',
    title: 'Stoneware Ceramic Body',
    subtitle: 'Fired at 1250°C — Karnataka clay, wheel-thrown by hand',
    specs: [
      'Clay sourced from Karnataka laterite deposits — high iron content, exceptional thermal mass',
      'Wheel-thrown by resident ceramic artist at our Bengaluru studio, never slip-cast or moulded',
      'Bisque fired at 900°C, then high-fired at 1250°C for 14 hours to vitrification',
      'Zero plastic in the shell — no ABS, no polycarbonate, no rubber gaskets on exterior',
      'Develops a natural patina over years of use, like cast iron — each unit becomes unique',
      'Cradle-to-gate carbon footprint 60% lower than injection-moulded plastic equivalents',
    ],
    note:
      'Stoneware at 1250°C reaches near-zero porosity — liquid cannot penetrate the clay body. This is not decorative; it is functional protection for the electronics inside.',
  },
  {
    icon: Camera,
    accentColor: '#8AD74C',
    label: 'Material 02',
    title: 'FLIR Lepton 3.5 Thermal Core',
    subtitle: '160×120 uncooled LWIR — NETD <50mK, 57° FOV',
    specs: [
      '160×120 pixel uncooled VOx microbolometer thermal imaging array',
      'NETD (Noise-Equivalent Temperature Difference) <50mK — detects 0.05°C leaf temperature variance',
      '57° horizontal field of view — covers a standard 30cm plant canopy from 25cm distance',
      'Factory-calibrated with FLIR\'s Tau 2 coefficient set for ambient 15°C–35°C indoor environments',
      'Long-wave infrared (LWIR) 8–14μm detection window — invisible to the plant, invisible to you',
      'Embedded inside a custom LWIR borosilicate window set into the ceramic body',
    ],
    note:
      'FLIR Lepton 3.5 is the same thermal core used in FLIR ONE Pro and DJI Zenmuse thermal drones. NIH-01 is the first consumer plant device to embed it.',
  },
  {
    icon: Wind,
    accentColor: '#8AD74C',
    label: 'Material 03',
    title: 'Bosch BME688 Quad-Gas Sensor',
    subtitle: 'VOC, CO₂ equiv, H₂, ethanol — 4-in-1 on 3×3mm die',
    specs: [
      'Integrated VOC (volatile organic compound) index, equivalent CO₂, H₂, and ethanol channels',
      '±3% relative humidity accuracy, ±0.5°C temperature accuracy, 0.1Pa pressure resolution',
      'AI-powered AI scan mode — trains a gas mixture classifier directly on sensor\'s internal processor',
      'Detects plant-emitted ethylene (ripening signal), terpene stress markers, and root rot VOCs',
      'Operating range: –40°C to +85°C, 0–100% RH non-condensing',
      'Current draw in ultra-low power mode: 0.1μA — runs continuously without measurable impact on battery',
    ],
    note:
      'Plants emit specific VOC profiles when stressed, diseased, or thriving. BME688 lets NIH-01 detect pathogen onset and air quality simultaneously — before the plant shows visible symptoms.',
  },
  {
    icon: Cpu,
    accentColor: '#8AD74C',
    label: 'Material 04',
    title: 'ARM Cortex-M4 NPU',
    subtitle: '64MHz, 1MB flash, DSP + FPU, TensorFlow Lite Micro',
    specs: [
      'ARM Cortex-M4F core running at 64MHz — chosen for energy efficiency over raw throughput',
      '1MB internal flash, 256KB SRAM — enough for full TensorFlow Lite Micro model + species database',
      'Hardware FPU (Floating Point Unit) enables fast IEEE 754 single-precision inference',
      'DSP extensions for CMSIS-DSP signal processing — used in VPD and humidity smoothing pipelines',
      'Inference latency <45ms for sensor fusion classification across 847 species profiles',
      'Secure boot + encrypted firmware updates — your plant\'s model cannot be tampered with remotely',
    ],
    note:
      'We chose the Cortex-M4 over faster cores because power and heat matter in a ceramic enclosure. Running TinyML on-device means zero latency, zero cloud dependency, zero subscription fee — ever.',
  },
  {
    icon: Speaker,
    accentColor: '#8AD74C',
    label: 'Material 05',
    title: 'Braided Copper Speaker Grille',
    subtitle: '40mm full-range driver — 2W, 100Hz–20kHz response',
    specs: [
      'Grille hand-woven from 0.3mm annealed copper wire in 16-strand herringbone braid',
      '40mm full-range neodymium driver — single-element design avoids crossover phase distortion',
      'Frequency response 100Hz–20kHz (±3dB) — warm enough for speech, clear enough for high-pitched alert tones',
      '2W RMS output — enough to be clearly audible across a 20m² room at 60dB SPL',
      'Copper was chosen over steel mesh for acoustics: 20% lower mass allows higher excursion at low frequencies',
      'Patinates to a warm brown over time — intended. The speaker grille ages with the ceramic.',
    ],
    note:
      'NTE™ voice output is engineered so plant speech feels warm and organic — not like an alarm or a notification. The copper grille\'s natural resonance contributes to the timbre we\'ve tuned for.',
  },
  {
    icon: Package,
    accentColor: '#A3B18A',
    label: 'Material 06',
    title: 'Recycled Packaging',
    subtitle: '100% post-consumer recycled — soy ink, zero plastic',
    specs: [
      '100% post-consumer recycled corrugated cardboard box — FSC certified',
      'All printing done with soy-based ink — biodegradable, lower VOC than petroleum inks',
      'Void fill: shredded paper from offcuts of our own documentation printing runs',
      'No foam, no polystyrene, no plastic blister packs — unit nestles in a die-cut paper tray',
      'QR code insert links to full teardown guide, repair instructions, and spare parts store',
      'Outer box doubles as a seed germination kit — instructions printed inside the lid',
    ],
    note:
      'We designed the packaging to be opened slowly. The unboxing experience is deliberately tactile and quiet — a counter to the hyper-branded, plastic-heavy norm in consumer electronics.',
  },
];

const assemblySteps = [
  {
    num: '01',
    title: 'Clay Wedging & Centring',
    desc: 'Karnataka stoneware clay is wedged by hand to remove air pockets, centred on the wheel, and opened to the target wall thickness of 6mm.',
  },
  {
    num: '02',
    title: 'Wheel Throwing & Rim Forming',
    desc: 'The body is thrown to form — a tapered cylinder with a wide acoustic mouth and a recessed base plate for electronics mounting. Each piece is signed wet.',
  },
  {
    num: '03',
    title: 'Bisque Firing at 900°C',
    desc: 'Dried pieces enter the kiln for bisque firing. This hardens the clay, burns off organics, and prepares the surface for the thermal window inset.',
  },
  {
    num: '04',
    title: 'LWIR Window Bonding',
    desc: 'The FLIR borosilicate LWIR window is hand-placed into the pre-formed recess and sealed with a military-grade silicone bead. Cured 24 hours.',
  },
  {
    num: '05',
    title: 'High Firing at 1250°C',
    desc: 'The assembly re-enters the kiln for 14-hour high-firing. The ceramic vitrifies around the window, forming a permanent, zero-porosity bond.',
  },
  {
    num: '06',
    title: 'Electronics Seating & Firmware Flash',
    desc: 'PCB, Lepton 3.5, BME688, and speaker are hand-seated and soldered in sequence. Firmware is flashed, species database loaded, and final QA signed off by the testing engineer.',
  },
];

export default function CraftsmanshipPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Badge variant="gold">Handcrafted in Bengaluru</Badge>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#F7F6F2] leading-tight">
            Made Like Nothing Else
            <br className="hidden md:block" /> in Tech.
          </h1>
          <p className="text-[#A3B18A] text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Every NIH-01 begins as raw Karnataka clay and ends as a precision biometric
            instrument, hand-signed by the ceramic artist and firmware engineer who built it.
          </p>
        </div>
      </section>

      {/* Material Sections */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          {materials.map((mat, idx) => {
            const Icon = mat.icon;
            return (
              <Card key={idx} className="p-0 overflow-hidden border border-white/8" hoverEffect={false}>
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 px-8 py-6 border-b border-white/8 bg-[#0F2B18]/30">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${mat.accentColor}18`, border: `1px solid ${mat.accentColor}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: mat.accentColor }} />
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#A3B18A]">
                      {mat.label}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F7F6F2] mt-0.5">
                      {mat.title}
                    </h2>
                    <p className="text-sm text-[#A3B18A] mt-1">{mat.subtitle}</p>
                  </div>
                </div>

                {/* Spec List */}
                <div className="px-8 py-6 space-y-3">
                  {mat.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: mat.accentColor }}
                      />
                      <p className="text-sm text-[#F7F6F2]/80 leading-relaxed">{spec}</p>
                    </div>
                  ))}

                  {/* Engineering Note */}
                  <div className="mt-6 p-4 rounded-lg bg-white/[0.03] border border-white/8">
                    <p className="text-xs font-mono text-[#A3B18A] leading-relaxed">
                      <span className="text-[#E8D07C] font-semibold uppercase tracking-widest mr-2">
                        Engineering Note:
                      </span>
                      {mat.note}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Assembly Process */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="lime">Assembly Process</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              From Clay to Finished Unit
            </h2>
            <p className="text-[#A3B18A] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Six stages of hand assembly and kiln firing — each documented and signed for every unit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assemblySteps.map((step) => (
              <Card key={step.num} className="space-y-4 border border-white/8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-4xl font-bold text-[#8AD74C]/40">
                    {step.num}
                  </span>
                  <div className="h-px flex-1 bg-[#8AD74C]/10" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#F7F6F2]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#A3B18A] leading-relaxed">{step.desc}</p>
              </Card>
            ))}
          </div>

          {/* Signature line */}
          <div className="mt-14 text-center">
            <div className="inline-block px-8 py-5 rounded-2xl border border-[#E8D07C]/20 bg-[#E8D07C]/5">
              <p className="font-display text-lg md:text-xl text-[#E8D07C] font-semibold italic">
                &ldquo;Each unit is signed by the ceramic artist and the firmware engineer
                who tested it.&rdquo;
              </p>
              <p className="mt-2 text-xs font-mono text-[#A3B18A] uppercase tracking-widest">
                Vriksh Vani — NIH-01 Batch 01, Bengaluru
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Badge variant="glass">Batch 01 — Limited Units</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Own Something That Lasts.
          </h2>
          <p className="text-[#A3B18A] text-base md:text-lg leading-relaxed">
            NIH-01 is designed for a 7-year product lifespan with full right-to-repair.
            Spare parts, firmware source, and replacement components will be available for
            every unit sold — forever.
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
                Technical Specifications
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
