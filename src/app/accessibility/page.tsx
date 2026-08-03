import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Eye, Keyboard, Volume2, Monitor, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AccessibilityPage() {
  const features = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      items: [
        "WCAG 2.1 AA colour contrast ratios on all text elements",
        "Focus-visible ring indicators on all interactive elements",
        "Scalable typography — all text scales cleanly to 200% zoom",
        "No reliance on colour alone to convey information",
      ],
    },
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      items: [
        "Full keyboard navigation support across all pages",
        "Skip-to-main-content link on every page",
        "Logical tab order matching visual reading flow",
        "Escape key closes all modals and dropdowns",
      ],
    },
    {
      icon: Volume2,
      title: "Screen Reader Support",
      items: [
        "Semantic HTML5 landmarks on all pages (header, main, nav, footer)",
        "All images include descriptive alt text",
        "ARIA labels on icon-only buttons",
        "Live regions for dynamic content updates (toasts, alerts)",
      ],
    },
    {
      icon: Monitor,
      title: "Motion & Animation",
      items: [
        "All animations respect prefers-reduced-motion media query",
        "No auto-playing videos with sound",
        "Animations can be disabled system-wide via OS accessibility settings",
        "Critical content never hidden behind motion-dependent reveals",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="lime">WCAG 2.1 AA Compliant</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Accessibility Statement
            </h1>
            <p className="text-[#A3B18A] text-sm max-w-2xl mx-auto">
              Vriksh Vani is committed to making plant intelligence accessible to everyone. We actively work to ensure our platform meets WCAG 2.1 Level AA standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <Card key={idx} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#8AD74C]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#F7F6F2]">{f.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {f.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#A3B18A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8AD74C] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 space-y-4 border-[#8AD74C]/20">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Report an Accessibility Issue</h2>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              If you encounter an accessibility barrier on any part of our platform, please contact our team directly. We aim to respond within 2 business days and resolve critical barriers within 10 business days.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="mailto:accessibility@vrikshvani.com">
                <Button variant="primary">Email accessibility@vrikshvani.com →</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Use Contact Form</Button>
              </Link>
            </div>
            <p className="text-xs font-mono text-[#A3B18A]">
              Last reviewed: 1 August 2026 · Next audit scheduled: February 2027
            </p>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
