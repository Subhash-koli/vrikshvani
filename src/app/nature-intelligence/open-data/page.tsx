import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Database,
  Globe,
  Leaf,
  ShieldCheck,
  UserCheck,
  FlaskConical,
  CalendarClock,
  Download,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Open Data Programme — Vriksh Vani Nature Intelligence',
  description:
    'The Vriksh Vani Open Data Programme donates anonymised plant biometric datasets to the global research community. Access VPD, thermal delta, and gas resistance time-series data.',
};

const stats = [
  { val: '1.2M+', label: 'Readings / Day', icon: Database, color: 'text-[#8AD74C]' },
  { val: '847', label: 'Species Covered', icon: Leaf, color: 'text-[#8AD74C]' },
  { val: '23', label: 'Countries', icon: Globe, color: 'text-[#E8D07C]' },
  { val: '100%', label: 'Anonymised', icon: ShieldCheck, color: 'text-[#E8D07C]' },
];

const steps = [
  {
    icon: UserCheck,
    step: '01',
    title: 'User Opt-In',
    desc: 'NIH-01 owners who choose to participate toggle a single consent switch in the Vriksh Vani app. Participation is entirely voluntary, reversible at any time, and fully disclosed under our open data privacy addendum. No personally identifiable information is ever associated with the uploaded telemetry.',
  },
  {
    icon: FlaskConical,
    step: '02',
    title: 'Anonymisation & Aggregation',
    desc: 'Each participating hub strips device identifiers and substitutes a rotating pseudonymous node ID before transmission. Our server-side pipeline applies differential privacy noise to all continuous sensor streams, ensuring individual plant profiles cannot be reconstructed or re-identified. Data is then aggregated into species-level statistical batches.',
  },
  {
    icon: CalendarClock,
    step: '03',
    title: 'Dataset Publication (Quarterly)',
    desc: 'Every three months we compile the aggregated, anonymised telemetry into structured CSV datasets and publish them openly on our developer portal. Each release is accompanied by a data card describing collection methodology, sensor models, species taxonomy mapping, and known limitations.',
  },
];

const datasets = [
  {
    name: 'VPD Response Time-Series v3',
    species: 847,
    readings: '2.1M',
    updated: 'July 2026',
    download: 'CSV (420 MB)',
  },
  {
    name: 'Leaf Temp Delta Benchmark v2',
    species: 312,
    readings: '890K',
    updated: 'June 2026',
    download: 'CSV (178 MB)',
  },
  {
    name: 'Gas Resistance Soil Proxy Dataset v1',
    species: 156,
    readings: '445K',
    updated: 'May 2026',
    download: 'CSV (89 MB)',
  },
  {
    name: 'Seasonal Circadian Rhythm Dataset v1',
    species: 228,
    readings: '670K',
    updated: 'July 2026',
    download: 'CSV (134 MB)',
  },
];

const partners = [
  { name: 'IISc Bengaluru', country: 'India', note: 'Plant Biophysics Division' },
  { name: 'TIFR Mumbai', country: 'India', note: 'Computational Biology Group' },
  { name: 'RHS Wisley', country: 'United Kingdom', note: 'Plant Science Department' },
  { name: 'USDA Plant Sciences', country: 'United States', note: 'Agricultural Research Service' },
];

export default function OpenDataPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Hero */}
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <Badge variant="lime">Open Data Initiative</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Giving Data Back to Science.
            </h1>
            <p className="text-[#A3B18A] text-lg leading-relaxed">
              Every NIH-01 hub — with the explicit consent of its owner — contributes anonymised plant biometric readings to a growing global dataset. Vapour pressure deficit curves, leaf thermal deltas, gas resistance signatures, and circadian rhythm patterns: all freely available to researchers, institutions, and citizen scientists worldwide.
            </p>
            <p className="text-[#A3B18A] leading-relaxed">
              We believe the most significant scientific value of a plant-monitoring network is not the product it enables, but the knowledge it can generate. The Vriksh Vani Open Data Programme is our commitment to returning that value to the scientific commons.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Card key={idx} className="text-center py-6 space-y-3">
                  <Icon className={`w-6 h-6 ${s.color} mx-auto`} />
                  <p className={`font-display text-3xl font-bold ${s.color}`}>{s.val}</p>
                  <p className="text-xs font-mono text-[#A3B18A] uppercase tracking-wider">{s.label}</p>
                </Card>
              );
            })}
          </div>

          {/* How It Works */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <FlaskConical className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F7F6F2]">
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <Card key={s.step} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#8AD74C] bg-[#8AD74C]/10 border border-[#8AD74C]/20 rounded-full px-2 py-0.5">
                        {s.step}
                      </span>
                      <Icon className="w-5 h-5 text-[#8AD74C]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#F7F6F2]">{s.title}</h3>
                    <p className="text-sm text-[#A3B18A] leading-relaxed">{s.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Current Datasets Table */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F7F6F2]">
                Current Datasets
              </h2>
            </div>
            <Card className="p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="text-left font-mono text-xs text-[#A3B18A] uppercase tracking-wider px-6 py-4">
                        Dataset Name
                      </th>
                      <th className="text-right font-mono text-xs text-[#A3B18A] uppercase tracking-wider px-4 py-4">
                        Species
                      </th>
                      <th className="text-right font-mono text-xs text-[#A3B18A] uppercase tracking-wider px-4 py-4">
                        Readings
                      </th>
                      <th className="text-right font-mono text-xs text-[#A3B18A] uppercase tracking-wider px-4 py-4">
                        Last Updated
                      </th>
                      <th className="text-right font-mono text-xs text-[#A3B18A] uppercase tracking-wider px-6 py-4">
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {datasets.map((d, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="px-6 py-5">
                          <p className="font-display font-semibold text-[#F7F6F2]">{d.name}</p>
                        </td>
                        <td className="px-4 py-5 text-right font-mono text-[#8AD74C]">
                          {d.species}
                        </td>
                        <td className="px-4 py-5 text-right font-mono text-[#8AD74C]">
                          {d.readings}
                        </td>
                        <td className="px-4 py-5 text-right text-[#A3B18A] font-mono text-xs">
                          {d.updated}
                        </td>
                        <td className="px-6 py-5 text-right">
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E8D07C] bg-[#E8D07C]/10 border border-[#E8D07C]/20 rounded-full px-3 py-1">
                            <Download className="w-3 h-3" />
                            {d.download}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <p className="text-xs font-mono text-[#A3B18A]">
              All datasets released quarterly. Next release: October 2026.
            </p>
          </div>

          {/* How to Access */}
          <Card className="space-y-5 border border-[#8AD74C]/20">
            <div className="flex items-center gap-3">
              <ExternalLink className="w-5 h-5 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">How to Access</h2>
            </div>
            <p className="text-[#A3B18A] leading-relaxed">
              All datasets are available without registration via the{' '}
              <Link href="/developers" className="text-[#8AD74C] underline underline-offset-2 hover:text-[#F7F6F2] transition-colors">
                Vriksh Vani Developer Portal
              </Link>
              . Direct download URLs, data schema documentation, and Python ingestion scripts are provided for each release. For programmatic access and scheduled synchronisation, use the{' '}
              <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">GET /v1/open-data/datasets</code>{' '}
              API endpoint — no API key required for open datasets.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="gold">CC BY 4.0 Licensed</Badge>
              <p className="text-xs text-[#A3B18A]">
                Free to share, adapt, and use for any purpose including commercial research — attribution required.
              </p>
            </div>
            <Link href="/developers">
              <Button variant="outline" size="md">
                Visit Developer Portal →
              </Button>
            </Link>
          </Card>

          {/* Research Partners */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#A3B18A]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">
                Research Partners
              </h2>
            </div>
            <p className="text-[#A3B18A] leading-relaxed">
              The following institutions have formally engaged with the Vriksh Vani Open Data Programme — validating methodology, co-authoring data papers, and using the datasets in ongoing research programmes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {partners.map((p, idx) => (
                <Card key={idx} className="text-center space-y-2 py-6 border border-white/10">
                  <p className="font-display font-bold text-[#F7F6F2]">{p.name}</p>
                  <p className="text-xs font-mono text-[#8AD74C]">{p.country}</p>
                  <p className="text-xs text-[#A3B18A]">{p.note}</p>
                </Card>
              ))}
            </div>
            <p className="text-xs text-[#A3B18A]">
              Interested in partnering? Contact our research team at{' '}
              <span className="font-mono text-[#8AD74C]">science@vrikshvani.com</span>
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
