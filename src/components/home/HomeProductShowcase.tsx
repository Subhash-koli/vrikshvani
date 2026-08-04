import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { RotateCw, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const HomeProductShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-[#030504] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Product Render Display Container */}
          <div className="nidl-glass rounded-container p-8 md:p-12 relative flex flex-col items-center justify-center min-h-[420px]">
            <Badge variant="lime" className="absolute top-6 left-6">
              <RotateCw className="w-3.5 h-3.5 animate-spin" /> Interactive 360° View
            </Badge>

            {/* Hidden Peer Inputs for Pure CSS Colorway Toggle */}
            <input type="radio" id="color-sage" name="colorway" defaultChecked className="peer/sage hidden" />
            <input type="radio" id="color-white" name="colorway" className="peer/white hidden" />

            {/* Simulated 360° Ceramic Hub Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 my-8 flex items-center justify-center">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-[#8AD74C]/30 flex items-center justify-center transition-all duration-500 shadow-lime-glow bg-[#0F2B18] peer-checked/sage:bg-[#0F2B18] peer-checked/white:bg-[#EAE8E2]/20">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-white/20 bg-[#070B08]/80 backdrop-blur-xl flex flex-col items-center justify-center text-center p-4">
                  <span className="text-3xl mb-1">🪴</span>
                  <span className="text-xs font-mono text-[#8AD74C]">NIH-01 Hub</span>
                  <span className="text-[10px] text-[#A3B18A] mt-1 font-mono peer-checked/sage:block hidden">
                    Biophilic Sage
                  </span>
                  <span className="text-[10px] text-[#E8D07C] mt-1 font-mono peer-checked/white:block hidden">
                    Cream White
                  </span>
                </div>
              </div>
            </div>

            {/* Colorway Toggle Label Pills */}
            <div className="flex items-center gap-3">
              <label
                htmlFor="color-sage"
                className="px-4 py-2 rounded-btn text-xs font-medium cursor-pointer transition-all bg-white/5 border border-white/10 text-[#F7F6F2]/60 peer-checked/sage:bg-[#0F2B18] peer-checked/sage:border-[#8AD74C] peer-checked/sage:text-[#8AD74C]"
              >
                🌿 Biophilic Sage
              </label>
              <label
                htmlFor="color-white"
                className="px-4 py-2 rounded-btn text-xs font-medium cursor-pointer transition-all bg-white/5 border border-white/10 text-[#F7F6F2]/60 peer-checked/white:bg-white/20 peer-checked/white:border-[#E8D07C] peer-checked/white:text-[#E8D07C]"
              >
                ✨ Cream White
              </label>
            </div>
          </div>

          {/* Product Details & Pre-order Perks */}
          <div className="space-y-6">
            <Badge variant="gold">Craftsmanship & Design</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              Hand-poured ceramic. Engineered to last a lifetime.
            </h2>
            <p className="text-[#A3B18A] text-base leading-relaxed">
              Each NIH-01 shell is slip-cast in artisanal ceramic kilns, hand-polished, and fitted with custom optical thermal windows. It integrates seamlessly into living rooms, offices, and greenhouses.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#F7F6F2]">
                <CheckCircle2 className="w-5 h-5 text-[#8AD74C]" /> 92% Recycled Ceramic Shell with Solar Assembly
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F7F6F2]">
                <CheckCircle2 className="w-5 h-5 text-[#8AD74C]" /> 1-Year Full Hardware Warranty & Lifetime Firmware Updates
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F7F6F2]">
                <CheckCircle2 className="w-5 h-5 text-[#8AD74C]" /> Numbered Founding Member Gold-Foil Keepsake Certificate
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link href="/product">
                <Button variant="primary">Explore Full Specifications →</Button>
              </Link>
              <Link href="/product/craftsmanship">
                <Button variant="outline">Watch Artisan Film</Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeProductShowcase;

