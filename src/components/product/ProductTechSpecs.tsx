'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const ProductTechSpecs: React.FC = () => {
  const specs = [
    { label: "Thermal Sensor Array", val: "FLIR Lepton 3.5 (160x120 pixels, LWIR 8-14µm)" },
    { label: "Gas & Air Quality Sensor", val: "Bosch BME688 (VOCs, VSCs, Temperature, Humidity, Pressure)" },
    { label: "Neural Processor (NPU)", val: "ARM Cortex-M4 @ 120MHz (Quantized TinyML Engine)" },
    { label: "Connectivity", val: "Bluetooth 5.2 LE + Wi-Fi 802.11 b/g/n (2.4GHz)" },
    { label: "Onboard Flash Memory", val: "32MB SPI Flash (720 Hours Offline Logging Buffer)" },
    { label: "Enclosure Material", val: "92% Recycled Slip-Cast Ceramic with Optical Thermal Window" },
    { label: "Power Supply", val: "USB-C PD 5V/2A (Internal 3200mAh Li-Po Backup Battery)" },
    { label: "Dimensions & Weight", val: "140mm x 140mm x 165mm · 820 grams" },
  ];

  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gold">Engineering Specification</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Detailed Hardware Specifications.
          </h2>
        </div>

        <Card className="p-8 space-y-4 max-w-4xl mx-auto font-mono text-sm">
          {specs.map((s, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row justify-between py-3 border-b border-white/5 gap-2">
              <span className="text-[#A3B18A] font-semibold">{s.label}</span>
              <span className="text-[#8AD74C] font-normal sm:text-right">{s.val}</span>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default ProductTechSpecs;
