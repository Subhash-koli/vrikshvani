import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import JsonLd from '@/components/seo/JsonLd';
import Link from 'next/link';
import { BookOpen, Search, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nature Intelligence Glossary & Technical Lexicon | Vriksh Vani',
  description: 'Standardized definitions and scientific terminology for Vriksh Vani technology: NIH-01, NTE™ voice engine, Vapour Pressure Deficit (VPD), FLIR thermal sensing, and TinyML AI.',
};

const glossaryTerms = [
  {
    term: 'NIH-01 (Nature Intelligence Hub 01)',
    category: 'Hardware',
    definition: 'The prototype ceramic plant monitoring hub designed by Vriksh Vani. Houses precision sensors, an ESP32-S3 dual-core microcontroller, target FLIR Lepton 3.5 thermal array, and an acoustic speaker in a kiln-fired ceramic chassis.',
  },
  {
    term: 'NTE™ (Nature Translated to Emotion)',
    category: 'AI Engine',
    definition: 'Vriksh Vani\'s proprietary on-device speech synthesis and affect classification model. Maps multi-sensor biometric vectors into 16 distinct emotion states and translates them into natural spoken language across 4 distinct voice personalities.',
  },
  {
    term: 'VPD (Vapour Pressure Deficit)',
    category: 'Biophysics',
    definition: 'The difference between the saturation vapour pressure at leaf temperature and the actual vapour pressure of the surrounding air, measured in kilopascals (kPa). The authoritative biophysical metric governing stomatal conductance and transpiration rate.',
  },
  {
    term: 'FLIR Lepton 3.5',
    category: 'Sensor',
    definition: 'A long-wave infrared (LWIR) micro thermal camera module with 160×120 thermal resolution and ±0.05°C NETD thermal sensitivity. Measures true leaf surface temperature non-invasively, eliminating air temperature measurement errors.',
  },
  {
    term: 'Bosch BME688',
    category: 'Sensor',
    definition: 'An advanced quad-gas sensor with artificial intelligence. Measures Volatile Organic Compounds (VOCs), hydrogen, ethanol, and CO₂ equivalents to monitor root zone microbial activity and soil health without invasive probes.',
  },
  {
    term: 'Leaf Temperature Delta (ΔT)',
    category: 'Biophysics',
    definition: 'The differential temperature between the leaf surface (T_leaf) and the ambient air (T_air). A negative ΔT indicates active transpiration cooling; a positive ΔT signals heat stress or closed stomata.',
  },
  {
    term: 'TinyML On-Device Inference',
    category: 'AI Hardware',
    definition: 'An embedded neural network processing pipeline running quantized INT8 inference on the ESP32-S3 microcontroller. Processes bio-signal vectors with local-first intelligence and optional encrypted telemetry synchronization.',
  },
  {
    term: 'Stomatal Conductance',
    category: 'Botany',
    definition: 'The rate of passage of carbon dioxide entering, or water vapour exiting, through the stomata (microscopic pores) of a leaf. Regulated by plant guard cells in response to VPD, light, and root water availability.',
  },
  {
    term: 'Open Data Programme',
    category: 'Initiative',
    definition: 'Vriksh Vani\'s open research initiative. Shares anonymised, user-opted-in plant biometric telemetry datasets with botanical researchers and institutions worldwide under open licenses.',
  },
  {
    term: 'Nature Points (PTS)',
    category: 'Community',
    definition: 'Gamified contribution points awarded to Vriksh Vani community members for sharing anonymised telemetry readings, authoring care guides, and validating species VPD parameter baselines.',
  },
];

const glossaryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Vriksh Vani Nature Intelligence Glossary',
  description: 'Standardized scientific and technical terms for Vriksh Vani plant biometrics and NIH-01 hardware.',
  hasDefinedTerm: glossaryTerms.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.definition,
    inDefinedTermSet: 'https://vrikshvani.vercel.app/glossary',
  })),
};

export default function GlossaryPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <JsonLd data={glossaryJsonLd} />
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <Badge variant="lime" className="gap-1">
            <BookOpen className="w-3.5 h-3.5" /> Technical Standard
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
            Nature Intelligence Lexicon
          </h1>
          <p className="text-[#A3B18A] text-lg max-w-2xl mx-auto leading-relaxed">
            Standardized terminology, acronyms, and biophysical definitions used across Vriksh Vani research papers, NIH-01 documentation, and the NTE™ voice framework.
          </p>
        </div>
      </section>

      {/* Glossary Terms List */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {glossaryTerms.map((t, idx) => (
            <Card key={idx} className="p-6 space-y-2 border-white/10 hover:border-[#8AD74C]/30 transition-all">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="font-display font-bold text-xl text-[#F7F6F2]">{t.term}</h2>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8AD74C] px-2.5 py-1 rounded-md bg-[#8AD74C]/10 border border-[#8AD74C]/20">
                  {t.category}
                </span>
              </div>
              <p className="text-[#A3B18A] text-sm leading-relaxed">{t.definition}</p>
            </Card>
          ))}

          {/* Learn More CTA */}
          <Card className="p-8 text-center border-[#8AD74C]/30 space-y-4 mt-8 bg-[#0F2B18]/30">
            <h3 className="font-display text-2xl font-bold text-[#F7F6F2]">Want to Explore the Biophysics Deeply?</h3>
            <p className="text-sm text-[#A3B18A] max-w-xl mx-auto">
              Read our 48-page peer-reviewed technical whitepaper covering FLIR thermal biometrics, VPD calculation formulas, and TinyML neural architecture.
            </p>
            <div className="flex gap-4 justify-center flex-wrap pt-2">
              <Link href="/nature-intelligence/whitepaper">
                <Button variant="primary">Download Whitepaper v1.2 →</Button>
              </Link>
              <Link href="/vpd-guide">
                <Button variant="outline">Interactive VPD Simulator</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
