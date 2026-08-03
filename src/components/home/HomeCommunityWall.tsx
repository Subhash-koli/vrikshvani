'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Star, Quote } from 'lucide-react';

export const HomeCommunityWall: React.FC = () => {
  const testimonials = [
    {
      quote: "Vriksh Vani saved my 12-year-old Ficus. The thermal alert flagged root transpiration stress two days before any leaves turned yellow.",
      author: "Dr. Ananya Rao",
      role: "Botanical Researcher, IISc Bengaluru",
      plant: "Ficus Benjamina",
    },
    {
      quote: "The ceramic hub looks like a piece of modern art in our living room. And hearing our Monstera greet us in the morning is pure magic.",
      author: "Marcus Vance",
      role: "Architect & Interior Designer, London",
      plant: "Monstera Deliciosa",
    },
    {
      quote: "Zero video cameras was a non-negotiable for my bedroom. Knowing thermal frames are purged in RAM gives me total peace of mind.",
      author: "Priya Sharma",
      role: "Cybersecurity Lead, San Francisco",
      plant: "Calathea Orbifolia",
    },
  ];

  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gold">Community & Testimonials</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Loved by Botanists, Loved by Plant Lovers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#8AD74C]/40" />
                <p className="text-sm text-[#F7F6F2]/90 leading-relaxed italic">"{t.quote}"</p>
              </div>
              <div className="pt-4 border-t border-white/5 space-y-1">
                <div className="font-display font-semibold text-sm text-[#F7F6F2]">{t.author}</div>
                <div className="text-xs text-[#A3B18A]">{t.role}</div>
                <Badge variant="lime" className="mt-2 text-[10px]">Plant: {t.plant}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCommunityWall;
