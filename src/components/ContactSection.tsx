import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';

export const ContactSection: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-[#0C0D0E] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 py-20 px-6 sm:px-10 border-t border-[rgba(232,237,242,0.08)] flex flex-col items-center justify-center text-center gap-8 select-none"
    >
      <span className="text-xs uppercase tracking-widest text-[#10B981] font-semibold font-mono">
        Get in Touch
      </span>

      {/* Closing line */}
      <FadeIn delay={0} y={20}>
        <h3
          className="hero-heading font-black uppercase tracking-tight leading-none font-heading"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          Let&apos;s build something useful.
        </h3>
      </FadeIn>

      {/* Contact Button */}
      <FadeIn delay={0.1} y={20}>
        <ContactButton
          label="Say Hello"
          onClick={() => (window.location.href = 'mailto:saurabhgaikwad2097@gmail.com')}
        />
      </FadeIn>

      {/* Links: LinkedIn, Trailhead, Email, Resume */}
      <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm uppercase tracking-wider text-[#E8EDF2]/70 font-heading">
        <a
          href="https://linkedin.com/in/saurabh-sanjay-gaikwad-02916a1b2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#10B981] transition-colors flex items-center gap-1"
        >
          LinkedIn &rarr;
        </a>
        <a
          href="https://www.salesforce.com/trailblazer/sgaikwad1997"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#10B981] transition-colors flex items-center gap-1"
        >
          Trailhead &rarr;
        </a>
        <a
          href="mailto:saurabhgaikwad2097@gmail.com"
          className="hover:text-[#10B981] transition-colors"
        >
          saurabhgaikwad2097@gmail.com
        </a>
        <a
          href="assets/Saurabh_Gaikwad_Resume.pdf"
          download
          className="hover:text-[#34D399] transition-colors font-semibold text-[#10B981] flex items-center gap-1"
        >
          Resume.pdf &darr;
        </a>
      </div>

      <div className="pt-8 text-[#E8EDF2]/40 text-xs uppercase tracking-widest font-mono">
        &copy; 2026 Saurabh Gaikwad &bull; Salesforce Developer &bull; All Rights Reserved
      </div>
    </footer>
  );
};
