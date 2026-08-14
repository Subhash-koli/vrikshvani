import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, ArrowLeft, ExternalLink, Activity, Database, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Evidence & Truth Registry — Vriksh Vani Nature Intelligence',
  description:
    'Authoritative status index of Vriksh Vani biophysical claims, hardware specifications, research hypotheses, and prototype verification metrics.',
  openGraph: {
    title: 'Evidence & Truth Registry — Vriksh Vani Nature Intelligence',
    description: 'Transparent classification of Vriksh Vani claims across live code, prototype hardware, and active research hypotheses.',
    url: 'https://www.vrikshvani.com/nature-intelligence/evidence',
  },
};

interface ClaimEntry {
  id: string;
  claim: string;
  category: 'Scientific' | 'Hardware' | 'AI & Software' | 'Environmental' | 'Legal & Privacy';
  status: 'LIVE' | 'VERIFIED' | 'PROTOTYPE' | 'RESEARCH HYPOTHESIS' | 'TARGET CONCEPT' | 'SIMULATION';
  tagVariant: 'lime' | 'gold' | 'glass' | 'outline';
  evidence: string;
  link: string;
}

const EVIDENCE_REGISTRY: ClaimEntry[] = [
  {
    id: 'EVD-001',
    claim: 'Foliar Transpiration Evaporative Cooling',
    category: 'Scientific',
    status: 'VERIFIED',
    tagVariant: 'lime',
    evidence: 'Established physical principle. Foliar water loss causes leaf temperature reduction relative to ambient air.',
    link: '/nature-intelligence/research/note-001',
  },
  {
    id: 'EVD-002',
    claim: 'Pre-Wilting Stomatal Stress Signatures',
    category: 'Scientific',
    status: 'RESEARCH HYPOTHESIS',
    tagVariant: 'gold',
    evidence: 'Research Note #001 empirical benchtop trial on Monstera deliciosa (+1.4°C thermal shift 180 min prior to wilting).',
    link: '/nature-intelligence/research/note-001',
  },
  {
    id: 'EVD-003',
    claim: 'FLIR Thermal Optics Integration',
    category: 'Hardware',
    status: 'TARGET CONCEPT',
    tagVariant: 'glass',
    evidence: 'NIH-01 target hardware specification utilizing FLIR Lepton 3.5 LWIR core (160x120 pixels).',
    link: '/product',
  },
  {
    id: 'EVD-004',
    claim: 'Bosch BME688 MOX Gas Resistance Sensing',
    category: 'Hardware',
    status: 'TARGET CONCEPT',
    tagVariant: 'glass',
    evidence: 'Target hardware specification integrating Bosch BME688 MOX sensor for total VOC resistance monitoring.',
    link: '/product/craftsmanship',
  },
  {
    id: 'EVD-005',
    claim: 'NTE™ Neural Voice Output Synthesis',
    category: 'AI & Software',
    status: 'SIMULATION',
    tagVariant: 'outline',
    evidence: 'Interactive website speech synthesis concept mapping biophysical telemetry into spoken human text.',
    link: '/nature-intelligence',
  },
  {
    id: 'EVD-006',
    claim: 'Local On-Device TinyML Quantization',
    category: 'AI & Software',
    status: 'RESEARCH HYPOTHESIS',
    tagVariant: 'gold',
    evidence: 'Open Python SDK reference implementation (vrikshvani-py) for local VPD and stomatal state inference.',
    link: '/nature-intelligence/research',
  },
  {
    id: 'EVD-007',
    claim: 'Handcrafted Kiln-Fired Ceramic Shell',
    category: 'Hardware',
    status: 'TARGET CONCEPT',
    tagVariant: 'glass',
    evidence: 'Biophilic ceramic shell target using stoneware clay bodies fired at 1,250°C.',
    link: '/product/craftsmanship',
  },
  {
    id: 'EVD-008',
    claim: 'Volatile SRAM Frame Overwrite Privacy',
    category: 'Legal & Privacy',
    status: 'TARGET CONCEPT',
    tagVariant: 'lime',
    evidence: 'Target hardware architecture executing local edge processing in volatile SRAM with zero cloud video storage.',
    link: '/privacy',
  },
  {
    id: 'EVD-009',
    claim: 'Waitlist Registration Database API',
    category: 'AI & Software',
    status: 'LIVE',
    tagVariant: 'lime',
    evidence: 'Live production Next.js API route backed by PostgreSQL, Prisma ORM, and Zod schema validation.',
    link: '/waitlist',
  },
];

export default function EvidenceRegistryPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

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
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="lime" className="px-4 py-1.5 font-mono text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8AD74C]" /> Truth Before Growth
            </Badge>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Evidence &amp; Truth Registry
            </h1>

            <p className="text-[#A3B18A] text-base sm:text-lg leading-relaxed">
              Vriksh Vani classifies every technological claim, hardware feature, biophysical hypothesis, and software capability by its verified stage of development.
            </p>
          </div>

          {/* Registry Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 space-y-2 border-white/10">
              <CheckCircle2 className="w-5 h-5 text-[#8AD74C]" />
              <h2 className="font-display font-bold text-[#F7F6F2]">LIVE / VERIFIED</h2>
              <p className="text-xs text-[#A3B18A] leading-relaxed">
                Implemented in active production code or backed by peer-reviewed physical laws.
              </p>
            </Card>

            <Card className="p-6 space-y-2 border-white/10">
              <Activity className="w-5 h-5 text-[#E8D07C]" />
              <h2 className="font-display font-bold text-[#F7F6F2]">PROTOTYPE / HYPOTHESIS</h2>
              <p className="text-xs text-[#A3B18A] leading-relaxed">
                Empirical benchtop trial under active laboratory or sensor testbed validation.
              </p>
            </Card>

            <Card className="p-6 space-y-2 border-white/10">
              <Database className="w-5 h-5 text-sky-400" />
              <h2 className="font-display font-bold text-[#F7F6F2]">TARGET CONCEPT / SIMULATION</h2>
              <p className="text-xs text-[#A3B18A] leading-relaxed">
                Hardware design targets, non-live software simulations, and future ecosystem goals.
              </p>
            </Card>
          </div>

          {/* Master Registry Table */}
          <Card className="p-0 overflow-hidden border-[#8AD74C]/30 shadow-2xl">
            <div className="p-6 bg-[#0F2B18]/40 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-display font-bold text-lg text-[#F7F6F2]">Official Claims Index</h2>
                <p className="text-xs text-[#A3B18A]">Last Updated: August 2026 &middot; Vriksh Vani Open Registry v1.0</p>
              </div>
              <Badge variant="lime">9 Core Registered Claims</Badge>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px] text-xs">
                <thead>
                  <tr className="bg-[#030504] border-b border-white/10 font-mono text-[#A3B18A] uppercase">
                    <th className="p-4">ID</th>
                    <th className="p-4">Claim / Capability</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Verified Status</th>
                    <th className="p-4">Evidence &amp; Verification Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {EVIDENCE_REGISTRY.map((row) => (
                    <tr key={row.id} className="hover:bg-white/[0.02]">
                      <td className="p-4 font-mono text-[#8AD74C] font-bold">{row.id}</td>
                      <td className="p-4 font-display font-bold text-[#F7F6F2]">{row.claim}</td>
                      <td className="p-4 font-mono text-[#A3B18A]">{row.category}</td>
                      <td className="p-4">
                        <Badge variant={row.tagVariant}>{row.status}</Badge>
                      </td>
                      <td className="p-4 text-[#A3B18A] leading-relaxed">
                        <div className="space-y-1">
                          <p>{row.evidence}</p>
                          <Link
                            href={row.link}
                            className="inline-flex items-center gap-1 text-[#8AD74C] hover:underline font-mono text-[11px]"
                          >
                            View Document <ExternalLink className="w-3 h-3" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

        </div>
      </section>

      <Footer />
    </main>
  );
}
