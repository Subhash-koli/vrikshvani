import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookOpen, Video, Headphones, FileQuestion } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
  const categories = [
    {
      icon: BookOpen,
      title: "Setup & Quick Start Guide",
      desc: "Step-by-step NIH-01 unboxing, pairing, and first plant profile creation.",
      link: "/support/setup",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      desc: "Watch 4K video walkthroughs of firmware updates, VPD calibration, and voice personality setup.",
      link: "/support/videos",
    },
    {
      icon: Headphones,
      title: "Live Chat Support",
      desc: "Talk to our plant intelligence team — available Monday to Saturday, 9AM–7PM IST.",
      link: "/contact",
    },
    {
      icon: FileQuestion,
      title: "FAQs & Troubleshooting",
      desc: "Browse 80+ answers to the most common hardware, app, and billing questions.",
      link: "/support/faq",
    },
  ];

  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="lime">Customer Support</Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2]">
              We're Here to Help Your Plants Thrive.
            </h1>
            <p className="text-[#A3B18A] text-base">
              Hardware setup, app connectivity, billing questions, or just plant care advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Link href={cat.link} key={idx}>
                  <Card className="flex gap-5 items-start cursor-pointer nidl-glass-hover h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#8AD74C]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display text-xl font-bold text-[#F7F6F2]">{cat.title}</h3>
                      <p className="text-sm text-[#A3B18A] leading-relaxed">{cat.desc}</p>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Status Banner */}
          <Card className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-[#8AD74C]/30">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#8AD74C] animate-pulse" />
              <div>
                <p className="font-display font-bold text-[#F7F6F2]">All Systems Operational</p>
                <p className="text-xs font-mono text-[#A3B18A]">API · App · Telemetry Pipeline · CDN — 100% Uptime</p>
              </div>
            </div>
            <Link href="/support/status">
              <Button variant="outline" size="sm">View System Status →</Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
