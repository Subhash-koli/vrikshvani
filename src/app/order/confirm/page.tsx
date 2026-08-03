import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  CheckCircle2,
  Mail,
  Smartphone,
  Users,
  Star,
  Shield,
  Tag,
  Award,
  ArrowLeft,
  Share2,
  CalendarClock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Order Confirmed — Vriksh Vani',
  description:
    'Your Batch 01 NIH-01 reservation is confirmed. Welcome to the Vriksh Vani founding community.',
};

const nextSteps = [
  {
    icon: Mail,
    step: '01',
    title: 'Check Your Email',
    desc: 'A confirmation email has been sent with your reservation number, Founding Member certificate (PDF), and a personal welcome note from our founder. This also serves as your official receipt. Check your spam folder if it does not arrive within 15 minutes.',
  },
  {
    icon: Smartphone,
    step: '02',
    title: 'Download the Vriksh Vani App',
    desc: 'The Vriksh Vani companion app will be available on iOS and Android in Q4 2026. You will receive a push notification and email the moment it goes live in the App Store and Google Play. Early access to the species database and care-guide library is available now inside the app preview.',
  },
  {
    icon: Users,
    step: '03',
    title: 'Join the Founding Community',
    desc: 'As a Batch 01 Founding Member you have immediate access to the Vriksh Vani community forum — where the earliest adopters are shaping features, testing care-guide research, and sharing plant stories. You also receive early access to every blog post and research dispatch before public release.',
  },
];

const perks = [
  {
    icon: Award,
    title: 'Founding Member Badge',
    desc: 'A permanent Founding Member badge on your community profile — recognising you as one of the first 188 people to believe in plant biometrics.',
  },
  {
    icon: Shield,
    title: '7-Year Warranty',
    desc: 'Batch 01 units carry our extended 7-year warranty — double the standard 3.5-year coverage — as our commitment to the people who trusted us earliest.',
  },
  {
    icon: Tag,
    title: 'Exclusive Serial Number Engraving',
    desc: 'Your NIH-01 hub carries a hand-engraved serial number (NV-B01-XXXX) on the ceramic base — unique to your unit, non-transferable, collectible.',
  },
  {
    icon: Star,
    title: 'Priority Support',
    desc: 'Founding Members bypass the standard support queue. Every query you raise is answered by a senior Vriksh Vani team member within 4 business hours.',
  },
];

const shareLinks = [
  {
    platform: 'X (Twitter)',
    url: 'https://twitter.com/intent/tweet?text=I%20just%20reserved%20a%20Batch%2001%20NIH-01%20from%20%40VrikshVani%20%E2%80%94%20the%20world%27s%20first%20ceramic%20plant%20biometrics%20hub.%20%F0%9F%8C%BF%20Join%20the%20waitlist%3A%20vrikshvani.com&url=https://vrikshvani.com',
    label: 'Share on X',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com',
    label: 'Share on Instagram',
  },
];

export default function OrderConfirmPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Celebration Hero */}
      <section className="pt-36 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Large checkmark */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-[#0F2B18] border-2 border-[#8AD74C] flex items-center justify-center shadow-[0_0_60px_rgba(138,215,76,0.3)]">
              <CheckCircle2 className="w-14 h-14 text-[#8AD74C]" strokeWidth={1.5} />
            </div>
          </div>

          <Badge variant="lime" className="text-sm py-1.5 px-4">
            Batch 01 · Reservation Confirmed
          </Badge>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F6F2] leading-tight">
            {"You're a Founding Member."}{' '}
            <span aria-label="plant" role="img">
              🌿
            </span>
          </h1>

          <p className="text-lg text-[#A3B18A] leading-relaxed max-w-2xl mx-auto">
            Your Batch 01 NIH-01 spot is secured. You are now among 188 people who believed that
            plants deserve to speak — and the technology to hear them deserves to be beautiful.
            Welcome to the Vriksh Vani founding community. We are building this for you.
          </p>

          <div className="pt-2">
            <Card className="inline-block border border-[#8AD74C]/30 bg-[#0F2B18]/60 px-8 py-4 text-center space-y-1">
              <p className="text-xs font-mono text-[#A3B18A] uppercase tracking-widest">
                Estimated Dispatch
              </p>
              <p className="font-display text-2xl font-bold text-[#E8D07C]">
                Q4 2026 – Q1 2027
              </p>
              <p className="text-xs text-[#A3B18A]">
                Your reservation number is in your confirmation email
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <p className="text-xs font-mono text-[#A3B18A] uppercase tracking-widest">
              What Happens Next
            </p>
            <h2 className="font-display text-3xl font-bold text-[#F7F6F2]">
              Your Batch 01 Spot is Reserved
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nextSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Card key={idx} className="space-y-4 border border-white/8">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-4xl font-bold text-[#8AD74C]/20 leading-none select-none">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#8AD74C]" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F7F6F2]">{step.title}</h3>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{step.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dispatch Timeline */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-[#E8D07C]/15 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-[#0F2B18] border border-[#E8D07C]/30 flex items-center justify-center shrink-0">
              <CalendarClock className="w-6 h-6 text-[#E8D07C]" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="font-display text-lg font-bold text-[#F7F6F2]">
                Batch 01 Production Timeline
              </p>
              <p className="text-sm text-[#A3B18A] leading-relaxed">
                NIH-01 hubs are kiln-fired in small batches at our ceramics studio. Batch 01
                production begins Q2 2026 with quality assurance, firmware burn, and packaging
                completed by Q3 2026. Dispatch begins Q4 2026 with all 188 Batch 01 units
                expected to arrive before Q1 2027. You will receive production updates at each
                milestone — kiln start, QA pass, and dispatch confirmation.
              </p>
            </div>
            <div className="shrink-0 text-right space-y-0.5">
              <p className="font-display text-2xl font-bold text-[#E8D07C]">Q4 2026</p>
              <p className="text-xs font-mono text-[#A3B18A] uppercase">Dispatch Begins</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Founding Member Perks */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <p className="text-xs font-mono text-[#A3B18A] uppercase tracking-widest">
              Your Privileges
            </p>
            <h2 className="font-display text-3xl font-bold text-[#F7F6F2]">
              Founding Member Perks
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <Card key={idx} className="flex gap-4 border border-white/8">
                  <div className="w-11 h-11 rounded-xl bg-[#0F2B18] border border-[#E8D07C]/30 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#E8D07C]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display text-base font-bold text-[#F7F6F2]">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-[#A3B18A] leading-relaxed">{perk.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Share CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center border border-[#8AD74C]/20 space-y-6">
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center">
                <Share2 className="w-6 h-6 text-[#8AD74C]" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">
                Tell Your Plant-Loving Friends
              </h2>
              <p className="text-sm text-[#A3B18A] max-w-md mx-auto">
                Batch 01 has 88 spots remaining. If you know someone who genuinely cares about
                their plants, now is the right time to tell them — before this batch closes.
              </p>
            </div>
            <div className="flex justify-center gap-3 flex-wrap">
              {shareLinks.map((sl) => (
                <a
                  key={sl.platform}
                  href={sl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-white/15 rounded-btn text-[#F7F6F2] hover:border-[#8AD74C]/40 hover:text-[#8AD74C] transition-all duration-200 bg-[#0F2B18]/40"
                >
                  {sl.label}
                </a>
              ))}
            </div>
            <p className="text-xs font-mono text-[#A3B18A]">
              Every share helps us grow the founding community — and helps a plant find better care.
            </p>
          </Card>
        </div>
      </section>

      {/* Back to Home */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-[#A3B18A] text-sm">
            In the meantime, explore what Nature Intelligence can do for your plants.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/">
              <Button variant="ghost" size="md" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Link href="/community/forum">
              <Button variant="secondary" size="md">
                Join the Community Forum
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="secondary" size="md">
                Read the Research Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
