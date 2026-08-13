'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play, Leaf, Sun, Activity, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#070B08] min-h-screen flex flex-col">

      {/* ─────────────────────────────────────────────────────────────────────────────
          1. DEVICE-RESPONSIVE BIOPHILIC HERO BACKGROUND (Mobile / Tablet / Desktop)
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* ── Desktop Background (≥1024px): Robot anchored to right 40% ── */}
        <div className="hidden lg:block absolute inset-0">
          <img
            src="/assets/theme_backgrounds/hero-bg-desktop.png"
            alt="Vriksh Vani NHI-01 Nature Intelligence Hub in sunlit biophilic forest stream"
            className="w-full h-full object-cover object-right-center"
            style={{ objectPosition: '70% center' }}
          />
          {/* Narrow left gradient – stops at 45% so the robot is fully exposed */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #070B08 0%, #070B08cc 25%, #070B0880 38%, transparent 52%)',
            }}
          />
          {/* Bottom fade into section 2 */}
          <div className="absolute bottom-0 left-0 right-0 h-32"
            style={{ background: 'linear-gradient(to top, #070B08 0%, #070B08bb 40%, transparent 100%)' }}
          />
        </div>

        {/* ── Tablet Background (640–1023px): Robot peeking right ── */}
        <div className="hidden sm:block lg:hidden absolute inset-0">
          <img
            src="/assets/theme_backgrounds/hero-bg-tablet.png"
            alt="Vriksh Vani NHI-01 hero background tablet"
            className="w-full h-full object-cover"
            style={{ objectPosition: '60% 30%' }}
          />
          {/* Light overlay – preserve robot visibility on the right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, #070B08cc 0%, #070B0840 30%, #070B0860 70%, #070B08ee 100%)',
            }}
          />
        </div>

        {/* ── Mobile Background (<640px): Robot centered top ── */}
        <div className="sm:hidden absolute inset-0">
          <img
            src="/assets/theme_backgrounds/hero-bg-mobile.png"
            alt="Vriksh Vani NHI-01 hero background mobile"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 15%' }}
          />
          {/* Top bar behind header + bottom fade for card readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, #070B08e0 0%, #070B0850 18%, #070B0820 40%, #070B0880 72%, #070B08f2 100%)',
            }}
          />
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
          2. MAIN HERO STAGE
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-28 sm:pt-36 lg:pt-36 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* =========================================================================
                LEFT COLUMN – text + CTAs
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
                  &quot;My stomata are open and photosynthesizing happily! I could use a tiny sip of water around 4:00 PM.&quot;
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
                RIGHT COLUMN – 100% open viewport for the 3D robot to show through
               ========================================================================= */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-6 pointer-events-none min-h-[500px]" />

          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
          3. SCROLL GUIDANCE
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex justify-center pb-6">
        <a
          href="#problem-section"
          className="flex flex-col items-center gap-1 text-xs text-[#A3B18A]/80 hover:text-[#8AD74C] transition-colors group"
        >
          <span className="font-mono text-[9px] tracking-widest uppercase">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#8AD74C]" />
        </a>
      </div>

    </section>
  );
};

export default HomeHero;
