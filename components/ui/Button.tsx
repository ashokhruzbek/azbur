
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white' | 'black';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick, disabled }) => {
  const baseStyle = "px-8 py-4 uppercase font-bold tracking-wider text-sm transition-all duration-300 flex items-center gap-2 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-azbur-red text-white hover:bg-[#b00000]",
    outline: "border-2 border-azbur-red text-azbur-red hover:bg-azbur-red hover:text-white",
    white: "bg-white text-azbur-black hover:bg-gray-200",
    black: "bg-azbur-black text-white hover:bg-gray-900"
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-white/10 skew-x-12 z-0" />
    </button>
  );
};
