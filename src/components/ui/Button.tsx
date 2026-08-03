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
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-btn transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-vibrant/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary: 'bg-[#3FAE2A] hover:bg-[#8AD74C] text-[#070B08] font-semibold shadow-lime-glow hover:shadow-lime-glow',
    secondary: 'bg-[#0F2B18]/70 hover:bg-[#0F2B18]/90 text-[#F7F6F2] border border-white/10 backdrop-blur-2xl hover:border-[#8AD74C]/40',
    outline: 'border border-[#8AD74C] text-[#8AD74C] hover:bg-[#8AD74C]/10',
    ghost: 'text-[#F7F6F2] hover:text-[#8AD74C] hover:bg-white/5',
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
