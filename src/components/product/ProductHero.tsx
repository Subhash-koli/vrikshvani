'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Sparkles, ShieldCheck, Check } from 'lucide-react';
import Link from 'next/link';

export const ProductHero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 bg-[#070B08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <Badge variant="lime">NIH-01 Nature Intelligence Hub</Badge>
            <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#F7F6F2] leading-tight">
              Enterprise Bio-Physics. <span className="text-[#8AD74C]">Hand-Crafted Ceramic.</span>
            </h1>
            <p className="text-base md:text-lg text-[#A3B18A] leading-relaxed">
              The world's first non-invasive thermal biometrics and quad-gas monitoring system for indoor plant flora.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#F7F6F2]">
                <Check className="w-5 h-5 text-[#8AD74C]" /> FLIR Lepton 3.5 160x120 Thermal Array
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F7F6F2]">
                <Check className="w-5 h-5 text-[#8AD74C]" /> Bosch BME688 VOC / VSC Quad-Gas Sensor
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F7F6F2]">
                <Check className="w-5 h-5 text-[#8AD74C]" /> NTE™ Neural Voice Synthesis Engine (8 Languages)
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/waitlist">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Pre-Order Founding Unit →
                </Button>
              </Link>
              <Link href="/product/specifications">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Full Spec Sheet
                </Button>
              </Link>
            </div>
          </div>

          <div className="nidl-glass rounded-container p-8 relative flex items-center justify-center min-h-[400px]">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-[#8AD74C]/30 bg-[#0F2B18] shadow-lime-glow flex flex-col items-center justify-center text-center p-6">
              <span className="text-4xl mb-2">🪴</span>
              <span className="font-display font-bold text-xl text-[#F7F6F2]">NIH-01 Hub</span>
              <Badge variant="lime" className="mt-2 font-mono">160x120 FLIR Lepton</Badge>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductHero;
