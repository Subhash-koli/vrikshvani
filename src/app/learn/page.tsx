import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BookOpen, Wind, Leaf, Brain, FlaskConical, BookMarked, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Learn — Explore Nature Intelligence | Vriksh Vani',
  description: 'Your knowledge hub for Nature Intelligence. Explore VPD science, species profiles, research notes, plant signals, and the glossary of Nature Intelligence terminology.',
  alternates: {
    canonical: 'https://www.vrikshvani.com/learn',
  },
  openGraph: {
    title: 'Learn — Explore Nature Intelligence | Vriksh Vani',
    description: 'Educational resources for understanding plant biophysics, Nature Intelligence, and living systems.',
    url: 'https://www.vrikshvani.com/learn',
  },
};

const LEARN_CARDS = [
  {
    title: 'VPD Guide',
    desc: 'Understanding Vapour Pressure Deficit — the key environmental metric for transpiration.',
    href: '/vpd-guide',
    icon: Wind,
    color: 'text-[#8AD74C]',
    border: 'border-[#8AD74C]/30',
    status: 'LIVE',
  },
  {
    title: 'Species Library',
    desc: 'Plant profiles with species-specific VPD targets, care intelligence, and biophysical context.',
    href: '/species',
    icon: Leaf,
    color: 'text-[#E8D07C]',
    border: 'border-[#E8D07C]/30',
    status: 'LIVE',
  },
  {
    title: 'Research Notes',
    desc: 'Published research methodology from Vriksh Vani benchtop experiments and literature reviews.',
    href: '/nature-intelligence/research',
    icon: FlaskConical,
    color: 'text-purple-400',
    border: 'border-purple-400/30',
    status: 'LIVE',
  },
  {
    title: 'Glossary',
    desc: 'Nature Intelligence terminology: VPD, NTE, NIOS, MOX, TinyML, and more — explained clearly.',
    href: '/glossary',
    icon: BookMarked,
    color: 'text-sky-400',
    border: 'border-sky-400/30',
    status: 'LIVE',
  },
  {
    title: 'Plant Signals',
    desc: 'How thermal patterns, gas exchanges, and environmental responses reveal plant physiological states.',
    href: '/nature-intelligence/what-is-ni',
    icon: Brain,
    color: 'text-[#8AD74C]',
    border: 'border-[#8AD74C]/30',
    status: 'LIVE',
  },
  {
    title: 'Field Guides',
    desc: 'Practical observation guides for reading plant signals in your home or garden. Coming soon.',
    href: '#',
    icon: BookOpen,
    color: 'text-[#A3B18A]',
    border: 'border-white/10',
    status: 'COMING SOON',
  },
];

export default function LearnPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <Badge variant="lime" className="gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Knowledge Hub
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Explore Nature Intelligence
            </h1>
            <p className="text-[#A3B18A] text-lg leading-relaxed">
              Learn how plants communicate through biological signals, how Nature Intelligence works, and why understanding living systems matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEARN_CARDS.map((card) => {
              const Icon = card.icon;
              const isComingSoon = card.status === 'COMING SOON';
              return (
                <Link href={card.href} key={card.title} className={isComingSoon ? 'pointer-events-none opacity-60' : ''}>
                  <Card className={['p-6 h-full space-y-4 hover:border-[#8AD74C]/30 transition-all group cursor-pointer', card.border].join(' ')}>
                    <div className="flex items-center justify-between">
                      <Icon className={['w-6 h-6', card.color].join(' ')} />
                      <span className={['text-xs font-mono font-bold px-2 py-0.5 rounded border', isComingSoon ? 'text-[#A3B18A] bg-white/5 border-white/10' : 'text-[#8AD74C] bg-[#8AD74C]/10 border-[#8AD74C]/30'].join(' ')}>{card.status}</span>
                    </div>
                    <h2 className="font-display text-xl font-bold text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">{card.title}</h2>
                    <p className="text-sm text-[#A3B18A] leading-relaxed">{card.desc}</p>
                    {!isComingSoon && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#8AD74C] group-hover:gap-2.5 transition-all">
                        Explore <ArrowRight className="w-3 h-3" />
                      </div>
                    )}
                  </Card>
                </Link>
              );
            })}
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}