'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const faqs = [
  {
    q: "How does FLIR thermal sensing work without invading plant tissue?",
    a: "FLIR thermal arrays detect micro-kelvin surface temperature shifts on leaves caused by evaporative cooling during stomatal opening. This non-invasive method measures plant stress hours before physical wilting occurs.",
  },
  {
    q: "Is there any camera or video recording inside my room?",
    a: "No. The NIH-01 contains no visual cameras. Thermal frames are processed exclusively in volatile SRAM by the local ARM Cortex-M4 NPU and overwritten 20 times per second with zero video cloud exfiltration.",
  },
  {
    q: "What languages does the NTE™ Neural Voice Engine support?",
    a: "NTE™ supports 8 native languages including English, Hindi, Kannada, Tamil, Telugu, Marathi, Spanish, and German.",
  },
  {
    q: "What happens if my Wi-Fi goes offline?",
    a: "The NIH-01 features onboard 30-day (720-hour) SPI flash memory. It continues monitoring plant biometrics locally and automatically backfills cloud history when reconnected.",
  },
  {
    q: "When will Batch 01 Founding Member units ship?",
    a: "Batch 01 production units ship in October 2026. Every reservation includes a numbered gold-foil certificate and founding member pricing.",
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
              Everything You Need to Know.
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
