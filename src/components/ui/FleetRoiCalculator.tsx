'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Building2, DollarSign, ShieldCheck, TrendingUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export default function FleetRoiCalculator() {
  const [plantCount, setPlantCount] = useState<number>(50);
  const [avgPlantValue, setAvgPlantValue] = useState<number>(3500); // ₹ INR
  const [laborHourlyRate, setLaborHourlyRate] = useState<number>(450); // ₹/hr

  // Calculations
  const annualPlantReplacementLoss = plantCount * avgPlantValue * 0.25; // 25% annual loss without VPD monitoring
  const estimatedSavingsFromLoss = annualPlantReplacementLoss * 0.85; // 85% loss reduction with NIH-01

  const weeklyLaborHoursManual = (plantCount * 12) / 60; // 12 mins per plant per week
  const weeklyLaborHoursSaved = weeklyLaborHoursManual * 0.65; // 65% labor savings with automated telemetry
  const annualLaborSavings = weeklyLaborHoursSaved * 52 * laborHourlyRate;

  const totalAnnualSavings = estimatedSavingsFromLoss + annualLaborSavings;
  const hubCost = plantCount * 22499; // Enterprise discounted rate
  const paybackMonths = Math.max(1, parseFloat(((hubCost / totalAnnualSavings) * 12).toFixed(1)));

  return (
    <Card className="p-6 md:p-8 space-y-6 border-[#8AD74C]/30 bg-[#0F2B18]/40">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#8AD74C]/10 border border-[#8AD74C]/30 flex items-center justify-center">
            <Building2 className="w-6 h-6 text-[#8AD74C]" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Enterprise Fleet ROI Calculator</h3>
            <p className="text-xs text-[#A3B18A]">Commercial Greenhouse & Office Installation Model</p>
          </div>
        </div>

        <Badge variant="lime" className="text-sm py-1 px-3">
          Payback: {paybackMonths} Months
        </Badge>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#070B08]/60 p-4 rounded-xl border border-white/5 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-[#F7F6F2] font-medium flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#8AD74C]" /> Total Plants
            </span>
            <span className="font-mono text-[#8AD74C] font-bold">{plantCount} Hubs</span>
          </div>
          <input
            type="range" min="10" max="500" step="10"
            value={plantCount}
            onChange={(e) => setPlantCount(parseInt(e.target.value))}
            className="w-full accent-[#8AD74C] cursor-pointer"
          />
        </div>

        <div className="bg-[#070B08]/60 p-4 rounded-xl border border-white/5 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-[#F7F6F2] font-medium flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5 text-[#E8D07C]" /> Avg Plant Value
            </span>
            <span className="font-mono text-[#E8D07C] font-bold">₹{avgPlantValue.toLocaleString()}</span>
          </div>
          <input
            type="range" min="1000" max="25000" step="500"
            value={avgPlantValue}
            onChange={(e) => setAvgPlantValue(parseInt(e.target.value))}
            className="w-full accent-[#E8D07C] cursor-pointer"
          />
        </div>

        <div className="bg-[#070B08]/60 p-4 rounded-xl border border-white/5 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-[#F7F6F2] font-medium flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-blue-400" /> Care Cost/Hour
            </span>
            <span className="font-mono text-blue-400 font-bold">₹{laborHourlyRate}/hr</span>
          </div>
          <input
            type="range" min="200" max="2000" step="50"
            value={laborHourlyRate}
            onChange={(e) => setLaborHourlyRate(parseInt(e.target.value))}
            className="w-full accent-blue-400 cursor-pointer"
          />
        </div>
      </div>

      {/* ROI Financial Outputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="bg-[#070B08] p-4 rounded-xl border border-white/10 text-center space-y-1">
          <p className="text-xs text-[#A3B18A]">Plant Loss Avoided</p>
          <p className="font-display text-2xl font-bold text-[#8AD74C]">₹{Math.round(estimatedSavingsFromLoss).toLocaleString()}</p>
          <p className="text-[10px] text-[#A3B18A]">85% mortality reduction</p>
        </div>

        <div className="bg-[#070B08] p-4 rounded-xl border border-white/10 text-center space-y-1">
          <p className="text-xs text-[#A3B18A]">Labor Costs Saved</p>
          <p className="font-display text-2xl font-bold text-[#E8D07C]">₹{Math.round(annualLaborSavings).toLocaleString()}</p>
          <p className="text-[10px] text-[#A3B18A]">{Math.round(weeklyLaborHoursSaved * 52)} hours/yr saved</p>
        </div>

        <div className="bg-[#070B08] p-4 rounded-xl border border-[#8AD74C]/30 text-center space-y-1">
          <p className="text-xs text-[#8AD74C] font-semibold">Total Annual Savings</p>
          <p className="font-display text-2xl font-bold text-[#F7F6F2]">₹{Math.round(totalAnnualSavings).toLocaleString()}</p>
          <p className="text-[10px] text-[#8AD74C]">Estimated 1-Year Net Gain</p>
        </div>
      </div>

      <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-white/5">
        <div className="flex items-center gap-2 text-xs text-[#A3B18A]">
          <ShieldCheck className="w-4 h-4 text-[#8AD74C]" />
          <span>Includes Enterprise 7-Year Warranty & SLA Support</span>
        </div>
        <Link href="/enterprise">
          <Button variant="primary" size="sm">Request Enterprise Fleet Quote →</Button>
        </Link>
      </div>
    </Card>
  );
}
