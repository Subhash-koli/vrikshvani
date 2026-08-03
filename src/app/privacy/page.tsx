import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, Lock, Eye, FileText, Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — Vriksh Vani',
  description: 'Vriksh Vani privacy policy: how we collect, use and protect your plant biometric data, account information, and usage data.',
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <Badge variant="lime">Privacy Policy</Badge>
            <h1 className="font-display text-4xl font-bold text-[#F7F6F2]">Your Privacy &amp; Plant Data</h1>
            <p className="text-[#A3B18A] text-sm">Effective: 1 August 2026 · Last Updated: 3 August 2026</p>
          </div>

          <Card className="p-8 space-y-6 border-[#8AD74C]/20">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">1. Introduction &amp; Who We Are</h2>
            </div>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Vriksh Vani Technologies Pvt. Ltd. (&quot;Vriksh Vani&quot;, &quot;we&quot;, &quot;us&quot;) builds Nature Intelligence hardware and software. We respect your privacy. This policy explains how we handle your personal data and plant telemetry.
            </p>
          </Card>

          <Card className="p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">2. Data We Collect</h2>
            </div>
            <div className="space-y-4 text-sm text-[#A3B18A] leading-relaxed">
              <p><strong className="text-[#F7F6F2]">(a) Account Data:</strong> Email address, name, reservation details.</p>
              <p><strong className="text-[#F7F6F2]">(b) Device Data:</strong> NIH-01 hub serial number, firmware version, BLE sync status.</p>
              <p><strong className="text-[#F7F6F2]">(c) Plant Biometrics:</strong> VPD, leaf temperature delta, quad-gas resistance, health scores.</p>
              <p><strong className="text-[#F7F6F2]">(d) Open Data (Opt-In):</strong> If enabled, anonymised biometric time-series data is contributed to our public research datasets.</p>
            </div>
          </Card>

          <Card className="p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">3. Security &amp; Compliance</h2>
            </div>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Data is encrypted in transit (TLS 1.3) and at rest (AES-256). Servers are located in Mumbai, India. We fully comply with the Digital Personal Data Protection (DPDP) Act 2023.
            </p>
          </Card>

          <Card className="p-8 text-center space-y-3">
            <h3 className="font-display font-bold text-[#F7F6F2]">Questions or Data Rights Requests?</h3>
            <p className="text-sm text-[#A3B18A]">Contact our Data Protection Officer at <strong className="text-[#8AD74C]">legal@vrikshvani.com</strong></p>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
