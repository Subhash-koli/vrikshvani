import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Leaf, Recycle, Zap, Factory, TreePine, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sustainability — Vriksh Vani',
  description: 'Our commitment to environmental stewardship: kiln-fired ceramics, conflict-free electronics, carbon-offset shipping, and a reforestation programme.',
};

const commitments = [
  {
    icon: Factory,
    title: 'Kiln-Fired Ceramic Shell Target',
    stat: '100%',
    statLabel: 'Recyclable Stoneware Target',
    body: 'The NIH-01 shell design uses hand-thrown stoneware fired at 1,250°C — one of the most durable materials on Earth. Unlike ABS plastic, it will not degrade into microplastics. We target zero single-use plastics in our hardware casing.',
  },
  {
    icon: Zap,
    title: 'Ultra-Low Power Electronics',
    stat: '0.8W',
    statLabel: 'Target Operational Draw',
    body: 'The NIH-01 compute architecture runs at ultra-low power draw — less than an LED nightlight. The ESP32-S3 dual-core microcontroller was chosen specifically for its energy-efficiency profile. Designed for continuous low-power local processing.',
  },
  {
    icon: Recycle,
    title: 'REACH-Compliant Electronics Sourcing Target',
    stat: 'REACH',
    statLabel: 'Target Compliance Standard',
    body: 'All target PCB materials, solder, and component sourcing directions aim to comply with EU REACH regulation and RoHS Directive standards. Our sensor integration targets FLIR and Bosch modules with documented supply chain ESG audits.',
  },
  {
    icon: TreePine,
    title: 'Reforestation Intent',
    stat: '10 Trees',
    statLabel: 'Target Per Unit Allocated',
    body: 'We target funding the planting of 10 native trees in the Western Ghats biodiversity hotspot for every prototype cohort allocation in partnership with ecological research organizations.',
  },
  {
    icon: Leaf,
    title: 'Plastic-Free Packaging Direction',
    stat: 'Net Zero',
    statLabel: 'Packaging Target',
    body: 'Packaging direction targets 100% recycled cardboard with soy-based ink printing and sugarcane pulp inserts. No single-use plastic void fill.',
  },
  {
    icon: Heart,
    title: 'Right to Repair Design Principle',
    stat: 'Open SDK',
    statLabel: 'Open Hardware Principles',
    body: 'We are designing NIH-01 with modular sensor ports, accessible PCBs, and open-source repair guides on GitHub to actively oppose planned hardware obsolescence.',
  },
];

export default function SustainabilityPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="lime">Environmental Stewardship</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Technology That Respects the Earth.
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              We make hardware for people who love plants. It would be a profound contradiction to do so irresponsibly. Every material choice, every supplier decision, every packaging design is measured against its ecological cost.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: '0%', label: 'Virgin Plastic Target', color: 'text-[#8AD74C]' },
              { val: '10', label: 'Trees Target / Cohort Unit', color: 'text-[#8AD74C]' },
              { val: '0.8W', label: 'Target Compute Draw', color: 'text-[#E8D07C]' },
              { val: 'Open', label: 'Hardware Principles', color: 'text-[#E8D07C]' },
            ].map((s, idx) => (
              <Card key={idx} className="text-center py-6 space-y-1">
                <p className={`font-display text-3xl font-bold ${s.color}`}>{s.val}</p>
                <p className="text-xs font-mono text-[#A3B18A]">{s.label}</p>
              </Card>
            ))}
          </div>

          {/* Commitment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((c, idx) => {
              const Icon = c.icon;
              return (
                <Card key={idx} className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#8AD74C]" />
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-[#8AD74C]">{c.stat}</p>
                      <p className="text-[10px] font-mono text-[#A3B18A] uppercase tracking-wider">{c.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F7F6F2]">{c.title}</h3>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{c.body}</p>
                </Card>
              );
            })}
          </div>

          {/* Annual Report CTA */}
          <Card className="p-10 text-center border-[#8AD74C]/20 space-y-4">
            <Leaf className="w-12 h-12 text-[#8AD74C] mx-auto" />
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Sustainability Report 2026</h2>
            <p className="text-sm text-[#A3B18A] max-w-xl mx-auto">
              Full LCA (Life Cycle Assessment), Scope 1–3 emissions, supplier audit summary, and reforestation GPS coordinates — published annually.
            </p>
            <button className="px-6 py-3 bg-[#040E06]/20 border border-[#7EC840]/50 rounded-xl text-sm font-medium text-white hover:bg-[#040E06]/35 hover:border-[#A0D850]/75 transition-all">
              Download Full Report (PDF, 4.2 MB)
            </button>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
