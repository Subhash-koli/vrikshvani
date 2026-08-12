import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Users, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Authors & Contributors — Vriksh Vani Notes',
  description: 'Meet the founder and contributors behind the Vriksh Vani research notes.',
};

export default function BlogAuthorsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-[#8AD74C]" />
              <div>
                <Badge variant="lime">Authors &amp; Contributors</Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#F7F6F2] mt-1">
                  Behind Vriksh Vani Research Notes
                </h1>
              </div>
            </div>
            <p className="text-[#A3B18A]">Documenting our open exploration into Nature Intelligence and plant biometrics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="space-y-4 border-[#8AD74C]/30 bg-[#0F2B18]/30">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#8AD74C] flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-[#070B08] text-lg">SK</span>
                </div>
                <div>
                  <h2 className="font-display font-bold text-[#F7F6F2]">Subhash Koli</h2>
                  <p className="text-xs font-mono text-[#A3B18A]">Founder, Vriksh Vani</p>
                  <p className="text-xs font-mono text-[#8AD74C]">Bengaluru, India</p>
                </div>
              </div>
              <p className="text-sm text-[#A3B18A] leading-relaxed">
                Exploring non-invasive sensing, biophysical plant telemetry, and edge TinyML models to help humans better understand and empathize with living flora.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Biophysics', 'Thermal Sensing', 'TinyML', 'VPD'].map((s, i) => (
                  <span key={i} className="text-xs font-mono bg-[#070B08] border border-white/10 rounded-full px-3 py-0.5 text-[#A3B18A]">
                    {s}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="space-y-4 border-[#E8D07C]/20 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8D07C]/10 border border-[#E8D07C]/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#E8D07C]" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#F7F6F2]">
                  Become a Research Contributor
                </h3>
                <p className="text-sm text-[#A3B18A] leading-relaxed">
                  Are you a botanist, plant physiologist, or embedded systems engineer? We welcome collaborative articles and research notes exploring plant intelligence.
                </p>
              </div>
              <Link href="mailto:science@vrikshvani.com">
                <Button variant="outline" size="sm" className="w-full">
                  Submit a Research Note →
                </Button>
              </Link>
            </Card>
          </div>

          <div className="text-center pt-4">
            <Link href="/blog">
              <Button variant="outline">← Back to All Notes</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
