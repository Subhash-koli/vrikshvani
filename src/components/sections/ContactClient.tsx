'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail, MessageSquare, Building2, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

type Reason = 'general' | 'research' | 'prototype' | 'press' | 'technical' | 'partnership';

const reasons: { value: Reason; label: string; desc: string }[] = [
  { value: 'general', label: 'General Inquiry', desc: 'Project questions & research waitlist' },
  { value: 'research', label: 'Research Collaboration', desc: 'University, academic & lab research' },
  { value: 'prototype', label: 'Prototype Testing Cohort', desc: 'Early hardware testbed cohort' },
  { value: 'press', label: 'Press & Media', desc: 'Interviews & press kit requests' },
  { value: 'technical', label: 'Technical / Developer', desc: 'SDK, open-data API, botanical AI' },
  { value: 'partnership', label: 'Partnership', desc: 'Botanical garden & institutional partners' },
];

export const ContactClient: React.FC = () => {
  const [reason, setReason] = useState<Reason>('general');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/v1/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, reason }),
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
    <section className="pt-36 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <Badge variant="lime">Get in Touch</Badge>
              <h1 className="font-display text-4xl font-bold text-[#F7F6F2]">
                Let&apos;s Talk Plants &amp; Technology.
              </h1>
              <p className="text-sm text-[#A3B18A] leading-relaxed">
                Whether you&apos;re curious about prototype cohort testing, research collaboration, or VPD science — we&apos;re happy to hear from you.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#8AD74C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[#F7F6F2]">hello@vrikshvani.com</p>
                  <p className="text-xs text-[#A3B18A]">General enquiries &amp; waitlist</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#E8D07C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[#F7F6F2]">research@vrikshvani.com</p>
                  <p className="text-xs text-[#A3B18A]">Academic &amp; research inquiries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-[#8AD74C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[#F7F6F2]">press@vrikshvani.com</p>
                  <p className="text-xs text-[#A3B18A]">Media &amp; press kit requests</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#A3B18A] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[#F7F6F2]">Response time: 1–2 business days</p>
                  <p className="text-xs text-[#A3B18A]">Mon–Fri, 10:00–18:00 IST</p>
                </div>
              </div>
            </div>

            <Card className="p-5 border-[#8AD74C]/20 space-y-2">
              <p className="text-xs font-mono text-[#8AD74C] font-bold">QUICKLINKS</p>
              <div className="space-y-1.5 text-xs">
                {[
                  { label: 'Support & FAQ', href: '/support/faq' },
                  { label: 'Developer Documentation', href: '/developers' },
                  { label: 'Research Cohort', href: '/community' },
                  { label: 'System Status', href: '/support/status' },
                ].map((l, idx) => (
                  <Link key={idx} href={l.href} className="flex items-center justify-between text-[#A3B18A] hover:text-[#8AD74C] transition-colors">
                    <span>{l.label}</span>
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <Card className="p-12 text-center space-y-5 border-[#8AD74C]/30">
                <CheckCircle2 className="w-16 h-16 text-[#8AD74C] mx-auto" />
                <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Message Sent! 🌿</h2>
                <p className="text-sm text-[#A3B18A]">
                  We&apos;ve received your message and will reply to <strong className="text-[#F7F6F2]">{formData.email}</strong> within 1–2 business days.
                </p>
                <Button variant="outline" onClick={() => setStatus('idle')}>Send Another Message</Button>
              </Card>
            ) : (
              <Card className="p-8 space-y-6">
                <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Send a Message</h2>

                {/* Reason Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-medium text-[#A3B18A] uppercase tracking-wider">
                    Enquiry Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {reasons.map((r) => (
                      <button
                        key={r.value}
                        type="button"
                        onClick={() => setReason(r.value)}
                        className={`text-left p-3 rounded-xl border text-xs transition-all ${
                          reason === r.value
                            ? 'border-[#8AD74C]/60 bg-[#0F2B18] text-[#8AD74C]'
                            : 'border-white/10 bg-[#0F2B18]/30 text-[#A3B18A] hover:border-[#8AD74C]/20'
                        }`}
                      >
                        <p className="font-semibold">{r.label}</p>
                        <p className={`mt-0.5 ${reason === r.value ? 'text-[#8AD74C]/70' : 'text-[#A3B18A]/60'}`}>{r.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Subhash Koli"
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </div>
                  <Input
                    label="Subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What is your enquiry about?"
                  />
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[#A3B18A] uppercase tracking-wider">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us everything..."
                      className="w-full bg-[#030504] border border-white/10 rounded-card px-4 py-3 text-sm text-[#F7F6F2] focus:outline-none focus:border-[#8AD74C] placeholder:text-[#A3B18A]/40 resize-none transition-colors"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <Button variant="primary" type="submit" disabled={status === 'loading'} className="w-full">
                    {status === 'loading' ? 'Sending...' : 'Send Message →'}
                  </Button>
                  <p className="text-[10px] font-mono text-[#A3B18A]/60 text-center">
                    By submitting you agree to our{' '}
                    <Link href="/privacy" className="hover:text-[#8AD74C]">Privacy Policy</Link>. No marketing emails without consent.
                  </p>
                </form>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactClient;
