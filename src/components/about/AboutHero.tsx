import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Leaf, Heart, Globe } from 'lucide-react';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 bg-[#070B08] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#8AD74C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge variant="gold">Our Mission & Cause</Badge>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#F7F6F2] leading-tight">
            We are building the <span className="text-[#8AD74C]">Universal Translator</span> for Plant Life.
          </h1>
          <p className="text-lg md:text-xl text-[#A3B18A] max-w-2xl mx-auto leading-relaxed">
            Founded in Bengaluru in 2024, Vriksh Vani merges non-invasive thermal biometrics with embedded artificial intelligence to give a voice to the natural world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
