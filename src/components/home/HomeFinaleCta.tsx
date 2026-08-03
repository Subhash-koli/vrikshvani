'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Sparkles, CheckCircle2, Lock } from 'lucide-react';

export const HomeFinaleCta: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [colorway, setColorway] = useState('BIOPHILIC_SAGE');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-28 bg-[#030504] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8AD74C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="p-8 md:p-14 border-[#8AD74C]/30 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="lime" className="px-4 py-1.5 text-xs font-mono">
              <Sparkles className="w-4 h-4 text-[#8AD74C] animate-spin" /> Batch 01 Pre-Order Reservation
            </Badge>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              Join the Botanical Revolution Today.
            </h2>

            <p className="text-[#A3B18A] text-base md:text-lg max-w-xl mx-auto">
              Reserve your NIH-01 Nature Intelligence Hub. Lock in Founding Member perks, zero price increases, and early October 2026 shipping.
            </p>

            {submitted ? (
              <div className="p-8 rounded-card bg-[#0F2B18] border border-[#8AD74C] text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#8AD74C] mx-auto" />
                <h3 className="font-display text-2xl font-bold text-[#F7F6F2]">Reservation Confirmed!</h3>
                <p className="text-sm text-[#A3B18A]">
                  Your unique referral code <span className="font-mono text-[#8AD74C]">LEAFCODE-8941</span> has been sent to <span className="text-[#F7F6F2]">{email}</span>. Share it to climb the queue!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto pt-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    placeholder="Siddhant Tiwari"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="siddhant@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Select
                  label="Preferred Ceramic Colorway"
                  value={colorway}
                  onChange={(e) => setColorway(e.target.value)}
                  options={[
                    { label: '🌿 Biophilic Sage (Limited)', value: 'BIOPHILIC_SAGE' },
                    { label: '✨ Cream White (Classic)', value: 'CREAM_WHITE' },
                  ]}
                />

                <Button variant="primary" size="lg" type="submit" className="w-full mt-2">
                  Complete Batch 01 Reservation →
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#A3B18A] pt-2">
                  <Lock className="w-3.5 h-3.5 text-[#8AD74C]" /> 100% No-Risk Cancellation · Zero Upfront Fee Required
                </div>
              </form>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HomeFinaleCta;
