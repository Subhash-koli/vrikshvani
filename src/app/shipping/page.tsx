import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, Package, Truck, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping & Returns — Vriksh Vani',
  description: 'Vriksh Vani NIH-01 shipping details, delivery timelines, returns policy, and international shipping availability.',
};

const shippingOptions = [
  {
    name: 'Standard Delivery',
    eta: '5–7 business days',
    price: '₹299',
    regions: 'All metro cities',
    icon: Package,
  },
  {
    name: 'Express Delivery',
    eta: '2–3 business days',
    price: '₹599',
    regions: 'Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, Pune, Kolkata',
    icon: Truck,
  },
  {
    name: 'Free Shipping',
    eta: '5–7 business days',
    price: 'Free',
    regions: 'All orders above ₹5,000',
    icon: CheckCircle2,
  },
];

const returnsPolicySections = [
  {
    title: '30-Day Returns',
    icon: RefreshCw,
    content: 'If you are not completely satisfied with your NIH-01 within 30 days of receipt, return it for a full refund. No questions asked. Device must be returned in original packaging.',
  },
  {
    title: 'How to Return',
    icon: Package,
    content: 'Email hello@vrikshvani.com with your order number and reason for return. We will send a prepaid courier label within 24 hours. Refund is processed within 5–7 business days of receipt.',
  },
  {
    title: 'Warranty Returns',
    icon: CheckCircle2,
    content: 'NIH-01 is covered by a 2-year hardware warranty. If a defect occurs within warranty, we repair or replace at no charge. See /warranty for full terms.',
  },
];

export default function ShippingPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="lime">Shipping & Returns</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Fast, Careful Delivery. Hassle-Free Returns.
            </h1>
            <p className="text-[#A3B18A]">NIH-01 is hand-packed and double-boxed to protect your hardware on its journey to you.</p>
          </div>

          {/* Shipping options */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Shipping Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {shippingOptions.map((opt, idx) => {
                const Icon = opt.icon;
                return (
                  <Card key={idx} className="space-y-3 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F2B18] border border-white/10 flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-[#8AD74C]" />
                    </div>
                    <h3 className="font-display font-bold text-[#F7F6F2]">{opt.name}</h3>
                    <p className="font-display text-2xl font-bold text-[#8AD74C]">{opt.price}</p>
                    <p className="text-xs font-mono text-[#A3B18A]">{opt.eta}</p>
                    <p className="text-xs text-[#A3B18A]">{opt.regions}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Batch 01 note */}
          <Card className="p-6 border-[#E8D07C]/20 space-y-2">
            <p className="font-display font-bold text-[#E8D07C]">Batch 01 Shipping Note</p>
            <p className="text-sm text-[#A3B18A] leading-relaxed">
              NIH-01 Batch 01 begins dispatch in Q4 2026. All waitlist members will receive an email 7 days before their dispatch date with a tracking number. Pre-orders dispatch in waitlist registration order.
            </p>
          </Card>

          {/* Returns policy */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Returns Policy</h2>
            {returnsPolicySections.map((r, idx) => {
              const Icon = r.icon;
              return (
                <Card key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#8AD74C]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#F7F6F2]">{r.title}</h3>
                    <p className="text-sm text-[#A3B18A] mt-1 leading-relaxed">{r.content}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* International */}
          <Card className="p-6 space-y-2">
            <h3 className="font-display font-bold text-[#F7F6F2]">International Shipping</h3>
            <p className="text-sm text-[#A3B18A]">NIH-01 Batch 01 ships to India only. International shipping (UK, US, EU, SE Asia) launches with Batch 02 in Q2 2027. Join the international interest list at hello@vrikshvani.com.</p>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
