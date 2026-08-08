import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Code2, Terminal, Webhook, Database, Lock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Developer REST API & Webhooks | Vriksh Vani',
  description: 'Programmatic REST API & MQTT access to NIH-01 live VPD readings, thermal delta, gas resistance, species parameters, and automated smart home triggers.',
  keywords: ['Vriksh Vani API', 'plant biometric API', 'NIH-01 MQTT broker', 'plant care developer platform'],
  alternates: {
    canonical: 'https://www.vrikshvani.com/developers',
  },
  openGraph: {
    title: 'Developer REST API & Webhooks | Vriksh Vani',
    description: 'Build plant-aware automations with local MQTT & REST endpoints from NIH-01.',
    url: 'https://www.vrikshvani.com/developers',
    siteName: 'Vriksh Vani',
    images: [{ url: 'https://www.vrikshvani.com/og?title=Developer%20Platform%20%26%20API&subtitle=REST%20Endpoints%2C%20MQTT%20%26%20Webhooks' }],
  },
};

const endpoints = [
  {
    method: 'GET',
    path: '/api/v1/bio-readings',
    desc: 'Stream live VPD, thermal delta, and gas resistance readings from connected NIH-01 hubs.',
    color: 'text-[#8AD74C]',
  },
  {
    method: 'GET',
    path: '/api/v1/plant-profiles',
    desc: 'Retrieve all plant profiles associated with your account, including species, NTE™ emotion states, and health scores.',
    color: 'text-[#8AD74C]',
  },
  {
    method: 'GET',
    path: '/api/v1/species',
    desc: 'Query the Vriksh Vani species database for validated VPD targets, care parameters, and model confidence scores.',
    color: 'text-[#8AD74C]',
  },
  {
    method: 'POST',
    path: '/api/v1/waitlist/join',
    desc: 'Submit a waitlist registration for Vriksh Vani NIH-01 Batch 01.',
    color: 'text-[#E8D07C]',
  },
  {
    method: 'POST',
    path: '/api/v1/newsletter/subscribe',
    desc: 'Subscribe an email address to the Vriksh Vani newsletter.',
    color: 'text-[#E8D07C]',
  },
  {
    method: 'POST',
    path: '/api/v1/enterprise/quote',
    desc: 'Submit an enterprise fleet quote request. Triggers automatic sales team notification.',
    color: 'text-[#E8D07C]',
  },
];

const sdks = [
  { name: 'JavaScript / TypeScript', status: 'Available', badge: '✓' },
  { name: 'Python', status: 'Available', badge: '✓' },
  { name: 'Go', status: 'Beta', badge: '~' },
  { name: 'Swift (iOS)', status: 'Roadmap Q2 2027', badge: '○' },
  { name: 'Kotlin (Android)', status: 'Roadmap Q2 2027', badge: '○' },
];

export default function DevelopersPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Hero */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="lime">Developer API</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Build on Plant Intelligence.
            </h1>
            <p className="text-[#A3B18A] leading-relaxed">
              The Vriksh Vani REST API provides programmatic access to real-time NIH-01 bio-signal streams, species data, and smart home automation triggers. CC BY 4.0 open data. OAuth2 authentication.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" size="lg">Get API Key →</Button>
              <Button variant="outline" size="lg">View on GitHub</Button>
            </div>
          </div>

          {/* Quick start */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Quick Start</h2>
            </div>
            <pre className="bg-[#030504] border border-white/5 rounded-xl p-4 text-sm font-mono text-[#A3B18A] overflow-x-auto leading-relaxed">
{`# Install the Vriksh Vani SDK
npm install @vrikshvani/sdk

# Fetch live readings from your NIH-01
import { VrikshVaniClient } from '@vrikshvani/sdk';

const client = new VrikshVaniClient({
  apiKey: process.env.VRIKSHVANI_API_KEY,
});

const readings = await client.bioReadings.stream({
  hubId: 'nih01-xxxxx',
  metrics: ['vpd', 'thermalDelta', 'gasResistance'],
});

readings.on('data', (reading) => {
  console.log(\`VPD: \${reading.vpd} kPa | Emotion: \${reading.nteEmotion}\`);
});`}
            </pre>
          </Card>

          {/* API endpoints */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">API Endpoints</h2>
              <span className="text-xs font-mono text-[#A3B18A] ml-auto">Base: https://api.vrikshvani.com</span>
            </div>
            <div className="space-y-3">
              {endpoints.map((ep, idx) => (
                <Card key={idx} className="flex items-start gap-4">
                  <span className={`font-mono text-xs font-bold ${ep.color} shrink-0 pt-0.5`}>{ep.method}</span>
                  <div className="space-y-1">
                    <code className="text-sm font-mono text-[#F7F6F2]">{ep.path}</code>
                    <p className="text-sm text-[#A3B18A]">{ep.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Auth */}
          <Card className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-[#E8D07C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Authentication</h2>
            </div>
            <p className="text-sm text-[#A3B18A]">All API requests require a Bearer token in the Authorization header. Tokens are scoped per-hub and expire every 90 days.</p>
            <pre className="bg-[#030504] border border-white/5 rounded-xl p-4 text-sm font-mono text-[#A3B18A]">
{`Authorization: Bearer vv_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`}
            </pre>
            <div className="flex items-center gap-2 text-xs font-mono text-[#A3B18A]">
              <span className="w-2 h-2 rounded-full bg-[#8AD74C] inline-block" />
              Rate limit: 1,000 requests/hour (free) · 10,000/hour (Pro) · Unlimited (Enterprise)
            </div>
          </Card>

          {/* Webhooks */}
          <Card className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Webhook className="w-5 h-5 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Webhooks</h2>
            </div>
            <p className="text-sm text-[#A3B18A]">Register a webhook URL to receive real-time event pushes when NIH-01 triggers a biometric alert, NTE™ emotion state changes, or a health score threshold is crossed.</p>
            <div className="space-y-2">
              {['alert.vpd_threshold', 'alert.thermal_stress', 'alert.soil_health', 'emotion.state_change', 'health.score_update'].map((evt, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8AD74C]" />
                  <code className="text-xs font-mono text-[#A3B18A]">{evt}</code>
                </div>
              ))}
            </div>
          </Card>

          {/* Open Data */}
          <Card className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-[#E8D07C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Open Data Downloads</h2>
            </div>
            <p className="text-sm text-[#A3B18A]">All Open Data Programme datasets are available for direct download without authentication. Licensed CC BY 4.0.</p>
            <Link href="/nature-intelligence/open-data">
              <Button variant="outline" size="sm">Browse Open Datasets →</Button>
            </Link>
          </Card>

          {/* SDKs */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">SDKs & Libraries</h2>
            <Card className="divide-y divide-white/5">
              {sdks.map((sdk, idx) => (
                <div key={idx} className="flex items-center justify-between px-6 py-3">
                  <p className="text-sm font-medium text-[#F7F6F2]">{sdk.name}</p>
                  <span className={`text-xs font-mono ${sdk.status === 'Available' ? 'text-[#8AD74C]' : sdk.status === 'Beta' ? 'text-[#E8D07C]' : 'text-[#A3B18A]'}`}>
                    {sdk.badge} {sdk.status}
                  </span>
                </div>
              ))}
            </Card>
          </div>

          <Card className="p-8 text-center border-[#8AD74C]/20 space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Ready to Build?</h2>
            <p className="text-sm text-[#A3B18A]">Apply for an API key — developer access is currently in closed beta. Enterprise API access is available immediately.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" size="lg">Apply for API Access →</Button>
              <Link href="/enterprise">
                <Button variant="outline" size="lg">Enterprise API</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
