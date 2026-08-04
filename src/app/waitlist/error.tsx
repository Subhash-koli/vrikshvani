'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-24 space-y-6 bg-[#070B08]">
      <Badge variant="gold">Something Went Wrong</Badge>
      <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
        A root disruption occurred.
      </h2>
      <p className="text-[#A3B18A] text-base max-w-md">
        An unexpected error happened. Our engineering team has been notified.
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
    </div>
  );
}
