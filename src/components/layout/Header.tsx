'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Menu, X, Leaf, Sparkles, ChevronDown } from 'lucide-react';

type NavGroup = {
  label: string;
  href?: string;
  children?: { label: string; href: string; desc?: string }[];
};

const navGroups: NavGroup[] = [
  {
    label: 'Product',
    children: [
      { label: 'NIH-01 Hub Overview', href: '/product', desc: 'The thermal biometrics ceramic hub' },
      { label: 'Features & Capabilities', href: '/product/features', desc: '14 core capabilities' },
      { label: 'Ceramic Colorways', href: '/product/colorways', desc: 'Sage, Cream White, Obsidian' },
      { label: 'Technical Specifications', href: '/product/specifications', desc: 'Full hardware datasheet' },
      { label: 'Craftsmanship', href: '/product/craftsmanship', desc: 'Kiln-fired artisan process' },
      { label: 'Unboxing Experience', href: '/product/unboxing', desc: 'Plastic-free packaging' },
      { label: 'vs. Traditional Monitors', href: '/product/comparison', desc: 'FLIR vs soil probe matrix' },
    ],
  },
  {
    label: 'Technology',
    children: [
      { label: 'Nature Intelligence', href: '/nature-intelligence', desc: 'TinyML NPU architecture' },
      { label: 'NTE™ Voice Engine', href: '/nature-intelligence/nte-voice', desc: '4 personalities, 8 languages' },
      { label: 'Research Lab', href: '/nature-intelligence/research', desc: 'Peer-reviewed publications' },
      { label: 'Technical Whitepaper', href: '/nature-intelligence/whitepaper', desc: '48-page engineering deep-dive' },
      { label: 'Open Plant Datasets', href: '/nature-intelligence/open-data', desc: 'Free academic downloads' },
      { label: 'Mobile App', href: '/app', desc: 'iOS & Android companion' },
      { label: 'Smart Home Integration', href: '/app/smart-home', desc: 'Home Assistant & Matter' },
      { label: 'Fleet Management', href: '/app/fleet-management', desc: 'Up to 500 plants' },
    ],
  },
  {
    label: 'Community',
    children: [
      { label: 'Community Hub', href: '/community', desc: '2,944 botanists worldwide' },
      { label: 'Open Forum', href: '/community/forum', desc: 'Research & care discussions' },
      { label: 'Leaderboard', href: '/community/leaderboard', desc: 'Nature Points rankings' },
      { label: 'Blog & Research', href: '/blog', desc: 'Bio-physics dispatches' },
      { label: 'Enterprise Solutions', href: '/enterprise', desc: 'Commercial fleet pricing' },
      { label: 'Sustainability', href: '/sustainability', desc: '100-year ecological commitment' },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#070B08]/90 backdrop-blur-2xl border-b border-white/10 py-3 shadow-glass'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center group-hover:border-[#8AD74C] transition-all duration-300 shadow-lime-glow">
              <Leaf className="w-5 h-5 text-[#8AD74C]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">
                VRIKSH VANI
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#A3B18A] uppercase -mt-1">
                Nature Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0F2B18]/40 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navGroups.map((group) =>
              group.href ? (
                <Link
                  key={group.href}
                  href={group.href}
                  className={`px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full hover:bg-white/5 ${
                    pathname === group.href ? 'text-[#8AD74C]' : 'text-[#F7F6F2]/80 hover:text-[#8AD74C]'
                  }`}
                >
                  {group.label}
                </Link>
              ) : (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(group.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full hover:bg-white/5 flex items-center gap-1 ${
                      group.children?.some(c => pathname.startsWith(c.href))
                        ? 'text-[#8AD74C]'
                        : 'text-[#F7F6F2]/80 hover:text-[#8AD74C]'
                    }`}
                  >
                    {group.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === group.label ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mega Dropdown */}
                  {activeDropdown === group.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#070B08]/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-2xl">
                      <div className="grid gap-1">
                        {group.children?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col px-3 py-2.5 rounded-xl hover:bg-[#0F2B18] transition-colors group/item ${
                              pathname === item.href ? 'bg-[#0F2B18]' : ''
                            }`}
                          >
                            <span className={`text-xs font-semibold transition-colors ${
                              pathname === item.href ? 'text-[#8AD74C]' : 'text-[#F7F6F2] group-hover/item:text-[#8AD74C]'
                            }`}>
                              {item.label}
                            </span>
                            {item.desc && (
                              <span className="text-[10px] text-[#A3B18A] mt-0.5">{item.desc}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Badge variant="lime" className="hidden xl:inline-flex gap-1">
              <Sparkles className="w-3 h-3" /> Batch 01 · 88 Left
            </Badge>
            <Link href="/waitlist">
              <Button variant="primary" size="sm">Pre-Order →</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#0F2B18]/80 text-[#F7F6F2] border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#070B08]/98 backdrop-blur-2xl overflow-y-auto p-6 space-y-6">
          {navGroups.map((group) => (
            <div key={group.label} className="space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#A3B18A] px-1">{group.label}</p>
              {group.href ? (
                <Link
                  href={group.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-semibold text-[#F7F6F2] hover:text-[#8AD74C] py-2 border-b border-white/5 transition-colors"
                >
                  {group.label}
                </Link>
              ) : (
                <div className="space-y-1">
                  {group.children?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl transition-colors ${
                        pathname === item.href
                          ? 'bg-[#0F2B18] text-[#8AD74C]'
                          : 'text-[#F7F6F2]/80 hover:bg-[#0F2B18]/60 hover:text-[#8AD74C]'
                      }`}
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Badge variant="lime" className="justify-center py-2 gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Batch 01 Founding Member · 88 Left
            </Badge>
            <Link href="/waitlist" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" className="w-full">Pre-Order Founding Unit →</Button>
            </Link>
            <Link href="/enterprise" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" className="w-full">Enterprise Fleet Enquiry</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
