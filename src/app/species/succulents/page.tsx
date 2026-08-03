import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Succulents & Cacti Species — Vriksh Vani',
  description: 'VPD parameters and care profiles for 178 succulent and cacti species. Unique gas resistance baselines for low-watering plants.',
};

const species = [
  { latin: 'Echeveria elegans', common: 'Mexican Snowball', vpd: '1.0–2.5 kPa', humidity: '20–40%', temp: '15–30°C', care: 'Easy', confidence: 99 },
  { latin: 'Haworthia fasciata', common: 'Zebra Haworthia', vpd: '0.8–2.0 kPa', humidity: '20–50%', temp: '15–28°C', care: 'Easy', confidence: 98 },
  { latin: 'Aloe vera', common: 'Aloe Vera', vpd: '0.8–2.5 kPa', humidity: '20–40%', temp: '15–35°C', care: 'Beginner', confidence: 99 },
  { latin: 'Crassula ovata', common: 'Jade Plant', vpd: '0.6–2.0 kPa', humidity: '20–50%', temp: '10–28°C', care: 'Easy', confidence: 99 },
  { latin: 'Gymnocalycium mihanovichii', common: 'Moon Cactus', vpd: '1.0–3.0 kPa', humidity: '15–35%', temp: '18–32°C', care: 'Moderate', confidence: 95 },
  { latin: 'Sansevieria trifasciata', common: 'Snake Plant', vpd: '0.2–2.0 kPa', humidity: '20–60%', temp: '15–35°C', care: 'Beginner', confidence: 99 },
  { latin: 'Sedum morganianum', common: 'Donkey\'s Tail', vpd: '1.0–2.5 kPa', humidity: '20–40%', temp: '15–26°C', care: 'Easy', confidence: 96 },
];

export default function SucculentsSpeciesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌵</span>
              <div>
                <Badge variant="lime">Species Encyclopedia</Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2] mt-1">Succulents & Cacti — 178 Species</h1>
              </div>
            </div>
            <p className="text-[#A3B18A]">Low-VPD tolerant species with unique high gas resistance baselines. NIH-01 monitors gas resistance as the primary soil proxy for these drought-adapted species.</p>
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
            <Link href="/species/orchids"><Button variant="outline">Orchids →</Button></Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
