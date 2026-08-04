import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const AboutPartners: React.FC = () => {
  const partners = [
    { name: "IISc Bengaluru", role: "Bio-Physics Calibration Partner" },
    { name: "FLIR Systems", role: "Thermal Optics Partner" },
    { name: "Bosch Sensortec", role: "BME688 Quad-Gas Sensor Partner" },
    { name: "Royal Botanic Gardens, Kew", role: "Tropical Flora Research Partner" },
  ];

  return (
    <section className="py-24 bg-[#070B08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gold">Research Collaborators</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Academic & Technology Partners.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, idx) => (
            <Card key={idx} className="text-center space-y-2 py-8">
              <h3 className="font-display text-lg font-bold text-[#F7F6F2]">{p.name}</h3>
              <p className="text-xs text-[#A3B18A] font-mono">{p.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPartners;
