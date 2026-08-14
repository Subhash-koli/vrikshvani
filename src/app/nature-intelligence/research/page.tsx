import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FlaskConical, BookOpen, Microscope, Terminal, Code2, Download } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research & Hypotheses — Vriksh Vani Nature Intelligence',
  description:
    'Vriksh Vani research framework, working hypotheses, and open invitation for academic collaboration on plant biophysics and edge AI.',
};

interface Hypothesis {
  title: string;
  focusArea: string;
  status: string;
  tagVariant: 'lime' | 'gold' | 'glass' | 'outline';
  description: string;
}

const hypotheses: Hypothesis[] = [
  {
    title: 'Thermal Transpiration Signatures as Early Indicators of Plant Stress',
    focusArea: 'Biophysics',
    status: 'Active Hypothesis',
    tagVariant: 'lime',
    description:
      'Investigating whether sub-degree thermal variations in leaf surface temperature (measured via FLIR thermal sensors) provide an earlier and more accurate signal of transpiration shutdown than conventional ambient or soil moisture sensors.',
  },
  {
    title: 'On-Device TinyML Quantization for Low-Power Biophysical Inference',
    focusArea: 'Embedded AI',
    status: 'Prototype Phase',
    tagVariant: 'gold',
    description:
      'Exploring INT8 quantized neural models running locally on low-power microcontrollers (like ESP32-S3) to interpret sensor telemetry in real time without cloud latency or external privacy risks.',
  },
  {
    title: 'Substrate Gas Resistance Signatures & Root Zone Activity',
    focusArea: 'Atmospheric Chemistry',
    status: 'Exploratory Research',
    tagVariant: 'glass',
    description:
      'Exploring whether low-cost MEMS gas resistance sensors can detect volatile organic compound (VOC) shifts associated with root hair respiration or soil moisture dynamics in indoor plants.',
  },
];

export default function ResearchPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Hero */}
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <Badge variant="lime">Open Research Framework</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Science in the Open.
            </h1>
            <p className="text-[#A3B18A] text-lg leading-relaxed">
              Vriksh Vani is building Nature Intelligence on a foundation of open hypotheses, empirical testing, and transparent research. We publish our research notes openly as we learn.
            </p>
            <div className="pt-2">
              <Link
                href="/nature-intelligence/evidence"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs text-[#8AD74C] bg-[#8AD74C]/10 border border-[#8AD74C]/30 hover:bg-[#8AD74C]/20 transition-all"
              >
                View Evidence &amp; Truth Registry &rarr;
              </Link>
            </div>
          </div>

          {/* Published Research Notes */}
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <FlaskConical className="w-6 h-6 text-[#8AD74C]" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F7F6F2]">Published Research Notes</h2>
              </div>
              <span className="text-xs font-mono text-[#A3B18A]">Open Biophysics Datasets</span>
            </div>

            <Card className="p-8 border-[#8AD74C]/30 bg-[#0F2B18]/30 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Badge variant="lime">Research Note #001</Badge>
                  <Badge variant="gold">Peer Review Draft</Badge>
                </div>
                <span className="text-xs font-mono text-[#A3B18A]">August 2026</span>
              </div>

              <h3 className="font-display text-xl font-bold text-[#F7F6F2]">
                Leaf Surface Thermography Under Controlled Vapor Pressure Deficit (VPD) Shift
              </h3>

              <p className="text-sm text-[#A3B18A] leading-relaxed">
                Empirical investigation demonstrating that fine-scale leaf surface thermal elevation (+1.4&deg;C) acts as an early indicator of stomatal closure 180 minutes prior to visible wilting in <em>Monstera deliciosa</em>.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/nature-intelligence/research/note-001"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs text-white bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050] hover:brightness-110 transition-all"
                >
                  Read Research Note #001 &rarr;
                </Link>
                <a
                  href="/api/v1/telemetry/sample"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#8AD74C] hover:underline"
                >
                  Download Open Telemetry (JSON) &darr;
                </a>
              </div>
            </Card>
          </div>

          {/* Open Python SDK */}
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Terminal className="w-6 h-6 text-[#8AD74C]" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F7F6F2]">Open Biophysics SDK Concept</h2>
              </div>
              <span className="text-xs font-mono text-[#8AD74C] bg-[#8AD74C]/10 px-3 py-1 rounded-full border border-[#8AD74C]/20">
                vrikshvani-py v0.1.0-alpha
              </span>
            </div>

            <Card className="p-6 md:p-8 space-y-4 border-white/10 bg-[#030504]">
              <div className="flex items-center justify-between text-xs font-mono text-[#A3B18A] border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#8AD74C]" />
                  <span>calculate_leaf_vpd.py</span>
                </div>
                <span>Python 3.10+</span>
              </div>

              <pre className="p-4 rounded-xl bg-[#070B08] font-mono text-xs text-[#8AD74C] overflow-x-auto leading-relaxed">
{`import math

def calculate_vpd(temp_c: float, rh_pct: float) -> float:
    """Calculate Vapor Pressure Deficit (VPD) in kPa."""
    vp_sat = 0.61078 * math.exp((17.27 * temp_c) / (temp_c + 237.3))
    vp_act = vp_sat * (rh_pct / 100.0)
    return round(vp_sat - vp_act, 2)

def evaluate_transpiration_state(leaf_delta_c: float, vpd_kpa: float) -> str:
    """Infer physiological leaf state from thermal delta and atmospheric VPD."""
    if leaf_delta_c > 0.5 and vpd_kpa > 2.0:
        return "PRE_WILTING_STRESS"
    elif leaf_delta_c > 0.0:
        return "TRANSPIRATION_RESTRICTION"
    return "OPTIMAL_COOLING"

# Test specimen telemetry
vpd = calculate_vpd(temp_c=24.3, rh_pct=28.0)
state = evaluate_transpiration_state(leaf_delta_c=1.2, vpd_kpa=vpd)
print(f"Calculated VPD: {vpd} kPa | Inferred State: {state}")`}
              </pre>
              <div className="flex items-center justify-between text-xs text-[#A3B18A] pt-2">
                <span>Open-source under MIT / CC-BY License</span>
                <a
                  href="/api/v1/telemetry/sample"
                  target="_blank"
                  className="text-[#8AD74C] hover:underline font-mono inline-flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" /> Sample Telemetry Payload
                </a>
              </div>
            </Card>
          </div>

          {/* Hypotheses */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F7F6F2]">Working Hypotheses</h2>
            </div>
            <div className="space-y-5">
              {hypotheses.map((h, idx) => (
                <Card key={idx} className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant={h.tagVariant}>{h.status}</Badge>
                    <span className="text-xs font-mono text-[#A3B18A]">{h.focusArea}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F7F6F2] leading-snug">{h.title}</h3>
                  <p className="text-sm text-[#A3B18A] leading-relaxed border-l-2 border-white/10 pl-4">{h.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Invitation */}
          <Card className="text-center space-y-5 border border-[#8AD74C]/25 py-10">
            <div className="flex items-center justify-center gap-3">
              <Microscope className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Academic &amp; Researcher Collaboration</h2>
            </div>
            <p className="text-[#A3B18A] max-w-xl mx-auto leading-relaxed">
              Are you a plant biophysicist, botanist, or embedded AI researcher interested in plant signal interpretation? We welcome open discussions, dataset sharing, and joint research explorations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="mailto:science@vrikshvani.com">
                <Button variant="primary" size="lg">Contact Science Team &rarr;</Button>
              </Link>
            </div>
            <p className="text-xs font-mono text-[#A3B18A]">science@vrikshvani.com &middot; Bengaluru, India</p>
          </Card>

        </div>
      </section>

      <Footer />
    </main>
  );
}
