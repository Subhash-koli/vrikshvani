'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Menu, X, ChevronDown, Search, Leaf } from 'lucide-react';
import SearchModal from '@/components/ui/SearchModal';

type NavGroup = {
  label: string;
  href?: string;
  children?: { label: string; href: string; desc?: string }[];
};

const navGroups: NavGroup[] = [
  {
    label: 'Product',
    children: [
      { label: 'NHI-01 Concept Overview', href: '/product', desc: 'The thermal biometrics ceramic hub concept' },
      { label: 'Features & Capabilities', href: '/product/features', desc: 'Target capabilities & non-invasive sensing' },
      { label: 'Ceramic Colorways', href: '/product/colorways', desc: 'Biophilic Sage & Cream White concepts' },
      { label: 'Technical Specifications', href: '/product/specifications', desc: 'ESP32-S3 TinyML hardware datasheet' },
      { label: 'Craftsmanship', href: '/product/craftsmanship', desc: 'Handcrafted mineral clay & ceramic glaze' },
    ],
  },
  {
    label: 'Technology',
    children: [
      { label: 'Nature Intelligence', href: '/nature-intelligence', desc: 'ESP32-S3 TinyML & biophysical computing' },
      { label: 'NTE™ Voice Engine', href: '/nature-intelligence/nte-voice', desc: 'Neural signal translation concept' },
      { label: 'Research Framework', href: '/nature-intelligence/research', desc: 'Working plant physiology hypotheses' },
      { label: 'Open Data Program', href: '/nature-intelligence/open-data', desc: 'Open dataset framework for botanical AI' },
      { label: 'Mobile App Concept', href: '/app', desc: 'iOS & Android interface vision' },
    ],
  },
  {
    label: 'Research',
    children: [
      { label: 'Open Hypotheses', href: '/nature-intelligence/research', desc: 'Biophysics study notes & transpiration models' },
      { label: 'Blog & Dispatches', href: '/blog', desc: 'Founder dispatches & research logs' },
      { label: 'Community Cohort', href: '/community', desc: 'Early research testers & prototype feedback' },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>('Product');
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
          ? 'bg-[#070B08]/90 backdrop-blur-2xl border-b border-[#8AD74C]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-[#070B08]/95 via-[#070B08]/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* ── DESKTOP HEADER (lg: and up) ── */}
        <div className="hidden lg:flex items-center justify-between">
          
          {/* 1. Left: Brand Identity & Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
              aria-label="Vriksh Vani Home"
            >
              <div className="relative w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/50 flex items-center justify-center p-1 group-hover:border-[#8AD74C] group-hover:shadow-[0_0_15px_rgba(138,215,76,0.4)] transition-all shadow-lime-glow shrink-0">
                <Image
                  src="/assets/vrikshvani_logo/vriksh vani 3d symboll logo.png"
                  alt="Vriksh Vani Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors leading-tight">
                  Vriksh Vani
                </span>
                <span className="text-[9px] text-[#A3B18A] tracking-wider font-mono uppercase hidden sm:inline leading-none mt-0.5">
                  LET YOUR PLANTS SPEAK
                </span>
              </div>
            </Link>
          </div>

          {/* 2. Center: Authentic Vriksh Vani Navigation with Dropdowns */}
          <nav className="flex items-center gap-1.5 xl:gap-2">
            <Link
              href="/"
              className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                pathname === '/'
                  ? 'text-[#8AD74C] bg-[#0F2B18]/70 shadow-[0_0_12px_rgba(138,215,76,0.2)]'
                  : 'text-[#F7F6F2]/80 hover:text-[#8AD74C] hover:bg-white/5'
              }`}
            >
              Home
              {pathname === '/' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#8AD74C] rounded-full shadow-[0_0_8px_#8AD74C]" />
              )}
            </Link>

            {navGroups.map((group) => {
              if (group.href) {
                const isActive = pathname === group.href;
                return (
                  <Link
                    key={group.label}
                    href={group.href}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                      isActive
                        ? 'text-[#8AD74C] bg-[#0F2B18]/70 shadow-[0_0_12px_rgba(138,215,76,0.2)]'
                        : 'text-[#F7F6F2]/80 hover:text-[#8AD74C] hover:bg-white/5'
                    }`}
                  >
                    {group.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#8AD74C] rounded-full shadow-[0_0_8px_#8AD74C]" />
                    )}
                  </Link>
                );
              }

              const isChildActive = group.children?.some((c) => pathname.startsWith(c.href));

              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(group.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    aria-expanded={activeDropdown === group.label}
                    onClick={() => setActiveDropdown(activeDropdown === group.label ? null : group.label)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all flex items-center gap-1 hover:bg-white/5 ${
                      isChildActive || activeDropdown === group.label
                        ? 'text-[#8AD74C] bg-[#0F2B18]/70'
                        : 'text-[#F7F6F2]/80 hover:text-[#8AD74C]'
                    }`}
                  >
                    <span>{group.label}</span>
                    <ChevronDown
                      className={`w-3 h-3 text-[#8AD74C] transition-transform duration-200 ${
                        activeDropdown === group.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Mega Dropdown */}
                  {activeDropdown === group.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-80 z-[100] before:absolute before:-top-3 before:inset-x-0 before:h-4 before:content-['']">
                      <div className="bg-[#0B150F]/95 backdrop-blur-2xl border border-[#8AD74C]/35 rounded-2xl p-3 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
                        <div className="grid gap-1">
                          {group.children?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`flex flex-col px-3.5 py-2 rounded-xl transition-all group/item ${
                                pathname === item.href
                                  ? 'bg-[#0F2B18] text-[#8AD74C]'
                                  : 'hover:bg-[#0F2B18]/70 text-[#F7F6F2]/80 hover:text-[#8AD74C]'
                              }`}
                            >
                              <span
                                className={`text-xs font-semibold transition-colors ${
                                  pathname === item.href
                                    ? 'text-[#8AD74C]'
                                    : 'text-[#F7F6F2] group-hover/item:text-[#8AD74C]'
                                }`}
                              >
                                {item.label}
                              </span>
                              {item.desc && (
                                <span className="text-[10px] text-[#A3B18A] mt-0.5 leading-tight">{item.desc}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* 3. Right: Search Trigger & Join Waitlist Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F2B18]/60 border border-white/10 hover:border-[#8AD74C]/40 text-xs text-[#A3B18A] hover:text-[#F7F6F2] transition-all"
              aria-label="Search website"
            >
              <Search className="w-3.5 h-3.5 text-[#8AD74C]" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 text-[9px] font-mono bg-white/5 border border-white/10 rounded text-[#A3B18A]">⌘K</kbd>
            </button>

            <Link href="/waitlist">
              <Button
                variant="primary"
                size="sm"
                className="flex items-center gap-1.5 hover:scale-105 px-5 py-2 text-xs"
              >
                <Leaf className="w-3.5 h-3.5 fill-white" />
                <span>Join the Waitlist</span>
              </Button>
            </Link>
          </div>

        </div>

        {/* ── MOBILE & TABLET HEADER (< lg) — Matching Reference Image 2 ── */}
        <div className="flex lg:hidden items-center justify-between py-1">
          
          {/* Far Left: Hamburger Menu Button [≡] (Clean white lines icon, no box border) */}
          <div className="w-20 flex items-center justify-start">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-white hover:text-[#8AD74C] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

          {/* Center: Brand Logo + Subtitle (Perfectly centered in flex-1) */}
          <div className="flex-1 flex items-center justify-center">
            <Link href="/" className="flex items-center gap-2.5 group cursor-pointer focus:outline-none">
              <Image
                src="/assets/vrikshvani_logo/vriksh vani 3d symboll logo.png"
                alt="Vriksh Vani Logo"
                width={42}
                height={42}
                className="object-contain shrink-0 drop-shadow-[0_2px_8px_rgba(138,215,76,0.25)]"
                priority
                unoptimized
              />
              <div className="flex flex-col text-left leading-none">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-[#8AD74C] transition-colors">
                  Vriksh Vani
                </span>
                <span className="text-[8.5px] text-[#A3B18A] tracking-wider font-mono uppercase mt-0.5">
                  LET YOUR PLANTS SPEAK
                </span>
              </div>
            </Link>
          </div>

          {/* Far Right: Compact Gradient Join Button */}
          <div className="w-20 flex items-center justify-end">
            <Link href="/waitlist" className="shrink-0">
              <button className="flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050] hover:from-[#051A02] hover:via-[#3FAE2A] hover:to-[#D0FF60] transition-all active:scale-95 shadow-[0_2px_12px_rgba(80,180,40,0.4)]">
                <Leaf className="w-3.5 h-3.5 fill-white text-white shrink-0" />
                <span>Join</span>
              </button>
            </Link>
          </div>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 z-50 bg-[#070B08]/98 backdrop-blur-3xl overflow-y-auto p-6 space-y-6 border-t border-[#8AD74C]/20 shadow-2xl">
          
          {/* Quick Search inside Mobile Drawer */}
          <button
            onClick={() => {
              setMobileOpen(false);
              setSearchOpen(true);
            }}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#0F2B18]/60 border border-white/10 text-xs text-[#A3B18A] hover:text-[#F7F6F2] hover:border-[#8AD74C]/40 transition-all"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#8AD74C]" />
              <span>Search website...</span>
            </div>
            <kbd className="px-1.5 py-0.5 text-[9px] font-mono bg-white/5 border border-white/10 rounded text-[#A3B18A]">⌘K</kbd>
          </button>

          <div className="space-y-3">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-base font-display font-semibold transition-colors ${
                pathname === '/' ? 'text-[#8AD74C]' : 'text-[#F7F6F2] hover:text-[#8AD74C]'
              }`}
            >
              Home
            </Link>

            {navGroups.map((group) => {
              if (group.href) {
                return (
                  <div key={group.label} className="border-b border-white/5 pb-2">
                    <Link
                      href={group.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-2 text-base font-display font-semibold transition-colors ${
                        pathname === group.href ? 'text-[#8AD74C]' : 'text-[#F7F6F2] hover:text-[#8AD74C]'
                      }`}
                    >
                      {group.label}
                    </Link>
                  </div>
                );
              }

              const isExpanded = openMobileGroup === group.label;

              return (
                <div key={group.label} className="border-b border-white/5 pb-2">
                  <button
                    type="button"
                    onClick={() => setOpenMobileGroup(isExpanded ? null : group.label)}
                    className="w-full flex items-center justify-between py-2 text-base font-display font-semibold text-[#F7F6F2] hover:text-[#8AD74C] text-left"
                  >
                    <span>{group.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8AD74C] transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="grid gap-1.5 pl-3 border-l border-[#8AD74C]/30 my-2">
                      {group.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex flex-col py-1.5 px-2 rounded-lg transition-colors ${
                            pathname === child.href
                              ? 'bg-[#0F2B18] text-[#8AD74C]'
                              : 'text-[#A3B18A] hover:text-[#8AD74C]'
                          }`}
                        >
                          <span className="text-xs font-semibold">{child.label}</span>
                          {child.desc && (
                            <span className="text-[10px] text-[#A3B18A]/70">{child.desc}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3 pb-8">
            <Link href="/waitlist" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" size="lg" className="w-full flex items-center justify-center gap-2">
                <Leaf className="w-4 h-4 fill-white" />
                <span>Join Founding Waitlist →</span>
              </Button>
            </Link>
          </div>
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
};

export default Header;
