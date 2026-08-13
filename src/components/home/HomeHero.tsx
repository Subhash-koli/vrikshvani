'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play, Leaf, Droplets, Sun, Activity, MessageCircle, ChevronDown } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#070B08] min-h-[92vh] flex flex-col justify-between">
      
      {/* 1. Atmospheric Rainforest Background & Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/assets/hero-nature-bg.png"
          alt="Nature Intelligence Forest Atmosphere"
          fill
          className="object-cover object-center opacity-35 mix-blend-screen scale-105"
          priority
          quality={90}
        />
        {/* Dark Overlays for Extreme Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B08] via-[#070B08]/60 to-[#070B08]/85 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B08] via-[#070B08]/70 to-transparent z-10" />
        
        {/* Soft Golden Sunlight Ray from Top Right */}
        <div className="absolute -top-24 -right-24 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-radial from-[#E8D07C]/20 via-[#8AD74C]/10 to-transparent rounded-full blur-[100px] z-10" />
        {/* Biophilic Glow */}
        <div className="absolute top-1/3 left-0 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-[#8AD74C]/10 rounded-full blur-[90px] z-10" />
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-20 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* =========================================================================
              LEFT COLUMN (DESKTOP) / TOP SECTION (MOBILE)
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-7">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2B18]/90 border border-[#8AD74C]/40 text-xs sm:text-sm font-medium text-[#8AD74C] shadow-[0_0_20px_rgba(138,215,76,0.15)] backdrop-blur-md">
              <Leaf className="w-3.5 h-3.5 text-[#8AD74C]" />
              <span>Nature has a language.</span>
            </div>

            {/* Master Headline */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-[72px] font-extrabold tracking-tight text-[#F7F6F2] leading-[1.08] max-w-xl sm:max-w-none">
              Let Your <br className="hidden sm:inline" />
              <span className="text-[#8AD74C] relative inline-flex items-center">
                Plants Speak
                <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-[#8AD74C] ml-1.5 -mt-2 inline-block drop-shadow-[0_0_12px_rgba(138,215,76,0.5)] shrink-0" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#A3B18A] max-w-lg leading-relaxed">
              Vriksh Vani is an AI-powered plant companion that{' '}
              <span className="text-[#8AD74C] font-semibold">understands</span> your plants,{' '}
              <span className="text-[#8AD74C] font-semibold">translates</span> their subtle biophysical signals, and helps you{' '}
              <span className="text-[#8AD74C] font-semibold">nurture</span> them before visual stress appears.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto pt-1">
              <Link href="/waitlist" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold shadow-[0_0_25px_rgba(138,215,76,0.35)] hover:shadow-[0_0_35px_rgba(138,215,76,0.55)] transition-all flex items-center justify-center gap-2"
                >
                  <Leaf className="w-4 h-4 fill-current" />
                  <span>Join the Waitlist →</span>
                </Button>
              </Link>

              <Link href="/nature-intelligence" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-6 py-3.5 sm:px-7 sm:py-4 text-sm sm:text-base bg-[#0F2B18]/60 hover:bg-[#0F2B18] border-white/15 hover:border-[#8AD74C]/50 text-[#F7F6F2] backdrop-blur-md flex items-center justify-center gap-2 transition-all"
                >
                  <Play className="w-4 h-4 text-[#8AD74C] fill-[#8AD74C]" />
                  <span>Watch Demo</span>
                </Button>
              </Link>
            </div>

            {/* Micro Badge */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#A3B18A]/80 pt-1">
              <span className="w-2 h-2 rounded-full bg-[#8AD74C] animate-pulse" />
              <span>Research Prototype · ESP32-S3 TinyML Architecture</span>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN (DESKTOP) / MIDDLE VISUAL (MOBILE): NHI-01 Companion
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center py-4 sm:py-6 lg:py-0 w-full overflow-hidden">
            
            {/* Ambient Aura */}
            <div className="absolute w-[260px] sm:w-[420px] h-[260px] sm:h-[420px] bg-gradient-radial from-[#8AD74C]/20 via-[#8AD74C]/5 to-transparent rounded-full blur-[70px] pointer-events-none" />

            <div className="relative w-full max-w-[320px] sm:max-w-[440px] aspect-square flex items-center justify-center">
              
              {/* NHI-01 Device Image */}
              <div className="relative w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-[#8AD74C]/30 group">
                <Image
                  src="/assets/hardware_renders/nhi01-forest-hero.png"
                  alt="Vriksh Vani NHI-01 Nature Intelligence Hub — Plant Companion Robot sitting on mossy tree stump"
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B08]/75 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* -------------------------------------------------------------
                  4 RADIATING BIOMETRIC TELEMETRY NODES
                 ------------------------------------------------------------- */}

              {/* Node 1: Top-Left -> Plant Emotions */}
              <div className="absolute top-0 left-0 sm:top-2 sm:left-2 z-30 flex items-center gap-1.5 sm:gap-2 p-1.5 sm:px-3 sm:py-2 rounded-2xl bg-[#070B08]/90 border border-[#8AD74C]/50 backdrop-blur-xl shadow-[0_0_20px_rgba(138,215,76,0.25)]">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0F2B18] border border-[#8AD74C] flex items-center justify-center shrink-0 shadow-lime-glow">
                  <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left pr-1">
                  <span className="text-[10px] sm:text-[11px] font-bold font-display text-[#F7F6F2]">Plant Emotions</span>
                  <span className="text-[8px] sm:text-[9px] font-mono text-[#8AD74C] hidden sm:inline">Stomatal State</span>
                </div>
              </div>

              {/* Node 2: Bottom-Left -> Smart Care */}
              <div className="absolute bottom-0 left-0 sm:bottom-2 sm:left-2 z-30 flex items-center gap-1.5 sm:gap-2 p-1.5 sm:px-3 sm:py-2 rounded-2xl bg-[#070B08]/90 border border-[#8AD74C]/50 backdrop-blur-xl shadow-[0_0_20px_rgba(138,215,76,0.25)]">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0F2B18] border border-[#8AD74C] flex items-center justify-center shrink-0 shadow-lime-glow">
                  <Droplets className="w-3 h-3 sm:w-4 sm:h-4 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left pr-1">
                  <span className="text-[10px] sm:text-[11px] font-bold font-display text-[#F7F6F2]">Smart Care</span>
                  <span className="text-[8px] sm:text-[9px] font-mono text-[#8AD74C] hidden sm:inline">Predictive VPD</span>
                </div>
              </div>

              {/* Node 3: Top-Right -> Live Monitoring */}
              <div className="absolute top-0 right-0 sm:top-2 sm:right-2 z-30 flex items-center gap-1.5 sm:gap-2 p-1.5 sm:px-3 sm:py-2 rounded-2xl bg-[#070B08]/90 border border-[#E8D07C]/50 backdrop-blur-xl shadow-[0_0_20px_rgba(232,208,124,0.25)]">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1C1A0E] border border-[#E8D07C] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(232,208,124,0.3)]">
                  <Sun className="w-3 h-3 sm:w-4 sm:h-4 text-[#E8D07C]" />
                </div>
                <div className="flex flex-col text-left pr-1">
                  <span className="text-[10px] sm:text-[11px] font-bold font-display text-[#F7F6F2]">Live Monitoring</span>
                  <span className="text-[8px] sm:text-[9px] font-mono text-[#E8D07C] hidden sm:inline">Leaf Temperature</span>
                </div>
              </div>

              {/* Node 4: Bottom-Right -> Health Insights */}
              <div className="absolute bottom-0 right-0 sm:bottom-2 sm:right-2 z-30 flex items-center gap-1.5 sm:gap-2 p-1.5 sm:px-3 sm:py-2 rounded-2xl bg-[#070B08]/90 border border-[#8AD74C]/50 backdrop-blur-xl shadow-[0_0_20px_rgba(138,215,76,0.25)]">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0F2B18] border border-[#8AD74C] flex items-center justify-center shrink-0 shadow-lime-glow">
                  <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left pr-1">
                  <span className="text-[10px] sm:text-[11px] font-bold font-display text-[#F7F6F2]">Health Insights</span>
                  <span className="text-[8px] sm:text-[9px] font-mono text-[#8AD74C] hidden sm:inline">VOC Signatures</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================================
            BOTTOM FLOATING FROSTED GLASS BAR: 4 Core Pillars
           ========================================================================= */}
        <div className="mt-8 sm:mt-12 pt-2">
          <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl p-4 sm:px-8 sm:py-5 bg-[#0B150F]/85 border border-[#8AD74C]/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 items-center">
              
              {/* Pillar 1 */}
              <div className="flex items-center gap-2.5 sm:gap-3 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] transition-all shadow-lime-glow">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-[#F7F6F2]">
                    Understand
                  </span>
                  <span className="text-[9px] sm:text-[11px] text-[#A3B18A]">
                    Plant Emotions
                  </span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-center gap-2.5 sm:gap-3 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] transition-all shadow-lime-glow">
                  <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-[#F7F6F2]">
                    Smart Care
                  </span>
                  <span className="text-[9px] sm:text-[11px] text-[#A3B18A]">
                    Recommendations
                  </span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center gap-2.5 sm:gap-3 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] transition-all shadow-lime-glow">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-[#F7F6F2]">
                    Real-time
                  </span>
                  <span className="text-[9px] sm:text-[11px] text-[#A3B18A]">
                    Health Monitoring
                  </span>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="flex items-center gap-2.5 sm:gap-3 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] transition-all shadow-lime-glow">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-[#F7F6F2]">
                    Sustainable
                  </span>
                  <span className="text-[9px] sm:text-[11px] text-[#A3B18A]">
                    Future & Privacy
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Downward Subtle Indicator */}
          <div className="flex justify-center pt-4 sm:pt-6">
            <Link href="#philosophy" className="p-1.5 rounded-full hover:bg-white/5 transition-colors text-[#8AD74C] animate-bounce" aria-label="Scroll down">
              <ChevronDown className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeHero;
