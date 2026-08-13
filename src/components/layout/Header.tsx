'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Menu, X, Leaf, ChevronDown, Search } from 'lucide-react';
import dynamic from 'next/dynamic';

const SearchModal = dynamic(() => import('@/components/ui/SearchModal'), { ssr: false });

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Product',
    href: '/product',
    children: [
      { label: 'NHI-01 Hub Overview', href: '/product', desc: 'The Nature Intelligence companion hub' },
      { label: 'Features & Capabilities', href: '/product/features', desc: 'Biophysical sensing & voice engine' },
      { label: 'Technical Specifications', href: '/product/specifications', desc: 'ESP32-S3 hardware architecture' },
      { label: 'Craftsmanship & Ceramic', href: '/product/craftsmanship', desc: 'Artisanal stoneware firing' },
    ],
  },
  {
    label: 'How It Works',
    href: '/nature-intelligence',
    children: [
      { label: 'Nature Intelligence Category', href: '/nature-intelligence', desc: 'Biophysical signal interpretation' },
      { label: 'NTE™ Voice Synthesis', href: '/nature-intelligence/nte-voice', desc: 'On-device neural translation' },
      { label: 'Leaf Thermal Dynamics', href: '/nature-intelligence/leaf-thermal-dynamics', desc: 'Stomatal transpiration cooling' },
      { label: 'VPD Science Deep-Dive', href: '/nature-intelligence/vpd-science', desc: 'Vapor Pressure Deficit models' },
    ],
  },
  { label: 'Features', href: '/features' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
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

  // Keyboard and click outside listeners
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
          ? 'bg-[#070B08]/90 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">

          {/* Mobile Hamburger Toggle (Left on Mobile as in Reference Image 02) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl bg-[#0F2B18]/90 text-[#F7F6F2] border border-[#8AD74C]/30 hover:border-[#8AD74C] transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-5 h-5 text-[#8AD74C]" /> : <Menu className="w-5 h-5 text-[#8AD74C]" />}
            </button>
          </div>

          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#0F2B18] border border-[#8AD74C]/40 flex items-center justify-center group-hover:border-[#8AD74C] transition-all duration-300 shadow-lime-glow p-1 overflow-hidden">
              <img
                src="/assets/vrikshvani_logo/vrikshvani-iconmark-flat-light.png"
                alt="Vriksh Vani Logo"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors leading-tight">
                Vriksh vani
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans tracking-wide text-[#A3B18A] font-medium -mt-0.5">
                Let Your Plants Speak
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={activeDropdown === item.label}
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all rounded-full flex items-center gap-1 relative group ${
                        isActive
                          ? 'text-[#8AD74C] font-semibold'
                          : 'text-[#F7F6F2]/80 hover:text-[#8AD74C]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180 text-[#8AD74C]' : ''}`} />
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#8AD74C] rounded-full shadow-lime-glow" />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-[100]">
                        <div className="bg-[#0B150F]/95 border border-[#8AD74C]/30 rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
                          <div className="grid gap-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`flex flex-col px-3 py-2 rounded-xl transition-colors ${
                                  pathname === child.href
                                    ? 'bg-[#0F2B18] text-[#8AD74C]'
                                    : 'text-[#F7F6F2]/90 hover:bg-[#0F2B18]/70 hover:text-[#8AD74C]'
                                }`}
                              >
                                <span className="text-xs font-semibold">{child.label}</span>
                                {child.desc && (
                                  <span className="text-[10px] text-[#A3B18A] mt-0.5">{child.desc}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all rounded-full relative ${
                    isActive
                      ? 'text-[#8AD74C] font-semibold'
                      : 'text-[#F7F6F2]/80 hover:text-[#8AD74C]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#8AD74C] rounded-full shadow-lime-glow" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button (Desktop: Full Pill Button / Mobile: Compact Pill) */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F2B18]/60 border border-white/10 hover:border-[#8AD74C]/40 text-xs text-[#A3B18A] hover:text-[#F7F6F2] transition-all"
              aria-label="Search website"
            >
              <Search className="w-3.5 h-3.5 text-[#8AD74C]" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.2 text-[9px] font-mono bg-white/5 border border-white/10 rounded text-[#A3B18A]">⌘K</kbd>
            </button>

            {/* Desktop Join Pill */}
            <Link href="/waitlist" className="hidden sm:inline-flex">
              <Button
                variant="primary"
                size="sm"
                className="rounded-full px-5 py-2 font-bold text-xs bg-[#3FAE2A] hover:bg-[#8AD74C] text-[#070B08] shadow-[0_0_20px_rgba(63,174,42,0.4)] flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <Leaf className="w-3.5 h-3.5 fill-current" />
                <span>Join the Waitlist</span>
              </Button>
            </Link>

            {/* Mobile Compact Join Pill */}
            <Link href="/waitlist" className="sm:hidden inline-flex">
              <Button
                variant="primary"
                size="sm"
                className="rounded-full px-3.5 py-1.5 font-bold text-[11px] bg-[#3FAE2A] hover:bg-[#8AD74C] text-[#070B08] shadow-lime-glow flex items-center gap-1"
              >
                <Leaf className="w-3 h-3 fill-current" />
                <span>Join</span>
              </Button>
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 z-50 bg-[#070B08] overflow-y-auto p-6 space-y-6 border-t border-[#8AD74C]/20 shadow-2xl backdrop-blur-3xl">
          <div className="space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/5 pb-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2.5 text-base font-display font-semibold transition-colors ${
                    pathname === item.href ? 'text-[#8AD74C]' : 'text-[#F7F6F2] hover:text-[#8AD74C]'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1.5 border-l border-[#8AD74C]/20 mt-1 mb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1 text-xs text-[#A3B18A] hover:text-[#8AD74C] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3 pb-8">
            <Link href="/waitlist" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" size="lg" className="w-full rounded-full flex items-center justify-center gap-2">
                <Leaf className="w-4 h-4 fill-current" />
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
