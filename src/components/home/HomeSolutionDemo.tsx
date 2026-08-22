'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Sparkles, Volume2, Cpu, Activity, Waves, Thermometer, Wind, Info } from 'lucide-react';

const PERSONALITIES = [
  {
    id: 'CALM_WARM',
    label: 'Calm & Warm Profile',
    inference: 'Optimal Transpiration Homeostasis',
    confidence: '94% Confidence',
    signals: 'Leaf thermal delta -1.8°C · VPD 0.85 kPa · Humidity 58% · Baseline MOX 185 kΩ',
    voice: '"My leaves are slightly cooler than the room air and ambient humidity is steady. Transpiration is operating peacefully, though I may enjoy a gentle sip of room-temperature water later this afternoon."',
    emotion: 'Photosynthetic Serenity 🌿',
    healthScore: 98,
    metrics: { temp: '23.4°C', vpd: '0.85 kPa', humidity: '58%', gas: '185 kΩ' },
  },
  {
    id: 'WATER_STRESS',
    label: 'Water Stress Hypothesis',
    inference: 'Possible Water Stress Signature',
    confidence: '74% Confidence',
    signals: 'Leaf thermal delta +0.6°C · VPD 1.45 kPa · Relative Humidity 34% · MOX 142 kΩ',
    voice: '"My leaves are warmer than usual and my surrounding air is relatively dry. I may be experiencing mild water stress as my stomata constrict to preserve moisture."',
    emotion: 'Transpiration Stress Response 🌡️',
    healthScore: 78,
    metrics: { temp: '25.6°C', vpd: '1.45 kPa', humidity: '34%', gas: '142 kΩ' },
  },
  {
    id: 'SCIENTIFIC_PRECISION',
    label: 'Scientific Precision',
    inference: 'Stomatal Conductance State',
    confidence: '98% Confidence',
    signals: 'Leaf thermal delta -1.6°C · VPD 0.82 kPa · Humidity 62% · Baseline MOX 198 kΩ',
    voice: '"Stomatal conductance is estimated at 94% efficiency. Transpiration rate is optimal within target VPD parameters. Current soil moisture reserve is at an estimated 42% capacity."',
    emotion: 'Optimal Homeostasis 📊',
    healthScore: 99,
    metrics: { temp: '22.8°C', vpd: '0.82 kPa', humidity: '62%', gas: '198 kΩ' },
  },
  {
    id: 'MEDITATIVE_ZEN',
    label: 'High Humidity Equilibrium',
    inference: 'Low VPD Transpiration Rest',
    confidence: '91% Confidence',
    signals: 'Leaf thermal delta -0.4°C · VPD 0.52 kPa · Humidity 72% · Baseline MOX 210 kΩ',
    voice: '"Ambient air humidity is high and evaporative demand is low. Stomata rest in gentle equilibrium with the room."',
    emotion: 'Deep Biophysical Equilibrium 🧘',
    healthScore: 96,
    metrics: { temp: '22.1°C', vpd: '0.52 kPa', humidity: '72%', gas: '210 kΩ' },
  },
];

export const HomeSolutionDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = PERSONALITIES[activeTab];
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVoice = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 4000);
  };

  return (
    <section className="py-24 bg-[#0F2B18]/30 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#8AD74C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10 space-y-16">

        {/* Nature Intelligence Journey Strip */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-0 text-center">
              {[
                { label: 'Signals', question: 'What is happening?', color: 'text-[#E8D07C]', bg: 'bg-[#E8D07C]/10', border: 'border-[#E8D07C]/20' },
                { label: 'Interpretation', question: 'What could it mean?', color: 'text-[#8AD74C]', bg: 'bg-[#8AD74C]/10', border: 'border-[#8AD74C]/20' },
                { label: 'Understanding', question: 'Why is it happening?', color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20' },
                { label: 'Connection', question: 'What does this tell us?', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
                { label: 'Care', question: 'What should we do?', color: 'text-[#8AD74C]', bg: 'bg-[#8AD74C]/10', border: 'border-[#8AD74C]/20' },
              ].map((stage, i) => (
                <div key={stage.label} className="flex items-center flex-1 min-w-0">
                  <div className={`flex-1 p-3 ${stage.bg} border ${stage.border} ${i === 0 ? 'rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none' : ''} ${i === 4 ? 'rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none' : ''}`}>
                    <p className={`font-mono text-[10px] font-bold uppercase tracking-wider ${stage.color}`}>{stage.label}</p>
                    <p className="text-[10px] text-[#A3B18A] mt-0.5 leading-tight">{stage.question}</p>
                  </div>
                  {i < 4 && <span className="text-white/20 text-xs px-0.5 hidden sm:block">→</span>}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="lime" className="gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Concept Preview · Nature Translation Engine™
            </Badge>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F7F6F2] leading-tight">
              From raw thermal biometrics to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AD74C] via-[#E8D07C] to-[#3FAE2A]">
                natural human speech.
              </span>
            </h2>

            <p className="text-[#A3B18A] text-base sm:text-lg leading-relaxed">
              An interactive demonstration of how NIH-01 is designed to translate invisible leaf micro-climates into clear plant voice interpretations.
            </p>
          </div>
        </ScrollReveal>

        {/* Scientific Framing Banner */}
        <ScrollReveal delay={50}>
          <div className="max-w-3xl mx-auto p-4 rounded-xl bg-[#070B08]/80 border border-[#8AD74C]/20 flex items-start gap-3 text-xs text-[#A3B18A] leading-relaxed">
            <Info className="w-4 h-4 text-[#8AD74C] shrink-0 mt-0.5" />
            <span>
              <strong className="text-[#F7F6F2]">How NTE™ Works:</strong> Vriksh Vani doesn&apos;t literally make plants speak in human words. It measures biological signals (thermal shifts, VPD, VOCs), uses AI to interpret biophysical stress, and presents that interpretation in natural language.
            </span>
          </div>
        </ScrollReveal>

        {/* Personality Selector Tabs */}
        <ScrollReveal delay={100}>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {PERSONALITIES.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050] text-white font-bold scale-105'
                    : 'bg-[#040E06]/20 text-[#A3B18A] hover:text-[#F7F6F2] border border-white/10 hover:border-[#7EC840]/40'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Interactive Demo Grid */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Raw Sensor Signals */}
            <Card className="lg:col-span-5 p-8 border-white/10 space-y-6 flex flex-col justify-between nidl-glass">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-[#8AD74C]" />
                    <span className="text-xs font-mono uppercase text-[#F7F6F2] font-bold tracking-wider">
                      Simulated Sensor Telemetry
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#E8D07C]">
                    <span className="w-2 h-2 rounded-full bg-[#E8D07C] animate-pulse" />
                    CONCEPT DEMO
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#070B08]/60 border border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#A3B18A]">
                      <Thermometer className="w-3.5 h-3.5 text-[#E8D07C]" /> Leaf Temp
                    </div>
                    <div className="text-lg font-mono font-bold text-[#F7F6F2]">
                      {current.metrics.temp}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#070B08]/60 border border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#A3B18A]">
                      <Wind className="w-3.5 h-3.5 text-[#8AD74C]" /> Computed VPD
                    </div>
                    <div className="text-lg font-mono font-bold text-[#8AD74C]">
                      {current.metrics.vpd}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#070B08]/60 border border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#A3B18A]">
                      <Waves className="w-3.5 h-3.5 text-sky-400" /> Relative Humidity
                    </div>
                    <div className="text-lg font-mono font-bold text-[#F7F6F2]">
                      {current.metrics.humidity}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#070B08]/60 border border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#A3B18A]">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" /> VOC Resistance
                    </div>
                    <div className="text-lg font-mono font-bold text-[#F7F6F2]">
                      {current.metrics.gas}
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Score Pill */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#A3B18A]">Sample Transpiration Index</span>
                <span className="text-sm font-mono font-bold text-[#8AD74C] bg-[#0F2B18] px-3 py-1 rounded-full border border-[#8AD74C]/30">
                  {current.healthScore}/100 Illustrative
                </span>
              </div>
            </Card>

            {/* Right: Translated Voice Card */}
            <Card className="lg:col-span-7 p-8 border-[#8AD74C]/30 space-y-6 flex flex-col justify-between nidl-glass-hover bg-gradient-to-br from-[#0F2B18]/80 to-[#070B08]/90">
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="lime" className="text-xs">
                      {current.inference}
                    </Badge>
                    <span className="text-xs font-mono font-bold text-[#E8D07C] bg-[#E8D07C]/10 px-2 py-0.5 rounded border border-[#E8D07C]/30">
                      {current.confidence}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#A3B18A]">
                    Profile: <strong className="text-[#F7F6F2]">{current.label}</strong>
                  </span>
                </div>

                {/* Signals Observed Box */}
                <div className="p-3 rounded-xl bg-[#030504] border border-white/10 text-xs font-mono text-[#A3B18A] flex flex-wrap items-center justify-between gap-2">
                  <span>Signals Observed:</span>
                  <span className="text-[#8AD74C] font-semibold">{current.signals}</span>
                </div>

                {/* Simulated Voice Output Box */}
                <div className="p-6 rounded-2xl bg-[#070B08]/80 border border-[#8AD74C]/20 relative space-y-4 shadow-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#8AD74C]/20 border border-[#8AD74C] flex items-center justify-center shrink-0">
                      <Volume2 className={`w-5 h-5 text-[#8AD74C] ${isPlaying ? 'animate-bounce' : ''}`} />
                    </div>
                    <p className="text-base sm:text-lg font-display text-[#F7F6F2] leading-relaxed italic">
                      &ldquo;{current.voice}&rdquo;
                    </p>
                  </div>

                  {/* Waveform Visualization Bar */}
                  <div className="h-8 flex items-center justify-center gap-1 pt-2">
                    {[40, 70, 25, 90, 60, 30, 80, 100, 45, 65, 85, 35, 95, 50, 75, 40].map((h, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full bg-[#8AD74C] transition-all duration-300 ${
                          isPlaying ? 'animate-pulse' : 'opacity-40'
                        }`}
                        style={{ height: isPlaying ? `${h}%` : '20%' }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Play Demo Button */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePlayVoice}
                  disabled={isPlaying}
                  className="px-5 py-2.5 rounded-xl font-display font-bold text-xs text-white flex items-center gap-2 transition-all duration-300
                             bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050]
                             hover:from-[#051A02] hover:via-[#3FAE2A] hover:to-[#D0FF60]"
                >
                  <Volume2 className="w-4 h-4" />
                  {isPlaying ? 'Playing Voice Sample...' : 'Listen to Voice Concept (Simulated)'}
                </button>
                <span className="text-[11px] font-mono text-[#A3B18A] hidden sm:inline-block">
                  On-device TinyML Concept
                </span>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HomeSolutionDemo;
