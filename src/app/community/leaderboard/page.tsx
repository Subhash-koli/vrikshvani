import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Trophy, Leaf, Star, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nature Points Leaderboard — Vriksh Vani Community',
  description: 'See the top Vriksh Vani community members ranked by Nature Points — earned through plant care streaks, community contributions, and data donations.',
};

const leaderboard = [
  { rank: 1, name: 'priya.botanist', location: 'Bengaluru', points: 48_200, streak: 142, badge: 'Forest Guardian', tier: 'gold' },
  { rank: 2, name: 'green.thumb.raj', location: 'Mumbai', points: 41_850, streak: 98, badge: 'Canopy Guardian', tier: 'gold' },
  { rank: 3, name: 'orchid_obsessed', location: 'Chennai', points: 37_100, streak: 87, badge: 'Canopy Guardian', tier: 'gold' },
  { rank: 4, name: 'plantparent_nk', location: 'Delhi', points: 29_450, streak: 64, badge: 'Treeline Keeper', tier: 'silver' },
  { rank: 5, name: 'terracotta.tales', location: 'Hyderabad', points: 24_200, streak: 55, badge: 'Treeline Keeper', tier: 'silver' },
  { rank: 6, name: 'ficus_fred', location: 'Pune', points: 19_800, streak: 42, badge: 'Sapling Scout', tier: 'silver' },
  { rank: 7, name: 'monstera_mira', location: 'Ahmedabad', points: 15_600, streak: 38, badge: 'Sapling Scout', tier: 'bronze' },
  { rank: 8, name: 'leafy_logic', location: 'Kochi', points: 12_400, streak: 29, badge: 'Seedling', tier: 'bronze' },
  { rank: 9, name: 'botanical_bala', location: 'Jaipur', points: 9_800, streak: 22, badge: 'Seedling', tier: 'bronze' },
  { rank: 10, name: 'vpd.vigilant', location: 'Kolkata', points: 7_200, streak: 16, badge: 'Seedling', tier: 'bronze' },
];

const tierColors: Record<string, string> = {
  gold: 'text-[#E8D07C] border-[#E8D07C]/30',
  silver: 'text-[#A3B18A] border-white/20',
  bronze: 'text-orange-400 border-orange-500/20',
};

const tierBg: Record<string, string> = {
  gold: 'bg-[#E8D07C]/10',
  silver: 'bg-white/5',
  bronze: 'bg-orange-500/5',
};

export default function LeaderboardPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">

          {/* Header */}
          <div className="text-center space-y-3">
            <Badge variant="gold">Nature Points · August 2026</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              Community Leaderboard.
            </h1>
            <p className="text-[#A3B18A] text-sm">
              Points earned through care streak days, community posts, data donations, and referrals. Updated daily at 00:00 IST.
            </p>
          </div>

          {/* Top 3 Podium */}
          <div className="grid grid-cols-3 gap-4 items-end">
            {[leaderboard[1], leaderboard[0], leaderboard[2]].map((user, idx) => {
              const heights = ['h-28', 'h-36', 'h-24'];
              const podiumRanks = [2, 1, 3];
              const emojis = ['🥈', '🥇', '🥉'];
              return (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <span className="text-2xl">{emojis[idx]}</span>
                  <p className="text-xs font-mono text-center text-[#F7F6F2] font-bold truncate w-full text-center">@{user.name.split('.')[0]}</p>
                  <p className="text-[10px] font-mono text-[#8AD74C] text-center">{user.points.toLocaleString()} pts</p>
                  <div className={`w-full ${heights[idx]} rounded-t-xl ${
                    podiumRanks[idx] === 1 ? 'bg-[#E8D07C]/20 border border-[#E8D07C]/30' :
                    podiumRanks[idx] === 2 ? 'bg-white/10 border border-white/20' :
                    'bg-orange-500/10 border border-orange-500/20'
                  } flex items-center justify-center`}>
                    <span className="font-display text-3xl font-bold text-white/30">#{podiumRanks[idx]}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full Leaderboard */}
          <div className="space-y-2">
            {leaderboard.map((user) => (
              <Card key={user.rank} className={`flex items-center gap-4 border ${tierColors[user.tier]} ${tierBg[user.tier]}`}>
                <span className={`font-display text-2xl font-bold w-8 shrink-0 text-center ${
                  user.rank <= 3 ? tierColors[user.tier] : 'text-[#A3B18A]'
                }`}>
                  {user.rank <= 3 ? ['🥇','🥈','🥉'][user.rank - 1] : `#${user.rank}`}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-sm font-bold text-[#F7F6F2] truncate">@{user.name}</p>
                  <p className="text-[10px] text-[#A3B18A]">{user.location} · {user.streak} day streak 🔥</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono text-sm font-bold text-[#8AD74C]">{user.points.toLocaleString()}</p>
                  <p className="text-[10px] font-mono text-[#A3B18A]">{user.badge}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Your Rank Placeholder */}
          <Card className="p-6 border-[#8AD74C]/20 text-center space-y-3">
            <TrendingUp className="w-8 h-8 text-[#8AD74C] mx-auto" />
            <p className="font-display font-bold text-[#F7F6F2]">Your Current Rank: #247 · 1,240 points</p>
            <p className="text-xs text-[#A3B18A]">You need <strong className="text-[#8AD74C]">1,960 more points</strong> to enter the top 100. Keep your care streak going! 🌿</p>
            <div className="w-full h-2 bg-[#030504] rounded-full overflow-hidden">
              <div className="h-2 w-[39%] rounded-full bg-[#8AD74C]" />
            </div>
            <p className="text-[10px] font-mono text-[#A3B18A]">39% to next tier: Sapling Scout</p>
          </Card>

          {/* How Points Are Earned */}
          <Card className="p-8 space-y-5">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-xl font-bold text-[#F7F6F2]">How to Earn Nature Points</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {[
                { action: 'Daily care streak (per day)', pts: '+10 pts' },
                { action: 'Community forum post', pts: '+25 pts' },
                { action: 'Helpful reply (upvoted)', pts: '+15 pts' },
                { action: 'Bio-reading data donation', pts: '+5 pts' },
                { action: 'Successful referral', pts: '+500 pts' },
                { action: 'Care guide contribution', pts: '+100 pts' },
                { action: 'Plant health milestone (90%+, 30 days)', pts: '+200 pts' },
                { action: '7-day care streak bonus', pts: '+50 pts' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5 gap-2">
                  <span className="text-[#A3B18A]">{item.action}</span>
                  <span className="font-mono font-bold text-[#8AD74C] shrink-0">{item.pts}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
