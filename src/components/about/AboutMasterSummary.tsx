import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const AboutMasterSummary: React.FC = () => {
  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Badge variant="lime">Join Our Journey</Badge>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
          Ready to Hear Your Plants Speak?
        </h2>
        <p className="text-[#A3B18A] text-base md:text-lg max-w-2xl mx-auto">
          Be among the first 500 Founding Members worldwide to receive the NIH-01 Nature Intelligence Hub.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Link href="/waitlist">
            <Button variant="primary" size="lg">Reserve Batch 01 Founding Unit →</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMasterSummary;
