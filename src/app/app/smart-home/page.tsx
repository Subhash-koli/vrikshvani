import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Home,
  Mic,
  Speaker,
  Zap,
  GitBranch,
  Network,
  ArrowRight,
  Radio,
  Webhook,
  Terminal,
  Droplets,
  AlertTriangle,
  Sun,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smart Home Integrations — Vriksh Vani App',
  description:
    'Connect NIH-01 to your smart home: Home Assistant, Apple HomeKit, Google Home, Amazon Alexa, and IFTTT. Automate humidifiers, grow lights, and fans based on plant biometrics.',
};

const integrations = [
  {
    icon: Home,
    title: 'Home Assistant',
    badge: 'HACS Integration',
    badgeVariant: 'lime' as const,
    description:
      'Full HACS (Home Assistant Community Store) integration with a one-click install. NIH-01 exposes every bio-signal as a native Home Assistant entity — VPD sensor, health score sensor, soil moisture sensor, transpiration index, and leaf temperature. MQTT autodiscovery supported; the hub announces itself to your broker with zero manual configuration. Build custom automations using NIH-01 entities in HA automations YAML or the visual Flow editor. Supports Lovelace dashboard cards with our custom card component.',
    tags: ['HACS', 'MQTT', 'Local API', 'Custom Entities', 'Lovelace Cards'],
    available: true,
  },
  {
    icon: Mic,
    title: 'Apple HomeKit',
    badge: 'Works with HomeKit',
    badgeVariant: 'outline' as const,
    description:
      'NIH-01 exposes itself as a native HomeKit accessory via the Matter protocol. Once paired through the Home app, all bio-signal sensors appear in the Apple Home ecosystem. Ask Siri "How is my Monstera doing?" for a spoken health score and VPD reading. Build HomeKit automations: trigger a humidifier scene when VPD rises above threshold, or receive a Home notification when health score drops below 65. Works across iPhone, iPad, Mac, and Apple TV home hubs.',
    tags: ['Matter', 'Siri Voice Control', 'HomeKit Automations', 'Apple Home App'],
    available: true,
  },
  {
    icon: Speaker,
    title: 'Google Home',
    badge: 'Works with Google',
    badgeVariant: 'outline' as const,
    description:
      'NIH-01 is certified Works with Google Home. Link your Vriksh Vani account in the Google Home app and all hubs appear as connected devices. Ask Google Assistant "What is the health score of my Fiddle Leaf Fig?" for an instant spoken readout. Build Google Home routines that respond to NIH-01 triggers — turn on a grow-light scene when your plant\'s light exposure score drops, or activate a fan group when leaf temperature exceeds 30°C.',
    tags: ['Google Home App', 'Assistant Routines', 'Smart Displays', 'Nest Hub'],
    available: true,
  },
  {
    icon: Radio,
    title: 'Amazon Alexa',
    badge: 'Alexa Skill',
    badgeVariant: 'outline' as const,
    description:
      'Enable the Vriksh Vani Alexa skill and ask "Alexa, ask Vriksh Vani for a plant health report" to get a spoken summary of your top plants at risk. Individual plant queries ("Alexa, what is the VPD for my Pothos?") return real-time readings. Build Alexa Routines triggered by NIH-01 sensor thresholds — available via the Alexa app routine builder. Compatible with all Echo devices, Echo Show screens, and the Alexa app.',
    tags: ['Alexa Skill', 'Voice Queries', 'Alexa Routines', 'Echo Show'],
    available: true,
  },
  {
    icon: Zap,
    title: 'IFTTT',
    badge: '12 Pre-built Applets',
    badgeVariant: 'lime' as const,
    description:
      'Twelve pre-built IFTTT applets cover the most common plant automation scenarios — no configuration required. Triggers include: VPD above threshold, health score below threshold, soil moisture critical, watering reminder due, and weekly health summary. Actions include: Philips Hue light scenes, smart plug on/off, Google Sheets logging, email notification, iOS/Android push, and SMS. Build custom applets using the Vriksh Vani IFTTT service — any of the 14 NIH-01 signals can trigger any IFTTT action.',
    tags: ['12 Pre-built Applets', 'Custom Triggers', 'Smart Plugs', 'Sheets Logging'],
    available: true,
  },
  {
    icon: GitBranch,
    title: 'Zapier',
    badge: 'Enterprise Only',
    badgeVariant: 'gold' as const,
    description:
      'The Zapier integration unlocks NIH-01 data inside 5,000+ apps — from Notion plant-care logs to Salesforce CRM records for commercial accounts, from Airtable maintenance trackers to Slack channel alerts for hospitality teams. Multi-step Zaps allow complex logic: if health score drops below 60 AND VPD is above 1.4 kPa, create a maintenance ticket in Jira and notify the head horticulturist via WhatsApp. Available exclusively on the Enterprise plan.',
    tags: ['5000+ Apps', 'Multi-step Zaps', 'Notion', 'Slack', 'Jira'],
    available: false,
  },
];

const automationExamples = [
  {
    icon: Droplets,
    trigger: 'VPD > 1.4 kPa',
    action: 'Turn on humidifier',
    description:
      'When NIH-01 detects vapour pressure deficit climbing above 1.4 kPa — the threshold for mild plant stress — trigger your smart humidifier via Home Assistant, HomeKit, or Alexa. The hub re-evaluates every 90 seconds; when VPD drops back below 1.0 kPa, a second automation switches the humidifier off. Your plant stays in its optimal transpiration zone without any manual intervention.',
    platform: 'Home Assistant / HomeKit / Alexa',
  },
  {
    icon: AlertTriangle,
    trigger: 'Health Score < 60',
    action: 'Send Slack alert',
    description:
      'For enterprise and commercial installations, route critical health alerts directly to a Slack channel. A Zapier multi-step Zap catches the health score drop trigger, formats a message including the plant name, hub location, current health score, and top contributing factor (e.g., "Soil moisture: 12% — below critical threshold"), and posts it to your #plant-care Slack channel with @mention to the on-call horticulturist.',
    platform: 'Zapier — Enterprise',
  },
  {
    icon: Sun,
    trigger: 'Plant circadian signal',
    action: 'Morning light routine',
    description:
      "NIH-01's Nature Intelligence engine models each plant's internal circadian rhythm based on its species, light history, and seasonal position. When the hub detects the plant's optimal morning light window has opened, it triggers your grow light scene — gradually ramping from 10% to 80% over 20 minutes, mimicking a natural dawn. Built as an IFTTT applet or a Home Assistant automation using the circadian-window entity.",
    platform: 'Home Assistant / IFTTT',
  },
];

const technicalDetails = [
  {
    icon: Radio,
    title: 'MQTT Broker Support',
    desc: 'NIH-01 publishes all 14 bio-signals to any MQTT broker (Mosquitto, HiveMQ, EMQX). Autodiscovery payload uses Home Assistant MQTT convention. QoS Level 1, retain flag supported. Publish interval: 90 seconds default, configurable to 30s on Enterprise.',
  },
  {
    icon: Webhook,
    title: 'REST Webhooks',
    desc: 'Configure up to 10 webhook endpoints per hub. POST payloads are JSON with full sensor state, hub metadata, and a Unix timestamp. Supports Basic Auth and Bearer token authentication on the receiving end. Webhook delivery is retried 3× with exponential backoff on failure.',
  },
  {
    icon: Terminal,
    title: 'Local API',
    desc: 'NIH-01 exposes a local HTTP REST API on your LAN at http://nih01-[serial].local — no cloud dependency. Endpoints: GET /health, GET /sensors, GET /config. The local API is documented in full at /developers and requires no authentication within your local network.',
  },
  {
    icon: Network,
    title: 'Matter Protocol',
    desc: 'NIH-01 implements the Matter 1.2 standard for native HomeKit, Google Home, and Amazon Alexa integration. Matter commissioning uses your Vriksh Vani app as the controller — scan the QR code on the hub base and the Matter session is established in under 30 seconds.',
  },
];

export default function SmartHomePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <Badge variant="lime">Smart Home Integrations</Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F6F2] leading-tight">
              Your Plants,{' '}
              <span className="text-[#8AD74C]">in Your Ecosystem.</span>
            </h1>
            <p className="text-lg text-[#A3B18A] leading-relaxed">
              NIH-01 is not an island. Its bio-signal data — VPD, health score, soil moisture,
              leaf temperature, transpiration index — is designed to flow freely into the smart home
              infrastructure you already have. Automate your humidifier, grow lights, and fans
              based on real plant biometrics. Connect to the platforms you already use.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-2">
              <Link href="/developers">
                <Button variant="primary" size="lg">
                  View Developer Docs
                </Button>
              </Link>
              <Link href="/app">
                <Button variant="outline" size="lg">
                  Explore the App
                </Button>
              </Link>
            </div>
          </div>

          {/* Platform badges */}
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {[
              'Home Assistant',
              'Apple HomeKit',
              'Google Home',
              'Amazon Alexa',
              'IFTTT',
              'Zapier',
              'MQTT',
              'Matter 1.2',
            ].map((p) => (
              <span
                key={p}
                className="px-4 py-2 text-xs font-mono tracking-wider text-[#A3B18A] border border-white/10 rounded-full bg-[#0F2B18]/40"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <p className="text-xs font-mono text-[#A3B18A] uppercase tracking-widest">
              Platform Support
            </p>
            <h2 className="font-display text-3xl font-bold text-[#F7F6F2]">
              6 Integrations, Zero Compromise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrations.map((intg, idx) => {
              const Icon = intg.icon;
              return (
                <Card key={idx} className="space-y-5 border border-white/8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#8AD74C]" />
                    </div>
                    <div className="space-y-1">
                      <Badge variant={intg.badgeVariant}>{intg.badge}</Badge>
                      <h3 className="font-display text-xl font-bold text-[#F7F6F2]">
                        {intg.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[#A3B18A] leading-relaxed">{intg.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {intg.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 text-[#A3B18A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {!intg.available && (
                    <div className="pt-1 border-t border-white/8 flex items-center gap-2 text-xs font-mono text-[#E8D07C]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8D07C] inline-block" />
                      Requires Enterprise Plan
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automation Examples */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <p className="text-xs font-mono text-[#A3B18A] uppercase tracking-widest">
              Automation Recipes
            </p>
            <h2 className="font-display text-3xl font-bold text-[#F7F6F2]">
              What You Can Build Today
            </h2>
          </div>
          <div className="space-y-5">
            {automationExamples.map((ex, idx) => {
              const Icon = ex.icon;
              return (
                <Card key={idx} className="border border-white/8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#8AD74C]" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-sm text-[#F7F6F2] bg-[#0F2B18] px-3 py-1 rounded-md border border-[#8AD74C]/20">
                          IF {ex.trigger}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#A3B18A]" />
                        <span className="font-mono text-sm text-[#8AD74C] bg-[#0F2B18] px-3 py-1 rounded-md border border-[#8AD74C]/30">
                          THEN {ex.action}
                        </span>
                      </div>
                      <p className="text-sm text-[#A3B18A] leading-relaxed">{ex.description}</p>
                      <p className="text-xs font-mono text-[#E8D07C]">via {ex.platform}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <p className="text-xs font-mono text-[#A3B18A] uppercase tracking-widest">
              Technical Foundation
            </p>
            <h2 className="font-display text-3xl font-bold text-[#F7F6F2]">
              Open Protocols, Your Infrastructure
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalDetails.map((td, idx) => {
              const Icon = td.icon;
              return (
                <Card key={idx} className="flex gap-4 border border-white/8">
                  <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-[#8AD74C]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-base font-bold text-[#F7F6F2]">{td.title}</h3>
                    <p className="text-sm text-[#A3B18A] leading-relaxed">{td.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <Badge variant="lime">Developer Docs</Badge>
          <h2 className="font-display text-3xl font-bold text-[#F7F6F2]">
            Ready to Build Something?
          </h2>
          <p className="text-[#A3B18A] leading-relaxed">
            Full API reference, MQTT topic schemas, Webhook payload specifications, HACS
            integration guide, and Matter commissioning documentation — all available free at
            the Vriksh Vani Developer Portal. No API key required for the local API.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/developers">
              <Button variant="primary" size="lg" className="gap-2">
                Explore Developer Docs <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/enterprise">
              <Button variant="outline" size="lg">
                Enterprise API Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
