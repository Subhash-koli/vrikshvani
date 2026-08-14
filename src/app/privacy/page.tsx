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
            <h1 className="font-display text-4xl font-bold text-[#F7F6F2]">Your Privacy &amp; Data Transparency</h1>
            <p className="text-[#A3B18A] text-sm">Effective: 1 August 2026 · Last Updated: August 2026</p>
          </div>

          <Card className="p-8 space-y-6 border-[#8AD74C]/20">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">1. About This Project &amp; Privacy Commitment</h2>
            </div>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              Vriksh Vani is an independent Nature Intelligence research and prototyping initiative (&quot;Vriksh Vani&quot;, &quot;we&quot;, &quot;us&quot;). We believe in total transparency and privacy-first architecture. This privacy policy explains what data we collect through this website and how we protect it.
            </p>
          </Card>

          <Card className="p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">2. Information We Collect</h2>
            </div>
            <div className="space-y-4 text-sm text-[#A3B18A] leading-relaxed">
              <p>
                <strong className="text-[#F7F6F2]">(a) Waitlist &amp; Research Submissions:</strong> When you voluntarily join our waitlist or research cohort, we collect your name, email address, background/role (e.g., researcher, developer, plant enthusiast), and any interest preferences you share.
              </p>
              <p>
                <strong className="text-[#F7F6F2]">(b) Website Analytics:</strong> We use privacy-friendly analytics to measure page visits and engagement. We do not use intrusive cross-site tracking cookies or sell subscriber data to third-party ad networks.
              </p>
              <p>
                <strong className="text-[#F7F6F2]">(c) Future Hardware Telemetry (Concept Target):</strong> For future hardware prototypes (NIH-01), our architectural commitment is local edge inference with on-device processing. No raw visual or audio streams are recorded or uploaded to external servers.
              </p>
            </div>
          </Card>

          <Card className="p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-[#8AD74C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">3. How We Use Your Data &amp; Your Rights</h2>
            </div>
            <div className="space-y-3 text-sm text-[#A3B18A] leading-relaxed">
              <p>We use your contact details solely to send project research updates, prototype cohort invitations, and project milestones.</p>
              <p>You can request to view, update, or permanently delete your waitlist contact information at any time by emailing us at <strong className="text-[#8AD74C]">contact@vrikshvani.com</strong>.</p>
            </div>
          </Card>

          <Card className="p-8 text-center space-y-3">
            <h3 className="font-display font-bold text-[#F7F6F2]">Questions or Privacy Inquiries?</h3>
            <p className="text-sm text-[#A3B18A]">Contact the project team directly at <strong className="text-[#8AD74C]">contact@vrikshvani.com</strong></p>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
