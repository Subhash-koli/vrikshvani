import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import { ArrowLeft, Clock, Calendar, User, Share2, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ArticleData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  summary: string;
  content: Array<{ sectionTitle: string; paragraphs: string[] }>;
}

const ARTICLES_DB: Record<string, ArticleData> = {
  'stomatal-conductance-flir-thermal': {
    title: 'Measuring Stomatal Conductance with FLIR Lepton Thermal Arrays',
    category: 'Bio-Physics',
    date: 'August 2026',
    readTime: '6 min read',
    author: 'Dr. Siddhant Tiwari',
    authorRole: 'Head of Biophysics, Vriksh Vani Labs',
    summary: 'How non-invasive micro-radiometric thermal imaging detects stomatal transpiration shutdown 36 hours before visual symptoms appear in tropical houseplants.',
    content: [
      {
        sectionTitle: 'The Physics of Stomatal Transpiration',
        paragraphs: [
          'Plants exchange water vapor and carbon dioxide through microscopic leaf pores called stomata. When a plant photosynthesizes under optimal atmospheric conditions, continuous evaporative cooling lowers the leaf surface temperature relative to ambient room air by 1.5°C to 3.2°C.',
          'When root water uptake declines or vapor pressure deficit (VPD) rises above tolerable thresholds, guard cells lose turgor pressure, forcing stomata to seal tight to prevent desiccation. This stomatal closure halts evaporative cooling, causing the leaf surface temperature to immediately spike toward or above ambient room temperature.',
        ],
      },
      {
        sectionTitle: 'Micro-Radiometric Thermal Arrays in NIH-01',
        paragraphs: [
          'Traditional soil moisture probes measure electrical conductivity in substrate surrounding roots, missing local root hair hypoxia, soil channeling, or VPD-induced transpiration stress. The FLIR Lepton 3.5 sensor array in NIH-01 measures true leaf surface radiant thermal energy at 80x60 thermal pixel resolution.',
          'By sampling spatial thermal gradients across leaf laminae at 1-minute intervals, the NIH-01 edge processor detects minute thermal spikes (+0.4°C/hr) indicative of early transpiration shutdown—giving plant owners a 36-hour head start before physical leaf drooping or tip browning occurs.',
        ],
      },
    ],
  },
  'soil-moisture-probes-vs-thermal': {
    title: 'Why Soil Moisture Probes Lie (and Why Thermal Leaf Cooling Never Does)',
    category: 'Hardware',
    date: 'July 2026',
    readTime: '8 min read',
    author: 'Elena Vance',
    authorRole: 'Principal Sensor Architect',
    summary: 'A comparative analysis of electrical conductivity soil probes vs. non-invasive thermal leaf thermometry under indoor growing conditions.',
    content: [
      {
        sectionTitle: 'The Soil Conductivity Illusion',
        paragraphs: [
          'Most consumer plant sensors use capacitive or resistive metal probes inserted directly into pot soil. These probes measure bulk electrical impedance in a single 2cm region. However, soil moisture distribution in potted houseplants is non-uniform due to root ball density, hydrophobic soil channeling, and mineral salt accumulation.',
          'A probe may register 80% wet soil while surrounding root hairs are suffocating from anoxia, or register 10% dry soil while leaves are actively transpiring comfortably. Moisture probes measure the dirt—not the plant.',
        ],
      },
      {
        sectionTitle: 'Leaf Temperature as the Ultimate Biophysical Truth',
        paragraphs: [
          'Leaf surface thermal dynamics represent the integrated output of all plant physiological systems: root water transport, vascular xylem tension, stomatal conductance, and atmospheric demand. The leaf never lies: if evaporative cooling is active, the plant is photosynthesizing happily.',
        ],
      },
    ],
  },
  'tinyml-quantization-cortex-m4': {
    title: 'Quantizing TinyML Neural Models for ARM Cortex-M4 NPU Inference',
    category: 'Embedded AI',
    date: 'July 2026',
    readTime: '11 min read',
    author: 'Marcus Chen',
    authorRole: 'Embedded Edge AI Lead',
    summary: 'Engineering zero-cloud-latency neural plant voice synthesis on ultra-low-power microcontrollers with 100% volatile SRAM privacy.',
    content: [
      {
        sectionTitle: 'On-Device TinyML Requirements',
        paragraphs: [
          'Privacy and zero-latency require that no telemetry audio or thermal frame buffers leave the NIH-01 hardware hub. To achieve this, we quantized a 14-layer biophysical transformer model down to INT8 precision using TensorFlow Lite for Microcontrollers.',
          'Running on an ARM Cortex-M4 NPU clocked at 120MHz, inference executes at <45ms per sensor sampling frame while consuming under 18mW of power.',
        ],
      },
    ],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = ARTICLES_DB[params.slug];
  if (!article) return { title: 'Article Not Found — Vriksh Vani' };

  return {
    title: `${article.title} — Vriksh Vani Dispatch`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://vrikshvani.com/blog/${params.slug}`,
    },
  };
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = ARTICLES_DB[params.slug];
  if (!article) {
    notFound();
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      <article className="pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Back to Blog */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-[#A3B18A] hover:text-[#8AD74C] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Research Hub
          </Link>

          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-[#A3B18A]">
              <Badge variant="lime">{article.category}</Badge>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#F7F6F2] leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#A3B18A] leading-relaxed">
              {article.summary}
            </p>

            {/* Author Box */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center text-[#8AD74C]">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#F7F6F2]">{article.author}</p>
                <p className="text-xs text-[#A3B18A]">{article.authorRole}</p>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-8 text-sm sm:text-base text-[#F7F6F2]/90 leading-relaxed font-sans">
            {article.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-[#8AD74C] pt-4">
                  {sec.sectionTitle}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-[#A3B18A]">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Newsletter Capture */}
          <NewsletterSection variant="compact" />
        </div>
      </article>

      <Footer />
    </main>
  );
}
