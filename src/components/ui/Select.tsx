import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string }[];
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, className, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="block text-xs font-medium text-[#A3B18A] uppercase tracking-wider">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={twMerge(
            clsx(
              'w-full bg-[#0F2B18]/70 border border-white/10 rounded-btn px-4 py-3 text-sm text-[#F7F6F2] focus:outline-none focus:border-[#8AD74C] focus:ring-1 focus:ring-[#8AD74C] transition-all duration-200 cursor-pointer',
              error && 'border-red-500/50 focus:border-red-500',
              className
            )
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#070B08] text-[#F7F6F2]">
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
