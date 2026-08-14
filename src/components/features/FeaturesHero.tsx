'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';

export const FeaturesHero: React.FC = () => {
  return (
    <section className="pt-36 pb-20 bg-[#070B08] text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        <Badge variant="lime">14 Core Capabilities</Badge>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2]">
          Everything your plant needs to speak.
        </h1>
        <p className="text-[#A3B18A] text-base md:text-lg">
          From leaf thermal transpiration monitoring to neural voice speech synthesis.
        </p>
      </div>
    </section>
  );
};

export default FeaturesHero;
