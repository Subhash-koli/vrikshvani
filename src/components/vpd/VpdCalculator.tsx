'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Thermometer, Droplets, Wind, AlertCircle, CheckCircle2, Info } from 'lucide-react';

export default function VpdCalculator() {
  const [leafTemp, setLeafTemp] = useState<number>(24.0);
  const [ambientTemp, setAmbientTemp] = useState<number>(25.0);
  const [humidity, setHumidity] = useState<number>(55.0);

  // Magnus-Tetens formula for Saturation Vapour Pressure (kPa)
  const calcSvp = (t: number) => 0.61078 * Math.exp((17.27 * t) / (t + 237.3));

  const svpLeaf = calcSvp(leafTemp);
  const svpAir = calcSvp(ambientTemp);
  const avpAir = svpAir * (humidity / 100);
  const vpd = Math.max(0, parseFloat((svpLeaf - avpAir).toFixed(2)));

  const getVpdZone = (val: number) => {
    if (val < 0.4) return { zone: 'Under-Transpiration / Disease Risk', color: 'text-blue-400', badge: 'blue', desc: 'Air is too humid relative to leaf temperature. Risk of fungal pathogens, mold, and poor nutrient uptake.' };
    if (val <= 0.8) return { zone: 'Propagation & Early Growth', color: 'text-[#8AD74C]', badge: 'lime', desc: 'Gentle transpiration suitable for delicate cuttings, seedlings, and sensitive foliage.' };
    if (val <= 1.2) return { zone: 'Optimal Houseplant Transpiration', color: 'text-[#8AD74C]', badge: 'lime', desc: 'The sweet spot for Monstera, Philodendron, Ficus, and most tropical indoor foliage.' };
    if (val <= 1.6) return { zone: 'Succulent & Arid Optimal', color: 'text-[#E8D07C]', badge: 'gold', desc: 'Promotes firm growth in succulents, cacti, and drought-tolerant species.' };
    return { zone: 'Severe Transpiration Stress', color: 'text-red-400', badge: 'red', desc: 'Air is extremely dry relative to leaf. Stomata slam shut, halting growth and causing crispy brown leaf tips.' };
  };

  const status = getVpdZone(vpd);

  return (
    <Card className="p-6 md:p-8 space-y-6 border-[#8AD74C]/30 bg-[#0F2B18]/40">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#8AD74C]/10 border border-[#8AD74C]/30 flex items-center justify-center">
            <Wind className="w-5 h-5 text-[#8AD74C]" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Interactive VPD Simulator</h3>
            <p className="text-xs text-[#A3B18A]">Magnus-Tetens Equation · Real-Time Computation</p>
          </div>
        </div>
        <Badge variant={status.badge === 'lime' ? 'lime' : status.badge === 'gold' ? 'gold' : 'outline'}>
          {vpd} kPa
        </Badge>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Leaf Temp */}
        <div className="space-y-2 bg-[#070B08]/60 p-4 rounded-xl border border-white/5">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#F7F6F2] font-medium flex items-center gap-1.5">
              <Thermometer className="w-4 h-4 text-[#E8D07C]" /> Leaf Temp
            </span>
            <span className="font-mono text-[#E8D07C] font-bold">{leafTemp.toFixed(1)} °C</span>
          </div>
          <input
            type="range" min="10" max="40" step="0.5"
            value={leafTemp}
            onChange={(e) => setLeafTemp(parseFloat(e.target.value))}
            className="w-full accent-[#E8D07C] cursor-pointer"
          />
          <p className="text-[11px] text-[#A3B18A]">FLIR Lepton 3.5 sensor reading</p>
        </div>

        {/* Ambient Temp */}
        <div className="space-y-2 bg-[#070B08]/60 p-4 rounded-xl border border-white/5">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#F7F6F2] font-medium flex items-center gap-1.5">
              <Thermometer className="w-4 h-4 text-[#8AD74C]" /> Ambient Temp
            </span>
            <span className="font-mono text-[#8AD74C] font-bold">{ambientTemp.toFixed(1)} °C</span>
          </div>
          <input
            type="range" min="10" max="40" step="0.5"
            value={ambientTemp}
            onChange={(e) => setAmbientTemp(parseFloat(e.target.value))}
            className="w-full accent-[#8AD74C] cursor-pointer"
          />
          <p className="text-[11px] text-[#A3B18A]">Room ambient air sensor</p>
        </div>

        {/* Relative Humidity */}
        <div className="space-y-2 bg-[#070B08]/60 p-4 rounded-xl border border-white/5">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#F7F6F2] font-medium flex items-center gap-1.5">
              <Droplets className="w-4 h-4 text-blue-400" /> Relative Humidity
            </span>
            <span className="font-mono text-blue-400 font-bold">{humidity.toFixed(0)} %</span>
          </div>
          <input
            type="range" min="10" max="95" step="1"
            value={humidity}
            onChange={(e) => setHumidity(parseFloat(e.target.value))}
            className="w-full accent-blue-400 cursor-pointer"
          />
          <p className="text-[11px] text-[#A3B18A]">SHT41 relative humidity sensor</p>
        </div>
      </div>

      {/* Result Status Display */}
      <div className="p-5 rounded-xl bg-[#070B08] border border-white/10 space-y-2">
        <div className="flex items-center gap-2">
          {vpd >= 0.4 && vpd <= 1.2 ? (
            <CheckCircle2 className="w-5 h-5 text-[#8AD74C]" />
          ) : (
            <AlertCircle className="w-5 h-5 text-[#E8D07C]" />
          )}
          <span className={`font-display font-bold text-lg ${status.color}`}>{status.zone}</span>
        </div>
        <p className="text-sm text-[#A3B18A] leading-relaxed">{status.desc}</p>
        <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#A3B18A]/70 border-t border-white/5">
          <span>Leaf SVP: {svpLeaf.toFixed(2)} kPa</span>
          <span>Air SVP: {svpAir.toFixed(2)} kPa</span>
          <span>Air AVP: {avpAir.toFixed(2)} kPa</span>
        </div>
      </div>
    </Card>
  );
}
