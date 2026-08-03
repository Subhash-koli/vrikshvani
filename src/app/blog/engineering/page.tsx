import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Articles — Vriksh Vani Blog',
  description: 'Engineering articles from the Vriksh Vani hardware and software team on embedded systems, edge AI, sensor fusion, and full-stack plant intelligence.',
};

const articles = [
  {
    slug: 'nte-voice-architecture',
    badge: 'Edge AI',
    title: 'How NTE™ Runs a 3-Axis Emotion Classifier in 256KB Flash on ARM Cortex-M4',
    excerpt: 'A technical deep-dive into the quantisation, pruning, and CMSIS-NN deployment pipeline that lets NTE™ run on bare metal without an operating system.',
    readTime: '15 min read',
    date: 'July 2026',
  },
  {
    slug: 'nih01-sensor-fusion',
    badge: 'Hardware',
    title: 'Sensor Fusion in NIH-01: Fusing SHT41, BME688, and FLIR Lepton Data in Real-Time',
    excerpt: 'NIH-01 processes three heterogeneous sensor streams simultaneously. This is the engineering story of how we align, normalise, and weight each signal for reliable plant health scoring.',
    readTime: '11 min read',
    date: 'June 2026',
  },
  {
    slug: 'vpd-explained',
    badge: 'Algorithms',
    title: 'The VPD Algorithm: From Raw Temperature and Humidity to Agronomic-Grade Accuracy',
    excerpt: 'The Magnus formula, Arden Buck correction, and leaf temperature compensation — how we compute accurate VPD from three sensor readings sampled at 1Hz.',
    readTime: '9 min read',
    date: 'May 2026',
  },
  {
    slug: 'nextjs-plant-dashboard',
    badge: 'Software',
    title: 'Building a Real-Time Plant Dashboard with Next.js 14, Prisma, and Neon Postgres',
    excerpt: 'The architecture decisions, streaming patterns, and edge deployment strategy behind the Vriksh Vani live dashboard — serving 100,000+ bio-signal events per day.',
    readTime: '13 min read',
    date: 'April 2026',
  },
];

export default function BlogEngineeringPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Cpu className="w-8 h-8 text-[#8AD74C]" />
              <div>
                <Badge variant="lime">Engineering</Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2] mt-1">
                  Engineering & Technical Articles
                </h1>
              </div>
            </div>
            <p className="text-[#A3B18A]">Under-the-hood engineering from the Vriksh Vani hardware and software team.</p>
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
