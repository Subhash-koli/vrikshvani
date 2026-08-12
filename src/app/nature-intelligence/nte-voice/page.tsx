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

          {/* Inference Pipeline */}
          <Card className="p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Conceptual Inference Pipeline</h2>
            </div>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Multivariate Sensor Fusion', desc: 'Targeting FLIR Lepton 3.5 for leaf surface temperature delta, combined with SHT41 humidity and BME688 gas resistance readings.' },
                { step: '02', title: 'Feature Vector Normalization', desc: 'Real-time features (VPD, thermal delta, gas resistance, time-of-day) are compiled into a normalized input tensor.' },
                { step: '03', title: 'On-Device TinyML Inference', desc: 'A quantized neural model running on the ESP32-S3 microcontroller evaluates biophysical stress and transpiration states.' },
                { step: '04', title: 'Natural Language Template Mapping', desc: 'The classified physiological state selects an appropriate natural language template tailored to the plant species and personality.' },
                { step: '05', title: 'Acoustic Voice Synthesis', desc: 'The selected utterance is rendered into audio output through the integrated acoustic speaker chamber.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-5 items-start">
                  <span className="font-mono text-sm font-bold text-[#8AD74C] shrink-0 w-8">{s.step}</span>
                  <div className="space-y-0.5">
                    <p className="font-display font-bold text-[#F7F6F2]">{s.title}</p>
                    <p className="text-sm text-[#A3B18A] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
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
