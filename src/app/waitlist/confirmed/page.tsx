'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Copy, Check, Share2, Sparkles, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function WaitlistConfirmedPage() {
  const searchParams = useSearchParams();
  const queuePos = searchParams.get('queue') || '412';
  const refCode = searchParams.get('code') || 'VV-LEAF-7789';

  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/waitlist?ref=${refCode}` : `https://vrikshvani.com/waitlist?ref=${refCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      <section className="pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          {/* Success Banner */}
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#8AD74C]/20 border border-[#8AD74C] flex items-center justify-center mx-auto text-[#8AD74C] shadow-lime-glow">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <Badge variant="lime" className="px-4 py-1.5 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" /> Founding Reservation Confirmed
            </Badge>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#F7F6F2]">
              Welcome to Batch 01! 🌿
            </h1>

            <p className="text-[#A3B18A] text-base sm:text-lg max-w-lg mx-auto">
              Your spot is secured. Check your inbox for your confirmation dispatch details.
            </p>
          </div>

          {/* Queue Position Box */}
          <Card className="p-8 border-[#8AD74C]/40 nidl-glass-dark space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#A3B18A] uppercase tracking-widest">
                Your Priority Queue Position
              </span>
              <div className="font-display text-6xl font-bold text-[#E8D07C]">
                #{queuePos}
              </div>
              <p className="text-xs text-[#A3B18A]">
                Refer friends to climb the queue and unlock exclusive Founding Perks.
              </p>
            </div>

            {/* Referral Link Box */}
            <div className="p-4 rounded-xl bg-[#070B08] border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#A3B18A]">
                <span>Your Referral Code: <strong className="text-[#8AD74C]">{refCode}</strong></span>
                <span>Link Copied Count: 0</span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  className="flex-1 bg-[#0F2B18] border border-white/10 rounded-xl px-4 py-2.5 text-xs font-mono text-[#F7F6F2] focus:outline-none"
                />
                <Button variant="primary" size="sm" onClick={handleCopy} className="shrink-0 gap-1.5">
                  {copied ? <Check className="w-4 h-4 text-[#070B08]" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy Link'}
                </Button>
              </div>
            </div>

            {/* Referral Tiers */}
            <div className="pt-4 border-t border-white/10 text-left space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8AD74C]">
                <Trophy className="w-4 h-4 text-[#E8D07C]" />
                <span>Referral Unlock Rewards</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#0F2B18]/40 border border-white/5 space-y-1">
                  <span className="font-mono text-[#E8D07C] font-bold block">1 Friend</span>
                  <span className="text-[#F7F6F2] font-semibold block">Jump +50 Spots</span>
                  <span className="text-[10px] text-[#A3B18A] block">Priority batch dispatch</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0F2B18]/40 border border-white/5 space-y-1">
                  <span className="font-mono text-[#8AD74C] font-bold block">3 Friends</span>
                  <span className="text-[#F7F6F2] font-semibold block">Free Travel Pouch</span>
                  <span className="text-[10px] text-[#A3B18A] block">Artisan felt sleeve ($35 value)</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0F2B18]/40 border border-white/5 space-y-1">
                  <span className="font-mono text-emerald-400 font-bold block">5 Friends</span>
                  <span className="text-[#F7F6F2] font-semibold block">20% Off 2nd Unit</span>
                  <span className="text-[10px] text-[#A3B18A] block">Gift for a fellow plant lover</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Next Steps CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/product">
              <Button variant="secondary" size="lg" className="gap-2">
                Explore Hardware Specs <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/community">
              <Button variant="outline" size="lg">
                Join Botanist Discord
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
