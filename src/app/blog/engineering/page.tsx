import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Notes — Vriksh Vani Notes',
  description: 'Engineering notes from the Vriksh Vani project on embedded systems, edge AI, sensor fusion, and plant telemetry.',
};

const articles = [
  {
    slug: 'tinyml-quantization-esp32-s3',
    badge: 'Edge AI',
    title: 'How NTE™ Runs a Physiological State Classifier on ESP32-S3 Microcontrollers',
    excerpt: 'A technical exploration into the quantization and TensorFlow Lite Micro deployment pipeline that enables on-device inference with volatile SRAM privacy.',
    readTime: '15 min read',
    date: 'July 2026',
  },
  {
    slug: 'stomatal-conductance-flir-thermal',
    badge: 'Hardware',
    title: 'Sensor Fusion in NIH-01: Combining SHT41, BME688, and FLIR Lepton Telemetry',
    excerpt: 'NIH-01 architecture evaluates three heterogeneous sensor streams. Exploring how we align and normalize each signal for plant health evaluation.',
    readTime: '11 min read',
    date: 'June 2026',
  },
  {
    slug: 'soil-moisture-probes-vs-thermal',
    badge: 'Algorithms',
    title: 'The VPD Algorithm: From Raw Temperature and Humidity to Biophysical Insights',
    excerpt: 'The Magnus formula and leaf temperature compensation — how we compute accurate VPD from synchronized sensor readings.',
    readTime: '9 min read',
    date: 'May 2026',
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
                <Badge variant="lime">Engineering Notes</Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2] mt-1">
                  Hardware &amp; Embedded AI Notes
                </h1>
              </div>
            </div>
            <p className="text-[#A3B18A]">Architecture notes and embedded systems explorations from the Vriksh Vani project.</p>
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
              <Button variant="outline">← Back to All Notes</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
