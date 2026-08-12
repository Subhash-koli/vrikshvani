'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { FlaskConical } from 'lucide-react';

export const ScarcityBadge: React.FC = () => {
  return (
    <Badge variant="lime" className="px-4 py-1.5 text-xs font-mono">
      <FlaskConical className="w-3.5 h-3.5 text-[#8AD74C]" />
      RESEARCH &amp; PROTOTYPE · <span className="text-[#8AD74C] font-bold">EARLY ACCESS</span>
    </Badge>
  );
};

export default ScarcityBadge;
