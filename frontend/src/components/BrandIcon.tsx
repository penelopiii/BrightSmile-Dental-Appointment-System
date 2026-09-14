import React from 'react';

interface BrandIconProps {
  className?: string;
  variant?: 'badge' | 'badge-white' | 'glyph' | 'glyph-white';
  size?: number;
}

export const BrandIcon: React.FC<BrandIconProps> = ({
  className = 'w-9 h-9',
  variant = 'badge',
  size,
}) => {
  const style = size ? { width: size, height: size } : undefined;

  // Standalone glyph in system blue (#0e6cb8)
  if (variant === 'glyph') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0 transition-transform duration-200 group-hover:scale-105`}
        style={style}
      >
        {/* Tooth Body in #0e6cb8 */}
        <path
          d="M50 25 C43 18 33 17 25 24 C18 30 16 41 16 50 C16 61 22 75 30 86 C33 90 38 90 41 84 C44 77 47 64 50 64 C53 64 56 77 59 84 C62 90 67 90 70 86 C78 75 84 61 84 50 C84 41 82 30 75 24 C67 17 57 18 50 25 Z"
          fill="#0e6cb8"
        />
        {/* Smile Cutout */}
        <path
          d="M34 47 C40 58 60 58 66 47"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Sparkle 1 */}
        <path
          d="M78 12 Q78 21 87 21 Q78 21 78 30 Q78 21 69 21 Q78 21 78 12 Z"
          fill="#38bdf8"
        />
        {/* Sparkle 2 (small) */}
        <circle cx="88" cy="33" r="2.5" fill="#38bdf8" />
      </svg>
    );
  }

  // Standalone glyph in pure white
  if (variant === 'glyph-white') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0 transition-transform duration-200 group-hover:scale-105`}
        style={style}
      >
        {/* Tooth Body in white */}
        <path
          d="M50 25 C43 18 33 17 25 24 C18 30 16 41 16 50 C16 61 22 75 30 86 C33 90 38 90 41 84 C44 77 47 64 50 64 C53 64 56 77 59 84 C62 90 67 90 70 86 C78 75 84 61 84 50 C84 41 82 30 75 24 C67 17 57 18 50 25 Z"
          fill="#ffffff"
        />
        {/* Smile Cutout in footer navy / blue */}
        <path
          d="M34 47 C40 58 60 58 66 47"
          stroke="#0e6cb8"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Sparkle 1 */}
        <path
          d="M78 12 Q78 21 87 21 Q78 21 78 30 Q78 21 69 21 Q78 21 78 12 Z"
          fill="#e0f2fe"
        />
        {/* Sparkle 2 (small) */}
        <circle cx="88" cy="33" r="2.5" fill="#e0f2fe" />
      </svg>
    );
  }

  // Badge with white background (for Footer on dark blue)
  if (variant === 'badge-white') {
    return (
      <div
        className={`${className} shrink-0 bg-white rounded-xl shadow-md flex items-center justify-center p-1.5 transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg`}
        style={style}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Tooth in #0e6cb8 */}
          <path
            d="M50 25 C43 18 33 17 25 24 C18 30 16 41 16 50 C16 61 22 75 30 86 C33 90 38 90 41 84 C44 77 47 64 50 64 C53 64 56 77 59 84 C62 90 67 90 70 86 C78 75 84 61 84 50 C84 41 82 30 75 24 C67 17 57 18 50 25 Z"
            fill="#0e6cb8"
          />
          {/* Smile Cutout */}
          <path
            d="M34 47 C40 58 60 58 66 47"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Sparkle 1 */}
          <path
            d="M78 12 Q78 21 87 21 Q78 21 78 30 Q78 21 69 21 Q78 21 78 12 Z"
            fill="#0284c7"
          />
          <circle cx="88" cy="33" r="2.5" fill="#0284c7" />
        </svg>
      </div>
    );
  }

  // Default: Modern vibrant Blue Badge (for Navbar / general UI)
  return (
    <div
      className={`${className} shrink-0 bg-gradient-to-tr from-[#0e6cb8] to-[#258ce0] rounded-xl shadow-sm shadow-blue-600/20 flex items-center justify-center p-1.5 transition-all duration-200 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-blue-600/30`}
      style={style}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Tooth in white */}
        <path
          d="M50 25 C43 18 33 17 25 24 C18 30 16 41 16 50 C16 61 22 75 30 86 C33 90 38 90 41 84 C44 77 47 64 50 64 C53 64 56 77 59 84 C62 90 67 90 70 86 C78 75 84 61 84 50 C84 41 82 30 75 24 C67 17 57 18 50 25 Z"
          fill="#ffffff"
        />
        {/* Smile Cutout */}
        <path
          d="M34 47 C40 58 60 58 66 47"
          stroke="#0e6cb8"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Bright Cyan Sparkle */}
        <path
          d="M78 12 Q78 21 87 21 Q78 21 78 30 Q78 21 69 21 Q78 21 78 12 Z"
          fill="#38bdf8"
        />
        <circle cx="88" cy="33" r="2.5" fill="#bae6fd" />
      </svg>
    </div>
  );
};
