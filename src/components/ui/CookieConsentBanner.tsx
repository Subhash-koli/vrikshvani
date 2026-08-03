'use client';

import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart2 } from 'lucide-react';
import Link from 'next/link';

const COOKIE_KEY = 'vv_cookie_consent';

export const CookieConsentBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Show after 1.5s delay
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (level: 'all' | 'essential') => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ level, ts: Date.now() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-[999] animate-slideUp">
      <div className="bg-[#0F2B18]/95 backdrop-blur-2xl border border-[#8AD74C]/30 rounded-2xl p-5 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Cookie className="w-5 h-5 text-[#8AD74C] shrink-0" />
            <span className="font-display font-bold text-sm text-[#F7F6F2]">Cookie Preferences</span>
          </div>
          <button
            onClick={() => accept('essential')}
            className="text-[#A3B18A] hover:text-[#F7F6F2] transition-colors shrink-0"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-[#A3B18A] leading-relaxed mb-4">
          We use essential cookies to keep the platform working and optional analytics cookies (Plausible — no tracking, no Google). No advertising cookies. Ever.
        </p>

        {/* Cookie Types */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs">
            <Shield className="w-3.5 h-3.5 text-[#8AD74C]" />
            <span className="text-[#A3B18A]">Essential cookies</span>
            <span className="ml-auto font-mono text-[#8AD74C] text-[10px]">REQUIRED</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <BarChart2 className="w-3.5 h-3.5 text-[#E8D07C]" />
            <span className="text-[#A3B18A]">Anonymous analytics (Plausible)</span>
            <span className="ml-auto font-mono text-[#E8D07C] text-[10px]">OPTIONAL</span>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => accept('essential')}
            className="h-9 bg-[#0F2B18] border border-white/10 rounded-btn text-xs font-medium text-[#F7F6F2] hover:border-[#8AD74C]/30 transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={() => accept('all')}
            className="h-9 bg-[#3FAE2A] hover:bg-[#8AD74C] rounded-btn text-xs font-bold text-[#070B08] transition-colors shadow-lime-glow"
          >
            Accept All
          </button>
        </div>

        <p className="text-[10px] text-[#A3B18A]/60 text-center mt-3">
          <Link href="/cookies" className="hover:text-[#8AD74C] transition-colors">Full Cookie Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
