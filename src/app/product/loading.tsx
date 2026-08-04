import React from 'react';

export default function ProductLoading() {
  return (
    <div className="min-h-screen bg-[#070B08] animate-pulse">
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product image skeleton */}
          <div className="bg-[#0F2B18]/40 border border-white/5 rounded-container min-h-[420px]" />
          {/* Details skeleton */}
          <div className="space-y-6 pt-8">
            <div className="w-32 h-6 bg-[#0F2B18] rounded-full" />
            <div className="space-y-3">
              <div className="w-full h-10 bg-[#0F2B18] rounded-2xl" />
              <div className="w-4/5 h-10 bg-[#0F2B18] rounded-2xl" />
            </div>
            <div className="space-y-2">
              <div className="w-full h-4 bg-[#0F2B18]/60 rounded-full" />
              <div className="w-5/6 h-4 bg-[#0F2B18]/50 rounded-full" />
              <div className="w-4/6 h-4 bg-[#0F2B18]/40 rounded-full" />
            </div>
            <div className="flex gap-4 pt-4">
              <div className="w-48 h-12 bg-[#0F2B18] rounded-btn" />
              <div className="w-40 h-12 bg-[#0F2B18]/60 rounded-btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
