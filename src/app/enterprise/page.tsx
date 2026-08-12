import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Building2, CheckCircle2, Users, Cpu, BarChart3, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise — Vriksh Vani for Organisations',
  description: 'Deploy NIH-01 plant intelligence across your office, hotel, or retail space. Fleet management, white-glove installation, dedicated support, and API access for 10+ unit deployments.',
};

const features = [
  {
    icon: BarChart3,
    title: 'Fleet Dashboard',
    desc: 'Monitor every NIH-01 hub across your entire space from a single consolidated dashboard. Health scores, VPD readings, and alert logs — all in real time.',
  },
  {
    icon: Cpu,
    title: 'Custom Species Parameters',
    desc: 'Our biophysics team configures species-specific VPD baselines for your exact plant collection. Bespoke accuracy for bespoke installations.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    desc: 'A named Vriksh Vani account manager manages your onboarding, installation coordination, and ongoing optimisation.',
  },
  {
    icon: Shield,
    title: 'SLA Guarantee',
    desc: 'Professional and Enterprise plans include a 99.9% uptime SLA for hub connectivity and 24-hour critical alert response.',
  },
];

const useCases = [
  { emoji: '🏢', name: 'Corporate Offices', desc: 'Biophilic office design with living walls and atrium plants monitored across entire campuses.' },
  { emoji: '🏨', name: 'Hotels & Hospitality', desc: 'Luxury lobbies, spas, and event venues where plant health is part of the guest experience.' },
  { emoji: '🛍️', name: 'Retail & Brand', desc: 'Flagships and pop-ups using NIH-01 as both a monitoring tool and an immersive brand touch-point.' },
  { emoji: '🏥', name: 'Healthcare & Wellness', desc: 'Hospitals and wellness centres with biophilic patient environment and recovery programmes.' },
  { emoji: '🎓', name: 'Education & Research', desc: 'Universities and schools running plant science programmes with real biometric data.' },
  { emoji: '🌿', name: 'Plant Studios & Nurseries', desc: 'Professional growers and plant studios managing large inventories at scale.' },
];



import dynamic from 'next/dynamic';

const FleetRoiCalculator = dynamic(() => import('@/components/ui/FleetRoiCalculator'), {
  loading: () => <div className="h-64 rounded-2xl bg-[#0F2B18]/20 animate-pulse border border-white/5" />,
});

export default function EnterprisePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <Badge variant="gold">Enterprise</Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2] leading-tight">
              Nature Intelligence<br />at Organisational Scale.
            </h1>
            <p className="text-[#A3B18A] text-lg leading-relaxed">
              Deploy NIH-01 across your entire space. Fleet management tools, white-glove installation, custom species parameters, and SLA-backed support for 10+ unit deployments.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/enterprise/quote">
                <Button variant="primary" size="lg">Request Enterprise Quote →</Button>
              </Link>
              <Link href="/pricing/enterprise">
                <Button variant="outline" size="lg">View Fleet Pricing</Button>
              </Link>
            </div>
          </div>



          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <Card key={idx} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#E8D07C]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#E8D07C]" />
                    </div>
                    <h3 className="font-display font-bold text-[#F7F6F2]">{f.title}</h3>
                  </div>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{f.desc}</p>
                </Card>
              );
            })}
          </div>

          {/* ROI Simulator */}
          <FleetRoiCalculator />

          {/* Use cases */}

          {/* Use cases */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Enterprise Use Cases</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((u, idx) => (
                <Card key={idx} className="flex items-start gap-3">
                  <span className="text-2xl">{u.emoji}</span>
                  <div>
                    <h3 className="font-display font-bold text-[#F7F6F2] text-sm">{u.name}</h3>
                    <p className="text-xs text-[#A3B18A] mt-1 leading-relaxed">{u.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* What's included */}
          <Card className="p-8 space-y-5 border-[#E8D07C]/20">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">What&apos;s Included in Enterprise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Volume pricing — up to 40% off RRP',
                'White-glove on-site installation team',
                'Custom species parameter calibration',
                'Dedicated account manager',
                'Priority 24-hour support SLA',
                'Fleet management consolidated dashboard',
                'Full REST API access with high rate limits',
                'Webhook integrations (Slack, Teams, Zapier)',
                'Custom firmware builds (200+ units)',
                'Annual hardware audit and recalibration',
                '99.9% hub connectivity SLA',
                'White-label option (500+ units)',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8D07C] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#A3B18A]">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/enterprise/quote">
              <Button variant="primary" size="lg" className="mt-2">Request Enterprise Quote →</Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
