import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NIH-01 Colorways — Chalk, Dusk, Moss | Vriksh Vani',
  description: 'The NIH-01 Nature Intelligence Hub is available in three hand-thrown ceramic colorways: Chalk White, Dusk Umber, and Moss Slate. Each is kiln-fired to 1,250°C.',
};

const colorways = [
  {
    slug: 'chalk-white',
    name: 'Chalk White',
    hex: '#F5F0E8',
    bgClass: 'bg-[#F5F0E8]',
    desc: 'Inspired by Japanese shiro-gane ceramics. A warm off-white with a subtle matte glaze that develops a natural patina over time. The most tactile of the three colorways.',
    mood: 'Calm · Minimal · Nordic',
    availability: 'Batch 01 — Available',
    available: true,
  },
  {
    slug: 'dusk-umber',
    name: 'Dusk Umber',
    hex: '#8B6C4F',
    bgClass: 'bg-[#8B6C4F]',
    desc: 'Rich terra-cotta umber, referencing the red laterite soils of the Western Ghats. A deeply grounding tone that pairs beautifully with dark green foliage.',
    mood: 'Earthy · Warm · Organic',
    availability: 'Batch 01 — Available',
    available: true,
  },
  {
    slug: 'moss-slate',
    name: 'Moss Slate',
    hex: '#4A5E52',
    bgClass: 'bg-[#4A5E52]',
    desc: 'A deep forest green-grey, directly referencing the lichen and moss colours of the Shola forests. The signature colorway — the most architecturally versatile.',
    mood: 'Forest · Architectural · Moody',
    availability: 'Batch 01 — Limited',
    available: true,
  },
];

export default function ColorwaysPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="gold">Handcrafted Ceramics</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Three Colorways. One Earth.
            </h1>
            <p className="text-[#A3B18A]">
              Each NIH-01 body is hand-thrown from stoneware clay and kiln-fired at 1,250°C. The colorways are derived from natural mineral glazes — no synthetic dyes. The colours deepen and develop character with time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {colorways.map((cw) => (
              <Card key={cw.slug} className="overflow-hidden space-y-0 p-0 border-white/10 hover:border-white/25 transition-all duration-300">
                {/* Color swatch */}
                <div className={`${cw.bgClass} h-48 w-full flex items-center justify-center`}>
                  <div className="w-24 h-24 rounded-full border-4 border-white/20 shadow-2xl" style={{ backgroundColor: cw.hex }} />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <p className="font-mono text-[10px] text-[#A3B18A] uppercase tracking-wider">{cw.mood}</p>
                    <h3 className="font-display text-xl font-bold text-[#F7F6F2]">{cw.name}</h3>
                    <div style={{ backgroundColor: cw.hex }} className="w-6 h-2 rounded-full" />
                    <p className="font-mono text-xs text-[#A3B18A]">{cw.hex}</p>
                  </div>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{cw.desc}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant={cw.slug === 'moss-slate' ? 'gold' : 'lime'}>
                      {cw.availability}
                    </Badge>
                  </div>
                  <Link href="/waitlist">
                    <Button variant="outline" className="w-full text-sm">Reserve in {cw.name} →</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Ceramic Process */}
          <Card className="p-8 space-y-6">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">The Ceramic Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Clay Preparation', desc: 'Stoneware clay is wedged by hand for 20 minutes to remove air bubbles before throwing.' },
                { step: '02', title: 'Hand-Throwing', desc: 'Each housing is individually wheel-thrown by our ceramic artists in Bengaluru. No casting or moulding.' },
                { step: '03', title: 'Mineral Glazing', desc: 'Mineral-based glaze is applied by brush. The colour develops fully only after firing — each piece is unique.' },
                { step: '04', title: 'Kiln Firing at 1,250°C', desc: 'A 14-hour kiln cycle at 1,250°C vitrifies the clay body, creating a material that will outlast any plastic alternative by centuries.' },
              ].map((s) => (
                <div key={s.step} className="space-y-2">
                  <p className="font-mono text-sm font-bold text-[#8AD74C]">{s.step}</p>
                  <p className="font-display font-bold text-[#F7F6F2]">{s.title}</p>
                  <p className="text-xs text-[#A3B18A] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 text-center border-[#8AD74C]/20 space-y-4">
            <p className="font-display text-2xl font-bold text-[#F7F6F2]">Choose Your Colorway at Checkout.</p>
            <p className="text-sm text-[#A3B18A]">Select your preferred colorway when you join the waitlist. Moss Slate is limited — we recommend reserving early.</p>
            <Link href="/waitlist">
              <Button variant="primary" size="lg">Join Batch 01 Waitlist →</Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
