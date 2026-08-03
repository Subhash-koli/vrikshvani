'use client';

// Root loading skeleton — shown while root layout is loading
import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#070B08] animate-pulse">
      {/* Header Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#070B08]/90 border-b border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F2B18]" />
            <div className="space-y-1">
              <div className="w-28 h-3 bg-[#0F2B18] rounded-full" />
              <div className="w-20 h-2 bg-[#0F2B18]/60 rounded-full" />
            </div>
          </div>
          <div className="hidden lg:flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-16 h-7 bg-[#0F2B18] rounded-full" />
            ))}
          </div>
          <div className="w-24 h-8 bg-[#0F2B18] rounded-btn" />
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="pt-40 pb-24 max-w-4xl mx-auto px-4 space-y-6">
        <div className="w-32 h-6 bg-[#0F2B18] rounded-full mx-auto" />
        <div className="space-y-3">
          <div className="w-full h-10 bg-[#0F2B18] rounded-2xl" />
          <div className="w-4/5 h-10 bg-[#0F2B18] rounded-2xl mx-auto" />
          <div className="w-3/5 h-10 bg-[#0F2B18] rounded-2xl mx-auto" />
        </div>
        <div className="w-2/3 h-5 bg-[#0F2B18]/50 rounded-full mx-auto" />
        <div className="w-1/2 h-5 bg-[#0F2B18]/40 rounded-full mx-auto" />
        <div className="flex gap-4 justify-center pt-4">
          <div className="w-40 h-12 bg-[#0F2B18] rounded-btn" />
          <div className="w-36 h-12 bg-[#0F2B18]/60 rounded-btn" />
        </div>
      </div>

      {/* Card Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-[#0F2B18]/40 border border-white/5 rounded-card p-8 space-y-4">
              <div className="w-10 h-10 bg-[#0F2B18] rounded-xl" />
              <div className="w-3/4 h-5 bg-[#0F2B18] rounded-full" />
              <div className="space-y-2">
                <div className="w-full h-3 bg-[#0F2B18]/60 rounded-full" />
                <div className="w-5/6 h-3 bg-[#0F2B18]/50 rounded-full" />
                <div className="w-4/6 h-3 bg-[#0F2B18]/40 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
