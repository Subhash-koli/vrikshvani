import React from 'react';

interface ChapterHeaderProps {
  number: string;
  title: string;
  subtitle: string;
}

export const ChapterHeader: React.FC<ChapterHeaderProps> = ({ number, title, subtitle }) => {
  return (
    <div className="py-12 bg-[#030504] border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs font-bold text-[#8AD74C] bg-[#8AD74C]/10 border border-[#8AD74C]/30 px-3 py-1 rounded-full uppercase tracking-widest">
            Chapter {number}
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F7F6F2] tracking-wide">
            {title}
          </h2>
        </div>
        <p className="text-xs font-mono text-[#A3B18A] tracking-wider uppercase">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ChapterHeader;
