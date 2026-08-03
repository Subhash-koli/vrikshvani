import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Shield, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Warranty — Vriksh Vani NIH-01',
  description: 'NIH-01 is covered by a 2-year hardware warranty. Learn what is covered, how to claim, and how to get a repair or replacement.',
};

const covered = [
  'Manufacturing defects in sensors (SHT41, BME688, FLIR Lepton)',
  'Circuit board failures not caused by physical damage',
  'Connectivity module (BLE, Wi-Fi) failures',
  'Power supply and charging port defects',
  'Software bugs causing sensor malfunction',
  'Housing structural defects under normal use',
];

const notCovered = [
  'Physical damage from dropping or liquid immersion',
  'Sensor degradation from improper placement (direct sunlight, extreme humidity)',
  'Damage from unauthorised modifications or repairs',
  'Cosmetic scratches and normal wear',
  'Damage caused by operating outside specified temperature range',
];

export default function WarrantyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="lime">Warranty</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              2-Year Hardware Warranty.
            </h1>
            <p className="text-[#A3B18A]">Every NIH-01 is covered by a 2-year limited hardware warranty from the date of purchase. We repair or replace — at no charge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="space-y-4 border-[#8AD74C]/20">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8AD74C]" />
                <h2 className="font-display text-xl font-bold text-[#F7F6F2]">What&apos;s Covered</h2>
              </div>
              <div className="space-y-2">
                {covered.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[#A3B18A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8AD74C] mt-1.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#E8D07C]" />
                <h2 className="font-display text-xl font-bold text-[#F7F6F2]">What&apos;s Not Covered</h2>
              </div>
              <div className="space-y-2">
                {notCovered.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[#A3B18A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8D07C] mt-1.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6 space-y-4">
            <h2 className="font-display text-xl font-bold text-[#F7F6F2]">How to Claim Warranty</h2>
            <ol className="space-y-3">
              {[
                'Email hello@vrikshvani.com with subject "Warranty Claim" and your order number.',
                'Our support team responds within 24 hours with a diagnosis questionnaire.',
                'If the defect is confirmed, we send a prepaid return label.',
                'On receipt, we repair or send a replacement unit within 7 business days.',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#A3B18A]">
                  <span className="font-mono text-xs font-bold text-[#8AD74C] mt-0.5 shrink-0">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </Card>

          <div className="text-center text-sm text-[#A3B18A]">
            <p>For full warranty terms, email <span className="text-[#8AD74C]">hello@vrikshvani.com</span></p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
