import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Sparkles, Mail, Compass } from 'lucide-react';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 space-y-12 text-center">
          <div className="space-y-4">
            <Badge variant="lime">Collaboration &amp; Community</Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2]">
              Collaborate on Nature Intelligence.
            </h1>
            <p className="text-[#A3B18A] text-base max-w-2xl mx-auto leading-relaxed">
              Vriksh Vani is an early-stage project exploring non-invasive plant biometrics and edge AI. We are always keen to connect with passionate botanists, firmware engineers, and researchers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card className="space-y-4 p-8 border-[#8AD74C]/30 bg-[#0F2B18]/30">
              <div className="w-10 h-10 rounded-xl bg-[#8AD74C]/10 border border-[#8AD74C]/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#8AD74C]" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#F7F6F2]">Research &amp; Botany Collaboration</h3>
              <p className="text-sm text-[#A3B18A] leading-relaxed">
                Are you researching stomatal dynamics, transpiration rates, or VPD thresholds across specific species? We welcome joint experiments and data collection initiatives.
              </p>
            </Card>

            <Card className="space-y-4 p-8 border-[#E8D07C]/30 bg-[#0F2B18]/30">
              <div className="w-10 h-10 rounded-xl bg-[#E8D07C]/10 border border-[#E8D07C]/30 flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#E8D07C]" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#F7F6F2]">Hardware &amp; TinyML Engineering</h3>
              <p className="text-sm text-[#A3B18A] leading-relaxed">
                Passionate about ESP32-S3 TinyML deployment, ceramic industrial engineering, or thermal radiometric sensor fusion? Connect with us to explore collaboration.
              </p>
            </Card>
          </div>

          <Card className="p-8 space-y-4 max-w-xl mx-auto border-white/10 text-center">
            <Mail className="w-8 h-8 text-[#8AD74C] mx-auto" />
            <h3 className="font-display font-bold text-xl text-[#F7F6F2]">Get in Touch</h3>
            <p className="text-xs text-[#A3B18A]">
              Drop a note with your background, interests, or questions.
            </p>
            <Link href="mailto:contact@vrikshvani.com">
              <Button variant="primary" size="md">
                Email contact@vrikshvani.com →
              </Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
