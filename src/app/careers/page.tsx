import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutTeam from '@/components/about/AboutTeam';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export default function CareersPage() {
  const roles = [
    { title: "Senior Embedded Firmware Engineer", loc: "Bengaluru · Hybrid", type: "Full-Time" },
    { title: "TinyML Neural Network Optimization Lead", loc: "Remote / Bengaluru", type: "Full-Time" },
    { title: "Senior Ceramic & Industrial Designer", loc: "London / Bengaluru", type: "Full-Time" },
    { title: "Plant Biophysicist & Stomatal Researcher", loc: "Bengaluru Lab", type: "Full-Time" },
  ];

  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 space-y-12 text-center">
          <div className="space-y-4">
            <Badge variant="lime">Join Our Team</Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2]">
              Help Us Build the Voice of Nature.
            </h1>
            <p className="text-[#A3B18A] text-base">
              We're hiring passionate engineers, bio-physicists, and designers across Bengaluru, London, and San Francisco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {roles.map((r, idx) => (
              <Card key={idx} className="space-y-3">
                <Badge variant="glass">{r.type}</Badge>
                <h3 className="font-display font-bold text-lg text-[#F7F6F2]">{r.title}</h3>
                <p className="text-xs font-mono text-[#A3B18A]">{r.loc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <AboutTeam />
      <Footer />
    </main>
  );
}
