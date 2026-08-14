'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play, Leaf, Sun, Activity, ChevronDown, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────────
   HERO SLIDES — same format & color hierarchy, only content differs
   line1  : small white CAPS above  (e.g. "LET YOUR")
   line2  : BIG bold lime-to-dark gradient — the HERO word
   line3  : medium bold white CAPS below (e.g. "SPEAK")
   subtitle: 2-line description, with optional highlighted span
──────────────────────────────────────────────────────────────────────────────── */
const SLIDES = [
  {
    id: 'speak',
    line1: 'LET YOUR',
    line2: 'PLANTS',
    line3: 'SPEAK',
    subtitle: (
      <>
        Your plant speaks through thermal shifts every second.{' '}
        <br />
        <span className="text-[#8AD74C] font-semibold">Vriksh Vani</span>{' '}
        decodes these signals into plain speech.
      </>
    ),
  },
  {
    id: 'nih',
    line1: 'MEET THE',
    line2: 'NATURE',
    line3: 'INTELLIGENCE HUB',
    subtitle: (
      <>
        The NIH-01 reads FLIR thermal biometrics &amp; quad-gas VOC.{' '}
        <br />
        Your home becomes a{' '}
        <span className="text-[#8AD74C] font-semibold">living, breathing ecosystem.</span>
      </>
    ),
  },
  {
    id: 'thermal',
    line1: 'SEE WHAT',
    line2: 'PLANTS',
    line3: 'FEEL',
    subtitle: (
      <>
        Invisible heat signatures reveal plant stress, hydration &amp; health.{' '}
        <br />
        <span className="text-[#8AD74C] font-semibold">No cameras. No invasive probes.</span>{' '}
        Just biophysics.
      </>
    ),
  },
  {
    id: 'movement',
    line1: 'JOIN THE',
    line2: 'GREEN',
    line3: 'MOVEMENT',
    subtitle: (
      <>
        2,900+ researchers, collectors &amp; plant lovers are already waiting.{' '}
        <br />
        Be part of{' '}
        <span className="text-[#8AD74C] font-semibold">Batch 01 — NIH-01 Nature Intelligence Hub.</span>
      </>
    ),
  },
];

const SLIDE_DURATION = 4500; // ms per slide

export const HomeHero: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    // Fade out
    setVisible(false);
    setTimeout(() => {
      setActiveIdx(idx);
      // Fade in
      setVisible(true);
      setIsAnimating(false);
    }, 350);
  }, [isAnimating]);

  // Auto-advance
  useEffect(() => {
    const timer = setTimeout(() => {
      goTo((activeIdx + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [activeIdx, goTo]);

  const slide = SLIDES[activeIdx];

  return (
    <section className="relative overflow-hidden bg-[#070B08] min-h-screen flex flex-col">

      {/* ─────────────────────────────────────────────────────────────────────────────
          BACKGROUND — Single <picture>, hydration-safe
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
              '[object-position:center_50%]',
              'sm:[object-position:60%_55%]',
              'lg:[object-position:66%_center]',
            ].join(' ')}
          />
        </picture>

        {/* Gradient overlays */}
        <div className="hidden lg:block absolute inset-0" style={{
          background: 'linear-gradient(to right, #070B08 0%, #070B08b8 18%, #070B0870 32%, #070B0830 44%, transparent 54%)',
        }} />
        <div className="hidden sm:block lg:hidden absolute inset-0" style={{
          background: 'linear-gradient(to right, #070B08 0%, #070B08d0 16%, #070B0890 30%, #070B0840 44%, #070B0815 58%, transparent 72%)',
        }} />
        <div className="sm:hidden absolute inset-0" style={{
          background: 'linear-gradient(to bottom, #070B08d8 0%, #070B08c0 15%, #070B0895 28%, #070B0850 38%, #070B0818 45%, transparent 58%)',
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{
          background: 'linear-gradient(to top, #070B08 0%, transparent 100%)',
        }} />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
          CONTENT LAYER
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

              {/* ── SLIDER: Headline + subtitle ── */}
              <div
                className="w-full"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 350ms ease, transform 350ms ease',
                }}
              >
                {/* Headline */}
                <h1 className="font-display leading-none drop-shadow-[0_4px_28px_rgba(0,0,0,1)]">

                  {/* Line 1 — small normal white caps */}
                  <span className="block font-normal
                                   text-[5.5vw] sm:text-[34px] lg:text-[42px] xl:text-[52px]
                                   text-[#F0EFEB]
                                   tracking-[0.06em]
                                   leading-none
                                   uppercase">
                    {slide.line1}
                  </span>

                  {/* Line 2 — BIG bold lime gradient — DOMINANT */}
                  <div className="relative leading-[0.88]">
                    <span className="block font-black
                                     text-[17vw] sm:text-[88px] lg:text-[108px] xl:text-[136px]
                                     tracking-[-0.02em] leading-[0.88]
                                     text-transparent bg-clip-text
                                     bg-gradient-to-b from-[#A8E055] via-[#6BBF28] to-[#2E6B12]
                                     drop-shadow-[0_0_40px_rgba(138,215,76,0.35)]">
                      {slide.line2}
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

                  {/* Line 3 — medium bold white wide tracking */}
                  <span className="block font-bold
                                   text-[5.5vw] sm:text-[36px] lg:text-[46px] xl:text-[58px]
                                   text-[#F0EFEB]
                                   tracking-[0.18em]
                                   leading-none mt-1
                                   uppercase">
                    {slide.line3}
                  </span>

                </h1>

                {/* Subtitle */}
                <p className="text-[2.8vw] sm:text-sm lg:text-base
                              text-[#F7F6F2]/85
                              max-w-[85vw] sm:max-w-md lg:max-w-xl
                              leading-snug mt-3 sm:mt-4
                              drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
                  {slide.subtitle}
                </p>
              </div>

              {/* ── Arrow indicators: < 01 / 04 > ── */}
              <div className="flex items-center gap-3 pt-1">
                {/* Prev */}
                <button
                  onClick={() => goTo((activeIdx - 1 + SLIDES.length) % SLIDES.length)}
                  aria-label="Previous slide"
                  className="w-8 h-8 flex items-center justify-center rounded-lg
                             bg-white/5 border border-white/15
                             text-white hover:bg-gradient-to-tr hover:from-[#031201] hover:via-[#2E9B12] hover:to-[#C4F050]
                             hover:border-transparent hover:shadow-[0_0_12px_rgba(138,215,76,0.4)]
                             transition-all duration-200 active:scale-90"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Counter */}
                <span className="font-mono text-xs text-[#A3B18A] tracking-widest tabular-nums select-none">
                  <span className="text-[#C4F050] font-bold">
                    {String(activeIdx + 1).padStart(2, '0')}
                  </span>
                  <span className="mx-1 text-white/20">/</span>
                  {String(SLIDES.length).padStart(2, '0')}
                </span>

                {/* Next */}
                <button
                  onClick={() => goTo((activeIdx + 1) % SLIDES.length)}
                  aria-label="Next slide"
                  className="w-8 h-8 flex items-center justify-center rounded-lg
                             bg-white/5 border border-white/15
                             text-white hover:bg-gradient-to-tr hover:from-[#031201] hover:via-[#2E9B12] hover:to-[#C4F050]
                             hover:border-transparent hover:shadow-[0_0_12px_rgba(138,215,76,0.4)]
                             transition-all duration-200 active:scale-90"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* ── CTAs: always 1 row, static (don't slide) ── */}
              <div className="flex flex-row gap-2 sm:gap-3
                              w-full sm:w-auto
                              pt-1 sm:pt-2">

                {/* PRIMARY: Join the Waitlist */}
                <Link href="/waitlist" className="flex-1 min-w-0 sm:flex-none">
                  <button
                    className="w-full sm:w-auto
                               flex items-center justify-center gap-1 sm:gap-2.5
                               rounded-xl
                               px-2 py-2.5 sm:px-8 sm:py-4
                               text-[11px] sm:text-sm lg:text-base
                               font-bold tracking-wide text-white
                               bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050]
                               hover:from-[#051A02] hover:via-[#3FAE2A] hover:to-[#D0FF60]
                               transition-all duration-300 active:scale-[0.97]"
                  >
                    <Leaf className="w-3 h-3 sm:w-[17px] sm:h-[17px] fill-white text-white shrink-0" />
                    <span className="sm:hidden truncate">Join Waitlist</span>
                    <span className="hidden sm:inline">Join the Waitlist</span>
                    <ArrowRight className="hidden sm:block w-[17px] h-[17px] text-white shrink-0" />
                  </button>
                </Link>

                {/* SECONDARY: Watch Demo */}
                <Link href="/nature-intelligence" className="flex-1 min-w-0 sm:flex-none">
                  <button
                    className="w-full sm:w-auto
                               flex items-center justify-center gap-1.5 sm:gap-2.5
                               rounded-xl
                               px-2 py-2.5 sm:px-8 sm:py-4
                               text-[11px] sm:text-sm lg:text-base
                               font-medium tracking-wide text-white
                               bg-[#040E06]/20
                               border border-[#7EC840]/50
                               hover:bg-[#040E06]/35
                               hover:border-[#A0D850]/75
                               transition-all duration-300 active:scale-[0.97]"
                  >
                    <span className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] rounded-full
                                    bg-white flex items-center justify-center shrink-0">
                      <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#0A1A0C] fill-[#0A1A0C] ml-px" />
                    </span>
                    Watch Demo
                  </button>
                </Link>

              </div>

              {/* ── Live voice card: HIDDEN on mobile ── */}
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
