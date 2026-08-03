import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Leaf, Globe, FlaskConical } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kew Gardens Partnership — Vriksh Vani Research',
  description: 'The Vriksh Vani–Kew Gardens research partnership: validating NIH-01 sensor accuracy against the world\'s most comprehensive living plant collection.',
};

const projects = [
  {
    icon: FlaskConical,
    title: 'Rare Species VPD Calibration Study',
    status: 'Active — Phase 1',
    desc: 'NIH-01 hubs deployed in Kew\'s Princess of Wales Conservatory to calibrate VPD response models for 47 rare tropical species not available in ex-situ commercial collections.',
    output: 'Target: Global baseline VPD dataset for rare species',
  },
  {
    icon: Globe,
    title: 'Climate Change Stress Modelling',
    status: 'Planning — Q1 2027',
    desc: 'Longitudinal study using NIH-01 thermal imaging to document how projected 2050 temperature and humidity shifts will affect common indoor plant species from tropical climate zones.',
    output: 'Target: Climate adaptation guidance for plant collectors',
  },
  {
    icon: Leaf,
    title: 'Species Database Expansion',
    status: 'Active — Ongoing',
    desc: 'Kew scientists contribute validated care parameters for Kew-documented species to the Vriksh Vani species database, expanding coverage for subtropical and dry tropical plants.',
    output: 'Bi-annual species database updates',
  },
];

export default function KewGardensPartnershipPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="gold">Research Partnership</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Vriksh Vani × Royal Botanic Gardens, Kew
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              A scientific collaboration with the world&apos;s leading plant science institution to validate NIH-01&apos;s biometric intelligence across the world&apos;s most diverse living plant collection.
            </p>
          </div>

          {/* Partner badge */}
          <Card className="p-8 flex flex-col md:flex-row items-center gap-6 border-[#E8D07C]/20">
            <div className="w-20 h-20 rounded-2xl bg-[#0F2B18] border border-white/10 flex items-center justify-center shrink-0">
              <span className="font-display font-black text-2xl text-[#E8D07C]">KEW</span>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Royal Botanic Gardens, Kew</h2>
              <p className="text-sm text-[#A3B18A] mt-1">Established 1759 · Richmond, London · UNESCO World Heritage Site</p>
              <p className="text-sm text-[#A3B18A] mt-2">Partnership MOU signed: March 2026. 2-year collaboration covering species database validation, VPD calibration against reference collections, and climate adaptation research.</p>
            </div>
          </Card>

          {/* Projects */}
          <div className="space-y-5">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Joint Research Projects</h2>
            {projects.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Card key={idx} className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Icon className="w-5 h-5 text-[#E8D07C] shrink-0" />
                    <h3 className="font-display font-bold text-[#F7F6F2]">{p.title}</h3>
                    <span className="ml-auto font-mono text-xs text-[#E8D07C] shrink-0">{p.status}</span>
                  </div>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{p.desc}</p>
                  <p className="text-xs font-mono text-[#A3B18A]">Output: {p.output}</p>
                </Card>
              );
            })}
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/nature-intelligence/iisc-partnership">
              <Button variant="outline">IISc Partnership →</Button>
            </Link>
            <Link href="/nature-intelligence/research">
              <Button variant="primary">All Research →</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
