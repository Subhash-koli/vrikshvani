import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck } from 'lucide-react';
import EvidenceDashboardClient from '@/components/research/EvidenceDashboardClient';

export const metadata: Metadata = {
  title: 'Evidence & Truth Registry — Vriksh Vani Nature Intelligence',
  description: 'Interactive status index of Vriksh Vani biophysical claims, hardware specifications, research hypotheses, and prototype verification metrics — filterable by category, status, and confidence level.',
  openGraph: {
    title: 'Evidence & Truth Registry — Vriksh Vani Nature Intelligence',
    description: 'Transparent classification of Vriksh Vani claims across live research, prototype hardware, and active research hypotheses.',
    url: 'https://www.vrikshvani.com/nature-intelligence/evidence',
  },
};

export default function EvidenceRegistryPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Hero */}
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#8AD74C]" />
              <Badge variant="lime">Evidence & Truth Registry</Badge>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Transparent Claim Classification
            </h1>
            <p className="text-[#A3B18A] text-lg leading-relaxed">
              Every major Vriksh Vani claim — scientific, hardware, AI, and legal — classified by status, evidence type, and confidence level. No claim is presented without its evidential basis.
            </p>
            <p className="text-xs font-mono text-[#A3B18A]">
              Status system: VERIFIED · PROTOTYPE · RESEARCH HYPOTHESIS · TARGET CONCEPT · SIMULATION
            </p>
          </div>

          {/* Interactive Dashboard */}
          <EvidenceDashboardClient />

        </div>
      </section>

      <Footer />
    </main>
  );
}
