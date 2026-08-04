import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

export const HomeBlogPreview: React.FC = () => {
  const articles = [
    {
      title: "Measuring Stomatal Conductance with FLIR Lepton Thermal Arrays",
      category: "Bio-Physics",
      date: "August 2026",
      readTime: "6 min read",
      href: "/blog",
    },
    {
      title: "Why Soil Moisture Probes Lie (and Why Thermal Leaf Cooling Never Does)",
      category: "Hardware",
      date: "July 2026",
      readTime: "8 min read",
      href: "/blog",
    },
    {
      title: "Quantizing TinyML Neural Models for ARM Cortex-M4 NPU Inference",
      category: "Embedded AI",
      date: "July 2026",
      readTime: "11 min read",
      href: "/blog",
    },
  ];

  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="gold">Vriksh Vani Dispatch</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              Latest Research & Botanical Science.
            </h2>
          </div>
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#8AD74C] hover:underline">
              Visit Research Hub <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <Card key={idx} className="flex flex-col justify-between h-full space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#A3B18A]">
                  <Badge variant="glass">{art.category}</Badge>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#F7F6F2] hover:text-[#8AD74C] transition-colors">
                  <Link href={art.href}>{art.title}</Link>
                </h3>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#A3B18A]">
                <span>{art.date}</span>
                <Link href={art.href} className="text-[#8AD74C] font-mono flex items-center gap-1 hover:underline">
                  Read Paper <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogPreview;
