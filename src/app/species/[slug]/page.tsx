import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Thermometer, Wind, Droplets, Sun, Volume2, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface SpeciesData {
  name: string;
  scientificName: string;
  family: string;
  origin: string;
  idealVpd: string;
  idealTemp: string;
  humidityRange: string;
  recommendedPersonality: string;
  thermalSignature: string;
  careSummary: string;
  transpirationSensitivity: 'High' | 'Moderate' | 'Low';
  commonStressIndicators: string[];
}

const SPECIES_DB: Record<string, SpeciesData> = {
  'monstera-deliciosa': {
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa Liebm.',
    family: 'Araceae',
    origin: 'Tropical Forests of Southern Mexico & Central America',
    idealVpd: '0.80 – 1.15 kPa',
    idealTemp: '20°C – 30°C',
    humidityRange: '60% – 80%',
    recommendedPersonality: 'Playful & Curious',
    thermalSignature: 'Broad leaf surface creates pronounced evaporative cooling gradients across fenestrations.',
    careSummary: 'High transpiration volume requiring steady atmospheric humidity. Stomatal closure occurs rapidly below 45% relative humidity.',
    transpirationSensitivity: 'High',
    commonStressIndicators: ['Margin leaf browning (low VPD)', 'Guttation overload (root pressure)', 'Fenestration closure (light deficit)'],
  },
  'ficus-lyrata': {
    name: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata Warb.',
    family: 'Moraceae',
    origin: 'Lowland Tropical Rainforests of Western Africa',
    idealVpd: '0.90 – 1.30 kPa',
    idealTemp: '21°C – 29°C',
    humidityRange: '50% – 70%',
    recommendedPersonality: 'Scientific Precision',
    thermalSignature: 'Thick, leathery leaf cuticle yields distinct micro-thermal resilience against minor draft swings.',
    careSummary: 'Extremely sensitive to root zone moisture variance. Thermal stress spikes 48 hours prior to leaf shedding.',
    transpirationSensitivity: 'High',
    commonStressIndicators: ['Lower leaf shedding (thermal shock)', 'Edema reddish spots (moisture variance)', 'Stomatal freeze (cold draft)'],
  },
  'calathea-orbifolia': {
    name: 'Calathea Orbifolia',
    scientificName: 'Goeppertia orbifolia (Linden) Borchs.',
    family: 'Marantaceae',
    origin: 'Amazon Basin, Bolivia',
    idealVpd: '0.40 – 0.75 kPa',
    idealTemp: '18°C – 26°C',
    humidityRange: '70% – 90%',
    recommendedPersonality: 'Calm & Warm',
    thermalSignature: 'Ultra-thin leaf lamina exhibits immediate thermal spikes when vapor pressure deficit exceeds 0.90 kPa.',
    careSummary: 'Requires low VPD environment. Transpiration rates plummet and leaf rolling initiates if atmospheric moisture drops.',
    transpirationSensitivity: 'High',
    commonStressIndicators: ['Crisping leaf margins (high VPD)', 'Inward leaf rolling (transpiration emergency)', 'Fading striping (excess radiation)'],
  },
  'phalaenopsis-orchid': {
    name: 'Phalaenopsis Orchid',
    scientificName: 'Phalaenopsis blume',
    family: 'Orchidaceae',
    origin: 'Tropical Asia & Northern Australia',
    idealVpd: '0.70 – 1.10 kPa',
    idealTemp: '19°C – 28°C',
    humidityRange: '55% – 75%',
    recommendedPersonality: 'Meditative Zen',
    thermalSignature: 'CAM (Crassulacean Acid Metabolism) respiration means stomata open primarily at night, altering thermal patterns.',
    careSummary: 'Nighttime stomatal gas exchange requires cooler ambient thermal drop (3-5°C drop) to trigger flowering spikes.',
    transpirationSensitivity: 'Moderate',
    commonStressIndicators: ['Wrinkled velamen roots (dehydration)', 'Nighttime thermal stagnation (no temp drop)', 'Bud blast (VPD spike)'],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const species = SPECIES_DB[params.slug];
  if (!species) return { title: 'Species Not Found — Vriksh Vani' };

  return {
    title: `${species.name} (${species.scientificName}) Nature Intelligence Profile — Vriksh Vani`,
    description: `Biophysical transpiration profile, ideal VPD range (${species.idealVpd}), and thermal sensing guidelines for ${species.name}.`,
    openGraph: {
      title: `${species.name} Biophysical Profile — Vriksh Vani`,
      description: `Ideal VPD: ${species.idealVpd} · Recommended Voice: ${species.recommendedPersonality}`,
      url: `https://vrikshvani.com/species/${params.slug}`,
    },
  };
}

export default function SpeciesDetailPage({ params }: { params: { slug: string } }) {
  const species = SPECIES_DB[params.slug];
  if (!species) {
    notFound();
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      <section className="pt-36 pb-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 space-y-12">
          {/* Back Button */}
          <Link href="/species" className="inline-flex items-center gap-2 text-xs font-mono text-[#A3B18A] hover:text-[#8AD74C] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Species Encyclopedia
          </Link>

          {/* Header Block */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="lime">{species.family}</Badge>
              <span className="text-xs font-mono text-[#A3B18A]">Sensitivity: <strong className="text-[#E8D07C]">{species.transpirationSensitivity}</strong></span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#F7F6F2]">
              {species.name}
            </h1>
            <p className="text-lg font-mono italic text-[#8AD74C]">
              {species.scientificName}
            </p>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Native Habitat: {species.origin}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-2 border-[#8AD74C]/30 nidl-glass">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8AD74C]">
                <Wind className="w-4 h-4" /> Ideal VPD Target
              </div>
              <div className="text-2xl font-mono font-bold text-[#F7F6F2]">
                {species.idealVpd}
              </div>
            </Card>

            <Card className="p-6 space-y-2 border-[#E8D07C]/30 nidl-glass">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E8D07C]">
                <Thermometer className="w-4 h-4" /> Thermal Range
              </div>
              <div className="text-2xl font-mono font-bold text-[#F7F6F2]">
                {species.idealTemp}
              </div>
            </Card>

            <Card className="p-6 space-y-2 border-sky-400/30 nidl-glass">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                <Droplets className="w-4 h-4" /> Relative Humidity
              </div>
              <div className="text-2xl font-mono font-bold text-[#F7F6F2]">
                {species.humidityRange}
              </div>
            </Card>

            <Card className="p-6 space-y-2 border-emerald-400/30 nidl-glass">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Volume2 className="w-4 h-4" /> Recommended Voice
              </div>
              <div className="text-base font-display font-bold text-[#8AD74C]">
                {species.recommendedPersonality}
              </div>
            </Card>
          </div>

          {/* Detailed Biophysical Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Card className="lg:col-span-7 p-8 space-y-6 border-white/10 nidl-glass-dark">
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">
                Transpiration &amp; Thermal Profile
              </h2>
              <div className="space-y-4 text-sm text-[#A3B18A] leading-relaxed">
                <p><strong className="text-[#F7F6F2]">Thermal Signature:</strong> {species.thermalSignature}</p>
                <p><strong className="text-[#F7F6F2]">Care Biophysics:</strong> {species.careSummary}</p>
              </div>
            </Card>

            <Card className="lg:col-span-5 p-8 space-y-6 border-[#8AD74C]/20 nidl-glass-dark">
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">
                Early Warning Stress Indicators
              </h2>
              <ul className="space-y-3">
                {species.commonStressIndicators.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A3B18A]">
                    <CheckCircle2 className="w-4 h-4 text-[#8AD74C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* CTA */}
          <div className="p-8 rounded-card bg-[#0F2B18] border border-[#8AD74C]/40 text-center space-y-4">
            <h3 className="font-display text-2xl font-bold text-[#F7F6F2]">
              Monitor Your {species.name} with NIH-01
            </h3>
            <p className="text-sm text-[#A3B18A] max-w-xl mx-auto">
              Pre-loaded with calibrated transpiration thresholds for {species.name}. Receive gentle, spoken updates before leaf crisping or root stress begins.
            </p>
            <Link href="/waitlist" className="inline-block">
              <Button variant="primary" size="lg">Join Batch 01 Waitlist →</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
