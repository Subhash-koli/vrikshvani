'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Smartphone, Bell, RefreshCw, Volume2 } from 'lucide-react';
import Link from 'next/link';

export const AppHero: React.FC = () => {
  return (
    <section className="pt-36 pb-24 bg-[#070B08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="lime">iOS & Android App</Badge>
            <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#F7F6F2]">
              Biophilic Dashboard for your Mobile Devices.
            </h1>
            <p className="text-[#A3B18A] text-base md:text-lg">
              Bluetooth 5.2 auto-pairing, 5-channel push alert customization, and live transpiration charts.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="primary">Download for iOS →</Button>
              <Button variant="secondary">Download for Android →</Button>
            </div>
          </div>

          <div className="nidl-glass rounded-container p-8 relative flex justify-center items-center min-h-[400px]">
            <div className="w-64 h-[380px] bg-[#070B08] border-4 border-[#0F2B18] rounded-[36px] p-4 flex flex-col justify-between shadow-2xl">
              <div className="w-20 h-3 bg-[#0F2B18] rounded-full mx-auto" />
              <div className="space-y-3 text-center my-auto">
                <div className="text-3xl">🌿</div>
                <div className="font-display font-bold text-lg text-[#F7F6F2]">Ficus Lyrata</div>
                <Badge variant="lime">Health 96%</Badge>
                <p className="text-xs text-[#A3B18A] italic">"My stomatal conductance is optimal today!"</p>
              </div>
              <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-[#A3B18A] flex justify-between">
                <span>BLE 5.2 Online</span>
                <span className="text-[#8AD74C]">Syncing...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppHero;
