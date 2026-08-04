import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ChevronDown } from 'lucide-react';

export const HomeFaq: React.FC = () => {
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

  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="lime">Frequently Asked Questions</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Everything You Need to Know.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="p-0 overflow-hidden">
              <details className="group p-6 cursor-pointer">
                <summary className="flex items-center justify-between list-none font-display text-base md:text-lg font-semibold text-[#F7F6F2] select-none">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-[#8AD74C] transition-transform duration-300 group-open:rotate-180 shrink-0 ml-4" />
                </summary>
                <p className="text-sm text-[#A3B18A] mt-4 pt-4 border-t border-white/5 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;

