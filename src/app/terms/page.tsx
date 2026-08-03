import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Terms of Service — Vriksh Vani',
  description: 'Vriksh Vani terms of service covering purchase terms, product use, API access, intellectual property, and dispute resolution.',
};

export default function TermsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <Badge variant="lime">Terms of Service</Badge>
            <h1 className="font-display text-4xl font-bold text-[#F7F6F2]">Terms &amp; Conditions</h1>
            <p className="text-[#A3B18A] text-sm">Effective: 1 August 2026</p>
          </div>

          <Card className="p-8 space-y-4">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">1. Acceptance of Terms</h2>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              By accessing Vriksh Vani website, purchasing NIH-01, or using our app/APIs, you agree to these Terms.
            </p>
          </Card>

          <Card className="p-8 space-y-4">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">2. Reservations &amp; Purchases</h2>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Batch 01 represents a hardware reservation. Prices are in INR/USD. Covered under Indian Consumer Protection Act 2019.
            </p>
          </Card>

          <Card className="p-8 space-y-4">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">3. Warranty &amp; Limitation of Liability</h2>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              NIH-01 includes a 2-year manufacturer warranty and a 7-year spare parts commitment. Vriksh Vani is not liable for indirect plant loss.
            </p>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
