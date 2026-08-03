import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Trophy, Star, Leaf, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Community Leaderboard — Vriksh Vani',
  description: 'The Vriksh Vani community leaderboard: top contributors to the Open Data Programme, community forum, and plant care knowledge base.',
};

const topContributors = [
  { rank: 1, name: 'Priya_GreenThumb', city: 'Bengaluru', plants: 14, dataPoints: '42,847', badge: 'Botanist', colour: 'text-[#E8D07C]', icon: '🥇' },
  { rank: 2, name: 'MonsTeraLover99', city: 'Mumbai', plants: 11, dataPoints: '31,204', badge: 'Naturalist', colour: 'text-[#A3B18A]', icon: '🥈' },
  { rank: 3, name: 'OrchidOpsKavi', city: 'Chennai', plants: 9, dataPoints: '28,591', badge: 'Ecologist', colour: 'text-[#CD7F32]', icon: '🥉' },
  { rank: 4, name: 'UrbanJungle_Riya', city: 'Delhi', plants: 8, dataPoints: '19,330', badge: 'Naturalist', colour: 'text-[#A3B18A]', icon: '4' },
  { rank: 5, name: 'PlantDad_Vikram', city: 'Hyderabad', plants: 7, dataPoints: '17,882', badge: 'Seedling', colour: 'text-[#A3B18A]', icon: '5' },
  { rank: 6, name: 'FernFreak_Ananya', city: 'Pune', plants: 6, dataPoints: '13,447', badge: 'Seedling', colour: 'text-[#A3B18A]', icon: '6' },
  { rank: 7, name: 'SucNomad', city: 'Jaipur', plants: 12, dataPoints: '11,209', badge: 'Naturalist', colour: 'text-[#A3B18A]', icon: '7' },
  { rank: 8, name: 'BioGardener_Raj', city: 'Kolkata', plants: 5, dataPoints: '9,847', badge: 'Seedling', colour: 'text-[#A3B18A]', icon: '8' },
  { rank: 9, name: 'CalathQueen', city: 'Kochi', plants: 8, dataPoints: '8,332', badge: 'Seedling', colour: 'text-[#A3B18A]', icon: '9' },
  { rank: 10, name: 'GreenArchitect_S', city: 'Ahmedabad', plants: 4, dataPoints: '7,104', badge: 'Seedling', colour: 'text-[#A3B18A]', icon: '10' },
];

const badges = [
  { name: 'Seedling 🌱', desc: '1,000+ readings contributed to Open Data Programme', requirement: '1K readings' },
  { name: 'Naturalist 🌿', desc: '10,000+ readings + 10 forum posts', requirement: '10K readings' },
  { name: 'Ecologist 🌳', desc: '25,000+ readings + species database contribution', requirement: '25K readings' },
  { name: 'Botanist 🌺', desc: '50,000+ readings + peer-reviewed citation', requirement: '50K readings' },
  { name: 'Nature Intelligence Pioneer 🔬', desc: 'Awarded by Vriksh Vani team for exceptional contribution', requirement: 'By invitation' },
];

import NaturePointsWidget from '@/components/ui/NaturePointsWidget';

export default function LeaderboardPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="gold">Community Leaderboard</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F7F6F2]">
              The Plant Intelligence Champions.
            </h1>
            <p className="text-[#A3B18A]">Ranked by total bio-signal readings contributed to the Vriksh Vani Open Data Programme.</p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { stat: '342', label: 'Active Contributors', icon: Star },
              { stat: '1.2M+', label: 'Readings/Day', icon: TrendingUp },
              { stat: '847', label: 'Species Tracked', icon: Leaf },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <Card key={i} className="text-center space-y-2 py-6">
                  <Icon className="w-5 h-5 text-[#8AD74C] mx-auto" />
                  <p className="font-display text-2xl font-bold text-[#8AD74C]">{s.stat}</p>
                  <p className="text-xs font-mono text-[#A3B18A]">{s.label}</p>
                </Card>
              );
            })}
          </div>

          {/* Nature Points Simulator */}
          <NaturePointsWidget />

          {/* Leaderboard table */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Top Contributors — July 2026</h2>
            </div>
            <Card className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10 text-xs font-mono text-[#A3B18A] uppercase tracking-wide">
                    <th className="text-left px-6 py-3">Rank</th>
                    <th className="text-left px-6 py-3">Member</th>
                    <th className="text-left px-6 py-3">City</th>
                    <th className="text-left px-6 py-3">Plants</th>
                    <th className="text-left px-6 py-3">Data Points</th>
                    <th className="text-left px-6 py-3">Badge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {topContributors.map((c) => (
                    <tr key={c.rank} className={`hover:bg-white/2 transition-colors ${c.rank <= 3 ? 'bg-[#0F2B18]/30' : ''}`}>
                      <td className="px-6 py-3 text-lg">{c.rank <= 3 ? c.icon : <span className="font-mono text-sm text-[#A3B18A]">{c.rank}</span>}</td>
                      <td className="px-6 py-3 font-medium text-[#F7F6F2] text-sm">{c.name}</td>
                      <td className="px-6 py-3 text-sm text-[#A3B18A]">{c.city}</td>
                      <td className="px-6 py-3 text-sm font-mono text-[#8AD74C]">{c.plants}</td>
                      <td className="px-6 py-3 text-sm font-mono text-[#8AD74C]">{c.dataPoints}</td>
                      <td className={`px-6 py-3 text-xs font-mono ${c.colour}`}>{c.badge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>

          {/* Badges */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#E8D07C]" />
              <h2 className="font-display text-2xl font-bold text-[#F7F6F2]">Community Badges</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {badges.map((b, idx) => (
                <Card key={idx} className="flex items-start gap-4">
                  <div>
                    <p className="font-display font-bold text-[#F7F6F2] text-sm">{b.name}</p>
                    <p className="text-xs text-[#A3B18A] mt-1">{b.desc}</p>
                    <p className="text-xs font-mono text-[#8AD74C] mt-1">{b.requirement}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 text-center border-[#8AD74C]/20 space-y-3">
            <p className="font-display text-xl font-bold text-[#F7F6F2]">Contribute Your Plant Data</p>
            <p className="text-sm text-[#A3B18A]">Opt in to the Open Data Programme via your NIH-01 settings. Every reading counts toward your leaderboard ranking and the global plant science dataset.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/nature-intelligence/open-data">
                <Button variant="primary">Learn About Open Data →</Button>
              </Link>
              <Link href="/community/forum">
                <Button variant="outline">Join the Forum</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
