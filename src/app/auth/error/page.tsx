import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AlertCircle, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sign In Error — Vriksh Vani',
  description: 'Authentication error occurred. Please try signing in again.',
};

export default function AuthErrorPage({ searchParams }: { searchParams: { error?: string } }) {
  const error = searchParams.error;
  let message = 'An unexpected error occurred during sign-in. Please try again.';

  if (error === 'OAuthSignin' || error === 'OAuthCallback') {
    message = 'There was a problem connecting to the authentication provider. Please try again.';
  } else if (error === 'EmailSignin') {
    message = 'The magic link has expired or already been used. Please request a new one.';
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2] flex flex-col justify-center items-center px-4">
      <div className="mb-8 text-center space-y-2">
        <Link href="/" className="inline-flex items-center gap-2 font-display text-2xl font-bold text-[#F7F6F2]">
          <Leaf className="w-6 h-6 text-[#8AD74C]" /> Vriksh Vani
        </Link>
      </div>

      <Card className="w-full max-w-md p-8 text-center space-y-6 border-red-500/30">
        <AlertCircle className="w-12 h-12 text-red-400 mx-auto" />
        <h1 className="font-display text-2xl font-bold text-[#F7F6F2]">Sign-In Error</h1>
        <p className="text-sm text-[#A3B18A]">{message}</p>
        <Link href="/auth/signin">
          <Button variant="primary" className="w-full">Try Again →</Button>
        </Link>
      </Card>
    </main>
  );
}
