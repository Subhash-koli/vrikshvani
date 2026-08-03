import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductTechSpecs from '@/components/product/ProductTechSpecs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';

export default function ProductSpecificationsPage() {
  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-12 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <Badge variant="lime">Hardware Datasheet</Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F7F6F2]">
            NIH-01 Full Technical Specifications.
          </h1>
          <p className="text-[#A3B18A] text-base md:text-lg">
            Monospaced hardware data sheet detailing sensor optics, RF certifications, battery limits, and ceramic thermal properties.
          </p>
          <div className="pt-4 flex justify-center">
            <Button variant="primary" className="flex items-center gap-2">
              <Download className="w-4 h-4" /> Download PDF Datasheet (2.4MB)
            </Button>
          </div>
        </div>
      </section>
      <ProductTechSpecs />
      <Footer />
    </main>
  );
}
