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
    title: 'Kiln-Fired Ceramic Housing',
    stat: '100%',
    statLabel: 'Recyclable Stoneware',
    body: 'The NIH-01 body is hand-thrown stoneware fired at 1,250°C — one of the most durable materials on Earth. Unlike ABS plastic, it will not degrade into microplastics. A broken housing can be returned to us for ceramic recycling. We use no virgin plastic anywhere in the product.',
  },
  {
    icon: Zap,
    title: 'Ultra-Low Power Electronics',
    stat: '0.8W',
    statLabel: 'Average Operational Draw',
    body: 'The NIH-01 compute runs at ultra-low power draw — less than a LED nightlight. The ESP32-S3 dual-core microcontroller was chosen specifically for its energy-efficiency profile. Designed for continuous low-power operation.',
  },
  {
    icon: Recycle,
    title: 'Conflict-Free & REACH-Compliant Electronics',
    stat: 'REACH',
    statLabel: 'EU Compliance Certified',
    body: 'All PCB materials, solder, and component sourcing comply with EU REACH regulation, RoHS Directive, and the Dodd-Frank conflict minerals reporting standard. Our FLIR module and Bosch sensors are sourced through certified supply chains with documented ESG audits.',
  },
  {
    icon: TreePine,
    title: 'Reforestation Programme',
    stat: '10 Trees',
    statLabel: 'Planted Per Unit Sold',
    body: 'Every NIH-01 sold funds the planting of 10 native trees in the Western Ghats biodiversity hotspot through our partnership with the Foundation for Ecological Research, Advocacy and Learning (FERAL). Batch 01 alone will reforest over 1,000 trees by Q2 2027.',
  },
  {
    icon: Leaf,
    title: 'Carbon-Offset Shipping',
    stat: 'Net Zero',
    statLabel: 'Shipping & Packaging',
    body: 'All Vriksh Vani shipments are offset through verified Gold Standard carbon credits purchased via Climate Partner. Packaging is 100% recycled cardboard with soy-based ink printing. No single-use plastic void fill. Inner packaging is shredded paper from our studio offcuts.',
  },
  {
    icon: Heart,
    title: 'Right to Repair Commitment',
    stat: '7 Years',
    statLabel: 'Spare Parts Guarantee',
    body: 'We commit to providing spare parts — sensor modules, speaker, USB-C port, PCB — for a minimum of 7 years from the last date of sale for each NIH-01 generation. Repair manuals are open-sourced and published on our GitHub. We actively oppose planned obsolescence.',
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
              { val: '0%', label: 'Virgin Plastic', color: 'text-[#8AD74C]' },
              { val: '10', label: 'Trees Per Unit Sold', color: 'text-[#8AD74C]' },
              { val: '0.8W', label: 'Average Power Draw', color: 'text-[#E8D07C]' },
              { val: '7yr', label: 'Spare Parts Guarantee', color: 'text-[#E8D07C]' },
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
