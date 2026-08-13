'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play, Leaf, Droplets, Sun, Activity, MessageCircle, ChevronDown } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#070B08] min-h-[92vh] flex flex-col justify-between">
      
      {/* 1. Atmospheric Rainforest Background & Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/assets/hero-nature-bg.png"
          alt="Nature Intelligence Forest Atmosphere"
          fill
          className="object-cover object-center opacity-30 mix-blend-screen scale-105"
          priority
          quality={90}
        />
        {/* Soft Vignettes & Dark Contrast Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B08] via-transparent to-[#070B08]/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B08] via-[#070B08]/60 to-transparent z-10" />
        
        {/* Golden Morning Sunray streaming from Top Right */}
        <div className="absolute -top-32 -right-32 w-[600px] lg:w-[900px] h-[600px] lg:h-[900px] bg-gradient-radial from-[#E8D07C]/25 via-[#8AD74C]/12 to-transparent rounded-full blur-[140px] z-10" />
        {/* Ambient Biophilic Green Aura */}
        <div className="absolute top-1/4 left-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-[#8AD74C]/10 rounded-full blur-[120px] z-10" />
      </div>

      {/* 2. Main Two-Column Hero Stage */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-20 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* =========================================================================
              LEFT COLUMN (48% Width on Desktop): Headline, Subtitle, Dual CTAs
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2B18]/90 border border-[#8AD74C]/40 text-xs sm:text-sm font-medium text-[#8AD74C] shadow-[0_0_20px_rgba(138,215,76,0.2)] backdrop-blur-md">
              <Leaf className="w-3.5 h-3.5 text-[#8AD74C]" />
              <span>Nature has a language.</span>
            </div>

            {/* Master Headline */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-[76px] font-extrabold tracking-tight text-[#F7F6F2] leading-[1.06]">
              Let Your <br className="hidden sm:inline" />
              <span className="text-[#8AD74C] relative inline-flex items-center">
                Plants Speak
                <Leaf className="w-7 h-7 sm:w-10 sm:h-10 text-[#8AD74C] ml-2 -mt-2 inline-block drop-shadow-[0_0_15px_rgba(138,215,76,0.6)] shrink-0" />
              </span>
            </h1>

            {/* Subtitle with Keyword Emphases */}
            <p className="text-base sm:text-lg lg:text-xl text-[#A3B18A] max-w-xl leading-relaxed">
              Vriksh Vani is an AI-powered plant companion that{' '}
              <span className="text-[#8AD74C] font-semibold">understands</span> your plants,{' '}
              <span className="text-[#8AD74C] font-semibold">translates</span> their subtle biophysical signals, and helps you{' '}
              <span className="text-[#8AD74C] font-semibold">nurture</span> them before visual stress appears.
            </p>

            {/* Dual CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-2">
              <Link href="/waitlist" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 py-4 text-sm sm:text-base font-bold shadow-[0_0_30px_rgba(138,215,76,0.4)] hover:shadow-[0_0_45px_rgba(138,215,76,0.65)] transition-all flex items-center justify-center gap-2"
                >
                  <Leaf className="w-4 h-4 fill-current" />
                  <span>Explore Vriksh Vani →</span>
                </Button>
              </Link>

              <Link href="/nature-intelligence" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-7 py-4 text-sm sm:text-base bg-[#0F2B18]/70 hover:bg-[#0F2B18] border-white/15 hover:border-[#8AD74C]/50 text-[#F7F6F2] backdrop-blur-md flex items-center justify-center gap-2 transition-all"
                >
                  <Play className="w-4 h-4 text-[#8AD74C] fill-[#8AD74C]" />
                  <span>Watch Demo</span>
                </Button>
              </Link>
            </div>

            {/* Research Stage Micro Badge */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#A3B18A]/80 pt-1">
              <span className="w-2 h-2 rounded-full bg-[#8AD74C] animate-pulse" />
              <span>Research Prototype · ESP32-S3 TinyML Architecture</span>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN (52% Width): NHI-01 Forest Companion Visual
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center py-6 lg:py-0 w-full">
            
            {/* Soft Ambient Radial Glow Behind NHI-01 */}
            <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-radial from-[#8AD74C]/25 via-[#8AD74C]/8 to-transparent rounded-full blur-[80px] pointer-events-none scale-110" />

            {/* Robust Hero Container */}
            <div className="relative w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[520px] h-[320px] sm:h-[440px] lg:h-[480px] flex items-center justify-center">
              
              {/* NHI-01 Visual Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-[#8AD74C]/35 bg-[#0F2B18]/30">
                <Image
                  src="/assets/hardware_renders/nhi01-forest-hero.png"
                  alt="Vriksh Vani NHI-01 Nature Intelligence Hub — Plant Companion Robot sitting on mossy tree stump in sunlit rainforest"
                  fill
                  className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B08]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* -------------------------------------------------------------
                  4 RADIATING BIOMETRIC TELEMETRY NODES (Floating Badges)
                 ------------------------------------------------------------- */}

              {/* Node 1: Top-Left -> Plant Emotions (Leaf) */}
              <div className="absolute -top-3 -left-2 sm:top-2 sm:left-2 z-30 flex items-center gap-1.5 sm:gap-2 p-2 sm:px-3.5 sm:py-2 rounded-2xl bg-[#070B08]/95 border border-[#8AD74C]/60 backdrop-blur-xl shadow-[0_0_25px_rgba(138,215,76,0.35)] hover:scale-105 transition-transform duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0F2B18] border border-[#8AD74C] flex items-center justify-center shrink-0 shadow-lime-glow">
                  <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left pr-1">
                  <span className="text-[10px] sm:text-xs font-bold font-display text-[#F7F6F2]">Plant Emotions</span>
                  <span className="text-[8px] sm:text-[10px] font-mono text-[#8AD74C]">Stomatal State</span>
                </div>
              </div>

              {/* Node 2: Bottom-Left -> Smart Care (Droplets) */}
              <div className="absolute -bottom-3 -left-2 sm:bottom-2 sm:left-2 z-30 flex items-center gap-1.5 sm:gap-2 p-2 sm:px-3.5 sm:py-2 rounded-2xl bg-[#070B08]/95 border border-[#8AD74C]/60 backdrop-blur-xl shadow-[0_0_25px_rgba(138,215,76,0.35)] hover:scale-105 transition-transform duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0F2B18] border border-[#8AD74C] flex items-center justify-center shrink-0 shadow-lime-glow">
                  <Droplets className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left pr-1">
                  <span className="text-[10px] sm:text-xs font-bold font-display text-[#F7F6F2]">Smart Care</span>
                  <span className="text-[8px] sm:text-[10px] font-mono text-[#8AD74C]">Predictive VPD</span>
                </div>
              </div>

              {/* Node 3: Top-Right -> Live Monitoring (Sun) */}
              <div className="absolute -top-3 -right-2 sm:top-2 sm:right-2 z-30 flex items-center gap-1.5 sm:gap-2 p-2 sm:px-3.5 sm:py-2 rounded-2xl bg-[#070B08]/95 border border-[#E8D07C]/60 backdrop-blur-xl shadow-[0_0_25px_rgba(232,208,124,0.35)] hover:scale-105 transition-transform duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1C1A0E] border border-[#E8D07C] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(232,208,124,0.4)]">
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E8D07C]" />
                </div>
                <div className="flex flex-col text-left pr-1">
                  <span className="text-[10px] sm:text-xs font-bold font-display text-[#F7F6F2]">Live Monitoring</span>
                  <span className="text-[8px] sm:text-[10px] font-mono text-[#E8D07C]">Leaf Temperature</span>
                </div>
              </div>

              {/* Node 4: Bottom-Right -> Health Insights (Activity) */}
              <div className="absolute -bottom-3 -right-2 sm:bottom-2 sm:right-2 z-30 flex items-center gap-1.5 sm:gap-2 p-2 sm:px-3.5 sm:py-2 rounded-2xl bg-[#070B08]/95 border border-[#8AD74C]/60 backdrop-blur-xl shadow-[0_0_25px_rgba(138,215,76,0.35)] hover:scale-105 transition-transform duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0F2B18] border border-[#8AD74C] flex items-center justify-center shrink-0 shadow-lime-glow">
                  <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left pr-1">
                  <span className="text-[11px] sm:text-xs font-bold font-display text-[#F7F6F2]">Health Insights</span>
                  <span className="text-[8px] sm:text-[10px] font-mono text-[#8AD74C]">VOC Signatures</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================================
            BOTTOM FLOATING FROSTED GLASS BAR: 4 Core Nature Pillars
           ========================================================================= */}
        <div className="mt-10 sm:mt-14 pt-2">
          <div className="max-w-5xl mx-auto rounded-3xl p-5 sm:px-8 sm:py-5 bg-[#0B150F]/85 border border-[#8AD74C]/35 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-4 items-center">
              
              {/* Feature 1: Understand Plant Emotions */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] group-hover:scale-105 transition-all shadow-lime-glow">
                  <MessageCircle className="w-5 h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">
                    Understand
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#A3B18A] font-medium">
                    Plant Emotions
                  </span>
                </div>
              </div>

              {/* Feature 2: Smart Care Recommendations */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] group-hover:scale-105 transition-all shadow-lime-glow">
                  <Droplets className="w-5 h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">
                    Smart Care
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#A3B18A] font-medium">
                    Recommendations
                  </span>
                </div>
              </div>

              {/* Feature 3: Real-time Health Monitoring */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] group-hover:scale-105 transition-all shadow-lime-glow">
                  <Activity className="w-5 h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">
                    Real-time
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#A3B18A] font-medium">
                    Health Monitoring
                  </span>
                </div>
              </div>

              {/* Feature 4: Sustainable Future */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] group-hover:scale-105 transition-all shadow-lime-glow">
                  <Leaf className="w-5 h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">
                    Sustainable
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#A3B18A] font-medium">
                    Future & Privacy
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Downward Subtle Indicator */}
          <div className="flex justify-center pt-5">
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
