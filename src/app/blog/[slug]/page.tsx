import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CalendarDays, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import JsonLd, { createArticleJsonLd, createBreadcrumbJsonLd } from '@/components/seo/JsonLd';

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
    category: 'Biophysics',
    date: 'August 2026',
    readTime: '6 min read',
    author: 'Subhash Koli',
    authorRole: 'Founder, Vriksh Vani',
    summary: 'How non-invasive radiometric thermal imaging explores stomatal transpiration changes before visual symptoms appear in tropical houseplants.',
    content: [
      {
        sectionTitle: 'The Physics of Stomatal Transpiration',
        paragraphs: [
          'Plants exchange water vapor and carbon dioxide through microscopic leaf pores called stomata. When a plant photosynthesizes under optimal atmospheric conditions, continuous evaporative cooling lowers the leaf surface temperature relative to ambient room air by 1.5°C to 3.2°C.',
          'When root water uptake declines or vapor pressure deficit (VPD) rises above tolerable thresholds, guard cells lose turgor pressure, forcing stomata to seal tight to prevent desiccation. This stomatal closure halts evaporative cooling, causing the leaf surface temperature to immediately spike toward or above ambient room temperature.',
        ],
      },
      {
        sectionTitle: 'Micro-Radiometric Thermal Arrays in NIH-01 Concept',
        paragraphs: [
          'Traditional soil moisture probes measure electrical conductivity in substrate surrounding roots, missing local root hair hypoxia, soil channeling, or VPD-induced transpiration stress. The FLIR Lepton 3.5 sensor array target in NIH-01 measures true leaf surface radiant thermal energy at 160x120 thermal pixel resolution.',
          'By evaluating spatial thermal patterns across leaf laminae at regular intervals, the NIH-01 edge processor investigates subtle thermal changes indicative of early transpiration shutdown—giving plant owners early insight before physical leaf drooping or tip browning occurs.',
        ],
      },
    ],
  },
  'soil-moisture-probes-vs-thermal': {
    title: 'Why Soil Moisture Probes Measure Dirt (and What Thermal Leaf Cooling Reveals)',
    category: 'Hardware',
    date: 'July 2026',
    readTime: '8 min read',
    author: 'Subhash Koli',
    authorRole: 'Founder, Vriksh Vani',
    summary: 'A comparative exploration of electrical conductivity soil probes vs. non-invasive thermal leaf thermometry under indoor growing conditions.',
    content: [
      {
        sectionTitle: 'The Soil Conductivity Illusion',
        paragraphs: [
          'Most consumer plant sensors use capacitive or resistive metal probes inserted directly into pot soil. These probes measure bulk electrical impedance in a single 2cm region. However, soil moisture distribution in potted houseplants is non-uniform due to root ball density, hydrophobic soil channeling, and mineral salt accumulation.',
          'A probe may register wet soil while surrounding root hairs are suffocating from anoxia, or register dry soil while leaves are actively transpiring comfortably. Moisture probes measure the soil medium—not the plant itself.',
        ],
      },
      {
        sectionTitle: 'Leaf Temperature as a Direct Biophysical Indicator',
        paragraphs: [
          'Leaf surface thermal dynamics reflect the integrated output of plant physiological systems: root water transport, vascular xylem tension, stomatal conductance, and atmospheric demand. When evaporative cooling is active, transpiration is proceeding normally.',
        ],
      },
    ],
  },
  'tinyml-quantization-esp32-s3': {
    title: 'Quantizing TinyML Neural Models for ESP32-S3 Edge Inference',
    category: 'Embedded AI',
    date: 'July 2026',
    readTime: '11 min read',
    author: 'Subhash Koli',
    authorRole: 'Founder, Vriksh Vani',
    summary: 'Engineering on-device neural plant voice synthesis on low-power microcontrollers with volatile SRAM privacy.',
    content: [
      {
        sectionTitle: 'On-Device TinyML Requirements',
        paragraphs: [
          'Privacy and low latency require that no telemetry audio or thermal frame buffers leave the NIH-01 hardware hub. To achieve this, quantized neural models run using TensorFlow Lite for Microcontrollers.',
          'Running on an ESP32-S3 dual-core microcontroller clocked at 240MHz, inference executes locally while maintaining low power consumption and total data privacy.',
        ],
      },
    ],
  },
  'tinyml-quantization-cortex-m4': {
    title: 'Quantizing TinyML Neural Models for ESP32-S3 Edge Inference',
    category: 'Embedded AI',
    date: 'July 2026',
    readTime: '11 min read',
    author: 'Subhash Koli',
    authorRole: 'Founder, Vriksh Vani',
    summary: 'Engineering on-device neural plant voice synthesis on low-power microcontrollers with volatile SRAM privacy.',
    content: [
      {
        sectionTitle: 'On-Device TinyML Requirements',
        paragraphs: [
          'Privacy and low latency require that no telemetry audio or thermal frame buffers leave the NIH-01 hardware hub. To achieve this, quantized neural models run using TensorFlow Lite for Microcontrollers.',
          'Running on an ESP32-S3 dual-core microcontroller clocked at 240MHz, inference executes locally while maintaining low power consumption and total data privacy.',
        ],
      },
    ],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = ARTICLES_DB[params.slug];
  if (!article) return { title: 'Article Not Found — Vriksh Vani' };

  return {
    title: `${article.title} — Vriksh Vani Notes`,
    description: article.summary,
    alternates: {
      canonical: `https://www.vrikshvani.com/blog/${params.slug}`,
    },
    openGraph: {
      title: `${article.title} | Vriksh Vani`,
      description: article.summary,
      url: `https://www.vrikshvani.com/blog/${params.slug}`,
      siteName: 'Vriksh Vani',
      type: 'article',
      publishedTime: '2026-08-01T00:00:00Z',
      authors: [article.author],
      tags: [article.category, 'Nature Intelligence', 'Plant Biophysics'],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(ARTICLES_DB).map((slug) => ({ slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = ARTICLES_DB[params.slug];
  if (!article) notFound();

  const articleJsonLd = createArticleJsonLd({
    headline: article.title,
    description: article.summary,
    datePublished: '2026-08-01T00:00:00Z',
    dateModified: '2026-08-01T00:00:00Z',
    authorName: article.author,
    authorUrl: 'https://www.vrikshvani.com/about',
    url: `https://www.vrikshvani.com/blog/${params.slug}`,
  });

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: article.title, url: `/blog/${params.slug}` },
  ]);

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />

      <article className="pt-36 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-[#A3B18A] hover:text-[#8AD74C] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to All Notes
        </Link>

        {/* Article Header */}
        <div className="space-y-6">
          <Badge variant="lime">{article.category}</Badge>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#F7F6F2] leading-tight">
            {article.title}
          </h1>
          <p className="text-[#A3B18A] text-lg sm:text-xl leading-relaxed">
            {article.summary}
          </p>

          <div className="flex items-center justify-between border-y border-white/10 py-4 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center font-display font-bold text-sm text-[#8AD74C]">
                {article.author.charAt(0)}
              </div>
              <div>
                <div className="font-display font-semibold text-sm text-[#F7F6F2]">{article.author}</div>
                <div className="text-xs text-[#A3B18A] font-mono">{article.authorRole}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#A3B18A]">
              <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" />{article.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-10 text-base sm:text-lg text-[#A3B18A] leading-relaxed">
          {article.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F7F6F2] pt-4">
                {sec.sectionTitle}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Article Footer Card */}
        <Card className="p-8 border-[#8AD74C]/20 bg-[#0F2B18]/30 space-y-4">
          <Badge variant="gold">Vriksh Vani Research Journey</Badge>
          <h3 className="font-display text-xl font-bold text-[#F7F6F2]">
            Interested in Nature Intelligence research?
          </h3>
          <p className="text-sm text-[#A3B18A] leading-relaxed">
            We publish our findings openly and invite fellow botanists, hardware engineers, and developers to explore plant biophysics with us.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link href="/waitlist">
              <Button variant="primary" size="sm">Join Research Waitlist →</Button>
            </Link>
            <Link href="/nature-intelligence/research">
              <Button variant="outline" size="sm">Explore Open Hypotheses</Button>
            </Link>
          </div>
        </Card>
      </article>

      <Footer />
    </main>
  );
}
