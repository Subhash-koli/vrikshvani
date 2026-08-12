import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Check, Sparkles, FlaskConical, Users } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const HomePricingPreview: React.FC = () => {
  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="lime">Founding Research Program</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              Join the Nature Intelligence Cohort
            </h2>
            <p className="text-[#A3B18A] text-base">
              We are building Vriksh Vani in the open. Help shape our research, validate early prototypes, and expand plant biophysics datasets.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Research Community */}
          <ScrollReveal stagger={0}>
            <Card className="flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="glass">Community Member</Badge>
                  <Users className="w-5 h-5 text-[#8AD74C]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#F7F6F2]">Free Access</h3>
                <p className="text-xs text-[#A3B18A]">For plant enthusiasts and curious minds.</p>
                <ul className="space-y-2.5 text-xs text-[#F7F6F2]/80 pt-4 border-t border-white/5">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> Monthly Research Dispatch</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> Public Biophysics Datasets</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> Community Discussion Forum</li>
                </ul>
              </div>
              <Link href="/waitlist" className="pt-6">
                <Button variant="secondary" className="w-full">Join Research Waitlist</Button>
              </Link>
            </Card>
          </ScrollReveal>

          {/* Prototype Tester Cohort (Featured) */}
          <ScrollReveal stagger={1}>
            <Card className="flex flex-col justify-between h-full border-[#8AD74C]/40 bg-[#0F2B18]/90 shadow-lime-glow relative space-y-6">
              <Badge variant="lime" className="absolute top-4 right-4">Founding Cohort</Badge>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="lime">Prototype Cohort</Badge>
                  <Sparkles className="w-5 h-5 text-[#8AD74C]" />
                </div>
                <h3 className="font-display text-3xl font-bold text-[#8AD74C]">Early Tester</h3>
                <p className="text-xs text-[#A3B18A]">For hands-on botanical testers & rare plant collectors.</p>
                <ul className="space-y-2.5 text-xs text-[#F7F6F2] pt-4 border-t border-white/5">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> Priority Access to Prototype Units</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> Direct Feedback Channel with Founder</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> NTE™ Neural Voice Beta Access</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8AD74C]" /> Numbered Founding Member Certificate</li>
                </ul>
              </div>
              <Link href="/waitlist" className="pt-6">
                <Button variant="primary" className="w-full">Apply for Prototype Cohort →</Button>
              </Link>
            </Card>
          </ScrollReveal>

          {/* Academic & Lab Collaboration */}
          <ScrollReveal stagger={2}>
            <Card className="flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="gold">Research Collaborator</Badge>
                  <FlaskConical className="w-5 h-5 text-[#E8D07C]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#E8D07C]">Lab & Academic</h3>
                <p className="text-xs text-[#A3B18A]">For botanists, universities & research institutions.</p>
                <ul className="space-y-2.5 text-xs text-[#F7F6F2]/80 pt-4 border-t border-white/5">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8D07C]" /> Raw Telemetry Data Access</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8D07C]" /> Custom Calibration Support</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8D07C]" /> Joint Biophysics Studies</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8D07C]" /> Open Source Data Collaboration</li>
                </ul>
              </div>
              <Link href="/contact" className="pt-6">
                <Button variant="gold" className="w-full">Partner as Researcher</Button>
              </Link>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HomePricingPreview;
