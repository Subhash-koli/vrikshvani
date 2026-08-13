'use client';

import React, { type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  stagger?: number;
}

/**
 * ScrollReveal wrapper that guarantees 100% content visibility across all browsers,
 * viewports, and hydration states without blocking opacity or rendering blanks.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`transition-all duration-500 ease-out ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
