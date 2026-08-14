'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play, Leaf, Sun, Activity, ChevronDown, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#070B08] min-h-screen flex flex-col">

      {/* ─────────────────────────────────────────────────────────────────────────────
          BACKGROUND — Single <picture>, hydration-safe
          object-position exposes robot per breakpoint:
            Mobile  : center 10%  → robot in top 60% of frame
            Tablet  : 58% 25%    → robot right-of-center
            Desktop : 66% center → robot occupies right ~34%
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture className="absolute inset-0 w-full h-full block">
          <source media="(max-width: 639px)"                          srcSet="/assets/theme_backgrounds/hero-bg-mobile.png" />
          <source media="(min-width: 640px) and (max-width: 1023px)" srcSet="/assets/theme_backgrounds/hero-bg-tablet.png" />
          <img
            src="/assets/theme_backgrounds/hero-bg-desktop.png"
            alt="Vriksh Vani NHI-01 Nature Intelligence Hub in sunlit biophilic forest"
            className={[
              'w-full h-full object-cover',
              // Mobile portrait: robot center is at ~52% from top of image
              '[object-position:center_50%]',
              // Tablet landscape: robot right-of-center
              'sm:[object-position:60%_55%]',
              // Desktop: robot anchored right-center
              'lg:[object-position:66%_center]',
            ].join(' ')}
          />
        </picture>

        {/* ── Desktop: left column darkened only, right fully open ── */}
        <div className="hidden lg:block absolute inset-0" style={{
          background: 'linear-gradient(to right, #070B08 0%, #070B08b8 18%, #070B0870 32%, #070B0830 44%, transparent 54%)',
        }} />

        {/* ── Tablet: left column dark for text, RIGHT fully open — robot at 60% right ── */}
        <div className="hidden sm:block lg:hidden absolute inset-0" style={{
          background: 'linear-gradient(to right, #070B08 0%, #070B08d0 16%, #070B0890 30%, #070B0840 44%, #070B0815 58%, transparent 72%)',
        }} />

        {/* ── Mobile: dark behind content (top 45%), crystal clear for robot (45%+) ── */}
        <div className="sm:hidden absolute inset-0" style={{
          background: 'linear-gradient(to bottom, #070B08d8 0%, #070B08c0 15%, #070B0895 28%, #070B0850 38%, #070B0818 45%, transparent 58%)',
        }} />

        {/* Section 2 transition */}
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{
          background: 'linear-gradient(to top, #070B08 0%, transparent 100%)',
        }} />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
          CONTENT LAYER

          Mobile  : items-END   → compact shelf at bottom, robot visible at top (65%)
          Tablet+ : items-CENTER → 2-col layout, robot right
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex-1 flex items-start">
        <div className="w-full max-w-[1440px] mx-auto
                        px-4 sm:px-6 lg:px-12 xl:px-16
                        pt-28 sm:pt-36 lg:pt-36
                        pb-16 sm:pb-20 lg:pb-20">

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">

            {/* ── LEFT / CONTENT COLUMN ── */}
            <div className="sm:col-span-7 lg:col-span-6
                            flex flex-col items-center sm:items-start
                            text-center sm:text-left
                            space-y-2 sm:space-y-5">


              {/* ── Headline: Stacked ALL CAPS with size + color hierarchy ── */}
              <h1 className="font-display leading-none
                             drop-shadow-[0_4px_28px_rgba(0,0,0,1)]">

                {/* LET YOUR — normal weight, white, compact tracking
                    Mobile: 5.5vw scales from 17.6px (320px) → 23.6px (430px)
                    Tablet+: fixed 44px → 66px */}
                <span className="block font-normal
                                 text-[5.5vw] sm:text-[34px] lg:text-[42px] xl:text-[52px]
                                 text-[#F0EFEB]
                                 tracking-[0.06em]
                                 leading-none
                                 uppercase">
                  LET YOUR
                </span>

                {/* PLANTS — black weight, cinematic shaded green, DOMINANT
                    Mobile: 17vw scales from 54px (320px) → 73px (430px)
                    Tablet+: fixed 128px → 192px */}
                <div className="relative leading-[0.88]">
                  <span className="block font-black
                                   text-[17vw] sm:text-[88px] lg:text-[108px] xl:text-[136px]
                                   tracking-[-0.02em] leading-[0.88]
                                   text-transparent bg-clip-text
                                   bg-gradient-to-b from-[#A8E055] via-[#6BBF28] to-[#2E6B12]
                                   drop-shadow-[0_0_40px_rgba(138,215,76,0.35)]">
                    PLANTS
                  </span>
                  {/* Leaf icon — top-right, glowing */}
                  <Leaf className="absolute -top-1 right-0
                                   sm:-top-2 sm:-right-2
                                   lg:-top-3 lg:-right-3
                                   w-[4vw] h-[4vw] sm:w-9 sm:h-9 lg:w-12 lg:h-12
                                   text-[#8AD74C] fill-[#8AD74C]/40
                                   drop-shadow-[0_0_14px_rgba(138,215,76,1)]
                                   rotate-12" />
                </div>

                {/* SPEAK — bold weight, white, slightly larger than LET YOUR, widest tracking
                    Mobile: 6.5vw scales from 20.8px (320px) → 27.95px (430px)
                    Tablet+: fixed 52px → 78px */}
                <span className="block font-bold
                                 text-[6.5vw] sm:text-[40px] lg:text-[50px] xl:text-[62px]
                                 text-[#F0EFEB]
                                 tracking-[0.20em]
                                 leading-none mt-1
                                 uppercase">
                  SPEAK
                </span>

              </h1>

              {/* ── Subtitle: 2 lines on ALL devices ── */}
              <p className="text-[2.8vw] sm:text-sm lg:text-base
                            text-[#F7F6F2]/85
                            max-w-[85vw] sm:max-w-md lg:max-w-xl
                            leading-snug
                            drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
                Your plant speaks through thermal shifts every second.<br />
                <span className="text-[#8AD74C] font-semibold">Vriksh Vani</span>{' '}
                decodes these signals into plain speech.
              </p>

              {/* ── CTAs: stacked full-width on mobile, side-by-side on tablet+ ── */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3
                              w-full sm:w-auto
                              pt-2 sm:pt-3">

                {/* PRIMARY: Join the Waitlist
                    Shape: rounded-2xl (NOT pill) — 4-corner rounded rectangle
                    Gradient: near-black forest BL → rich lime center → bright citrus TR */}
                <Link href="/waitlist" className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto
                               flex items-center justify-center gap-2.5
                               rounded-2xl
                               px-6 py-3.5 sm:px-8 sm:py-4
                               text-[13px] sm:text-sm lg:text-base
                               font-bold tracking-wide text-white
                               bg-gradient-to-tr from-[#0A2E04] via-[#3FAE2A] to-[#B0E840]
                               hover:from-[#0C3506] hover:via-[#4BBF2E] hover:to-[#C0F050]
                               shadow-[0_6px_28px_rgba(80,180,40,0.55),_0_1px_0_rgba(255,255,255,0.2)_inset]
                               hover:shadow-[0_8px_44px_rgba(80,180,40,0.8),_0_1px_0_rgba(255,255,255,0.28)_inset]
                               transition-all duration-300 active:scale-[0.97]"
                  >
                    <Leaf className="w-4 h-4 sm:w-[17px] sm:h-[17px] fill-white text-white shrink-0" />
                    Join the Waitlist
                    <ArrowRight className="w-4 h-4 sm:w-[17px] sm:h-[17px] text-white shrink-0" />
                  </button>
                </Link>

                {/* SECONDARY: Watch Demo
                    Shape: rounded-2xl (NOT pill) — same as primary
                    Style: very dark transparent bg, lime-tinted border, white-filled play circle */}
                <Link href="/nature-intelligence" className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto
                               flex items-center justify-center gap-2.5
                               rounded-2xl
                               px-6 py-3.5 sm:px-8 sm:py-4
                               text-[13px] sm:text-sm lg:text-base
                               font-medium tracking-wide text-white
                               bg-[#040E06]/20
                               border border-[#7EC840]/50
                               hover:bg-[#040E06]/35
                               hover:border-[#A0D850]/75
                               transition-all duration-300 active:scale-[0.97]"
                  >
                    {/* White filled circle with dark play arrow — matching reference */}
                    <span className="w-[22px] h-[22px] rounded-full
                                    bg-white
                                    flex items-center justify-center shrink-0">
                      <Play className="w-2.5 h-2.5 text-[#0A1A0C] fill-[#0A1A0C] ml-px" />
                    </span>
                    Watch Demo
                  </button>
                </Link>

              </div>

              {/* ── Live voice card: HIDDEN on mobile, shown on tablet+ ── */}
              <div className="hidden sm:block w-full max-w-md p-4 rounded-2xl
                              bg-[#0A1C0E]/88 border border-[#8AD74C]/30
                              backdrop-blur-xl shadow-[0_8px_28px_rgba(0,0,0,0.7)] space-y-2">
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

              {/* ── Tech pill bar: HIDDEN on mobile ── */}
              <div className="hidden sm:flex pt-1.5 border-t border-white/10
                              w-full max-w-md items-center justify-start
                              gap-4 flex-wrap text-xs font-mono text-[#F7F6F2]/75
                              drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
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

            {/* ── RIGHT SPACER: robot shows through background (tablet+) ── */}
            <div className="hidden sm:block sm:col-span-5 lg:col-span-6 pointer-events-none min-h-[400px] lg:min-h-[520px]" aria-hidden="true" />

          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="relative z-20 flex justify-center pb-4">
        <a href="#problem-section" className="flex flex-col items-center gap-0.5 text-[#A3B18A]/60 hover:text-[#8AD74C] transition-colors">
          <span className="font-mono text-[8px] sm:text-[9px] tracking-widest uppercase">Scroll to Discover</span>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce text-[#8AD74C]" />
        </a>
      </div>

    </section>
  );
};

export default HomeHero;
