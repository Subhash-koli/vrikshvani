import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Gift, Users, Copy } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refer & Earn — Vriksh Vani',
  description: 'Refer a friend to Vriksh Vani and earn ₹2,000 off your next order when they join the Batch 01 waitlist. No limit on referrals.',
};

const steps = [
  { num: '01', title: 'Share Your Unique Link', desc: 'Every Vriksh Vani account gets a unique referral link. Share it on social media, WhatsApp, or with anyone who talks to their plants.' },
  { num: '02', title: 'Your Friend Joins the Waitlist', desc: 'When your friend signs up via your link and joins the NIH-01 Batch 01 waitlist, your referral is recorded.' },
  { num: '03', title: 'Both of You Save ₹2,000', desc: 'When your friend\'s order is confirmed, you both receive ₹2,000 off your orders. No limit — refer as many friends as you like.' },
];

export default function ReferralPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="gold">Refer & Earn</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Share the Voice. Save Together.
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              For every friend you refer who joins the Batch 01 waitlist and places an order, you both save ₹2,000. No limits. No expiry.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { stat: '₹2,000', label: 'You earn per referral' },
              { stat: '₹2,000', label: 'Your friend saves' },
              { stat: '∞', label: 'No referral limit' },
            ].map((s, i) => (
              <Card key={i} className="text-center py-6 border-[#E8D07C]/20">
                <p className="font-display text-3xl font-bold text-[#E8D07C]">{s.stat}</p>
                <p className="text-xs font-mono text-[#A3B18A] mt-1">{s.label}</p>
              </Card>
            ))}
          </div>

          {/* How it works */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">How It Works</h2>
            </div>
            <div className="space-y-4">
              {steps.map((s, idx) => (
                <Card key={idx} className="flex items-start gap-5">
                  <span className="font-display text-3xl font-black text-[#E8D07C]/30 shrink-0">{s.num}</span>
                  <div>
                    <h3 className="font-display font-bold text-[#F7F6F2]">{s.title}</h3>
                    <p className="text-sm text-[#A3B18A] mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Referral link box */}
          <Card className="p-8 space-y-5 border-[#8AD74C]/20 text-center">
            <div className="flex items-center gap-3 justify-center">
              <Users className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Get Your Referral Link</h2>
            </div>
            <p className="text-sm text-[#A3B18A]">Sign in or create your account to access your unique referral link.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/auth/signin">
                <Button variant="primary" size="lg">
                  <Copy className="w-4 h-4 mr-2" />
                  Get My Referral Link →
                </Button>
              </Link>
            </div>
            <p className="text-xs font-mono text-[#A3B18A]">
              Terms: Reward credited after referred friend&apos;s order is confirmed and dispatched. Not transferable. Vriksh Vani reserves the right to modify or discontinue the programme.
            </p>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
