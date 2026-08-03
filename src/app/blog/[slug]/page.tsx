import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CalendarDays, Clock, User } from 'lucide-react';
import Link from 'next/link';
import NewsletterSection from '@/components/sections/NewsletterSection';

// Static article data — in production this would come from Prisma/CMS
const articles: Record<string, {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  intro: string;
  body: string[];
}> = {
  'vpd-explained': {
    title: "Vapour Pressure Deficit (VPD) Explained for Plant Parents",
    author: "Dr. Ramesh Varma",
    date: "July 14, 2026",
    readTime: "8 min read",
    category: "Bio-Physics",
    intro: "VPD is the single most important environmental variable governing whether your plant thrives or slowly declines. Understanding it changes everything about indoor plant care.",
    body: [
      "Vapour Pressure Deficit (VPD) is the difference between the amount of moisture the air could hold at saturation and the amount it currently holds. A plant's stomatal aperture — the microscopic pores on leaf surfaces responsible for gas exchange and transpiration — responds directly to ambient VPD.",
      "When VPD is too low (air is too humid), transpiration slows, nutrient uptake stagnates, and roots become waterlogged. When VPD is too high (air is too dry), stomata slam shut to prevent desiccation, photosynthesis collapses, and the plant enters survival mode.",
      "The Vriksh Vani NIH-01 hub measures VPD by computing the differential between leaf surface temperature (captured via FLIR Lepton 3.5 thermal array) and ambient air temperature/humidity (captured via Bosch BME688 sensor), giving you a real-time biometric signal that no soil probe can replicate.",
      "For most tropical houseplants like Monstera Deliciosa or Ficus Lyrata, the target VPD range sits between 0.8 and 1.4 kPa. For succulents and cacti, healthy VPD ranges extend to 2.0 kPa. Our app alerts you the moment your plant drifts outside its species-specific target zone.",
    ],
  },
  'flir-thermal-imaging': {
    title: "Why FLIR Thermal Imaging Beats Every Soil Sensor Ever Made",
    author: "Karthik Subramanian",
    date: "June 22, 2026",
    readTime: "6 min read",
    category: "Hardware Engineering",
    intro: "Soil sensors measure a proxy. Thermal leaf imaging measures the source. Here's why the difference is critical for rare plant survival.",
    body: [
      "Traditional resistive and capacitive soil sensors measure electrical conductivity in the growing medium as a proxy for moisture content. The problem is fundamental: by the time a plant's roots are stressed enough to alter soil conductivity, leaf-level water deficit has already begun — often hours earlier.",
      "The FLIR Lepton 3.5 thermal camera embedded inside the NIH-01 hub operates in the Long-Wave Infrared (LWIR) spectrum from 8 to 14 micrometres. At this wavelength, the thermal emission from a plant's leaf surface encodes real-time stomatal conductance data.",
      "As a plant begins closing its stomata under water or heat stress, transpirational cooling decreases. Leaf surface temperature rises by 0.3°C to 1.2°C before any visible wilting occurs. The NIH-01 detects this 0.05°C resolution thermal shift and triggers an early-warning alert — up to 6 hours before visible stress.",
      "This is why Vriksh Vani can claim something no soil sensor ever could: we detect plant distress before the plant has suffered damage.",
    ],
  },
  'nte-voice-architecture': {
    title: "Inside NTE™: How We Taught Plants to Speak in 8 Languages",
    author: "Siddhant Tiwari",
    date: "May 8, 2026",
    readTime: "10 min read",
    category: "AI / TinyML",
    intro: "A deep-dive into the Neural Translation Engine — the quantized TinyML model that converts biometric telemetry into conversational plant speech.",
    body: [
      "The Neural Translation Engine (NTE™) is a custom-trained INT8 quantized neural network running entirely on the ARM Cortex-M4 processor inside the NIH-01 hub. It requires no internet connection, no cloud API call, and no audio streaming.",
      "The NTE™ model was trained on a proprietary dataset of 140,000 labeled plant biometric state vectors, each paired with verified human-written speech transcripts across 8 languages: English, Hindi, Tamil, Kannada, Telugu, Spanish, French, and German.",
      "The inference pipeline takes 12 real-time sensor features — including leaf surface temperature delta, ambient VPD, VOC gas resistance, air pressure trend, time-of-day, season, and species ID — and maps them to one of 64 emotional state classes such as 'Photosynthetic Joy', 'Transpiration Fatigue', or 'Root Exploration Mode'.",
      "Each emotional state class links to a curated library of 20–40 speech templates per language. The selected template is synthesised using our on-device WaveNet-Lite voice engine and emitted through the hub's built-in speaker at 44.1kHz audio quality. Total inference-to-speech latency: under 45 milliseconds.",
    ],
  },
  'calathea-humidity-science': {
    title: "Why Calathea Are So Hard: The VPD Science Behind Tropical Drama Queens",
    author: "Dr. Ramesh Varma",
    date: "August 1, 2026",
    readTime: "7 min read",
    category: "Bio-Physics",
    intro: "Calathea have a reputation for being impossible. They're not. They simply require atmospheric precision that most home environments never accidentally provide.",
    body: [
      "The genus Calathea (recently reclassified as Goeppertia) originates from the understorey of Amazonian and Central American tropical rainforests. In their native habitat, these plants experience relative humidity of 70–90% year-round and almost no direct sunlight — conditions that are brutally difficult to replicate in a British flat or Californian apartment.",
      "The primary mechanism of Calathea distress is VPD-driven leaf tip necrosis. When ambient VPD exceeds 0.9 kPa (which happens easily in centrally heated or air-conditioned rooms), the stomata on Calathea leaves close aggressively. Unlike hardier tropical species that can buffer moderate VPD stress, Calathea evolved in such consistently humid conditions that they have minimal cellular machinery for managing desiccation.",
      "The result is the brown, crispy leaf edges that every Calathea owner dreads. By the time you see the discolouration, the stomatal closure event happened 4–8 hours earlier. The NIH-01 hub detects this VPD exceedance in real time via the Bosch BME688 sensor and the FLIR leaf surface temperature differential, alerting you before cellular damage occurs.",
      "Target VPD for Calathea: 0.5–0.9 kPa. Target temperature: 22–26°C with no cold drafts. Target humidity: 60–80% RH. Consider a humidifier with a hygrometer, and keep Calathea away from air conditioning vents, heating radiators, and single-glazed windows. Grouping them with other humidity-loving plants creates a beneficial microclimate.",
    ],
  },
  'root-zone-microbiome': {
    title: "The Root Zone Microbiome: What Soil Science Reveals About Indoor Plant Health",
    author: "Karthik Subramanian",
    date: "July 28, 2026",
    readTime: "9 min read",
    category: "Soil Science",
    intro: "The rhizosphere — the 2mm zone directly surrounding plant roots — contains more microbial diversity than anywhere else on Earth. Understanding it transforms how you grow.",
    body: [
      "A single gram of healthy rhizosphere soil contains between 1 billion and 10 billion microbial cells from over 10,000 different species. This community of bacteria, fungi, protozoa, and archaea is not a passive bystander in plant health — it is an active partner in nutrient cycling, pathogen suppression, and hormonal signalling.",
      "Mycorrhizal fungi are perhaps the best understood component. These filamentous fungi colonise plant roots and extend their hyphae networks outward, dramatically increasing the root's effective surface area. In exchange for photosynthetically-produced sugars from the plant, mycorrhizae deliver phosphorus, zinc, copper, and water to the plant from soil regions roots cannot reach.",
      "The VOC sensors in the NIH-01 hub (Bosch BME688) detect volatile organic compounds emitted from the root zone through substrate outgassing. Healthy rhizosphere activity produces a characteristic VOC signature — a baseline level of microbial metabolites. Elevated VOC readings can indicate overwatering, root rot onset, or substrate decomposition.",
      "This is why at Vriksh Vani we track gas resistance alongside thermal data. The combination creates a holistic biometric picture — above-ground leaf transpiration plus below-ground root zone chemistry — that no single sensor type can provide alone.",
    ],
  },
  'designing-nih-01': {
    title: "Designing NIH-01: From First Sketch to Kiln-Fired Ceramic Hub",
    author: "Siddhant Tiwari",
    date: "July 20, 2026",
    readTime: "12 min read",
    category: "Design & Craft",
    intro: "Most tech hardware looks like it belongs in a data centre. We wanted something you'd place next to your Monstera and feel proud of. Here's the 18-month design journey.",
    body: [
      "The original NIH-01 prototype was a breadboard wrapped in 3D-printed PLA housing. It worked technically — the FLIR Lepton 3.5 module was reading leaf surface temperatures, the BME688 was capturing quad-gas data, and a Raspberry Pi Zero was running the inference pipeline. But it looked exactly like what it was: a prototype. It was invisible on a desk, unremarkable, generic.",
      "The product design philosophy shift came when we asked ourselves a fundamental question: where does a plant monitor belong? It belongs next to a plant. And what surrounds a plant in a beautifully curated home? Ceramics. Terracotta pots. Glazed planters. Woven baskets. The NIH-01 needed to belong in that world, not the world of USB hubs and router boxes.",
      "We partnered with a traditional ceramic studio in Bengaluru — one that has been hand-throwing clay for over four decades. The NIH-01 housing is kiln-fired at 1,250°C using a stoneware clay body sourced from Rajasthan. The glaze is applied by hand in three layers and fired twice to achieve the depth of colour and texture that distinguishes our Biophilic Sage, Cream White, and Obsidian Charcoal finishes.",
      "The challenge of embedding precision electronics inside a kiln-fired ceramic body required 11 months of prototyping. The ceramic must be post-fired machined — not cast — to achieve the tight tolerances required for the FLIR module's optical window. The sensor array sits in a precision-milled recess sealed with a sapphire glass lens that is thermally bonded to the ceramic shell after the final firing cycle.",
      "The result is a device that feels like it has always belonged on your windowsill. That was the only acceptable outcome.",
    ],
  },
};


export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    return (
      <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
        <Header />
        <div className="pt-48 pb-24 text-center">
          <h1 className="font-display text-4xl font-bold text-[#F7F6F2]">Article Not Found</h1>
          <p className="text-[#A3B18A] mt-4">This article does not exist or has been moved.</p>
          <Link href="/blog" className="mt-8 inline-block">
            <Button variant="outline">← Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      <article className="pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-4 space-y-8">

          {/* Meta */}
          <div className="space-y-4">
            <Link href="/blog">
              <span className="text-xs font-mono text-[#8AD74C] hover:underline cursor-pointer">← Vriksh Vani Dispatch</span>
            </Link>
            <Badge variant={article.category === 'Bio-Physics' ? 'lime' : article.category === 'Hardware Engineering' ? 'gold' : 'glass'}>
              {article.category}
            </Badge>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2] leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#A3B18A]">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {article.author}</span>
              <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {article.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime}</span>
            </div>
          </div>

          {/* Intro */}
          <p className="text-base md:text-lg text-[#F7F6F2] leading-relaxed border-l-2 border-[#8AD74C] pl-6 italic">
            {article.intro}
          </p>

          {/* Body */}
          <div className="space-y-6 text-[#A3B18A] leading-relaxed text-base">
            {article.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* CTA */}
          <Card className="p-8 space-y-4 border-[#8AD74C]/30 text-center">
            <p className="font-display text-xl font-bold text-[#F7F6F2]">Experience This Science First-Hand.</p>
            <p className="text-sm text-[#A3B18A]">Reserve your Batch 01 NIH-01 Nature Intelligence Hub and hear your plants speak.</p>
            <Link href="/waitlist">
              <Button variant="primary" size="lg">Pre-Order Founding Unit →</Button>
            </Link>
          </Card>
        </div>
      </article>

      <NewsletterSection />
      <Footer />
    </main>
  );
}
