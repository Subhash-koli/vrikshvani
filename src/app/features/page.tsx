import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  Thermometer, Droplets, Wind, Mic, Brain, Wifi,
  BarChart3, Bell, Smartphone, Shield, Zap, Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'NIH-01 Hardware & AI Features | Vriksh Vani',
  description: 'Full feature list of NIH-01: FLIR Lepton 3.5 thermal array, Bosch BME688 quad-gas sensor, ARM Cortex-M4 NPU, real-time VPD, Home Assistant MQTT, and offline NTE™ voice.',
  keywords: ['NIH-01 features', 'FLIR thermal plant sensor', 'Bosch BME688', 'on-device voice AI', 'Home Assistant plant sensor', 'VPD computation'],
  alternates: {
    canonical: 'https://www.vrikshvani.com/features',
  },
  openGraph: {
    title: 'NIH-01 Hardware & AI Features | Vriksh Vani',
    description: 'FLIR thermal leaf optics, quad-gas analysis, ARM Cortex-M4 NPU, and real-time VPD computation in a kiln-fired ceramic casing.',
    url: 'https://www.vrikshvani.com/features',
    siteName: 'Vriksh Vani',
    images: [
      {
        url: 'https://www.vrikshvani.com/og?title=NIH-01%20Hardware%20%26%20AI%20Features&subtitle=Thermal%2C%20Quad-Gas%20%26%20NTE%E2%84%A2%20Voice',
        width: 1200,
        height: 630,
        alt: 'NIH-01 Hardware & AI Features',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIH-01 Hardware & AI Features | Vriksh Vani',
    description: 'Explore the FLIR thermal array, quad-gas sensor, and on-device AI powering NIH-01.',
    images: ['https://www.vrikshvani.com/og?title=NIH-01%20Hardware%20%26%20AI%20Features&subtitle=Thermal%2C%20Quad-Gas%20%26%20NTE%E2%84%A2%20Voice'],
    creator: '@vrikshvani',
  },
};

const coreFeatures = [
  {
    icon: Thermometer,
    title: 'Leaf Surface Thermal Sensing',
    desc: 'FLIR Lepton 3.5 thermal array captures your plant\'s exact leaf surface temperature (±0.05°C) — not the ambient air around it. The only true measure of transpiration stress.',
    colour: 'text-[#E8D07C]',
    bg: 'bg-[#E8D07C]/10',
    border: 'border-[#E8D07C]/20',
  },
  {
    icon: Droplets,
    title: 'VPD Real-Time Computation',
    desc: 'NIH-01 computes Vapour Pressure Deficit every 60 seconds using leaf temperature + SHT41 ambient humidity. Colour-coded from 0.0–4.0 kPa with species-specific target zones.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: Wind,
    title: 'Gas Resistance Soil Proxy',
    desc: 'The BME688 gas sensor reads volatile organic compounds as a non-invasive proxy for soil microbial health and moisture — no probes, no soil contact required.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: Mic,
    title: 'NTE™ Voice Translation',
    desc: 'Nature Translated to Emotion™. An on-device acoustic synthesis model converts real biometric readings into a calm, expressive plant voice — spoken through the integrated speaker.',
    colour: 'text-[#E8D07C]',
    bg: 'bg-[#E8D07C]/10',
    border: 'border-[#E8D07C]/20',
  },
  {
    icon: Brain,
    title: 'On-Device Neural Inference',
    desc: 'All AI runs on the ESP32-S3 processor — no cloud latency, no internet dependency. Species recognition and emotion-state classification happen in under 200ms.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: BarChart3,
    title: '90-Day Biometric History',
    desc: 'View time-series graphs of VPD, thermal delta, gas resistance, and health score trends over the last 90 days. Spot seasonal patterns and optimise care schedules.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: Bell,
    title: 'Intelligent Alert System',
    desc: 'Threshold-based alerts for VPD spikes, thermal stress, low moisture, and health score drops. Delivered as push notifications, webhook events, or NTE™ voice warnings.',
    colour: 'text-[#E8D07C]',
    bg: 'bg-[#E8D07C]/10',
    border: 'border-[#E8D07C]/20',
  },
  {
    icon: Smartphone,
    title: 'Companion App (iOS & Android)',
    desc: 'The Vriksh Vani app lets you name your plant, choose a voice personality (Calm Warm / Playful Curious / Scientific / Zen), view live readings, and manage multiple NIH-01 hubs.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: Wifi,
    title: 'Smart Home Integration',
    desc: 'NIH-01 connects via Wi-Fi and BLE to trigger humidifiers, grow lights, and fans through Apple HomeKit, Google Home, Amazon Alexa, and Zapier webhooks.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: Shield,
    title: 'Privacy-First Design',
    desc: 'No voice audio is ever recorded or transmitted. All inference is on-device. Plant biometric data is only shared with the Open Data Programme if you explicitly opt in.',
    colour: 'text-[#E8D07C]',
    bg: 'bg-[#E8D07C]/10',
    border: 'border-[#E8D07C]/20',
  },
  {
    icon: Zap,
    title: 'Offline Mode',
    desc: 'NIH-01 continues sensing, speaking, and logging locally without internet. Readings sync to the cloud automatically when connectivity is restored.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: Globe,
    title: 'Open Data Contribution',
    desc: 'Opt in to contribute anonymised biometric readings to the Vriksh Vani Open Data Programme — a global plant science dataset shared under CC BY 4.0.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
];

const specs = [
  { label: 'Thermal Sensor', value: 'FLIR Lepton 3.5 (160×120, ±0.05°C)' },
  { label: 'Humidity Sensor', value: 'SHT41 (±1.8% RH, ±0.2°C)' },
  { label: 'Gas Sensor', value: 'BME688 (VOC, CO₂ proxy, pressure)' },
  { label: 'Processor', value: 'ESP32-S3 dual-core @ 240 MHz' },
  { label: 'Connectivity', value: 'Wi-Fi 4 (802.11n) + BLE 5.0' },
  { label: 'Speaker', value: '1.5W full-range, 300–18,000 Hz' },
  { label: 'Battery', value: '2,400 mAh LiPo — 7 days per charge' },
  { label: 'Sensing Interval', value: 'Every 60 seconds (configurable)' },
  { label: 'Species Database', value: '847 species with validated VPD targets' },
  { label: 'Local Storage', value: '90 days of readings (8MB flash)' },
  { label: 'Dimensions', value: '68 × 68 × 24 mm' },
  { label: 'Materials', value: 'Recycled PLA housing, FSC cork base' },
];

export default function FeaturesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <Badge variant="lime">Features</Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2] leading-tight">
            Everything NIH-01<br />Can Do.
          </h1>
          <p className="text-[#A3B18A] text-lg max-w-2xl mx-auto leading-relaxed">
            The Nature Intelligence Hub 01 packs six precision sensors, an on-device AI engine,
            and a plant voice synthesiser into a 68mm square. Here&apos;s every capability it brings to your plants.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/product">
              <Button variant="primary" size="lg">Order NIH-01 →</Button>
            </Link>
            <Link href="/nature-intelligence">
              <Button variant="outline" size="lg">The Science</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreFeatures.map((f, idx) => {
              const Icon = f.icon;
              return (
                <Card key={idx} className={`space-y-3 border ${f.border}`}>
                  <div className={`w-11 h-11 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${f.colour}`} />
                  </div>
                  <h2 className="font-display font-bold text-[#F7F6F2]">{f.title}</h2>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{f.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical specs */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <Badge variant="gold">Technical Specifications</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">
              Built to Scientific Grade.
            </h2>
          </div>
          <Card className="divide-y divide-white/5">
            {specs.map((s, idx) => (
              <div key={idx} className="flex items-center justify-between px-6 py-4 gap-4">
                <span className="text-sm font-medium text-[#F7F6F2]">{s.label}</span>
                <span className="text-sm font-mono text-[#8AD74C] text-right">{s.value}</span>
              </div>
            ))}
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-10 text-center border-[#8AD74C]/20 space-y-5">
            <h2 className="font-display text-3xl font-bold text-[#F7F6F2]">
              Ready to Hear Your Plant?
            </h2>
            <p className="text-[#A3B18A]">
              NIH-01 Batch 01 is open for waitlist registration. Join now to secure your position and get early access pricing.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/product">
                <Button variant="primary" size="lg">Join the Waitlist →</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">View Pricing</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
