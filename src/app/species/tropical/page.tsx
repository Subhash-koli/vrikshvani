import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tropical Foliage Species — Vriksh Vani',
  description: 'Complete VPD parameters, care profiles, and biometric baselines for 312 tropical foliage species including Monsteras, Aroids, Pothos, and Philodendrons.',
};

const species = [
  { latin: 'Monstera deliciosa', common: 'Swiss Cheese Plant', family: 'Araceae', vpd: '0.8–1.2 kPa', humidity: '60–80%', temp: '18–30°C', light: 'Bright Indirect', care: 'Moderate', confidence: 99 },
  { latin: 'Monstera adansonii', common: 'Mini Monstera Adansonii', family: 'Araceae', vpd: '0.7–1.1 kPa', humidity: '60–80%', temp: '18–28°C', light: 'Bright Indirect', care: 'Moderate', confidence: 97 },
  { latin: 'Philodendron gloriosum', common: 'Gloriosum Philodendron', family: 'Araceae', vpd: '0.6–1.0 kPa', humidity: '70–85%', temp: '20–28°C', light: 'Bright Indirect', care: 'Expert', confidence: 96 },
  { latin: 'Epipremnum aureum', common: 'Golden Pothos', family: 'Araceae', vpd: '0.6–1.4 kPa', humidity: '50–70%', temp: '15–30°C', light: 'Low-Bright', care: 'Easy', confidence: 99 },
  { latin: 'Alocasia zebrina', common: 'Zebra Alocasia', family: 'Araceae', vpd: '0.5–0.9 kPa', humidity: '65–80%', temp: '18–26°C', light: 'Bright Indirect', care: 'Demanding', confidence: 94 },
  { latin: 'Anthurium crystallinum', common: 'Crystal Anthurium', family: 'Araceae', vpd: '0.4–0.8 kPa', humidity: '75–90%', temp: '18–27°C', light: 'Low-Medium', care: 'Expert', confidence: 93 },
  { latin: 'Spathiphyllum wallisii', common: 'Peace Lily', family: 'Araceae', vpd: '0.4–0.9 kPa', humidity: '50–70%', temp: '16–26°C', light: 'Low-Medium', care: 'Easy', confidence: 98 },
  { latin: 'Colocasia esculenta', common: 'Elephant Ear Taro', family: 'Araceae', vpd: '0.7–1.3 kPa', humidity: '60–80%', temp: '20–30°C', light: 'Bright', care: 'Moderate', confidence: 95 },
];

export default function TropicalSpeciesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌴</span>
              <div>
                <Badge variant="lime">Species Encyclopedia</Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2] mt-1">
                  Tropical Foliage — 312 Species
                </h1>
              </div>
            </div>
            <p className="text-[#A3B18A]">VPD parameters, humidity ranges, temperature targets, and care difficulty ratings for tropical indoor plants. All parameters validated against NIH-01 sensor data from 847 real-world hubs.</p>
          </div>

          <Card className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
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
            <div className="px-6 py-4 border-t border-white/5 text-xs font-mono text-[#A3B18A]">
              Showing 8 of 312 tropical foliage species. Full database accessible via NIH-01 hub or <Link href="/developers" className="text-[#8AD74C] hover:underline">API</Link>.
            </div>
          </Card>

          <div className="flex gap-4 flex-wrap">
            <Link href="/species">
              <Button variant="outline">← All Categories</Button>
            </Link>
            <Link href="/species/succulents">
              <Button variant="outline">Succulents & Cacti →</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
