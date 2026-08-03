import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Droplets, Sun, Wind, Leaf } from 'lucide-react';

const guides = [
  {
    slug: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    family: 'Araceae',
    difficulty: 'Beginner Friendly',
    vpdRange: '0.8 – 1.2 kPa',
    temp: '20°C – 28°C',
    light: 'Bright Indirect',
    water: 'Every 7–10 days',
    icon: '🌿',
  },
  {
    slug: 'ficus-lyrata',
    name: 'Ficus Lyrata',
    family: 'Moraceae',
    difficulty: 'Intermediate',
    vpdRange: '0.9 – 1.4 kPa',
    temp: '18°C – 26°C',
    light: 'Bright Indirect to Direct',
    water: 'Every 5–7 days',
    icon: '🌳',
  },
  {
    slug: 'calathea-orbifolia',
    name: 'Calathea Orbifolia',
    family: 'Marantaceae',
    difficulty: 'Advanced',
    vpdRange: '0.5 – 0.9 kPa',
    temp: '22°C – 26°C',
    light: 'Low to Medium Indirect',
    water: 'Every 4–6 days',
    icon: '🌸',
  },
  {
    slug: 'sansevieria-trifasciata',
    name: 'Sansevieria Trifasciata',
    family: 'Asparagaceae',
    difficulty: 'Very Easy',
    vpdRange: '1.2 – 2.0 kPa',
    temp: '15°C – 32°C',
    light: 'Low to Bright',
    water: 'Every 14–21 days',
    icon: '🗡️',
  },
  {
    slug: 'phalaenopsis-orchid',
    name: 'Phalaenopsis Orchid',
    family: 'Orchidaceae',
    difficulty: 'Intermediate',
    vpdRange: '0.7 – 1.1 kPa',
    temp: '18°C – 24°C',
    light: 'Bright Indirect',
    water: 'Ice cube or weekly root soak',
    icon: '🌺',
  },
  {
    slug: 'pothos-epipremnum',
    name: 'Pothos (Epipremnum Aureum)',
    family: 'Araceae',
    difficulty: 'Very Easy',
    vpdRange: '0.8 – 1.3 kPa',
    temp: '18°C – 30°C',
    light: 'Low to Bright Indirect',
    water: 'Every 7–14 days',
    icon: '🍃',
  },
];

export default function CareGuidesPage() {
  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="lime">200+ Species Index</Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2]">
              Plant Care Guides.
            </h1>
            <p className="text-[#A3B18A] text-base md:text-lg">
              Science-backed care protocols for every species NIH-01 supports — VPD targets, light requirements, and seasonal adjustments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <Card key={g.slug} className="space-y-5">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-4xl">{g.icon}</span>
                    <h3 className="font-display text-xl font-bold text-[#F7F6F2] mt-2">{g.name}</h3>
                    <p className="text-xs font-mono text-[#A3B18A] italic">{g.family}</p>
                  </div>
                  <Badge variant={
                    g.difficulty === 'Very Easy' ? 'lime' :
                    g.difficulty === 'Beginner Friendly' ? 'lime' :
                    g.difficulty === 'Intermediate' ? 'gold' : 'glass'
                  }>
                    {g.difficulty}
                  </Badge>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                    <Wind className="w-3.5 h-3.5 text-[#8AD74C] shrink-0" />
                    <span className="text-[#A3B18A]">VPD Target</span>
                    <span className="ml-auto text-[#8AD74C]">{g.vpdRange}</span>
                  </div>
                  <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                    <Sun className="w-3.5 h-3.5 text-[#E8D07C] shrink-0" />
                    <span className="text-[#A3B18A]">Light</span>
                    <span className="ml-auto text-[#F7F6F2]">{g.light}</span>
                  </div>
                  <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                    <Droplets className="w-3.5 h-3.5 text-[#8AD74C] shrink-0" />
                    <span className="text-[#A3B18A]">Water</span>
                    <span className="ml-auto text-[#F7F6F2]">{g.water}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-3.5 h-3.5 text-[#E8D07C] shrink-0" />
                    <span className="text-[#A3B18A]">Temp</span>
                    <span className="ml-auto text-[#F7F6F2]">{g.temp}</span>
                  </div>
                </div>

                <Link href={`/care-guides/${g.slug}`}>
                  <Button variant="outline" className="w-full">View Full Care Guide →</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
