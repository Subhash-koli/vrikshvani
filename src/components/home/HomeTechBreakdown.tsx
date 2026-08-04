import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Eye, Wind, Zap, Lock } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const HomeTechBreakdown: React.FC = () => {
  const techCards = [
    {
      icon: Eye,
      title: 'FLIR Lepton 3.5 Sensor',
      badge: 'Thermal Array',
      desc: '160x120 thermal resolution measures stomatal cooling dynamics with 0.05°C accuracy.',
    },
    {
      icon: Wind,
      title: 'Bosch BME688 Gas Sensor',
      badge: 'Quad-Gas Engine',
      desc: 'Scans Volatile Organic Compounds (VOCs) and VSCs emitted during pest or humidity stress.',
    },
    {
      icon: Zap,
      title: 'ARM Cortex-M4 TinyML NPU',
      badge: '45ms Latency',
      desc: 'Quantized neural network classifies biophysical stress states locally without cloud delay.',
    },
    {
      icon: Lock,
      title: 'Zero-Video SRAM Shield',
      badge: '100% Privacy',
      desc: 'Volatile RAM frame buffer overwrites thermal data 20 times per second. Zero video exfiltration.',
    },
  ];

  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <Badge variant="lime">Hardware Architecture</Badge>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
                Engineering Excellence inside Handcrafted Ceramic.
              </h2>
            </div>
            <p className="text-[#A3B18A] text-sm md:text-base max-w-md">
              The NIH-01 pairs artisanal ceramic craftsmanship with enterprise thermal and chemical biometrics.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCards.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <ScrollReveal key={idx} stagger={idx}>
                <Card className="flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#8AD74C]" />
                      </div>
                      <Badge variant="glass">{tech.badge}</Badge>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#F7F6F2]">{tech.title}</h3>
                    <p className="text-xs text-[#A3B18A] leading-relaxed">{tech.desc}</p>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeTechBreakdown;
