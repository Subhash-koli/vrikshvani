import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Authors — Vriksh Vani Blog',
  description: 'Meet the scientists, engineers, and thinkers behind the Vriksh Vani blog — plant biophysicists, hardware engineers, AI researchers, and field ecologists.',
};

const authors = [
  {
    name: 'Dr. Priya Nair',
    role: 'Head of Plant Biophysics',
    initials: 'PN',
    colour: 'bg-[#8AD74C]',
    bio: 'PhD in Plant Physiology, IISc Bengaluru. Former researcher at the Centre for Ecological Sciences. Leads the NIH-01 species parameter database and VPD modelling research.',
    articles: 4,
    specialties: ['VPD Modelling', 'Transpiration', 'Species Biology'],
  },
  {
    name: 'Subhash Koli',
    role: 'Founder & CTO',
    initials: 'SK',
    colour: 'bg-[#E8D07C]',
    bio: 'Founder of Vriksh Vani Technologies. Hardware and embedded systems engineer with 12 years of experience across IoT, consumer electronics, and plant science.',
    articles: 6,
    specialties: ['Hardware Design', 'Company Vision', 'Thermal Imaging'],
  },
  {
    name: 'Arjun Mehta',
    role: 'ML Engineering Lead',
    initials: 'AM',
    colour: 'bg-[#8AD74C]',
    bio: 'MSc in Machine Learning, IIT Bombay. Designed the NTE™ emotion classification architecture and led quantisation for ARM Cortex-M4 deployment.',
    articles: 3,
    specialties: ['Edge AI', 'Model Quantisation', 'CMSIS-NN'],
  },
  {
    name: 'Vikram Iyer',
    role: 'Hardware Engineering Lead',
    initials: 'VI',
    colour: 'bg-[#E8D07C]',
    bio: 'Senior embedded systems engineer. Designed the NIH-01 sensor fusion pipeline and the BLE communication stack. Previously at Qualcomm Research, Bengaluru.',
    articles: 2,
    specialties: ['Sensor Fusion', 'Embedded Systems', 'BLE'],
  },
  {
    name: 'Ananya Krishnamurthy',
    role: 'Research Analyst',
    initials: 'AK',
    colour: 'bg-[#8AD74C]',
    bio: 'BSc Botany, MRes Biophilic Design (UCL). Leads the literature review programme and enterprise biophilic design research collaborations.',
    articles: 3,
    specialties: ['Biophilic Design', 'Meta-Analysis', 'Workplace Wellbeing'],
  },
];

export default function BlogAuthorsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-[#8AD74C]" />
              <div>
                <Badge variant="lime">Authors</Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2] mt-1">
                  Meet the Vriksh Vani Team
                </h1>
              </div>
            </div>
            <p className="text-[#A3B18A]">The scientists, engineers, and thinkers behind every article.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {authors.map((a, idx) => (
              <Card key={idx} className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${a.colour} flex items-center justify-center shrink-0`}>
                    <span className="font-display font-bold text-[#070B08] text-lg">{a.initials}</span>
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-[#F7F6F2]">{a.name}</h2>
                    <p className="text-xs font-mono text-[#A3B18A]">{a.role}</p>
                    <p className="text-xs font-mono text-[#8AD74C]">{a.articles} articles</p>
                  </div>
                </div>
                <p className="text-sm text-[#A3B18A] leading-relaxed">{a.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {a.specialties.map((s, i) => (
                    <span key={i} className="text-xs font-mono bg-[#0F2B18] border border-white/10 rounded-full px-3 py-0.5 text-[#A3B18A]">
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
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
