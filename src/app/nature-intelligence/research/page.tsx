import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FlaskConical, BookOpen, Microscope } from 'lucide-react';
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
