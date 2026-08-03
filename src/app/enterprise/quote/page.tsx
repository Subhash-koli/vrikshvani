'use client';

import type { Metadata } from 'next';
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { CheckCircle2, Building2 } from 'lucide-react';
import Link from 'next/link';

type UnitRange = '10–49' | '50–199' | '200–499' | '500+';

const unitRanges: UnitRange[] = ['10–49', '50–199', '200–499', '500+'];
const discounts: Record<UnitRange, string> = {
  '10–49': '10% off standard pricing',
  '50–199': '22% off + dedicated account manager',
  '200–499': '35% off + on-site installation',
  '500+': 'Custom enterprise pricing + full white-glove SLA',
};

export default function EnterpriseQuotePage() {
  const [units, setUnits] = useState<UnitRange>('10–49');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    deploymentContext: '',
    timeline: '',
    additionalNotes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/v1/enterprise/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, unitRange: units }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center space-y-3">
            <Badge variant="gold">Enterprise Fleet Pricing</Badge>
            <h1 className="font-display text-4xl font-bold text-[#F7F6F2]">Request a Fleet Quote.</h1>
            <p className="text-[#A3B18A] text-sm">We respond within 1 business day with a custom quote tailored to your deployment.</p>
          </div>

          {status === 'success' ? (
            <Card className="p-14 text-center space-y-5 border-[#E8D07C]/30">
              <CheckCircle2 className="w-16 h-16 text-[#8AD74C] mx-auto" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Quote Request Received! 🌿</h2>
              <p className="text-sm text-[#A3B18A]">
                Your enterprise inquiry has been logged. A Vriksh Vani enterprise specialist will contact <strong className="text-[#F7F6F2]">{form.email}</strong> within 1 business day with a custom proposal.
              </p>
              <Link href="/enterprise">
                <Button variant="outline">← Back to Enterprise</Button>
              </Link>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Pricing Sidebar */}
              <div className="space-y-4">
                <Card className="p-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#E8D07C]" />
                    <h3 className="font-display font-bold text-[#F7F6F2]">Volume Pricing</h3>
                  </div>
                  <div className="space-y-2">
                    {unitRanges.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setUnits(r)}
                        className={`w-full text-left p-3 rounded-xl border text-sm transition-all ${
                          units === r
                            ? 'border-[#E8D07C]/60 bg-[#E8D07C]/10 text-[#E8D07C]'
                            : 'border-white/10 text-[#A3B18A] hover:border-white/20'
                        }`}
                      >
                        <p className="font-bold">{r} units</p>
                        <p className="text-[11px] mt-0.5 opacity-80">{discounts[r]}</p>
                      </button>
                    ))}
                  </div>
                </Card>
                <Card className="p-5 space-y-3 border-[#8AD74C]/20">
                  <p className="text-xs font-mono font-bold text-[#8AD74C] uppercase">Selected Tier</p>
                  <p className="font-display text-2xl font-bold text-[#F7F6F2]">{units} Units</p>
                  <p className="text-xs text-[#A3B18A] leading-relaxed">{discounts[units]}</p>
                </Card>
              </div>

              {/* Form */}
              <Card className="lg:col-span-2 space-y-5 p-8">
                <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Tell Us About Your Deployment</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Company Name" required value={form.companyName}
                      onChange={(e) => setForm({ ...form, companyName: e.target.value })} placeholder="Acme Corp" />
                    <Input label="Contact Name" required value={form.contactName}
                      onChange={(e) => setForm({ ...form, contactName: e.target.value })} placeholder="Priya Sharma" />
                    <Input label="Work Email" type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="priya@acme.com" />
                    <Input label="Phone" type="tel" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" />
                  </div>
                  <Input label="Industry / Sector" required value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })} placeholder="e.g. Hospitality, Architecture, Retail" />
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[#A3B18A] uppercase tracking-wider">Deployment Context</label>
                    <textarea rows={3} required value={form.deploymentContext}
                      onChange={(e) => setForm({ ...form, deploymentContext: e.target.value })}
                      placeholder="Where will these hubs be deployed? (e.g. hotel lobby, office building, retail stores)"
                      className="w-full bg-[#030504] border border-white/10 rounded-card px-4 py-3 text-sm text-[#F7F6F2] focus:outline-none focus:border-[#E8D07C] placeholder:text-[#A3B18A]/40 resize-none transition-colors" />
                  </div>
                  <Input label="Desired Timeline" value={form.timeline}
                    onChange={(e) => setForm({ ...form, timeline: e.target.value })} placeholder="e.g. Q1 2027, ASAP, Planning phase" />
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[#A3B18A] uppercase tracking-wider">Additional Notes</label>
                    <textarea rows={2} value={form.additionalNotes}
                      onChange={(e) => setForm({ ...form, additionalNotes: e.target.value })}
                      placeholder="Custom colorways, API integration needs, SLA requirements..."
                      className="w-full bg-[#030504] border border-white/10 rounded-card px-4 py-3 text-sm text-[#F7F6F2] focus:outline-none focus:border-[#E8D07C] placeholder:text-[#A3B18A]/40 resize-none transition-colors" />
                  </div>
                  {status === 'error' && <p className="text-sm text-red-400">Submission failed. Please email enterprise@vrikshvani.com directly.</p>}
                  <Button variant="primary" type="submit" disabled={status === 'loading'} className="w-full">
                    {status === 'loading' ? 'Submitting...' : 'Submit Quote Request →'}
                  </Button>
                </form>
              </Card>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
