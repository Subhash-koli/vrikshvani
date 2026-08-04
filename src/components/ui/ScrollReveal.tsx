'use client';

import React, { useRef, useEffect, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation direction */
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  /** Delay in ms before animation starts */
  delay?: number;
  /** Duration of the animation in ms */
  duration?: number;
  /** Translate distance in px */
  distance?: number;
  /** Threshold (0-1) for IntersectionObserver */
  threshold?: number;
  /** Whether to animate only once */
  once?: boolean;
  /** Additional className */
  className?: string;
  /** Stagger index for child elements in a grid */
  stagger?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  distance = 30,
  threshold = 0.15,
  once = true,
  className = '',
  stagger = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect user's motion preferences
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  const totalDelay = delay + stagger * 100;

  const getTransform = () => {
    switch (direction) {
      case 'up':    return `translateY(${distance}px)`;
      case 'down':  return `translateY(-${distance}px)`;
      case 'left':  return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
      case 'fade':  return 'none';
      default:      return `translateY(${distance}px)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${totalDelay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${totalDelay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
