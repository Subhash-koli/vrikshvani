import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import TelemetryChart from '@/components/research/TelemetryChart';

export const metadata: Metadata = {
  title: 'Research Note #003 — Root Zone Gas Resistance & BME688 VOC Profiling | Vriksh Vani',
  description: 'Planned experimental methodology for investigating Bosch BME688 MOX gas resistance signals under controlled root zone moisture deficit conditions.',
  openGraph: {
    title: 'Research Note #003 — Root Zone Gas Resistance | Vriksh Vani',
    description: 'BME688 MOX sensor baseline drift characterization and VOC signal profiling under controlled root zone moisture conditions.',
    url: 'https://www.vrikshvani.com/nature-intelligence/research/note-003',
  },
};



const PIPELINE_STEPS = [
  { label: 'MEASUREMENT', val: 'BME688 total gas resistance (Ohm)', color: 'text-[#8AD74C]' },
  { label: 'FEATURE EXTRACTION', val: 'Delta-R normalised vs SHT41 humidity', color: 'text-[#E8D07C]' },
  { label: 'DRIFT CORRECTION', val: 'Blank control subtraction', color: 'text-sky-400' },
  { label: 'PATTERN DETECTION', val: 'Systematic shift > 2 sigma baseline', color: 'text-purple-400' },
  { label: 'INFERENCE (IF FOUND)', val: 'Possible root zone activity change', color: 'text-[#A3B18A]' },
  { label: 'CONFIDENCE', val: 'TBD — pending physical experiment', color: 'text-amber-400' },
];

const LIMITATIONS = [
  'BME688 cannot identify specific VOC species — only total reducing/oxidizing gas mixture shift.',
  'Root zone gas signals must travel through substrate, drainage layer, and pot wall — significant signal attenuation expected.',
  'MOX sensor cross-sensitivity: human exhalation CO2, cooking odors, and cleaning chemicals will produce larger signals than root zone biology.',
  'Experiment requires strict environmental enclosure control — any ambient VOC contamination invalidates results.',
  'Stomatal closure simultaneously affects leaf gas exchange AND ambient VOC levels — potential correlation without root zone causation.',
];

const HARDWARE = [
  { name: 'Bosch BME688', role: 'Primary gas resistance sensor', status: 'CANDIDATE' },
  { name: 'Sensirion SHT41', role: 'Ambient T/RH compensation', status: 'CANDIDATE' },
  { name: 'ESP32-S3 DevKit', role: 'Data logging and telemetry export', status: 'BENCHTOP TESTED' },
];

export default function ResearchNote003Page() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <article className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div>
            <Link href="/nature-intelligence/research" className="inline-flex items-center gap-2 text-sm text-[#A3B18A] hover:text-[#8AD74C] transition-colors font-mono">
              <ArrowLeft className="w-4 h-4" /> Back to Research Hub
            </Link>
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="gold">Research Note #003</Badge>
              <Badge variant="outline">BME688 · Gas Resistance · VOC Profiling</Badge>
              <Badge variant="glass">RESEARCH HYPOTHESIS</Badge>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Root Zone Gas Resistance Profiling Under Controlled Moisture Deficit Conditions
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A3B18A]">
              <span>Published: August 2026</span>
              <span>·</span>
              <span>Status: METHODOLOGY DRAFT — Experiment Pending Phase 05 Hardware</span>
            </div>
            <Card className="p-4 border-amber-500/30 bg-amber-950/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-200 leading-relaxed">
                  <p className="font-bold">METHODOLOGY DRAFT — NOT YET EXPERIMENTALLY EXECUTED</p>
                  <p className="mt-1">This note documents the planned experimental methodology. Telemetry below is illustrative modelled output — not empirical measurements from a physical benchtop trial. Physical execution is planned for Phase 05 (Prototype Validation).</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#8AD74C] bg-[#8AD74C]/10 border border-[#8AD74C]/30 px-2 py-0.5 rounded">01 — RESEARCH QUESTION</span>
            <Card className="p-6 border-[#8AD74C]/20">
              <p className="text-lg text-[#F7F6F2] leading-relaxed">
                Can the Bosch BME688 MOX gas resistance sensor detect systematic shifts in ambient root zone VOC profiles associated with progressive soil moisture deficit — and can these shifts be distinguished from temperature-driven baseline drift?
              </p>
            </Card>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#E8D07C] bg-[#E8D07C]/10 border border-[#E8D07C]/30 px-2 py-0.5 rounded">02 — HYPOTHESIS</span>
            <Card className="p-6 border-[#E8D07C]/20 space-y-3">
              <p className="text-[#A3B18A] leading-relaxed">
                As substrate moisture decreases, root zone microbial activity and root respiration rates change, producing detectable shifts in total volatile organic compound (VOC) concentration measurable by the BME688 MOX heater element as a systematic gas resistance shift — independent of ambient temperature fluctuation.
              </p>
              <p className="text-xs font-mono text-[#A3B18A] border-t border-white/5 pt-3">
                NULL HYPOTHESIS: Gas resistance shifts observed during substrate drying are entirely explainable by ambient temperature and humidity changes alone — not by root zone biological activity.
              </p>
            </Card>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-sky-400 bg-sky-900/20 border border-sky-400/30 px-2 py-0.5 rounded">03 — SCIENTIFIC BACKGROUND</span>
            <Card className="p-6 border-sky-400/20 space-y-4 text-sm text-[#A3B18A] leading-relaxed">
              <p>Metal oxide semiconductor (MOX) gas sensors detect changes in ambient gas composition via resistance changes across a heated ceramic substrate. The BME688 operates a resistive heater at 200–400 degrees C, causing oxidation and reduction reactions with target gas molecules on the SnO2 surface.</p>
              <p>Soil microbial communities produce VOCs including alcohols, aldehydes, and terpenoids. Root respiration produces CO2 and water vapour. As soil moisture decreases, anaerobic microbial populations shift, potentially altering VOC emission profiles detectable as systematic gas resistance changes.</p>
              <p className="text-[#F7F6F2] font-medium">Key limitation: BME688 is a broad-spectrum MOX sensor — it cannot identify individual VOC species. Any claimed biological signal requires careful elimination of temperature, humidity, and CO2 confounds.</p>
            </Card>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#8AD74C] bg-[#8AD74C]/10 border border-[#8AD74C]/30 px-2 py-0.5 rounded">04 — PLANNED METHODOLOGY</span>
            <Card className="p-6 border-[#8AD74C]/20 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-display font-bold text-[#F7F6F2]">Experimental Groups</p>
                  <ul className="space-y-2 text-[#A3B18A] list-disc pl-4">
                    <li>Test plant — progressive drying from field capacity to 30% soil moisture</li>
                    <li>Control — same species maintained at 80–90% field capacity</li>
                    <li>Blank — empty pot with substrate only, same drying protocol</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-display font-bold text-[#F7F6F2]">Measurement Protocol</p>
                  <ul className="space-y-2 text-[#A3B18A] list-disc pl-4">
                    <li>10-minute BME688 gas resistance readings every 30 minutes</li>
                    <li>SHT41 ambient T/RH logged every 5 minutes for compensation</li>
                    <li>Gravimetric soil moisture every 6 hours</li>
                    <li>Identical environmental enclosure for all groups</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#A3B18A] bg-white/5 border border-white/10 px-2 py-0.5 rounded">05 — TARGET HARDWARE</span>
            <Card className="p-6 border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                {HARDWARE.map((hw, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#070B08] border border-white/10 space-y-1">
                    <p className="font-bold text-[#F7F6F2]">{hw.name}</p>
                    <p className="text-[#A3B18A]">{hw.role}</p>
                    <span className="text-[#E8D07C]">{hw.status}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#E8D07C] bg-[#E8D07C]/10 border border-[#E8D07C]/30 px-2 py-0.5 rounded">06 — ILLUSTRATIVE PROJECTED TELEMETRY</span>
            <Card className="p-6 border-[#E8D07C]/30 space-y-3">
              <Badge variant="gold">SIMULATED MODEL — NOT EXPERIMENTAL DATA</Badge>
              <TelemetryChart />
              <p className="text-xs text-[#A3B18A]">Projected illustrative gas resistance trajectory under progressive substrate drying. Actual telemetry replaces this upon physical trial execution.</p>
            </Card>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-amber-400 bg-amber-900/20 border border-amber-400/30 px-2 py-0.5 rounded">07 — BME688 BASELINE DRIFT CHARACTERIZATION</span>
            <Card className="p-6 border-amber-500/20 space-y-4">
              <p className="text-sm text-[#A3B18A] leading-relaxed">BME688 MOX sensors exhibit significant long-term baseline drift due to MOX heater aging, ambient humidity history, and sensor poisoning from high VOC exposure. This experiment must account for drift before attributing gas resistance changes to root zone biology.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#070B08] border border-amber-400/20 space-y-2">
                  <p className="font-mono text-amber-400 font-bold">DRIFT SOURCES CATALOGUED</p>
                  <ul className="text-[#A3B18A] space-y-1 list-disc pl-4">
                    <li>Ambient RH changes (major driver)</li>
                    <li>MOX heater temperature stability</li>
                    <li>Sensor warm-up period (24h minimum)</li>
                    <li>Long-term heater element aging</li>
                  </ul>
                </div>
                <div className="p-3 rounded-xl bg-[#070B08] border border-[#8AD74C]/20 space-y-2">
                  <p className="font-mono text-[#8AD74C] font-bold">DRIFT CORRECTION APPROACH</p>
                  <ul className="text-[#A3B18A] space-y-1 list-disc pl-4">
                    <li>SHT41 T/RH compensation model</li>
                    <li>Blank control subtraction</li>
                    <li>24h stabilisation window before trials</li>
                    <li>Normalised resistance delta (not absolute)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#8AD74C] bg-[#8AD74C]/10 border border-[#8AD74C]/30 px-2 py-0.5 rounded">08 — MEASUREMENT PIPELINE</span>
            <Card className="p-6 border-[#8AD74C]/20">
              <div className="flex flex-col gap-0 items-start font-mono text-xs max-w-sm">
                {PIPELINE_STEPS.map((step, i) => (
                  <div key={i} className="flex flex-col items-start gap-0 w-full">
                    <div className="p-3 rounded-xl bg-[#070B08] border border-white/10 w-full">
                      <p className={step.color + ' font-bold'}>{step.label}</p>
                      <p className="text-[#A3B18A] mt-0.5">{step.val}</p>
                    </div>
                    {i < PIPELINE_STEPS.length - 1 && <div className="w-px h-4 bg-white/10 ml-4" />}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-red-400 bg-red-900/20 border border-red-400/30 px-2 py-0.5 rounded">09 — KNOWN LIMITATIONS</span>
            <Card className="p-6 border-red-400/20">
              <ul className="space-y-3 text-sm text-[#A3B18A]">
                {LIMITATIONS.map((lim, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    {lim}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#A3B18A] bg-white/5 border border-white/10 px-2 py-0.5 rounded">10 — CURRENT STATUS AND NEXT STEPS</span>
            <Card className="p-6 border-white/10 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="space-y-2">
                  <p className="text-[#8AD74C] font-bold">WHAT IS COMPLETE</p>
                  <ul className="text-[#A3B18A] space-y-1 list-disc pl-4">
                    <li>Experimental methodology designed</li>
                    <li>BME688 baseline drift literature review</li>
                    <li>Compensation model approach defined</li>
                    <li>Data schema and collection protocol ready</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-amber-400 font-bold">PENDING PHYSICAL EXECUTION</p>
                  <ul className="text-[#A3B18A] space-y-1 list-disc pl-4">
                    <li>BME688 + SHT41 benchtop PCB assembly</li>
                    <li>Environmental enclosure construction</li>
                    <li>30-day trial execution (Phase 05)</li>
                    <li>Statistical analysis and null hypothesis testing</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-3">
                <Link href="/nature-intelligence/research"><Button variant="outline" className="text-xs">Research Hub</Button></Link>
                <Link href="/nature-intelligence/evidence"><Button variant="outline" className="text-xs">Evidence Registry</Button></Link>
                <Link href="/nature-intelligence/experiment-log"><Button variant="outline" className="text-xs">Experiment Log</Button></Link>
              </div>
            </Card>
          </div>

        </div>
      </article>
      <Footer />
    </main>
  );
}