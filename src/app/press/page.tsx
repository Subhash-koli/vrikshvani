import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Download, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Press & Media — Vriksh Vani',
  description: 'Download the Vriksh Vani brand kit, access high-resolution product concept photography, and request interviews with the founder.',
};

export default function PressPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Hero */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="lime">Press &amp; Media Resources</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              For Journalists &amp; Storytellers.
            </h1>
            <p className="text-[#A3B18A]">
              Logos, brand guidelines, product concept visuals, and founder background. Everything you need to cover the Nature Intelligence movement.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button variant="primary" className="flex items-center gap-2">
                <Download className="w-4 h-4" /> Download Brand Assets (ZIP)
              </Button>
              <Link href="mailto:press@vrikshvani.com">
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Request Interview
                </Button>
              </Link>
            </div>
          </div>

          {/* Category Story brief */}
          <Card className="p-8 border-[#8AD74C]/20 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8AD74C]">
              <Sparkles className="w-4 h-4 text-[#8AD74C]" />
              <span>CATEGORY DEFINITION</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">What is Nature Intelligence?</h2>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Nature Intelligence is a new category of biophilic technology that focuses on interpreting non-invasive physiological signals from living systems (leaves, plants, micro-climates) using thermal imaging, atmospheric gas analysis, and edge AI translation.
            </p>
          </Card>

          {/* Official Brand Logos Suite Showcase */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎨</span>
              <div>
                <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Official Brand Logo Suite</h2>
                <p className="text-xs text-[#A3B18A]">Standardized brand logo assets for press, web, and media publication.</p>
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
                  category: 'Hero Cards / Renders',
                  file: '/assets/vrikshvani_logo/vrikshvani-logo-3d-embossed-light.png',
                  bg: 'bg-white',
                },
                {
                  title: 'Gold Ring Circular Emblem',
                  category: 'Social Media / App Icon',
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
                  category: 'Favicon / App Icon',
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

          {/* Press Contact */}
          <Card className="p-8 border-[#8AD74C]/20 text-center space-y-3">
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Media &amp; Press Contact</h3>
            <p className="text-sm text-[#A3B18A]">For story inquiries, research discussions, and interview requests with the founder:</p>
            <p className="font-mono text-[#8AD74C] font-bold">press@vrikshvani.com</p>
            <p className="text-xs text-[#A3B18A]">Location: Bengaluru, Karnataka, India</p>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
