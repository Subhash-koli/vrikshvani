import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Box, Play, Package, Star, Zap, Wifi } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NIH-01 Unboxing Experience — Target Packaging Concept | Vriksh Vani',
  description: 'Target packaging concept for NIH-01. Every detail — from the seed card to recycled ceramic packaging — is designed with biophilic intent.',
};

const unboxingSteps = [
  {
    step: '01',
    title: 'The Outer Box',
    icon: Box,
    desc: 'Your NIH-01 arrives in a 100% recycled cardboard box with a single embossed Vriksh Vani wordmark. No branding excess. No plastic window. The first sensation is texture: recycled board has character that glossy boxes never will.',
  },
  {
    step: '02',
    title: 'The Reveal',
    icon: Package,
    desc: 'Lifting the lid reveals your NIH-01 cradled in shredded paper — a deliberate echo of the mulch and organic matter a plant root system lives in. The ceramic body sits face-up so the first thing you see is the speaker grille.',
  },
  {
    step: '03',
    title: 'The Founding Member Certificate',
    icon: Star,
    desc: 'Printed on 300gsm cotton paper, your numbered Founding Member certificate. Each certificate is hand-signed by the ceramic artist who threw your unit and the firmware engineer who ran its 48-hour quality test. Your serial number is engraved on the base of the hub.',
  },
  {
    step: '04',
    title: 'The Planting Card',
    icon: Package,
    desc: 'A seed card containing one native Western Ghats species seed — to plant as a companion to your NIH-01. A symbol of the ecosystem we\'re working to protect. Instructions on the reverse.',
  },
  {
    step: '05',
    title: 'First Power-On',
    icon: Zap,
    desc: 'Connect USB-C. The FLIR thermal camera warms up in 12 seconds. NIH-01 speaks its first words — a brief, gentle greeting — then enters pairing mode, indicated by a slow amber pulse from the speaker grille.',
  },
  {
    step: '06',
    title: 'First Pairing',
    icon: Wifi,
    desc: 'Open the Vriksh Vani app and follow the guided pairing flow. Add your first plant profile — species, pot size, substrate type. Within 60 seconds of pairing, NIH-01 begins its first bio-signal reading.',
  },
];

export default function UnboxingPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="gold">The Unboxing Experience</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Designed to Be a Ritual.
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              We believe the first moment with a device shapes every interaction that follows. The NIH-01 unboxing is slower, quieter, and more intentional than anything else in consumer electronics.
            </p>
          </div>

          {/* What's in the Box summary */}
          <Card className="p-6 border-[#8AD74C]/20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              {[
                'NIH-01 Hub — chosen colorway',
                '12W GaN USB-C adapter (international)',
                '1.5m braided USB-C cable',
                'Founding Member certificate (numbered)',
                'Native seed planting card',
                'Quick-start QR card',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#A3B18A]">
                  <span className="text-[#8AD74C] shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </Card>

          {/* Step-by-step unboxing */}
          <div className="space-y-5">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Step by Step</h2>
            {unboxingSteps.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.step} className="flex gap-6 items-start">
                  <div className="shrink-0 space-y-2 text-center w-16">
                    <span className="font-mono text-xs font-bold text-[#8AD74C]">{s.step}</span>
                    <div className="w-12 h-12 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/20 flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-[#8AD74C]" />
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-display text-xl font-bold text-[#F7F6F2]">{s.title}</h3>
                    <p className="text-sm text-[#A3B18A] leading-relaxed">{s.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Setup time */}
          <Card className="p-8 text-center space-y-3 border-[#8AD74C]/20">
            <p className="font-display text-4xl font-bold text-[#8AD74C]">&lt; 5 minutes</p>
            <p className="text-sm font-mono text-[#A3B18A]">From box to first bio-reading</p>
            <p className="text-sm text-[#A3B18A]">No screwdrivers. No manuals. No account creation required before first use.</p>
          </Card>

          <Card className="p-8 text-center space-y-4">
            <p className="font-display text-2xl font-bold text-[#F7F6F2]">Reserve Yours Today.</p>
            <p className="text-sm text-[#A3B18A]">Batch 01 — Q4 2026. Limited founding units remaining.</p>
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
