import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play } from 'lucide-react';
import { ScarcityBadge } from '@/components/home/ScarcityBadge';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#070B08]">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-nature-bg.png"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B08]/60 via-[#070B08]/40 to-[#070B08]" />
      </div>

      {/* Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8AD74C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#E8D07C]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Copy */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 max-w-2xl">

            {/* Scarcity Badge & Category Pill — delay 0 */}
            <div className="animate-hero animate-hero-d0 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <ScarcityBadge />
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#0F2B18] border border-[#8AD74C]/30 text-[#8AD74C]">
                Category: Nature Intelligence
              </span>
            </div>

            {/* Main Slogan Headline — delay 1 */}
            <h1 className="animate-hero animate-hero-d1 font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F7F6F2] leading-[1.1]">
              Let your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AD74C] via-[#E8D07C] to-[#3FAE2A]">plant speak.</span>
            </h1>

            {/* Subtitle — delay 2 */}
            <p className="animate-hero animate-hero-d2 text-lg sm:text-xl text-[#A3B18A] max-w-xl font-normal leading-relaxed">
              Your plant communicates every second through subtle thermal shifts and leaf transpiration. Vriksh Vani NIH-01 listens non-invasively and translates its health, hydration, and comfort into spoken words.
            </p>

            {/* CTA Buttons — delay 3 */}
            <div className="animate-hero animate-hero-d3 flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <Link href="/waitlist" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Join the Waitlist →
                </Button>
              </Link>
              <Link href="/nature-intelligence" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto flex items-center gap-2">
                  <Play className="w-4 h-4 text-[#8AD74C] fill-[#8AD74C]" /> Experience Voice Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Product Hero Image — delay 4 */}
          <div className="animate-hero animate-hero-d4 relative flex-shrink-0">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow behind product */}
              <div className="absolute inset-0 bg-[#8AD74C]/15 rounded-full blur-[80px] scale-110" />
              <Image
                src="/assets/nih01-sage.png"
                alt="NIH-01 Nature Intelligence Hub — Biophilic Sage ceramic smart plant sensor"
                fill
                className="object-contain drop-shadow-[0_20px_60px_rgba(138,215,76,0.25)] relative z-10"
                priority
                quality={90}
              />
            </div>
          </div>

        </div>

        {/* Key Metrics Strip — delay 4 */}
        <div className="animate-hero animate-hero-d4 grid grid-cols-2 md:grid-cols-4 gap-4 pt-16 border-t border-white/10 w-full max-w-4xl mx-auto mt-16">
          <div className="nidl-glass rounded-card p-4 text-center">
            <div className="text-2xl font-bold font-display text-[#8AD74C]">98.4%</div>
            <div className="text-xs text-[#A3B18A] font-mono uppercase mt-1">Stress Accuracy</div>
          </div>
          <div className="nidl-glass rounded-card p-4 text-center">
            <div className="text-2xl font-bold font-display text-[#E8D07C]">&lt;45ms</div>
            <div className="text-xs text-[#A3B18A] font-mono uppercase mt-1">Local Edge NPU</div>
          </div>
          <div className="nidl-glass rounded-card p-4 text-center">
            <div className="text-2xl font-bold font-display text-[#8AD74C]">200+</div>
            <div className="text-xs text-[#A3B18A] font-mono uppercase mt-1">Species DB</div>
          </div>
          <div className="nidl-glass rounded-card p-4 text-center">
            <div className="text-2xl font-bold font-display text-[#F7F6F2]">0 Video</div>
            <div className="text-xs text-[#A3B18A] font-mono uppercase mt-1">Volatile SRAM</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-hero animate-hero-d4 pt-12 flex flex-col items-center justify-center gap-2 text-xs font-mono text-[#A3B18A]/60">
          <span>Explore Nature Intelligence</span>
          <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center animate-bounce">
            <span className="text-[#8AD74C]">↓</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeHero;
