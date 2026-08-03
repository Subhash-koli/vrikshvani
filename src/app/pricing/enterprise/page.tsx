import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Building2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise Pricing — Vriksh Vani',
  description: 'Custom fleet pricing for Vriksh Vani NIH-01 enterprise installations. Volume discounts, white-glove onboarding, dedicated support, and SLA guarantees for 10+ unit deployments.',
};

const tiers = [
  {
    name: 'Starter Fleet',
    units: '10–49 units',
    pricePerUnit: '₹22,499',
    saving: '10% off RRP',
    features: ['Priority dispatch', 'Fleet dashboard access', 'Email support SLA 48h', 'API access included'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Professional Fleet',
    units: '50–199 units',
    pricePerUnit: '₹19,999',
    saving: '20% off RRP',
    features: ['White-glove installation', 'Dedicated account manager', 'Phone + email SLA 24h', 'Custom species parameters', 'Fleet analytics dashboard'],
    cta: 'Request Quote',
    highlight: true,
  },
  {
    name: 'Enterprise Fleet',
    units: '200+ units',
    pricePerUnit: 'Custom',
    saving: 'Up to 40% off',
    features: ['On-site installation team', 'Custom firmware build', '99.9% uptime SLA', 'Dedicated Slack channel', 'Annual hardware audit', 'White-label option'],
    cta: 'Talk to Sales',
    highlight: false,
  },
];

const useCases = [
  { name: 'Biophilic Office Design', icon: '🏢', desc: 'Large corporate campuses and co-working spaces with extensive plant installations.' },
  { name: 'Hospitality & Hotels', icon: '🏨', desc: 'Luxury hotels, resorts, and event venues managing living walls and lobby botanicals.' },
  { name: 'Retail & Brand Experiences', icon: '🛍️', desc: 'Retail flagships and pop-ups using NIH-01 as both a monitoring tool and a brand experience.' },
  { name: 'Healthcare & Wellness', icon: '🏥', desc: 'Hospitals, clinics, and wellness centres with biophilic patient environment programmes.' },
];

export default function EnterprisePricingPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="gold">Enterprise Pricing</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Scale Nature Intelligence Across Your Entire Space.
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              Volume pricing, fleet management tools, and dedicated support for organisations deploying 10 or more NIH-01 hubs.
            </p>
          </div>

          {/* Pricing tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiers.map((t, idx) => (
              <Card key={idx} className={`flex flex-col space-y-5 ${t.highlight ? 'border-[#E8D07C]/40' : ''}`}>
                {t.highlight && <Badge variant="gold" className="w-fit">Most Popular</Badge>}
                <div>
                  <h3 className="font-display text-xl font-bold text-[#F7F6F2]">{t.name}</h3>
                  <p className="text-xs font-mono text-[#A3B18A] mt-1">{t.units}</p>
                </div>
                <div>
                  <p className={`font-display text-3xl font-bold ${t.highlight ? 'text-[#E8D07C]' : 'text-[#8AD74C]'}`}>{t.pricePerUnit}</p>
                  <p className="text-xs font-mono text-[#A3B18A]">per unit · {t.saving}</p>
                </div>
                <div className="flex-1 space-y-2">
                  {t.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-[#A3B18A]">
                      <CheckCircle2 className="w-4 h-4 text-[#8AD74C] shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/enterprise/quote">
                  <Button variant={t.highlight ? 'primary' : 'outline'} className="w-full">{t.cta} →</Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Use cases */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Enterprise Use Cases</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {useCases.map((u, idx) => (
                <Card key={idx} className="flex items-start gap-4">
                  <span className="text-3xl">{u.icon}</span>
                  <div>
                    <h3 className="font-display font-bold text-[#F7F6F2]">{u.name}</h3>
                    <p className="text-sm text-[#A3B18A] mt-1">{u.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 text-center space-y-4 border-[#E8D07C]/20">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Ready to Deploy at Scale?</h2>
            <p className="text-sm text-[#A3B18A]">Talk to our enterprise team to discuss custom configurations, installation support, and volume pricing.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/enterprise/quote">
                <Button variant="primary" size="lg">Request Enterprise Quote →</Button>
              </Link>
              <Link href="/enterprise">
                <Button variant="outline" size="lg">Enterprise Overview</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
