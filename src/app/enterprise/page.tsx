import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Building2, Users, Wifi, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const useCases = [
  {
    icon: Building2,
    title: 'Corporate Biophilic Design',
    desc: 'Transform office environments with WELL-standard biophilic plant installations. NIH-01 hubs monitor every plant in the installation — facilities managers receive consolidated health dashboards.',
    stat: '40%', statLabel: 'Reduction in Plant Loss',
  },
  {
    icon: Users,
    title: 'Hospitality & Luxury Hotels',
    desc: 'Ensure your signature planting schemes are always pristine. NIH-01 alerts front-of-house teams before visible decline occurs — protecting brand experience and FF&E investment.',
    stat: '6x', statLabel: 'ROI on Plant Investment',
  },
  {
    icon: Wifi,
    title: 'Smart Building Integration',
    desc: 'NIH-01 exposes MQTT and REST APIs. Bio-signal data integrates directly with BMS platforms, KNX systems, and building automation via our Enterprise API tier.',
    stat: 'Full', statLabel: 'MQTT + REST API Access',
  },
  {
    icon: Leaf,
    title: 'Retail Greenery & Plant Boutiques',
    desc: 'Display NIH-01 live health dashboards on in-store screens. Customers see real plant data — building trust, reducing returns, and increasing average basket size.',
    stat: '28%', statLabel: 'Increase in Plant Sales',
  },
];

export default function EnterprisePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="gold">Enterprise & B2B</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Nature Intelligence at Scale.
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              For architects, interior designers, facility managers, and hospitality groups deploying plants at scale. Fleet pricing, consolidated dashboards, and dedicated SLA support.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/enterprise/quote">
                <Button variant="primary" size="lg">Request Fleet Quote →</Button>
              </Link>
              <Link href="mailto:enterprise@vrikshvani.com">
                <Button variant="outline" size="lg">Talk to Sales</Button>
              </Link>
            </div>
          </div>

          {/* Logos Placeholder */}
          <Card className="p-8 border-[#E8D07C]/20 text-center space-y-3">
            <p className="text-xs font-mono text-[#A3B18A] uppercase tracking-wider">Trusted by leading hospitality & design firms</p>
            <div className="flex justify-center gap-8 flex-wrap opacity-40">
              {['Design Firm A', 'Hotel Group B', 'REIT C', 'Architecture Co. D'].map((l, idx) => (
                <span key={idx} className="font-display font-bold text-xl text-[#F7F6F2]">{l}</span>
              ))}
            </div>
          </Card>

          {/* Use Cases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, idx) => {
              const Icon = uc.icon;
              return (
                <Card key={idx} className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#8AD74C]" />
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-[#E8D07C]">{uc.stat}</p>
                      <p className="text-[10px] font-mono text-[#A3B18A] uppercase">{uc.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F7F6F2]">{uc.title}</h3>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{uc.desc}</p>
                </Card>
              );
            })}
          </div>

          {/* Enterprise Features */}
          <Card className="p-8 space-y-6">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Enterprise Plan Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
              {[
                'Fleet dashboard — unlimited NIH-01 hubs',
                'Consolidated alerts & weekly health reports',
                'API access: MQTT, REST, WebSocket',
                'Custom NTE™ voice personality per installation',
                'BMS & building automation integration support',
                'Dedicated account manager',
                'Same-day replacement unit SLA',
                'On-site installation & training (metro cities)',
                'Branded hub colorways (MOQ 50 units)',
                'Custom species database additions',
              ].map((f, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-[#A3B18A]">
                  <CheckCircle2 className="w-4 h-4 text-[#8AD74C] shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-10 text-center border-[#E8D07C]/20 space-y-4">
            <p className="font-display text-2xl font-bold text-[#F7F6F2]">Custom Pricing for Your Fleet.</p>
            <p className="text-sm text-[#A3B18A]">Enterprise pricing starts at 10+ units. Significant volume discounts for 50+ and 200+ unit deployments. Get a custom quote in 24 hours.</p>
            <Link href="/enterprise/quote">
              <Button variant="primary" size="lg" className="flex items-center gap-2 mx-auto">
                Get Your Fleet Quote <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
