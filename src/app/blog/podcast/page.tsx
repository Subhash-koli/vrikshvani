import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Mic2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vriksh Vani Podcast — Plant Intelligence Conversations',
  description: 'The Vriksh Vani podcast: conversations with plant scientists, biophilic designers, urban ecologists, and AI engineers at the intersection of nature and technology.',
};

const episodes = [
  {
    ep: 'EP 08',
    title: 'The Future of Urban Biophilia with Dr. Stephen Kellert\'s Research Legacy',
    guest: 'Prof. Judith Heerwagen, USDA Forest Service',
    duration: '58 min',
    date: 'July 2026',
    summary: 'We revisit the foundational biophilia hypothesis and explore how plant intelligence technology is accelerating biophilic design adoption at scale.',
  },
  {
    ep: 'EP 07',
    title: 'On-Device AI for Plants: Lessons from Industrial IoT Deployed in Agriculture',
    guest: 'Raj Mohan, Principal Engineer, Bosch Sensortec',
    duration: '45 min',
    date: 'June 2026',
    summary: 'A deep conversation on edge AI deployment, sensor calibration drift, and what consumer plant devices can learn from precision agriculture.',
  },
  {
    ep: 'EP 06',
    title: 'What VPD Research Tells Us About the Future of Indoor Horticulture',
    guest: 'Dr. Francesco Ferrini, University of Florence',
    duration: '52 min',
    date: 'May 2026',
    summary: 'VPD as a universal plant language — how academic research is converging on vapour pressure deficit as the primary indoor plant health metric.',
  },
  {
    ep: 'EP 05',
    title: 'Founder Story: Building Vriksh Vani from a Bengaluru Apartment',
    guest: 'Subhash Koli, Founder & CEO, Vriksh Vani',
    duration: '38 min',
    date: 'April 2026',
    summary: 'The origin story — from the first FLIR camera prototype in a 300 sqft apartment to the NIH-01 launch.',
  },
];

export default function BlogPodcastPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mic2 className="w-8 h-8 text-[#8AD74C]" />
              <div>
                <Badge variant="lime">Podcast</Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2] mt-1">
                  Vriksh Vani Podcast
                </h1>
              </div>
            </div>
            <p className="text-[#A3B18A]">Conversations at the intersection of plant science, technology, and human wellbeing.</p>
          </div>

          <div className="space-y-5">
            {episodes.map((ep, idx) => (
              <Card key={idx} className="space-y-3 hover:border-[#8AD74C]/30 transition-all">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="font-mono text-xs font-bold text-[#8AD74C]">{ep.ep}</span>
                  <span className="text-xs font-mono text-[#A3B18A]">{ep.date} · {ep.duration}</span>
                </div>
                <h2 className="font-display text-lg font-bold text-[#F7F6F2]">{ep.title}</h2>
                <p className="text-sm font-mono text-[#A3B18A]">Guest: {ep.guest}</p>
                <p className="text-sm text-[#A3B18A] leading-relaxed">{ep.summary}</p>
                <Button variant="outline" size="sm">Listen Now →</Button>
              </Card>
            ))}
          </div>

          <Card className="p-6 flex flex-col md:flex-row items-center justify-between gap-4 border-[#8AD74C]/20">
            <div>
              <p className="font-display font-bold text-[#F7F6F2]">Subscribe to Vriksh Vani Podcast</p>
              <p className="text-sm text-[#A3B18A]">Available on Spotify, Apple Podcasts, and Google Podcasts.</p>
            </div>
            <div className="flex gap-3 flex-wrap shrink-0">
              <Button variant="outline" size="sm">Spotify</Button>
              <Button variant="outline" size="sm">Apple Podcasts</Button>
            </div>
          </Card>

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
