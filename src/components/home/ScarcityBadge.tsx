'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Sparkles } from 'lucide-react';

export const ScarcityBadge: React.FC = () => {
  const [slotsLeft, setSlotsLeft] = useState(88);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlotsLeft((prev) => (prev > 12 ? prev - 1 : prev));
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Badge variant="lime" className="px-4 py-1.5 text-xs font-mono">
      <Sparkles className="w-3.5 h-3.5 text-[#8AD74C] animate-pulse" />
      Batch 01 Founding Reservation · <span className="text-[#8AD74C] font-bold">{slotsLeft} Units Remaining</span>
    </Badge>
  );
};

export default ScarcityBadge;
