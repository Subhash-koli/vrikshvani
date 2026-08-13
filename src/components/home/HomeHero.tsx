'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play, Leaf, Droplets, Sun, Activity, MessageCircle, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#070B08] min-h-[95vh] flex flex-col justify-between">

      {/* ─────────────────────────────────────────────────────────────────────────────
          1. DEVICE-RESPONSIVE BIOPHILIC HERO BACKGROUND (Mobile / Tablet / Desktop)
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Device-tailored background images using HTML5 picture element */}
        <picture className="absolute inset-0 w-full h-full">
          {/* Mobile Screens (< 640px): 9:16 Portrait forest view */}
          <source
            media="(max-width: 639px)"
            srcSet="/assets/theme_backgrounds/hero-bg-mobile.png"
          />
          {/* Tablet Screens (640px to 1023px): 4:3 Balanced forest view */}
          <source
            media="(max-width: 1023px)"
            srcSet="/assets/theme_backgrounds/hero-bg-tablet.png"
          />
          {/* Desktop Screens (>= 1024px): 16:9 Widescreen landscape view */}
          <img
            src="/assets/theme_backgrounds/hero-bg-desktop.png"
            alt="Vriksh Vani NHI-01 Nature Intelligence Hub in sunlit biophilic forest stream"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
        </picture>

        {/* ─────────────────────────────────────────────────────────────────────────────
            2. MULTI-LAYER DARK VIGNETTE & CONTRAST PROTECTION OVERLAYS
           ───────────────────────────────────────────────────────────────────────────── */}
        {/* Horizontal Desktop Gradient: Darkens text area on the left (0% to 55%), opens up rainforest on the right */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#070B08] via-[#070B08]/90 via-45% to-transparent z-10" />

        {/* Vertical Mobile/Tablet Gradient: Darkens top headline and bottom CTAs */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#070B08]/95 via-[#070B08]/65 to-[#070B08] z-10" />

        {/* Seamless Header Integration (Top Dark Fade) */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#070B08] via-[#070B08]/70 to-transparent z-10" />

        {/* Seamless Section 2 Integration (Bottom Dark Fade) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070B08] via-[#070B08]/80 to-transparent z-10" />

        {/* Ambient Lime & Gold Aura Glows */}
        <div className="absolute -top-32 -right-32 w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-gradient-radial from-[#E8D07C]/20 via-[#8AD74C]/10 to-transparent rounded-full blur-[140px] z-10" />
        <div className="absolute top-1/3 left-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-[#8AD74C]/15 rounded-full blur-[130px] z-10" />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
          3. MAIN STAGE CONTENT (2-COLUMN RESPONSIVE LAYOUT)
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-20 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* =========================================================================
              LEFT COLUMN (Column 1 to 7): Headline, Subtitle, Dual CTAs
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

            {/* Dual Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-2">
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

            {/* Prototype Trust Badge */}
            <div className="flex items-center gap-4 text-xs font-mono text-[#A3B18A] pt-2 flex-wrap justify-center lg:justify-start">
              <div className="flex items-center gap-1.5 text-[#8AD74C]">
                <span className="w-2 h-2 rounded-full bg-[#8AD74C] animate-pulse" />
                <span>FLIR Thermal Optics</span>
              </div>
              <span className="text-white/20">•</span>
              <span>Bosch BME688 Quad-Gas</span>
              <span className="text-white/20">•</span>
              <span>TinyML Cortex-M4 NPU</span>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN (Column 8 to 12): Radiating Biometric Telemetry Glass Badges
             ========================================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center items-center py-8 lg:py-0 w-full min-h-[380px] lg:min-h-[460px]">

            {/* Ambient Backlight Halo around background NIH-01 Bot */}
            <div className="absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-gradient-radial from-[#8AD74C]/30 via-[#8AD74C]/10 to-transparent rounded-full blur-[90px] pointer-events-none" />

            {/* Floating Glass Telemetry Nodes Grid */}
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] space-y-4">

              {/* Node 1: Plant Emotions / Stomatal Conductance */}
              <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#070B08]/90 border border-[#8AD74C]/50 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-[#8AD74C] transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/60 flex items-center justify-center shrink-0 shadow-lime-glow">
                  <Leaf className="w-5 h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold font-display text-[#F7F6F2]">Transpiration State</span>
                    <span className="text-[10px] font-mono text-[#8AD74C] bg-[#0F2B18] px-2 py-0.5 rounded-full border border-[#8AD74C]/30">ACTIVE</span>
                  </div>
                  <span className="text-xs text-[#A3B18A] mt-0.5 font-mono">Stomatal Conductance: 0.94 mol/m²s</span>
                </div>
              </div>

              {/* Node 2: Thermal Differential (FLIR Lepton 3.5) */}
              <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#070B08]/90 border border-[#E8D07C]/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-[#E8D07C] transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-[#1C1A0E] border border-[#E8D07C]/60 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(232,208,124,0.3)]">
                  <Sun className="w-5 h-5 text-[#E8D07C]" />
                </div>
                <div className="flex flex-col text-left flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold font-display text-[#F7F6F2]">Leaf Thermal Differential</span>
                    <span className="text-[10px] font-mono text-[#E8D07C] bg-[#1C1A0E] px-2 py-0.5 rounded-full border border-[#E8D07C]/30">COOLING</span>
                  </div>
                  <span className="text-xs text-[#A3B18A] mt-0.5 font-mono">Leaf Temp: 23.4°C (Ambient: 25.8°C)</span>
                </div>
              </div>

              {/* Node 3: Predictive Vapor Pressure Deficit (VPD) */}
              <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#070B08]/90 border border-[#8AD74C]/50 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-[#8AD74C] transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/60 flex items-center justify-center shrink-0 shadow-lime-glow">
                  <Droplets className="w-5 h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold font-display text-[#F7F6F2]">Predictive VPD Status</span>
                    <span className="text-[10px] font-mono text-[#8AD74C] bg-[#0F2B18] px-2 py-0.5 rounded-full border border-[#8AD74C]/30">0.92 kPa</span>
                  </div>
                  <span className="text-xs text-[#A3B18A] mt-0.5 font-mono">Zero Hypoxia · Ideal Range</span>
                </div>
              </div>

              {/* Node 4: Spoken Voice Personality Quote Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0F2B18]/95 border border-[#8AD74C]/60 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.9)] space-y-2">
                <div className="flex items-center justify-between text-xs text-[#8AD74C] font-mono">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Sparkles className="w-3.5 h-3.5" /> NTE™ Voice Spoken Output
                  </span>
                  <span className="text-[10px] text-[#A3B18A]">Calm / Warm Mode</span>
                </div>
                <p className="text-xs sm:text-sm italic text-[#F7F6F2] font-sans leading-snug">
                  "My stomata are open and photosynthesizing happily! I could use a tiny sip of water around 4:00 PM."
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────────────────────
            4. BOTTOM FROSTED GLASS BAR: 4 Core Nature Intelligence Capabilities
           ───────────────────────────────────────────────────────────────────────────── */}
        <div className="mt-10 sm:mt-14 pt-2">
          <div className="max-w-5xl mx-auto rounded-3xl p-5 sm:px-8 sm:py-5 bg-[#0B150F]/90 border border-[#8AD74C]/35 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-4 items-center">

              {/* Pillar 1: Non-Invasive Optics */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] group-hover:scale-105 transition-all shadow-lime-glow">
                  <Sun className="w-5 h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">
                    FLIR Thermal
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#A3B18A] font-medium">
                    Non-Invasive Optics
                  </span>
                </div>
              </div>

              {/* Pillar 2: Quad-Gas VOC Sensing */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] group-hover:scale-105 transition-all shadow-lime-glow">
                  <Activity className="w-5 h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">
                    Bosch BME688
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#A3B18A] font-medium">
                    Quad-Gas VOC Sensing
                  </span>
                </div>
              </div>

              {/* Pillar 3: On-Device TinyML */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] group-hover:scale-105 transition-all shadow-lime-glow">
                  <MessageCircle className="w-5 h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">
                    NTE™ Voice Engine
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#A3B18A] font-medium">
                    Spoken Plant Translation
                  </span>
                </div>
              </div>

              {/* Pillar 4: Zero Cloud Tracking */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center shrink-0 group-hover:border-[#8AD74C] group-hover:scale-105 transition-all shadow-lime-glow">
                  <ShieldCheck className="w-5 h-5 text-[#8AD74C]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">
                    SRAM Overwrite
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#A3B18A] font-medium">
                    Zero Camera Recording
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
          5. ANIMATED DOWNWARD SCROLL INDICATOR
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex justify-center pt-6">
        <a
          href="#problem-section"
          className="flex flex-col items-center gap-1.5 text-xs text-[#A3B18A]/70 hover:text-[#8AD74C] transition-colors group"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#8AD74C]" />
        </a>
      </div>

    </section>
  );
};

export default HomeHero;
