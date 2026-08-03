'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Eye, Flame, Thermometer, Info } from 'lucide-react';

export default function ThermalVisualizer() {
  const [mode, setMode] = useState<'thermal' | 'optical'>('thermal');

  return (
    <Card className="p-6 md:p-8 space-y-6 border-[#E8D07C]/30 bg-[#0F2B18]/30">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#E8D07C]/10 border border-[#E8D07C]/30 flex items-center justify-center">
            <Flame className="w-5 h-5 text-[#E8D07C]" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">FLIR Thermal Leaf vs Air Visualizer</h3>
            <p className="text-xs text-[#A3B18A]">Non-Invasive LWIR Thermal Transpiration Cooling Delta</p>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex bg-[#070B08] p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setMode('thermal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              mode === 'thermal'
                ? 'bg-[#0F2B18] text-[#8AD74C] border border-[#8AD74C]/30'
                : 'text-[#A3B18A] hover:text-[#F7F6F2]'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-[#E8D07C]" /> FLIR Thermal LWIR
          </button>
          <button
            onClick={() => setMode('optical')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              mode === 'optical'
                ? 'bg-[#0F2B18] text-[#8AD74C] border border-[#8AD74C]/30'
                : 'text-[#A3B18A] hover:text-[#F7F6F2]'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-[#8AD74C]" /> Visible Light (RGB)
          </button>
        </div>
      </div>

      {/* Visual Canvas Container */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 h-64 md:h-80 flex items-center justify-center">
        {mode === 'thermal' ? (
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#1e1b4b] to-[#991b1b] flex items-center justify-center p-6 text-center">
            {/* False Color Heatmap Mockup */}
            <div className="space-y-4 max-w-md">
              <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-[#065f46] via-[#10b981] to-[#34d399] border-4 border-emerald-300 shadow-2xl flex flex-col items-center justify-center text-center p-2">
                <span className="text-[10px] font-mono uppercase text-emerald-950 font-bold">Leaf Surface</span>
                <span className="text-2xl font-mono font-bold text-emerald-950">22.4°C</span>
                <span className="text-[9px] font-mono text-emerald-900">Transpiration Cooling</span>
              </div>
              <div className="bg-[#070B08]/80 p-3 rounded-xl border border-white/10 flex justify-between items-center font-mono text-xs">
                <span className="text-[#A3B18A]">Ambient Air Temp: <strong className="text-red-400">25.8°C</strong></span>
                <span className="text-[#8AD74C]">ΔT: <strong className="text-[#8AD74C]">-3.4°C</strong></span>
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-emerald-950/60 flex items-center justify-center p-6 text-center">
            <div className="space-y-3 max-w-md">
              <div className="w-36 h-36 mx-auto rounded-full bg-emerald-800/80 border-4 border-emerald-500/50 flex flex-col items-center justify-center text-center p-2">
                <span className="text-xs font-medium text-[#F7F6F2]">Monstera Leaf</span>
                <span className="text-[10px] text-[#A3B18A]">Appears green & healthy to the human eye</span>
              </div>
              <p className="text-xs text-[#A3B18A]">
                Human eyes cannot see transpiration stress until physical wilting occurs. FLIR thermal LWIR detects stomatal closure 48 hours earlier.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Explanation Footer */}
      <div className="p-4 rounded-xl bg-[#070B08] border border-white/5 text-xs text-[#A3B18A] flex items-start gap-2.5">
        <Info className="w-4 h-4 text-[#E8D07C] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-[#F7F6F2]">Thermal Physics Note:</strong> When stomata open, water evaporates, cooling the leaf surface by 2–4°C below room temperature (Transpiration Cooling). When VPD is out of range, stomata close, causing leaf temperature to rise above ambient. NIH-01 detects this thermal shift instantly.
        </p>
      </div>
    </Card>
  );
}
