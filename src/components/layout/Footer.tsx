import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MapPin, Github, Twitter, Instagram, Youtube } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const footerColumns = [
  {
    heading: 'Product Concept',
    links: [
      { label: 'NIH-01 Hub Overview', href: '/product' },
      { label: 'Features & Vision', href: '/product' },
      { label: 'Ceramic Colorways', href: '/product' },
      { label: 'Target Specifications', href: '/product' },
    ],
  },
  {
    heading: 'Technology',
    links: [
      { label: 'Nature Intelligence', href: '/nature-intelligence' },
      { label: 'NTE™ Voice Concept', href: '/nature-intelligence' },
      { label: 'Research Framework', href: '/nature-intelligence' },
      { label: 'Mobile App Vision', href: '/app' },
    ],
  },
  {
    heading: 'Community & Research',
    links: [
      { label: 'Join Research Cohort', href: '/waitlist' },
      { label: 'Blog & Research Notes', href: '/blog' },
      { label: 'Our Philosophy', href: '/about' },
    ],
  },
  {
    heading: 'Legal & Info',
    links: [
      { label: 'Privacy Principles', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Contact Founder', href: '/contact' },
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
              <img
                src="/assets/vrikshvani_logo/vriksh vani 3d symboll logo.png"
                alt="Vriksh Vani Logo"
                className="w-14 h-14 sm:w-[60px] sm:h-[60px] object-contain shrink-0 drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-300"
              />
              {/* Parent: fit-content sized ONLY by the name (tagline is absolute) */}
              <div
                className="flex flex-col text-left relative"
                style={{ width: 'fit-content', paddingBottom: '14px' }}
              >
                {/* Name — defines the reference width */}
                <span className="font-brand font-extrabold text-xl tracking-tight
                                 text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors
                                 leading-tight whitespace-nowrap block">
                  Vriksh Vani
                </span>

                {/* Tagline — absolute, nowrap forces single line, justify spreads to fill name width */}
                <span
                  className="absolute bottom-0 left-0 font-serif-logo
                             text-[9.5px] text-[#8AD74C] uppercase
                             block leading-none w-full whitespace-nowrap"
                  style={{ textAlign: 'justify', textAlignLast: 'justify' }}
                >
                  Let Your Plant Speak
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#A3B18A] max-w-sm leading-relaxed">
              Decoding the silent biophysical language of plants through thermal biometrics, atmospheric gas analysis, and on-device neural voice synthesis.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8AD74C]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>100% Volatile SRAM Frame Overwrite Privacy</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#A3B18A]">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
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
              <Badge variant="lime">Early Research Community</Badge>
              <h3 className="font-display text-2xl font-bold text-[#F7F6F2]">
                Explore Nature Intelligence.
              </h3>
              <p className="text-sm text-[#A3B18A]">
                Join our research waitlist to get early updates and participate in prototype testing.
              </p>
                <Link href="/waitlist" className="block">
                  <button className="w-full h-12 rounded-xl font-display font-bold text-sm text-white
                                     bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050]
                                     hover:from-[#051A02] hover:via-[#3FAE2A] hover:to-[#D0FF60]
                                     transition-all duration-300">
                    Join the Waitlist →
                  </button>
                </Link>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerColumns.map((col) => (
            <div key={col.heading} className="space-y-3">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#8AD74C]">{col.heading}</h4>
              <ul className="space-y-2">
                {col.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#F7F6F2]/70 hover:text-[#8AD74C] transition-colors leading-relaxed py-1 inline-block"
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
          <p>© 2026 Vriksh Vani · An Independent Nature Intelligence Project · Bengaluru, India</p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Link href="/privacy" className="hover:text-[#8AD74C] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#8AD74C] transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-[#8AD74C] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
