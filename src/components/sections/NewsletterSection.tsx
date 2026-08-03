'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Leaf, Rss, CheckCircle2 } from 'lucide-react';

interface NewsletterSectionProps {
  variant?: 'full' | 'compact';
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ variant = 'full' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/v1/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMessage(data.message || 'You\'re in! Welcome to the Nature Intelligence Dispatch.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  if (variant === 'compact') {
    return (
      <div className="nidl-glass rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Rss className="w-4 h-4 text-[#8AD74C]" />
          <span className="font-display font-bold text-sm text-[#F7F6F2]">Nature Intelligence Dispatch</span>
        </div>
        <p className="text-xs text-[#A3B18A]">Weekly plant science insights. No spam. Unsubscribe anytime.</p>
        {status === 'success' ? (
          <div className="flex items-center gap-2 text-[#8AD74C] text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 h-10 bg-[#030504] border border-white/10 rounded-btn px-3 text-sm text-[#F7F6F2] focus:outline-none focus:border-[#8AD74C] placeholder:text-[#A3B18A]/50"
            />
            <Button variant="primary" type="submit" size="sm" disabled={status === 'loading'}>
              {status === 'loading' ? '...' : 'Subscribe'}
            </Button>
          </form>
        )}
      </div>
    );
  }

  // Full variant
  return (
    <section className="py-20 bg-[#030504] border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center mx-auto">
          <Leaf className="w-7 h-7 text-[#8AD74C]" />
        </div>
        <Badge variant="lime">Nature Intelligence Dispatch</Badge>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">
          Weekly Plant Science. No Noise.
        </h2>
        <p className="text-[#A3B18A] text-base max-w-xl mx-auto">
          VPD science explainers, hardware dispatches, care guide updates, and Batch 01 news — delivered every Monday morning. Unsubscribe anytime.
        </p>

        {status === 'success' ? (
          <Card className="p-8 border-[#8AD74C]/30 space-y-3 max-w-sm mx-auto">
            <CheckCircle2 className="w-10 h-10 text-[#8AD74C] mx-auto" />
            <p className="font-display font-bold text-[#F7F6F2]">You&apos;re subscribed! 🌿</p>
            <p className="text-sm text-[#A3B18A]">{message}</p>
          </Card>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 h-12 bg-[#0F2B18]/60 border border-white/10 rounded-btn px-4 text-sm text-[#F7F6F2] focus:outline-none focus:border-[#8AD74C] placeholder:text-[#A3B18A]/50"
            />
            <Button variant="primary" type="submit" disabled={status === 'loading'} className="shrink-0">
              {status === 'loading' ? 'Subscribing...' : 'Subscribe →'}
            </Button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-sm text-red-400">{message}</p>
        )}

        <p className="text-xs font-mono text-[#A3B18A]/60">
          Join 1,847 plant scientists, botanists, and curious growers. No ads. No affiliate links.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
