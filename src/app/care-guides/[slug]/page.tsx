import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, Droplets, Thermometer, Wind, Star } from 'lucide-react';

const guides: Record<string, {
  title: string; species: string; difficulty: string; light: string; water: string;
  humidity: string; vpdTarget: string; temp: string; desc: string;
  sections: { heading: string; content: string }[];
}> = {
  'monstera-deliciosa': {
    title: 'Monstera Deliciosa Care Guide', species: 'Monstera deliciosa',
    difficulty: 'Beginner', light: 'Bright indirect', water: 'Every 7–10 days',
    humidity: '60–80% RH', vpdTarget: '0.8–1.2 kPa', temp: '18–30°C',
    desc: 'The Swiss Cheese Plant — beloved for its dramatic fenestrated leaves and forgiving nature. Thrives with consistent VPD and bright indirect light.',
    sections: [
      { heading: 'Light', content: 'Bright indirect light for 6+ hours daily. East or north-facing windows are ideal. Tolerates lower light but grows significantly slower and fenestration is reduced. Direct afternoon sun scorches leaves.' },
      { heading: 'Watering', content: 'Water when the top 3–5cm of soil is dry. Monstera roots are sensitive to overwatering — soggy soil causes root rot rapidly. In winter, reduce frequency by 30–40%. Use room-temperature water; cold water causes leaf curl.' },
      { heading: 'VPD Target (NIH-01)', content: 'Ideal VPD: 0.8–1.2 kPa. Below 0.6 kPa, risk of fungal issues on broad leaves. Above 1.5 kPa, Monstera will show brown leaf tips as a stress signal. NIH-01 is designed to help interpret VPD excursions before visible stress occurs.' },
      { heading: 'Humidity & Temperature', content: 'Naturally from tropical rainforests; prefers 60–80% RH. Standard homes (40–50% RH) are acceptable but slower growth. Temperatures below 15°C causes cold stress; above 35°C triggers wilting.' },
      { heading: 'Fertilising', content: 'Feed monthly with balanced NPK (20-20-20) diluted to half strength during growing season (March–October). Skip in winter. Excess fertiliser causes brown leaf edges identical to underwatering stress.' },
      { heading: 'NIH-01 NTE™ Emotion States', content: 'Photosynthetic Joy (VPD 0.9–1.1 kPa): peak growing condition. Morning Awakening: normal morning transition. Parched & Yearning (VPD > 2.0 kPa): increase humidity immediately. Thermal Stress (leaf temp > 32°C): move away from direct sun.' },
    ],
  },
  'fiddle-leaf-fig': {
    title: 'Fiddle Leaf Fig Care Guide', species: 'Ficus lyrata',
    difficulty: 'Intermediate', light: 'Bright direct/indirect', water: 'Every 7 days (consistent)',
    humidity: '30–65% RH', vpdTarget: '0.8–1.5 kPa', temp: '16–24°C',
    desc: 'The architectural statement plant — dramatic, demanding, and deeply rewarding when its specific needs are met consistently.',
    sections: [
      { heading: 'Light', content: 'Needs 6+ hours of bright light. A south-facing window with filtered light is ideal. The Fiddle Leaf Fig\'s biggest enemy is inconsistency — never move it once it\'s settled in a spot it likes. Rotation for even growth should be slow (quarter turn per month maximum).' },
      { heading: 'Watering', content: 'The most common cause of Fiddle Leaf Fig death is inconsistent watering. Water thoroughly every 7 days in a strict schedule — more than temperature or humidity, consistency is the critical variable. Empty the drainage saucer within 30 minutes of watering.' },
      { heading: 'VPD Target (NIH-01)', content: 'Ideal VPD: 0.8–1.5 kPa. This species has low tolerance for extremes. A VPD above 1.8 kPa will trigger brown patches on leaf edges within 48 hours. NIH-01 is designed to help detect VPD excursions before leaf damage occurs.' },
      { heading: 'Humidity & Temperature', content: 'Moderate humidity (30–65% RH) is acceptable. Cold draughts are lethal — keep away from air conditioning vents and exterior doors in winter. The Fiddle Leaf Fig\'s root system is extremely sensitive to temperature drops below 16°C.' },
      { heading: 'Troubleshooting', content: 'Brown spots in the middle of leaves: root rot (overwatering). Brown crispy edges: too much direct sun or VPD too high. Yellow leaves: overwatering or poor drainage. Leaf drop: temperature shock or relocation stress.' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) return { title: 'Care Guide Not Found — Vriksh Vani' };
  return {
    title: `${guide.title} — Vriksh Vani`,
    description: guide.desc,
  };
}

export default async function CareGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) notFound();

  const stats = [
    { icon: Thermometer, label: 'Temperature', value: guide.temp },
    { icon: Droplets, label: 'Humidity', value: guide.humidity },
    { icon: Wind, label: 'VPD Target', value: guide.vpdTarget },
    { icon: Star, label: 'Difficulty', value: guide.difficulty },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <article className="pt-36 pb-24 px-4">
        <div className="max-w-3xl mx-auto space-y-10">

          <Link href="/care-guides" className="inline-flex items-center gap-2 text-sm text-[#A3B18A] hover:text-[#8AD74C] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All Care Guides
          </Link>

          <div className="space-y-4">
            <Badge variant="lime">Care Guide</Badge>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">{guide.title}</h1>
            <p className="text-base font-mono text-[#A3B18A] italic">{guide.species}</p>
            <p className="text-[#A3B18A] leading-relaxed">{guide.desc}</p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <Card key={i} className="text-center space-y-2 py-4">
                  <Icon className="w-5 h-5 text-[#8AD74C] mx-auto" />
                  <p className="text-xs font-mono text-[#A3B18A]">{s.label}</p>
                  <p className="text-sm font-bold text-[#F7F6F2]">{s.value}</p>
                </Card>
              );
            })}
          </div>

          {/* Guide sections */}
          <div className="space-y-8">
            {guide.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#F7F6F2] flex items-center gap-2">
                  <span className="w-1.5 h-6 rounded-full bg-[#8AD74C] inline-block" />
                  {section.heading}
                </h2>
                <p className="text-[#A3B18A] leading-relaxed pl-4">{section.content}</p>
              </div>
            ))}
          </div>

          <Card className="p-8 text-center border-[#8AD74C]/20 space-y-4">
            <p className="font-display text-xl font-bold text-[#F7F6F2]">Get Real-Time VPD Monitoring</p>
            <p className="text-sm text-[#A3B18A]">NIH-01 tracks your {guide.species.split(' ')[0]}\'s VPD, leaf temperature, and health score in real time — and tells you exactly what it needs.</p>
            <Link href="/product">
              <Button variant="primary">Join the Waitlist →</Button>
            </Link>
          </Card>
        </div>
      </article>
      <Footer />
    </main>
  );
}
