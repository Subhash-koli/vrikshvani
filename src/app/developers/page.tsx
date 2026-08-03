import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Code2, Terminal, Key, BookOpen, Webhook, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Developer Documentation — Vriksh Vani Open API',
  description: 'Access the Vriksh Vani Open Data API to read real-time bio-signal telemetry, plant health scores, and species data from NIH-01 hubs.',
};

const endpoints = [
  { method: 'GET', path: '/api/v1/species', desc: 'List all 200+ species in the NIH-01 database with VPD targets and care parameters', auth: false },
  { method: 'GET', path: '/api/v1/plant-profiles', desc: 'Retrieve all plant profiles associated with the authenticated user\'s hub', auth: true },
  { method: 'GET', path: '/api/v1/bio-readings', desc: 'Stream real-time bio-signal readings: temperature delta, VPD, gas resistance, health score', auth: true },
  { method: 'POST', path: '/api/v1/waitlist/join', desc: 'Programmatically add an email to the Batch 01 waitlist (for partner integrations)', auth: false },
  { method: 'POST', path: '/api/v1/contact/submit', desc: 'Submit a contact form message with reason classification', auth: false },
  { method: 'POST', path: '/api/v1/enterprise/quote', desc: 'Request an enterprise fleet quote with seat count and deployment details', auth: false },
];

const sdkFeatures = [
  { icon: Database, title: 'Real-Time Bio-Signals', desc: 'Stream leaf surface temperature, VPD, VOC gas resistance, and health score at 1Hz via WebSocket or REST polling.' },
  { icon: Webhook, title: 'Webhooks', desc: 'Register callback URLs to receive push events when plant health drops, VPD goes out of range, or watering reminders trigger.' },
  { icon: Key, title: 'API Key Authentication', desc: 'All authenticated endpoints use Bearer token auth. Keys are scoped per hub and can be rotated in dashboard settings.' },
  { icon: BookOpen, title: 'OpenAPI 3.1 Spec', desc: 'Full OpenAPI specification published at /api/v1/openapi.json. Import directly into Postman, Insomnia, or any REST client.' },
];

export default function DevelopersPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="lime">Open Data API · v1.0</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Build with Plant Intelligence.
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              The Vriksh Vani Open Data API gives developers read access to real-time plant biometric data from NIH-01 hubs. Build dashboards, integrations, automations, and research tools.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button variant="primary" className="flex items-center gap-2">
                <Key className="w-4 h-4" /> Get API Key (Batch 01)
              </Button>
              <Link href="https://github.com/vrikshvani" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> GitHub →
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Start */}
          <Card className="p-8 space-y-4 border-[#8AD74C]/20">
            <div className="flex items-center gap-3">
              <Terminal className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Quick Start</h2>
            </div>
            <div className="space-y-3">
              <div className="bg-[#030504] rounded-xl p-5 font-mono text-xs space-y-2 border border-white/5">
                <p className="text-[#A3B18A]"># Fetch current bio-readings for a plant profile</p>
                <p>
                  <span className="text-[#8AD74C]">curl</span>
                  <span className="text-[#F7F6F2]"> -X GET \</span>
                </p>
                <p className="text-[#F7F6F2] pl-4">&quot;https://api.vrikshvani.com/v1/bio-readings?plant_id=plant_abc123&amp;limit=10&quot; \</p>
                <p className="text-[#F7F6F2] pl-4">-H <span className="text-[#E8D07C]">&quot;Authorization: Bearer YOUR_API_KEY&quot;</span> \</p>
                <p className="text-[#F7F6F2] pl-4">-H <span className="text-[#E8D07C]">&quot;Content-Type: application/json&quot;</span></p>
              </div>
              <div className="bg-[#030504] rounded-xl p-5 font-mono text-xs space-y-1 border border-white/5">
                <p className="text-[#A3B18A]"># Response</p>
                <p className="text-[#8AD74C]">{'{'}</p>
                <p className="pl-4 text-[#F7F6F2]">&quot;plantId&quot;: <span className="text-[#E8D07C]">&quot;plant_abc123&quot;</span>,</p>
                <p className="pl-4 text-[#F7F6F2]">&quot;timestamp&quot;: <span className="text-[#E8D07C]">&quot;2026-08-03T07:30:00Z&quot;</span>,</p>
                <p className="pl-4 text-[#F7F6F2]">&quot;vpd&quot;: <span className="text-[#8AD74C]">1.05</span>,</p>
                <p className="pl-4 text-[#F7F6F2]">&quot;leafTempDelta&quot;: <span className="text-[#8AD74C]">-0.8</span>,</p>
                <p className="pl-4 text-[#F7F6F2]">&quot;gasResistance&quot;: <span className="text-[#8AD74C]">42000</span>,</p>
                <p className="pl-4 text-[#F7F6F2]">&quot;healthScore&quot;: <span className="text-[#8AD74C]">94</span>,</p>
                <p className="pl-4 text-[#F7F6F2]">&quot;emotion&quot;: <span className="text-[#E8D07C]">&quot;Photosynthetic Joy&quot;</span></p>
                <p className="text-[#8AD74C]">{'}'}</p>
              </div>
            </div>
          </Card>

          {/* SDK Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sdkFeatures.map((f, idx) => {
              const Icon = f.icon;
              return (
                <Card key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#8AD74C]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-[#F7F6F2]">{f.title}</h3>
                    <p className="text-xs text-[#A3B18A] leading-relaxed">{f.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* API Endpoints */}
          <div className="space-y-5">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">API Endpoints</h2>
            <div className="space-y-3">
              {endpoints.map((ep, idx) => (
                <Card key={idx} className="flex items-start gap-4 flex-wrap">
                  <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 ${
                    ep.method === 'GET' ? 'bg-[#8AD74C]/15 text-[#8AD74C]' : 'bg-[#E8D07C]/15 text-[#E8D07C]'
                  }`}>
                    {ep.method}
                  </span>
                  <div className="flex-1 space-y-0.5">
                    <code className="text-xs font-mono text-[#F7F6F2]">{ep.path}</code>
                    <p className="text-xs text-[#A3B18A]">{ep.desc}</p>
                  </div>
                  <span className={`text-[10px] font-mono shrink-0 ${ep.auth ? 'text-[#E8D07C]' : 'text-[#A3B18A]'}`}>
                    {ep.auth ? '🔐 Auth Required' : '🔓 Public'}
                  </span>
                </Card>
              ))}
            </div>
          </div>

          {/* Rate Limits */}
          <Card className="p-8 space-y-4 border-[#E8D07C]/20">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Rate Limits &amp; Fair Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {[
                { tier: 'Free (Open Data)', rpm: '60 req/min', note: 'Species endpoints only' },
                { tier: 'Batch 01 Owner', rpm: '600 req/min', note: 'Full bio-signal access' },
                { tier: 'Enterprise', rpm: 'Custom SLA', note: 'Dedicated infrastructure' },
              ].map((t, idx) => (
                <div key={idx} className="bg-[#0F2B18]/40 rounded-xl p-4 space-y-1 border border-white/5">
                  <p className="font-mono text-[10px] text-[#A3B18A] uppercase tracking-wider">{t.tier}</p>
                  <p className="font-display font-bold text-[#F7F6F2]">{t.rpm}</p>
                  <p className="text-xs text-[#A3B18A]">{t.note}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
