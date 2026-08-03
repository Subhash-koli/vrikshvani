import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Search, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Species Encyclopedia — Vriksh Vani',
  description: 'Browse the Vriksh Vani species database: validated VPD parameters, care profiles, and biometric baselines for 847+ indoor plant species.',
};

const categories = [
  { name: 'Tropical Foliage', href: '/species/tropical', count: '312 species', emoji: '🌴', desc: 'Monsteras, Pothos, Aroids, Philodendrons, and more.' },
  { name: 'Succulents & Cacti', href: '/species/succulents', count: '178 species', emoji: '🌵', desc: 'Low-VPD tolerant species with unique gas resistance profiles.' },
  { name: 'Orchids', href: '/species/orchids', count: '94 species', emoji: '🌸', desc: 'Epiphytic orchids with precision humidity and temperature requirements.' },
  { name: 'Ferns & Mosses', href: '/species/ferns', count: '67 species', emoji: '🌿', desc: 'High-humidity species requiring constant VPD monitoring.' },
  { name: 'Mediterranean', href: '/species/mediterranean', count: '89 species', emoji: '🫒', desc: 'Drought-tolerant species including Lavender, Rosemary, and Olive.' },
  { name: 'Edible Herbs', href: '/species/herbs', count: '107 species', emoji: '🌱', desc: 'Culinary and medicinal herbs with precise watering profiles.' },
];

const featuredSpecies = [
  { name: 'Monstera deliciosa', common: 'Swiss Cheese Plant', vpd: '0.8–1.2 kPa', care: 'Moderate', confidence: 99 },
  { name: 'Ficus lyrata', common: 'Fiddle Leaf Fig', vpd: '0.6–1.0 kPa', care: 'Demanding', confidence: 98 },
  { name: 'Calathea orbifolia', common: 'Prayer Plant', vpd: '0.4–0.8 kPa', care: 'Expert', confidence: 97 },
  { name: 'Epipremnum aureum', common: 'Golden Pothos', vpd: '0.6–1.4 kPa', care: 'Easy', confidence: 99 },
  { name: 'Sansevieria trifasciata', common: 'Snake Plant', vpd: '0.2–2.0 kPa', care: 'Beginner', confidence: 99 },
  { name: 'Spathiphyllum wallisii', common: 'Peace Lily', vpd: '0.4–0.9 kPa', care: 'Easy', confidence: 98 },
];

export default function SpeciesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="lime">Species Encyclopedia</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              847 Species. Every Voice Mapped.
            </h1>
            <p className="text-[#A3B18A]">The Vriksh Vani species database contains validated VPD target ranges, care profiles, and biometric baselines for every supported plant.</p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3B18A]" />
              <input
                id="species-search"
                type="text"
                placeholder="Search by common name or scientific name..."
                className="w-full pl-12 pr-4 py-3 bg-[#0F2B18]/60 border border-white/10 rounded-2xl text-[#F7F6F2] placeholder-[#A3B18A] focus:outline-none focus:border-[#8AD74C]/50 focus:ring-1 focus:ring-[#8AD74C]/30 transition-all"
                readOnly
              />
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((c, idx) => (
              <Link key={idx} href={c.href}>
                <Card className="hover:border-[#8AD74C]/30 transition-all cursor-pointer group space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{c.emoji}</span>
                    <span className="text-xs font-mono text-[#8AD74C]">{c.count}</span>
                  </div>
                  <h2 className="font-display font-bold text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">{c.name}</h2>
                  <p className="text-sm text-[#A3B18A]">{c.desc}</p>
                </Card>
              </Link>
            ))}
          </div>

          {/* Featured species */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Leaf className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Featured Species</h2>
            </div>
            <Card className="divide-y divide-white/5">
              <div className="grid grid-cols-5 text-xs font-mono text-[#A3B18A] px-6 py-3 uppercase tracking-wide">
                <span className="col-span-2">Species</span>
                <span>VPD Target</span>
                <span>Difficulty</span>
                <span>Model Confidence</span>
              </div>
              {featuredSpecies.map((s, idx) => (
                <Link key={idx} href={`/care-guides/${s.name.toLowerCase().replace(' ', '-').replace(' ', '-')}`}>
                  <div className="grid grid-cols-5 items-center px-6 py-3 hover:bg-white/2 transition-colors gap-2">
                    <div className="col-span-2">
                      <p className="text-sm font-medium text-[#F7F6F2] italic">{s.name}</p>
                      <p className="text-xs font-mono text-[#A3B18A]">{s.common}</p>
                    </div>
                    <span className="text-sm font-mono text-[#8AD74C]">{s.vpd}</span>
                    <span className="text-sm text-[#A3B18A]">{s.care}</span>
                    <span className="text-sm font-mono text-[#8AD74C]">{s.confidence}%</span>
                  </div>
                </Link>
              ))}
            </Card>
          </div>

          <Card className="p-8 text-center border-[#8AD74C]/20 space-y-3">
            <p className="font-display text-xl font-bold text-[#F7F6F2]">Don&apos;t See Your Species?</p>
            <p className="text-sm text-[#A3B18A]">Submit a species request — our biophysics team reviews submissions weekly and typically adds validated parameters within 30 days.</p>
            <Button variant="primary">Submit Species Request →</Button>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
