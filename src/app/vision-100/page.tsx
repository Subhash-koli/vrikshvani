import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Telescope, TreePine, Globe, Leaf } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '100-Year Vision — Vriksh Vani',
  description: 'The Vriksh Vani 100-year vision: a world where every plant has a voice, every city is a living ecosystem, and humanity understands the language of nature.',
};

const decades = [
  {
    period: '2024–2034',
    title: 'The Founding Decade',
    icon: Leaf,
    color: 'text-[#8AD74C]',
    goals: [
      'Launch NIH-01 Batch 01 — first commercial plant biometric intelligence hub',
      'Reach 100,000 active NIH-01 hubs globally',
      'Publish 25+ peer-reviewed papers on plant biophysics and on-device inference',
      'Open Data Programme: 1 billion+ anonymised plant readings donated to science',
      'Expand NTE™ voice to 20 languages',
      'Establish university and botanical research collaborations',
    ],
  },
  {
    period: '2034–2044',
    title: 'The Ecosystem Decade',
    icon: TreePine,
    color: 'text-[#8AD74C]',
    goals: [
      'NIH-02: next-generation hub with hyperspectral imaging and root microbiome sensing',
      'Vriksh Vani planted in 50% of Fortune 500 headquarters globally',
      'Species database expands to 5,000+ species with validated VPD profiles',
      'Open-source NTE™ model weights released for academic use',
      'City-scale biophilic infrastructure partnerships with 10 major cities',
      'First Vriksh Vani urban forest monitoring deployment',
    ],
  },
  {
    period: '2044–2074',
    title: 'The Planet Decade',
    icon: Globe,
    color: 'text-[#E8D07C]',
    goals: [
      '1 million NIH-series hubs monitoring urban forests, hospitals, and schools worldwide',
      'Global plant health index: the first real-time planetary plant biometrics dashboard',
      'Vriksh Vani science contributes to climate adaptation through urban green infrastructure',
      'NTE™ Voice deployed in 50 languages including 12 Indian regional languages',
      'Western Ghats reforestation partnership: 1 million trees with NIH monitoring',
    ],
  },
  {
    period: '2074–2124',
    title: 'The Civilisational Decade',
    icon: Telescope,
    color: 'text-[#E8D07C]',
    goals: [
      'Nature Intelligence becomes a standard human literacy — taught in schools',
      'Every plant in every home, hospital, city park, and forest has a voice',
      'Vriksh Vani contributes to a post-carbon civilisation through biophilic design science',
      'The species database reaches 50,000 species — every known indoor plant documented',
      'NTE™ descendants interpret plant communication at a genetic and epigenetic level',
    ],
  },
];

export default function Vision100Page() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="gold">The 100-Year Vision</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              A World Where Every Plant Has a Voice.
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              We are not building a product company. We are building a century-long project to restore the relationship between humanity and the natural world — starting with the plant on your windowsill.
            </p>
          </div>

          <div className="space-y-6">
            {decades.map((d, idx) => {
              const Icon = d.icon;
              return (
                <Card key={idx} className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F2B18] border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className={`w-6 h-6 ${d.color}`} />
                    </div>
                    <div>
                      <p className={`font-mono text-xs font-bold ${d.color}`}>{d.period}</p>
                      <h2 className="font-display text-xl font-bold text-[#F7F6F2]">{d.title}</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {d.goals.map((g, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[#A3B18A]">
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full ${d.color === 'text-[#8AD74C]' ? 'bg-[#8AD74C]' : 'bg-[#E8D07C]'} shrink-0`} />
                        {g}
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 text-center border-[#E8D07C]/20 space-y-4">
            <p className="font-display text-2xl font-bold text-[#F7F6F2]">
              &quot;We plant a seed. The century grows it.&quot;
            </p>
            <p className="text-xs font-mono text-[#A3B18A]">— Vriksh Vani Brand Manifesto, 2026</p>
            <div className="flex gap-4 justify-center flex-wrap pt-2">
              <Link href="/manifesto">
                <Button variant="outline">Read the Manifesto</Button>
              </Link>
              <Link href="/waitlist">
                <Button variant="primary">Be Part of It →</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
