import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookOpen, Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Knowledge Base — Vriksh Vani Support',
  description: 'Answers to every question about NIH-01 setup, VPD fundamentals, plant care, the Vriksh Vani app, and enterprise fleet management.',
};

const categories = [
  {
    title: 'Getting Started',
    icon: '🚀',
    articles: [
      { title: 'Unboxing and setting up NIH-01', href: '/support/faq#unboxing' },
      { title: 'Pairing NIH-01 with the Vriksh Vani app', href: '/support/faq#pairing' },
      { title: 'Adding your first plant and selecting species', href: '/support/faq#species' },
      { title: 'Understanding your first health score reading', href: '/support/faq#health-score' },
      { title: 'Wi-Fi setup and offline mode explained', href: '/app/offline-mode' },
    ],
  },
  {
    title: 'Plant Science Fundamentals',
    icon: '🌿',
    articles: [
      { title: 'What is VPD and why does it matter?', href: '/care-guides/monstera-deliciosa#vpd' },
      { title: 'Understanding leaf thermal delta', href: '/nature-intelligence/whitepaper' },
      { title: 'Gas resistance as a soil health proxy', href: '/nature-intelligence/whitepaper' },
      { title: 'How NTE™ Voice translates biometrics to language', href: '/nature-intelligence/nte-voice' },
      { title: 'Reading the Open Data Programme datasets', href: '/nature-intelligence/open-data' },
    ],
  },
  {
    title: 'App & Dashboard',
    icon: '📱',
    articles: [
      { title: 'Navigating the live dashboard', href: '/dashboard' },
      { title: 'Configuring smart notifications', href: '/app/notifications' },
      { title: 'Setting up Home Assistant automations', href: '/app/smart-home' },
      { title: 'Fleet management for multiple plants', href: '/app/fleet-management' },
      { title: 'Exporting your plant data', href: '/developers' },
    ],
  },
  {
    title: 'Hardware & Care',
    icon: '🔧',
    articles: [
      { title: 'NIH-01 sensor cleaning and maintenance', href: '/support/faq#maintenance' },
      { title: 'Positioning NIH-01 for optimal readings', href: '/support/faq#positioning' },
      { title: 'Firmware updates and OTA process', href: '/support/faq#firmware' },
      { title: 'Warranty coverage and claims', href: '/warranty' },
      { title: 'Shipping, returns and exchanges', href: '/shipping' },
    ],
  },
  {
    title: 'Enterprise & API',
    icon: '🏢',
    articles: [
      { title: 'Enterprise fleet deployment guide', href: '/enterprise' },
      { title: 'API authentication and rate limits', href: '/developers' },
      { title: 'Webhook configuration for Slack/Teams', href: '/developers' },
      { title: 'Enterprise pricing and volume discounts', href: '/pricing/enterprise' },
      { title: 'SLA and support tiers explained', href: '/support' },
    ],
  },
  {
    title: 'Account & Privacy',
    icon: '🔐',
    articles: [
      { title: 'Managing your Vriksh Vani account', href: '/dashboard/settings' },
      { title: 'Data privacy and what we collect', href: '/privacy' },
      { title: 'Open Data opt-in and opt-out', href: '/nature-intelligence/open-data' },
      { title: 'Deleting your account and data', href: '/privacy' },
      { title: 'Cookie policy explained', href: '/cookies' },
    ],
  },
];

export default function KnowledgeBasePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="lime">Knowledge Base</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Answers for Every Question.
            </h1>
            <p className="text-[#A3B18A]">From unboxing to advanced API integration.</p>
          </div>

          {/* Search bar (decorative) */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3B18A]" />
              <input
                id="kb-search"
                type="text"
                placeholder="Search the knowledge base..."
                className="w-full pl-12 pr-4 py-3 bg-[#0F2B18]/60 border border-white/10 rounded-2xl text-[#F7F6F2] placeholder-[#A3B18A] focus:outline-none focus:border-[#8AD74C]/50 focus:ring-1 focus:ring-[#8AD74C]/30 transition-all"
                readOnly
              />
            </div>
            <p className="text-center text-xs text-[#A3B18A] mt-2">Full search coming soon — browse categories below</p>
          </div>

          {/* Categories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categories.map((cat, idx) => (
              <Card key={idx} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 className="font-display text-lg font-bold text-[#F7F6F2]">{cat.title}</h2>
                </div>
                <div className="space-y-1">
                  {cat.articles.map((a, i) => (
                    <Link key={i} href={a.href} className="flex items-center gap-2 text-sm text-[#A3B18A] hover:text-[#8AD74C] py-1 transition-colors group">
                      <ChevronRight className="w-3.5 h-3.5 text-[#A3B18A] group-hover:text-[#8AD74C] shrink-0 transition-colors" />
                      {a.title}
                    </Link>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card className="p-8 flex flex-col md:flex-row items-center justify-between gap-4 border-[#8AD74C]/20">
            <div className="flex items-center gap-4">
              <BookOpen className="w-8 h-8 text-[#8AD74C] shrink-0" />
              <div>
                <p className="font-display font-bold text-[#F7F6F2]">Still have a question?</p>
                <p className="text-sm text-[#A3B18A]">Our support team responds within 24 hours.</p>
              </div>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/contact">
                <Button variant="outline">Contact Support</Button>
              </Link>
              <Link href="/support/faq">
                <Button variant="primary">Browse FAQ →</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
