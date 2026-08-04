import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeFinaleCta from '@/components/home/HomeFinaleCta';
import HomeFaq from '@/components/home/HomeFaq';
import HomeTestimonials from '@/components/home/HomeTestimonials';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Sparkles, ShieldCheck, Truck, Lock, Gift, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Join Batch 01 Waitlist — Vriksh Vani NIH-01 Pre-Order',
  description: 'Reserve your Batch 01 NIH-01 Nature Intelligence Hub. FLIR thermal biometrics, quad-gas analysis, and neural plant voice. Limited founding allocation.',
  openGraph: {
    title: 'Join Batch 01 Waitlist — Vriksh Vani NIH-01',
    description: 'Reserve your founding unit of the NIH-01 Nature Intelligence Hub. Limited Batch 01 allocation.',
    url: 'https://vrikshvani.com/waitlist',
  },
};

const BENEFITS = [
  {
    title: 'Zero Upfront Fee Required',
    desc: 'Lock in your queue position and Founding Member price today. Pay only when your unit is ready to ship.',
    icon: Lock,
    color: 'text-[#8AD74C]',
  },
  {
    title: 'Price-Lock Guarantee',
    desc: 'Protect yourself against future retail price increases. Founding Members lock in $199 forever.',
    icon: ShieldCheck,
    color: 'text-[#E8D07C]',
  },
  {
    title: 'Priority October Dispatch',
    desc: 'Batch 01 units receive priority air freight dispatch directly from our artisan ceramic laboratory.',
    icon: Truck,
    color: 'text-sky-400',
  },
  {
    title: 'Founding Botanist Badge',
    desc: 'Receive an engraved ceramic serial plate and exclusive access to the Founding Botanists Guild.',
    icon: Gift,
    color: 'text-rose-400',
  },
];

const TIMELINE = [
  { phase: 'Phase 01', date: 'July 2026', title: 'Tooling & Kiln Calibration', status: 'Completed' },
  { phase: 'Phase 02', date: 'August 2026', title: 'Batch 01 Artisan Casting', status: 'In Progress' },
  { phase: 'Phase 03', date: 'September 2026', title: 'Quality & Thermal Validation', status: 'Upcoming' },
  { phase: 'Phase 04', date: 'October 2026', title: 'Priority Dispatch Begins', status: 'Upcoming' },
];

export default function WaitlistPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-[#070B08]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8AD74C]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10 text-center space-y-6 max-w-4xl">
          <Badge variant="lime" className="px-4 py-1.5 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Batch 01 Founding Allocation
          </Badge>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#F7F6F2] leading-tight">
            Be first to experience{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AD74C] via-[#E8D07C] to-[#3FAE2A]">
              Nature Intelligence.
            </span>
          </h1>

          <p className="text-[#A3B18A] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Reserve your NIH-01 Nature Intelligence Hub. Join 2,900+ plant collectors, researchers, and early adopters bringing voice to plants.
          </p>

          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <a href="#reserve" className="px-8 py-4 rounded-btn bg-[#3FAE2A] hover:bg-[#8AD74C] text-[#070B08] font-display font-bold text-base shadow-lime-glow transition-all">
              Reserve Your Unit Below ↓
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Early Grid */}
      <section className="py-20 bg-[#0F2B18]/20 border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <Badge variant="gold">Founding Member Perks</Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F7F6F2]">
                Why Join Batch 01 Today?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, idx) => {
              const Icon = b.icon;
              return (
                <ScrollReveal key={idx} stagger={idx}>
                  <Card className="p-6 space-y-4 border-white/10 nidl-glass-hover h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-white/10 flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${b.color}`} />
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#F7F6F2]">
                        {b.title}
                      </h3>
                      <p className="text-xs text-[#A3B18A] leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Launch Timeline */}
      <section className="py-20 bg-[#070B08] border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <Badge variant="lime">Roadmap Transparency</Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F7F6F2]">
                Batch 01 Production Timeline
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map((t, idx) => (
              <ScrollReveal key={idx} stagger={idx}>
                <Card className="p-6 space-y-3 border-white/10 nidl-glass">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8AD74C] font-bold">{t.phase}</span>
                    <span className="text-[#A3B18A]">{t.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#F7F6F2]">
                    {t.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#A3B18A]">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${t.status === 'Completed' ? 'text-[#8AD74C]' : 'text-amber-400'}`} />
                    <span>{t.status}</span>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <HomeTestimonials />

      {/* Main Reservation Form */}
      <HomeFinaleCta />

      {/* FAQ */}
      <HomeFaq />

      <Footer />
    </main>
  );
}
