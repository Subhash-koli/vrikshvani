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
            <h1 className="font-display text-4xl font-bold text-[#F7F6F2]">Terms &amp; Project Guidelines</h1>
            <p className="text-[#A3B18A] text-sm">Effective: 1 August 2026 · Last Updated: August 2026</p>
          </div>

          <Card className="p-8 space-y-4">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">1. Project Scope &amp; Website Use</h2>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Vriksh Vani is an independent Nature Intelligence research and prototyping initiative. By accessing this website or submitting interest forms, you agree to these Terms. All information, hardware concepts, biophysical hypotheses, and simulated telemetry on this website are provided for informational and research validation purposes.
            </p>
          </Card>

          <Card className="p-8 space-y-4">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">2. Waitlist &amp; Prototype Cohort Registrations</h2>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Joining the Vriksh Vani waitlist registers your interest to receive research notes, project updates, and potential founding cohort invitations for future prototype hardware (NIH-01). Joining the waitlist does not constitute a financial purchase, binding sales contract, or commercial order. No payments are requested or collected on this website.
            </p>
          </Card>

          <Card className="p-8 space-y-4">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">3. Intellectual Property &amp; Research Concepts</h2>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              The Vriksh Vani brand name, Nature Intelligence Operating System (NIOS) architecture, NTE™ (Natural Transpiration Expression) terminology, and ceramic hardware design concepts are intellectual property of Vriksh Vani. Published open research notes and datasets are shared under open research principles as documented.
            </p>
          </Card>

          <Card className="p-8 space-y-4">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">4. Limitation of Liability</h2>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Vriksh Vani insights and biophysical interpretations are research tools designed to augment human awareness of plant systems. They do not replace professional agricultural or botanical advice. Vriksh Vani is not liable for any decisions made based on informational website content.
            </p>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
