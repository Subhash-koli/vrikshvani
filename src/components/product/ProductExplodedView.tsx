'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Cpu, Eye, Wind, Volume2, ShieldCheck, Layers } from 'lucide-react';

interface HardwareHotspot {
  id: string;
  name: string;
  badge: string;
  icon: React.ElementType;
  spec: string;
  desc: string;
  layerPos: string;
}

const HOTSPOTS: HardwareHotspot[] = [
  {
    id: 'ceramic',
    name: 'Artisanal Ceramic Shell Concept',
    badge: 'Slip-Cast Clay Vision',
    icon: Layers,
    spec: 'Sustainable Mineral Clay',
    desc: 'Designed for hand-pouring and high-temperature firing. Biophilic matte texture with custom optical thermal window.',
    layerPos: 'Layer 1 · Outer Enclosure',
  },
  {
    id: 'flir',
    name: 'FLIR Lepton 3.5 Thermal Array',
    badge: 'Planned Sensor',
    icon: Eye,
    spec: '160x120 Radiometric Target',
    desc: 'Measures leaf surface temperature non-invasively to evaluate evaporative cooling dynamics.',
    layerPos: 'Layer 2 · Optical Sensor',
  },
  {
    id: 'bme',
    name: 'Bosch BME688 Quad-Gas Sensor',
    badge: 'Planned Sensor',
    icon: Wind,
    spec: 'VOC & Atmospheric Gas',
    desc: 'Scans volatile organic compounds emitted during root stress, pest activity, or humidity shifts.',
    layerPos: 'Layer 3 · Chemical Sensing',
  },
  {
    id: 'npu',
    name: 'ESP32-S3 TinyML Compute Engine',
    badge: 'Dual-Core Microcontroller',
    icon: Cpu,
    spec: 'Target On-Device Inference',
    desc: 'Quantized neural model classifies biophysical states directly on-device with zero cloud dependency.',
    layerPos: 'Layer 4 · Main Logic Board',
  },
  {
    id: 'speaker',
    name: 'Acoustic NTE™ Speaker',
    badge: 'Audio Synthesis Vision',
    icon: Volume2,
    spec: 'Custom Acoustic Chamber',
    desc: 'Acoustic chamber designed to project calm spoken voice output directly into living spaces.',
    layerPos: 'Layer 5 · Audio Synthesis',
  },
  {
    id: 'privacy',
    name: 'Volatile SRAM Privacy Buffer',
    badge: 'Privacy Standard',
    icon: ShieldCheck,
    spec: 'Zero Video Architecture',
    desc: 'Thermal frames exist exclusively in volatile SRAM for neural inference and are immediately purged. No video stored.',
    layerPos: 'Layer 6 · Security Shield',
  },
];

export const ProductExplodedView: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('flir');
  const active = HOTSPOTS.find((h) => h.id === activeId) || HOTSPOTS[1];

  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="gold">Hardware Architecture Vision</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Every Detail Has a Purpose.
          </h2>
          <p className="text-[#A3B18A] text-base md:text-lg">
            Inside the ceramic shell concept: our vision for accessible plant biophysics. Explore the 6 core layers of the NIH-01 hub architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Layer Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono text-[#A3B18A] uppercase tracking-wider block mb-2">
              Select Component Layer:
            </span>
            {HOTSPOTS.map((item) => {
              const Icon = item.icon;
              const isSelected = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left p-4 rounded-card border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#0F2B18] border-[#8AD74C] text-[#F7F6F2] shadow-lime-glow'
                      : 'bg-white/5 border-white/10 text-[#A3B18A] hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                      isSelected ? 'bg-[#8AD74C]/20 border-[#8AD74C]/40 text-[#8AD74C]' : 'bg-black/30 border-white/10 text-[#A3B18A]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className={`font-display text-sm font-bold ${isSelected ? 'text-[#8AD74C]' : 'text-[#F7F6F2]'}`}>
                        {item.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[#A3B18A]">{item.layerPos}</span>
                    </div>
                  </div>
                  <Badge variant={isSelected ? 'lime' : 'glass'} className="text-[10px]">
                    {item.badge}
                  </Badge>
                </button>
              );
            })}
          </div>

          {/* Right: Active Detail Card & Visualization */}
          <div className="lg:col-span-7">
            <Card className="p-8 md:p-12 border-[#8AD74C]/30 bg-[#0F2B18]/70 shadow-2xl relative overflow-hidden space-y-6">
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-[#8AD74C] font-bold uppercase tracking-wider">
                  {active.layerPos}
                </span>
                <Badge variant="gold">{active.spec}</Badge>
              </div>

              {/* Component Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {React.createElement(active.icon, { className: 'w-8 h-8 text-[#8AD74C]' })}
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F7F6F2]">
                    {active.name}
                  </h3>
                </div>
                <p className="text-base text-[#A3B18A] leading-relaxed">
                  {active.desc}
                </p>
              </div>

              {/* Exploded Diagram Wireframe Visual */}
              <div className="pt-6 border-t border-white/10">
                <div className="bg-[#070B08] border border-white/10 rounded-2xl p-6 relative overflow-hidden min-h-[160px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#8AD74C]/5 radial-glow" />
                  <div className="text-center space-y-2 relative z-10">
                    <Cpu className="w-8 h-8 text-[#8AD74C] mx-auto animate-pulse" />
                    <span className="font-mono text-xs text-[#8AD74C] block font-bold">{active.badge} VISION</span>
                    <span className="text-[11px] text-[#A3B18A] block max-w-sm mx-auto">
                      Designed to interface with the NIOS pipeline via SPI/I2C local bus.
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductExplodedView;
