'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Lock, ShieldAlert, KeyRound, AlertCircle, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/v1/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push('/admin/waitlist');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Invalid admin password.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      <section className="pt-36 pb-28 flex items-center justify-center">
        <div className="max-w-md w-full px-4 space-y-6">
          <div className="text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center mx-auto text-[#8AD74C] shadow-lime-glow">
              <Lock className="w-7 h-7" />
            </div>
            <Badge variant="lime" className="gap-1 font-mono text-xs">
              <ShieldAlert className="w-3.5 h-3.5" /> Internal Admin Portal
            </Badge>
            <h1 className="font-display text-3xl font-bold text-[#F7F6F2]">
              Vriksh Vani Admin Authentication
            </h1>
            <p className="text-xs text-[#A3B18A]">
              Enter your master admin password to access live pre-order records and database metrics.
            </p>
          </div>

          <Card className="p-8 space-y-6 border-[#8AD74C]/30 nidl-glass-dark">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A3B18A] uppercase tracking-wider block">
                  Master Password
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-[#A3B18A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password..."
                    className="w-full bg-[#030504] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-[#F7F6F2] focus:outline-none focus:border-[#8AD74C] placeholder:text-[#A3B18A]/40 transition-colors font-mono"
                  />
                </div>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <Button
                variant="primary"
                type="submit"
                disabled={status === 'loading'}
                className="w-full"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Verifying Credentials...
                  </span>
                ) : (
                  'Authenticate & Open Portal →'
                )}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
