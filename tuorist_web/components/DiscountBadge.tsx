import React from 'react';

interface DiscountBadgeProps {
  percentage: number;
  className?: string;
}

export default function DiscountBadge({ percentage, className = '' }: DiscountBadgeProps) {
  if (!percentage || percentage <= 0) return null;
  
  return (
    <div className={`inline-flex items-center justify-center bg-[#2ea4ff] text-white text-[17px] font-medium tracking-wide px-6 py-2 rounded-full shadow-md whitespace-nowrap ${className}`}>
      {percentage}% off
    </div>
  );
}
