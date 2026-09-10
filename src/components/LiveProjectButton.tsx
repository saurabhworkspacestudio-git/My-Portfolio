import React from 'react';

interface GhostButtonProps {
  href?: string;
  className?: string;
  label?: string;
  onClick?: () => void;
}

export const GhostButton: React.FC<GhostButtonProps> = ({
  href = '#',
  className = '',
  label = 'View My Work',
  onClick,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`live-project-btn ghost-btn inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest font-heading transition-all duration-200 hover:bg-[#D7E2EA]/10 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base ${className}`}
    >
      {label}
    </a>
  );
};

export const LiveProjectButton = GhostButton;
