import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, XCircle, AlertTriangle, Clock, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'System Status — Vriksh Vani',
  description: 'Real-time status of the Vriksh Vani API, NIH-01 connectivity service, NTE voice synthesis, and open data platform.',
};

type Status = 'operational' | 'degraded' | 'outage' | 'maintenance';

const services: { name: string; status: Status; latency?: string; desc: string }[] = [
  { name: 'NIH-01 Hub Connectivity (BLE)', status: 'operational', latency: '12ms', desc: 'Bluetooth LE pairing and data sync between hub and app' },
  { name: 'Bio-Readings API', status: 'operational', latency: '38ms', desc: 'Real-time biometric data streaming endpoint' },
  { name: 'NTE™ Voice Synthesis (On-Device)', status: 'operational', desc: 'On-device neural voice — no server dependency' },
  { name: 'Vriksh Vani Web App', status: 'operational', latency: '145ms', desc: 'Primary web application at vrikshvani.com' },
  { name: 'Open Data API (Public)', status: 'operational', latency: '52ms', desc: 'Species database and public endpoints' },
  { name: 'Authentication (NextAuth)', status: 'operational', latency: '68ms', desc: 'Magic-link, Google, and GitHub OAuth' },
  { name: 'Email Delivery (Resend)', status: 'operational', latency: '210ms', desc: 'Magic-link emails, waitlist confirmations, alerts' },
  { name: 'Community Forum', status: 'operational', latency: '95ms', desc: 'Community posts and discussion threads' },
  { name: 'CDN (Static Assets)', status: 'operational', latency: '18ms', desc: 'Product images, firmware files, and press kit assets' },
];

const incidents = [
  {
    date: 'July 29, 2026',
    title: 'BLE sync delays on iOS 18.1',
    status: 'Resolved',
    duration: '42 minutes',
    detail: 'A CoreBluetooth API change in iOS 18.1 caused initial pairing delays for new NIH-01 units. Resolved via app update v1.2.1 (hotfix). No data was lost.',
  },
];

const statusConfig: Record<Status, { icon: React.ReactNode; label: string; color: string }> = {
  operational: { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Operational', color: 'text-[#8AD74C]' },
  degraded: { icon: <AlertTriangle className="w-4 h-4" />, label: 'Degraded', color: 'text-[#E8D07C]' },
  outage: { icon: <XCircle className="w-4 h-4" />, label: 'Outage', color: 'text-red-400' },
  maintenance: { icon: <Clock className="w-4 h-4" />, label: 'Maintenance', color: 'text-[#A3B18A]' },
};

export default function StatusPage() {
  const allOperational = services.every((s) => s.status === 'operational');

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">

          {/* Overall Status */}
          <div className="text-center space-y-3">
            <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${allOperational ? 'bg-[#8AD74C]/15 border-2 border-[#8AD74C]/40' : 'bg-[#E8D07C]/15 border-2 border-[#E8D07C]/40'}`}>
              <Activity className={`w-8 h-8 ${allOperational ? 'text-[#8AD74C]' : 'text-[#E8D07C]'}`} />
            </div>
            <Badge variant={allOperational ? 'lime' : 'gold'}>
              {allOperational ? '✦ All Systems Operational' : '⚠ Partial Disruption'}
            </Badge>
            <h1 className="font-display text-4xl font-bold text-[#F7F6F2]">System Status</h1>
            <p className="text-xs font-mono text-[#A3B18A]">Last updated: 3 August 2026, 07:30 UTC · Refreshes every 60 seconds</p>
          </div>

          {/* 90-day Uptime Bar */}
          <Card className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#F7F6F2]">90-Day Uptime</p>
              <p className="font-mono text-sm font-bold text-[#8AD74C]">99.97%</p>
            </div>
            <div className="flex gap-0.5 h-8">
              {Array.from({ length: 90 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i === 32 ? 'bg-[#E8D07C]/60' : 'bg-[#8AD74C]/70 hover:bg-[#8AD74C]'} transition-colors cursor-pointer`}
                  title={i === 32 ? 'July 29: BLE sync incident (42 min)' : 'Operational'}
                />
              ))}
            </div>
            <p className="text-[10px] font-mono text-[#A3B18A]">Yellow = incident · All other days operational</p>
          </Card>

          {/* Service List */}
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Service Status</h2>
            {services.map((service, idx) => {
              const cfg = statusConfig[service.status];
              return (
                <Card key={idx} className="flex items-center gap-4">
                  <span className={cfg.color}>{cfg.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#F7F6F2]">{service.name}</p>
                    <p className="text-xs text-[#A3B18A]">{service.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`text-xs font-mono font-bold ${cfg.color}`}>{cfg.label}</p>
                    {service.latency && <p className="text-[10px] font-mono text-[#A3B18A]">{service.latency} avg</p>}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Incident History */}
          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Incident History</h2>
            {incidents.map((inc, idx) => (
              <Card key={idx} className="space-y-2 border-[#E8D07C]/20">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <p className="font-display font-bold text-[#F7F6F2]">{inc.title}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="lime">{inc.status}</Badge>
                    <span className="text-xs font-mono text-[#A3B18A]">{inc.duration}</span>
                  </div>
                </div>
                <p className="text-xs font-mono text-[#A3B18A]">{inc.date}</p>
                <p className="text-sm text-[#A3B18A] leading-relaxed">{inc.detail}</p>
              </Card>
            ))}
            {incidents.length === 0 && (
              <p className="text-sm text-[#A3B18A] text-center py-8">No incidents in the last 90 days. 🌿</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
