'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Menu, X, Leaf, Sparkles, ChevronDown, Search } from 'lucide-react';
import dynamic from 'next/dynamic';

const SearchModal = dynamic(() => import('@/components/ui/SearchModal'), { ssr: false });

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
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setScrolled(window.scrollY > 20));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Close menus on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>('Product');

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Reset dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070B08]/90 backdrop-blur-2xl border-b border-white/10 py-3 shadow-glass'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center group-hover:border-[#8AD74C] transition-all duration-300 shadow-lime-glow p-1 overflow-hidden">
              <img
                src="/assets/vrikshvani_logo/vrikshvani-iconmark-flat-light.png"
                alt="Vriksh Vani Logo"
                className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors">
                Vriksh Vani
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#A3B18A] uppercase -mt-0.5">
                Let your plant speak.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 bg-[#0F2B18]/40 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
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
                    type="button"
                    aria-expanded={activeDropdown === group.label}
                    aria-haspopup="true"
                    onClick={() => setActiveDropdown(activeDropdown === group.label ? null : group.label)}
                    className={`px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full hover:bg-white/5 flex items-center gap-1 ${
                      group.children?.some(c => pathname.startsWith(c.href))
                        ? 'text-[#8AD74C]'
                        : 'text-[#F7F6F2]/80 hover:text-[#8AD74C]'
                    }`}
                  >
                    {group.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === group.label ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mega Dropdown with hover bridge */}
                  {activeDropdown === group.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 z-[100] before:absolute before:-top-3 before:inset-x-0 before:h-4 before:content-['']">
                      <div className="bg-[#0B150F] border border-[#8AD74C]/30 rounded-2xl p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
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
                    </div>
                  )}
                </div>
              )
            )}
          </nav>

          {/* CTA Buttons + Search Trigger */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F2B18]/40 border border-white/10 hover:border-[#8AD74C]/40 text-xs text-[#A3B18A] hover:text-[#F7F6F2] transition-all"
            >
              <Search className="w-3.5 h-3.5 text-[#8AD74C]" />
              <span>Search...</span>
              <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[9px] font-mono bg-white/5 border border-white/10 rounded text-[#A3B18A]">⌘K</kbd>
            </button>
            <Badge variant="lime" className="hidden xl:inline-flex gap-1">
              <Sparkles className="w-3 h-3" /> Batch 01 · 88 Left
            </Badge>
            <Link href="/waitlist">
              <Button variant="primary" size="sm">Pre-Order →</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg bg-[#0F2B18]/80 text-[#F7F6F2] border border-white/10"
              aria-label="Open search"
            >
              <Search className="w-5 h-5 text-[#8AD74C]" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg bg-[#0F2B18]/80 text-[#F7F6F2] border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 z-50 bg-[#070B08] overflow-y-auto p-6 space-y-6 border-t border-white/10 shadow-2xl">
          {navGroups.map((group) => {
            const isExpanded = openMobileGroup === group.label;
            return (
              <div key={group.label} className="border-b border-white/5 pb-4 space-y-2">
                {group.href ? (
                  <Link
                    href={group.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-lg font-display font-semibold text-[#F7F6F2] hover:text-[#8AD74C] py-1 transition-colors"
                  >
                    {group.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      type="button"
                      onClick={() => setOpenMobileGroup(isExpanded ? null : group.label)}
                      className="w-full flex items-center justify-between py-2 text-lg font-display font-semibold text-[#F7F6F2] hover:text-[#8AD74C] transition-colors text-left"
                    >
                      <span>{group.label}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#8AD74C] transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="grid gap-1 pt-2 pl-2 border-l border-[#8AD74C]/20 mt-2 space-y-1">
                        {group.children?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex flex-col py-2 px-3 rounded-xl transition-colors ${
                              pathname === item.href
                                ? 'bg-[#0F2B18] text-[#8AD74C]'
                                : 'text-[#F7F6F2]/80 hover:bg-[#0F2B18]/60 hover:text-[#8AD74C]'
                            }`}
                          >
                            <span className="text-sm font-medium">{item.label}</span>
                            {item.desc && (
                              <span className="text-[10px] text-[#A3B18A] mt-0.5">{item.desc}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3 pb-12">
            <Badge variant="lime" className="justify-center py-2.5 gap-1.5 text-xs">
              <Sparkles className="w-4 h-4" /> Batch 01 Founding Member · 88 Left
            </Badge>
            <Link href="/waitlist" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" size="lg" className="w-full">Pre-Order Founding Unit →</Button>
            </Link>
            <Link href="/enterprise" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" size="lg" className="w-full">Enterprise Fleet Enquiry</Button>
            </Link>
          </div>
        </div>
      )}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
};

export default Header;

