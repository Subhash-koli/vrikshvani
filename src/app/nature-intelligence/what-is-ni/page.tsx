import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Leaf, Eye, Brain, Heart, ShieldCheck, Sparkles, ArrowRight, FlaskConical, Cpu, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Is Nature Intelligence? — The Category Vriksh Vani Is Pioneering',
  description: 'Nature Intelligence is a new discipline combining plant biophysics, environmental sensing, edge AI, and human translation to help humanity understand living systems. Learn the 5-stage NI journey.',
  keywords: ['Nature Intelligence', 'plant intelligence', 'plant signals', 'biophysics', 'living systems', 'plant communication', 'NI category'],
  alternates: {
    canonical: 'https://www.vrikshvani.com/nature-intelligence/what-is-ni',
  },
  openGraph: {
    title: 'What Is Nature Intelligence? | Vriksh Vani',
    description: 'A new discipline for understanding living systems. Signals, Interpretation, Understanding, Connection, Care.',
    url: 'https://www.vrikshvani.com/nature-intelligence/what-is-ni',
    siteName: 'Vriksh Vani',
  },
};

const NI_JOURNEY = [
  { stage: '01', name: 'SIGNALS', question: 'What is happening?', desc: 'Living systems produce continuous biological signals: thermal shifts, gas exchanges, transpiration rhythms, growth patterns. Most are invisible to human perception.', icon: Eye, color: 'text-[#E8D07C]', border: 'border-[#E8D07C]/30' },
  { stage: '02', name: 'INTERPRETATION', question: 'What could the signal mean?', desc: 'Sensors capture raw biophysical data. Edge AI models evaluate candidate physiological states: stomatal behaviour, hydration patterns, environmental stress responses.', icon: Brain, color: 'text-[#8AD74C]', border: 'border-[#8AD74C]/30' },
  { stage: '03', name: 'UNDERSTANDING', question: 'Why might it be happening?', desc: 'Context transforms data into meaning. Species identity, environmental history, seasonal patterns, and accumulated observations build genuine comprehension.', icon: Sparkles, color: 'text-sky-400', border: 'border-sky-400/30' },
  { stage: '04', name: 'CONNECTION', question: 'What does this tell us about the living system?', desc: 'Understanding creates empathy. When we comprehend why a plant responds the way it does, we form a bond with the living system that transcends data.', icon: Heart, color: 'text-purple-400', border: 'border-purple-400/30' },
  { stage: '05', name: 'CARE', question: 'What should responsible stewardship look like?', desc: 'Connection leads to action. Informed by genuine understanding, care becomes proactive, evidence-based, and respectful of the living system\'s own rhythms.', icon: ShieldCheck, color: 'text-[#8AD74C]', border: 'border-[#8AD74C]/30' },
];

const THREE_PILLARS = [
  { name: 'SCIENCE', desc: 'Plant biophysics, thermodynamics, gas exchange, transpiration research, species-specific physiology. Evidence-first methodology.', icon: FlaskConical, color: 'text-purple-400', border: 'border-purple-400/30' },
  { name: 'TECHNOLOGY', desc: 'Thermal sensing, environmental sensors, edge AI, TinyML, Nature Translation Engine. Privacy-first, local-first architecture.', icon: Cpu, color: 'text-sky-400', border: 'border-sky-400/30' },
  { name: 'CULTURE', desc: 'Education, community observation, storytelling, media, open research. Building a shared language between humans and nature.', icon: Globe, color: 'text-[#E8D07C]', border: 'border-[#E8D07C]/30' },
];

const FUTURE_STAGES = [
  { label: 'Research', desc: 'Understanding plant biophysics', status: 'NOW', color: 'text-[#8AD74C]', dotColor: 'bg-[#8AD74C]' },
  { label: 'Prototype', desc: 'NIH-01 concept validation', status: 'NEXT', color: 'text-[#E8D07C]', dotColor: 'bg-[#E8D07C]' },
  { label: 'Consumer NI', desc: 'First Nature Intelligence product', status: 'FUTURE', color: 'text-[#A3B18A]', dotColor: 'bg-[#A3B18A]' },
  { label: 'Nature Intelligence OS', desc: 'Platform for third-party research', status: 'VISION', color: 'text-[#A3B18A]', dotColor: 'bg-white/30' },
  { label: 'Community Intelligence', desc: 'Shared observation network', status: 'VISION', color: 'text-[#A3B18A]', dotColor: 'bg-white/30' },
  { label: 'Ecosystem Intelligence', desc: 'Multi-species, multi-habitat understanding', status: 'VISION', color: 'text-[#A3B18A]', dotColor: 'bg-white/20' },
  { label: 'Planetary Intelligence', desc: 'Global nature understanding infrastructure', status: 'VISION', color: 'text-[#A3B18A]', dotColor: 'bg-white/10' },
];

export default function WhatIsNIPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <Badge variant="lime" className="gap-1.5">
            <Leaf className="w-3.5 h-3.5" /> Defining a New Category
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#F7F6F2] leading-tight">
            What Is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AD74C] via-[#E8D07C] to-[#3FAE2A]">
              Nature Intelligence?
            </span>
          </h1>
          <p className="text-[#A3B18A] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Nature has always been communicating. Through thermal shifts, gas exchanges, transpiration rhythms, and growth patterns. Nature Intelligence is the discipline of learning to listen.
          </p>
          <Card className="p-6 border-[#8AD74C]/20 bg-[#0F2B18]/30 max-w-2xl mx-auto">
            <p className="text-[#F7F6F2] font-display text-lg md:text-xl leading-relaxed">
              Nature Intelligence is technology that helps humans observe, interpret, and understand living systems.
            </p>
          </Card>
        </div>
      </section>

      {/* The Category Gap */}
      <section className="py-16 bg-[#030504] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#E8D07C] bg-[#E8D07C]/10 border border-[#E8D07C]/30 px-2 py-0.5 rounded">THE CATEGORY GAP</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">Why Nature Intelligence doesn't exist yet</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-white/10 space-y-3">
              <p className="font-display font-bold text-[#F7F6F2]">What exists today</p>
              <ul className="space-y-2 text-sm text-[#A3B18A] list-disc pl-4">
                <li>Simple soil moisture meters</li>
                <li>Basic temperature and humidity sensors</li>
                <li>Automated watering systems</li>
                <li>Generic plant-care apps with reminder timers</li>
              </ul>
              <p className="text-xs font-mono text-[#A3B18A] border-t border-white/5 pt-2">These measure environments. They don't understand living systems.</p>
            </Card>
            <Card className="p-6 border-[#8AD74C]/20 space-y-3">
              <p className="font-display font-bold text-[#8AD74C]">What Nature Intelligence does</p>
              <ul className="space-y-2 text-sm text-[#A3B18A] list-disc pl-4">
                <li>Measures biological signals from the plant itself</li>
                <li>Interprets biophysical states using AI</li>
                <li>Builds understanding through species context</li>
                <li>Creates connection between human and living system</li>
                <li>Enables evidence-based, empathetic care</li>
              </ul>
              <p className="text-xs font-mono text-[#8AD74C] border-t border-[#8AD74C]/20 pt-2">Nature Intelligence listens to the plant, not just its environment.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* The NI Journey — 5 Stages */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="font-mono text-xs font-bold text-[#8AD74C] bg-[#8AD74C]/10 border border-[#8AD74C]/30 px-2 py-0.5 rounded">THE NI JOURNEY</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">Five stages of Nature Intelligence</h2>
            <p className="text-[#A3B18A] leading-relaxed">From invisible biological signal to responsible, informed care — a complete framework for understanding living systems.</p>
          </div>
          <div className="space-y-4">
            {NI_JOURNEY.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <div key={stage.stage} className="relative">
                  <Card className={['p-6 space-y-3', stage.border].join(' ')}>
                    <div className="flex items-start gap-4">
                      <div className={['w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-[#070B08] border', stage.border].join(' ')}>
                        <Icon className={['w-6 h-6', stage.color].join(' ')} />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-3">
                          <span className={['font-mono text-xs font-bold', stage.color].join(' ')}>STAGE {stage.stage}</span>
                          <span className={['font-display text-xl font-bold', stage.color].join(' ')}>{stage.name}</span>
                        </div>
                        <p className="font-display font-bold text-[#F7F6F2] italic">{stage.question}</p>
                        <p className="text-sm text-[#A3B18A] leading-relaxed">{stage.desc}</p>
                      </div>
                    </div>
                  </Card>
                  {i < NI_JOURNEY.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 bg-[#030504] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs font-bold text-[#E8D07C] bg-[#E8D07C]/10 border border-[#E8D07C]/30 px-2 py-0.5 rounded">THREE PILLARS</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">Nature Intelligence stands on three pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THREE_PILLARS.map(({ name, desc, icon: Icon, color, border }) => (
              <Card key={name} className={['p-6 space-y-4', border].join(' ')}>
                <Icon className={['w-8 h-8', color].join(' ')} />
                <h3 className={['font-display text-xl font-bold', color].join(' ')}>{name}</h3>
                <p className="text-sm text-[#A3B18A] leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NIH-01 as First Embodiment */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#A3B18A] bg-white/5 border border-white/10 px-2 py-0.5 rounded">FIRST EMBODIMENT</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">NIH-01: The first Nature Intelligence hardware</h2>
          </div>
          <Card className="p-6 border-[#8AD74C]/20 space-y-4">
            <p className="text-[#A3B18A] leading-relaxed">
              The NIH-01 Nature Intelligence Hub is the first physical implementation of the Nature Intelligence architecture. It combines FLIR thermal sensing, Bosch BME688 gas analysis, SHT41 environmental monitoring, and ESP32-S3 edge AI — all housed in a kiln-fired ceramic shell.
            </p>
            <p className="text-[#A3B18A] leading-relaxed">
              But NIH-01 is not Vriksh Vani. It is one implementation of Nature Intelligence. The category is larger than any single product — just as intelligence is larger than any single brain.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/product"><Button variant="outline" className="gap-1.5"><ArrowRight className="w-3 h-3" /> Explore NIH-01</Button></Link>
              <Link href="/nature-intelligence/research"><Button variant="outline" className="gap-1.5"><FlaskConical className="w-3 h-3" /> Read the Research</Button></Link>
            </div>
          </Card>
        </div>
      </section>

      {/* The Future */}
      <section className="py-16 bg-[#030504] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs font-bold text-pink-400 bg-pink-400/10 border border-pink-400/30 px-2 py-0.5 rounded">THE LONG VIEW</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">Where Nature Intelligence is going</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#8AD74C]/50 via-white/10 to-transparent" />
            <div className="space-y-4 pl-16">
              {FUTURE_STAGES.map((stage, i) => (
                <div key={i} className="relative">
                  <div className={['absolute -left-10 top-4 w-3 h-3 rounded-full border-2 border-[#070B08]', stage.dotColor].join(' ')} />
                  <Card className="p-4 border-white/10">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className={['font-display font-bold', stage.color].join(' ')}>{stage.label}</p>
                        <p className="text-xs text-[#A3B18A]">{stage.desc}</p>
                      </div>
                      <span className="text-xs font-mono text-[#A3B18A] bg-white/5 border border-white/10 px-2 py-0.5 rounded shrink-0">{stage.status}</span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Core Insight */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2] leading-tight">
            The website is not the product.<br />
            NIH-01 is not the company.<br />
            AI is not the story.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AD74C] to-[#E8D07C]">Understanding is the destination.</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/nature-intelligence/research"><Button variant="primary" className="gap-1.5">Explore the Research <ArrowRight className="w-4 h-4" /></Button></Link>
            <Link href="/waitlist"><Button variant="outline">Join the Journey</Button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}