import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = '',
  label = 'Say Hello',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full font-medium uppercase tracking-widest text-white transition-all cursor-pointer font-heading px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base border border-[rgba(52,211,153,0.4)] bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#10B981] hover:border-[rgba(52,211,153,0.8)] shadow-[0px_4px_15px_rgba(16,185,129,0.25)] hover:shadow-[0px_6px_22px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 active:scale-95 ${className}`}
    >
      {label}
    </button>
  );
};
