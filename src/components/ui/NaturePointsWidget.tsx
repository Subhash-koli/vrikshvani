'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Trophy, Star, Sparkles, Award, CheckCircle2, ChevronRight } from 'lucide-react';

interface Tier {
  name: string;
  minPoints: number;
  badge: string;
  color: string;
  perks: string[];
}

const TIERS: Tier[] = [
  { name: 'Seedling', minPoints: 0, badge: '🌱', color: 'text-emerald-400', perks: ['Community Forum Access', 'Open Data Explorer'] },
  { name: 'Naturalist', minPoints: 1000, badge: '🌿', color: 'text-[#8AD74C]', perks: ['Species Parameter Submissions', 'Early Firmware Betas'] },
  { name: 'Ecologist', minPoints: 5000, badge: '🌳', color: 'text-[#E8D07C]', perks: ['Priority Pre-Order Queue (+50 pts)', 'Exclusive Ceramic Colorways'] },
  { name: 'Botanist', minPoints: 15000, badge: '🌺', color: 'text-amber-400', perks: ['Research Contributor Recognition', 'Direct Biophysics Q&A'] },
];

export default function NaturePointsWidget() {
  const [readingsContributed, setReadingsContributed] = useState(2450);
  const [postsCreated, setPostsCreated] = useState(12);

  // 1 point per 5 telemetry readings + 50 points per forum post
  const points = Math.floor(readingsContributed / 5) + (postsCreated * 50);

  const currentTier = [...TIERS].reverse().find(t => points >= t.minPoints) || TIERS[0];
  const nextTier = TIERS.find(t => t.minPoints > points);
  const pointsToNext = nextTier ? nextTier.minPoints - points : 0;
  const progressPercent = nextTier ? Math.min(100, Math.floor(((points - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100)) : 100;

  return (
    <Card className="p-6 md:p-8 space-y-6 border-[#E8D07C]/30 bg-[#0F2B18]/30">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#E8D07C]/10 border border-[#E8D07C]/30 flex items-center justify-center">
            <Trophy className="w-6 h-6 text-[#E8D07C]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-xl font-bold text-[#F7F6F2]">Nature Points Simulator</h3>
              <span className="text-xl">{currentTier.badge}</span>
            </div>
            <p className="text-xs text-[#A3B18A]">Community Contribution Rank · Open Data Programme</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs text-[#A3B18A] uppercase tracking-wider font-mono">Total Points</p>
          <p className="font-display text-3xl font-bold text-[#E8D07C]">{points.toLocaleString()} <span className="text-xs text-[#A3B18A]">PTS</span></p>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#070B08]/60 p-4 rounded-xl border border-white/5 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-[#F7F6F2] font-medium">Readings Contributed</span>
            <span className="font-mono text-[#8AD74C] font-bold">{readingsContributed.toLocaleString()}</span>
          </div>
          <input
            type="range" min="0" max="30000" step="250"
            value={readingsContributed}
            onChange={(e) => setReadingsContributed(parseInt(e.target.value))}
            className="w-full accent-[#8AD74C] cursor-pointer"
          />
        </div>

        <div className="bg-[#070B08]/60 p-4 rounded-xl border border-white/5 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-[#F7F6F2] font-medium">Forum Posts Created</span>
            <span className="font-mono text-[#E8D07C] font-bold">{postsCreated}</span>
          </div>
          <input
            type="range" min="0" max="100" step="1"
            value={postsCreated}
            onChange={(e) => setPostsCreated(parseInt(e.target.value))}
            className="w-full accent-[#E8D07C] cursor-pointer"
          />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-mono">
          <span className={currentTier.color}>Current Rank: {currentTier.name}</span>
          {nextTier ? (
            <span className="text-[#A3B18A]">Next: {nextTier.name} ({pointsToNext.toLocaleString()} pts left)</span>
          ) : (
            <span className="text-[#E8D07C]">Max Rank Achieved! 🏆</span>
          )}
        </div>
        <div className="w-full h-2.5 bg-[#070B08] rounded-full overflow-hidden border border-white/10 p-0.5">
          <div
            className="h-full bg-gradient-to-r from-[#8AD74C] to-[#E8D07C] rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Unlocked Perks */}
      <div className="space-y-2 pt-2 border-t border-white/5">
        <p className="text-xs font-mono uppercase tracking-wider text-[#A3B18A]">Unlocked Perks & Privileges</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {currentTier.perks.map((perk, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-[#F7F6F2] bg-[#070B08]/40 p-2.5 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-[#8AD74C] shrink-0" />
              <span>{perk}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
