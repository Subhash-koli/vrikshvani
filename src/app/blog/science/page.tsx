import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { FlaskConical } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Science Articles — Vriksh Vani Blog',
  description: 'Deep-dive scientific articles from the Vriksh Vani research team on plant biophysics, VPD modelling, thermal imaging, and on-device neural inference.',
};

const articles = [
  {
    slug: 'vpd-explained',
    badge: 'Plant Science',
    title: 'What Is VPD — And Why Is It the Most Important Metric You\'ve Never Heard Of?',
    excerpt: 'Vapour Pressure Deficit governs transpiration, nutrient uptake, and stomatal behaviour. Every plant care decision you make is implicitly a VPD decision. Here is the science.',
    readTime: '8 min read',
    date: 'July 2026',
    author: 'Dr. Priya Nair, Head of Plant Biophysics',
  },
  {
    slug: 'flir-thermal-imaging',
    badge: 'Hardware Science',
    title: 'Why NIH-01 Uses a FLIR Thermal Camera — Not a Soil Moisture Sensor',
    excerpt: 'Soil moisture sensors measure a single point in a substrate. A FLIR-grade thermal camera measures the leaf surface temperature of the entire plant — the real signal of stress.',
    readTime: '6 min read',
    date: 'June 2026',
    author: 'Subhash Koli, Founder & CTO',
  },
  {
    slug: 'nte-voice-architecture',
    badge: 'AI & Engineering',
    title: 'Building NTE™: How We Trained a Plant Emotion Model on an ARM Cortex-M4 NPU',
    excerpt: 'The Nature-to-Emotion translation model runs entirely on the NIH-01 edge hardware. This is the story of how we built a 3-axis emotion classifier that fits in 256KB of flash.',
    readTime: '12 min read',
    date: 'May 2026',
    author: 'Arjun Mehta, ML Engineering Lead',
  },
  {
    slug: 'plant-circadian-rhythms',
    badge: 'Plant Science',
    title: 'Plants Have Circadian Rhythms Too — And NIH-01 Can Track Them',
    excerpt: 'Plants regulate their stomatal behaviour, transpiration rate, and even their immune response according to a 24-hour internal clock. NIH-01 captures this in real time.',
    readTime: '7 min read',
    date: 'April 2026',
    author: 'Dr. Priya Nair, Head of Plant Biophysics',
  },
  {
    slug: 'gas-resistance-soil-proxy',
    badge: 'Sensor Science',
    title: 'Gas Resistance as a Root Zone Health Proxy: The Science Behind NIH-01\'s Soil Sensing',
    excerpt: 'BME688 gas resistance readings correlate with volatile organic compound emissions from soil microbiomes. This is how we detect overwatering days before the plant shows symptoms.',
    readTime: '9 min read',
    date: 'March 2026',
    author: 'Vikram Iyer, Hardware Engineering',
  },
  {
    slug: 'biophilic-office-design',
    badge: 'Research',
    title: 'The Evidence for Biophilic Office Design: What the Research Actually Says',
    excerpt: 'A meta-analysis of 67 peer-reviewed studies on indoor plants and workplace wellbeing, productivity, and stress reduction — and what it means for enterprise plant care.',
    readTime: '10 min read',
    date: 'February 2026',
    author: 'Ananya Krishnamurthy, Research Analyst',
  },
];

export default function BlogSciencePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FlaskConical className="w-8 h-8 text-[#8AD74C]" />
              <div>
                <Badge variant="lime">Science</Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2] mt-1">
                  Plant Science & Research Articles
                </h1>
              </div>
            </div>
            <p className="text-[#A3B18A]">Peer-reviewed insights and technical deep-dives from the Vriksh Vani research team.</p>
          </div>

          <div className="space-y-5">
            {articles.map((a, idx) => (
              <Link key={idx} href={`/blog/${a.slug}`}>
                <Card className="hover:border-[#8AD74C]/30 transition-all cursor-pointer group space-y-3">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <Badge variant="outline">{a.badge}</Badge>
                    <span className="text-xs font-mono text-[#A3B18A]">{a.date} · {a.readTime}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">{a.title}</h2>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{a.excerpt}</p>
                  <p className="text-xs font-mono text-[#A3B18A]">{a.author}</p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button variant="outline">← Back to All Articles</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
