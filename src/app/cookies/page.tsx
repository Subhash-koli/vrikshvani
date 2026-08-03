import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Cookie } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy — Vriksh Vani',
  description: 'How Vriksh Vani uses cookies and similar technologies on our website. What we collect, why, and how to manage your preferences.',
};

const cookieTypes = [
  {
    category: 'Strictly Necessary',
    required: true,
    desc: 'These cookies are required for the website to function. They include session management, authentication tokens, and security cookies. They cannot be disabled.',
    examples: ['Session token (NextAuth)', 'CSRF protection token', 'Vercel deployment ID'],
  },
  {
    category: 'Analytics',
    required: false,
    desc: 'We use Vercel Analytics to understand page performance and user journeys. No personal data is collected. All analytics data is aggregated and anonymised.',
    examples: ['Vercel Analytics (anonymous pageview)', 'Web Vitals measurement'],
  },
  {
    category: 'Preferences',
    required: false,
    desc: 'These cookies remember your preferences such as language, region, and dashboard settings to improve your experience on return visits.',
    examples: ['UI theme preference', 'Dashboard layout settings'],
  },
];

export default function CookiesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center space-y-4 max-w-xl mx-auto">
            <Badge variant="lime">Cookie Policy</Badge>
            <h1 className="font-display text-4xl font-bold text-[#F7F6F2]">Cookie Policy</h1>
            <p className="text-[#A3B18A] text-sm font-mono">Last updated: August 1, 2026</p>
          </div>

          <Card className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Cookie className="w-5 h-5 text-[#E8D07C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">What Are Cookies?</h2>
            </div>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Cookies are small text files stored on your device when you visit our website. They allow us to remember your preferences and understand how you use our site. We use cookies sparingly — only what is necessary for the site to function and to understand aggregate usage.
            </p>
          </Card>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Cookies We Use</h2>
            {cookieTypes.map((ct, idx) => (
              <Card key={idx} className={`space-y-3 ${ct.required ? 'border-[#8AD74C]/20' : ''}`}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display font-bold text-[#F7F6F2]">{ct.category}</h3>
                  <span className={`text-xs font-mono ${ct.required ? 'text-[#8AD74C]' : 'text-[#A3B18A]'}`}>
                    {ct.required ? 'Required' : 'Optional'}
                  </span>
                </div>
                <p className="text-sm text-[#A3B18A] leading-relaxed">{ct.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ct.examples.map((ex, i) => (
                    <span key={i} className="text-xs font-mono bg-[#0F2B18] border border-white/10 rounded-full px-3 py-0.5 text-[#A3B18A]">{ex}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 space-y-3">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Managing Cookies</h2>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              You can control and delete cookies through your browser settings. Blocking strictly necessary cookies will prevent you from signing in. Blocking analytics cookies has no impact on your experience.
            </p>
            <p className="text-sm text-[#A3B18A]">
              We do not sell or share cookie data with third-party advertisers. We do not use tracking pixels or behavioural advertising cookies.
            </p>
          </Card>

          <p className="text-xs font-mono text-[#A3B18A] text-center">
            Questions? Email <span className="text-[#8AD74C]">privacy@vrikshvani.com</span>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
