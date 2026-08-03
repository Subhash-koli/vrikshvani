import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Gift, Share2, Users, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Referral Programme — Vriksh Vani',
  description: 'Refer a friend to Vriksh Vani and both of you receive ₹2,000 off your NIH-01. Earn Nature Points for every successful referral.',
};

const tiers = [
  { refs: '1–2', reward: '₹2,000 off per referral', bonus: '+500 Nature Points each' },
  { refs: '3–5', reward: '₹3,000 off per referral', bonus: '+750 Nature Points + priority dispatch' },
  { refs: '6+', reward: '₹5,000 off per referral', bonus: '+1,000 Points + Founding Member status' },
];

export default function ReferralPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="gold">Referral Programme</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Grow the Community. Earn Rewards.
            </h1>
            <p className="text-[#A3B18A]">
              Every person you introduce to Vriksh Vani gets ₹2,000 off their NIH-01. And so do you. The more you share, the more both of you save.
            </p>
          </div>

          {/* How It Works */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Share2, step: '01', title: 'Share Your Link', desc: 'Get your unique referral link from your dashboard. Share it anywhere — WhatsApp, Instagram, email.' },
              { icon: Users, step: '02', title: 'Friend Reserves', desc: 'When your friend joins the Batch 01 waitlist using your link, ₹2,000 is applied to their order.' },
              { icon: Gift, step: '03', title: 'You Both Save', desc: 'You receive ₹2,000 off your own NIH-01 order once your friend\'s reservation is confirmed.' },
            ].map((s, idx) => {
              const Icon = s.icon;
              return (
                <Card key={idx} className="text-center space-y-4 py-8">
                  <span className="font-mono text-xs text-[#8AD74C] font-bold">{s.step}</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6 text-[#8AD74C]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F7F6F2]">{s.title}</h3>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{s.desc}</p>
                </Card>
              );
            })}
          </div>

          {/* Referral Tiers */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Referral Tiers</h2>
            <div className="space-y-3">
              {tiers.map((t, idx) => (
                <Card key={idx} className={`flex items-center gap-6 flex-wrap ${idx === 2 ? 'border-[#E8D07C]/30' : ''}`}>
                  <div className="shrink-0">
                    <p className="font-mono text-xs text-[#A3B18A]">Referrals</p>
                    <p className="font-display text-2xl font-bold text-[#8AD74C]">{t.refs}</p>
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <p className="font-display font-bold text-[#F7F6F2]">{t.reward}</p>
                    <p className="text-xs font-mono text-[#A3B18A]">{t.bonus}</p>
                  </div>
                  {idx === 2 && <Badge variant="gold">Top Tier</Badge>}
                </Card>
              ))}
            </div>
          </div>

          {/* Your Referral Link */}
          <Card className="p-8 space-y-4 border-[#8AD74C]/20">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Your Referral Link</h2>
            <p className="text-sm text-[#A3B18A]">Sign in to your account to access your unique referral link and track your rewards.</p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/auth/signin">
                <Button variant="primary">Sign In to Get Your Link →</Button>
              </Link>
              <Link href="/waitlist">
                <Button variant="outline">Join Waitlist First</Button>
              </Link>
            </div>
          </Card>

          {/* Terms */}
          <div className="text-xs font-mono text-[#A3B18A] space-y-1">
            <p className="font-bold text-[#F7F6F2]">Terms & Conditions</p>
            <p>• Referral discounts applied at checkout. Both parties must have confirmed Batch 01 reservations.</p>
            <p>• Maximum 50 referral discounts per account. Discount not transferable or redeemable for cash.</p>
            <p>• Vriksh Vani reserves the right to modify or terminate the referral programme with 30 days notice.</p>
            <p>• Nature Points credited within 7 days of referral confirmation. See community terms for point expiry.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
