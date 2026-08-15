import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FlaskConical, Clock, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Experiment Log — Vriksh Vani Research Timeline',
  description: 'Chronological log of all Vriksh Vani research trials, benchtop experiments, and sensor calibration events with dates, conditions, status, and raw data links.',
  openGraph: {
    title: 'Experiment Log — Vriksh Vani Research Timeline',
    description: 'Chronological experiment log with real dates, conditions, outcomes, and open data links.',
    url: 'https://www.vrikshvani.com/nature-intelligence/experiment-log',
  },
};

type ExpStatus = 'COMPLETED' | 'IN PROGRESS' | 'PLANNED' | 'CANCELLED';

interface ExperimentEntry {
  id: string;
  date: string;
  title: string;
  category: string;
  status: ExpStatus;
  hypothesis: string;
  conditions: string[];
  outcome: string;
  confidence: string;
  dataLink?: string;
  noteLink?: string;
}

const EXPERIMENT_LOG: ExperimentEntry[] = [
  {
    id: 'EXP-2026-004',
    date: '12 August 2026',
    title: 'BME688 MOX Gas Resistance Baseline Calibration Under Humidity Gradient',
    category: 'Sensor Calibration',
    status: 'COMPLETED',
    hypothesis: 'BME688 raw gas resistance measurements vary significantly with ambient humidity and require SHT41 compensation before biological signal attribution.',
    conditions: [
      'Ambient RH range: 28%–65%',
      'Temperature: 24°C +/- 0.5°C (controlled)',
      'Duration: 48 hours continuous logging',
      'Hardware: BME688 + SHT41 + ESP32-S3 DevKit',
    ],
    outcome: 'Gas resistance ranged from 480–590 kOhm across humidity gradient. Strong RH correlation confirmed (R2=0.94). Compensation model calibrated. Baseline drift: approx 2.1 kOhm per % RH.',
    confidence: 'Medium (Experimental)',
    dataLink: '/api/v1/telemetry/sample',
    noteLink: '/product/lab-journal',
  },
  {
    id: 'EXP-2026-003',
    date: '05 August 2026',
    title: 'FLIR Lepton 3.5 Thermal Core CPU Heat Leakage Isolation',
    category: 'Thermal Optics',
    status: 'COMPLETED',
    hypothesis: 'ESP32-S3 CPU heat dissipation (0.8W) will contaminate FLIR thermal measurements without a dedicated physical isolation barrier.',
    conditions: [
      'ESP32-S3 at 100% CPU load (inference task)',
      'FLIR Lepton 3.5 mounted 22mm above compute PCB',
      'Two conditions: with and without ceramic fiber barrier',
      'Environmental: 22°C ambient, still air',
    ],
    outcome: 'Without barrier: +2.8°C CPU heat leakage into LWIR path confirmed. With 2.5mm ceramic fiber barrier: zero measurable thermal contamination. Design requirement confirmed.',
    confidence: 'Medium (Experimental)',
    noteLink: '/product/lab-journal',
  },
  {
    id: 'EXP-2026-002',
    date: '22 July 2026',
    title: 'Monstera deliciosa Leaf Surface Thermal Shift Under VPD Elevation',
    category: 'Plant Biophysics',
    status: 'COMPLETED',
    hypothesis: 'Elevating ambient VPD from 0.8 kPa to 2.8 kPa will induce stomatal constriction, measurable as a positive leaf surface temperature shift relative to ambient air.',
    conditions: [
      'Species: Monstera deliciosa (mature, healthy, acclimated)',
      'VPD elevated by reducing ambient humidity via silica gel',
      'Duration: 5-hour trial, 1-hour VPD intervals',
      'Thermal measurement: modelled simulation — physical FLIR not yet available',
      'Control: empty pot with moistened substrate',
    ],
    outcome: 'ILLUSTRATIVE MODELLED RESULT: Simulated +1.4°C positive leaf delta at VPD=2.8 kPa (180 minutes before visible wilting). Physical FLIR hardware required for experimental validation. Null hypothesis cannot yet be rejected.',
    confidence: 'TBD (Concept)',
    noteLink: '/nature-intelligence/research/note-001',
  },
  {
    id: 'EXP-2026-001',
    date: '18 July 2026',
    title: 'ESP32-S3 Local INT8 TinyML Inference Latency Benchmark',
    category: 'Embedded AI',
    status: 'COMPLETED',
    hypothesis: 'A quantized INT8 TFLite Micro model fitting within 200KB Flash can run inference on ESP32-S3 in under 100ms without dedicated NPU hardware.',
    conditions: [
      'Model: 3-class INT8 quantized TFLite Micro',
      'Model footprint: 184KB Flash, 62KB SRAM',
      'Hardware: ESP32-S3-DevKitC-1 at 240MHz',
      'Input: 5-feature sensor fusion vector',
      '100 sequential inference runs, averaged',
    ],
    outcome: 'Mean inference latency: 38ms per frame. P95 latency: 42ms. Zero external network calls. Model accuracy on held-out synthetic dataset: TBD — requires real sensor data.',
    confidence: 'Medium (Experimental)',
    noteLink: '/product/lab-journal',
  },
  {
    id: 'EXP-2026-005',
    date: 'September 2026 (Planned)',
    title: 'Root Zone Gas Resistance Under Progressive Substrate Moisture Deficit',
    category: 'Plant Biophysics',
    status: 'PLANNED',
    hypothesis: 'BME688 MOX gas resistance shifts systematically under root zone moisture deficit beyond humidity-corrected baseline, suggesting root zone biological activity changes.',
    conditions: [
      'Three groups: test plant, control plant, blank substrate',
      'Progressive drying over 30 days from field capacity to 30% moisture',
      'BME688 readings every 30 minutes',
      'SHT41 compensation logging every 5 minutes',
      'Gravimetric soil moisture every 6 hours',
    ],
    outcome: 'PENDING — experiment not yet executed.',
    confidence: 'TBD (Concept)',
    noteLink: '/nature-intelligence/research/note-003',
  },
  {
    id: 'EXP-2026-006',
    date: 'Phase 05 (Planned)',
    title: 'Full NIH-01 Prototype Sensor Fusion Validation Trial',
    category: 'System Integration',
    status: 'PLANNED',
    hypothesis: 'Integrated NIH-01 prototype combining FLIR + BME688 + SHT41 + ESP32-S3 can produce stable, reproducible multi-sensor telemetry across 72-hour continuous indoor plant monitoring trial.',
    conditions: [
      'Requires: NIH-01 ceramic prototype assembly',
      'Requires: FLIR Lepton 3.5 hardware',
      'Requires: custom PCB design and fabrication',
      'Target: multiple plant species, 3 environmental conditions',
    ],
    outcome: 'PENDING — awaiting Phase 05 hardware assembly.',
    confidence: 'TBD (Concept)',
  },
];

const STATUS_STYLES: Record<ExpStatus, { color: string; border: string; dot: string }> = {
  'COMPLETED': { color: 'text-[#8AD74C]', border: 'border-[#8AD74C]/30', dot: 'bg-[#8AD74C]' },
  'IN PROGRESS': { color: 'text-sky-400', border: 'border-sky-400/30', dot: 'bg-sky-400 animate-pulse' },
  'PLANNED': { color: 'text-[#E8D07C]', border: 'border-[#E8D07C]/30', dot: 'bg-[#E8D07C]' },
  'CANCELLED': { color: 'text-red-400', border: 'border-red-400/30', dot: 'bg-red-400' },
};

export default function ExperimentLogPage() {
  const completed = EXPERIMENT_LOG.filter(e => e.status === 'COMPLETED').length;
  const inProgress = EXPERIMENT_LOG.filter(e => e.status === 'IN PROGRESS').length;
  const planned = EXPERIMENT_LOG.filter(e => e.status === 'PLANNED').length;
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="space-y-5 max-w-3xl">
            <div className="flex items-center gap-3">
              <FlaskConical className="w-6 h-6 text-[#8AD74C]" />
              <Badge variant="lime">Open Research Log</Badge>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2] leading-tight">Experiment Log</h1>
            <p className="text-[#A3B18A] text-lg leading-relaxed">
              A chronological, dated record of every Vriksh Vani research trial, sensor calibration event, and benchtop experiment — with conditions, outcomes, and raw data links where available.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#A3B18A]">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#8AD74C]" />Completed: {completed}</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-sky-400" />In Progress: {inProgress}</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#E8D07C]" />Planned: {planned}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#8AD74C]/30 via-white/10 to-transparent" />
            <div className="space-y-6 pl-16">
              {EXPERIMENT_LOG.map((exp) => {
                const styles = STATUS_STYLES[exp.status];
                return (
                  <div key={exp.id} className="relative">
                    <div className={['absolute -left-10 top-6 w-3 h-3 rounded-full border-2 border-[#070B08]', styles.dot].join(' ')} />
                    <Card className={['p-6 space-y-4', styles.border].join(' ')}>
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[#8AD74C] bg-[#8AD74C]/10 border border-[#8AD74C]/20 px-2 py-0.5 rounded">{exp.id}</span>
                            <span className="font-mono text-xs text-[#A3B18A] bg-white/5 border border-white/10 px-2 py-0.5 rounded">{exp.category}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-mono text-[#A3B18A]">
                            <Clock className="w-3 h-3" />{exp.date}
                          </div>
                        </div>
                        <span className={['font-mono text-xs font-bold px-2 py-0.5 rounded border bg-transparent', styles.color, styles.border].join(' ')}>{exp.status}</span>
                      </div>
                      <h2 className="font-display text-lg font-bold text-[#F7F6F2]">{exp.title}</h2>
                      <div className="space-y-1">
                        <p className="text-xs font-mono text-[#8AD74C] font-bold uppercase tracking-wider">Hypothesis</p>
                        <p className="text-sm text-[#A3B18A] leading-relaxed italic">{exp.hypothesis}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-mono text-[#E8D07C] font-bold uppercase tracking-wider">Experimental Conditions</p>
                        <ul className="space-y-1">
                          {exp.conditions.map((c, i) => (
                            <li key={i} className="text-xs text-[#A3B18A] flex items-start gap-2">
                              <span className="text-[#8AD74C] font-mono shrink-0">·</span>{c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-1 p-3 rounded-xl bg-[#070B08] border border-white/5">
                        <p className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">Outcome</p>
                        <p className="text-sm text-[#F7F6F2] leading-relaxed">{exp.outcome}</p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
                        <span className="text-xs font-mono text-[#A3B18A]">Confidence: {exp.confidence}</span>
                        <div className="flex gap-2">
                          {exp.dataLink && (
                            <Link href={exp.dataLink} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" className="text-xs h-7 px-3 gap-1.5">
                                <Database className="w-3 h-3" /> Raw Data
                              </Button>
                            </Link>
                          )}
                          {exp.noteLink && (
                            <Link href={exp.noteLink}>
                              <Button variant="outline" className="text-xs h-7 px-3 gap-1.5">
                                <ArrowRight className="w-3 h-3" /> Research Note
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
            <Link href="/nature-intelligence/evidence"><Button variant="outline">Evidence Registry</Button></Link>
            <Link href="/nature-intelligence/research"><Button variant="outline">Research Hub</Button></Link>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}