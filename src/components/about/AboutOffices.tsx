import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MapPin } from 'lucide-react';

export const AboutOffices: React.FC = () => {
  const offices = [
    { city: "Bengaluru", country: "India", role: "Global R&D Headquarters & Kiln Assembly", address: "Indiranagar 100ft Rd, Bengaluru" },
    { city: "London", country: "United Kingdom", role: "European Research & Botanical Design Studio", address: "Kew Science Park, London" },
    { city: "San Francisco", country: "United States", role: "Software Ecosystem & Edge NPU Architecture", address: "Market St, San Francisco" },
  ];

  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="lime">Global Presence</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Our Offices & Ceramic Kilns.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((off, idx) => (
            <Card key={idx} className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#8AD74C]" />
                <h3 className="font-display text-xl font-bold text-[#F7F6F2]">{off.city}, {off.country}</h3>
              </div>
              <Badge variant="glass">{off.role}</Badge>
              <p className="text-xs text-[#A3B18A] font-mono pt-2">{off.address}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutOffices;
