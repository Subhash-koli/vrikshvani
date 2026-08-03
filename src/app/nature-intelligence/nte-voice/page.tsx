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
  title: 'NTE™ Neural Translation Engine — Vriksh Vani Voice System',
  description: 'Deep-dive into the Neural Translation Engine: INT8 quantized TinyML model running on ARM Cortex-M4, converting plant biometrics into conversational speech in 8 languages.',
};

const languages = ['English', 'Hindi', 'Tamil', 'Kannada', 'Telugu', 'Spanish', 'French', 'German'];
const emotions = [
  { name: 'Photosynthetic Joy 🌿', trigger: 'Optimal VPD + bright light + root zone healthy', sample: '"My leaves are catching the light perfectly right now. I feel alive."' },
  { name: 'Transpiration Fatigue 🌡️', trigger: 'VPD > 1.6 kPa, leaf temp elevated +1.2°C', sample: '"The air feels very dry today. My stomata are beginning to close."' },
  { name: 'Gentle Thirst 💧', trigger: 'Substrate dry > 80%, gas resistance rising', sample: '"I\'m beginning to draw down my reserves. Water would be welcome."' },
  { name: 'Root Exploration Mode 🪴', trigger: 'Root zone temp optimal, substrate recently watered', sample: '"My roots are very active today. I can feel myself reaching further."' },
  { name: 'Morning Awakening ☀️', trigger: 'Light intensity rising after dark period', sample: '"The light is returning. I\'m beginning the day\'s work."' },
  { name: 'Stormy Rest 🌧️', trigger: 'Atmospheric pressure drop + low light', sample: '"Something in the air has shifted. I\'m conserving my energy today."' },
];

export default function NteVoicePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="lime">NTE™ v2.1 · 45ms Latency</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Neural Translation Engine™
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              A custom INT8 quantized neural network running entirely on-device — no cloud, no internet, no audio streaming. Your plant&apos;s voice is generated in under 45 milliseconds.
            </p>
          </div>

          {/* Architecture Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: '45ms', label: 'Inference-to-Speech', icon: Waves, color: 'text-[#8AD74C]' },
              { val: '8', label: 'Languages Supported', icon: Globe, color: 'text-[#8AD74C]' },
              { val: '64', label: 'Emotional State Classes', icon: Brain, color: 'text-[#E8D07C]' },
              { val: '44.1kHz', label: 'Audio Output Quality', icon: Volume2, color: 'text-[#E8D07C]' },
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
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Inference Pipeline</h2>
            </div>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Sensor Fusion', desc: 'FLIR Lepton 3.5 provides leaf surface temperature delta. BME688 provides ambient temperature, humidity, pressure, and quad-gas resistance. Time-of-day and season are appended to the feature vector.' },
                { step: '02', title: 'Feature Extraction', desc: '12 real-time features are normalised and packed into an INT8 input tensor: VPD, leaf temp delta, gas resistance, pressure trend, humidity trend, light proxy, species ID, time-of-day, day-of-year, and 3 rolling averages.' },
                { step: '03', title: 'NTE™ Neural Network Inference', desc: 'The INT8 quantized neural network (ARM Cortex-M4 NPU) runs inference in under 8ms, classifying the input into one of 64 emotional state classes with a confidence score.' },
                { step: '04', title: 'Speech Template Selection', desc: 'The top-confidence emotional state class selects a language-appropriate speech template from a library of 20–40 curated human-written utterances per language per emotional class.' },
                { step: '05', title: 'WaveNet-Lite Synthesis', desc: 'The selected template text is synthesised into 44.1kHz audio using our on-device WaveNet-Lite voice model. Personality modulation (warmth, pitch, cadence) is applied per plant profile.' },
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

          {/* Language Support */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">8 Languages, 1 Device</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {languages.map((lang, idx) => (
                <Card key={idx} className="text-center py-4 border-[#8AD74C]/20">
                  <p className="font-display font-bold text-[#F7F6F2]">{lang}</p>
                  <p className="text-xs font-mono text-[#8AD74C]">✓ On-Device</p>
                </Card>
              ))}
            </div>
            <p className="text-xs text-[#A3B18A]">Additional languages planned: Marathi, Bengali, Japanese, Mandarin — Batch 02.</p>
          </div>

          {/* Emotion Gallery */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Mic className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Sample Emotional States</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emotions.map((e, idx) => (
                <Card key={idx} className="space-y-3">
                  <p className="font-display font-bold text-[#F7F6F2]">{e.name}</p>
                  <p className="text-xs text-[#A3B18A]"><strong className="text-[#8AD74C]">Triggered by:</strong> {e.trigger}</p>
                  <p className="text-sm text-[#F7F6F2] italic border-l-2 border-[#8AD74C] pl-3 leading-relaxed">{e.sample}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 text-center border-[#8AD74C]/30 space-y-4">
            <p className="font-display text-2xl font-bold text-[#F7F6F2]">Hear It For Yourself.</p>
            <p className="text-sm text-[#A3B18A]">The NTE™ voice is available exclusively on the NIH-01 hub. Reserve a Batch 01 founding unit to experience plant speech.</p>
            <Link href="/waitlist">
              <Button variant="primary" size="lg">Pre-Order NIH-01 →</Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
