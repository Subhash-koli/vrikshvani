'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Smartphone, MessageSquare, History, Layers, ShieldCheck } from 'lucide-react';

const APP_SCREENS = [
  {
    id: 'dashboard',
    name: 'Plant Dashboard',
    icon: Smartphone,
    title: 'Real-Time Telemetry Overview',
    desc: 'Displays plant hydration status, real-time VPD indicator, leaf surface temperature, and quick care actions.',
    image: '/assets/app_ui_mockups/app-telemetry-dashboard-dark.png',
    mockup: {
      title: 'Monstera Deliciosa',
      badge: 'Hydration: Balanced (Optimal)',
      gaugeLabel: 'Leaf Surface Temp',
      gaugeVal: '24.2°C',
      vpdVal: '0.92 kPa (Ideal)',
      quote: '"My stomata are open and photosynthesizing happily!"',
    },
  },
  {
    id: 'chat',
    name: 'AI Plant Chat',
    icon: MessageSquare,
    title: 'Conversational Plant Interface',
    desc: 'Ask your plant how it is feeling, request care advice, or customize your NTE™ voice personality.',
    image: '/assets/app_ui_mockups/app-plant-health-voice-card.png',
    mockup: {
      title: 'Vriksh AI Chat',
      badge: 'NTE™ Voice Active',
      gaugeLabel: 'Stomatal Status',
      gaugeVal: 'Fully Open',
      vpdVal: 'Calm & Warm Voice',
      quote: '"I could use a gentle watering around 4:00 PM!"',
    },
  },
  {
    id: 'timeline',
    name: 'Biometric Timeline',
    icon: History,
    title: 'Time-Series History',
    desc: 'Track VPD fluctuations, leaf temperature cooling deltas, and watering patterns across seasons.',
    image: '/assets/app_ui_mockups/app-thermal-histogram.png',
    mockup: {
      title: 'Transpiration History',
      badge: 'Local Telemetry Log',
      gaugeLabel: 'Average VPD',
      gaugeVal: '0.88 kPa',
      vpdVal: 'Within Target Range',
      quote: '"Consistent transpiration cycle observed over the past 7 days."',
    },
  },
  {
    id: 'fleet',
    name: 'Garden Fleet',
    icon: Layers,
    title: 'Multi-Plant Hub Control',
    desc: 'Manage multiple NIH-01 hubs across living rooms, offices, and indoor plant collections.',
    image: '/assets/app_ui_mockups/app-fleet-management-overview.png',
    mockup: {
      title: 'Botanical Collection',
      badge: '4 Active Hubs',
      gaugeLabel: 'Collection Status',
      gaugeVal: 'All Stable',
      vpdVal: 'BLE Mesh Connected',
      quote: '"All botanical hubs synchronized locally via Bluetooth."',
    },
  },
];

export const AppUiGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const current = APP_SCREENS.find((s) => s.id === activeTab) || APP_SCREENS[0];

  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="lime">Companion App Interface Concept</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Your Garden&apos;s Biophysical Dashboard.
          </h2>
          <p className="text-[#A3B18A] text-base md:text-lg">
            Explore conceptual screens and interface wireframes for the companion app. Designed for clarity, empathy, and scientific precision.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3">
          {APP_SCREENS.map((s) => {
            const Icon = s.icon;
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-4 py-2.5 rounded-btn text-xs font-semibold cursor-pointer transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#0F2B18] border-[#8AD74C] text-[#8AD74C] shadow-lime-glow'
                    : 'bg-white/5 border-white/10 text-[#A3B18A] hover:text-[#F7F6F2] hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{s.name}</span>
              </button>
            );
          })}
        </div>

        {/* Screen Showcase Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Screen Description Card */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-8 space-y-4 border-[#8AD74C]/30 bg-[#0F2B18]/70">
              <Badge variant="lime">{current.name}</Badge>
              <h3 className="font-display text-2xl font-bold text-[#F7F6F2]">
                {current.title}
              </h3>
              <p className="text-sm text-[#A3B18A] leading-relaxed">
                {current.desc}
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-[#8AD74C]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Local BLE Sync + Optional Cloud Telemetry</span>
              </div>
            </Card>
          </div>

          {/* Right: Phone Frame Simulation */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-72 h-[480px] bg-[#070B08] border-4 border-[#0F2B18] rounded-[44px] p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between border-t-8">
              {/* Top Dynamic Island Notch */}
              <div className="w-28 h-5 bg-[#0F2B18] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#8AD74C] animate-pulse" />
              </div>

              {/* Dynamic Mockup UI Content */}
              <div className="space-y-4 text-center my-auto">
                <div className="text-4xl">🪴</div>
                <div className="font-display font-bold text-lg text-[#F7F6F2]">
                  {current.mockup.title}
                </div>
                <Badge variant="lime">{current.mockup.badge}</Badge>

                <div className="bg-[#0F2B18]/80 border border-white/10 rounded-2xl p-4 space-y-3 text-left">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#A3B18A]">{current.mockup.gaugeLabel}</span>
                    <span className="text-[#8AD74C] font-bold">{current.mockup.gaugeVal}</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#8AD74C] h-full w-[88%]" />
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-[#E8D07C]">
                    <span>Status</span>
                    <span>{current.mockup.vpdVal}</span>
                  </div>
                </div>

                <p className="text-xs italic text-[#F7F6F2]/90 pt-1">
                  {current.mockup.quote}
                </p>
              </div>

              {/* Bottom Phone Nav */}
              <div className="pt-3 border-t border-white/10 flex justify-around text-[11px] font-mono text-[#A3B18A]">
                <span className="text-[#8AD74C]">Dashboard</span>
                <span>Fleet</span>
                <span>Settings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppUiGallery;
