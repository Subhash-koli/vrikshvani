import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'lime' | 'gold' | 'glass' | 'outline';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'lime',
  className,
  children,
  ...props
}) => {
  const variants = {
    lime: 'bg-[#8AD74C]/15 text-[#8AD74C] border border-[#8AD74C]/30',
    gold: 'bg-[#E8D07C]/15 text-[#E8D07C] border border-[#E8D07C]/30',
    glass: 'bg-[#0F2B18]/80 text-[#F7F6F2] border border-white/10 backdrop-blur-md',
    outline: 'border border-white/20 text-[#A3B18A]',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono tracking-wider uppercase rounded-full',
          variants[variant],
          className
        )
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
