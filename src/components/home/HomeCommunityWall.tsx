import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, Users, MessageSquareHeart } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const HomeCommunityWall: React.FC = () => {
  const perspectives = [
    {
      title: "Botanical Curiosity",
      desc: "Can non-invasive thermal imaging detect stomatal closure early enough to prevent domestic plant mortality? That is the question driving our biophysical experiments.",
      tag: "Biophysics Focus",
      icon: Sparkles,
    },
    {
      title: "Biophilic Aesthetics",
      desc: "Domestic plant tech should respect living spaces. Designing handcrafted ceramic enclosures that feel like artisanal pottery rather than black plastic gadgets.",
      tag: "Design Philosophy",
      icon: MessageSquareHeart,
    },
    {
      title: "Uncompromising Privacy",
      desc: "No optical cameras, no room video harvesting. Processing sensor signals in volatile SRAM on-device ensures domestic privacy is preserved by design.",
      tag: "Privacy Architecture",
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="gold">Founding Vision &amp; Inquiries</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              The Core Questions We Are Exploring.
            </h2>
            <p className="text-[#A3B18A] text-sm md:text-base max-w-2xl mx-auto">
              Our founding cohort is built on transparent exploration, scientific curiosity, and privacy-conscious hardware engineering.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {perspectives.map((p, idx) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={idx} stagger={idx}>
                <Card className="flex flex-col justify-between space-y-6 h-full p-8 border-white/10 hover:border-[#8AD74C]/30 transition-all">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#8AD74C]/10 border border-[#8AD74C]/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#8AD74C]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#F7F6F2]">{p.title}</h3>
                    <p className="text-sm text-[#A3B18A] leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <Badge variant="glass" className="text-[10px]">{p.tag}</Badge>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeCommunityWall;
