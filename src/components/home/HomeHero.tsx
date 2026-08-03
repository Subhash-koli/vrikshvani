'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, ShieldCheck, Play, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export const HomeHero: React.FC = () => {
  const [slotsLeft, setSlotsLeft] = useState(88);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlotsLeft((prev) => (prev > 12 ? prev - 1 : prev));
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#070B08]">
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8AD74C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#E8D07C]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          
          {/* Scarcity Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="lime" className="px-4 py-1.5 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#8AD74C] animate-pulse" />
              Batch 01 Founding Reservation · <span className="text-[#8AD74C] font-bold">{slotsLeft} Units Remaining</span>
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F7F6F2] leading-[1.1]"
          >
            Listen to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AD74C] via-[#E8D07C] to-[#3FAE2A]">Unspoken Words</span> of Nature.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#A3B18A] max-w-2xl font-normal leading-relaxed"
          >
            Vriksh Vani NIH-01 translates leaf transpiration, micro-volatility, and thermal stress into human speech using non-invasive thermal biometrics and local TinyML inference.
          </motion.p>

          {/* Action Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
          >
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
          </motion.div>

          {/* Key Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10 w-full max-w-3xl"
          >
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
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;
