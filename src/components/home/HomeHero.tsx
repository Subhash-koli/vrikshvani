'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play, ArrowRight, Sparkles, Leaf, Droplets, Sun, Activity, MessageCircle, Heart, ChevronDown } from 'lucide-react';

export const HomeHero: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-[#070B08] min-h-[92vh] flex flex-col justify-between">
      {/* 1. Cinematic Rainforest Background & Atmospheric Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/hero-nature-bg.png"
          alt="Nature Intelligence Forest Atmosphere"
          fill
          className="object-cover object-center opacity-40 mix-blend-screen scale-105 animate-subtle-zoom"
          priority
          quality={90}
        />
        {/* Soft Sunlight Cones & Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B08] via-[#070B08]/60 to-[#070B08]/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B08] via-[#070B08]/75 to-transparent z-10" />
        
        {/* Top-Right Golden Sunlight Ray */}
        <div className="absolute -top-24 -right-24 w-[750px] h-[750px] bg-gradient-radial from-[#E8D07C]/25 via-[#8AD74C]/15 to-transparent rounded-full blur-[140px] z-10" />
        {/* Center-Left Biophilic Glow */}
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#8AD74C]/12 rounded-full blur-[130px] z-10" />
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-20 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* =========================================================================
              LEFT COLUMN: Brand Storytelling & Value Proposition
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Nature Has a Language Pill Badge */}
            <div className="animate-fadeIn inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2B18]/90 border border-[#8AD74C]/40 text-xs sm:text-sm font-medium text-[#8AD74C] shadow-[0_0_20px_rgba(138,215,76,0.15)] backdrop-blur-md">
              <Leaf className="w-3.5 h-3.5 text-[#8AD74C]" />
              <span>Nature has a language.</span>
            </div>

            {/* Master Headline with Leaf Motif */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-[74px] font-extrabold tracking-tight text-[#F7F6F2] leading-[1.06]">
              Let Your <br className="hidden sm:inline" />
              <span className="text-[#8AD74C] relative inline-flex items-center">
                Plants Speak
                <svg
                  className="w-7 h-7 sm:w-9 sm:h-9 text-[#8AD74C] ml-1.5 -mt-2 inline-block drop-shadow-[0_0_12px_rgba(138,215,76,0.5)]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
                </svg>
              </span>
            </h1>

            {/* Subtitle with Keyword Emphases */}
            <p className="text-base sm:text-lg lg:text-xl text-[#A3B18A] max-w-xl leading-relaxed">
              Vriksh Vani is an AI-powered plant companion that{' '}
              <span className="text-[#8AD74C] font-medium">understands</span> your plants,{' '}
              <span className="text-[#8AD74C] font-medium">translates</span> their subtle biophysical signals, and helps you{' '}
              <span className="text-[#8AD74C] font-medium">nurture</span> them before visual stress appears.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <Link href="/waitlist" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 py-4 text-sm sm:text-base font-bold shadow-[0_0_30px_rgba(138,215,76,0.35)] hover:shadow-[0_0_40px_rgba(138,215,76,0.55)] transition-all flex items-center justify-center gap-2 group"
                >
                  <Leaf className="w-4 h-4 text-[#070B08] group-hover:rotate-12 transition-transform" />
                  <span>Explore Vriksh Vani →</span>
                </Button>
              </Link>

              <Link href="/nature-intelligence" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-7 py-4 text-sm sm:text-base bg-[#0F2B18]/60 hover:bg-[#0F2B18] border-white/15 hover:border-[#8AD74C]/50 text-[#F7F6F2] backdrop-blur-md flex items-center justify-center gap-2 transition-all"
                >
                  <Play className="w-4 h-4 text-[#8AD74C] fill-[#8AD74C]" />
                  <span>Watch Concept Demo</span>
                </Button>
              </Link>
            </div>

            {/* Research & Trust Micro Badge */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#A3B18A]/80">
              <span className="w-2 h-2 rounded-full bg-[#8AD74C] animate-pulse" />
              <span>Research Prototype · ESP32-S3 TinyML Architecture</span>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: NHI-01 Product Visual on Natural Pedestal + Telemetry Nodes
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center py-6 lg:py-0">
            
            {/* Ambient Background Aura & Sunlight Effect */}
            <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] bg-gradient-radial from-[#8AD74C]/25 via-[#8AD74C]/10 to-transparent rounded-full blur-[90px] pointer-events-none scale-110" />
            <div className="absolute w-[300px] h-[300px] bg-[#E8D07C]/15 rounded-full blur-[80px] pointer-events-none -top-10 -right-10" />

            <div className="relative w-full max-w-[440px] sm:max-w-[520px] aspect-square flex items-center justify-center">
              
              {/* NHI-01 Forest Hero Image */}
              <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[#8AD74C]/20 group">
                <Image
                  src="/assets/hardware_renders/nhi01-forest-hero.png"
                  alt="Vriksh Vani NHI-01 Nature Intelligence Hub — Plant Companion Robot sitting on mossy tree stump"
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B08]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* -------------------------------------------------------------
                  RADIATING BIOMETRIC TELEMETRY NODES (4 Interactive Floating Badges)
                 ------------------------------------------------------------- */}

              {/* Node 1: Top-Left -> Plant Emotions (Leaf) */}
              <div
                onMouseEnter={() => setActiveNode('leaf')}
                onMouseLeave={() => setActiveNode(null)}
                className="absolute -top-3 left-2 sm:-top-2 sm:left-4 z-30 flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-2xl bg-[#070B08]/90 border border-[#8AD74C]/50 backdrop-blur-xl shadow-[0_0_25px_rgba(138,215,76,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0F2B18] border border-[#8AD74C] flex items-center justify-center shadow-lime-glow">
                  <Leaf className="w-4 h-4 text-[#8AD74C]" />
                </div>
                <div className="hidden sm:flex flex-col text-left pr-1">
                  <span className="text-[11px] font-bold font-display text-[#F7F6F2]">Plant Emotions</span>
                  <span className="text-[9px] font-mono text-[#8AD74C]">Stomatal State</span>
                </div>
              </div>

              {/* Node 2: Bottom-Left -> Smart Care (Droplet) */}
              <div
                onMouseEnter={() => setActiveNode('water')}
                onMouseLeave={() => setActiveNode(null)}
                className="absolute -bottom-3 left-2 sm:bottom-4 sm:-left-2 z-30 flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-2xl bg-[#070B08]/90 border border-[#8AD74C]/50 backdrop-blur-xl shadow-[0_0_25px_rgba(138,215,76,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0F2B18] border border-[#8AD74C] flex items-center justify-center shadow-lime-glow">
                  <Droplets className="w-4 h-4 text-[#8AD74C]" />
                </div>
                <div className="hidden sm:flex flex-col text-left pr-1">
                  <span className="text-[11px] font-bold font-display text-[#F7F6F2]">Smart Care</span>
                  <span className="text-[9px] font-mono text-[#8AD74C]">Predictive VPD</span>
                </div>
              </div>

              {/* Node 3: Top-Right -> Live Monitoring (Sun) */}
              <div
                onMouseEnter={() => setActiveNode('sun')}
                onMouseLeave={() => setActiveNode(null)}
                className="absolute -top-3 right-2 sm:top-2 sm:-right-2 z-30 flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-2xl bg-[#070B08]/90 border border-[#E8D07C]/50 backdrop-blur-xl shadow-[0_0_25px_rgba(232,208,124,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1C1A0E] border border-[#E8D07C] flex items-center justify-center shadow-[0_0_15px_rgba(232,208,124,0.3)]">
                  <Sun className="w-4 h-4 text-[#E8D07C]" />
                </div>
                <div className="hidden sm:flex flex-col text-left pr-1">
                  <span className="text-[11px] font-bold font-display text-[#F7F6F2]">Live Monitoring</span>
                  <span className="text-[9px] font-mono text-[#E8D07C]">Leaf Temperature</span>
                </div>
              </div>

              {/* Node 4: Bottom-Right -> Health Insights (Activity / Chart) */}
              <div
                onMouseEnter={() => setActiveNode('chart')}
                onMouseLeave={() => setActiveNode(null)}
                className="absolute -bottom-3 right-2 sm:bottom-4 sm:-right-2 z-30 flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-2xl bg-[#070B08]/90 border border-[#8AD74C]/50 backdrop-blur-xl shadow-[0_0_25px_rgba(138,215,76,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0F2B18] border border-[#8AD74C] flex items-center justify-center shadow-lime-glow">
                  <Activity className="w-4 h-4 text-[#8AD74C]" />
                </div>
                <div className="hidden sm:flex flex-col text-left pr-1">
                  <span className="text-[11px] font-bold font-display text-[#F7F6F2]">Health Insights</span>
                  <span className="text-[9px] font-mono text-[#8AD74C]">VOC Signatures</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================================
            BOTTOM FLOATING FROSTED GLASS BAR: 4 Core Nature Pillars
           ========================================================================= */}
        <div className="mt-12 sm:mt-16 pt-4">
          <div className="max-w-5xl mx-auto rounded-3xl p-5 sm:px-8 sm:py-6 bg-[#0B150F]/85 border border-[#8AD74C]/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 items-center">
              
              {/* Feature 1: Understand Plant Emotions */}
              <div className="flex items-center gap-3 sm:gap-3.5 group">
                <div className="w-11 h-11 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] group-hover:scale-105 transition-all shadow-lime-glow">
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
              <div className="flex items-center gap-3 sm:gap-3.5 group">
                <div className="w-11 h-11 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] group-hover:scale-105 transition-all shadow-lime-glow">
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
              <div className="flex items-center gap-3 sm:gap-3.5 group">
                <div className="w-11 h-11 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] group-hover:scale-105 transition-all shadow-lime-glow">
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
              <div className="flex items-center gap-3 sm:gap-3.5 group">
                <div className="w-11 h-11 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] group-hover:scale-105 transition-all shadow-lime-glow">
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
          <div className="flex justify-center pt-6">
            <Link href="#philosophy" className="p-1.5 rounded-full hover:bg-white/5 transition-colors text-[#8AD74C] animate-bounce">
              <ChevronDown className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeHero;
