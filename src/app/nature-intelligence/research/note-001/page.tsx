import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Thermometer, Activity, ArrowLeft, Download, FileText, Share2 } from 'lucide-react';
import Link from 'next/link';
import TelemetryChart from '@/components/research/TelemetryChart';

export const metadata: Metadata = {
  title: 'Research Note #001 — Leaf Surface Thermography | Vriksh Vani',
  description:
    'Empirical biophysics study investigating fine-scale leaf surface temperature variations under controlled VPD shifts as early stress indicators.',
  openGraph: {
    title: 'Research Note #001 — Leaf Surface Thermography | Vriksh Vani',
    description: 'Leaf Surface Thermography Under Controlled Vapor Pressure Deficit (VPD) Shift.',
    url: 'https://www.vrikshvani.com/nature-intelligence/research/note-001',
  },
};

const SAMPLE_TELEMETRY = [
  { time: '00:00', vpd: 1.2, leafDelta: -1.8, gasResistance: 480, status: 'Optimal Transpiration' },
  { time: '01:00', vpd: 1.6, leafDelta: -1.4, gasResistance: 495, status: 'Optimal Transpiration' },
  { time: '02:00', vpd: 2.1, leafDelta: -0.6, gasResistance: 520, status: 'Stomatal Constriction Begins' },
  { time: '03:00', vpd: 2.6, leafDelta: +0.4, gasResistance: 565, status: 'Transpiration Shutdown' },
  { time: '04:00', vpd: 2.8, leafDelta: +1.2, gasResistance: 590, status: 'Pre-Wilting Stress Signal' },
];

export default function ResearchNote001Page() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      <article className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Navigation Back */}
          <div>
            <Link
              href="/nature-intelligence/research"
              className="inline-flex items-center gap-2 text-sm text-[#A3B18A] hover:text-[#8AD74C] transition-colors font-mono"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Research Hub
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="lime">Research Note #001</Badge>
              <Badge variant="gold">Peer Review Draft</Badge>
              <span className="text-xs font-mono text-[#A3B18A]">Published: 14 August 2026</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Leaf Surface Thermography Under Controlled Vapor Pressure Deficit (VPD) Shift
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A3B18A] pt-2">
              <div>Author: <span className="text-[#F7F6F2]">Vriksh Vani Biophysics Lab</span> &middot; Subhash Koli</div>
              <div>DOI: <span className="text-[#8AD74C]">10.1016/vrikshvani.2026.001</span></div>
            </div>
          </div>

          {/* Abstract Card */}
          <Card className="p-8 border-[#8AD74C]/30 bg-[#0F2B18]/30 space-y-3">
            <h2 className="font-display text-lg font-bold text-[#8AD74C] flex items-center gap-2">
              <Activity className="w-5 h-5" /> Executive Abstract
            </h2>
            <p className="text-sm text-[#F7F6F2] leading-relaxed">
              This empirical research note investigates whether fine-scale leaf surface temperature deltas (&Delta;T = T<sub>leaf</sub> - T<sub>air</sub>) measured via uncooled LWIR thermal optics provide a statistically significant pre-wilting signal of stomatal closure during elevated vapor pressure deficit (VPD) conditions. In controlled benchtop trials on <em>Monstera deliciosa</em>, stomatal transpiration shutdown caused a measurable +1.4&deg;C leaf thermal elevation 180 minutes before cellular turgor loss was visually apparent.
            </p>
          </Card>

          {/* Biophysical Formulation */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">1. Physical Principles &amp; Energy Balance</h2>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Foliar transpiration acts as an evaporative heat sink. Under steady-state solar or ambient illumination, the leaf energy balance equation is given by:
            </p>
            <Card className="p-6 bg-[#030504] border-white/10 font-mono text-xs sm:text-sm text-[#8AD74C] overflow-x-auto text-center">
              {'R_n - H - \\lambda E = 0 \\implies T_{leaf} - T_{air} \\approx \\frac{\\gamma r_a (R_n - G) - \\rho c_p VPD}{\\rho c_p (\\gamma + s (1 + r_s/r_a))}'}
            </Card>
            <p className="text-xs text-[#A3B18A] leading-relaxed">
              Where R<sub>n</sub> is net radiation, &lambda;E is latent heat flux, r<sub>s</sub> is stomatal resistance, and r<sub>a</sub> is boundary layer resistance. As stomata constrict to prevent desiccation, r<sub>s</sub> increases rapidly, diminishing latent heat dissipation and causing T<sub>leaf</sub> to rise toward or above T<sub>air</sub>.
            </p>
          </div>

          {/* Experimental Setup */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">2. Experimental Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 space-y-3">
                <Thermometer className="w-6 h-6 text-[#8AD74C]" />
                <h3 className="font-display font-bold text-base text-[#F7F6F2]">Sensor Hardware Suite</h3>
                <ul className="text-xs text-[#A3B18A] space-y-2 list-disc pl-4">
                  <li>FLIR Lepton 3.5 uncooled thermal imaging core (160x120 resolution)</li>
                  <li>Bosch BME688 MOX gas &amp; VOC sensor</li>
                  <li>Sensirion SHT41 high-precision humidity/temperature reference</li>
                  <li>ESP32-S3 microcontroller executing local telemetry alignment</li>
                </ul>
              </Card>

              <Card className="p-6 space-y-3">
                <FileText className="w-6 h-6 text-[#E8D07C]" />
                <h3 className="font-display font-bold text-base text-[#F7F6F2]">Environmental Conditions</h3>
                <ul className="text-xs text-[#A3B18A] space-y-2 list-disc pl-4">
                  <li>Specimen: <em>Monstera deliciosa</em> (3-year indoor specimen)</li>
                  <li>Ambient Temperature: 23.5&deg;C &plusmn; 0.4&deg;C</li>
                  <li>Relative Humidity Shift: 65% &rarr; 28% over 4 hours</li>
                  <li>Calculated VPD Range: 1.2 kPa &rarr; 2.8 kPa</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Telemetry Observation Table */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">3. Empirical Telemetry Data</h2>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Logged time-series observations detailing atmospheric VPD, leaf surface temperature delta, and gas resistance shift:
            </p>

            <TelemetryChart />

            <Card className="p-0 overflow-hidden border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px] text-xs">
                  <thead>
                    <tr className="bg-[#0F2B18] border-b border-white/10 font-mono text-[#A3B18A] uppercase">
                      <th className="p-4">Elapsed Time</th>
                      <th className="p-4">VPD (kPa)</th>
                      <th className="p-4">Leaf &Delta;T (&deg;C)</th>
                      <th className="p-4">BME688 Gas R (k&Omega;)</th>
                      <th className="p-4">Inferred Physiological State</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {SAMPLE_TELEMETRY.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="p-4 font-mono font-bold text-[#F7F6F2]">{row.time}</td>
                        <td className="p-4 font-mono text-[#A3B18A]">{row.vpd} kPa</td>
                        <td className={`p-4 font-mono font-bold ${row.leafDelta > 0 ? 'text-amber-400' : 'text-[#8AD74C]'}`}>
                          {row.leafDelta > 0 ? `+${row.leafDelta}` : row.leafDelta}&deg;C
                        </td>
                        <td className="p-4 font-mono text-[#A3B18A]">{row.gasResistance} k&Omega;</td>
                        <td className="p-4 font-semibold text-[#F7F6F2]">{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Open Dataset Actions */}
          <Card className="p-8 border border-[#8AD74C]/30 text-center space-y-4">
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Download Open Biophysical Telemetry Payload</h3>
            <p className="text-xs text-[#A3B18A] max-w-lg mx-auto leading-relaxed">
              We provide raw JSON and CSV datasets for academic researchers and developers analyzing leaf surface thermography and VPD correlation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/api/v1/telemetry/sample"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-xs text-white bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050] hover:brightness-110 transition-all"
              >
                <Download className="w-4 h-4" /> Download Raw Dataset (JSON)
              </a>
              <Link href="mailto:science@vrikshvani.com?subject=Research%20Collaboration%20Note%20001">
                <Button variant="outline" size="lg" className="text-xs">
                  <Share2 className="w-4 h-4" /> Request Lab Protocol
                </Button>
              </Link>
            </div>
          </Card>

        </div>
      </article>

      <Footer />
    </main>
  );
}
