import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Droplets, Sun, Wind, Leaf, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// Static species data — in production this queries Prisma species table
const speciesData: Record<string, {
  name: string; family: string; origin: string; icon: string; difficulty: string;
  vpdRange: string; idealTemp: string; light: string; water: string; humidity: string;
  soil: string; toxicity: string; growth: string;
  careSteps: string[]; commonMistakes: string[]; funFact: string;
}> = {
  'monstera-deliciosa': {
    name: 'Monstera Deliciosa', family: 'Araceae', origin: 'Tropical Mexico & Central America', icon: '🌿',
    difficulty: 'Beginner Friendly', vpdRange: '0.8 – 1.2 kPa', idealTemp: '20°C – 28°C',
    light: 'Bright Indirect — 2–4m from east or west window', water: 'Every 7–10 days, allow top 5cm to dry',
    humidity: '50–70% Relative Humidity', soil: 'Chunky aroid mix — perlite, bark, coco coir',
    toxicity: '⚠️ Toxic to cats and dogs', growth: 'Fast in spring-summer, slow in winter',
    careSteps: [
      'Place 1–3m from an east or west-facing window. Avoid direct afternoon sun which burns fenestrated leaves.',
      'Water thoroughly when the top 5cm of substrate is dry. Empty saucers after 30 minutes to prevent root rot.',
      'Maintain VPD between 0.8–1.2 kPa. NIH-01 will alert you if transpiration stress is detected.',
      'Feed monthly in spring and summer with a balanced 20-20-20 liquid fertiliser at half strength.',
      'Support the aerial roots with a coconut coir moss pole to encourage larger, more fenestrated leaves.',
      'Repot every 2 years into a pot 5–8cm wider when roots emerge from drainage holes.',
    ],
    commonMistakes: [
      'Overwatering: yellowing lower leaves and mushy stems indicate root rot',
      'Low humidity: brown leaf edge crisp indicates VPD too high — mist or use a humidifier',
      'Too little light: small, unfenestrated leaves indicate insufficient photons',
      'Root bound stress: stunted growth and wilting despite adequate watering',
    ],
    funFact: 'The fenestrations (holes) in Monstera leaves are theorised to allow high-wind airflow in tropical storms, preventing the leaf from acting as a sail and breaking off.',
  },
  'ficus-lyrata': {
    name: 'Ficus Lyrata', family: 'Moraceae', origin: 'Western Africa (Guinea, Sierra Leone)', icon: '🌳',
    difficulty: 'Intermediate', vpdRange: '0.9 – 1.4 kPa', idealTemp: '18°C – 26°C',
    light: 'Bright Indirect to 2–3 hours direct morning sun', water: 'Every 5–7 days in growth season',
    humidity: '35–65% Relative Humidity', soil: 'Well-draining potting mix with 20% perlite',
    toxicity: '⚠️ Toxic to cats and dogs (latex sap)', growth: 'Moderate — 30–60cm per year in good conditions',
    careSteps: [
      'Position in the brightest spot available — directly beside a north or east-facing window.',
      'Do NOT move once positioned. Ficus Lyrata drops leaves dramatically when relocated.',
      'Water when the top third of the pot is dry. Consistency is key — irregular watering causes leaf drop.',
      'Wipe large leaves monthly with a damp cloth to remove dust and maximise photosynthetic efficiency.',
      'NIH-01 thermal monitoring will detect early transpiration stress before visible leaf drop occurs.',
    ],
    commonMistakes: [
      'Moving the plant: Fiddle Leaf Figs hate being relocated — always results in leaf drop',
      'Inconsistent watering: alternate wet-dry cycles cause root shock',
      'Cold drafts: positioning near air conditioning vents causes dramatic leaf loss',
      'Overwatering: brown spots starting at leaf centre indicate root rot, not underwatering',
    ],
    funFact: 'Ficus Lyrata leaves grow up to 45cm long and 30cm wide in their natural habitat, where they compete for forest floor light patches in West African rainforests.',
  },
  'calathea-orbifolia': {
    name: 'Calathea Orbifolia', family: 'Marantaceae', origin: 'Bolivia, South America', icon: '🌸',
    difficulty: 'Advanced', vpdRange: '0.5 – 0.9 kPa', idealTemp: '22°C – 26°C',
    light: 'Low to Medium Indirect — no direct sun ever', water: 'Every 4–6 days, filtered or rainwater only',
    humidity: '60–80% Relative Humidity', soil: 'Moisture-retentive peat-free mix with added orchid bark',
    toxicity: '✅ Non-toxic to cats and dogs', growth: 'Slow — 1–2 new leaves per month in optimal conditions',
    careSteps: [
      'Place away from any windows that receive direct sun. A north-facing position is ideal.',
      'Only use filtered, rainwater, or distilled water — Calathea Orbifolia is sensitive to fluoride in tap water.',
      'Maintain humidity above 60% at all times. Use a pebble tray, group with other plants, or run a humidifier.',
      'Target VPD between 0.5–0.9 kPa. NIH-01 will alert you the moment humidity drops dangerously low.',
      'Feed monthly in spring and summer only — at quarter strength. Never fertilise in winter.',
    ],
    commonMistakes: [
      'Tap water: fluoride causes brown leaf tips — always use filtered or rainwater',
      'Low humidity: the #1 cause of Calathea failure — VPD above 1.0 kPa causes rapid leaf necrosis',
      'Direct sun: causes immediate bleaching and irreversible leaf burn',
      'Cold temperatures: Calathea collapse rapidly below 18°C',
    ],
    funFact: 'Calathea Orbifolia performs nyctinasty — its leaves fold upward at night and open in the morning, a motion driven by changes in water pressure in specialised cells called pulvini.',
  },
  'sansevieria-trifasciata': {
    name: 'Sansevieria Trifasciata', family: 'Asparagaceae', origin: 'West Africa (Nigeria to Congo)', icon: '🗡️',
    difficulty: 'Very Easy', vpdRange: '1.2 – 2.0 kPa', idealTemp: '15°C – 32°C',
    light: 'Low to Bright — thrives in almost any light condition', water: 'Every 14–21 days; less in winter',
    humidity: '25–55% Relative Humidity — tolerates dry air well', soil: 'Cactus/succulent mix with extra perlite for fast drainage',
    toxicity: '⚠️ Toxic to cats and dogs (saponins)', growth: 'Very slow — a few new leaves per growing season',
    careSteps: [
      'Place anywhere from bright indirect light to low-light corners — Sansevieria tolerates all.',
      'Water only when the substrate is completely dry throughout the pot. When in doubt, wait 5 more days.',
      'Do not mist or increase humidity — this plant evolved in arid conditions and prefers dry air.',
      'NIH-01 VOC monitoring helps detect root rot onset — elevated gas readings indicate overwatering damage.',
      'Repot very rarely — Sansevieria actually prefer being root-bound and bloom more readily when restricted.',
    ],
    commonMistakes: [
      'Overwatering: the single most common cause of Sansevieria death — root rot is irreversible once advanced',
      'Cold damage: temperatures below 10°C cause mushy, translucent leaves',
      'Wrong soil: standard potting mix retains too much moisture — always use free-draining cactus mix',
    ],
    funFact: 'NASA\'s Clean Air Study found Sansevieria to be one of the most effective plants at removing formaldehyde, xylene, toluene, and benzene from indoor air.',
  },
  'phalaenopsis-orchid': {
    name: 'Phalaenopsis Orchid', family: 'Orchidaceae', origin: 'Southeast Asia & Northern Australia', icon: '🌺',
    difficulty: 'Intermediate', vpdRange: '0.7 – 1.1 kPa', idealTemp: '18°C – 24°C',
    light: 'Bright Indirect — east or shaded south-facing window', water: 'Weekly root soak or ice cube method',
    humidity: '50–70% Relative Humidity', soil: 'Orchid bark chip mix — never standard potting soil',
    toxicity: '✅ Non-toxic to cats and dogs', growth: 'Blooms once or twice per year, 8–12 weeks of bloom',
    careSteps: [
      'Place near an east-facing window — Phalaenopsis need bright indirect light to rebloom but no direct sun.',
      'Water weekly by submerging the pot in water for 15 minutes, then drain completely. Never leave roots in standing water.',
      'NIH-01 thermal monitoring detects root zone temperature, alerting when conditions are ideal for bloom spike initiation.',
      'To trigger reblooming, expose to a 5°C temperature drop at night for 4–6 weeks in autumn.',
      'Trim flower spikes to a node after blooming — this can trigger a second bloom flush.',
    ],
    commonMistakes: [
      'Bark decomposition: potting bark breaks down after 18–24 months and must be replaced',
      'Crown rot: water pooling in the crown (centre of leaves) causes rapid bacterial rot — always water from below',
      'Too much fertiliser: orchids are light feeders — use diluted "weakly, weekly" approach',
    ],
    funFact: 'Phalaenopsis orchids are epiphytes in nature — they grow on tree branches, not in soil. Their roots are photosynthetically active (green) and need light and airflow.',
  },
  'pothos-epipremnum': {
    name: 'Pothos (Epipremnum Aureum)', family: 'Araceae', origin: 'French Polynesia (Mo\'orea)', icon: '🍃',
    difficulty: 'Very Easy', vpdRange: '0.8 – 1.3 kPa', idealTemp: '18°C – 30°C',
    light: 'Low to Bright Indirect — one of the most light-adaptable houseplants', water: 'Every 7–14 days, allow top half to dry',
    humidity: '40–70% Relative Humidity', soil: 'Standard potting mix — highly undemanding',
    toxicity: '⚠️ Toxic to cats and dogs (calcium oxalate crystals)', growth: 'Fast — can grow 30–40cm per month in good conditions',
    careSteps: [
      'Position anywhere from low-light rooms to bright indirect light. Variegated varieties need more light to maintain leaf patterning.',
      'Allow the top 50% of the substrate to dry before watering. Pothos tolerate brief drought better than overwatering.',
      'Trail along shelves or train up a moss pole — aerial roots attach readily to moist surfaces.',
      'Propagate easily in water — cut below a node and roots emerge within 2 weeks.',
      'NIH-01 VPD monitoring helps maintain the 0.8–1.3 kPa range that produces fastest, healthiest growth.',
    ],
    commonMistakes: [
      'Overwatering: yellowing leaves starting from lower stems indicate root rot onset',
      'Insufficient light for variegated varieties: heavily variegated leaves revert to solid green without adequate light',
      'Pot too large: oversized pots hold excess moisture and accelerate root rot risk',
    ],
    funFact: 'Pothos were used in NASA\'s Biosphere 2 experiment for their exceptional CO₂ absorption and rapid biomass production in closed ecological systems.',
  },
};


export function generateStaticParams() {
  return Object.keys(speciesData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const species = speciesData[params.slug];
  if (!species) return { title: 'Care Guide Not Found — Vriksh Vani' };
  return {
    title: `${species.name} Care Guide — VPD ${species.vpdRange} | Vriksh Vani`,
    description: `Complete ${species.name} care protocol: VPD target ${species.vpdRange}, temperature ${species.idealTemp}, light and watering guide. Monitored with NIH-01 thermal biometrics.`,
    openGraph: {
      title: `${species.name} Care Guide — Vriksh Vani`,
      description: `Science-backed ${species.name} care: VPD ${species.vpdRange}, ${species.difficulty}. Powered by NIH-01 Nature Intelligence Hub.`,
      url: `https://www.vrikshvani.com/care-guides/${params.slug}`,
    },
  };
}

export default function CareGuidePage({ params }: { params: { slug: string } }) {
  const species = speciesData[params.slug];

  if (!species) {
    return (
      <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
        <Header />
        <div className="pt-48 pb-24 text-center">
          <h1 className="font-display text-4xl font-bold text-[#F7F6F2]">Care Guide Not Found</h1>
          <Link href="/care-guides" className="mt-8 inline-block">
            <Button variant="outline">← Back to Care Guides</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <article className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          {/* Hero */}
          <div className="space-y-4">
            <Link href="/care-guides">
              <span className="text-xs font-mono text-[#8AD74C] hover:underline cursor-pointer">← Plant Care Index</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-5xl">{species.icon}</span>
              <div>
                <Badge variant="lime">{species.difficulty}</Badge>
                <h1 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2] mt-2">{species.name}</h1>
                <p className="text-xs font-mono text-[#A3B18A] italic mt-1">{species.family} · Native to {species.origin}</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Wind, label: 'VPD Target', val: species.vpdRange, color: 'text-[#8AD74C]' },
              { icon: Sun, label: 'Light', val: species.light.split('—')[0].trim(), color: 'text-[#E8D07C]' },
              { icon: Droplets, label: 'Watering', val: species.water.split(',')[0], color: 'text-[#8AD74C]' },
              { icon: Leaf, label: 'Temperature', val: species.idealTemp, color: 'text-[#E8D07C]' },
            ].map((s, idx) => {
              const Icon = s.icon;
              return (
                <Card key={idx} className="text-center space-y-2 py-5">
                  <Icon className={`w-5 h-5 ${s.color} mx-auto`} />
                  <p className={`text-xs font-mono font-bold ${s.color}`}>{s.val}</p>
                  <p className="text-[10px] font-mono text-[#A3B18A] uppercase tracking-wider">{s.label}</p>
                </Card>
              );
            })}
          </div>

          {/* Care Steps */}
          <Card className="p-8 space-y-5">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Step-by-Step Care Protocol</h2>
            <div className="space-y-4">
              {species.careSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="font-mono text-sm font-bold text-[#8AD74C] shrink-0 w-6">{String(idx + 1).padStart(2, '0')}</span>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Common Mistakes */}
          <Card className="p-8 space-y-5 border-[#E8D07C]/20">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Common Care Mistakes</h2>
            </div>
            <div className="space-y-3">
              {species.commonMistakes.map((mistake, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <AlertTriangle className="w-4 h-4 text-[#E8D07C] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{mistake}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Fun Fact */}
          <Card className="p-8 border-[#8AD74C]/30 space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#8AD74C]" />
              <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Nature Intelligence Fact</h3>
            </div>
            <p className="text-sm text-[#A3B18A] leading-relaxed italic">"{species.funFact}"</p>
          </Card>

          {/* NIH-01 CTA */}
          <Card className="p-8 text-center border-[#8AD74C]/30 space-y-4">
            <h3 className="font-display text-2xl font-bold text-[#F7F6F2]">
              Monitor Your {species.name.split(' ')[0]} with NIH-01.
            </h3>
            <p className="text-sm text-[#A3B18A]">Real-time VPD, thermal biometrics, and voice alerts — all configured for {species.name} out of the box.</p>
            <Link href="/waitlist">
              <Button variant="primary" size="lg">Pre-Order Founding Unit →</Button>
            </Link>
          </Card>
        </div>
      </article>
      <Footer />
    </main>
  );
}
