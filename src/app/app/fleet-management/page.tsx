import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  LayoutGrid,
  BellRing,
  CalendarDays,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Layers,
  MonitorCheck,
  Lock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fleet Management — Vriksh Vani App',
  description:
    'Manage unlimited NIH-01 hubs from a single dashboard. Real-time health scores, consolidated VPD alerts, and bulk plant scheduling for enterprise installations.',
};

const features = [
  {
    icon: LayoutGrid,
    title: 'Unified Health Map',
    badge: 'Visual Overview',
    description:
      'Every NIH-01 hub in your installation rendered as a live tile in an interactive grid. Colour-coded health scores — deep green for thriving, amber for attention needed, red for critical — let you parse a 200-plant installation in under five seconds. Click any tile to drill into a full biometric dashboard: real-time VPD trace, soil moisture curve, transpiration index, and the last 30-day health score trend. Filter by floor, zone, or species group. Export the full map as a PDF for client or facilities-management reports.',
    stat: '200+',
    statLabel: 'Hubs Per View',
  },
  {
    icon: BellRing,
    title: 'Consolidated Alert Centre',
    badge: 'Smart Alerting',
    description:
      'All VPD warnings, watering reminders, soil-nutrient alerts, and anomaly detections from every hub surface in a single chronological feed — no more switching between individual plant dashboards. Filter alerts by severity (Critical · Warning · Info), by plant group, or by signal type (moisture, VPD, temperature, health score). Mark alerts as resolved and assign them to team members. Configure alert routing: push notifications to the on-call horticulturist, email digest to the facilities manager, and a weekly Slack summary to leadership — all from one rule engine.',
    stat: '6',
    statLabel: 'Signal Types Monitored',
  },
  {
    icon: CalendarDays,
    title: 'Bulk Scheduling',
    badge: 'Automation',
    description:
      'Create care programs once and propagate them across any subset of your fleet. Push watering reminder schedules to an entire floor, assign a seasonal fertilising program to all Ficus benjamina specimens, or schedule a repotting reminder to every hub older than 18 months — all in three clicks. Bulk schedules respect individual plant overrides; if a specific hub has a custom care note, it takes precedence. Seasonal care programs (Winter Dormancy, Monsoon Growth Flush, Summer Stress Protocol) are built-in templates developed with our horticultural research team.',
    stat: '\u221e',
    statLabel: 'Plants Schedulable At Once',
  },
  {
    icon: BarChart3,
    title: 'Fleet Analytics',
    badge: 'Insights',
    description:
      'Aggregate intelligence across every hub: median VPD across the installation, health score distribution histograms, species breakdown by floor, and water-stress incidence rates over the past 90 days. Weekly and monthly PDF reports are auto-generated and delivered to your inbox — ready to forward to clients as evidence of plant investment performance. Identify systemic issues (e.g., an HVAC zone causing elevated VPD for 40 plants) before they manifest as visible decline. Compare fleet health quarter-on-quarter as your installation matures.',
    stat: '90-day',
    statLabel: 'Rolling Trend Window',
  },
];

const steps = [
  {
    icon: Cpu,
    step: '01',
    title: 'Install NIH-01 Hubs',
    desc: 'Place each NIH-01 hub beside its plant. The hub pairs to your Wi-Fi network via the Vriksh Vani app in under 60 seconds. No hub requires individual configuration — the Nature Intelligence engine self-calibrates within 48 hours of first reading.',
  },
  {
    icon: Layers,
    step: '02',
    title: 'Assign to Groups',
    desc: 'Organise hubs into logical groups: by floor, by building zone, by species, or by maintenance responsibility. Groups cascade downward — a single watering schedule assigned to "Floor 3 — Atrium" applies to all 38 hubs in that group. Create as many nested groups as your installation demands.',
  },
  {
    icon: MonitorCheck,
    step: '03',
    title: 'Monitor the Consolidated Dashboard',
    desc: 'Open Fleet Management in the Vriksh Vani app or the web portal at app.vrikshvani.com. The unified health map loads in under 2 seconds regardless of fleet size. Your team has full visibility from the moment the first hub is installed.',
  },
];

const enterprisePerks = [
  'Unlimited NIH-01 hubs per account',
  'Fleet Management dashboard (web + mobile)',
  'Consolidated Alert Centre with custom routing',
  'Bulk scheduling & seasonal care programs',
  'Fleet Analytics — weekly & monthly PDF reports',
  'MQTT & REST API full access',
  'Custom hub grouping by zone, floor, species',
  'Dedicated enterprise account manager',
  'Same-day replacement unit SLA',
  'On-site installation support (select metro cities)',
];

export default function FleetManagementPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <Badge variant="gold">Enterprise Feature</Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F6F2] leading-tight">
              One Dashboard.{' '}
              <span className="text-[#8AD74C]">Every Plant.</span>
            </h1>
            <p className="text-lg text-[#A3B18A] leading-relaxed">
              Managing a biophilic installation across a hotel lobby, a corporate campus, or a
              multi-floor retail space is a different discipline from caring for a single plant.
              Fleet Management gives you the operational layer your installation demands — real-time
              health across every NIH-01 hub, consolidated alerts, bulk scheduling, and aggregate
              analytics — all from a single screen.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-2">
              <Link href="/enterprise/quote">
                <Button variant="primary" size="lg">
                  Request Enterprise Demo {String.fromCharCode(8594)}
                </Button>
              </Link>
              <Link href="/enterprise">
                <Button variant="outline" size="lg">
                  View Enterprise Plan
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero stat strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '500+', label: 'Max Hubs Per Fleet' },
              { value: '<2s', label: 'Dashboard Load Time' },
              { value: '6', label: 'Bio-Signal Types' },
              { value: '90-day', label: 'Analytics Window' },
            ].map((s, i) => (
              <Card key={i} className="text-center py-6 px-4 border border-[#8AD74C]/15">
                <p className="font-display text-3xl font-bold text-[#8AD74C]">{s.value}</p>
                <p className="text-xs font-mono text-[#A3B18A] uppercase tracking-wider mt-1">
                  {s.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2 mb-10">
            <p className="text-xs font-mono text-[#A3B18A] uppercase tracking-widest">
              Core Capabilities
            </p>
            <h2 className="font-display text-3xl font-bold text-[#F7F6F2]">
              Built for Real Installations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <Card key={idx} className="space-y-5 border border-white/8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#8AD74C]" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1.5">
                        {f.badge}
                      </Badge>
                      <h3 className="font-display text-xl font-bold text-[#F7F6F2]">{f.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{f.description}</p>
                  <div className="pt-2 border-t border-white/8 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-[#E8D07C]">
                      {f.stat}
                    </span>
                    <span className="text-xs font-mono text-[#A3B18A] uppercase tracking-wider">
                      {f.statLabel}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <p className="text-xs font-mono text-[#A3B18A] uppercase tracking-widest">
              Deployment
            </p>
            <h2 className="font-display text-3xl font-bold text-[#F7F6F2]">
              From Unboxing to Full Fleet in 48 Hours
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Card key={idx} className="space-y-4 border border-white/8">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-4xl font-bold text-[#8AD74C]/25 leading-none select-none">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#8AD74C]" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F7F6F2]">{s.title}</h3>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{s.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Gate */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-[#E8D07C]/20 space-y-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#E8D07C]" />
                  <Badge variant="gold">Enterprise Plan Required</Badge>
                </div>
                <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">
                  Fleet Management is an Enterprise-Tier Feature
                </h2>
                <p className="text-sm text-[#A3B18A] leading-relaxed">
                  The individual Seedling and Growth plans support up to 5 and 25 hubs respectively
                  with full single-plant dashboards. Fleet Management — with its unified health map,
                  bulk scheduling engine, consolidated alert routing, and aggregate analytics — is
                  available exclusively on the Enterprise plan, designed for commercial and
                  professional installations of 10+ hubs.
                </p>
              </div>
              <div className="shrink-0 flex flex-col gap-3">
                <Link href="/enterprise/quote">
                  <Button variant="primary" size="lg" className="w-full">
                    Request Enterprise Demo
                  </Button>
                </Link>
                <Link href="/enterprise">
                  <Button variant="outline" size="md" className="w-full">
                    View Enterprise Plan
                  </Button>
                </Link>
              </div>
            </div>
            <div className="border-t border-white/8 pt-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
              {enterprisePerks.map((perk, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-[#A3B18A]">
                  <CheckCircle2 className="w-4 h-4 text-[#8AD74C] shrink-0" />
                  {perk}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-display text-3xl font-bold text-[#F7F6F2]">
            Ready to Manage Your Installation?
          </h2>
          <p className="text-[#A3B18A]">
            Our enterprise team will walk you through a live Fleet Management demo using a replica
            of your planned installation — hubs already grouped, alerts already configured, and
            analytics already running.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/enterprise/quote">
              <Button variant="primary" size="lg" className="gap-2">
                Request Enterprise Demo <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="mailto:enterprise@vrikshvani.com">
              <Button variant="secondary" size="lg">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
