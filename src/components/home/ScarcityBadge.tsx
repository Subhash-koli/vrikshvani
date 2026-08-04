'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Sparkles } from 'lucide-react';

export const ScarcityBadge: React.FC = () => {
  return (
    <Badge variant="lime" className="px-4 py-1.5 text-xs font-mono">
      <Sparkles className="w-3.5 h-3.5 text-[#8AD74C]" />
      Batch 01 Founding Access · <span className="text-[#8AD74C] font-bold">Limited Allocation</span>
    </Badge>
  );
};

export default ScarcityBadge;
