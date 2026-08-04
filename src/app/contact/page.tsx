import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactClient from '@/components/sections/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Vriksh Vani — General, Press & Enterprise Enquiries',
  description: 'Reach out to the Vriksh Vani team for product questions, enterprise fleet solutions, media kit requests, or botanical science discussions.',
  openGraph: {
    title: 'Contact Vriksh Vani — Support, Press & Enterprise',
    description: 'Connect with our team in Bengaluru, London, and San Francisco. Average response time: 1-2 business days.',
    url: 'https://vrikshvani.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <ContactClient />
      <Footer />
    </main>
  );
}
