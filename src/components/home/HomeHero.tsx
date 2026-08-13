'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play, Leaf, Sun, Activity, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#070B08] min-h-screen flex flex-col">

      {/* ─────────────────────────────────────────────────────────────────────────────
          BACKGROUND LAYER
          Single <picture> element — SSR-safe, no hydration issues
          object-position per breakpoint exposes the robot at different viewports:
            Mobile  : center 10%  → robot appears in the TOP 35% of the frame
            Tablet  : 58% 25%    → robot anchored to right, visible alongside left content
            Desktop : 66% center → robot fills right 40% of the widescreen canvas
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        <picture className="absolute inset-0 w-full h-full block">
          <source media="(max-width: 639px)"                              srcSet="/assets/theme_backgrounds/hero-bg-mobile.png" />
          <source media="(min-width: 640px) and (max-width: 1023px)"     srcSet="/assets/theme_backgrounds/hero-bg-tablet.png" />
          <img
            src="/assets/theme_backgrounds/hero-bg-desktop.png"
            alt="Vriksh Vani NHI-01 Nature Intelligence Hub in sunlit biophilic forest"
            className={[
              'w-full h-full object-cover',
              '[object-position:center_10%]',       // Mobile  – robot at top
              'sm:[object-position:58%_25%]',       // Tablet  – robot right-of-center
              'lg:[object-position:66%_center]',    // Desktop – robot occupies right 34%
            ].join(' ')}
          />
        </picture>

        {/* ── Desktop overlay: ONLY left column zone darkened, right fully open ──
            Gradient stops at 50% → robot on the right receives zero darkening      */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #070B08 0%, #070B08b8 18%, #070B0870 32%, #070B0830 44%, transparent 54%)',
          }}
        />

        {/* ── Tablet overlay: left text column darkened, right robot zone open ──
            Content is 7/12 cols (~58%) so gradient clears by 60%                  */}
        <div
          className="hidden sm:block lg:hidden absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #070B08 0%, #070B08c0 22%, #070B0878 40%, #070B0838 55%, transparent 68%)',
          }}
        />

        {/* ── Mobile overlay: BOTTOM-TO-TOP — top half clear (robot), bottom dark (text) ── */}
        <div
          className="sm:hidden absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, #070B08 0%, #070B08f0 28%, #070B08b0 48%, #070B0840 64%, transparent 82%)',
          }}
        />

        {/* ── Smooth transition into Section 2 (all devices) ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: 'linear-gradient(to top, #070B08 0%, transparent 100%)' }}
        />

      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
          CONTENT LAYER

          Mobile  : items-END   → content sits at the bottom, robot shows at top
          Tablet+ : items-CENTER → 2-col layout, robot exposed on right
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex-1 flex items-end sm:items-center">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16
                        pt-28 sm:pt-36 lg:pt-36
                        pb-24 sm:pb-20 lg:pb-20">

          {/* 12-col grid: starts at sm (tablet) — full-width single col on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">

            {/* ── LEFT COLUMN: content (7/12 tablet, 6/12 desktop) ── */}
            <div className="sm:col-span-7 lg:col-span-6 flex flex-col items-center sm:items-start text-center sm:text-left space-y-5">

              {/* Category badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2B18]/90 border border-[#8AD74C]/40 text-xs sm:text-sm font-medium text-[#8AD74C] shadow-[0_0_20px_rgba(138,215,76,0.25)] backdrop-blur-xl">
                <Leaf className="w-3.5 h-3.5" />
                <span>Nature Intelligence Category Creator</span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-extrabold tracking-tight text-[#F7F6F2] leading-[1.06] drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">
                Let Your{' '}
                <br className="hidden sm:inline" />
                <span className="text-[#8AD74C] inline-flex items-center gap-2">
                  Plants Speak
                  <Leaf className="w-7 h-7 sm:w-9 sm:h-9 drop-shadow-[0_0_14px_rgba(138,215,76,0.6)] shrink-0 -mt-1" />
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-[#F7F6F2]/90 max-w-md leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,1)]">
                Your plant communicates every second through subtle thermal shifts and leaf transpiration.{' '}
                <span className="text-[#8AD74C] font-semibold">Vriksh Vani</span>{' '}
                decodes these silent biophysical signals and translates them into plain human speech.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
                <Link href="/waitlist" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto rounded-full px-8 py-4 text-sm sm:text-base font-bold shadow-[0_0_28px_rgba(138,215,76,0.4)] hover:shadow-[0_0_44px_rgba(138,215,76,0.65)] transition-all flex items-center justify-center gap-2"
                  >
                    <Leaf className="w-4 h-4 fill-current" />
                    Join the Waitlist →
                  </Button>
                </Link>
                <Link href="/nature-intelligence" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-full px-7 py-4 text-sm sm:text-base bg-[#0F2B18]/80 hover:bg-[#0F2B18] border-white/20 hover:border-[#8AD74C]/50 text-[#F7F6F2] backdrop-blur-xl flex items-center justify-center gap-2 transition-all"
                  >
                    <Play className="w-4 h-4 text-[#8AD74C] fill-[#8AD74C]" />
                    Watch NTE™ Voice Demo
                  </Button>
                </Link>
              </div>

              {/* Live voice card */}
              <div className="w-full max-w-md p-4 rounded-2xl bg-[#0A1C0E]/88 border border-[#8AD74C]/30 backdrop-blur-xl shadow-[0_8px_28px_rgba(0,0,0,0.7)] space-y-2">
                <div className="flex items-center justify-between text-xs text-[#8AD74C] font-mono flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    Live NTE™ Spoken Plant Output
                  </span>
                  <span className="text-[10px] text-[#A3B18A] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                    Stomata: Open · VPD: 0.92 kPa
                  </span>
                </div>
                <p className="text-xs sm:text-sm italic text-[#F7F6F2]/95 leading-snug">
                  &ldquo;My stomata are open and photosynthesizing happily! I could use a tiny sip of water around 4:00 PM.&rdquo;
                </p>
              </div>

              {/* Tech pill bar */}
              <div className="pt-1.5 border-t border-white/10 w-full max-w-md flex items-center justify-center sm:justify-start gap-4 flex-wrap text-xs font-mono text-[#F7F6F2]/75 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
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

            {/* ── RIGHT SPACER: transparent zone — robot shines through (tablet + desktop) ── */}
            <div className="hidden sm:block sm:col-span-5 lg:col-span-6 pointer-events-none min-h-[400px] lg:min-h-[520px]" aria-hidden="true" />

          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="relative z-20 flex justify-center pb-5">
        <a
          href="#problem-section"
          className="flex flex-col items-center gap-1 text-[#A3B18A]/70 hover:text-[#8AD74C] transition-colors"
        >
          <span className="font-mono text-[9px] tracking-widest uppercase">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#8AD74C]" />
        </a>
      </div>

    </section>
  );
};

export default HomeHero;
