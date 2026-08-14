'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const COLORWAYS = [
  {
    id: 'sage',
    label: '🌿 Biophilic Forest Concept',
    image: '/assets/hardware_renders/nhi01-forest-hero.png',
    alt: 'NHI-01 in Biophilic Sage ceramic finish concept',
    borderColor: 'border-[#8AD74C]',
    textColor: 'text-[#8AD74C]',
    glowColor: 'bg-[#8AD74C]/15',
    filter: undefined as string | undefined,
  },
  {
    id: 'white',
    label: '✨ Cream White Concept',
    image: '/assets/hardware_renders/nhi01-forest-hero.png',
    alt: 'NHI-01 in Cream White ceramic finish concept',
    borderColor: 'border-[#E8D07C]',
    textColor: 'text-[#E8D07C]',
    glowColor: 'bg-[#E8D07C]/15',
    filter: 'brightness(1.15) saturate(0.8) contrast(1.05)',
  },
];

export const HomeProductShowcase: React.FC = () => {
  const [activeColorway, setActiveColorway] = useState(0);
  const current = COLORWAYS[activeColorway];

  return (
    <section className="py-24 bg-[#030504] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Product Render Display Container */}
          <div className="nidl-glass rounded-3xl p-6 md:p-10 relative flex flex-col items-center justify-center min-h-[420px] border border-[#8AD74C]/25 shadow-2xl">
            <Badge variant="lime" className="absolute top-6 left-6">
              NIH-01 Hardware Vision
            </Badge>

            {/* Product Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 my-8 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
              {/* Glow behind product */}
              <div className={`absolute inset-0 ${current.glowColor} rounded-full blur-[60px] scale-110 transition-colors duration-500`} />
              <Image
                src={current.image}
                alt={current.alt}
                fill
                className="object-cover object-center relative z-10 transition-all duration-500"
                style={current.filter ? { filter: current.filter } : undefined}
                quality={90}
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>

            {/* Colorway Toggle Pills */}
            <div className="flex items-center gap-3">
              {COLORWAYS.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => setActiveColorway(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 ${
                    activeColorway === idx
                      ? 'bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050] text-white font-bold scale-105'
                      : 'bg-white/5 border border-white/10 text-[#F7F6F2]/60 hover:border-white/20'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Details & Vision */}
          <div className="space-y-6">
            <Badge variant="gold">Craftsmanship & Design Vision</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              Handcrafted stoneware. Nature-first intelligence.
            </h2>
            <p className="text-[#A3B18A] text-base leading-relaxed">
              NIH-01 is being designed around tactile ceramic stoneware bodies, custom optical thermal windows, and biophilic companion aesthetics that integrate naturally into living spaces and botanical collections.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#F7F6F2]">
                <CheckCircle2 className="w-5 h-5 text-[#8AD74C] shrink-0" /> Sustainable mineral clay shell & tactile ceramic glaze
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F7F6F2]">
                <CheckCircle2 className="w-5 h-5 text-[#8AD74C] shrink-0" /> Local ESP32-S3 TinyML compute with volatile memory privacy
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F7F6F2]">
                <CheckCircle2 className="w-5 h-5 text-[#8AD74C] shrink-0" /> Numbered Founding Member digital & physical research certificate
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/product">
                <Button variant="primary">Explore Hardware Specs →</Button>
              </Link>
              <Link href="/waitlist">
                <Button variant="outline">Join Prototype Cohort</Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeProductShowcase;
