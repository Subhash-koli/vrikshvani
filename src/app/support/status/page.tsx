import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Clock, AlertCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'System Status — Vriksh Vani',
  description: 'Live operational status for all Vriksh Vani services: NIH-01 hub connectivity, API, dashboard, authentication, and Open Data Programme.',
};

const services = [
  { name: 'NIH-01 Hub Connectivity (BLE + Wi-Fi)', status: 'operational', uptime: '99.98%' },
  { name: 'Plant Dashboard API', status: 'operational', uptime: '99.97%' },
  { name: 'Species Database API', status: 'operational', uptime: '100%' },
  { name: 'Authentication (NextAuth)', status: 'operational', uptime: '99.99%' },
  { name: 'NTE™ Voice Inference Engine', status: 'operational', uptime: '99.95%' },
  { name: 'Open Data Programme (dataset download)', status: 'operational', uptime: '100%' },
  { name: 'Waitlist & E-commerce API', status: 'operational', uptime: '99.99%' },
  { name: 'Webhook Delivery', status: 'degraded', uptime: '98.1%' },
  { name: 'Vercel Analytics', status: 'operational', uptime: '100%' },
];

const incidents = [
  {
    date: 'July 28, 2026',
    title: 'Webhook delivery delays — 4.2 hours',
    severity: 'minor',
    resolved: true,
    detail: 'Some webhook events were delayed by up to 15 minutes between 14:30–18:45 IST due to downstream message queue congestion. All events were eventually delivered. No data loss occurred.',
  },
  {
    date: 'July 14, 2026',
    title: 'Species database read latency spike — 22 minutes',
    severity: 'minor',
    resolved: true,
    detail: 'Species lookup API experienced elevated latency (p99: 4.8s) during a Neon Postgres planned maintenance window. Automatic connection pooling resolved the issue.',
  },
];

function StatusIcon({ status }: { status: string }) {
  if (status === 'operational') return <CheckCircle2 className="w-4 h-4 text-[#8AD74C]" />;
  if (status === 'degraded') return <AlertCircle className="w-4 h-4 text-[#E8D07C]" />;
  if (status === 'outage') return <XCircle className="w-4 h-4 text-red-400" />;
  return <Clock className="w-4 h-4 text-[#A3B18A]" />;
}

export default function StatusPage() {
  const allOperational = services.every(s => s.status === 'operational');

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant={allOperational ? 'lime' : 'gold'}>System Status</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              {allOperational ? 'All Systems Operational.' : 'Partial Service Degradation.'}
            </h1>
            <p className="text-[#A3B18A] text-sm font-mono">Last checked: August 3, 2026 at 22:00 IST</p>
          </div>

          {/* Overall status banner */}
          <Card className={`p-5 flex items-center gap-4 ${allOperational ? 'border-[#8AD74C]/30' : 'border-[#E8D07C]/30'}`}>
            <div className={`w-4 h-4 rounded-full ${allOperational ? 'bg-[#8AD74C]' : 'bg-[#E8D07C]'} animate-pulse`} />
            <div>
              <p className="font-display font-bold text-[#F7F6F2]">
                {allOperational ? '9/9 services fully operational' : '8/9 services operational — 1 degraded'}
              </p>
              <p className="text-xs font-mono text-[#A3B18A]">30-day average uptime: 99.96%</p>
            </div>
          </Card>

          {/* Service table */}
          <Card className="divide-y divide-white/5">
            {services.map((svc, idx) => (
              <div key={idx} className="flex items-center justify-between px-6 py-4 gap-4">
                <div className="flex items-center gap-3">
                  <StatusIcon status={svc.status} />
                  <p className="text-sm text-[#F7F6F2]">{svc.name}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className={`text-xs font-mono font-bold ${svc.status === 'operational' ? 'text-[#8AD74C]' : 'text-[#E8D07C]'}`}>
                    {svc.status === 'operational' ? 'Operational' : 'Degraded'}
                  </span>
                  <span className="text-xs font-mono text-[#A3B18A]">{svc.uptime} uptime</span>
                </div>
              </div>
            ))}
          </Card>

          {/* Past incidents */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Past Incidents — July 2026</h2>
            {incidents.map((inc, idx) => (
              <Card key={idx} className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <CheckCircle2 className="w-4 h-4 text-[#8AD74C] shrink-0" />
                  <p className="font-display font-bold text-[#F7F6F2] text-sm">{inc.title}</p>
                  <span className="ml-auto text-xs font-mono text-[#A3B18A] shrink-0">{inc.date} · Resolved</span>
                </div>
                <p className="text-sm text-[#A3B18A] leading-relaxed">{inc.detail}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-[#A3B18A]">Subscribe to status updates at <span className="text-[#8AD74C]">status.vrikshvani.com</span></p>
            <Button variant="outline" className="mt-4">Subscribe to Alerts</Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
