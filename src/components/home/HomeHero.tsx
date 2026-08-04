import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Play } from 'lucide-react';
import { ScarcityBadge } from '@/components/home/ScarcityBadge';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#070B08]">
      {/* Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8AD74C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#E8D07C]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">

          {/* Scarcity Badge — delay 0 */}
          <div className="animate-hero animate-hero-d0">
            <ScarcityBadge />
          </div>

          {/* Main Headline — delay 1 */}
          <h1 className="animate-hero animate-hero-d1 font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F7F6F2] leading-[1.1]">
            Listen to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AD74C] via-[#E8D07C] to-[#3FAE2A]">Unspoken Words</span> of Nature.
          </h1>

          {/* Subtitle — delay 2 */}
          <p className="animate-hero animate-hero-d2 text-lg sm:text-xl text-[#A3B18A] max-w-2xl font-normal leading-relaxed">
            Vriksh Vani NIH-01 translates leaf transpiration, micro-volatility, and thermal stress into human speech using non-invasive thermal biometrics and local TinyML inference.
          </p>

          {/* CTA Buttons — delay 3 */}
          <div className="animate-hero animate-hero-d3 flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
            <Link href="/waitlist" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Reserve Your Founding Unit →
              </Button>
            </Link>
            <Link href="/nature-intelligence" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto flex items-center gap-2">
                <Play className="w-4 h-4 text-[#8AD74C] fill-[#8AD74C]" /> Experience Voice Demo
              </Button>
            </Link>
          </div>

          {/* Key Metrics Strip — delay 4 */}
          <div className="animate-hero animate-hero-d4 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10 w-full max-w-3xl">
            <div className="nidl-glass rounded-card p-4 text-center">
              <div className="text-2xl font-bold font-display text-[#8AD74C]">98.4%</div>
              <div className="text-xs text-[#A3B18A] font-mono uppercase mt-1">Stress Accuracy</div>
            </div>
            <div className="nidl-glass rounded-card p-4 text-center">
              <div className="text-2xl font-bold font-display text-[#E8D07C]">&lt;45ms</div>
              <div className="text-xs text-[#A3B18A] font-mono uppercase mt-1">Local Edge NPU</div>
            </div>
            <div className="nidl-glass rounded-card p-4 text-center">
              <div className="text-2xl font-bold font-display text-[#8AD74C]">200+</div>
              <div className="text-xs text-[#A3B18A] font-mono uppercase mt-1">Species DB</div>
            </div>
            <div className="nidl-glass rounded-card p-4 text-center">
              <div className="text-2xl font-bold font-display text-[#F7F6F2]">0 Video</div>
              <div className="text-xs text-[#A3B18A] font-mono uppercase mt-1">Volatile SRAM</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;


