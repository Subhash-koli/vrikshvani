import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vriksh Vani Dispatch — Plant Science & Bio-Physics Research Blog',
  description: 'Read peer-reviewed research dispatches, hardware design stories, VPD science explainers, and plant care insights from the Vriksh Vani science team.',
};

const articles = [
  {
    slug: 'calathea-humidity-science',
    title: 'Why Calathea Are So Hard: The VPD Science Behind Tropical Drama Queens',
    author: 'Dr. Ramesh Varma',
    date: 'August 1, 2026',
    readTime: '7 min read',
    category: 'Bio-Physics',
    intro: 'Calathea have a reputation for being impossible. They\'re not. They simply require atmospheric precision that most home environments never accidentally provide.',
    featured: true,
  },
  {
    slug: 'root-zone-microbiome',
    title: 'The Root Zone Microbiome: What Soil Science Reveals About Indoor Plant Health',
    author: 'Karthik Subramanian',
    date: 'July 28, 2026',
    readTime: '9 min read',
    category: 'Soil Science',
    intro: 'The rhizosphere — the 2mm zone directly surrounding plant roots — contains more microbial diversity than anywhere else on Earth. Understanding it transforms how you grow.',
    featured: false,
  },
  {
    slug: 'designing-nih-01',
    title: 'Designing NIH-01: From First Sketch to Kiln-Fired Ceramic Hub',
    author: 'Siddhant Tiwari',
    date: 'July 20, 2026',
    readTime: '12 min read',
    category: 'Design & Craft',
    intro: 'Most tech hardware looks like it belongs in a data centre. We wanted something you\'d place next to your Monstera and feel proud of.',
    featured: false,
  },
  {
    slug: 'nte-voice-architecture',
    title: 'Inside NTE™: How We Taught Plants to Speak in 8 Languages',
    author: 'Siddhant Tiwari',
    date: 'May 8, 2026',
    readTime: '10 min read',
    category: 'AI / TinyML',
    intro: 'A deep-dive into the Neural Translation Engine — the quantized TinyML model that converts biometric telemetry into conversational plant speech.',
    featured: false,
  },
  {
    slug: 'flir-thermal-imaging',
    title: 'Why FLIR Thermal Imaging Beats Every Soil Sensor Ever Made',
    author: 'Karthik Subramanian',
    date: 'June 22, 2026',
    readTime: '6 min read',
    category: 'Hardware Engineering',
    intro: 'Soil sensors measure a proxy. Thermal leaf imaging measures the source. Here\'s why the difference is critical for rare plant survival.',
    featured: false,
  },
  {
    slug: 'vpd-explained',
    title: 'Vapour Pressure Deficit (VPD) Explained for Plant Parents',
    author: 'Dr. Ramesh Varma',
    date: 'July 14, 2026',
    readTime: '8 min read',
    category: 'Bio-Physics',
    intro: 'VPD is the single most important environmental variable governing whether your plant thrives or slowly declines. Understanding it changes everything.',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  'Bio-Physics': 'lime',
  'Hardware Engineering': 'gold',
  'AI / TinyML': 'lime',
  'Soil Science': 'gold',
  'Design & Craft': 'glass',
};

export default function BlogPage() {
  const featured = articles.find((a) => a.featured)!;
  const rest = articles.filter((a) => !a.featured);

  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-12 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <Badge variant="gold">Vriksh Vani Dispatch</Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2]">
            Botanical Science &amp; Bio-Physics Hub.
          </h1>
          <p className="text-[#A3B18A] text-base md:text-lg">
            Peer-reviewed research dispatches, hardware design stories, and plant care insights from the Vriksh Vani science team.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Featured Article */}
          <Link href={`/blog/${featured.slug}`} className="block group">
            <Card className="p-8 md:p-10 space-y-5 border-[#8AD74C]/20 hover:border-[#8AD74C]/50 transition-all duration-300">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant={categoryColors[featured.category] as 'lime' | 'gold' | 'glass'}>{featured.category}</Badge>
                <Badge variant="lime">✦ Featured</Badge>
              </div>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-[#A3B18A] text-base md:text-lg leading-relaxed max-w-3xl">{featured.intro}</p>
              <div className="flex items-center gap-6 text-xs font-mono text-[#A3B18A] flex-wrap">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" />{featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                <span>{featured.author}</span>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#8AD74C] group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </span>
            </Card>
          </Link>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="block group">
                <Card className="h-full flex flex-col space-y-4 hover:border-[#8AD74C]/30 transition-all duration-300">
                  <Badge variant={categoryColors[article.category] as 'lime' | 'gold' | 'glass'} className="w-fit">
                    {article.category}
                  </Badge>
                  <h3 className="font-display text-xl font-bold text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors leading-snug flex-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#A3B18A] leading-relaxed line-clamp-3">{article.intro}</p>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-[#A3B18A] flex-wrap mt-auto pt-2 border-t border-white/5">
                    <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" />{article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#8AD74C] group-hover:gap-2 transition-all">
                    Read → 
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
