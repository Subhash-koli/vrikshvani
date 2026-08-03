'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function PricingCalculatorPage() {
  const [plantCount, setPlantCount] = useState(15);
  const avgPlantCost = 1500; // INR
  const estimatedSavings = plantCount * avgPlantCost * 0.4; // 40% reduction in plant mortality

  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="lime">Interactive Calculator</Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2]">
              Fleet ROI & Savings Calculator.
            </h1>
            <p className="text-[#A3B18A] text-base">
              Estimate how much money Vriksh Vani saves you by preventing rare plant loss.
            </p>
          </div>

          <Card className="p-8 space-y-8 max-w-2xl mx-auto border-[#8AD74C]/30 shadow-2xl">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#A3B18A] font-semibold">Number of Indoor Plants Managed:</span>
                <span className="font-mono text-xl font-bold text-[#8AD74C]">{plantCount} Plants</span>
              </div>
              <input
                type="range"
                min="3"
                max="100"
                value={plantCount}
                onChange={(e) => setPlantCount(parseInt(e.target.value))}
                className="w-full accent-[#8AD74C] cursor-pointer"
              />
            </div>

            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
              <div className="nidl-glass p-4 rounded-card">
                <div className="text-xs text-[#A3B18A] uppercase font-mono">Estimated Annual Savings</div>
                <div className="text-2xl md:text-3xl font-bold font-display text-[#8AD74C] mt-1">₹{estimatedSavings.toLocaleString()}</div>
              </div>
              <div className="nidl-glass p-4 rounded-card">
                <div className="text-xs text-[#A3B18A] uppercase font-mono">Recommended Plan</div>
                <div className="text-2xl md:text-3xl font-bold font-display text-[#E8D07C] mt-1">
                  {plantCount > 10 ? 'Pro Plan' : 'Plus Plan'}
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <Link href="/waitlist">
                <Button variant="primary" className="w-full">Reserve Founding Unit →</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
