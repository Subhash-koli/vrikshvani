'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import HomePricingPreview from '@/components/home/HomePricingPreview';

export const PricingHero: React.FC = () => {
  return (
    <section className="pt-36 pb-12 bg-[#070B08] text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        <Badge variant="lime">Transparent Pricing</Badge>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2]">
          Simple, Transparent Plans for Every Plant Collection.
        </h1>
        <p className="text-[#A3B18A] text-base md:text-lg">
          No mandatory hardware subscriptions. Every hub includes free Essential monitoring forever.
        </p>
      </div>
    </section>
  );
};

export default PricingHero;
