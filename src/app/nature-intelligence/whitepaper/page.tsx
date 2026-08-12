import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FileText, Download, BookOpen, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nature Intelligence Architecture Whitepaper — Vriksh Vani',
  description:
    'Read the Vriksh Vani Nature Intelligence architecture document: exploring VPD biophysics, thermal imaging, NTE neural framework, and privacy-first edge AI.',
};

const chapters = [
  { num: 1, title: 'The Limits of Reactive Visual Plant Care', page: 2 },
  { num: 2, title: 'Vapour Pressure Deficit (VPD) & Leaf Transpiration', page: 6 },
  { num: 3, title: 'Non-Invasive LWIR Thermal Sensing Principles', page: 11 },
  { num: 4, title: 'Atmospheric Gas Resistance & VOC Stress Signatures', page: 15 },
  { num: 5, title: 'The NTE™ Framework: Mapping Biometrics to Natural Language', page: 19 },
  { num: 6, title: 'Edge AI Inference on Low-Power Microcontrollers (ESP32-S3)', page: 23 },
  { num: 7, title: 'Volatile SRAM Privacy Architecture', page: 27 },
  { num: 8, title: 'Open Research Questions & Prototype Roadmap', page: 30 },
];

export default function WhitepaperPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Hero */}
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <Badge variant="lime">Architecture &amp; Concept Document</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Nature Intelligence:{' '}<br className="hidden sm:block" />A Conceptual Foundation.
            </h1>
            <p className="text-[#A3B18A] text-lg leading-relaxed">
              Our technical vision for decoding plant biophysics through Vapor Pressure Deficit (VPD) modeling, non-invasive thermal imaging, atmospheric gas sensing, and on-device TinyML inference &mdash; shared openly with the community.
            </p>
          </div>

          {/* Document Meta */}
          <Card className="p-8 space-y-5 border border-[#8AD74C]/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: 'Status', val: 'Design Doc' },
                { label: 'Published', val: '2026' },
                { label: 'Architecture', val: 'ESP32-S3' },
                { label: 'License', val: 'CC BY 4.0' },
              ].map((m, idx) => (
                <div key={idx}>
                  <p className="font-display text-2xl font-bold text-[#8AD74C]">{m.val}</p>
                  <p className="text-xs font-mono text-[#A3B18A] uppercase tracking-wider mt-1">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-white/5 pt-4 space-y-2">
              <p className="text-xs font-mono text-[#A3B18A] text-center">
                <strong className="text-[#F7F6F2]">Author:</strong> Subhash Koli &middot; Vriksh Vani Nature Intelligence
              </p>
            </div>
          </Card>

          {/* Abstract */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Executive Summary</h2>
            </div>
            <div className="space-y-4 text-sm text-[#A3B18A] leading-relaxed border-l-2 border-[#8AD74C]/30 pl-6">
              <p>
                Traditional domestic plant care relies heavily on periodic visual inspection and intrusive soil moisture probes. This document outlines a non-invasive biometric architecture that combines non-contact thermal imaging (FLIR Lepton) and environmental gas sensing (BME688) to monitor leaf transpiration dynamics and atmospheric stress.
              </p>
              <p>
                We describe the Nature Translation Engine (NTE™) framework &mdash; an embedded TinyML model designed to run on the ESP32-S3 microcontroller, translating multivariate biophysical states into natural human expressions while maintaining complete privacy through local volatile SRAM execution.
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Outline of Topics</h2>
            </div>
            <Card className="divide-y divide-white/5">
              {chapters.map((ch) => (
                <div key={ch.num} className="flex items-center gap-4 py-3 px-6">
                  <span className="font-mono text-xs text-[#8AD74C] w-6 shrink-0">{ch.num}.</span>
                  <span className="flex-1 text-sm text-[#F7F6F2]">{ch.title}</span>
                  <span className="font-mono text-xs text-[#A3B18A] shrink-0">Section {ch.num}</span>
                </div>
              ))}
            </Card>
          </div>

          {/* Download CTA */}
          <Card className="text-center space-y-5 border border-[#E8D07C]/20 py-10">
            <div className="flex items-center justify-center gap-3">
              <FileText className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Download Technical Overview</h2>
            </div>
            <p className="text-[#A3B18A] max-w-lg mx-auto leading-relaxed">
              Read our conceptual framework on non-invasive plant biometrics, sensor selection, and edge TinyML translation.
            </p>
            <Button variant="gold" size="lg" className="inline-flex items-center gap-2.5">
              <Download className="w-5 h-5" /> Download Concept Paper (PDF)
            </Button>
            <p className="text-xs font-mono text-[#A3B18A]">Open Access &middot; CC BY 4.0</p>
          </Card>

          {/* Links */}
          <div className="flex gap-4 flex-wrap">
            <Link href="/nature-intelligence/research">
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" /> Open Hypotheses Hub
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
