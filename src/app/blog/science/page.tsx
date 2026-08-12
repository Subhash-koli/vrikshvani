import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { FlaskConical } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Science Notes — Vriksh Vani Notes',
  description: 'Scientific notes from the Vriksh Vani project on plant biophysics, VPD modelling, thermal imaging, and on-device neural inference.',
};

const articles = [
  {
    slug: 'stomatal-conductance-flir-thermal',
    badge: 'Plant Science',
    title: 'What Is VPD — And Why Is It the Key Metric in Plant Biophysics?',
    excerpt: 'Vapour Pressure Deficit governs transpiration, nutrient uptake, and stomatal behaviour. An exploration into the biophysics of VPD.',
    readTime: '8 min read',
    date: 'July 2026',
    author: 'Subhash Koli, Founder',
  },
  {
    slug: 'soil-moisture-probes-vs-thermal',
    badge: 'Hardware Science',
    title: 'Why NIH-01 Explores Thermal Optics Over Traditional Soil Moisture Probes',
    excerpt: 'Soil moisture sensors measure a single point in a substrate. Thermal imaging observes the leaf surface temperature of the plant — the direct biophysical signal.',
    readTime: '6 min read',
    date: 'June 2026',
    author: 'Subhash Koli, Founder',
  },
  {
    slug: 'tinyml-quantization-esp32-s3',
    badge: 'AI & Engineering',
    title: 'Building NTE™: Exploring Plant Voice Translation on ESP32-S3 Microcontrollers',
    excerpt: 'The Nature Translation Engine model is designed to run directly on edge hardware. Exploring how a quantized emotion classifier operates locally with zero cloud dependence.',
    readTime: '12 min read',
    date: 'May 2026',
    author: 'Subhash Koli, Founder',
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
                <Badge variant="lime">Science Notes</Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2] mt-1">
                  Plant Science &amp; Research Notes
                </h1>
              </div>
            </div>
            <p className="text-[#A3B18A]">Open research notes and biophysics deep-dives from the Vriksh Vani project.</p>
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
              <Button variant="outline">← Back to All Notes</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
