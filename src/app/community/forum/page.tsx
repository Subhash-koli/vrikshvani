import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Thermometer,
  BookOpen,
  Database,
  Settings,
  Heart,
  MessageSquare,
  ArrowRight,
  Users,
  LogIn,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Community Forum — Vriksh Vani Nature Intelligence',
  description:
    'Join the Vriksh Vani community forum. Discuss VPD science, share plant care tips, show off your plant setups, and get help from the most data-driven plant community on the internet.',
};

const forumCategories = [
  {
    icon: Thermometer,
    title: 'VPD & Bio-Physics',
    postCount: 234,
    accentColor: '#8AD74C',
    desc: 'Discuss vapour pressure deficit, transpiration, leaf temperature science. Deep dives into the physics of plant water use — bring data.',
    slug: 'vpd-bio-physics',
  },
  {
    icon: BookOpen,
    title: 'Plant Care Diaries',
    postCount: 891,
    accentColor: '#8AD74C',
    desc: "Share your plants' NIH-01 data, care routines, and growth updates. Annotated graphs, before-and-after comparisons, and honest failures welcome.",
    slug: 'plant-care-diaries',
  },
  {
    icon: Database,
    title: 'Species Database Contributions',
    postCount: 156,
    accentColor: '#E8D07C',
    desc: 'Help us expand species parameters and validate care data. Propose new VPD ranges, substrate preferences, and light saturation points for the 847+ species library.',
    slug: 'species-database',
  },
  {
    icon: Settings,
    title: 'Hardware & Technical',
    postCount: 89,
    accentColor: '#A3B18A',
    desc: 'NIH-01 setup, BLE connectivity, API integrations, and developer discussion. Home Assistant configs, MQTT bridges, and firmware questions here.',
    slug: 'hardware-technical',
  },
  {
    icon: Heart,
    title: 'Off-Topic: Plant Love',
    postCount: 445,
    accentColor: '#E8D07C',
    desc: 'Shelfies, propagation wins, market finds, and plant parent moments. No data required. Just plant joy.',
    slug: 'plant-love',
  },
];

const categoryTagColors: Record<string, string> = {
  VPD: 'bg-[#8AD74C]/15 text-[#8AD74C] border border-[#8AD74C]/30',
  'Care Diaries': 'bg-[#3FAE2A]/15 text-[#8AD74C] border border-[#3FAE2A]/20',
  Hardware: 'bg-[#A3B18A]/15 text-[#A3B18A] border border-[#A3B18A]/30',
  Species: 'bg-[#E8D07C]/15 text-[#E8D07C] border border-[#E8D07C]/30',
  'Plant Love': 'bg-rose-500/10 text-rose-300 border border-rose-500/20',
};

const recentPosts = [
  {
    category: 'VPD',
    title:
      'My Calathea VPD dropped to 0.4 last night — NIH-01 alerted me before any leaf roll',
    author: 'priya.botanist',
    time: '2h ago',
    replies: 14,
  },
  {
    category: 'Care Diaries',
    title:
      'Monstera fenestration is accelerating — NIH-01 thermal shows consistent leaf temp delta',
    author: 'green.thumb.raj',
    time: '5h ago',
    replies: 8,
  },
  {
    category: 'Hardware',
    title: 'BLE connection drops after iOS 18.2 — anyone else?',
    author: 'leafy_logic',
    time: '8h ago',
    replies: 22,
  },
  {
    category: 'Species',
    title: 'Adding Hoya Kerrii parameters — VPD 1.0–1.4, proposed',
    author: 'botanical_bala',
    time: '12h ago',
    replies: 6,
  },
  {
    category: 'VPD',
    title: 'Comparison of 4 humidifier types measured by NIH-01 over 30 days',
    author: 'vpd.vigilant',
    time: '1d ago',
    replies: 31,
  },
  {
    category: 'Plant Love',
    title:
      'Finally: my Philodendron Gloriosum produced a new leaf. NIH-01 reported "Photosynthetic Joy" 🌿',
    author: 'orchid_obsessed',
    time: '1d ago',
    replies: 19,
  },
];

export default function ForumPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B08] text-[#F7F6F2]">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Badge variant="lime">Community Forum</Badge>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#F7F6F2] leading-tight">
            The Most Data-Driven
            <br className="hidden md:block" /> Plant Community.
          </h1>
          <p className="text-[#A3B18A] text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Thousands of plant parents, horticulturalists, and bio-physics enthusiasts
            sharing real NIH-01 data, care insights, and genuine plant science.
            No guesswork. No anecdotes without evidence.
          </p>
          <div className="flex flex-wrap gap-6 justify-center pt-2">
            <div className="text-center">
              <p className="font-mono text-3xl font-bold text-[#8AD74C]">1,815</p>
              <p className="text-xs text-[#A3B18A] uppercase tracking-widest mt-1">Total Posts</p>
            </div>
            <div className="w-px bg-white/10 self-stretch" />
            <div className="text-center">
              <p className="font-mono text-3xl font-bold text-[#8AD74C]">342</p>
              <p className="text-xs text-[#A3B18A] uppercase tracking-widest mt-1">Members</p>
            </div>
            <div className="w-px bg-white/10 self-stretch" />
            <div className="text-center">
              <p className="font-mono text-3xl font-bold text-[#8AD74C]">5</p>
              <p className="text-xs text-[#A3B18A] uppercase tracking-widest mt-1">Categories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F7F6F2]">
              Forum Categories
            </h2>
            <span className="font-mono text-xs text-[#A3B18A] uppercase tracking-widest">
              5 categories
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {forumCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Card
                  key={idx}
                  className="flex gap-5 items-start p-6 border border-white/8 group cursor-pointer"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${cat.accentColor}15`,
                      border: `1px solid ${cat.accentColor}25`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cat.accentColor }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <h3 className="font-display text-lg font-semibold text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">
                        {cat.title}
                      </h3>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <MessageSquare className="w-3.5 h-3.5 text-[#A3B18A]" />
                        <span className="font-mono text-xs text-[#A3B18A]">
                          {cat.postCount.toLocaleString()} posts
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-[#A3B18A] leading-relaxed">{cat.desc}</p>
                  </div>
                </Card>
              );
            })}

            {/* Wide card spanning full width on larger screens */}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F7F6F2]">
              Recent Posts
            </h2>
            <span className="font-mono text-xs text-[#A3B18A] uppercase tracking-widest">
              Latest activity
            </span>
          </div>

          <div className="space-y-3">
            {recentPosts.map((post, idx) => (
              <div
                key={idx}
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 px-6 py-5 rounded-xl border border-white/8 bg-[#070B08] hover:bg-[#0F2B18]/30 hover:border-[#8AD74C]/20 transition-all duration-200 cursor-pointer"
              >
                {/* Category tag */}
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest shrink-0 ${
                    categoryTagColors[post.category] ??
                    'bg-white/10 text-[#A3B18A] border border-white/10'
                  }`}
                >
                  {post.category}
                </span>

                {/* Title */}
                <p className="flex-1 text-sm text-[#F7F6F2] font-medium group-hover:text-[#8AD74C] transition-colors leading-snug">
                  {post.title}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 shrink-0 text-[#A3B18A]">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span className="font-mono text-xs">{post.author}</span>
                  </div>
                  <span className="font-mono text-xs text-[#A3B18A]/60">{post.time}</span>
                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span className="font-mono text-xs">{post.replies}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: Sign In / Join Waitlist */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Existing member */}
            <Card className="space-y-5 border border-white/10 p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-[#8AD74C]/10 border border-[#8AD74C]/20 flex items-center justify-center mx-auto">
                <LogIn className="w-7 h-7 text-[#8AD74C]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl font-semibold text-[#F7F6F2]">
                  Already a Member?
                </h3>
                <p className="text-sm text-[#A3B18A] leading-relaxed">
                  Sign in to post, reply, contribute species data, and access your NIH-01
                  sensor logs in the community dashboard.
                </p>
              </div>
              <Link href="/auth/signin">
                <Button variant="outline" size="md" className="w-full">
                  Sign In to Post
                </Button>
              </Link>
            </Card>

            {/* New member */}
            <Card className="space-y-5 border border-[#8AD74C]/20 p-8 text-center bg-[#0F2B18]/30">
              <div className="w-14 h-14 rounded-full bg-[#8AD74C]/15 border border-[#8AD74C]/30 flex items-center justify-center mx-auto">
                <ArrowRight className="w-7 h-7 text-[#8AD74C]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl font-semibold text-[#F7F6F2]">
                  New to Vriksh Vani?
                </h3>
                <p className="text-sm text-[#A3B18A] leading-relaxed">
                  Full forum access is included with every NIH-01 pre-order. Join the
                  waitlist to secure your unit and unlock the community.
                </p>
              </div>
              <Link href="/product#waitlist">
                <Button variant="primary" size="md" className="w-full">
                  Join Waitlist for Full Access
                </Button>
              </Link>
            </Card>
          </div>

          {/* Community note */}
          <div className="mt-10 text-center">
            <p className="text-xs font-mono text-[#A3B18A]/60 uppercase tracking-widest">
              Community moderated by Vriksh Vani team · No ads · No algorithmic feed · Chronological order
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
