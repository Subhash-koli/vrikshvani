import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FileText, Download, Users, BookOpen, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nature Intelligence Whitepaper — Vriksh Vani',
  description:
    'Download the Vriksh Vani Nature Intelligence whitepaper: 42 pages covering VPD biophysics, FLIR thermal imaging, NTE neural architecture, and the case for plant biometrics.',
};

const chapters = [
  { num: 1, title: 'The Problem with Plant Care Today', page: 4 },
  { num: 2, title: 'Vapour Pressure Deficit: The Missing Variable', page: 8 },
  { num: 3, title: 'FLIR Thermal Biometrics as a Stress Signal', page: 14 },
  { num: 4, title: 'Quad-Gas Analysis and the Root Zone Proxy', page: 19 },
  { num: 5, title: 'The NTE™ Architecture: From Sensor to Speech', page: 24 },
  { num: 6, title: 'Empirical Validation: 12-Month Longitudinal Study', page: 30 },
  { num: 7, title: 'Ethical Considerations in Plant-Data Collection', page: 36 },
  { num: 8, title: 'Future Directions: Version 2.0 Roadmap', page: 39 },
];

export default function WhitepaperPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Hero */}
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <Badge variant="lime">Technical Whitepaper v1.2</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2] leading-tight">
              Nature Intelligence:{' '}<br className="hidden sm:block" />A Technical Foundation.
            </h1>
            <p className="text-[#A3B18A] text-lg leading-relaxed">
              42 pages. Peer-reviewed. Openly licensed. Everything the Vriksh Vani science team knows about decoding plant biophysics through VPD modelling, FLIR thermal imaging, gas chemometrics, and on-device neural inference &mdash; documented without restriction, shared with the scientific community.
            </p>
            <p className="text-[#A3B18A] leading-relaxed">
              Version 1.2 incorporates updates based on peer review feedback received after the original v1.0 publication in January 2026, including revised statistical methodology in Chapter 6 and an expanded ethics framework in Chapter 7.
            </p>
          </div>

          {/* Whitepaper meta */}
          <Card className="p-8 space-y-5 border border-[#8AD74C]/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: 'Pages', val: '42' },
                { label: 'Published', val: 'July 2026' },
                { label: 'Version', val: '1.2' },
                { label: 'License', val: 'CC BY-NC 4.0' },
              ].map((m, idx) => (
                <div key={idx}>
                  <p className="font-display text-2xl font-bold text-[#8AD74C]">{m.val}</p>
                  <p className="text-xs font-mono text-[#A3B18A] uppercase tracking-wider mt-1">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-white/5 pt-4 space-y-2">
              <p className="text-xs font-mono text-[#A3B18A] text-center">
                <strong className="text-[#F7F6F2]">Authors:</strong> Dr. Ramesh Varma &middot; Karthik Subramanian &middot; Siddhant Tiwari
              </p>
              <p className="text-xs text-[#A3B18A] text-center">
                Version 1.2 updated from v1.0 (January 2026) based on peer review feedback. Licensed CC BY-NC 4.0 &mdash; free to share and adapt for non-commercial purposes with attribution.
              </p>
            </div>
          </Card>

          {/* Abstract */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Abstract</h2>
            </div>
            <div className="space-y-4 text-sm text-[#A3B18A] leading-relaxed border-l-2 border-[#8AD74C]/30 pl-6">
              <p>
                The dominant paradigm in consumer plant care technology relies on a single variable &mdash; soil moisture &mdash; as a proxy for plant health. This approach fails to account for the atmospheric and biochemical complexity that determines whether a plant thrives or declines. We propose that Vapour Pressure Deficit (VPD), measured in real-time from leaf-to-air thermal delta and ambient humidity, is a substantially more predictive signal of plant stress onset than any soil-based measurement, and that multivariate biometric sensing represents the necessary next step in plant care technology.
              </p>
              <p>
                This paper presents the complete technical architecture of the NIH-01 Nature Intelligence Hub &mdash; the first consumer device to integrate FLIR Lepton 3.5 thermal biometric imaging, Bosch BME688 quad-gas analysis (VOC, H&sup2;, ethanol, CO&sup2; equivalent), and on-device neural inference (NTE&trade;) into a single ceramic-housed unit. We describe the sensor fusion pipeline, the INT8 quantized 64-class emotion classification network running at sub-45ms inference latency on ARM Cortex-M4, and the WaveNet-Lite speech synthesis model that generates natural language plant communication in 8 languages entirely without cloud dependency.
              </p>
              <p>
                We validate our architecture against a 12-month longitudinal study across 23 plant species and 847 NIH-01 hubs deployed in domestic environments, demonstrating 94.2% correlation between NIH-01 health scores and expert botanical assessment, and a mean early-warning lead time of 4.3 days before visible stress symptom onset. We also discuss the ethical framework governing anonymised open data collection under differential privacy constraints, and the CC BY 4.0 dataset publication programme that makes all aggregated telemetry freely available to the global research community.
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Table of Contents</h2>
            </div>
            <Card className="divide-y divide-white/5">
              {chapters.map((ch) => (
                <div key={ch.num} className="flex items-center gap-4 py-3 px-6">
                  <span className="font-mono text-xs text-[#8AD74C] w-6 shrink-0">{ch.num}.</span>
                  <span className="flex-1 text-sm text-[#F7F6F2]">{ch.title}</span>
                  <span className="font-mono text-xs text-[#A3B18A] shrink-0">p.{ch.page}</span>
                </div>
              ))}
            </Card>
          </div>

          {/* Download CTA */}
          <Card className="text-center space-y-5 border border-[#E8D07C]/20 py-10">
            <div className="flex items-center justify-center gap-3">
              <FileText className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Download the Whitepaper</h2>
            </div>
            <p className="text-[#A3B18A] max-w-lg mx-auto leading-relaxed">
              The full 42-page PDF includes all figures, sensor calibration tables, longitudinal study methodology, raw correlation data, and the NTE&trade; architecture diagrams.
            </p>
            <Button variant="gold" size="lg" className="inline-flex items-center gap-2.5">
              <Download className="w-5 h-5" /> Download Whitepaper PDF (4.2 MB)
            </Button>
            <p className="text-xs font-mono text-[#A3B18A]">Version 1.2 &middot; July 2026 &middot; CC BY-NC 4.0</p>
          </Card>

          {/* Citation */}
          <Card className="p-6 space-y-3">
            <h3 className="font-display font-bold text-[#F7F6F2]">How to Cite (APA)</h3>
            <div className="bg-[#030504] rounded-xl p-4 font-mono text-xs text-[#A3B18A] leading-relaxed border border-white/5">
              Varma, R., Subramanian, K., &amp; Tiwari, S. (2026). <em className="text-[#F7F6F2]">Nature Intelligence: A technical foundation</em> (Version 1.2). Vriksh Vani Technologies Pvt. Ltd. https://www.vrikshvani.com/nature-intelligence/whitepaper
            </div>
            <p className="text-xs text-[#A3B18A]">
              For LaTeX/BibTeX entries and citation export in other formats, see the{' '}
              <span className="text-[#8AD74C] font-mono">cite</span> tab on the developer portal.
            </p>
          </Card>

          {/* Links */}
          <div className="flex gap-4 flex-wrap">
            <Link href="/nature-intelligence/research">
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" /> View Research Papers
              </Button>
            </Link>
            <Link href="/nature-intelligence/open-data">
              <Button variant="outline" className="flex items-center gap-2">
                <Users className="w-4 h-4" /> Open Data Programme
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
