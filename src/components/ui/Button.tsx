import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  // rounded-xl (12px) — matches the hero button reference design
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8AD74C]/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    // Cinematic gradient: near-black forest BL → rich lime center → electric citrus TR
    primary: 'bg-gradient-to-tr from-[#031201] via-[#2E9B12] to-[#C4F050] hover:from-[#051A02] hover:via-[#3FAE2A] hover:to-[#D0FF60] text-white font-bold',

    // Dark glass with lime-tinted border — secondary CTA
    secondary: 'bg-[#040E06]/40 hover:bg-[#040E06]/60 text-[#F7F6F2] border border-[#7EC840]/40 hover:border-[#A0D850]/65',

    // Minimal glass outline — tertiary/watch-demo style
    outline: 'bg-[#040E06]/20 border border-[#7EC840]/50 text-white hover:bg-[#040E06]/35 hover:border-[#A0D850]/75',

    // Ghost — nav/text-only links
    ghost: 'text-[#F7F6F2] hover:text-[#8AD74C] hover:bg-white/5',

    // Gold — reserved for research/special tier
    gold: 'bg-[#E8D07C] hover:bg-[#f0df9e] text-[#070B08] font-semibold shadow-gold-glow',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base font-semibold',
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
