'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Activity, Thermometer, Droplets, Wind, Heart, Bell, Settings, Plus, TrendingUp, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const mockPlants = [
  { id: 1, name: 'Monstera Deliciosa', nickname: 'Big Monty', health: 94, vpd: 1.08, emotion: 'Photosynthetic Joy 🌿', lastSeen: '2 min ago', alert: null },
  { id: 2, name: 'Ficus Lyrata', nickname: 'Fiddle Leaf', health: 71, vpd: 1.52, emotion: 'Transpiration Fatigue 🌡️', lastSeen: '1 min ago', alert: 'VPD too high' },
  { id: 3, name: 'Calathea Orbifolia', nickname: 'Orbi', health: 88, vpd: 0.92, emotion: 'Root Exploration Mode 🪴', lastSeen: '3 min ago', alert: null },
  { id: 4, name: 'Pothos Aureum', nickname: 'Golden Boy', health: 97, vpd: 1.05, emotion: 'Morning Awakening ☀️', lastSeen: 'Just now', alert: null },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'alerts' | 'history'>('overview');

  const avgHealth = Math.round(mockPlants.reduce((a, p) => a + p.health, 0) / mockPlants.length);
  const alerts = mockPlants.filter((p) => p.alert);

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Concept Disclaimer Banner */}
          <div className="p-4 rounded-xl bg-[#0F2B18]/60 border border-[#8AD74C]/30 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Badge variant="lime">Concept Simulation</Badge>
              <span className="text-[#F7F6F2]">
                Simulated mobile app telemetry interface illustrating planned NIOS sensor fusion dashboard features.
              </span>
            </div>
            <span className="font-mono text-[#A3B18A]">Non-Live Demonstration</span>
          </div>

          {/* Dashboard Header */}
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs font-mono text-[#8AD74C] uppercase tracking-widest mb-1">Simulated Hub · NIH-01 Target Concept</p>
              <h1 className="font-display text-3xl font-bold text-[#F7F6F2]">Plant Telemetry Dashboard (Concept)</h1>
            </div>
            <div className="flex gap-3">
              <Link href="/waitlist">
                <Button variant="primary" className="flex items-center gap-2 text-xs">
                  Join Prototype Waitlist &rarr;
                </Button>
              </Link>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Heart, val: `${avgHealth}%`, label: 'Avg Health Score', color: avgHealth > 80 ? 'text-[#8AD74C]' : 'text-[#E8D07C]' },
              { icon: Activity, val: `${mockPlants.length}`, label: 'Plants Monitored', color: 'text-[#8AD74C]' },
              { icon: AlertTriangle, val: `${alerts.length}`, label: 'Active Alerts', color: alerts.length > 0 ? 'text-[#E8D07C]' : 'text-[#8AD74C]' },
              { icon: TrendingUp, val: '14d', label: 'Care Streak', color: 'text-[#E8D07C]' },
            ].map((s, idx) => {
              const Icon = s.icon;
              return (
                <Card key={idx} className="text-center py-5 space-y-2">
                  <Icon className={`w-6 h-6 ${s.color} mx-auto`} />
                  <p className={`font-display text-2xl font-bold ${s.color}`}>{s.val}</p>
                  <p className="text-xs font-mono text-[#A3B18A]">{s.label}</p>
                </Card>
              );
            })}
          </div>

          {/* Tabs */}
          <div className="flex gap-1 bg-[#0F2B18]/50 p-1 rounded-xl w-fit border border-white/5">
            {(['overview', 'alerts', 'history'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050] text-white font-bold'
                    : 'text-[#A3B18A] hover:text-[#F7F6F2]'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {tab === 'alerts' && alerts.length > 0 && (
                  <span className="ml-1.5 bg-[#E8D07C] text-[#070B08] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {alerts.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Plant Cards Grid */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {mockPlants.map((plant) => (
                <Card key={plant.id} className={`space-y-4 ${plant.alert ? 'border-[#E8D07C]/30' : ''}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-display font-bold text-[#F7F6F2]">{plant.nickname}</p>
                        {plant.alert && <Badge variant="gold">⚠ Alert</Badge>}
                      </div>
                      <p className="text-xs font-mono text-[#A3B18A]">{plant.name}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-display text-2xl font-bold ${plant.health >= 80 ? 'text-[#8AD74C]' : 'text-[#E8D07C]'}`}>
                        {plant.health}%
                      </p>
                      <p className="text-[10px] font-mono text-[#A3B18A]">Health Score</p>
                    </div>
                  </div>

                  {/* Health Bar */}
                  <div className="w-full h-1.5 bg-[#030504] rounded-full overflow-hidden">
                    <div
                      className={`h-1.5 rounded-full transition-all ${plant.health >= 80 ? 'bg-[#8AD74C]' : 'bg-[#E8D07C]'}`}
                      style={{ width: `${plant.health}%` }}
                    />
                  </div>

                  {/* Bio Signals */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { icon: Wind, val: `${plant.vpd} kPa`, label: 'VPD' },
                      { icon: Thermometer, val: '-0.8°C', label: 'Temp Δ' },
                      { icon: Droplets, val: '42kΩ', label: 'Gas Res.' },
                    ].map((sig, idx) => {
                      const Icon = sig.icon;
                      return (
                        <div key={idx} className="bg-[#030504]/60 rounded-xl py-2.5 border border-white/5">
                          <Icon className="w-4 h-4 text-[#8AD74C] mx-auto mb-1" />
                          <p className="font-mono text-xs font-bold text-[#F7F6F2]">{sig.val}</p>
                          <p className="font-mono text-[9px] text-[#A3B18A]">{sig.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs italic text-[#A3B18A]">{plant.emotion}</p>
                    <p className="text-[10px] font-mono text-[#A3B18A]">{plant.lastSeen}</p>
                  </div>

                  {plant.alert && (
                    <div className="flex items-center gap-2 text-xs text-[#E8D07C] bg-[#E8D07C]/10 rounded-lg px-3 py-2 border border-[#E8D07C]/20">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      {plant.alert} — consider running your humidifier
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'alerts' && (
            <div className="space-y-3">
              {alerts.length === 0 ? (
                <Card className="text-center py-16 text-[#A3B18A]">
                  <Bell className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">All plants are happy. No active alerts.</p>
                </Card>
              ) : (
                alerts.map((plant) => (
                  <Card key={plant.id} className="flex items-center gap-4 border-[#E8D07C]/30">
                    <AlertTriangle className="w-5 h-5 text-[#E8D07C] shrink-0" />
                    <div className="flex-1">
                      <p className="font-display font-bold text-[#F7F6F2]">{plant.nickname} — {plant.alert}</p>
                      <p className="text-xs text-[#A3B18A]">{plant.name} · {plant.lastSeen}</p>
                    </div>
                    <Badge variant="gold">VPD High</Badge>
                  </Card>
                ))
              )}
            </div>
          )}

          {activeTab === 'history' && (
            <Card className="py-16 text-center text-[#A3B18A]">
              <TrendingUp className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm">90-day bio-signal history charts — available in the Vriksh Vani app (Q4 2026).</p>
            </Card>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
