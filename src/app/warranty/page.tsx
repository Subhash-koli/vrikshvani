import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Wrench, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Warranty & Repair — Vriksh Vani NIH-01',
  description: '2-year manufacturer warranty on the NIH-01. Covers all sensor modules, electronic components, and firmware. Right to repair commitment with spare parts for 7 years.',
};

const covered = [
  'FLIR Lepton 3.5 thermal camera module',
  'Bosch BME688 quad-gas sensor',
  'ARM Cortex-M4 NPU and main PCB',
  'Speaker and audio amplifier circuit',
  'USB-C charging port and power management IC',
  'Ceramic housing (structural defects, glaze failures)',
  'Firmware (free updates for product lifetime)',
  'BLE 5.0 and Wi-Fi 6 radio modules',
];

const notCovered = [
  'Physical damage from dropping or impact',
  'Damage caused by using unofficial power adapters',
  'Ceramic cracks or chips from user handling',
  'Damage from exposure to water (NIH-01 is not waterproof)',
  'Normal wear: speaker grille patina, minor surface scratching',
];

export default function WarrantyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <Badge variant="lime">Manufacturer Warranty</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Warranty &amp; Repair.
            </h1>
            <p className="text-[#A3B18A]">We build things to last. The NIH-01 carries a 2-year manufacturer warranty and a 7-year spare parts commitment — because planned obsolescence is not something we believe in.</p>
          </div>

          {/* Warranty Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: ShieldCheck, val: '2 Years', label: 'Manufacturer Warranty', color: 'text-[#8AD74C]', borderColor: 'border-[#8AD74C]/30' },
              { icon: Wrench, val: '7 Years', label: 'Spare Parts Guarantee', color: 'text-[#E8D07C]', borderColor: 'border-[#E8D07C]/30' },
              { icon: Clock, val: '30 Days', label: 'No-Questions Returns', color: 'text-[#8AD74C]', borderColor: 'border-[#8AD74C]/30' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className={`text-center py-8 space-y-3 border ${item.borderColor}`}>
                  <Icon className={`w-8 h-8 ${item.color} mx-auto`} />
                  <p className={`font-display text-3xl font-bold ${item.color}`}>{item.val}</p>
                  <p className="text-xs font-mono text-[#A3B18A]">{item.label}</p>
                </Card>
              );
            })}
          </div>

          {/* What's Covered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#8AD74C]" />
                <h2 className="font-display text-xl font-bold text-[#F7F6F2]">What&apos;s Covered</h2>
              </div>
              <ul className="space-y-2">
                {covered.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#A3B18A]">
                    <span className="text-[#8AD74C] shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-[#E8D07C]" />
                <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Not Covered</h2>
              </div>
              <ul className="space-y-2">
                {notCovered.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#A3B18A]">
                    <span className="text-[#E8D07C] shrink-0 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-mono text-[#A3B18A] pt-2 border-t border-white/5">
                Even for non-covered damage, we offer repair-at-cost service. See below.
              </p>
            </Card>
          </div>

          {/* Right to Repair */}
          <Card className="p-8 space-y-5 border-[#8AD74C]/20">
            <div className="flex items-center gap-3">
              <Wrench className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Right to Repair Commitment</h2>
            </div>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              We commit to making every replaceable component of NIH-01 available as a spare part for a minimum of <strong className="text-[#F7F6F2]">7 years from the last production date</strong> of each generation. This includes the FLIR module, BME688 sensor, speaker assembly, USB-C port PCB, and ceramic housing blanks.
            </p>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Repair manuals, PCB schematics, and 3D housing files are published openly on our <Link href="https://github.com/vrikshvani" className="text-[#8AD74C] hover:underline" target="_blank" rel="noopener noreferrer">GitHub</Link>. Third-party repair is explicitly permitted and not grounds for warranty void — only damage caused by repair will not be covered.
            </p>
          </Card>

          {/* Claim CTA */}
          <Card className="p-8 text-center space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Make a Warranty Claim</h2>
            <p className="text-sm text-[#A3B18A]">Email us at <strong className="text-[#8AD74C]">support@vrikshvani.com</strong> with your order number, a description of the issue, and photos. We respond within 1 business day.</p>
            <Link href="/contact">
              <Button variant="primary">Contact Support →</Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
