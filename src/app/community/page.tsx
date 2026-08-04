import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeCommunityWall from '@/components/home/HomeCommunityWall';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Botanist Community & Open Forum — Vriksh Vani',
  description: 'Connect with plant parents, researchers, and botanists decoding nature intelligence. Share transpiration logs, care tips, and plant voice recordings.',
  openGraph: {
    title: 'Botanist Community & Open Forum — Vriksh Vani',
    description: 'Join the world\'s largest plant intelligence community. Open forums, species care guides, and research circles.',
    url: 'https://vrikshvani.com/community',
  },
};

export default function CommunityPage() {
  const spaces = [
    { title: "Founding Botanists Guild", members: "486 Members", desc: "Exclusive inner circle of Batch 01 hardware owners." },
    { title: "Plant Parent Hub", members: "2,140 Members", desc: "Casual community of plant lovers, tips, and weekly challenges." },
    { title: "Bio-Physics Research Circle", members: "318 Members", desc: "Academic discussion of stomatal transpiration and VPD theory." },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <Badge variant="lime">Global Community</Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2]">
            The World's Most Passionate Plant Intelligence Community.
          </h1>
          <p className="text-[#A3B18A] text-base md:text-lg">
            Join 2,944 botanists, researchers, plant parents, and bio-physics enthusiasts in our Discord-powered community.
          </p>
          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <Link href="https://discord.gg/vrikshvani" target="_blank">
              <Button variant="primary" size="lg">Join Discord Community →</Button>
            </Link>
            <Link href="/community/forum">
              <Button variant="outline" size="lg">Browse Open Forum</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Spaces */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="gold">Community Spaces</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2]">Find Your Tribe.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spaces.map((s, idx) => (
              <Card key={idx} className="space-y-3">
                <Badge variant="glass">{s.members}</Badge>
                <h3 className="font-display text-xl font-bold text-[#F7F6F2]">{s.title}</h3>
                <p className="text-xs text-[#A3B18A] leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <HomeCommunityWall />
      <Footer />
    </main>
  );
}
