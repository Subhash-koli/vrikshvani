'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, Loader2, ArrowRight } from 'lucide-react';

interface SearchResult {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  url: string;
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        if (data.success) {
          setResults(data.results || []);
        }
      } catch (err) {
        console.error('Search query error:', err);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-[#070B08]/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-2xl bg-[#070B08] border border-[#8AD74C]/30 rounded-2xl shadow-2xl overflow-hidden space-y-0">
        
        {/* Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-[#0F2B18]/50">
          <Search className="w-5 h-5 text-[#8AD74C] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search species, care guides, research, API..."
            className="w-full bg-transparent text-[#F7F6F2] placeholder-[#A3B18A] text-base focus:outline-none font-sans"
          />
          {loading && <Loader2 className="w-4 h-4 text-[#8AD74C] animate-spin shrink-0" />}
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 text-[#A3B18A] hover:text-[#F7F6F2] transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {!query && (
            <div className="text-center py-8 space-y-2">
              <p className="text-sm text-[#A3B18A]">Try searching for <span className="text-[#8AD74C] font-mono">"Monstera"</span>, <span className="text-[#8AD74C] font-mono">"VPD"</span>, <span className="text-[#8AD74C] font-mono">"Whitepaper"</span>, or <span className="text-[#8AD74C] font-mono">"API"</span></p>
              <div className="flex justify-center gap-2 pt-2">
                <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[11px] font-mono text-[#A3B18A]">ESC</kbd> to close
              </div>
            </div>
          )}

          {query && !loading && results.length === 0 && (
            <div className="text-center py-8 text-sm text-[#A3B18A]">
              No results found for &quot;{query}&quot;
            </div>
          )}

          {results.map((res) => (
            <Link
              key={res.id}
              href={res.url}
              onClick={onClose}
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#0F2B18]/30 hover:bg-[#0F2B18] border border-white/5 hover:border-[#8AD74C]/30 transition-all group"
            >
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8AD74C] px-2 py-0.5 rounded bg-[#8AD74C]/10 border border-[#8AD74C]/20 shrink-0">
                    {res.type}
                  </span>
                  <span className="text-sm font-semibold text-[#F7F6F2] group-hover:text-[#8AD74C] transition-colors truncate">
                    {res.title}
                  </span>
                </div>
                <p className="text-xs text-[#A3B18A] truncate">{res.subtitle}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#A3B18A] group-hover:text-[#8AD74C] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 bg-[#030504] border-t border-white/5 flex justify-between items-center text-[11px] text-[#A3B18A] font-mono">
          <span>Vriksh Vani Global Search</span>
          <span>{results.length} result(s)</span>
        </div>
      </div>
    </div>
  );
}
