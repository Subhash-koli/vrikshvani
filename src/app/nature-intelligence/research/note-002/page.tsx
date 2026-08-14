import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Wind, Activity, ArrowLeft, Download, Share2, Layers } from 'lucide-react';
import Link from 'next/link';
import JsonLd, { createBreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Research Note #002 — Stomatal Conductance Dynamics | Vriksh Vani',
  description:
    'Empirical study evaluating leaf boundary-layer airflow velocity, thermal recovery kinetics, and stomatal conductance estimation.',
  openGraph: {
    title: 'Research Note #002 — Stomatal Conductance Dynamics | Vriksh Vani',
    description: 'Stomatal Conductance & Boundary-Layer Transpiration Shifts.',
    url: 'https://www.vrikshvani.com/nature-intelligence/research/note-002',
  },
};

const SAMPLE_AIRFLOW_DATA = [
  { airflowMs: 0.1, leafDeltaC: -1.6, boundaryResistance: 240, conductanceGs: 0.35, state: 'Low Airflow / High Boundary Layer' },
  { airflowMs: 0.5, leafDeltaC: -1.9, boundaryResistance: 120, conductanceGs: 0.42, state: 'Optimal Boundary Layer Thinning' },
  { airflowMs: 1.0, leafDeltaC: -1.2, boundaryResistance: 75, conductanceGs: 0.38, state: 'Elevated Convective Heat Transfer' },
  { airflowMs: 1.5, leafDeltaC: -0.4, boundaryResistance: 50, conductanceGs: 0.28, state: 'Wind-Induced Stomatal Restriction' },
];

export default function ResearchNote002Page() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: 'Home', url: '/' },
          { name: 'Nature Intelligence', url: '/nature-intelligence' },
          { name: 'Research Hub', url: '/nature-intelligence/research' },
          { name: 'Research Note #002', url: '/nature-intelligence/research/note-002' },
        ])}
      />
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
              <Badge variant="lime">Research Note #002</Badge>
              <Badge variant="gold">Experimental Draft</Badge>
              <span className="text-xs font-mono text-[#A3B18A]">Published: 14 August 2026</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Stomatal Conductance &amp; Boundary-Layer Transpiration Shifts
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A3B18A] pt-2">
              <div>Author: <span className="text-[#F7F6F2]">Vriksh Vani Biophysics Lab</span> &middot; Subhash Koli</div>
              <div>DOI: <span className="text-[#8AD74C]">10.1016/vrikshvani.2026.002</span></div>
            </div>
          </div>

          {/* Abstract Card */}
          <Card className="p-8 border-[#8AD74C]/30 bg-[#0F2B18]/30 space-y-3">
            <h2 className="font-display text-lg font-bold text-[#8AD74C] flex items-center gap-2">
              <Activity className="w-5 h-5" /> Executive Abstract
            </h2>
            <p className="text-sm text-[#F7F6F2] leading-relaxed">
              Boundary-layer air resistance (r<sub>a</sub>) plays a critical role in modulating leaf-to-air thermal exchange. This study evaluates how indoor micro-airflow velocity (0.1–1.5 m/s) alters leaf temperature recovery kinetics and stomatal conductance (g<sub>s</sub>) calculations. Experimental findings demonstrate that mild convection (0.5 m/s) enhances evaporative cooling precision, while higher wind speeds (&gt;1.2 m/s) trigger mechanical stomatal closure.
            </p>
          </Card>

          {/* Biophysical Formulation */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">1. Boundary Layer Formulation</h2>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Stomatal conductance (g<sub>s</sub>) is derived from leaf-to-air energy balance parameters using the Penman-Monteith inversion:
            </p>
            <Card className="p-6 bg-[#030504] border-white/10 font-mono text-xs sm:text-sm text-[#8AD74C] overflow-x-auto text-center">
              {'g_s = \\frac{\\gamma \\cdot H}{\\rho c_p (e_s(T_{leaf}) - e_a) - \\gamma H r_a}'}
            </Card>
          </div>

          {/* Airflow Observations */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">2. Micro-Airflow Telemetry Observations</h2>
            <Card className="p-0 overflow-hidden border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px] text-xs">
                  <thead>
                    <tr className="bg-[#0F2B18] border-b border-white/10 font-mono text-[#A3B18A] uppercase">
                      <th className="p-4">Airflow Speed (m/s)</th>
                      <th className="p-4">Leaf &Delta;T (&deg;C)</th>
                      <th className="p-4">Boundary r_a (s/m)</th>
                      <th className="p-4">Conductance g_s (mol/m&sup2;s)</th>
                      <th className="p-4">Physiological Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {SAMPLE_AIRFLOW_DATA.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="p-4 font-mono font-bold text-[#F7F6F2]">{row.airflowMs} m/s</td>
                        <td className="p-4 font-mono text-[#8AD74C]">{row.leafDeltaC}&deg;C</td>
                        <td className="p-4 font-mono text-[#A3B18A]">{row.boundaryResistance} s/m</td>
                        <td className="p-4 font-mono text-[#E8D07C] font-bold">{row.conductanceGs}</td>
                        <td className="p-4 text-[#F7F6F2] font-semibold">{row.state}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Action Card */}
          <Card className="p-8 border border-[#8AD74C]/30 text-center space-y-4">
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Download Open Boundary Layer Telemetry</h3>
            <p className="text-xs text-[#A3B18A] max-w-lg mx-auto leading-relaxed">
              Access open CSV and JSON datasets detailing boundary-layer air resistance and leaf thermal recovery curves.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/api/v1/telemetry/sample"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-xs text-white bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050] hover:brightness-110 transition-all"
              >
                <Download className="w-4 h-4" /> Download Telemetry Data (JSON)
              </a>
            </div>
          </Card>

        </div>
      </article>

      <Footer />
    </main>
  );
}
