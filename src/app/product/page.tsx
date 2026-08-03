import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductHero from '@/components/product/ProductHero';
import ProductTechSpecs from '@/components/product/ProductTechSpecs';
import JsonLd, { productJsonLd } from '@/components/seo/JsonLd';

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <JsonLd data={productJsonLd} />
      <Header />
      <ProductHero />
      <ProductTechSpecs />
      <Footer />
    </main>
  );
}
