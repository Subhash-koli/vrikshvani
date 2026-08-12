'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const AppHero: React.FC = () => {
  return (
    <section className="pt-36 pb-24 bg-[#070B08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="lime">Companion App · Concept Preview</Badge>
            <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#F7F6F2]">
              Biophilic Dashboard for your Mobile Devices.
            </h1>
            <p className="text-[#A3B18A] text-base md:text-lg">
              Designed to pair locally via Bluetooth with your NIH-01 hub for live transpiration telemetry, custom voice personalities, and gentle care notifications.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/waitlist">
                <Button variant="primary">Join Early Beta Access →</Button>
              </Link>
              <Link href="/nature-intelligence">
                <Button variant="outline">Explore The Technology</Button>
              </Link>
            </div>
          </div>

          <div className="nidl-glass rounded-container p-8 relative flex justify-center items-center min-h-[400px]">
            <div className="w-64 h-[380px] bg-[#070B08] border-4 border-[#0F2B18] rounded-[36px] p-4 flex flex-col justify-between shadow-2xl">
              <div className="w-20 h-3 bg-[#0F2B18] rounded-full mx-auto" />
              <div className="space-y-3 text-center my-auto">
                <div className="text-3xl">🌿</div>
                <div className="font-display font-bold text-lg text-[#F7F6F2]">Ficus Lyrata</div>
                <Badge variant="lime">Hydration Balanced</Badge>
                <p className="text-xs text-[#A3B18A] italic">&ldquo;My transpiration rate is comfortable today.&rdquo;</p>
              </div>
              <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-[#A3B18A] flex justify-between">
                <span>BLE Local Sync</span>
                <span className="text-[#8AD74C]">Simulated Wireframe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppHero;
