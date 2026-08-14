'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Sparkles, CheckCircle2, Lock, AlertCircle, Loader2 } from 'lucide-react';

interface WaitlistResponse {
  success: boolean;
  message?: string;
  data?: {
    email: string;
    queuePosition: number;
    referralCode: string;
    preferredColorway: string;
  };
  error?: string | Array<{ message: string }>;
}

export const HomeFinaleCta: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('PLANT_ENTHUSIAST');
  const [colorway, setColorway] = useState('BIOPHILIC_SAGE');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseData, setResponseData] = useState<WaitlistResponse['data'] | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/v1/waitlist/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          role,
          preferredColorway: colorway,
        }),
      });

      const data: WaitlistResponse = await res.json();

      if (!res.ok || !data.success) {
        const errMsg = Array.isArray(data.error)
          ? data.error.map((e) => e.message).join(', ')
          : typeof data.error === 'string'
          ? data.error
          : 'Something went wrong. Please try again.';
        setErrorMessage(errMsg);
        setStatus('error');
        return;
      }

      setResponseData(data.data ?? null);
      setStatus('success');
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <section id="reserve" className="py-28 bg-[#030504] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8AD74C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="p-8 md:p-14 border-[#8AD74C]/30 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="lime" className="px-4 py-1.5 text-xs font-mono">
              <Sparkles className="w-4 h-4 text-[#8AD74C]" /> Early Research Cohort
            </Badge>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              Join the Nature Intelligence Journey.
            </h2>

            <p className="text-[#A3B18A] text-base md:text-lg max-w-xl mx-auto">
              Be among the first to receive research updates, prototype access, and contribute to our plant biophysics datasets.
            </p>

            {status === 'success' && responseData ? (
              <div className="p-8 rounded-card bg-[#0F2B18] border border-[#8AD74C] text-center space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#8AD74C] mx-auto" />
                <h3 className="font-display text-2xl font-bold text-[#F7F6F2]">Waitlist Spot Confirmed!</h3>
                <p className="text-sm text-[#A3B18A]">
                  Your queue position is <span className="font-mono text-[#E8D07C] font-bold text-lg">#{responseData.queuePosition}</span>
                </p>
                <p className="text-sm text-[#A3B18A]">
                  Your unique invite code <span className="font-mono text-[#8AD74C]">{responseData.referralCode}</span> has been sent to <span className="text-[#F7F6F2]">{responseData.email}</span>.
                </p>
                <div className="pt-2">
                  <a
                    href={`/waitlist/confirmed?queue=${responseData.queuePosition}&code=${responseData.referralCode}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-xs text-white transition-all
                               bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050]
                               hover:from-[#051A02] hover:via-[#3FAE2A] hover:to-[#D0FF60]"
                  >
                    View Community Dashboard →
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto pt-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={status === 'loading'}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Select
                    label="I am primarily a:"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    options={[
                      { label: '🪴 Plant Enthusiast / Collector', value: 'PLANT_ENTHUSIAST' },
                      { label: '🔬 Student / University Researcher', value: 'RESEARCHER' },
                      { label: '💻 Software Developer / AI Engineer', value: 'DEVELOPER' },
                      { label: '⚡ Hardware / Electronics Engineer', value: 'HARDWARE_ENGINEER' },
                      { label: '🌱 Botany / Horticulture Professional', value: 'HORTICULTURIST' },
                      { label: '🧪 Prototype Tester', value: 'PROTOTYPE_TESTER' },
                    ]}
                  />

                  <Select
                    label="Preferred Colorway Concept"
                    value={colorway}
                    onChange={(e) => setColorway(e.target.value)}
                    options={[
                      { label: '🌿 Biophilic Sage', value: 'BIOPHILIC_SAGE' },
                      { label: '✨ Cream White', value: 'CREAM_WHITE' },
                    ]}
                  />
                </div>

                {/* Error Message */}
                {status === 'error' && errorMessage && (
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm animate-fadeIn">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="w-full mt-2"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Joining Waitlist...
                    </span>
                  ) : (
                    'Join Research Waitlist →'
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#A3B18A] pt-2">
                  <Lock className="w-3.5 h-3.5 text-[#8AD74C]" /> 100% Privacy Protected · Zero Upfront Fee Required
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
