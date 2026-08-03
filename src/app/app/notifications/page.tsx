import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Bell, AlertTriangle, Droplets, Thermometer, Wind, Volume2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Smart Notifications — Vriksh Vani App',
  description: 'NIH-01 sends intelligent, non-intrusive alerts based on real VPD, thermal, and gas-resistance biometrics. No false alarms. Only biometrically verified plant alerts.',
};

const alertTypes = [
  {
    icon: Wind,
    name: 'VPD Threshold Alert',
    trigger: 'VPD deviates >±0.3 kPa from species target range',
    message: '"Your Fiddle Leaf Fig is experiencing atmospheric stress. VPD at 1.7 kPa — 0.5 above target. Consider increasing humidity."',
    severity: 'High',
    color: 'text-[#E8D07C]',
    borderColor: 'border-[#E8D07C]/20',
  },
  {
    icon: Thermometer,
    name: 'Thermal Stress Alert',
    trigger: 'Leaf-to-air temperature delta exceeds threshold for >30 minutes',
    message: '"Monstera is showing elevated thermal stress — leaf temperature 2.8°C above ambient. This often precedes visible wilting by 4–6 hours."',
    severity: 'Critical',
    color: 'text-red-400',
    borderColor: 'border-red-400/20',
  },
  {
    icon: Droplets,
    name: 'Root Zone Health Alert',
    trigger: 'Gas resistance drops below substrate baseline, indicating overwatering or root decay',
    message: '"Calathea substrate gas signature has shifted. Possible overwatering or early root zone stress detected. Inspect and allow to dry."',
    severity: 'Medium',
    color: 'text-[#8AD74C]',
    borderColor: 'border-[#8AD74C]/20',
  },
  {
    icon: Volume2,
    name: 'Plant Emotion Voice Alert',
    trigger: 'NTE™ detects a significant shift in emotional state cluster',
    message: '"Photosynthetic Joy 🌿 — Your Pothos is thriving. Optimal VPD, healthy gas signature, and strong thermal response recorded this morning."',
    severity: 'Info',
    color: 'text-[#8AD74C]',
    borderColor: 'border-[#8AD74C]/20',
  },
];

const channels = [
  { name: 'Push Notification', desc: 'iOS & Android, delivered via APNs/FCM', available: true },
  { name: 'NIH-01 Voice Alert', desc: 'Spoken directly from the hub speaker', available: true },
  { name: 'Email Digest', desc: 'Daily or weekly summary', available: true },
  { name: 'Home Assistant Automation', desc: 'Trigger smart home devices on alert', available: true },
  { name: 'Slack Webhook', desc: 'Enterprise plan only', available: false },
  { name: 'SMS', desc: 'Roadmap — Q2 2027', available: false },
];

export default function NotificationsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="lime">Smart Notifications</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Biometrically Verified Alerts.
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              NIH-01 never sends a guess. Every notification is triggered by a real biophysical measurement — VPD deviation, thermal delta, or gas resistance shift — validated against your plant&apos;s species profile.
            </p>
          </div>

          {/* Alert types */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Alert Types</h2>
            {alertTypes.map((a, idx) => {
              const Icon = a.icon;
              return (
                <Card key={idx} className={`space-y-3 ${a.borderColor}`}>
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${a.color} shrink-0`} />
                      <h3 className="font-display font-bold text-[#F7F6F2]">{a.name}</h3>
                    </div>
                    <span className={`text-xs font-mono font-bold ${a.color}`}>{a.severity}</span>
                  </div>
                  <p className="text-xs font-mono text-[#A3B18A]">Trigger: {a.trigger}</p>
                  <div className="bg-[#030504] border border-white/5 rounded-xl p-4">
                    <p className="text-sm text-[#A3B18A] italic leading-relaxed">{a.message}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Delivery channels */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Delivery Channels</h2>
            </div>
            <Card className="divide-y divide-white/5">
              {channels.map((c, idx) => (
                <div key={idx} className="flex items-center justify-between gap-3 py-3 px-6">
                  <div>
                    <p className="text-sm font-medium text-[#F7F6F2]">{c.name}</p>
                    <p className="text-xs font-mono text-[#A3B18A]">{c.desc}</p>
                  </div>
                  <span className={`text-xs font-mono font-bold ${c.available ? 'text-[#8AD74C]' : 'text-[#A3B18A]'}`}>
                    {c.available ? '✓ Available' : '○ Coming Soon'}
                  </span>
                </div>
              ))}
            </Card>
          </div>

          <Card className="p-8 text-center space-y-4 border-[#8AD74C]/20">
            <AlertTriangle className="w-8 h-8 text-[#E8D07C] mx-auto" />
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Mean Early-Warning Lead: 4.3 Days</h2>
            <p className="text-sm text-[#A3B18A]">NIH-01 alerts you to biophysical stress an average of 4.3 days before visible symptoms appear — validated across 847 hubs over 12 months.</p>
            <Link href="/waitlist">
              <Button variant="primary">Reserve NIH-01 →</Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
