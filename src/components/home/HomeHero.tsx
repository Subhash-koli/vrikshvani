'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play, Leaf, Sun, Activity, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-28 lg:pb-8 overflow-hidden bg-[#070B08] min-h-[84vh] lg:min-h-[86vh] flex flex-col justify-between">

      {/* ─────────────────────────────────────────────────────────────────────────────
          1. DEVICE-RESPONSIVE BIOPHILIC HERO BACKGROUND (Mobile / Tablet / Desktop)
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Device-tailored background images with natural unzoomed framing */}
        <picture className="absolute inset-0 w-full h-full">
          {/* Mobile Screens (< 640px): 9:16 Portrait view */}
          <source
            media="(max-width: 639px)"
            srcSet="/assets/theme_backgrounds/hero-bg-mobile.png"
          />
          {/* Tablet Screens (640px to 1023px): 4:3 Balanced view */}
          <source
            media="(max-width: 1023px)"
            srcSet="/assets/theme_backgrounds/hero-bg-tablet.png"
          />
          {/* Desktop Screens (>= 1024px): 16:9 Widescreen view */}
          <img
            src="/assets/theme_backgrounds/hero-bg-desktop.png"
            alt="Vriksh Vani NHI-01 Nature Intelligence Hub in sunlit biophilic forest stream"
            className="w-full h-full object-cover object-[center_35%] lg:object-center transition-all duration-700"
          />
        </picture>

      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
          3. MAIN HERO STAGE
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-20 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* =========================================================================
              LEFT COLUMN (60% Width on Desktop): Headline, Subtitle, CTAs, Live Voice Card & Tech Bar
             ========================================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6">

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2B18]/90 border border-[#8AD74C]/40 text-xs sm:text-sm font-medium text-[#8AD74C] shadow-[0_0_20px_rgba(138,215,76,0.25)] backdrop-blur-xl">
              <Leaf className="w-3.5 h-3.5 text-[#8AD74C]" />
              <span>Nature Intelligence Category Creator</span>
            </div>

            {/* Master Headline */}
            <h1 className="font-display text-4xl sm:text-5xl xl:text-[68px] font-extrabold tracking-tight text-[#F7F6F2] leading-[1.06]">
              Let Your <br className="hidden sm:inline" />
              <span className="text-[#8AD74C] relative inline-flex items-center">
                Plants Speak
                <Leaf className="w-7 h-7 sm:w-9 sm:h-9 text-[#8AD74C] ml-2 -mt-2 inline-block drop-shadow-[0_0_15px_rgba(138,215,76,0.6)] shrink-0" />
              </span>
            </h1>

            {/* Storytelling Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#A3B18A] max-w-xl leading-relaxed">
              Your plant communicates every second through subtle thermal shifts and leaf transpiration.{' '}
              <span className="text-[#8AD74C] font-semibold">Vriksh Vani</span> decodes these silent biophysical signals and translates them into plain human speech.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-1">
              <Link href="/waitlist" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 py-3.5 text-sm sm:text-base font-bold shadow-[0_0_30px_rgba(138,215,76,0.4)] hover:shadow-[0_0_45px_rgba(138,215,76,0.65)] transition-all flex items-center justify-center gap-2"
                >
                  <Leaf className="w-4 h-4 fill-current" />
                  <span>Join the Waitlist →</span>
                </Button>
              </Link>

              <Link href="/nature-intelligence" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-7 py-3.5 text-sm sm:text-base bg-[#0F2B18]/80 hover:bg-[#0F2B18] border-white/15 hover:border-[#8AD74C]/50 text-[#F7F6F2] backdrop-blur-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Play className="w-4 h-4 text-[#8AD74C] fill-[#8AD74C]" />
                  <span>Watch NTE™ Voice Demo</span>
                </Button>
              </Link>
            </div>

            {/* Live Plant Voice Telemetry Output Card (Placed in Left Column to avoid blocking robot) */}
            <div className="w-full max-w-xl p-3.5 sm:p-4 rounded-2xl bg-[#0F2B18]/85 border border-[#8AD74C]/45 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.8)] space-y-1.5">
              <div className="flex items-center justify-between text-xs text-[#8AD74C] font-mono flex-wrap gap-2">
                <span className="flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#8AD74C] animate-pulse" /> Live NTE™ Spoken Plant Output
                </span>
                <span className="text-[10px] text-[#A3B18A] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                  Stomata: Open · VPD: 0.92 kPa
                </span>
              </div>
              <p className="text-xs sm:text-sm italic text-[#F7F6F2] font-sans leading-snug">
                "My stomata are open and photosynthesizing happily! I could use a tiny sip of water around 4:00 PM."
              </p>
            </div>

            {/* Micro Technology Pill Bar */}
            <div className="pt-1.5 border-t border-white/10 w-full max-w-xl flex items-center justify-center lg:justify-start gap-4 flex-wrap text-xs font-mono text-[#A3B18A]">
              <span className="flex items-center gap-1.5 text-[#8AD74C]">
                <Sun className="w-3.5 h-3.5" /> FLIR Thermal Optics
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-[#E8D07C]">
                <Activity className="w-3.5 h-3.5" /> Quad-Gas VOC
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-[#8AD74C]">
                <ShieldCheck className="w-3.5 h-3.5" /> Zero Camera Recording
              </span>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN (40% Width on Desktop): Kept 100% unobstructed so the 3D NIH-01 robot shines!
             ========================================================================= */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 pointer-events-none min-h-[380px]" />

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
          4. SCROLL GUIDANCE
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex justify-center pt-2">
        <a
          href="#problem-section"
          className="flex flex-col items-center gap-1 text-xs text-[#A3B18A]/70 hover:text-[#8AD74C] transition-colors group"
        >
          <span className="font-mono text-[9px] tracking-widest uppercase">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#8AD74C]" />
        </a>
      </div>

    </section>
  );
};

export default HomeHero;
