import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { WifiOff, Database, Cpu, RefreshCw, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Offline Mode — Vriksh Vani App',
  description: 'NIH-01 and the Vriksh Vani app work fully offline. All plant intelligence runs on-device — no internet required for bio-signal readings, NTE™ voice, or care alerts.',
};

const offlineFeatures = [
  {
    icon: Cpu,
    title: 'On-Device Neural Inference',
    desc: 'The NTE™ emotion classification network runs entirely on the ARM Cortex-M4 NPU inside NIH-01. No internet connection is required for plant voice output or bio-signal interpretation.',
    stat: '<45ms',
    statLabel: 'Inference Latency',
  },
  {
    icon: Database,
    title: 'Local History Buffering',
    desc: 'Up to 90 days of bio-signal history is stored locally on your device. When connectivity resumes, readings sync automatically to your cloud dashboard.',
    stat: '90 days',
    statLabel: 'Local Storage Buffer',
  },
  {
    icon: WifiOff,
    title: 'BLE Local Connection',
    desc: 'The app communicates with NIH-01 over Bluetooth Low Energy. Full functionality — health scores, VPD graphs, care alerts — is available without Wi-Fi.',
    stat: '10m',
    statLabel: 'BLE Range',
  },
  {
    icon: RefreshCw,
    title: 'Automatic Sync on Reconnect',
    desc: 'When Wi-Fi or mobile data becomes available, the app silently syncs any buffered readings, alert logs, and settings changes to the cloud.',
    stat: '<5s',
    statLabel: 'Sync Time',
  },
];

const onlineOnlyFeatures = [
  'Species database updates (new species parameters)',
  'Firmware OTA updates',
  'Open Data Programme contributions',
  'Smart home automation webhook triggers',
  'Fleet management consolidated dashboard',
  'Real-time Vercel Analytics reporting',
];

export default function OfflineModePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="lime">Offline Mode</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Your Plants Don&apos;t Need the Internet.
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              NIH-01 was designed from the ground up to work without a network connection. All intelligence — sensing, inference, and voice — happens on the device, always.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {offlineFeatures.map((f, idx) => {
              const Icon = f.icon;
              return (
                <Card key={idx} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#8AD74C]" />
                    </div>
                    <h3 className="font-display font-bold text-[#F7F6F2]">{f.title}</h3>
                  </div>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{f.desc}</p>
                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="font-display text-2xl font-bold text-[#8AD74C]">{f.stat}</span>
                    <span className="text-xs font-mono text-[#A3B18A]">{f.statLabel}</span>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-6 space-y-4">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">What Requires Connectivity</h2>
            <p className="text-sm text-[#A3B18A]">A small number of features require internet access:</p>
            <div className="space-y-2">
              {onlineOnlyFeatures.map((f, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-[#A3B18A]">
                  <CheckCircle2 className="w-4 h-4 text-[#E8D07C] shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 text-center space-y-4 border-[#8AD74C]/20">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Intelligence That Never Goes Offline.</h2>
            <p className="text-sm text-[#A3B18A]">Reserve your NIH-01 — Batch 01 dispatching Q4 2026.</p>
            <Link href="/waitlist">
              <Button variant="primary" size="lg">Join Batch 01 Waitlist →</Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
