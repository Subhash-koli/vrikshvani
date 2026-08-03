import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2] flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 space-y-6">
        <Badge variant="lime">404 — Page Not Found</Badge>
        <h1 className="font-display text-6xl md:text-8xl font-bold text-[#F7F6F2]">
          🌿
        </h1>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
          This leaf has fallen.
        </h2>
        <p className="text-[#A3B18A] text-base md:text-lg max-w-md">
          The page you're looking for doesn't exist or has been moved. Let's get you back to where your plants are thriving.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/">
            <Button variant="primary" size="lg">← Back to Home</Button>
          </Link>
          <Link href="/support">
            <Button variant="outline" size="lg">Visit Support Hub</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
