'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Activity, Info } from 'lucide-react';

interface TelemetryPoint {
  time: string;
  vpd: number;
  leafDelta: number;
  gasResistance: number;
  status: string;
}

const TELEMETRY_DATA: TelemetryPoint[] = [
  { time: '00:00', vpd: 1.2, leafDelta: -1.8, gasResistance: 480, status: 'Optimal Transpiration' },
  { time: '01:00', vpd: 1.6, leafDelta: -1.4, gasResistance: 495, status: 'Optimal Transpiration' },
  { time: '02:00', vpd: 2.1, leafDelta: -0.6, gasResistance: 520, status: 'Stomatal Constriction' },
  { time: '03:00', vpd: 2.6, leafDelta: +0.4, gasResistance: 565, status: 'Transpiration Shutdown' },
  { time: '04:00', vpd: 2.8, leafDelta: +1.2, gasResistance: 590, status: 'Pre-Wilting Stress Signal' },
];

export const TelemetryChart: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(4);
  const activePoint = TELEMETRY_DATA[activeIndex];

  // SVG dimensions
  const svgWidth = 600;
  const svgHeight = 220;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;

  // Scale functions
  // leafDelta range: -2.0 to +2.0
  const getX = (idx: number) => paddingLeft + (idx / (TELEMETRY_DATA.length - 1)) * chartWidth;
  const getYDelta = (val: number) => paddingTop + chartHeight - ((val + 2) / 4) * chartHeight;
  const getYVpd = (val: number) => paddingTop + chartHeight - ((val - 1.0) / 2.5) * chartHeight;

  // Path data
  const deltaPath = TELEMETRY_DATA.reduce(
    (acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${getX(i)} ${getYDelta(pt.leafDelta)}`,
    ''
  );

  const vpdPath = TELEMETRY_DATA.reduce(
    (acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${getX(i)} ${getYVpd(pt.vpd)}`,
    ''
  );

  return (
    <Card className="p-6 md:p-8 space-y-6 border-[#8AD74C]/30 bg-[#070B08] shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#8AD74C]" />
            <h3 className="font-display font-bold text-lg text-[#F7F6F2]">
              Interactive Telemetry Time-Series
            </h3>
          </div>
          <p className="text-xs text-[#A3B18A] mt-1">
            Leaf Temperature Delta (&Delta;T) vs Vapor Pressure Deficit (VPD) Shift
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#8AD74C]" />
            <span className="text-[#F7F6F2]">Leaf &Delta;T (&deg;C)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="text-[#F7F6F2]">VPD (kPa)</span>
          </div>
        </div>
      </div>

      {/* SVG Chart */}
      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto min-w-[500px] select-none"
        >
          {/* Background Grid Lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
            const y = paddingTop + pct * chartHeight;
            return (
              <line
                key={i}
                x1={paddingLeft}
                y1={y}
                x2={svgWidth - paddingRight}
                y2={y}
                stroke="rgba(255,255,255,0.06)"
                strokeDasharray="4 4"
              />
            );
          })}

          {/* Zero Reference Line for Leaf Delta */}
          <line
            x1={paddingLeft}
            y1={getYDelta(0)}
            x2={svgWidth - paddingRight}
            y2={getYDelta(0)}
            stroke="rgba(138, 215, 76, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />

          {/* VPD Curve (Amber) */}
          <path
            d={vpdPath}
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Leaf Delta Curve (Lime) */}
          <path
            d={deltaPath}
            fill="none"
            stroke="#8AD74C"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Data Points */}
          {TELEMETRY_DATA.map((pt, i) => {
            const x = getX(i);
            const yDelta = getYDelta(pt.leafDelta);
            const isSelected = activeIndex === i;

            return (
              <g key={i} className="cursor-pointer" onClick={() => setActiveIndex(i)}>
                {/* Active Indicator Line */}
                {isSelected && (
                  <line
                    x1={x}
                    y1={paddingTop}
                    x2={x}
                    y2={svgHeight - paddingBottom}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                  />
                )}

                {/* Leaf Delta Point */}
                <circle
                  cx={x}
                  cy={yDelta}
                  r={isSelected ? 6 : 4}
                  fill={isSelected ? '#C4F050' : '#8AD74C'}
                  stroke="#070B08"
                  strokeWidth="2"
                />

                {/* Time Axis Labels */}
                <text
                  x={x}
                  y={svgHeight - 8}
                  fill="#A3B18A"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {pt.time}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Point Telemetry Card */}
      <div className="p-4 rounded-xl bg-[#0F2B18]/50 border border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#A3B18A]">Elapsed: {activePoint.time}</span>
            <Badge variant={activePoint.leafDelta > 0 ? 'gold' : 'lime'}>
              {activePoint.status}
            </Badge>
          </div>
          <p className="text-xs text-[#F7F6F2]">
            At VPD <span className="font-mono text-amber-400 font-bold">{activePoint.vpd} kPa</span>, leaf thermal delta reached{' '}
            <span className={`font-mono font-bold ${activePoint.leafDelta > 0 ? 'text-amber-400' : 'text-[#8AD74C]'}`}>
              {activePoint.leafDelta > 0 ? `+${activePoint.leafDelta}` : activePoint.leafDelta}&deg;C
            </span>.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#A3B18A]">
          <Info className="w-4 h-4 text-[#8AD74C]" />
          <span>Click points on graph to inspect readings</span>
        </div>
      </div>
    </Card>
  );
};

export default TelemetryChart;
