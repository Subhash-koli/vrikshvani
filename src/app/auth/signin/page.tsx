'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { signIn } from 'next-auth/react';
import { Leaf, Mail } from 'lucide-react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await signIn('email', { email, callbackUrl: '/dashboard', redirect: false });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2] flex flex-col justify-center items-center px-4">
      <div className="mb-8 text-center space-y-2">
        <Link href="/" className="inline-flex items-center gap-2 font-display text-2xl font-bold text-[#F7F6F2]">
          <Leaf className="w-6 h-6 text-[#8AD74C]" /> Vriksh Vani
        </Link>
      </div>

      <Card className="w-full max-w-md p-8 space-y-6 bg-[#0F2B18]/70 backdrop-blur border-[#8AD74C]/20">
        <div className="text-center space-y-1">
          <h1 className="font-display text-2xl font-bold text-[#F7F6F2]">Welcome back.</h1>
          <p className="text-xs text-[#A3B18A]">Sign in to access your plant hub dashboard</p>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <Mail className="w-12 h-12 text-[#8AD74C] mx-auto" />
            <p className="font-display font-bold text-[#F7F6F2]">Magic Link Sent! 🌿</p>
            <p className="text-xs text-[#A3B18A]">Check your inbox at <strong className="text-[#F7F6F2]">{email}</strong> to sign in.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Work or Personal Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
            />
            <Button variant="primary" type="submit" disabled={loading} className="w-full">
              {loading ? 'Sending link...' : 'Send Magic Link →'}
            </Button>
          </form>
        )}

        <div className="relative py-2 text-center text-xs text-[#A3B18A]">
          <span className="bg-[#070B08] px-2 relative z-10">or continue with</span>
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" size="sm" onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className="w-full text-xs">
            Google
          </Button>
          <Button variant="outline" size="sm" onClick={() => signIn('github', { callbackUrl: '/dashboard' })} className="w-full text-xs">
            GitHub
          </Button>
        </div>

        <p className="text-[10px] text-center text-[#A3B18A] leading-relaxed">
          By signing in, you agree to our <Link href="/terms" className="text-[#8AD74C] underline">Terms</Link> and <Link href="/privacy" className="text-[#8AD74C] underline">Privacy Policy</Link>.
        </p>
      </Card>
    </main>
  );
}
