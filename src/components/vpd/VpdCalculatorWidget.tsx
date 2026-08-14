'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Thermometer, Droplets, Wind, Volume2, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface SpeciesPreset {
  name: string;
  emoji: string;
  idealVpdMin: number;
  idealVpdMax: number;
  temp: number;
  humidity: number;
  leafOffset: number;
}

const PRESETS: SpeciesPreset[] = [
  { name: 'Monstera Deliciosa', emoji: '🪴', idealVpdMin: 0.8, idealVpdMax: 1.2, temp: 24, humidity: 65, leafOffset: -1.5 },
  { name: 'Calathea Orbifolia', emoji: '🌿', idealVpdMin: 0.6, idealVpdMax: 0.9, temp: 22, humidity: 75, leafOffset: -2.0 },
  { name: 'Ficus Lyrata', emoji: '🌱', idealVpdMin: 0.9, idealVpdMax: 1.4, temp: 26, humidity: 55, leafOffset: -1.0 },
  { name: 'Echeveria (Succulent)', emoji: '🌵', idealVpdMin: 1.2, idealVpdMax: 1.8, temp: 28, humidity: 35, leafOffset: +0.5 },
];

export const VpdCalculatorWidget: React.FC = () => {
  const [temp, setTemp] = useState<number>(24); // °C
  const [humidity, setHumidity] = useState<number>(60); // %
  const [leafOffset, setLeafOffset] = useState<number>(-1.5); // °C
  const [selectedPreset, setSelectedPreset] = useState<string>('Monstera Deliciosa');

  // Vapour Pressure Calculations
  // SVP = 0.61078 * exp((17.27 * T) / (T + 237.3)) in kPa
  const svpAir = 0.61078 * Math.exp((17.27 * temp) / (temp + 237.3));
  const avpAir = svpAir * (humidity / 100);
  
  const leafTemp = temp + leafOffset;
  const svpLeaf = 0.61078 * Math.exp((17.27 * leafTemp) / (leafTemp + 237.3));
  const vpd = Math.max(0, parseFloat((svpLeaf - avpAir).toFixed(2)));

  const preset = PRESETS.find((p) => p.name === selectedPreset) || PRESETS[0];

  // Determine VPD Zone State
  let zoneColor = 'text-[#8AD74C]';
  let zoneBg = 'bg-[#8AD74C]/10 border-[#8AD74C]/30';
  let zoneStatus = 'Optimal Transpiration Zone';
  let voiceMessage = `"My stomatal cooling is perfectly balanced. I'm photosynthesizing happily!"`;
  let Icon = CheckCircle2;

  if (vpd < preset.idealVpdMin) {
    zoneColor = 'text-cyan-400';
    zoneBg = 'bg-cyan-500/10 border-cyan-500/30';
    zoneStatus = 'Under-Transpiration (High Humidity / Low Cooling)';
    voiceMessage = `"Air is too humid! My stomata are closed and water movement is stagnant."`;
    Icon = AlertTriangle;
  } else if (vpd > preset.idealVpdMax) {
    zoneColor = 'text-amber-400';
    zoneBg = 'bg-amber-500/10 border-amber-500/30';
    zoneStatus = 'Over-Transpiration (Thermal & Water Loss Stress)';
    voiceMessage = `"I'm losing water faster than my roots can absorb! Please mist or move me to shade."`;
    Icon = AlertTriangle;
  }

  const applyPreset = (p: SpeciesPreset) => {
    setSelectedPreset(p.name);
    setTemp(p.temp);
    setHumidity(p.humidity);
    setLeafOffset(p.leafOffset);
  };

  return (
    <Card className="p-6 md:p-10 space-y-8 border-[#8AD74C]/30 bg-[#0F2B18]/60 shadow-2xl">
      {/* Widget Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="lime">Interactive Tool</Badge>
            <span className="text-xs font-mono text-[#8AD74C]">NIH-01 Physics Engine</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F7F6F2]">
            Vapour Pressure Deficit (VPD) Simulator
          </h2>
          <p className="text-sm text-[#A3B18A] mt-1">
            Adjust temperature, humidity, and FLIR thermal leaf delta to simulate real plant transpiration response.
          </p>
        </div>

        {/* Live VPD Display Gauge */}
        <div className={`p-4 rounded-2xl border ${zoneBg} text-center min-w-[180px] shrink-0`}>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3B18A]">Computed VPD</span>
          <div className={`text-4xl font-display font-bold ${zoneColor} my-1`}>
            {vpd} <span className="text-sm font-sans text-[#F7F6F2]">kPa</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-[11px] font-mono">
            <Icon className={`w-3.5 h-3.5 ${zoneColor}`} />
            <span className={zoneColor}>{vpd >= preset.idealVpdMin && vpd <= preset.idealVpdMax ? 'Target Met' : 'Stress State'}</span>
          </div>
        </div>
      </div>

      {/* Species Presets */}
      <div className="space-y-3">
        <label className="text-xs font-mono text-[#A3B18A] uppercase tracking-wider">
          Select Species Target:
        </label>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.name}
              onClick={() => applyPreset(p)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 border ${
                selectedPreset === p.name
                  ? 'bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050] border-transparent text-white font-bold'
                  : 'bg-white/5 border-white/10 text-[#A3B18A] hover:text-[#F7F6F2] hover:border-white/20'
              }`}
            >
              <span>{p.emoji}</span>
              <span>{p.name}</span>
              <span className="text-[10px] opacity-60 font-mono">({p.idealVpdMin}–{p.idealVpdMax} kPa)</span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Air Temperature Slider */}
        <div className="space-y-3 p-4 rounded-2xl bg-[#070B08]/60 border border-white/5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-mono text-[#A3B18A] flex items-center gap-1">
              <Thermometer className="w-4 h-4 text-[#E8D07C]" /> Air Temperature
            </span>
            <span className="font-mono font-bold text-[#E8D07C] text-sm">{temp}°C</span>
          </div>
          <input
            type="range"
            min="10"
            max="40"
            step="0.5"
            value={temp}
            onChange={(e) => setTemp(parseFloat(e.target.value))}
            className="w-full accent-[#E8D07C] bg-white/10 rounded-lg cursor-pointer h-2"
          />
          <div className="flex justify-between text-[10px] font-mono text-[#A3B18A]/60">
            <span>10°C (Cold)</span>
            <span>40°C (Hot)</span>
          </div>
        </div>

        {/* Relative Humidity Slider */}
        <div className="space-y-3 p-4 rounded-2xl bg-[#070B08]/60 border border-white/5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-mono text-[#A3B18A] flex items-center gap-1">
              <Droplets className="w-4 h-4 text-[#8AD74C]" /> Relative Humidity
            </span>
            <span className="font-mono font-bold text-[#8AD74C] text-sm">{humidity}%</span>
          </div>
          <input
            type="range"
            min="20"
            max="95"
            step="1"
            value={humidity}
            onChange={(e) => setHumidity(parseInt(e.target.value, 10))}
            className="w-full accent-[#8AD74C] bg-white/10 rounded-lg cursor-pointer h-2"
          />
          <div className="flex justify-between text-[10px] font-mono text-[#A3B18A]/60">
            <span>20% (Dry)</span>
            <span>95% (Humid)</span>
          </div>
        </div>

        {/* FLIR Leaf Delta Offset */}
        <div className="space-y-3 p-4 rounded-2xl bg-[#070B08]/60 border border-white/5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-mono text-[#A3B18A] flex items-center gap-1">
              <Wind className="w-4 h-4 text-cyan-400" /> FLIR Leaf Cooling Delta
            </span>
            <span className="font-mono font-bold text-cyan-400 text-sm">{leafOffset > 0 ? `+${leafOffset}` : leafOffset}°C</span>
          </div>
          <input
            type="range"
            min="-4.0"
            max="+2.0"
            step="0.2"
            value={leafOffset}
            onChange={(e) => setLeafOffset(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 bg-white/10 rounded-lg cursor-pointer h-2"
          />
          <div className="flex justify-between text-[10px] font-mono text-[#A3B18A]/60">
            <span>-4.0°C (Active Transpiration)</span>
            <span>+2.0°C (Stomatal Shutdown)</span>
          </div>
        </div>
      </div>

      {/* Simulated NTE Spoken Output Box */}
      <div className="p-5 rounded-2xl bg-[#070B08] border border-[#8AD74C]/30 space-y-2 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#8AD74C] flex items-center gap-1.5 font-bold">
            <Volume2 className="w-4 h-4 animate-pulse" /> Simulated NTE™ Neural Voice Output ({selectedPreset})
          </span>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${zoneBg}`}>
            {zoneStatus}
          </span>
        </div>
        <p className="text-base italic font-serif text-[#F7F6F2] leading-relaxed pl-2 border-l-2 border-[#8AD74C]">
          {voiceMessage}
        </p>
        <div className="flex justify-between text-[10px] font-mono text-[#A3B18A] pt-2 border-t border-white/5">
          <span>Leaf Temp: {leafTemp.toFixed(1)}°C</span>
          <span>Target Range: {preset.idealVpdMin} – {preset.idealVpdMax} kPa</span>
          <span>Air Temp: {temp}°C</span>
        </div>
      </div>
    </Card>
  );
};

export default VpdCalculatorWidget;
