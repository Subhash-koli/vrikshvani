'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';
import Link from 'next/link';

export const HomePricingPreview: React.FC = () => {
  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="lime">Transparent Pricing</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            One Hub. Infinite Intelligence.
          </h2>
          <p className="text-[#A3B18A] text-base">
            No hidden hardware fees. Every pre-order includes Batch 01 Founding Member status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Essential Plan */}
          <Card className="flex flex-col justify-between">
            <div className="space-y-4">
              <Badge variant="glass">Essential</Badge>
              <h3 className="font-display text-2xl font-bold text-[#F7F6F2]">₹0 / mo</h3>
              <p className="text-xs text-[#A3B18A]">Included free with every NIH-01 hardware hub.</p>
              <ul className="space-y-2.5 text-xs text-[#F7F6F2]/80 pt-4 border-t border-white/5">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> FLIR Thermal Transpiration Graphs</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> 1 Active Plant Profile</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> Local NPU Stress Alerts</li>
              </ul>
            </div>
            <Link href="/waitlist" className="pt-6">
              <Button variant="secondary" className="w-full">Select Essential</Button>
            </Link>
          </Card>

          {/* Plus Plan (Featured) */}
          <Card className="flex flex-col justify-between border-[#8AD74C]/40 bg-[#0F2B18]/90 shadow-lime-glow relative">
            <Badge variant="lime" className="absolute top-4 right-4">Most Popular</Badge>
            <div className="space-y-4">
              <Badge variant="lime">Plus Tier</Badge>
              <h3 className="font-display text-3xl font-bold text-[#8AD74C]">₹599 / mo</h3>
              <p className="text-xs text-[#A3B18A]">For multi-plant urban gardens.</p>
              <ul className="space-y-2.5 text-xs text-[#F7F6F2] pt-4 border-t border-white/5">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> Up to 10 Plant Profiles</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> NTE™ Neural Voice Output</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> 5-Channel Smart Alerts</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> 200+ Species Care DB</li>
              </ul>
            </div>
            <Link href="/waitlist" className="pt-6">
              <Button variant="primary" className="w-full">Reserve Batch 01 Plus →</Button>
            </Link>
          </Card>

          {/* Pro Plan */}
          <Card className="flex flex-col justify-between">
            <div className="space-y-4">
              <Badge variant="gold">Pro Tier</Badge>
              <h3 className="font-display text-2xl font-bold text-[#E8D07C]">₹1,299 / mo</h3>
              <p className="text-xs text-[#A3B18A]">For botanists, greenhouses & collectors.</p>
              <ul className="space-y-2.5 text-xs text-[#F7F6F2]/80 pt-4 border-t border-white/5">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8D07C]" /> Unlimited Plant Profiles</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8D07C]" /> RAW Telemetry CSV Stream</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8D07C]" /> Home Assistant / Matter IoT</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8D07C]" /> Priority Founder Support</li>
              </ul>
            </div>
            <Link href="/pricing" className="pt-6">
              <Button variant="gold" className="w-full">Explore Pro Plan</Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomePricingPreview;
