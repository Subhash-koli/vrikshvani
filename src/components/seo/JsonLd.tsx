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

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vriksh Vani',
  alternateName: ['Vriksh Vani Nature Intelligence', 'Nature Intelligence'],
  url: 'https://www.vrikshvani.com',
  slogan: 'Let your plant speak.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.vrikshvani.com/glossary?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Vriksh Vani NIH-01 Nature Intelligence Hub',
  image: 'https://www.vrikshvani.com/og',
  description: 'The world\'s first plant intelligence hub powered by leaf surface thermal sensing, quad-gas analysis, and NTE™ voice output. Let your plant speak.',
  brand: {
    '@type': 'Brand',
    name: 'Vriksh Vani',
    slogan: 'Let your plant speak.',
  },
  category: 'Nature Intelligence',
  offers: {
    '@type': 'Offer',
    url: 'https://www.vrikshvani.com/product',
    priceCurrency: 'INR',
    price: '24999',
    availability: 'https://schema.org/PreOrder',
    itemCondition: 'https://schema.org/NewCondition',
  },
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vriksh Vani Technologies Pvt. Ltd.',
  alternateName: 'Vriksh Vani',
  url: 'https://www.vrikshvani.com',
  logo: 'https://www.vrikshvani.com/icon-512.png',
  slogan: 'Let your plant speak.',
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

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does NIH-01 harm or invade the plant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all. NIH-01 uses non-invasive FLIR thermal optics and Bosch quad-gas sensors placed 15-30cm from the plant. No probes or wires are inserted into the plant or soil.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does plant voice synthesis work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Nature Translation Engine (NTE) translates micro-thermal shifts, leaf transpiration rates, and vapor pressure deficit (VPD) into natural human speech using local on-device TinyML.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my privacy protected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. 100% of sensor frame buffers exist strictly in volatile SRAM and are overwritten immediately. No cameras, video recordings, or audio files are ever stored or uploaded.',
      },
    },
    {
      '@type': 'Question',
      name: 'When will Batch 01 ship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Batch 01 Founding Units are scheduled for priority dispatch in October 2026.',
      },
    },
  ],
};


