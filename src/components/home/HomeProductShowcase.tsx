'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const COLORWAYS = [
  {
    id: 'sage',
    label: '🌿 Biophilic Sage Concept',
    image: '/assets/nih01-sage.png',
    alt: 'NIH-01 in Biophilic Sage ceramic finish concept',
    borderColor: 'border-[#8AD74C]',
    textColor: 'text-[#8AD74C]',
    glowColor: 'bg-[#8AD74C]/15',
    filter: undefined as string | undefined,
  },
  {
    id: 'white',
    label: '✨ Cream White Concept',
    image: '/assets/nih01-sage.png',
    alt: 'NIH-01 in Cream White ceramic finish concept',
    borderColor: 'border-[#E8D07C]',
    textColor: 'text-[#E8D07C]',
    glowColor: 'bg-[#E8D07C]/15',
    filter: 'brightness(1.3) saturate(0.3) sepia(0.15)',
  },
];

export const HomeProductShowcase: React.FC = () => {
  const [activeColorway, setActiveColorway] = useState(0);
  const current = COLORWAYS[activeColorway];

  return (
    <section className="py-24 bg-[#030504] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Product Render Display Container */}
          <div className="nidl-glass rounded-container p-8 md:p-12 relative flex flex-col items-center justify-center min-h-[420px]">
            <Badge variant="lime" className="absolute top-6 left-6">
              Ceramic Hardware Vision
            </Badge>

            {/* Product Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 my-8 flex items-center justify-center">
              {/* Glow behind product */}
              <div className={`absolute inset-0 ${current.glowColor} rounded-full blur-[60px] scale-110 transition-colors duration-500`} />
              <Image
                src={current.image}
                alt={current.alt}
                fill
                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative z-10 transition-all duration-500"
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
                  className={`px-4 py-2 rounded-btn text-xs font-medium cursor-pointer transition-all duration-300 ${
                    activeColorway === idx
                      ? `bg-[#0F2B18] ${c.borderColor} border ${c.textColor}`
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
              Hand-poured ceramic design. Engineered to endure.
            </h2>
            <p className="text-[#A3B18A] text-base leading-relaxed">
              NIH-01 is being designed around handcrafted ceramic bodies, custom optical thermal windows, and biophilic aesthetics that integrate seamlessly into homes, offices, and research spaces.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#F7F6F2]">
                <CheckCircle2 className="w-5 h-5 text-[#8AD74C]" /> Sustainable mineral clay shell design
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F7F6F2]">
                <CheckCircle2 className="w-5 h-5 text-[#8AD74C]" /> Planned lifetime firmware updates & open API access
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F7F6F2]">
                <CheckCircle2 className="w-5 h-5 text-[#8AD74C]" /> Numbered Founding Member digital & physical certificate
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
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
