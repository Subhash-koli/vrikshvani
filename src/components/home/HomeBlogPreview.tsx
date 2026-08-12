import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const HomeBlogPreview: React.FC = () => {
  const articles = [
    {
      title: "Exploring Stomatal Conductance with FLIR Thermal Sensing",
      category: "Bio-Physics",
      date: "Research Note",
      readTime: "6 min read",
      slug: "stomatal-conductance-flir-thermal",
    },
    {
      title: "Soil Moisture Probes vs. Thermal Leaf Surface Dynamics",
      category: "Hardware Vision",
      date: "Research Note",
      readTime: "8 min read",
      slug: "soil-moisture-probes-vs-thermal",
    },
    {
      title: "TinyML Neural Model Quantization for On-Device Edge Microcontrollers",
      category: "Embedded AI",
      date: "Research Note",
      readTime: "11 min read",
      slug: "tinyml-quantization-esp32-s3",
    },
  ];

  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <Badge variant="gold">Vriksh Vani Research Notes</Badge>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
                Our Research & Botanical Hypotheses.
              </h2>
            </div>
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#8AD74C] hover:underline">
                Visit Research Hub <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <ScrollReveal key={idx} stagger={idx}>
              <Card className="flex flex-col justify-between h-full space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#A3B18A]">
                    <Badge variant="glass">{art.category}</Badge>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#F7F6F2] hover:text-[#8AD74C] transition-colors">
                    <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                  </h3>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#A3B18A]">
                  <span>{art.date}</span>
                  <Link href={`/blog/${art.slug}`} className="text-[#8AD74C] font-mono flex items-center gap-1 hover:underline">
                    Read Note <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogPreview;
