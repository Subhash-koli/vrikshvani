import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FlaskConical, BookOpen, Database } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IISc Partnership — Vriksh Vani Research',
  description: 'The Vriksh Vani–IISc Bengaluru research partnership: joint studies on plant biophysics, VPD modelling, and on-device neural inference for plant intelligence.',
};

const jointProjects = [
  {
    icon: FlaskConical,
    title: 'VPD Response Modelling Across Indian Climate Zones',
    status: 'Active — Phase 2',
    desc: 'A 24-month field study correlating NIH-01 real-time VPD readings with plant growth outcomes across 6 distinct Indian climate zones. Data from 150 NIH-01 hubs deployed across IISc campus and partner sites.',
    lead: 'Prof. Sridhar Venkatesan, Division of Biological Sciences',
    output: 'Target: 2 peer-reviewed papers in Plant Cell & Environment',
  },
  {
    icon: BookOpen,
    title: 'NTE™ Emotion Model Validation Study',
    status: 'Active — Phase 1',
    desc: 'A controlled study comparing NTE™ emotion cluster outputs against biochemical stress markers (ABA, ethylene, proline) in Monstera deliciosa and Ficus lyrata under induced drought and heat stress.',
    lead: 'Dr. Kavitha Menon, Plant Molecular Biology Lab',
    output: 'Target: NPJ Plant Science submission Q2 2027',
  },
  {
    icon: Database,
    title: 'Open Data Programme Species Expansion',
    status: 'Active — Ongoing',
    desc: 'IISc contributes validated gas resistance baseline measurements for 67 South Asian native species not previously represented in the Vriksh Vani database.',
    lead: 'Prof. T.R. Ravindra Babu, Plant Ecology',
    output: 'Quarterly dataset releases on the Open Data Programme',
  },
];

const publications = [
  {
    title: 'Vapour Pressure Deficit as a Predictive Biomarker for Osmotic Stress in Araceae',
    journal: 'Plant Physiology (pre-print)',
    date: 'June 2026',
    authors: 'Nair P., Venkatesan S., Koli S.',
  },
  {
    title: 'On-Device Emotion Classification from Plant Biometric Tri-Sensor Arrays',
    journal: 'IEEE Sensors Journal',
    date: 'April 2026',
    authors: 'Mehta A., Menon K., Koli S.',
  },
];

export default function IIScPartnershipPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="lime">Research Partnership</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Vriksh Vani × IISc Bengaluru
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              A formal research collaboration between Vriksh Vani Technologies and the Indian Institute of Science, validating the plant biophysics science behind NIH-01 through rigorous peer-reviewed research.
            </p>
          </div>

          {/* Partnership badge */}
          <Card className="p-8 flex flex-col md:flex-row items-center gap-6 border-[#8AD74C]/20">
            <div className="w-20 h-20 rounded-2xl bg-[#0F2B18] border border-white/10 flex items-center justify-center shrink-0">
              <span className="font-display font-black text-2xl text-[#8AD74C]">IISc</span>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Indian Institute of Science, Bengaluru</h2>
              <p className="text-sm text-[#A3B18A] mt-1">Established 1909 · India&apos;s premier research university · QS World Ranking #155</p>
              <p className="text-sm text-[#A3B18A] mt-2">Partnership established: January 2026. 3-year research agreement covering plant biophysics, sensor validation, and on-device AI for plant intelligence applications.</p>
            </div>
          </Card>

          {/* Joint projects */}
          <div className="space-y-5">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Active Research Projects</h2>
            {jointProjects.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Card key={idx} className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Icon className="w-5 h-5 text-[#8AD74C] shrink-0" />
                    <h3 className="font-display font-bold text-[#F7F6F2]">{p.title}</h3>
                    <span className="ml-auto font-mono text-xs text-[#8AD74C] shrink-0">{p.status}</span>
                  </div>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{p.desc}</p>
                  <div className="text-xs font-mono text-[#A3B18A] space-y-1">
                    <p>Lead: {p.lead}</p>
                    <p>Output: {p.output}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Publications */}
          <div className="space-y-5">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Joint Publications</h2>
            {publications.map((pub, idx) => (
              <Card key={idx} className="space-y-2">
                <h3 className="font-display font-bold text-[#F7F6F2] text-base">{pub.title}</h3>
                <p className="text-xs font-mono text-[#8AD74C]">{pub.journal} · {pub.date}</p>
                <p className="text-xs font-mono text-[#A3B18A]">{pub.authors}</p>
              </Card>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/nature-intelligence/research">
              <Button variant="outline">All Research Publications →</Button>
            </Link>
            <Link href="/nature-intelligence/open-data">
              <Button variant="primary">Open Data Programme →</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
