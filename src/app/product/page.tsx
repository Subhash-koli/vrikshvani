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
import JsonLd, { productJsonLd, createBreadcrumbJsonLd } from '@/components/seo/JsonLd';
import HomeFinaleCta from '@/components/home/HomeFinaleCta';

export const metadata: Metadata = {
  title: 'NIH-01 Nature Intelligence Hub | Vriksh Vani (vrikshvani)',
  description: 'Discover the NIH-01 kiln-fired ceramic plant intelligence hub by Vriksh Vani (vrikshvani / VrikshVani). Features FLIR thermal biometrics and plant voice AI at vrikshvani.com.',
  keywords: ['NIH-01', 'vrikshvani', 'vriksh vani', 'VrikshVani', 'vrikshvani.com', 'Vriksh Vani product', 'vrikshvani product', 'vrikshvani plant sensor', 'ceramic plant sensor', 'plant voice AI', 'FLIR thermal plant sensor', 'VPD monitor', 'plant biometrics'],
  alternates: {
    canonical: 'https://www.vrikshvani.com/product',
  },
  openGraph: {
    title: 'NIH-01 Nature Intelligence Hub | Vriksh Vani (vrikshvani)',
    description: 'FLIR thermal leaf biometrics, quad-gas analysis, and neural plant voice synthesis in a hand-crafted ceramic casing by Vriksh Vani (vrikshvani).',
    url: 'https://www.vrikshvani.com/product',
    siteName: 'Vriksh Vani (vrikshvani)',
    images: [
      {
        url: 'https://www.vrikshvani.com/og?title=NIH-01%20Nature%20Intelligence%20Hub&subtitle=Kiln-Fired%20Ceramic%20Plant%20Voice%20Hub',
        width: 1200,
        height: 630,
        alt: 'NIH-01 Nature Intelligence Hub by Vriksh Vani',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIH-01 Nature Intelligence Hub | Vriksh Vani',
    description: 'The world\'s first plant voice hub powered by FLIR thermal biometrics & quad-gas sensing.',
    images: ['https://www.vrikshvani.com/og?title=NIH-01%20Nature%20Intelligence%20Hub&subtitle=Kiln-Fired%20Ceramic%20Plant%20Voice%20Hub'],
    creator: '@vrikshvani',
  },
};

export default function ProductPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <JsonLd data={productJsonLd} />
      <JsonLd data={createBreadcrumbJsonLd([{ name: 'Home', url: '/' }, { name: 'Product', url: '/product' }])} />
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
