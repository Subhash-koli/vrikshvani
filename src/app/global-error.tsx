'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#070B08] text-[#F7F6F2] flex flex-col items-center justify-center text-center px-4 py-24 space-y-6">
        <Badge variant="gold">500 — Something Went Wrong</Badge>
        <h1 className="font-display text-6xl md:text-8xl font-bold text-[#F7F6F2]">
          🌱
        </h1>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
          A root disruption occurred.
        </h2>
        <p className="text-[#A3B18A] text-base max-w-md">
          An unexpected error happened on our end. Our engineering team has been automatically notified.
          {error?.digest && (
            <span className="block font-mono text-xs text-[#A3B18A]/60 mt-2">
              Error ID: {error.digest}
            </span>
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button variant="primary" size="lg" onClick={reset}>
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" size="lg">← Back to Home</Button>
          </Link>
        </div>
      </body>
    </html>
  );
}
