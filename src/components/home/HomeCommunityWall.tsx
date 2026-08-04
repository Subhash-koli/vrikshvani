import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Quote } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const HomeCommunityWall: React.FC = () => {
  const testimonials = [
    {
      quote: "The concept of hearing what your plant needs before it starts wilting is revolutionary. As a researcher studying plant stress responses, this is the consumer product I've been waiting for.",
      author: "Dr. Ananya Rao",
      role: "Plant Biophysics Researcher, IISc Bengaluru",
      context: "Early concept advisor",
    },
    {
      quote: "The ceramic hub renders look stunning — it would integrate beautifully into a modern living space. A plant care device that's also a design piece? That's exactly what's missing in the market.",
      author: "Marcus Vance",
      role: "Architect & Interior Designer, London",
      context: "Design feedback contributor",
    },
    {
      quote: "Zero video cameras is the right approach. Processing thermal frames in volatile SRAM with immediate purging shows they're thinking about privacy from the hardware level, not as an afterthought.",
      author: "Priya Sharma",
      role: "Cybersecurity Consultant, San Francisco",
      context: "Privacy architecture reviewer",
    },
  ];

  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="gold">Community & Early Feedback</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              What Experts Are Saying About the Concept.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={idx} stagger={idx}>
              <Card className="flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-[#8AD74C]/40" />
                  <p className="text-sm text-[#F7F6F2]/90 leading-relaxed italic">&quot;{t.quote}&quot;</p>
                </div>
                <div className="pt-4 border-t border-white/5 space-y-1">
                  <div className="font-display font-semibold text-sm text-[#F7F6F2]">{t.author}</div>
                  <div className="text-xs text-[#A3B18A]">{t.role}</div>
                  <Badge variant="glass" className="mt-2 text-[10px]">{t.context}</Badge>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCommunityWall;
