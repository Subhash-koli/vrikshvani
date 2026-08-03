import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Orchids Species — Vriksh Vani',
  description: 'VPD parameters and care profiles for 94 orchid species. Precision humidity, temperature, and light requirements for epiphytic orchids.',
};

const species = [
  { latin: 'Phalaenopsis amabilis', common: 'Moth Orchid', vpd: '0.5–0.9 kPa', humidity: '50–70%', temp: '18–28°C', care: 'Moderate', confidence: 99 },
  { latin: 'Cattleya labiata', common: 'Corsage Orchid', vpd: '0.7–1.2 kPa', humidity: '50–70%', temp: '18–30°C', care: 'Demanding', confidence: 95 },
  { latin: 'Dendrobium nobile', common: 'Noble Dendrobium', vpd: '0.6–1.0 kPa', humidity: '50–80%', temp: '15–30°C', care: 'Moderate', confidence: 96 },
  { latin: 'Vanda tricolor', common: 'Tricolor Vanda', vpd: '0.8–1.4 kPa', humidity: '60–80%', temp: '20–35°C', care: 'Expert', confidence: 92 },
  { latin: 'Oncidium sphacelatum', common: 'Dancing Lady Orchid', vpd: '0.6–1.1 kPa', humidity: '55–75%', temp: '16–28°C', care: 'Moderate', confidence: 94 },
  { latin: 'Paphiopedilum insigne', common: 'Slipper Orchid', vpd: '0.4–0.8 kPa', humidity: '55–75%', temp: '15–25°C', care: 'Expert', confidence: 93 },
];

export default function OrchidsSpeciesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌸</span>
              <div>
                <Badge variant="lime">Species Encyclopedia</Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2] mt-1">Orchids — 94 Species</h1>
              </div>
            </div>
            <p className="text-[#A3B18A]">Epiphytic orchids require the most precise VPD management of any indoor plant category. NIH-01 provides real-time early warning for the temperature and humidity swings that trigger bud blast.</p>
          </div>
          <Card className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono text-[#A3B18A] uppercase tracking-wide">
                  <th className="text-left px-6 py-3">Scientific Name</th>
                  <th className="text-left px-6 py-3">Common Name</th>
                  <th className="text-left px-6 py-3">VPD Target</th>
                  <th className="text-left px-6 py-3">Humidity</th>
                  <th className="text-left px-6 py-3">Temp</th>
                  <th className="text-left px-6 py-3">Difficulty</th>
                  <th className="text-left px-6 py-3">Confidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {species.map((s, idx) => (
                  <tr key={idx} className="hover:bg-white/2 transition-colors">
                    <td className="px-6 py-3 text-sm italic text-[#F7F6F2]">{s.latin}</td>
                    <td className="px-6 py-3 text-sm text-[#A3B18A]">{s.common}</td>
                    <td className="px-6 py-3 text-sm font-mono text-[#8AD74C]">{s.vpd}</td>
                    <td className="px-6 py-3 text-sm font-mono text-[#A3B18A]">{s.humidity}</td>
                    <td className="px-6 py-3 text-sm font-mono text-[#A3B18A]">{s.temp}</td>
                    <td className="px-6 py-3 text-sm text-[#A3B18A]">{s.care}</td>
                    <td className="px-6 py-3 text-sm font-mono text-[#8AD74C]">{s.confidence}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <div className="flex gap-4 flex-wrap">
            <Link href="/species"><Button variant="outline">← All Categories</Button></Link>
            <Link href="/waitlist"><Button variant="primary">Reserve NIH-01 →</Button></Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
