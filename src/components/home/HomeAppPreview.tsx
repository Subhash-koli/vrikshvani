'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Volume2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const VOICES = [
  {
    id: 'calm',
    label: 'Calm & Warm',
    text: '"Good morning! My stomata are open and transpiration is active. 🌿"',
  },
  {
    id: 'sci',
    label: 'Scientific Precision',
    text: '"Transpiration rate: 1.4 mmol/m²/s. Leaf surface temperature: 24.2°C. Stomatal status: Nominal."',
  },
  {
    id: 'playful',
    label: 'Playful & Curious',
    text: '"Hey there! A little morning light would be wonderful! ✨"',
  },
];

export const HomeAppPreview: React.FC = () => {
  const [activeVoice, setActiveVoice] = useState(0);

  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Description */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <Badge variant="lime">Mobile Ecosystem Concept</Badge>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
                Your garden&apos;s intelligence dashboard in your pocket.
              </h2>
              <p className="text-[#A3B18A] text-base leading-relaxed">
                The Vriksh Vani App vision for iOS and Android is designed to pair via Bluetooth 5.2. View transpiration estimates, customize voice personalities, and receive early care insights before visible plant stress occurs.
              </p>

              {/* Voice Personality Selector */}
              <div className="nidl-glass rounded-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#8AD74C]">Voice Synthesis Concept Demo</span>
                  <Volume2 className="w-4 h-4 text-[#8AD74C] animate-pulse" />
                </div>
                <p className="text-sm italic text-[#F7F6F2] min-h-[3rem] transition-opacity duration-300">
                  {VOICES[activeVoice].text}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {VOICES.map((voice, idx) => (
                    <button
                      key={voice.id}
                      onClick={() => setActiveVoice(idx)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                        activeVoice === idx
                          ? 'bg-[#3FAE2A] text-[#070B08]'
                          : 'bg-white/5 text-[#F7F6F2]/70 hover:bg-white/10'
                      }`}
                    >
                      {voice.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* iPhone Mockup Box */}
          <ScrollReveal direction="right" delay={100}>
            <div className="nidl-glass rounded-container p-8 relative flex items-center justify-center min-h-[450px]">
              <div className="w-64 h-[420px] bg-[#070B08] border-4 border-[#0F2B18] rounded-[40px] p-4 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                {/* Top Notch */}
                <div className="w-24 h-4 bg-[#0F2B18] rounded-full mx-auto mb-4" />
                
                {/* App UI Simulated Content */}
                <div className="space-y-4 text-center">
                  <div className="text-4xl">🪴</div>
                  <div className="font-display font-bold text-lg text-[#F7F6F2]">Monstera Deliciosa</div>
                  <Badge variant="lime">UI Wireframe Preview</Badge>

                  {/* Simulated Telemetry Graph */}
                  <div className="bg-[#0F2B18]/70 border border-white/10 rounded-xl p-3 space-y-2 text-left">
                    <div className="flex justify-between text-[10px] font-mono text-[#A3B18A]">
                      <span>Leaf Surface Temp</span>
                      <span className="text-[#8AD74C]">24.2°C (Simulated)</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#8AD74C] h-full w-[85%]" />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-[#A3B18A]">
                      <span>Vapor Deficit (VPD)</span>
                      <span className="text-[#E8D07C]">0.92 kPa</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Nav Bar */}
                <div className="pt-3 border-t border-white/10 flex justify-around text-xs text-[#A3B18A]">
                  <span className="text-[#8AD74C]">Dashboard</span>
                  <span>Species</span>
                  <span>Settings</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default HomeAppPreview;
