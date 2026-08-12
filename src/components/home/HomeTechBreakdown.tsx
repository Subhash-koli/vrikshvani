import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Eye, Wind, Cpu, Lock } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const HomeTechBreakdown: React.FC = () => {
  const techCards = [
    {
      icon: Eye,
      title: 'FLIR Lepton 3.5 Sensor',
      badge: 'Planned Sensor',
      desc: '160x120 thermal resolution to measure leaf surface temperature dynamics non-invasively.',
    },
    {
      icon: Wind,
      title: 'Bosch BME688 Gas Sensor',
      badge: 'Planned Sensor',
      desc: 'Scans Volatile Organic Compounds (VOCs) and VSCs emitted during environmental or moisture stress.',
    },
    {
      icon: Cpu,
      title: 'ESP32-S3 TinyML Compute',
      badge: 'Design Target',
      desc: 'On-device neural inference designed to process biophysical stress states locally without cloud latency.',
    },
    {
      icon: Lock,
      title: 'Zero-Video SRAM Shield',
      badge: 'Privacy Standard',
      desc: 'Volatile RAM buffer overwrites thermal data in real-time. Zero video exfiltration by architecture design.',
    },
  ];

  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <Badge variant="lime">Hardware Architecture Vision</Badge>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
                Engineering Vision inside Handcrafted Ceramic.
              </h2>
            </div>
            <p className="text-[#A3B18A] text-sm md:text-base max-w-md">
              The NIH-01 concept pairs artisanal ceramic design with targeted thermal and environmental biometrics.
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
