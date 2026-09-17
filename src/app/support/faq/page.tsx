import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeFaq from '@/components/home/HomeFaq';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions | Vriksh Vani (vrikshvani)',
  description: 'Frequently asked questions about Vriksh Vani (vrikshvani / VrikshVani): hardware, plant voice AI, shipping, warranties, and plant care at vrikshvani.com.',
  keywords: [
    'vrikshvani', 'vriksh vani', 'VrikshVani', 'vrikshvani.com',
    'vrikshvani FAQ', 'vriksh vani questions', 'vrikshvani help',
    'Nature Intelligence FAQ', 'NIH-01 questions'
  ],
  alternates: { canonical: 'https://www.vrikshvani.com/support/faq' },
  openGraph: {
    title: 'FAQ | Vriksh Vani (vrikshvani)',
    description: 'Answers to 80+ questions about Vriksh Vani (vrikshvani) — hardware, plant voice AI, shipping, and plant care.',
    url: 'https://www.vrikshvani.com/support/faq',
    siteName: 'Vriksh Vani (vrikshvani)',
  },
};

export default function SupportFaqPage() {
  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-12 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <Badge variant="lime">80+ Answered Questions</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
            Frequently Asked Questions
          </h1>
          <p className="text-[#A3B18A] text-base">
            Everything you need to know about hardware, the app, shipping, warranties, and plant care.
          </p>
        </div>
      </section>
      <HomeFaq />
      <Footer />
    </main>
  );
}
