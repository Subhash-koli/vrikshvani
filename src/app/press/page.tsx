import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Download, Newspaper, Mail, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Press & Media — Vriksh Vani',
  description: 'Download the Vriksh Vani press kit, access high-resolution product photography, and request interviews with the founding team.',
};

const coverage = [
  { outlet: 'TechCrunch India', headline: '"Vriksh Vani wants to give your houseplants a voice — literally"', date: 'July 2026', href: '#' },
  { outlet: 'The Hindu BusinessLine', headline: '"Bengaluru startup decodes plant stress using aerospace-grade thermal cameras"', date: 'June 2026', href: '#' },
  { outlet: 'YourStory', headline: '"Meet NIH-01: The world\'s first kiln-fired ceramic plant intelligence hub"', date: 'June 2026', href: '#' },
  { outlet: 'Wired India', headline: '"This device translates plant distress into speech — and the science behind it is solid"', date: 'May 2026', href: '#' },
];

const awards = [
  { name: 'RedDot Design Concept Award', year: '2026', category: 'Product Concept' },
  { name: 'India Design Mark (I Mark)', year: '2026', category: 'Electronics & Technology' },
  { name: 'T-Hub Cohort 14 Graduate', year: '2025', category: 'AgriTech / BioTech' },
];

export default function PressPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Hero */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="lime">Press & Media</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              For Journalists &amp; Media Partners.
            </h1>
            <p className="text-[#A3B18A]">
              Logos, product photography, founder headshots, and a comprehensive press kit. Everything you need to cover the Nature Intelligence category.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button variant="primary" className="flex items-center gap-2">
                <Download className="w-4 h-4" /> Download Press Kit (ZIP)
              </Button>
              <Link href="mailto:press@vrikshvani.com">
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Request Interview
                </Button>
              </Link>
            </div>
          </div>

          {/* Official Brand Logos Suite Showcase */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎨</span>
              <div>
                <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Official Brand Logo Suite</h2>
                <p className="text-xs text-[#A3B18A]">Analyzed, categorized, and standardized brand logo assets for press, web, and hardware media.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Horizontal Lockup (Light Mode)',
                  category: 'Header / Navigation / Invoices',
                  file: '/assets/vrikshvani_logo/vrikshvani-logo-horizontal-light.png',
                  bg: 'bg-white',
                },
                {
                  title: 'Stacked Primary (Dark Mode)',
                  category: 'Dark Hero / Dark Backgrounds',
                  file: '/assets/vrikshvani_logo/vrikshvani-logo-stacked-dark.jpg',
                  bg: 'bg-black',
                },
                {
                  title: 'Stacked Transparent (Light Mode)',
                  category: 'Light Cards / Transparent Headers',
                  file: '/assets/vrikshvani_logo/vrikshvani-logo-stacked-light-transparent.png',
                  bg: 'bg-[#F4F6F0]',
                },
                {
                  title: '3D Embossed Stacked Logo',
                  category: 'Hero Cards / Packaging Render',
                  file: '/assets/vrikshvani_logo/vrikshvani-logo-3d-embossed-light.png',
                  bg: 'bg-white',
                },
                {
                  title: 'Gold Ring Circular Emblem',
                  category: 'Social Media / App Store Badge',
                  file: '/assets/vrikshvani_logo/vrikshvani-emblem-gold-ring.png',
                  bg: 'bg-[#070B08]',
                },
                {
                  title: 'Dark Circular Avatar Badge',
                  category: 'Dark Profile / User Avatar',
                  file: '/assets/vrikshvani_logo/vrikshvani-avatar-dark-circle.png',
                  bg: 'bg-[#0F2B18]',
                },
                {
                  title: '3D Standalone Icon Mark',
                  category: 'Favicon / Mobile App Splash Icon',
                  file: '/assets/vrikshvani_logo/vrikshvani-iconmark-3d-light.png',
                  bg: 'bg-white',
                },
                {
                  title: '2D Flat Minimalist Icon Mark',
                  category: 'Website Nav Icon / UI Elements',
                  file: '/assets/vrikshvani_logo/vrikshvani-iconmark-flat-light.png',
                  bg: 'bg-white',
                },
                {
                  title: '2D Flat Vector Stacked Logo',
                  category: 'Documentation / PDF Exports',
                  file: '/assets/vrikshvani_logo/vrikshvani-logo-stacked-flat-light.png',
                  bg: 'bg-white',
                },
              ].map((logo, idx) => (
                <Card key={idx} className="p-4 space-y-3 flex flex-col justify-between">
                  <div className={`w-full h-36 rounded-xl ${logo.bg} flex items-center justify-center p-4 overflow-hidden border border-white/10`}>
                    <img src={logo.file} alt={logo.title} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-sm text-[#F7F6F2]">{logo.title}</h3>
                    <p className="text-[11px] font-mono text-[#8AD74C]">{logo.category}</p>
                  </div>
                  <a href={logo.file} download className="block">
                    <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-1.5 text-xs">
                      <Download className="w-3.5 h-3.5" /> Download Asset
                    </Button>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Media Coverage */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Newspaper className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Media Coverage</h2>
            </div>
            <div className="space-y-3">
              {coverage.map((c, idx) => (
                <Card key={idx} className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-[#8AD74C] font-bold">{c.outlet} · {c.date}</p>
                    <p className="text-sm font-semibold text-[#F7F6F2] leading-snug">{c.headline}</p>
                  </div>
                  <Link href={c.href}>
                    <Button variant="outline" size="sm">Read →</Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Awards &amp; Recognition</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {awards.map((a, idx) => (
                <Card key={idx} className="space-y-1 border-[#E8D07C]/20">
                  <p className="text-xs font-mono text-[#E8D07C]">{a.year} · {a.category}</p>
                  <p className="font-display font-bold text-[#F7F6F2] leading-snug">{a.name}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Press Contact */}
          <Card className="p-8 border-[#8AD74C]/20 text-center space-y-3">
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Press Contact</h3>
            <p className="text-sm text-[#A3B18A]">For interview requests, review units, and media partnerships, contact our communications team directly.</p>
            <p className="font-mono text-[#8AD74C] font-bold">press@vrikshvani.com</p>
            <p className="text-xs text-[#A3B18A]">Response time: within 24 hours on business days</p>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
