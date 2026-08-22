import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, BookOpen, FlaskConical, Cpu, Leaf, Scale, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Source of Truth — Canonical Claims & Status Registry | Vriksh Vani',
  description: 'The single canonical reference for every Vriksh Vani claim. Each statement carries an explicit status: Verified, Validated, Testing, Hypothesis, Concept, Target, or Vision.',
  openGraph: {
    title: 'Source of Truth — Vriksh Vani Canonical Registry',
    description: 'Every claim governed by Truth Before Growth. Verified, Validated, Testing, Hypothesis, Concept, Target, Vision.',
    url: 'https://www.vrikshvani.com/source-of-truth',
  },
};

type TruthStatus = 'VERIFIED' | 'VALIDATED' | 'TESTING' | 'HYPOTHESIS' | 'CONCEPT' | 'TARGET' | 'VISION';

interface TruthEntry {
  statement: string;
  status: TruthStatus;
  evidence: string;
  lastReviewed: string;
}

interface TruthCategory {
  name: string;
  icon: React.ElementType;
  color: string;
  entries: TruthEntry[];
}

const STATUS_STYLES: Record<TruthStatus, { color: string; bg: string; border: string }> = {
  'VERIFIED': { color: 'text-[#8AD74C]', bg: 'bg-[#8AD74C]/10', border: 'border-[#8AD74C]/30' },
  'VALIDATED': { color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/30' },
  'TESTING': { color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/30' },
  'HYPOTHESIS': { color: 'text-[#E8D07C]', bg: 'bg-[#E8D07C]/10', border: 'border-[#E8D07C]/30' },
  'CONCEPT': { color: 'text-[#A3B18A]', bg: 'bg-white/5', border: 'border-white/10' },
  'TARGET': { color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/30' },
  'VISION': { color: 'text-pink-400', bg: 'bg-pink-400/10', border: 'border-pink-400/30' },
};

const TRUTH_CATEGORIES: TruthCategory[] = [
  {
    name: 'Brand Truth',
    icon: Leaf,
    color: 'text-[#8AD74C]',
    entries: [
      { statement: 'Vriksh Vani means "Voice of Trees" in Hindi.', status: 'VERIFIED', evidence: 'Linguistic fact.', lastReviewed: 'Aug 2026' },
      { statement: 'Vriksh Vani is pioneering Nature Intelligence as a category.', status: 'CONCEPT', evidence: 'Category positioning. No existing market category named "Nature Intelligence" exists.', lastReviewed: 'Aug 2026' },
      { statement: 'The master tagline is "Let Your Plants Speak."', status: 'VERIFIED', evidence: 'Brand governance document.', lastReviewed: 'Aug 2026' },
    ],
  },
  {
    name: 'Scientific Truth',
    icon: FlaskConical,
    color: 'text-purple-400',
    entries: [
      { statement: 'Foliar transpiration causes evaporative cooling of leaf surfaces.', status: 'VERIFIED', evidence: 'Established energy balance physics. Monteith-Unsworth (2013).', lastReviewed: 'Aug 2026' },
      { statement: 'VPD governs transpiration rate in most vascular plants.', status: 'VERIFIED', evidence: 'Established plant physiology. Ranges are species-dependent.', lastReviewed: 'Aug 2026' },
      { statement: 'Leaf thermal delta can indicate pre-wilting stomatal stress.', status: 'HYPOTHESIS', evidence: 'Research Note #001 illustrative model. Physical FLIR trial pending.', lastReviewed: 'Aug 2026' },
      { statement: 'BME688 MOX gas resistance shifts correlate with root zone moisture.', status: 'HYPOTHESIS', evidence: 'Research Note #003 methodology draft. Experiment pending Phase 05.', lastReviewed: 'Aug 2026' },
      { statement: 'Boundary-layer micro-airflow affects stomatal conductance.', status: 'HYPOTHESIS', evidence: 'Research Note #002. Literature-supported but VV-specific data pending.', lastReviewed: 'Aug 2026' },
    ],
  },
  {
    name: 'Technical Truth',
    icon: Cpu,
    color: 'text-sky-400',
    entries: [
      { statement: 'NIH-01 targets FLIR Lepton 3.5 (160x120) as the thermal sensor.', status: 'TARGET', evidence: 'Product specification. FLIR hardware not yet physically integrated.', lastReviewed: 'Aug 2026' },
      { statement: 'ESP32-S3 achieves 38ms INT8 TinyML inference.', status: 'VALIDATED', evidence: 'Lab Journal LOG-001. Benchtop verified on DevKit.', lastReviewed: 'Aug 2026' },
      { statement: 'BME688 is the target gas resistance sensor.', status: 'TARGET', evidence: 'Candidate hardware. Baseline drift characterization in progress.', lastReviewed: 'Aug 2026' },
      { statement: 'SHT41 provides ambient T/RH compensation.', status: 'TARGET', evidence: 'Candidate hardware for BME688 environmental compensation.', lastReviewed: 'Aug 2026' },
      { statement: 'NTE (Nature Translation Engine) produces natural language from sensor data.', status: 'CONCEPT', evidence: 'Architecture design. No trained TTS or NLP model deployed.', lastReviewed: 'Aug 2026' },
      { statement: 'NIOS is a 6-stage sense-to-care intelligence pipeline.', status: 'CONCEPT', evidence: 'Conceptual operating model architecture.', lastReviewed: 'Aug 2026' },
    ],
  },
  {
    name: 'Product Truth',
    icon: BookOpen,
    color: 'text-[#E8D07C]',
    entries: [
      { statement: 'NIH-01 is the first Nature Intelligence hardware concept.', status: 'CONCEPT', evidence: 'No physical prototype assembled. Target architecture defined.', lastReviewed: 'Aug 2026' },
      { statement: 'NIH-01 uses a kiln-fired ceramic shell (stoneware, 1250C).', status: 'VALIDATED', evidence: 'Lab Journal LOG-002. Zero-porosity vitrification confirmed on test tiles.', lastReviewed: 'Aug 2026' },
      { statement: 'NIH-01 contains no RGB cameras. Privacy by design.', status: 'TARGET', evidence: 'Architectural commitment. LWIR thermal only.', lastReviewed: 'Aug 2026' },
      { statement: 'All sensor data processed locally. No cloud dependency.', status: 'TARGET', evidence: 'Architecture target. ESP32-S3 local inference design.', lastReviewed: 'Aug 2026' },
    ],
  },
  {
    name: 'Legal & Privacy Truth',
    icon: Scale,
    color: 'text-red-400',
    entries: [
      { statement: 'Frame buffers stored in volatile SRAM only. Overwritten immediately.', status: 'TARGET', evidence: 'Architecture commitment. Hardware not yet assembled.', lastReviewed: 'Aug 2026' },
      { statement: 'No continuous room video or audio recording.', status: 'TARGET', evidence: 'Architecture commitment. No RGB sensor in NIH-01 design.', lastReviewed: 'Aug 2026' },
    ],
  },
  {
    name: 'Vision Truth',
    icon: Globe,
    color: 'text-pink-400',
    entries: [
      { statement: 'Nature Intelligence can eventually apply to ecosystems beyond individual plants.', status: 'VISION', evidence: 'Long-term strategic direction. No current technical capability.', lastReviewed: 'Aug 2026' },
      { statement: 'Community-contributed observations can improve Nature Intelligence models.', status: 'VISION', evidence: 'Future data flywheel architecture. Requires deployed hardware.', lastReviewed: 'Aug 2026' },
      { statement: 'Nature Intelligence OS (NIOS) can become a platform for third-party research.', status: 'VISION', evidence: 'Long-term platform strategy. Requires mature product.', lastReviewed: 'Aug 2026' },
    ],
  },
];

export default function SourceOfTruthPage() {
  const totalClaims = TRUTH_CATEGORIES.reduce((acc, c) => acc + c.entries.length, 0);
  const statusCounts: Record<string, number> = {};
  TRUTH_CATEGORIES.forEach(c => c.entries.forEach(e => { statusCounts[e.status] = (statusCounts[e.status] || 0) + 1; }));

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="space-y-5 max-w-3xl">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#8AD74C]" />
              <Badge variant="lime">Truth Before Growth</Badge>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Vriksh Vani Source of Truth
            </h1>
            <p className="text-[#A3B18A] text-lg leading-relaxed">
              The single canonical reference for every Vriksh Vani claim. Each statement carries an explicit status so you always know what is established science, what is being tested, and what remains a future vision.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              {Object.entries(STATUS_STYLES).map(([status, style]) => (
                <span key={status} className={[style.bg, style.border, style.color, 'px-2 py-0.5 rounded border font-bold'].join(' ')}>
                  {status}: {statusCounts[status] || 0}
                </span>
              ))}
            </div>
            <p className="text-xs font-mono text-[#A3B18A]">
              <span className="text-[#8AD74C] font-bold">{totalClaims}</span> canonical claims registered across <span className="text-[#8AD74C] font-bold">{TRUTH_CATEGORIES.length}</span> categories.
            </p>
          </div>

          {TRUTH_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.name} className="space-y-4">
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <Icon className={['w-5 h-5', category.color].join(' ')} />
                  <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">{category.name}</h2>
                  <span className="text-xs font-mono text-[#A3B18A] bg-white/5 px-2 py-0.5 rounded border border-white/10">{category.entries.length} claims</span>
                </div>
                <div className="space-y-3">
                  {category.entries.map((entry, idx) => {
                    const style = STATUS_STYLES[entry.status];
                    return (
                      <Card key={idx} className={['p-5 space-y-2', style.border].join(' ')}>
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <p className="font-display font-bold text-[#F7F6F2] flex-1">{entry.statement}</p>
                          <span className={['font-mono text-xs font-bold px-2 py-0.5 rounded border shrink-0', style.color, style.bg, style.border].join(' ')}>{entry.status}</span>
                        </div>
                        <p className="text-xs text-[#A3B18A] leading-relaxed">{entry.evidence}</p>
                        <p className="text-xs font-mono text-[#A3B18A]">Last reviewed: {entry.lastReviewed}</p>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
            <Link href="/nature-intelligence/evidence"><Button variant="outline">Evidence Registry</Button></Link>
            <Link href="/nature-intelligence/research"><Button variant="outline">Research Hub</Button></Link>
            <Link href="/about"><Button variant="outline">About Vriksh Vani</Button></Link>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}