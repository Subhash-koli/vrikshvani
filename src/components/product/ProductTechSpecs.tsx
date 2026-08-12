'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const ProductTechSpecs: React.FC = () => {
  const specs = [
    { label: "Target Thermal Array", val: "FLIR Lepton 3.5 (160x120 pixels, LWIR 8-14µm Radiometric)" },
    { label: "Target Atmospheric Gas Sensor", val: "Bosch BME688 (VOCs, VSCs, Temperature, Humidity, Pressure)" },
    { label: "Target Microcontroller (MCU)", val: "ESP32-S3 Dual-Core @ 240MHz (TinyML Inference Engine)" },
    { label: "Target Wireless Connectivity", val: "Bluetooth 5.0 LE + Wi-Fi 802.11 b/g/n (2.4GHz)" },
    { label: "Target Local Storage", val: "32MB SPI Flash (Local Telemetry Logging Buffer)" },
    { label: "Target Enclosure Material", val: "Slip-Cast Mineral Ceramic with Optical Thermal Window" },
    { label: "Target Power Architecture", val: "USB-C PD 5V/2A Low-Power Energy Profile" },
    { label: "Privacy Specification", val: "100% Volatile SRAM Buffer — Zero Visual Video Storage" },
  ];

  return (
    <section className="py-24 bg-[#030504] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gold">Target Hardware Architecture</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F7F6F2]">
            Target Hardware Specifications.
          </h2>
          <p className="text-sm text-[#A3B18A] max-w-xl mx-auto">
            These represent our target hardware engineering specifications for the NIH-01 prototype.
          </p>
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
