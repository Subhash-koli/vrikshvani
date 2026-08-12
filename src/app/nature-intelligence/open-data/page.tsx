import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Database,
  Leaf,
  ShieldCheck,
  UserCheck,
  FlaskConical,
  CalendarClock,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Open Data Initiative — Vriksh Vani Nature Intelligence',
  description:
    'The Vriksh Vani Open Data Initiative: our framework for sharing anonymized plant biometrics, VPD models, and thermal time-series data with the research community.',
};

const pillars = [
  { val: 'Open Access', label: 'CC BY 4.0 License Goal', icon: Database, color: 'text-[#8AD74C]' },
  { val: 'Non-Invasive', label: 'Thermal & Gas Biometrics', icon: Leaf, color: 'text-[#8AD74C]' },
  { val: 'Community', label: 'Early Research Cohort', icon: FlaskConical, color: 'text-[#E8D07C]' },
  { val: '100% Privacy', label: 'Zero Video / No Audio', icon: ShieldCheck, color: 'text-[#E8D07C]' },
];

const steps = [
  {
    icon: UserCheck,
    step: '01',
    title: 'Explicit Opt-In',
    desc: 'Participation in our data initiative is completely voluntary. Early prototype testers choose whether to contribute anonymized telemetry readings to the research pool.',
  },
  {
    icon: FlaskConical,
    step: '02',
    title: 'Anonymisation & Aggregation',
    desc: 'Telemetry strips all device identifiers and personal tags. Readings (leaf thermal delta, ambient humidity, VOC index) are aggregated at the species level.',
  },
  {
    icon: CalendarClock,
    step: '03',
    title: 'Open Research Sharing',
    desc: 'Compiled datasets will be published openly with detailed data cards outlining collection conditions, sensor models, and species calibration parameters.',
  },
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
              We believe the true value of a plant intelligence network is not merely the device, but the scientific knowledge it can generate. Vriksh Vani is committed to sharing anonymized plant biometrics with botanical researchers and citizen scientists.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pillars.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Card key={idx} className="text-center py-6 space-y-3">
                  <Icon className={`w-6 h-6 ${s.color} mx-auto`} />
                  <p className={`font-display text-2xl font-bold ${s.color}`}>{s.val}</p>
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
                Our Open Data Framework
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

          {/* Academic Collaboration Invite */}
          <Card className="p-8 md:p-10 border-[#8AD74C]/25 space-y-5 text-center">
            <Sparkles className="w-8 h-8 text-[#8AD74C] mx-auto" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F7F6F2]">
              Collaborate as an Academic or Botanist
            </h2>
            <p className="text-sm md:text-base text-[#A3B18A] max-w-xl mx-auto leading-relaxed">
              If you are researching stomatal conductance, plant transpiration dynamics, or embedded AI for environmental biometrics, we welcome joint studies and dataset collaboration.
            </p>
            <div className="pt-2">
              <Link href="mailto:science@vrikshvani.com">
                <Button variant="primary" size="lg">
                  Reach Out to science@vrikshvani.com →
                </Button>
              </Link>
            </div>
          </Card>

        </div>
      </section>

      <Footer />
    </main>
  );
}
