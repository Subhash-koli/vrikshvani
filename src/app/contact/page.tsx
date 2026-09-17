import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactClient from '@/components/sections/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Vriksh Vani (vrikshvani) — General & Press Enquiries',
  description: 'Reach out to Vriksh Vani (vrikshvani / VrikshVani) for product questions, enterprise solutions, or botanical science discussions at vrikshvani.com.',
  keywords: ['vrikshvani', 'vriksh vani', 'VrikshVani', 'vrikshvani.com', 'contact vrikshvani', 'Vriksh Vani contact', 'vrikshvani email', 'subhash koli contact'],
  openGraph: {
    title: 'Contact Vriksh Vani (vrikshvani) — Support & Press',
    description: 'Connect with the Vriksh Vani (vrikshvani) team. Average response time: 1-2 business days.',
    url: 'https://www.vrikshvani.com/contact',
    siteName: 'Vriksh Vani (vrikshvani)',
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
