import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = true,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'nidl-glass rounded-card p-6 md:p-8 relative overflow-hidden',
          hoverEffect && 'nidl-glass-hover',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
