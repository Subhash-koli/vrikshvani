'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play, Leaf, Droplets, Sun, Activity, MessageCircle, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#070B08] min-h-[92vh] flex flex-col justify-between">

      {/* ─────────────────────────────────────────────────────────────────────────────
          1. DEVICE-RESPONSIVE BIOPHILIC HERO BACKGROUND (Mobile / Tablet / Desktop)
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Device-tailored background images */}
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
            className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          />
        </picture>

        {/* ─────────────────────────────────────────────────────────────────────────────
            2. SURGICAL VIGNETTE GRADIENT SYSTEM FOR CRISP TEXT READABILITY
           ───────────────────────────────────────────────────────────────────────────── */}
        {/* Horizontal Desktop Gradient: Darkens text column on the left (0% to 55%), leaving the NIH-01 bot on the right crystal clear */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#070B08] via-[#070B08]/85 via-50% to-transparent z-10" />

        {/* Vertical Mobile/Tablet Gradient */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#070B08]/95 via-[#070B08]/60 to-[#070B08] z-10" />

        {/* Top Header Fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#070B08] via-[#070B08]/70 to-transparent z-10" />

        {/* Bottom Section Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#070B08] via-[#070B08]/80 to-transparent z-10" />

        {/* Soft Ambient Lime Aura Glow */}
        <div className="absolute top-1/4 left-0 w-[450px] lg:w-[650px] h-[450px] lg:h-[650px] bg-[#8AD74C]/10 rounded-full blur-[140px] z-10 pointer-events-none" />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
          3. MAIN HERO STAGE
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-20 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* =========================================================================
              LEFT COLUMN (60% Width on Desktop): Headline, Subtitle, CTAs & Tech Bar
             ========================================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7">

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2B18]/90 border border-[#8AD74C]/40 text-xs sm:text-sm font-medium text-[#8AD74C] shadow-[0_0_20px_rgba(138,215,76,0.25)] backdrop-blur-xl">
              <Leaf className="w-3.5 h-3.5 text-[#8AD74C]" />
              <span>Nature Intelligence Category Creator</span>
            </div>

            {/* Master Headline */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-[72px] font-extrabold tracking-tight text-[#F7F6F2] leading-[1.06]">
              Let Your <br className="hidden sm:inline" />
              <span className="text-[#8AD74C] relative inline-flex items-center">
                Plants Speak
                <Leaf className="w-7 h-7 sm:w-10 sm:h-10 text-[#8AD74C] ml-2 -mt-2 inline-block drop-shadow-[0_0_15px_rgba(138,215,76,0.6)] shrink-0" />
              </span>
            </h1>

            {/* Storytelling Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-[#A3B18A] max-w-xl leading-relaxed">
              Your plant communicates every second through subtle thermal shifts and leaf transpiration.{' '}
              <span className="text-[#8AD74C] font-semibold">Vriksh Vani</span> decodes these silent biophysical signals and translates them into plain human speech.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-1">
              <Link href="/waitlist" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 py-4 text-sm sm:text-base font-bold shadow-[0_0_30px_rgba(138,215,76,0.4)] hover:shadow-[0_0_45px_rgba(138,215,76,0.65)] transition-all flex items-center justify-center gap-2"
                >
                  <Leaf className="w-4 h-4 fill-current" />
                  <span>Join the Waitlist →</span>
                </Button>
              </Link>

              <Link href="/nature-intelligence" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-7 py-4 text-sm sm:text-base bg-[#0F2B18]/80 hover:bg-[#0F2B18] border-white/15 hover:border-[#8AD74C]/50 text-[#F7F6F2] backdrop-blur-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Play className="w-4 h-4 text-[#8AD74C] fill-[#8AD74C]" />
                  <span>Watch NTE™ Voice Demo</span>
                </Button>
              </Link>
            </div>

            {/* Micro Technology Pill Bar */}
            <div className="pt-3 border-t border-white/10 w-full max-w-xl flex items-center justify-center lg:justify-start gap-4 flex-wrap text-xs font-mono text-[#A3B18A]">
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
              RIGHT COLUMN (40% Width on Desktop): Floating Voice Speech Bubble Card
             ========================================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col justify-between items-center lg:items-end py-6 lg:py-0 w-full min-h-[300px] lg:min-h-[440px]">

            {/* Top-Right Floating Telemetry Node */}
            <div className="w-full max-w-xs p-3 sm:p-4 rounded-2xl bg-[#070B08]/90 border border-[#8AD74C]/40 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.85)] flex items-center gap-3 self-center lg:self-end hover:border-[#8AD74C] transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-9 h-9 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/60 flex items-center justify-center shrink-0 shadow-lime-glow">
                <Leaf className="w-4 h-4 text-[#8AD74C]" />
              </div>
              <div className="flex flex-col text-left flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-display text-[#F7F6F2]">Transpiration Active</span>
                  <span className="text-[9px] font-mono text-[#8AD74C] bg-[#0F2B18] px-2 py-0.5 rounded-full border border-[#8AD74C]/30">VPD: 0.92 kPa</span>
                </div>
                <span className="text-[11px] text-[#A3B18A] font-mono mt-0.5">Stomata: Fully Open</span>
              </div>
            </div>

            {/* Bottom-Right Floating Spoken Voice Speech Bubble Card */}
            <div className="w-full max-w-sm mt-auto p-4 rounded-2xl bg-[#0F2B18]/90 border border-[#8AD74C]/50 backdrop-blur-2xl shadow-[0_20px_45px_rgba(0,0,0,0.9)] space-y-2 relative self-center lg:self-end">
              <div className="flex items-center justify-between text-xs text-[#8AD74C] font-mono">
                <span className="flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5" /> NTE™ Spoken Plant Output
                </span>
                <span className="text-[10px] text-[#A3B18A] bg-white/5 px-2 py-0.5 rounded-full">Calm Mode</span>
              </div>
              <p className="text-xs sm:text-sm italic text-[#F7F6F2] font-sans leading-snug">
                "My stomata are open and photosynthesizing happily! I could use a tiny sip of water around 4:00 PM."
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
          4. SCROLL GUIDANCE
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex justify-center pt-4">
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
