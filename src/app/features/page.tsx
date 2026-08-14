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
  title: 'NIH-01 Concept & Targeted Features | Vriksh Vani',
  description: 'Target features of NIH-01: FLIR thermal optics vision, BME688 gas sensing, ESP32-S3 TinyML compute, real-time VPD, and privacy-first NTE™ voice output.',
  keywords: ['NIH-01 features', 'FLIR thermal plant sensor concept', 'Bosch BME688', 'on-device voice AI', 'VPD computation concept'],
  alternates: {
    canonical: 'https://www.vrikshvani.com/features',
  },
  openGraph: {
    title: 'NIH-01 Concept & Targeted Features | Vriksh Vani',
    description: 'FLIR thermal optics vision, quad-gas analysis, ESP32-S3 TinyML compute, and real-time VPD computation concept in ceramic casing.',
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
    title: 'NIH-01 Concept & Targeted Features | Vriksh Vani',
    description: 'Explore the thermal optics vision, quad-gas sensor, and on-device AI concept powering NIH-01.',
    images: ['https://www.vrikshvani.com/og?title=NIH-01%20Hardware%20%26%20AI%20Features&subtitle=Thermal%2C%20Quad-Gas%20%26%20NTE%E2%84%A2%20Voice'],
    creator: '@vrikshvani',
  },
};

const coreFeatures = [
  {
    icon: Thermometer,
    title: 'Leaf Surface Thermal Sensing',
    desc: 'Targeting FLIR Lepton 3.5 thermal array to capture leaf surface temperature non-invasively — evaluating true transpiration stress dynamics.',
    colour: 'text-[#E8D07C]',
    bg: 'bg-[#E8D07C]/10',
    border: 'border-[#E8D07C]/20',
  },
  {
    icon: Droplets,
    title: 'VPD Real-Time Computation',
    desc: 'Designed to compute Vapour Pressure Deficit by pairing leaf surface temperature with atmospheric humidity to monitor transpiration pressure.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: Wind,
    title: 'Gas Resistance Soil Proxy',
    desc: 'BME688 gas sensor reads volatile organic compounds (VOCs) as a non-invasive indicator for substrate microbial activity and stress.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: Mic,
    title: 'NTE™ Voice Translation',
    desc: 'Nature Translated to Emotion™. An on-device acoustic synthesis model concept that converts sensor readings into natural plant voice interpretations.',
    colour: 'text-[#E8D07C]',
    bg: 'bg-[#E8D07C]/10',
    border: 'border-[#E8D07C]/20',
  },
  {
    icon: Brain,
    title: 'On-Device TinyML Inference',
    desc: 'Designed around low-power ESP32-S3 microcontrollers — local-first inference with optional encrypted telemetry synchronization.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: BarChart3,
    title: 'Biometric Telemetry History',
    desc: 'View time-series trends of VPD, thermal delta, gas resistance, and environmental metrics over time to spot care trends.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: Bell,
    title: 'Intelligent Alerts Vision',
    desc: 'Threshold alerts for VPD spikes, thermal stress, and environmental shifts delivered as companion app push notifications or voice updates.',
    colour: 'text-[#E8D07C]',
    bg: 'bg-[#E8D07C]/10',
    border: 'border-[#E8D07C]/20',
  },
  {
    icon: Smartphone,
    title: 'Companion App Vision (iOS & Android)',
    desc: 'The Vriksh Vani app vision allows naming plants, selecting voice personalities, viewing telemetry graphs, and managing devices.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: Wifi,
    title: 'Smart Home Mesh Vision',
    desc: 'Designed to connect via Wi-Fi and Bluetooth to trigger humidifiers, grow lights, and fans via smart home protocols.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: Shield,
    title: 'Privacy-First Architecture',
    desc: 'No camera images or ambient voice audio recorded. Thermal frame buffers exist only in volatile SRAM and are purged immediately.',
    colour: 'text-[#E8D07C]',
    bg: 'bg-[#E8D07C]/10',
    border: 'border-[#E8D07C]/20',
  },
  {
    icon: Zap,
    title: 'Offline-First Sensing',
    desc: 'Designed to continue monitoring and signal processing locally without requiring constant active cloud connections.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
  {
    icon: Globe,
    title: 'Open Data Collaboration',
    desc: 'Opt-in framework to contribute anonymised biometric telemetry to public research datasets for plant science advancing.',
    colour: 'text-[#8AD74C]',
    bg: 'bg-[#8AD74C]/10',
    border: 'border-[#8AD74C]/20',
  },
];

const specs = [
  { label: 'Thermal Sensor Target', value: 'FLIR Lepton 3.5 (160×120 Radiometric)' },
  { label: 'Atmospheric Sensor Target', value: 'SHT41 (Humidity & Ambient Temp)' },
  { label: 'Gas Sensor Target', value: 'BME688 (VOC, Pressure, Air Quality)' },
  { label: 'Microcontroller Target', value: 'ESP32-S3 Dual-Core @ 240 MHz' },
  { label: 'Wireless Protocol Target', value: 'Wi-Fi 4 + BLE 5.0' },
  { label: 'Acoustic Speaker Concept', value: 'Custom Acoustic Chamber Enclosure' },
  { label: 'Power Architecture', value: 'Low-Power Energy Optimized Design' },
  { label: 'Sensing Interval Target', value: 'Configurable Sample Rate' },
  { label: 'Species Knowledge Library', value: 'Growing Species Biophysics Library' },
  { label: 'Enclosure Material', value: 'Slip-Cast Biophilic Ceramic Concept' },
];

export default function FeaturesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <Badge variant="lime">NIH-01 Capabilities Vision</Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2] leading-tight">
            Target Features of<br />NIH-01.
          </h1>
          <p className="text-[#A3B18A] text-lg max-w-2xl mx-auto leading-relaxed">
            The Nature Intelligence Hub 01 concept combines non-invasive biometrics, on-device TinyML compute,
            and plant voice synthesis into a biophilic ceramic form factor.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/waitlist">
              <Button variant="primary" size="lg">Join Research Waitlist →</Button>
            </Link>
            <Link href="/nature-intelligence">
              <Button variant="outline" size="lg">Read Philosophy &amp; Vision</Button>
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
            <Badge variant="gold">Target Hardware Specifications</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">
              Engineered with Purpose.
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
              Join the Nature Intelligence Community
            </h2>
            <p className="text-[#A3B18A]">
              Be part of the early research cohort. Join our waitlist to receive development updates and prototype invitations.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/waitlist">
                <Button variant="primary" size="lg">Join the Waitlist →</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
