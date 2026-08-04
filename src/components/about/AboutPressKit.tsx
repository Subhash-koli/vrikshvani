import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Download, FileText } from 'lucide-react';
import Link from 'next/link';

export const AboutPressKit: React.FC = () => {
  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-[#8AD74C]/30 shadow-lime-glow">
          <div className="space-y-3 max-w-xl">
            <Badge variant="gold">Media & Press Room</Badge>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-[#F7F6F2]">
              Download Official Press Kit & 4K B-Roll Renders
            </h2>
            <p className="text-xs md:text-sm text-[#A3B18A]">
              High-resolution product photography, founder headshots, technical whitepapers, and brand guidelines for journalists and creators.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link href="/press">
              <Button variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Download Media Kit (48MB ZIP)
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutPressKit;
