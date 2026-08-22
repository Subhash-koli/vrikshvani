import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeCommunityWall from '@/components/home/HomeCommunityWall';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Users, FlaskConical, Leaf, Code2, GraduationCap, Building, Camera, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nature Intelligence Explorers — Community | Vriksh Vani',
  description: 'Join 2,900+ researchers, plant enthusiasts, students, and developers exploring Nature Intelligence. Help us validate the science, test prototypes, and build the future of plant understanding.',
  openGraph: {
    title: 'Nature Intelligence Explorers — Vriksh Vani Community',
    description: 'A growing community of people who believe understanding living systems matters. Join the research journey.',
    url: 'https://www.vrikshvani.com/community',
  },
};

const EXPLORER_TYPES = [
  { title: 'Plant Enthusiast', desc: 'You care for plants and want to understand them better.', icon: Leaf, color: 'text-[#8AD74C]' },
  { title: 'Researcher', desc: 'You study plant biophysics, botany, or environmental science.', icon: FlaskConical, color: 'text-purple-400' },
  { title: 'Student', desc: "You're studying biology, engineering, or environmental science.", icon: GraduationCap, color: 'text-sky-400' },
  { title: 'Developer', desc: 'You build hardware, software, or AI for living systems.', icon: Code2, color: 'text-[#E8D07C]' },
  { title: 'Educator', desc: 'You teach plant science, ecology, or environmental awareness.', icon: Building, color: 'text-[#8AD74C]' },
  { title: 'Creator', desc: 'You document nature, plant care, or science on social media.', icon: Camera, color: 'text-pink-400' },
  { title: 'Nursery / Grower', desc: 'You grow plants commercially and need better monitoring.', icon: Leaf, color: 'text-[#E8D07C]' },
  { title: 'Investor / Partner', desc: "You're interested in the Nature Intelligence category.", icon: TrendingUp, color: 'text-[#A3B18A]' },
];

const JOURNEY_PHASES = [
  { phase: 'Research', desc: 'Help validate the science. Share observations. Ask hard questions.', status: 'NOW', color: 'text-[#8AD74C]', border: 'border-[#8AD74C]/30' },
  { phase: 'Prototype Testing', desc: 'Join the early prototype testing cohort when NIH-01 hardware is ready.', status: 'NEXT', color: 'text-[#E8D07C]', border: 'border-[#E8D07C]/30' },
  { phase: 'Community Intelligence', desc: 'Contribute observations to shared Nature Intelligence models.', status: 'FUTURE', color: 'text-[#A3B18A]', border: 'border-white/10' },
];

export default function CommunityPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <Badge variant="lime" className="gap-1.5">
            <Users className="w-3.5 h-3.5" /> Nature Intelligence Explorers
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2] leading-tight">
            Understanding Nature{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AD74C] to-[#E8D07C]">Together.</span>
          </h1>
          <p className="text-[#A3B18A] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            2,900+ researchers, plant enthusiasts, students, and developers have joined the Nature Intelligence research journey. We&apos;re building this in the open — and we need people who ask hard questions.
          </p>
          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <Link href="/waitlist">
              <Button variant="primary" size="lg">Join the Journey →</Button>
            </Link>
            <Link href="/nature-intelligence/research">
              <Button variant="outline" size="lg">Explore the Research</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who Is This For? */}
      <section className="py-16 bg-[#030504] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <Badge variant="gold">Who Is This For?</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">Nature Intelligence welcomes everyone.</h2>
            <p className="text-sm text-[#A3B18A]">Whether you grow orchids on a windowsill or study stomatal conductance in a lab.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {EXPLORER_TYPES.map(({ title, desc, icon: Icon, color }) => (
              <Card key={title} className="p-4 space-y-2 text-center border-white/10">
                <Icon className={`w-6 h-6 mx-auto ${color}`} />
                <p className="font-display text-sm font-bold text-[#F7F6F2]">{title}</p>
                <p className="text-[10px] text-[#A3B18A] leading-tight">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <Badge variant="lime">The Journey</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">Research → Prototype → Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JOURNEY_PHASES.map(({ phase, desc, status, color, border }) => (
              <Card key={phase} className={`p-6 space-y-3 ${border}`}>
                <div className="flex items-center justify-between">
                  <span className={`font-display text-xl font-bold ${color}`}>{phase}</span>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${color} bg-white/5 ${border}`}>{status}</span>
                </div>
                <p className="text-sm text-[#A3B18A] leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#030504] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">Help us validate Nature Intelligence.</h2>
          <p className="text-[#A3B18A] leading-relaxed">
            We don&apos;t need customers yet. We need curious, critical people who believe understanding living systems matters — and are willing to help test whether our approach works.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/waitlist"><Button variant="primary" size="lg" className="gap-1.5">Join the Research Cohort <ArrowRight className="w-4 h-4" /></Button></Link>
            <Link href="/source-of-truth"><Button variant="outline" size="lg">Read Our Source of Truth</Button></Link>
          </div>
        </div>
      </section>

      <HomeCommunityWall />
      <Footer />
    </main>
  );
}
