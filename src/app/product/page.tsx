import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductHero from '@/components/product/ProductHero';
import ProductExplodedView from '@/components/product/ProductExplodedView';
import ProductUnboxing from '@/components/product/ProductUnboxing';
import ProductComparisonTable from '@/components/product/ProductComparisonTable';
import ProductTechSpecs from '@/components/product/ProductTechSpecs';
import HomeFeatureGrid from '@/components/home/HomeFeatureGrid';
import HomeTrustBar from '@/components/home/HomeTrustBar';
import JsonLd, { productJsonLd } from '@/components/seo/JsonLd';
import HomeFinaleCta from '@/components/home/HomeFinaleCta';

export const metadata: Metadata = {
  title: 'NIH-01 Nature Intelligence Hub — Vriksh Vani Product Overview',
  description: 'Discover the NIH-01 ceramic Smart Plant Sensor. Features FLIR thermal biometrics, quad-gas sensing, on-device neural plant voice, and plastic-free unboxing.',
  openGraph: {
    title: 'NIH-01 Nature Intelligence Hub — Vriksh Vani',
    description: 'FLIR thermal leaf biometrics, quad-gas analysis, and neural plant voice synthesis in a kiln-fired ceramic casing.',
    url: 'https://vrikshvani.com/product',
  },
};

export default function ProductPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <JsonLd data={productJsonLd} />
      <Header />
      <ProductHero />
      <HomeTrustBar />
      <ProductExplodedView />
      <HomeFeatureGrid />
      <ProductComparisonTable />
      <ProductUnboxing />
      <ProductTechSpecs />
      <HomeFinaleCta />
      <Footer />
    </main>
  );
}
