import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play, ArrowRight } from 'lucide-react';
import { ScarcityBadge } from '@/components/home/ScarcityBadge';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#070B08]">
      {/* Cinematic Background Image with Dark Vignette for Typography Contrast */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-nature-bg.png"
          alt=""
          fill
          className="object-cover object-center opacity-25"
          priority
          quality={85}
        />
        {/* Multi-stage dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B08] via-[#070B08]/85 to-[#070B08]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B08] via-transparent to-[#070B08] z-10" />
      </div>

      {/* Atmospheric Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#8AD74C]/12 rounded-full blur-[140px] pointer-events-none z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#E8D07C]/10 rounded-full blur-[100px] pointer-events-none z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Copy & Value Proposition */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 max-w-2xl">

            {/* Research Stage Badge & Category Pill */}
            <div className="animate-hero animate-hero-d0 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <ScarcityBadge />
              <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-[#0F2B18] border border-[#8AD74C]/30 text-[#8AD74C]">
                Category: Nature Intelligence
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-hero animate-hero-d1 font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F7F6F2] leading-[1.1]">
              Let your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AD74C] via-[#E8D07C] to-[#3FAE2A]">plant speak.</span>
            </h1>

            {/* Scientifically Grounded Subtitle */}
            <p className="animate-hero animate-hero-d2 text-lg sm:text-xl text-[#A3B18A] max-w-xl font-normal leading-relaxed">
              Plants continuously respond to their environment through subtle changes in temperature, transpiration, growth, and other biological signals. Vriksh Vani is building technology to interpret these signals and translate them into human-friendly insights.
            </p>

            {/* Action Buttons */}
            <div className="animate-hero animate-hero-d3 flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <Link href="/waitlist" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Join Early Access →
                </Button>
              </Link>
              <Link href="/nature-intelligence" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto flex items-center gap-2">
                  <Play className="w-4 h-4 text-[#8AD74C] fill-[#8AD74C]" /> ▶ See the Concept Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Product Visual & Research Label */}
          <div className="animate-hero animate-hero-d4 relative flex flex-col items-center shrink-0">
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              {/* Product Glow & Rim Lighting */}
              <div className="absolute inset-0 bg-[#8AD74C]/20 rounded-full blur-[70px] scale-110" />
              <div className="absolute inset-0 bg-[#E8D07C]/10 rounded-full blur-[90px] scale-125" />
              
              <Image
                src="/assets/nih01-sage.png"
                alt="NIH-01 Nature Intelligence Hub — Biophilic Sage ceramic smart plant sensor research prototype"
                fill
                className="object-contain drop-shadow-[0_25px_60px_rgba(138,215,76,0.35)] relative z-10 filter contrast-105"
                priority
                quality={95}
              />
            </div>

            {/* Product Research Caption Label */}
            <div className="mt-4 p-3 px-5 rounded-2xl bg-[#0F2B18]/80 border border-[#8AD74C]/30 backdrop-blur-md text-center space-y-0.5 shadow-2xl relative z-20">
              <div className="font-display font-bold text-sm text-[#F7F6F2]">
                NIH-01 — Nature Intelligence Hub
              </div>
              <div className="text-[11px] font-mono text-[#8AD74C]">
                Research Prototype · Non-Invasive Stomatal Sensing
              </div>
            </div>
          </div>

        </div>

        {/* Research Targets Strip */}
        <div className="animate-hero animate-hero-d4 grid grid-cols-2 md:grid-cols-4 gap-4 pt-16 border-t border-white/10 w-full max-w-4xl mx-auto mt-16">
          <div className="nidl-glass rounded-card p-4 text-center">
            <div className="text-xs font-mono text-[#E8D07C] uppercase tracking-wider mb-1">Research Target</div>
            <div className="text-base font-bold font-display text-[#8AD74C]">Early Stress Detection</div>
            <div className="text-[10px] text-[#A3B18A] font-mono mt-1">Building thermal-stress models</div>
          </div>
          <div className="nidl-glass rounded-card p-4 text-center">
            <div className="text-xs font-mono text-[#E8D07C] uppercase tracking-wider mb-1">Design Target</div>
            <div className="text-base font-bold font-display text-[#E8D07C]">&lt;50ms Target Inference</div>
            <div className="text-[10px] text-[#A3B18A] font-mono mt-1">On-device edge processing</div>
          </div>
          <div className="nidl-glass rounded-card p-4 text-center">
            <div className="text-xs font-mono text-[#E8D07C] uppercase tracking-wider mb-1">Growing Library</div>
            <div className="text-base font-bold font-display text-[#8AD74C]">Species Research Library</div>
            <div className="text-[10px] text-[#A3B18A] font-mono mt-1">Expanding species by species</div>
          </div>
          <div className="nidl-glass rounded-card p-4 text-center">
            <div className="text-xs font-mono text-[#E8D07C] uppercase tracking-wider mb-1">Privacy Architecture</div>
            <div className="text-base font-bold font-display text-[#F7F6F2]">Privacy-First</div>
            <div className="text-[10px] text-[#A3B18A] font-mono mt-1">Designed around minimal retention</div>
          </div>
        </div>

        {/* Signal Flow Indicator */}
        <div className="animate-hero animate-hero-d4 pt-12 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#8AD74C] uppercase tracking-widest bg-[#0F2B18]/60 px-4 py-1.5 rounded-full border border-[#8AD74C]/20">
            <span>Observe the Signal</span>
            <ArrowRight className="w-3 h-3 text-[#E8D07C]" />
            <span>Interpret the Pattern</span>
            <ArrowRight className="w-3 h-3 text-[#E8D07C]" />
            <span>Understand the Plant</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 text-xs font-mono text-[#A3B18A]/60 pt-2">
            <span>Explore Nature Intelligence</span>
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center animate-bounce mt-1">
              <span className="text-[#8AD74C]">↓</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeHero;
