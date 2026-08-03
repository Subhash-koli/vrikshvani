import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Clock, User, Calendar, ArrowLeft, Share2 } from 'lucide-react';

const articles: Record<string, {
  title: string; subtitle: string; author: string; date: string; readTime: string;
  category: string; tags: string[]; body: string[];
}> = {
  'vpd-why-it-matters': {
    title: 'VPD: Why It Matters More Than Soil Moisture',
    subtitle: 'The biophysical metric that professionals swear by — and how NIH-01 makes it accessible to every plant keeper.',
    author: 'Dr. Arjun Mehta', date: 'July 28, 2026', readTime: '8 min read',
    category: 'Science', tags: ['VPD', 'Biophysics', 'Plant Care', 'NIH-01'],
    body: [
      'For decades, plant care advice has centred on one variable: soil moisture. Check the top inch. Buy a cheap probe. Water when dry. The problem is that soil moisture tells you nothing about what\'s happening inside the leaf — and it\'s inside the leaf where plant stress begins.',
      'Vapour Pressure Deficit (VPD) is the difference between how much water vapour the air can hold at a given temperature and how much it actually holds. When VPD is too high, the air is so dry relative to the leaf\'s temperature that the plant slams its stomata shut, halting photosynthesis and transpiration entirely. When VPD is too low, the air is so saturated that transpiration slows, pathogens thrive, and nutrient uptake falls.',
      '## The Formula Professional Growers Use',
      'VPD (kPa) = SVP_leaf − SVP_air × (RH / 100), where SVP is Saturation Vapour Pressure calculated from the Magnus formula: SVP = 0.6108 × exp(17.27 × T / (T + 237.3)).',
      'The critical insight: you need the *leaf* surface temperature, not the air temperature. A leaf in direct sun can be 4–8°C warmer than the surrounding air, which completely changes the VPD calculation. This is why NIH-01\'s FLIR Lepton 3.5 thermal sensor is not a luxury — it\'s a necessity for accurate VPD.',
      '## What the Ranges Mean',
      'Below 0.4 kPa: Disease zone. Condensation risk, low transpiration, nutrient stagnation. Between 0.4–0.8 kPa: Seedling and propagation zone. Gentle conditions for fragile tissue. Between 0.8–1.2 kPa: Optimal for most tropical houseplants — Monstera, Philodendron, Pothos. Between 1.2–1.6 kPa: Ideal for succulents and cacti. Promotes firm growth. Above 2.0 kPa: Stress zone. Stomatal closure, wilting, accelerated water loss.',
      '## Why Soil Moisture Misses This Entirely',
      'A plant can have perfectly moist soil and be under severe VPD stress simultaneously. This happens constantly in heated offices in winter, where the heating system dries the air to 20% RH while the plant sits in recently-watered soil. The plant\'s leaves are in crisis while the soil is fine. Conversely, a plant with dry soil in a properly humidified greenhouse may be completely unstressed.',
      '## NTE™: When VPD Speaks',
      'NIH-01\'s NTE™ engine translates VPD readings into emotional language the plant can "express". A VPD of 2.8 kPa triggers the Parched & Yearning state — a voice that conveys urgency without distress. A VPD of 0.9 kPa produces Photosynthetic Joy — calm, productive contentment. This isn\'t anthropomorphism for its own sake. It\'s a cognitive interface that makes a complex biophysical metric immediately actionable.',
      'Understanding VPD is the single highest-leverage shift you can make in how you care for plants. NIH-01 makes that shift effortless.',
    ],
  },
  'nte-voice-architecture': {
    title: 'How We Built the NTE™ Voice: Architecture of a Plant\'s Inner Life',
    subtitle: 'The engineering decisions behind translating leaf temperature differentials into emotionally resonant speech — entirely on-device.',
    author: 'Vriksh Vani Engineering', date: 'July 21, 2026', readTime: '11 min read',
    category: 'Engineering', tags: ['NTE', 'On-device AI', 'ESP32-S3', 'Voice Synthesis'],
    body: [
      'The NTE™ (Nature Translated to Emotion) engine is the most technically complex component of NIH-01. Its constraints were severe from the start: run on an ESP32-S3 with 512KB SRAM and 16MB flash, produce 22kHz audio with sub-200ms latency, never transmit audio to the cloud, and be genuinely emotionally expressive rather than a simple text-to-speech playback system.',
      '## The State Machine',
      'At the core of NTE™ is a 16-state biometric emotion classifier. Every 60 seconds, the sensor fusion layer produces a composite vector: [leaf_temp, vpd, voc_resistance, health_score, trend_direction]. This vector is mapped through a lookup table — not a deep learning model, because we need deterministic latency — into one of 16 named emotion states: Photosynthetic Joy, Morning Awakening, Parched & Yearning, Thermal Stress, Root Contemplation, and 11 more.',
      '## Audio Synthesis Without a Neural TTS',
      'Running a neural text-to-speech model on ESP32-S3 is not feasible at 22kHz quality. Instead, NTE™ uses a parametric synthesis approach: pre-recorded phoneme segments are concatenated and pitch-shifted in real time based on the emotion state\'s affective parameters (pitch_mean, pitch_variance, speech_rate, breathiness). This produces genuinely variable, non-repetitive speech from a 3.8MB audio bank stored in flash.',
      '## The Four Voice Personalities',
      'Users choose from four voice personalities that each apply different affective parameter overlays on top of the base emotion state: Calm Warm (our most popular), Playful Curious (higher pitch variance, faster rate), Scientific Precision (flat affect, data-forward phrasing), and Meditative Zen (slower rate, extended pauses). The same VPD reading produces audibly different speech across all four personalities.',
      '## Latency Budget',
      'Our target was under 200ms from sensor reading completion to first audio sample. Sensor fusion: 12ms. State classification: 3ms. Phrase selection: 8ms. Audio synthesis: 94ms. Speaker buffer fill: 11ms. Total: 128ms. We had 72ms of headroom, which we used to add a 40ms pause and a soft fade-in that makes the voice feel more natural rather than abrupt.',
      '## Privacy by Architecture',
      'The microphone on NIH-01 exists only for ambient acoustic sensing to detect environmental anomalies — it is not used for voice capture, wake words, or any form of audio transmission. The speaker is output-only. All synthesis happens on-device, and no audio data ever leaves the hub. This was a founding constraint, not an afterthought.',
      'NTE™ is our answer to a simple question: what if plants could tell you exactly what they need, in a language you understand intuitively? The engineering is complex so that the experience is effortless.',
    ],
  },
  'open-data-programme-launch': {
    title: 'Launching the Vriksh Vani Open Data Programme',
    subtitle: 'Why we\'re giving 2.1 million plant biometric readings to the global research community — for free, forever.',
    author: 'Subhash Koli', date: 'July 14, 2026', readTime: '6 min read',
    category: 'Science', tags: ['Open Data', 'Research', 'CC BY 4.0', 'IISc'],
    body: [
      'Today we\'re publishing the first four datasets from the Vriksh Vani Open Data Programme: 2.1 million anonymised plant biometric readings covering 847 species, collected by our beta community with informed opt-in consent, licensed CC BY 4.0, and available for download without registration.',
      'We built NIH-01 to give individuals a window into their plants\' inner lives. But we always knew that the aggregate data — millions of readings across thousands of plant-human relationships — could be something far more valuable to science.',
      '## What\'s in the Datasets',
      'Each dataset contains time-stamped records of: leaf surface temperature (°C), ambient temperature and humidity, computed VPD (kPa), VOC gas resistance (Ω), AI-classified health score (0–100), and NTE™ emotion state label. All user identifiers have been replaced with pseudonymous hub IDs. Location data is coarsened to city level. Plant species are included where users have confirmed identification.',
      '## What We Hope Researchers Will Do With It',
      'We have already seen interest from three research directions: circadian rhythm mapping across species (do tropical plants exhibit stronger morning VPD response than temperate species?), climate adaptation proxies (can indoor plant VPD patterns predict outdoor humidity trends?), and urban microclimate studies (how much does a living wall of 200 plants change the VPD of a 50m² office?). We don\'t know which of these will yield something publishable. That\'s the point.',
      '## Our Partners',
      'The Indian Institute of Science (IISc) Bengaluru and the Royal Botanic Gardens Kew have both agreed to validate the dataset methodology and publish their initial analyses. We\'re grateful for their scientific rigour and their willingness to treat data from an early-stage startup as peer-review worthy.',
      '## The Commitment',
      'The Open Data Programme is not a marketing initiative. Datasets will be published quarterly, regardless of whether they reflect positively or negatively on NIH-01\'s performance. If the data shows our sensors have systematic biases, we\'ll publish that too and fix the sensors. Science requires honesty. So does a company that wants to last a hundred years.',
      'Download the datasets at vrikshvani.com/nature-intelligence/open-data.',
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: 'Article Not Found — Vriksh Vani' };
  return {
    title: `${article.title} — Vriksh Vani Blog`,
    description: article.subtitle,
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <article className="pt-36 pb-24 px-4">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Back */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#A3B18A] hover:text-[#8AD74C] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <div className="space-y-5">
            <Badge variant={article.category === 'Engineering' ? 'gold' : 'lime'}>{article.category}</Badge>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2] leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-[#A3B18A] leading-relaxed">{article.subtitle}</p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-[#A3B18A] border-t border-white/10 pt-5">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{article.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{article.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{article.readTime}</span>
              <button className="flex items-center gap-1.5 ml-auto hover:text-[#8AD74C] transition-colors">
                <Share2 className="w-4 h-4" />Share
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-6">
            {article.body.map((block, idx) => {
              if (block.startsWith('## ')) {
                return <h2 key={idx} className="font-display text-xl font-bold text-[#F7F6F2] mt-8">{block.replace('## ', '')}</h2>;
              }
              return <p key={idx} className="text-[#A3B18A] leading-relaxed">{block}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
            {article.tags.map((tag, i) => (
              <span key={i} className="text-xs font-mono bg-[#0F2B18] border border-white/10 rounded-full px-3 py-1 text-[#8AD74C]">{tag}</span>
            ))}
          </div>

          {/* CTA */}
          <Card className="p-8 text-center border-[#8AD74C]/20 space-y-4">
            <p className="font-display text-xl font-bold text-[#F7F6F2]">Understand Your Plants Like Never Before.</p>
            <p className="text-sm text-[#A3B18A]">NIH-01 brings biometric intelligence to every home. Join the Batch 01 waitlist.</p>
            <Link href="/product">
              <Button variant="primary">Join the Waitlist →</Button>
            </Link>
          </Card>
        </div>
      </article>
      <Footer />
    </main>
  );
}
