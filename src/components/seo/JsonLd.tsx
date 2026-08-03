import React from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Vriksh Vani NIH-01 Nature Intelligence Hub',
  image: 'https://vrikshvani.vercel.app/og-image.jpg',
  description: 'The world\'s first plant intelligence hub powered by leaf surface thermal sensing, quad-gas analysis, and NTE™ voice output.',
  brand: {
    '@type': 'Brand',
    name: 'Vriksh Vani',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://vrikshvani.vercel.app/product',
    priceCurrency: 'INR',
    price: '24999',
    availability: 'https://schema.org/PreOrder',
    itemCondition: 'https://schema.org/NewCondition',
  },
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vriksh Vani Technologies',
  url: 'https://vrikshvani.vercel.app',
  logo: 'https://vrikshvani.vercel.app/icon-512.png',
  sameAs: [
    'https://twitter.com/vrikshvani',
    'https://github.com/Subhash-koli/vrikshvani',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@vrikshvani.com',
    contactType: 'customer support',
  },
};
