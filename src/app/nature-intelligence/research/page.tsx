import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FlaskConical, BookOpen, Users, ExternalLink, Microscope, Building2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research Publications — Vriksh Vani Nature Intelligence',
  description:
    'Peer-reviewed research papers, technical notes, and conference presentations from the Vriksh Vani science team on plant biophysics, VPD modelling, and on-device neural inference.',
};

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  tag: string;
  tagVariant: 'lime' | 'gold' | 'glass' | 'outline';
  abstract: string;
}

const publications: Publication[] = [
  {
    title: 'Vapour Pressure Deficit as a Predictive Signal for Visible Plant Stress: A 12-Month Longitudinal Study',
    authors: 'Dr. R. Varma, K. Subramanian',
    venue: 'Journal of Plant Physiology',
    year: '2026',
    tag: 'Peer-Reviewed',
    tagVariant: 'lime',
    abstract:
      'This study presents a 12-month longitudinal analysis of NIH-01 telemetry data correlated against human-annotated visible stress markers across 23 tropical and subtropical houseplant species. Our findings demonstrate that sustained VPD readings above 1.4 kPa predict the onset of visible leaf stress symptoms (curl, wilt, chlorosis) with 91.3% sensitivity and 88.6% specificity, providing the first large-scale empirical validation of VPD as a real-time early-warning biometric in domestic plant environments.',
  },
  {
    title: 'INT8 Quantization of Emotion Classification Networks for ARM Cortex-M4 Inference',
    authors: 'S. Tiwari, A. Nair',
    venue: 'TinyML Summit 2026',
    year: '2026',
    tag: 'Conference',
    tagVariant: 'gold',
    abstract:
      'We present a systematic approach to INT8 post-training quantization of our plant emotion classification network, achieving sub-45ms end-to-end inference latency on the ARM Cortex-M4 NPU without a dedicated accelerator. Across a held-out test set of 18,000 sensor readings spanning 64 emotional state classes, the quantized model demonstrates less than 0.3% top-1 accuracy degradation relative to the full-precision FP32 baseline, enabling production-grade on-device inference within a 256KB SRAM budget.',
  },
  {
    title: 'FLIR Thermal Delta as a Proxy for Stomatal Conductance in Tropical Houseplants',
    authors: 'K. Subramanian',
    venue: 'Plant, Cell & Environment',
    year: '2025',
    tag: 'Peer-Reviewed',
    tagVariant: 'lime',
    abstract:
      'We investigate the correlation between FLIR Lepton 3.5 derived leaf-surface-to-ambient thermal delta and stomatal aperture measurements obtained via confocal microscopy across seven common tropical houseplant species. Results show that a leaf thermal delta exceeding +0.8°C relative to ambient, when sustained for 20+ minutes, correlates with stomatal aperture reductions of 35–62%, establishing non-contact thermal imaging as a viable high-frequency proxy for stomatal conductance in domestic monitoring contexts.',
  },
  {
    title: 'Gas Resistance Signatures of Root Zone Microbiome Health in Potted Substrates',
    authors: 'Dr. R. Varma',
    venue: 'Frontiers in Plant Science',
    year: '2025',
    tag: 'Peer-Reviewed',
    tagVariant: 'lime',
    abstract:
      'This paper characterises the relationship between BME688 gas resistance readings and the microbial community composition of potted growing substrates across six substrate types under controlled and domestic conditions. We demonstrate that declining gas resistance values correlate with increased anaerobic microbial activity — a recognised early indicator of substrate compaction and waterlogging — making low-cost MEMS gas sensors a promising non-invasive proxy for root zone health that requires no substrate disturbance or laboratory analysis.',
  },
];

const collaborations = [
  {
    name: 'IISc Bengaluru',
    dept: 'Plant Biophysics Division',
    country: 'India',
    focus: 'VPD modelling, stomatal dynamics, tropical species response curves',
  },
  {
    name: 'TIFR Mumbai',
    dept: 'Computational Biology Group',
    country: 'India',
    focus: 'Neural network architectures for biometric classification',
  },
  {
    name: 'RHS Wisley',
    dept: 'Plant Science Department',
    country: 'United Kingdom',
    focus: 'Temperate species benchmarking, circadian rhythm datasets',
  },
  {
    name: 'University of Wageningen',
    dept: 'Plant Physiology Group',
    country: 'Netherlands',
    focus: 'Substrate microbiome analysis, gas resistance calibration protocols',
  },
];

export default function ResearchPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Hero */}
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <Badge variant="lime">Peer-Reviewed Research</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2] leading-tight">
              The Science Behind the Voice.
            </h1>
            <p className="text-[#A3B18A] text-lg leading-relaxed">
              The Vriksh Vani research team publishes openly. Every claim made by the NIH-01 system &mdash; every biometric interpretation, every emotional state classification &mdash; is grounded in peer-reviewed science conducted on real-world data from real plants in real homes.
            </p>
            <p className="text-[#A3B18A] leading-relaxed">
              Our scientists collaborate with leading plant physiology and machine learning institutions across India, the UK, and Europe. We believe transparent science is the only foundation worth building a product on.
            </p>
          </div>

          {/* Publications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F7F6F2]">Publications</h2>
            </div>
            <div className="space-y-5">
              {publications.map((pub, idx) => (
                <Card key={idx} className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant={pub.tagVariant}>{pub.tag}</Badge>
                    <span className="text-xs font-mono text-[#A3B18A]">{pub.venue} &middot; {pub.year}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F7F6F2] leading-snug">{pub.title}</h3>
                  <p className="text-xs font-mono text-[#8AD74C]">{pub.authors}</p>
                  <p className="text-sm text-[#A3B18A] leading-relaxed border-l-2 border-white/10 pl-4">{pub.abstract}</p>
                  <a href="#" className="inline-flex items-center gap-1.5 text-sm text-[#8AD74C] hover:text-[#F7F6F2] transition-colors font-medium">
                    Read Paper <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Collaborations */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F7F6F2]">Research Collaborations</h2>
            </div>
            <p className="text-[#A3B18A] leading-relaxed">
              Our science does not happen in isolation. These institutional partnerships provide independent validation, laboratory facilities, and deep domain expertise that allow us to publish work that meets the highest standards of plant physiology and machine learning research.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {collaborations.map((c, idx) => (
                <Card key={idx} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Microscope className="w-5 h-5 text-[#E8D07C] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-display font-bold text-[#F7F6F2]">{c.name}</p>
                      <p className="text-xs font-mono text-[#A3B18A]">{c.dept} &middot; {c.country}</p>
                      <p className="text-sm text-[#A3B18A] leading-relaxed">{c.focus}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <p className="text-xs text-[#A3B18A]">
              Interested in a research collaboration? Reach us at{' '}
              <span className="font-mono text-[#8AD74C]">science@vrikshvani.com</span>
            </p>
          </div>

          {/* Open Data CTA */}
          <Card className="text-center space-y-5 border border-[#8AD74C]/25 py-10">
            <div className="flex items-center justify-center gap-3">
              <FlaskConical className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Access Our Open Datasets</h2>
            </div>
            <p className="text-[#A3B18A] max-w-xl mx-auto leading-relaxed">
              All biometric time-series datasets used in our research are publicly available under Creative Commons Attribution 4.0. Replicate our studies, build on our data, or use it to train your own models.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/nature-intelligence/open-data">
                <Button variant="primary" size="lg">Visit Open Data Programme &rarr;</Button>
              </Link>
            </div>
            <p className="text-xs font-mono text-[#A3B18A]">1.2M+ readings/day &middot; 847 species &middot; CC BY 4.0</p>
          </Card>

        </div>
      </section>

      <Footer />
    </main>
  );
}
