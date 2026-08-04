import React from 'react';
import Link from 'next/link';
import { Leaf, ShieldCheck, MapPin, Github, Twitter, Instagram, Youtube } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'NIH-01 Hub Overview', href: '/product' },
      { label: 'Features & Capabilities', href: '/product/features' },
      { label: 'Ceramic Colorways', href: '/product/colorways' },
      { label: 'Specifications', href: '/product/specifications' },
      { label: 'Craftsmanship', href: '/product/craftsmanship' },
      { label: 'Unboxing Experience', href: '/product/unboxing' },
      { label: 'vs. Traditional Monitors', href: '/product/comparison' },
    ],
  },
  {
    heading: 'Technology',
    links: [
      { label: 'Nature Intelligence', href: '/nature-intelligence' },
      { label: 'NTE™ Voice Engine', href: '/nature-intelligence/nte-voice' },
      { label: 'Research Lab', href: '/nature-intelligence/research' },
      { label: 'Technical Whitepaper', href: '/nature-intelligence/whitepaper' },
      { label: 'Open Plant Datasets', href: '/nature-intelligence/open-data' },
      { label: 'Mobile App', href: '/app' },
      { label: 'Fleet Management', href: '/app/fleet-management' },
      { label: 'Smart Home Integration', href: '/app/smart-home' },
    ],
  },
  {
    heading: 'Community',
    links: [
      { label: 'Community Hub', href: '/community' },
      { label: 'Open Forum', href: '/community/forum' },
      { label: 'Leaderboard', href: '/community/leaderboard' },
      { label: 'Blog & Research', href: '/blog' },
      { label: 'Enterprise Solutions', href: '/enterprise' },
      { label: 'Sustainability Report', href: '/sustainability' },
      { label: 'Press Room', href: '/press' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help Center', href: '/support' },
      { label: 'FAQs', href: '/support/faq' },
      { label: 'System Status', href: '/support/status' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Warranty & Returns', href: '/warranty' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Developer API Docs', href: '/developers' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Careers (We\'re Hiring)', href: '/careers' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Accessibility Statement', href: '/accessibility' },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/vrikshvani' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/vrikshvani' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@vrikshvani' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/vrikshvani' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030504] border-t border-white/10 pt-16 pb-10 text-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Row — Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-[#0F2B18] border border-[#8AD74C]/30 flex items-center justify-center group-hover:border-[#8AD74C] transition-colors">
                <Leaf className="w-5 h-5 text-[#8AD74C]" />
              </div>
              <div>
                <span className="block font-display font-bold text-xl text-[#F7F6F2]">Vriksh Vani</span>
                <span className="block text-[11px] font-mono tracking-wider text-[#8AD74C] uppercase mt-0.5">Let your plant speak.</span>
              </div>
            </Link>
            <p className="text-sm text-[#A3B18A] max-w-sm leading-relaxed">
              Decoding the silent biophysical language of plants through FLIR thermal biometrics, quad-gas analysis, and on-device neural voice synthesis.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8AD74C]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>100% Volatile SRAM Frame Overwrite Privacy</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#A3B18A]">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Bengaluru · London · San Francisco</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#0F2B18] border border-white/10 flex items-center justify-center text-[#A3B18A] hover:text-[#8AD74C] hover:border-[#8AD74C]/40 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Waitlist CTA */}
          <div className="lg:col-span-2 flex items-center justify-center lg:justify-end">
            <div className="nidl-glass rounded-2xl p-8 space-y-4 w-full max-w-md">
              <Badge variant="lime">Batch 01 — 88 Units Remaining</Badge>
              <h3 className="font-display text-2xl font-bold text-[#F7F6F2]">
                Hear Your Plants Speak.
              </h3>
              <p className="text-sm text-[#A3B18A]">
                Reserve your NIH-01 Founding Unit — no charge until dispatch.
              </p>
              <Link href="/waitlist" className="block">
                <button className="w-full h-12 bg-[#3FAE2A] hover:bg-[#8AD74C] text-[#070B08] font-display font-bold text-sm rounded-btn transition-all duration-300 shadow-lime-glow">
                  Pre-Order Founding Unit →
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerColumns.map((col) => (
            <div key={col.heading} className="space-y-3">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#8AD74C]">{col.heading}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#F7F6F2]/60 hover:text-[#8AD74C] transition-colors leading-relaxed"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A3B18A] font-mono">
          <p>© 2026 Vriksh Vani Technologies Pvt. Ltd. CIN: U72900KA2024PTC000001 · Bengaluru, Karnataka, India 560001</p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Link href="/privacy" className="hover:text-[#8AD74C] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#8AD74C] transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-[#8AD74C] transition-colors">Cookies</Link>
            <Link href="/support/status" className="flex items-center gap-1.5 hover:text-[#8AD74C] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8AD74C] animate-pulse" />
              All Systems Operational
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
