import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white' | 'black'; // default = colored (Black text), white = White text
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default' }) => {
  const textColor = variant === 'white' ? '#FFFFFF' : '#000000';
  const subTextColor = '#D80000'; // Always red as per brand identity
  const symbolBg = '#D80000';
  const symbolText = '#FFFFFF';

  return (
    <svg 
      viewBox="0 0 320 80" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AZBUR Logo"
    >
      {/* Symbol: Red Rounded Square */}
      <rect x="0" y="5" width="70" height="70" rx="12" fill={symbolBg} />
      
      {/* Symbol: Stylized 'A' */}
      <path 
        d="M35 18 L18 60 H28 L35 42 L42 60 H52 L35 18 Z" 
        fill={symbolText} 
      />
      
      {/* Text: AZBUR */}
      <text 
        x="85" 
        y="50" 
        fontFamily="'Playfair Display', serif" 
        fontSize="54" 
        fontWeight="900" 
        fill={textColor}
      >
        AZBUR
      </text>
      
      {/* Subtext: alyumin PVC door & windows */}
      <text 
        x="86" 
        y="70" 
        fontFamily="'Manrope', sans-serif" 
        fontSize="15" 
        fontWeight="500" 
        fill={subTextColor}
        letterSpacing="0.02em"
      >
        alyumin PVC door & windows
      </text>
    </svg>
  );
};