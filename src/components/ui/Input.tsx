import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="block text-xs font-medium text-[#A3B18A] uppercase tracking-wider">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={twMerge(
            clsx(
              'w-full bg-[#0F2B18]/50 border border-white/10 rounded-btn px-4 py-3 text-sm text-[#F7F6F2] placeholder-white/30 focus:outline-none focus:border-[#8AD74C] focus:ring-1 focus:ring-[#8AD74C] transition-all duration-200',
              error && 'border-red-500/50 focus:border-red-500',
              className
            )
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
