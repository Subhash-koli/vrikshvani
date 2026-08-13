'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Cpu, Eye, Radio, ShieldCheck, Volume2, Zap } from 'lucide-react';

export default function SystemArchitectureDiagram() {
  return (
    <Card className="p-6 md:p-8 space-y-6 border-[#8AD74C]/30 bg-[#0F2B18]/30">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#8AD74C]/10 border border-[#8AD74C]/30 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-[#8AD74C]" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">NIH-01 System Architecture</h3>
            <p className="text-xs text-[#A3B18A]">Non-Invasive Sensor Fusion → TinyML INT8 Engine → NTE™ Speech</p>
          </div>
        </div>
        <Badge variant="lime">Architecture &amp; Dataflow Concept</Badge>
      </div>

      {/* SVG Diagram Container */}
      <div className="w-full overflow-x-auto p-4 bg-[#070B08] rounded-xl border border-white/10">
        <svg viewBox="0 0 900 320" className="w-full min-w-[700px] h-auto" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="layerGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0F2B18" />
              <stop offset="100%" stopColor="#070B08" />
            </linearGradient>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#8AD74C" />
            </marker>
          </defs>

          {/* Layer 1: Sensors */}
          <g transform="translate(20, 20)">
            <rect width="250" height="280" rx="12" fill="url(#layerGrad)" stroke="#E8D07C" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.9" />
            <text x="20" y="35" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#E8D07C">LAYER 1: SENSOR ARRAY</text>

            <rect x="20" y="55" width="210" height="45" rx="8" fill="#070B08" stroke="rgba(255,255,255,0.1)" />
            <text x="35" y="77" fontFamily="system-ui" fontSize="12" fontWeight="bold" fill="#F7F6F2">FLIR Lepton 3.5</text>
            <text x="35" y="92" fontFamily="monospace" fontSize="10" fill="#A3B18A">160x120 LWIR (±0.05°C NETD)</text>

            <rect x="20" y="110" width="210" height="45" rx="8" fill="#070B08" stroke="rgba(255,255,255,0.1)" />
            <text x="35" y="132" fontFamily="system-ui" fontSize="12" fontWeight="bold" fill="#F7F6F2">Sensirion SHT41</text>
            <text x="35" y="147" fontFamily="monospace" fontSize="10" fill="#A3B18A">RH ±1.8% · Temp ±0.2°C</text>

            <rect x="20" y="165" width="210" height="45" rx="8" fill="#070B08" stroke="rgba(255,255,255,0.1)" />
            <text x="35" y="187" fontFamily="system-ui" fontSize="12" fontWeight="bold" fill="#F7F6F2">Bosch BME688</text>
            <text x="35" y="202" fontFamily="monospace" fontSize="10" fill="#A3B18A">Quad-Gas VOC & Pressure</text>

            <rect x="20" y="220" width="210" height="45" rx="8" fill="#070B08" stroke="rgba(255,255,255,0.1)" />
            <text x="35" y="242" fontFamily="system-ui" fontSize="12" fontWeight="bold" fill="#F7F6F2">Light & Acoustic Probe</text>
            <text x="35" y="257" fontFamily="monospace" fontSize="10" fill="#A3B18A">Ambient Lux & Mic Array</text>
          </g>

          {/* Connectors 1->2 */}
          <line x1="270" y1="160" x2="330" y2="160" stroke="#8AD74C" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Layer 2: Compute */}
          <g transform="translate(335, 20)">
            <rect width="250" height="280" rx="12" fill="url(#layerGrad)" stroke="#8AD74C" strokeWidth="1.5" />
            <text x="20" y="35" font-family="monospace" fontSize="12" fontWeight="bold" fill="#8AD74C">LAYER 2: TinyML INFERENCE ENGINE</text>

            <rect x="20" y="55" width="210" height="60" rx="8" fill="#070B08" stroke="#8AD74C" strokeWidth="1" />
            <text x="35" y="80" fontFamily="system-ui" fontSize="12" fontWeight="bold" fill="#F7F6F2">ESP32-S3 Dual-Core</text>
            <text x="35" y="97" fontFamily="monospace" fontSize="10" fill="#8AD74C">240 MHz · 512KB SRAM · 16MB Flash</text>

            <rect x="20" y="125" width="210" height="60" rx="8" fill="#070B08" stroke="rgba(255,255,255,0.1)" />
            <text x="35" y="150" fontFamily="system-ui" fontSize="12" fontWeight="bold" fill="#F7F6F2">Sensor Fusion Matrix</text>
            <text x="35" y="167" fontFamily="monospace" fontSize="10" fill="#A3B18A">Magnus VPD & Delta-T Solver</text>

            <rect x="20" y="195" width="210" height="70" rx="8" fill="#070B08" stroke="#8AD74C" strokeWidth="1" />
            <text x="35" y="220" fontFamily="system-ui" fontSize="12" fontWeight="bold" fill="#F7F6F2">NTE™ Classifier</text>
            <text x="35" y="237" fontFamily="monospace" fontSize="10" fill="#8AD74C">Quantized INT8 Tensor Runtime</text>
            <text x="35" y="252" fontFamily="monospace" fontSize="10" fill="#A3B18A">16 Emotion States (&lt;128ms)</text>
          </g>

          {/* Connectors 2->3 */}
          <line x1="585" y1="160" x2="645" y2="160" stroke="#8AD74C" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Layer 3: Output */}
          <g transform="translate(650, 20)">
            <rect width="230" height="280" rx="12" fill="url(#layerGrad)" stroke="#8AD74C" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.9" />
            <text x="20" y="35" font-family="monospace" fontSize="12" fontWeight="bold" fill="#8AD74C">LAYER 3: OUTPUT & INTERFACE</text>

            <rect x="20" y="55" width="190" height="60" rx="8" fill="#070B08" stroke="rgba(255,255,255,0.1)" />
            <text x="35" y="80" fontFamily="system-ui" fontSize="12" fontWeight="bold" fill="#F7F6F2">1.5W Speaker</text>
            <text x="35" y="97" fontFamily="monospace" fontSize="10" fill="#E8D07C">NTE™ Spoken Voice Engine</text>

            <rect x="20" y="125" width="190" height="60" rx="8" fill="#070B08" stroke="rgba(255,255,255,0.1)" />
            <text x="35" y="150" fontFamily="system-ui" fontSize="12" fontWeight="bold" fill="#F7F6F2">BLE 5.0 & Wi-Fi 4</text>
            <text x="35" y="167" fontFamily="monospace" fontSize="10" fill="#8AD74C">App & Smart Home Sync</text>

            <rect x="20" y="195" width="190" height="70" rx="8" fill="#070B08" stroke="rgba(255,255,255,0.1)" />
            <text x="35" y="220" fontFamily="system-ui" fontSize="12" fontWeight="bold" fill="#F7F6F2">Open Data Sync</text>
            <text x="35" y="237" fontFamily="monospace" fontSize="10" fill="#A3B18A">Anonymized Opt-In Stream</text>
            <text x="35" y="252" fontFamily="monospace" fontSize="10" fill="#8AD74C">CC BY 4.0 Academic License</text>
          </g>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[#A3B18A]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#8AD74C] shrink-0" />
          <span>Local On-Device TinyML Inference (Privacy First)</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#E8D07C] shrink-0" />
          <span>Target &lt;128ms Total Sensor-to-Speech Flow</span>
        </div>
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Optional Encrypted Telemetry Synchronization</span>
        </div>
      </div>
    </Card>
  );
}
