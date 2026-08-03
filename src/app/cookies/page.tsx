import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Cookie Policy — Vriksh Vani',
  description: 'Vriksh Vani uses essential session cookies only. No tracking cookies or third-party ads.',
};

export default function CookiesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <Badge variant="lime">Cookie Policy</Badge>
            <h1 className="font-display text-4xl font-bold text-[#F7F6F2]">Minimal Cookies Only</h1>
            <p className="text-[#A3B18A] text-sm">We respect your digital footprint.</p>
          </div>

          <Card className="p-8 space-y-4">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">Cookies We Use</h2>
            <div className="space-y-2 text-sm text-[#A3B18A]">
              <p><strong className="text-[#F7F6F2]">vv_session:</strong> Essential auth token (Session)</p>
              <p><strong className="text-[#F7F6F2]">vv_csrf:</strong> Security protection token (Session)</p>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
