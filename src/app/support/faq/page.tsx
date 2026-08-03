import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeFaq from '@/components/home/HomeFaq';
import { Badge } from '@/components/ui/Badge';

export default function SupportFaqPage() {
  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-12 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <Badge variant="lime">80+ Answered Questions</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
            Frequently Asked Questions
          </h1>
          <p className="text-[#A3B18A] text-base">
            Everything you need to know about hardware, the app, shipping, warranties, and plant care.
          </p>
        </div>
      </section>
      <HomeFaq />
      <Footer />
    </main>
  );
}
