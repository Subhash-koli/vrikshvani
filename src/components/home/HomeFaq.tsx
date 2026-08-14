'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const faqs = [
  {
    q: "How does non-invasive thermal sensing work?",
    a: "FLIR thermal arrays measure fine-scale surface temperature variations on leaf surfaces caused by evaporative cooling during leaf transpiration. This enables us to observe potential stress indicators without touching or harming plant tissue.",
  },
  {
    q: "Is there any camera or video recording inside my room?",
    a: "No. The NIH-01 hub concept contains zero visual cameras. Thermal frames exist strictly in volatile SRAM for edge processing and are immediately purged, ensuring complete home privacy.",
  },
  {
    q: "What is the Nature Translation Engine™ (NTE)?",
    a: "NTE™ is our neural translation model concept that interprets biophysical sensor signals (temperature, VPD, humidity, gas levels) and expresses the plant's physiological status through a natural human-friendly voice.",
  },
  {
    q: "What development stage is Vriksh Vani currently in?",
    a: "Vriksh Vani is currently in the research, category positioning, and prototype validation stage. We are actively developing models, testing sensor combinations, and building our early research community.",
  },
  {
    q: "How can I participate in testing NIH-01?",
    a: "You can join our Founding Research Waitlist. Early cohort members will receive development updates, dataset releases, and priority invitations to test prototype units as they become available.",
  },
];

function FaqItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <Card className="p-0 overflow-hidden" hoverEffect={false}>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 cursor-pointer text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base md:text-lg font-semibold text-[#F7F6F2] pr-4 group-hover:text-[#8AD74C] transition-colors">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#8AD74C] transition-transform duration-300 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-400"
        style={{
          maxHeight: isOpen ? '300px' : '0',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
        }}
      >
        <p className="text-sm text-[#A3B18A] px-6 pb-6 pt-0 border-t border-white/5 mt-0 pt-4 leading-relaxed">
          {faq.a}
        </p>
      </div>
    </Card>
  );
}

export const HomeFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <Badge variant="lime">Frequently Asked Questions</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
              Transparent Answers on Our Journey.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} stagger={idx} distance={15}>
              <FaqItem
                faq={faq}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
