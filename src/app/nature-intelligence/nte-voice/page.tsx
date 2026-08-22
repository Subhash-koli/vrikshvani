import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Mic, Brain, Cpu, Waves, Globe, Volume2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NTE™ Neural Translation Engine Concept — Vriksh Vani Voice System',
  description: 'Deep-dive into the Neural Translation Engine concept: exploring INT8 quantized TinyML models on ESP32-S3 to convert plant biometrics into conversational speech.',
};

const languages = ['English', 'Hindi', 'Tamil', 'Kannada', 'Telugu', 'Spanish', 'French', 'German'];
const emotions = [
  { name: 'Photosynthetic Joy 🌿', trigger: 'Optimal VPD + bright light + root zone healthy', sample: '"My leaves are catching the light comfortably right now. Transpiration is optimal."' },
  { name: 'Transpiration Fatigue 🌡️', trigger: 'VPD > 1.6 kPa, leaf temp elevated +1.2°C', sample: '"The air feels dry today. Stomatal conductance is decreasing."' },
  { name: 'Gentle Thirst 💧', trigger: 'Substrate moisture low, gas resistance rising', sample: '"Sub-surface moisture is diminishing. A gentle watering would be beneficial."' },
  { name: 'Root Activity Mode 🪴', trigger: 'Root zone temp optimal, moisture balanced', sample: '"Active root respiration observed. Growing conditions are favorable."' },
  { name: 'Morning Awakening ☀️', trigger: 'Light intensity rising after dark period', sample: '"Morning light detected. Photosynthetic cycle is initiating."' },
  { name: 'Conservation Rest 🌧️', trigger: 'Atmospheric pressure drop + low light', sample: '"Low ambient light and pressure shift. Energy conservation state active."' },
];

export default function NteVoicePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="lime">NTE™ AI Translation Concept</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Nature Translation Engine™
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              A custom quantized neural translation model concept designed to run on-device &mdash; translating biophysical sensor telemetry into natural, human-friendly insights.
            </p>
          </div>

          {/* Architecture Concept Targets */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: '<50ms', label: 'Target Inference Latency', icon: Waves, color: 'text-[#8AD74C]' },
              { val: '8', label: 'Target Language Profiles', icon: Globe, color: 'text-[#8AD74C]' },
              { val: 'On-Device', label: 'Local TinyML Compute', icon: Brain, color: 'text-[#E8D07C]' },
              { val: 'Zero Video', label: 'Volatile SRAM Privacy', icon: Volume2, color: 'text-[#E8D07C]' },
            ].map((s, idx) => {
              const Icon = s.icon;
              return (
                <Card key={idx} className="text-center py-6 space-y-2">
                  <Icon className={`w-6 h-6 ${s.color} mx-auto`} />
                  <p className={`font-display text-2xl font-bold ${s.color}`}>{s.val}</p>
                  <p className="text-xs font-mono text-[#A3B18A]">{s.label}</p>
                </Card>
              );
            })}
          </div>

          {/* 5-Layer Scientific Confidence & Explanation Architecture */}
          <Card className="p-8 border-[#8AD74C]/30 bg-[#0F2B18]/40 space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono text-[#8AD74C] font-bold uppercase tracking-widest">
                Scientific Confidence Architecture
              </span>
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">
                From Biophysical Observation to Explanatory Voice
              </h2>
              <p className="text-xs text-[#A3B18A]">
                NTE™ never makes absolute claims &mdash; every spoken output is rooted in signal observation, inference, and explicit confidence scores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#070B08] border border-white/10 text-center space-y-1">
                <span className="text-[10px] font-mono text-[#E8D07C] font-bold">01 · OBSERVED</span>
                <p className="text-xs font-bold text-[#F7F6F2]">Sensor Signals</p>
                <p className="text-[10px] font-mono text-[#A3B18A]">T<sub>leaf</sub> 24.2°C · VPD 0.92 kPa · RH 58%</p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B08] border border-white/10 text-center space-y-1">
                <span className="text-[10px] font-mono text-[#8AD74C] font-bold">02 · INFERENCE</span>
                <p className="text-xs font-bold text-[#F7F6F2]">Physiological State</p>
                <p className="text-[10px] font-mono text-[#A3B18A]">Possible Water Stress Signature</p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B08] border border-[#8AD74C]/30 text-center space-y-1">
                <span className="text-[10px] font-mono text-[#8AD74C] font-bold">03 · CONFIDENCE</span>
                <p className="text-sm font-mono font-bold text-[#8AD74C]">74% Score</p>
                <p className="text-[10px] font-mono text-[#A3B18A]">Bayesian Model Weight</p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B08] border border-white/10 text-center space-y-1">
                <span className="text-[10px] font-mono text-[#E8D07C] font-bold">04 · EXPLANATION</span>
                <p className="text-xs font-bold text-[#F7F6F2]">Biophysical Cause</p>
                <p className="text-[10px] font-mono text-[#A3B18A]">Elevated leaf temp relative to room baseline</p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B08] border border-emerald-400/40 text-center space-y-1">
                <span className="text-[10px] font-mono text-emerald-400 font-bold">05 · NTE™ VOICE</span>
                <p className="text-xs font-bold text-[#F7F6F2]">Natural Speech</p>
                <p className="text-[10px] italic text-[#A3B18A]">&ldquo;My leaves are warmer than usual...&rdquo;</p>
              </div>
            </div>
          </Card>

          {/* Full NTE Inference Pipeline */}
          <Card className="p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Full Conceptual Inference Pipeline</h2>
            </div>
            <p className="text-xs text-[#A3B18A] leading-relaxed">
              NTE&apos;s architecture is designed to never produce absolute claims. Every output passes through confidence scoring, species context, and environmental context before reaching natural language.
            </p>
            <div className="space-y-3">
              {[
                { step: '01', title: 'Biological Signal Capture', desc: 'FLIR Lepton 3.5 thermal array + BME688 gas resistance + SHT41 T/RH baseline.', color: 'text-[#E8D07C]' },
                { step: '02', title: 'Signal Validation', desc: 'Sensor health check, drift compensation, noise floor analysis.', color: 'text-[#E8D07C]' },
                { step: '03', title: 'Feature Extraction', desc: 'VPD computation, thermal delta, MOX resistance normalization, time-series windowing.', color: 'text-[#8AD74C]' },
                { step: '04', title: 'Biophysical Interpretation', desc: 'TinyML model evaluates candidate physiological states: stomatal behaviour, hydration stress, thermal equilibrium.', color: 'text-[#8AD74C]' },
                { step: '05', title: 'Confidence / Uncertainty', desc: 'Bayesian confidence scoring. Model outputs probability distribution across candidate states.', color: 'text-purple-400' },
                { step: '06', title: 'Species Context', desc: 'Species-specific VPD ranges, thermal tolerance windows, and seasonal patterns applied.', color: 'text-sky-400' },
                { step: '07', title: 'Environmental Context', desc: 'Time of day, ambient light history, recent weather changes, seasonal acclimatisation.', color: 'text-sky-400' },
                { step: '08', title: 'Plant History', desc: 'Historical sensor patterns, baseline drift, prior stress events, watering history.', color: 'text-sky-400' },
                { step: '09', title: 'NTE Translation', desc: 'Biophysical state + confidence + context → natural language template selection.', color: 'text-[#8AD74C]' },
                { step: '10', title: 'Human Language Output', desc: 'Selected template rendered with species-appropriate hedging and confidence framing.', color: 'text-[#8AD74C]' },
                { step: '11', title: 'Recommended Observation', desc: 'Suggested human verification actions: "Check soil moisture" or "Observe leaf posture."', color: 'text-[#E8D07C]' },
                { step: '12', title: 'Responsible Care', desc: 'Context-aware care suggestion with explicit uncertainty acknowledgment.', color: 'text-[#E8D07C]' },
              ].map((s) => (
                <div key={s.step} className="flex gap-5 items-start">
                  <span className={`font-mono text-sm font-bold ${s.color} shrink-0 w-8`}>{s.step}</span>
                  <div className="space-y-0.5">
                    <p className="font-display font-bold text-[#F7F6F2]">{s.title}</p>
                    <p className="text-sm text-[#A3B18A] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Confidence-Annotated Example */}
          <Card className="p-8 border-[#8AD74C]/30 bg-[#0F2B18]/30 space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono text-[#8AD74C] font-bold uppercase tracking-widest">
                Confidence-Annotated Voice Example
              </span>
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">
                What NTE™ actually says vs. what you might expect
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-red-400/5 border border-red-400/20 space-y-3">
                <span className="text-xs font-mono text-red-400 font-bold">❌ WHAT NTE DOES NOT SAY</span>
                <p className="text-sm text-[#F7F6F2] italic">&ldquo;Your plant is thirsty! Water it now!&rdquo;</p>
                <p className="text-xs text-[#A3B18A]">No confidence. No uncertainty. No species context. Assumes causation from correlation.</p>
              </div>
              <div className="p-5 rounded-xl bg-[#8AD74C]/5 border border-[#8AD74C]/20 space-y-3">
                <span className="text-xs font-mono text-[#8AD74C] font-bold">✓ WHAT NTE ACTUALLY SAYS</span>
                <p className="text-sm text-[#F7F6F2] italic">&ldquo;The current thermal pattern is consistent with increased transpiration stress. Confidence: 78%. I recommend observing leaf posture and checking root-zone moisture before watering.&rdquo;</p>
                <p className="text-xs text-[#A3B18A]">Hedged language. Explicit confidence. Observational verification. Respects species context.</p>
              </div>
            </div>
          </Card>

          {/* Language Support Vision */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Multilingual Voice Target</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {languages.map((lang, idx) => (
                <Card key={idx} className="text-center py-4 border-[#8AD74C]/20">
                  <p className="font-display font-bold text-[#F7F6F2]">{lang}</p>
                  <p className="text-xs font-mono text-[#8AD74C]">Target Profile</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Emotion Gallery */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Mic className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Sample Physiological State Interpretations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emotions.map((e, idx) => (
                <Card key={idx} className="space-y-3">
                  <p className="font-display font-bold text-[#F7F6F2]">{e.name}</p>
                  <p className="text-xs text-[#A3B18A]"><strong className="text-[#8AD74C]">Biophysical Trigger:</strong> {e.trigger}</p>
                  <p className="text-sm text-[#F7F6F2] italic border-l-2 border-[#8AD74C] pl-3 leading-relaxed">{e.sample}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 text-center border-[#8AD74C]/30 space-y-4">
            <p className="font-display text-2xl font-bold text-[#F7F6F2]">Join the Early Research Cohort.</p>
            <p className="text-sm text-[#A3B18A]">Be part of our prototype validation program and help refine the NTE™ plant voice model.</p>
            <Link href="/waitlist">
              <Button variant="primary" size="lg">Join Research Waitlist →</Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
