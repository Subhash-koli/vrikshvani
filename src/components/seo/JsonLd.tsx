import React from 'react';
import Script from 'next/script';

interface JsonLdProps {
  type?: 'Organization' | 'Product';
}

export const JsonLd: React.FC<JsonLdProps> = ({ type = 'Organization' }) => {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vriksh Vani Technologies Pvt. Ltd.',
    url: 'https://www.vrikshvani.com',
    logo: 'https://www.vrikshvani.com/logo.png',
    description: 'Decoding the silent biophysical language of plants through FLIR thermal biometrics, quad-gas analysis, and neural voice synthesis.',
    foundingDate: '2024',
    founders: [{ '@type': 'Person', name: 'Siddhant Tiwari' }],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://twitter.com/vrikshvani',
      'https://instagram.com/vrikshvani',
      'https://github.com/vrikshvani',
    ],
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'NIH-01 Nature Intelligence Hub',
    description: 'FLIR thermal biometric plant monitoring hub with quad-gas analysis and neural voice output. Kiln-fired ceramic housing.',
    brand: { '@type': 'Brand', name: 'Vriksh Vani' },
    image: 'https://cdn.vrikshvani.com/nih-01-product.jpg',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      priceCurrency: 'INR',
      price: '24999',
      url: 'https://www.vrikshvani.com/waitlist',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };

  const schema = type === 'Product' ? productSchema : orgSchema;

  return (
    <Script
      id={`jsonld-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
