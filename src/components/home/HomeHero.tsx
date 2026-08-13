'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play, Leaf, Sun, Activity, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#070B08] min-h-screen flex flex-col">

      {/* ─────────────────────────────────────────────────────────────────────────────
          1. DEVICE-RESPONSIVE BACKGROUND
          - Single <picture> element: server-safe, no hydration issues
          - object-position tuned per breakpoint via Tailwind responsive arbitrary values
          - Mobile: robot at top-center (15% from top)
          - Tablet: robot on right at 30% height
          - Desktop: robot anchored at 70% horizontal, fully exposed
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* Background image – device-specific via HTML5 <picture> */}
        <picture className="absolute inset-0 w-full h-full block">
          {/* Mobile (<640px): portrait crop, robot centered top */}
          <source media="(max-width: 639px)" srcSet="/assets/theme_backgrounds/hero-bg-mobile.png" />
          {/* Tablet (640–1023px): landscape crop, robot on right */}
          <source media="(min-width: 640px) and (max-width: 1023px)" srcSet="/assets/theme_backgrounds/hero-bg-tablet.png" />
          {/* Desktop (≥1024px): widescreen, robot right-anchored */}
          <img
            src="/assets/theme_backgrounds/hero-bg-desktop.png"
            alt="Vriksh Vani NHI-01 Nature Intelligence Hub in sunlit biophilic forest stream"
            className={[
              'w-full h-full object-cover',
              // Mobile: pull robot into upper portion of frame
              '[object-position:center_15%]',
              // Tablet: shift right to expose robot
              'sm:[object-position:60%_30%]',
              // Desktop: anchor robot to right 30% of canvas
              'lg:[object-position:70%_center]',
            ].join(' ')}
          />
        </picture>

        {/* ── Desktop gradient: left text protection only, robot right side fully clear ── */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #070B08 0%, #070B08d0 22%, #070B0890 36%, #070B0830 48%, transparent 58%)',
          }}
        />

        {/* ── Tablet gradient: light top/bottom fade, middle open for robot ── */}
        <div
          className="hidden sm:block lg:hidden absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, #070B08cc 0%, #070B0850 22%, #070B0830 45%, #070B0870 72%, #070B08ee 100%)',
          }}
        />

        {/* ── Mobile gradient: top bar dark (header), middle clear (robot), bottom dark (cards) ── */}
        <div
          className="sm:hidden absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, #070B08e8 0%, #070B0860 16%, #070B0820 38%, #070B0870 68%, #070B08f0 100%)',
          }}
        />

        {/* ── Bottom section-2 transition fade (all devices) ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28"
          style={{
            background: 'linear-gradient(to top, #070B08 0%, #070B08c0 50%, transparent 100%)',
          }}
        />

      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
          2. MAIN HERO STAGE
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-28 sm:pt-36 lg:pt-36 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* =========================================================================
                LEFT COLUMN – text, CTAs, live card, tech bar
                Desktop: 6/12 cols (≈50%) – gradient covers this zone only
               ========================================================================= */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6">

              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2B18]/90 border border-[#8AD74C]/40 text-xs sm:text-sm font-medium text-[#8AD74C] shadow-[0_0_20px_rgba(138,215,76,0.25)] backdrop-blur-xl">
                <Leaf className="w-3.5 h-3.5 text-[#8AD74C]" />
                <span>Nature Intelligence Category Creator</span>
              </div>

              {/* Master Headline */}
              <h1 className="font-display text-4xl sm:text-6xl xl:text-[76px] font-extrabold tracking-tight text-[#F7F6F2] leading-[1.06] drop-shadow-[0_4px_20px_rgba(0,0,0,1)]">
                Let Your <br className="hidden sm:inline" />
                <span className="text-[#8AD74C] relative inline-flex items-center">
                  Plants Speak
                  <Leaf className="w-7 h-7 sm:w-10 sm:h-10 text-[#8AD74C] ml-2 -mt-2 inline-block drop-shadow-[0_0_15px_rgba(138,215,76,0.6)] shrink-0" />
                </span>
              </h1>

              {/* Storytelling Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-[#F7F6F2]/90 max-w-lg leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
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
                    className="w-full sm:w-auto rounded-full px-7 py-4 text-sm sm:text-base bg-[#0F2B18]/80 hover:bg-[#0F2B18] border-white/20 hover:border-[#8AD74C]/50 text-[#F7F6F2] backdrop-blur-xl flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    <Play className="w-4 h-4 text-[#8AD74C] fill-[#8AD74C]" />
                    <span>Watch NTE™ Voice Demo</span>
                  </Button>
                </Link>
              </div>

              {/* Live Plant Voice Telemetry Output Card */}
              <div className="w-full max-w-xl p-4 rounded-2xl bg-[#0B1F10]/85 border border-[#8AD74C]/35 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.75)] space-y-2">
                <div className="flex items-center justify-between text-xs text-[#8AD74C] font-mono flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-[#8AD74C] animate-pulse" /> Live NTE™ Spoken Plant Output
                  </span>
                  <span className="text-[10px] text-[#A3B18A] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                    Stomata: Open · VPD: 0.92 kPa
                  </span>
                </div>
                <p className="text-xs sm:text-sm italic text-[#F7F6F2] font-sans leading-snug">
                  &ldquo;My stomata are open and photosynthesizing happily! I could use a tiny sip of water around 4:00 PM.&rdquo;
                </p>
              </div>

              {/* Micro Technology Pill Bar */}
              <div className="pt-2 border-t border-white/15 w-full max-w-xl flex items-center justify-center lg:justify-start gap-4 flex-wrap text-xs font-mono text-[#F7F6F2]/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
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
                RIGHT COLUMN – transparent spacer so the 3D robot in the bg shows through
                No content, no overlays — the background image is the hero here
               ========================================================================= */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-6 pointer-events-none min-h-[480px]" aria-hidden="true" />

          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
          3. SCROLL GUIDANCE
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex justify-center pb-6">
        <a
          href="#problem-section"
          className="flex flex-col items-center gap-1 text-xs text-[#A3B18A]/80 hover:text-[#8AD74C] transition-colors"
        >
          <span className="font-mono text-[9px] tracking-widest uppercase">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#8AD74C]" />
        </a>
      </div>

    </section>
  );
};

export default HomeHero;
