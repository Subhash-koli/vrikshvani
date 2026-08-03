import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Package, Truck, Globe, Clock, ShieldCheck, RefreshCcw } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shipping & Delivery — Vriksh Vani',
  description: 'Shipping information for NIH-01 Batch 01: delivery timelines, packaging details, international shipping, and tracking.',
};

export default function ShippingPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <Badge variant="lime">Batch 01 Shipping</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Shipping &amp; Delivery.
            </h1>
            <p className="text-[#A3B18A]">Every NIH-01 is individually quality-tested for 48 hours before dispatch. We don&apos;t rush. Your plant deserves a device that&apos;s been cared for as carefully as the plant itself.</p>
          </div>

          {/* Dispatch Timeline */}
          <Card className="p-8 space-y-5 border-[#8AD74C]/20">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Batch 01 Dispatch Timeline</h2>
            </div>
            <div className="space-y-3">
              {[
                { phase: 'Production Complete', date: 'Q4 2026', detail: 'Kiln-firing, PCB assembly, and firmware QA at our Bengaluru facility.' },
                { phase: '48-Hour Quality Testing', date: 'Q4 2026 (ongoing)', detail: 'Every unit runs 48 hours of live sensor validation before boxing.' },
                { phase: 'Founder Unit Dispatch', date: 'Q4 2026 – Q1 2027', detail: 'Founding units shipped first, in order of waitlist position.' },
                { phase: 'Batch 01 Complete', date: 'Q1 2027', detail: 'All Batch 01 units dispatched. Batch 02 pre-orders open.' },
              ].map((p, idx) => (
                <div key={idx} className="flex gap-5 items-start py-3 border-b border-white/5 last:border-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8AD74C] shrink-0 mt-1.5" />
                  <div className="flex-1 space-y-0.5">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <p className="font-display font-bold text-[#F7F6F2]">{p.phase}</p>
                      <Badge variant="lime">{p.date}</Badge>
                    </div>
                    <p className="text-sm text-[#A3B18A]">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Shipping Zones */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Shipping Zones &amp; Rates</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { zone: 'India', rate: '₹0 – Free', time: '3–7 business days', carrier: 'Delhivery / Shiprocket', note: 'Free shipping on all orders' },
                { zone: 'South & Southeast Asia', rate: '$9.99 USD', time: '7–14 business days', carrier: 'DHL Express', note: 'Singapore, Malaysia, Thailand, UAE, Sri Lanka' },
                { zone: 'Rest of World', rate: '$19.99 USD', time: '10–21 business days', carrier: 'FedEx International', note: 'UK, EU, USA, Canada, Australia' },
              ].map((z, idx) => (
                <Card key={idx} className="space-y-2">
                  <p className="font-display font-bold text-[#F7F6F2]">{z.zone}</p>
                  <p className="text-2xl font-bold text-[#8AD74C]">{z.rate}</p>
                  <p className="text-xs font-mono text-[#A3B18A]">{z.time} · {z.carrier}</p>
                  <p className="text-xs text-[#A3B18A]">{z.note}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Packaging & Sustainability */}
          <Card className="p-8 space-y-4">
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">What&apos;s in the Box</h2>
            </div>
            <ul className="space-y-2 text-sm text-[#A3B18A]">
              {[
                'NIH-01 Nature Intelligence Hub — kiln-fired ceramic body in selected colorway',
                'USB-C power adapter (GaN, 12W, international plug included)',
                'USB-C cable (braided, 1.5m)',
                'Welcome card with QR code to app & quick-start guide',
                'Planting card — 1 native seed to plant in your garden',
                'Batch 01 Founding Member certificate (numbered)',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#8AD74C] shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs font-mono text-[#A3B18A] pt-2 border-t border-white/5">
              Packaging: 100% recycled cardboard · Soy-based ink · Shredded paper void fill · Zero single-use plastic.
            </p>
          </Card>

          {/* Tracking & Returns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="space-y-3">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-[#8AD74C]" />
                <h3 className="font-display font-bold text-[#F7F6F2]">Order Tracking</h3>
              </div>
              <p className="text-sm text-[#A3B18A]">You will receive a dispatch confirmation email with a full tracking number and carrier portal link. Live tracking is available in the Vriksh Vani app once your NIH-01 has shipped.</p>
            </Card>
            <Card className="space-y-3">
              <div className="flex items-center gap-3">
                <RefreshCcw className="w-6 h-6 text-[#8AD74C]" />
                <h3 className="font-display font-bold text-[#F7F6F2]">30-Day Return Policy</h3>
              </div>
              <p className="text-sm text-[#A3B18A]">If your NIH-01 arrives damaged or doesn&apos;t work as described, we offer a full refund or replacement within 30 days of delivery. No questions asked. See our <Link href="/warranty" className="text-[#8AD74C] hover:underline">warranty page</Link> for details.</p>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
