import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './ContactButton';
import { GhostButton } from './LiveProjectButton';
import { Magnet } from './Magnet';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0D0E] pt-20 sm:pt-24 select-none">
      {/* Floating Frosted Obsidian Island Top Bar */}
      <motion.header
        initial={{ opacity: 0, y: -20, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-3 sm:top-5 left-1/2 w-[94%] max-w-6xl z-50 pointer-events-auto"
      >
        <div className="w-full px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#0C0D0E]/85 backdrop-blur-xl border border-[rgba(232,237,242,0.14)] shadow-[0_12px_35px_rgba(0,0,0,0.7),0_0_20px_rgba(16,185,129,0.08)] flex items-center justify-between gap-3">
          {/* Brand Monogram & Live Status */}
          <a href="#" className="flex items-center gap-2.5 text-[#E8EDF2] group hover:text-white transition-colors pl-1">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#10B981] via-[#059669] to-[#34D399] flex items-center justify-center font-bold text-[#0C0D0E] font-heading text-xs sm:text-sm shadow-[0_0_15px_rgba(16,185,129,0.4)] border border-emerald-400/30 group-hover:scale-105 transition-transform">
              SG
            </span>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-tight font-heading leading-tight text-white">
                Saurabh Gaikwad
              </span>
              <span className="text-[10px] text-[#10B981] font-mono flex items-center gap-1.5 leading-none mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                Salesforce Dev &bull; 6x Cert
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-heading tracking-wider uppercase bg-white/[0.04] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <a href="#about" className="topbar-nav-link px-3.5 py-1.5 rounded-full transition-all text-[#E8EDF2]/75 hover:text-white hover:bg-white/10">About</a>
            <a href="#certifications" className="topbar-nav-link px-3.5 py-1.5 rounded-full transition-all text-[#E8EDF2]/75 hover:text-white hover:bg-white/10">Certifications</a>
            <a href="#journey" className="topbar-nav-link px-3.5 py-1.5 rounded-full transition-all text-[#E8EDF2]/75 hover:text-white hover:bg-white/10">Journey</a>
            <a href="#projects" className="topbar-nav-link px-3.5 py-1.5 rounded-full transition-all text-[#E8EDF2]/75 hover:text-white hover:bg-white/10">Projects</a>
            <a href="#skills" className="topbar-nav-link px-3.5 py-1.5 rounded-full transition-all text-[#E8EDF2]/75 hover:text-white hover:bg-white/10">Skills</a>
            <a href="#contact" className="topbar-nav-link px-3.5 py-1.5 rounded-full transition-all text-[#E8EDF2]/75 hover:text-white hover:bg-white/10">Contact</a>
          </nav>

          {/* Right Actions: Resume & Contact Button */}
          <div className="flex items-center gap-2 sm:gap-2.5 pr-1">
            <a
              href="assets/Saurabh_Gaikwad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bubble-btn bubble-btn-ghost px-3.5 sm:px-4 py-1.5 rounded-full text-[#E8EDF2] hover:text-[#34D399] hover:bg-white/5 border border-white/10 text-xs font-mono font-medium transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Resume</span>
              <span className="text-[#10B981]">&darr;</span>
            </a>
            <a
              href="#contact"
              className="bubble-btn bubble-btn-primary px-4 sm:px-5 py-1.5 rounded-full text-[#0C0D0E] font-heading font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#10B981] to-[#34D399] hover:from-[#34D399] hover:to-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Let&rsquo;s Talk
            </a>
          </div>
        </div>
      </motion.header>

      {/* Center Hero Content: Name & Circular Portrait in Unified Harmonious Stack */}
      <div className="flex-1 w-full flex flex-col items-center justify-center z-10 px-4 my-auto gap-3 sm:gap-4 md:gap-5">
        {/* Hero Heading: "Hi, I'm Saurabh" */}
        <div className="w-full overflow-hidden flex justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="hero-heading font-black uppercase tracking-[-0.01em] leading-[0.95] whitespace-nowrap w-full text-center font-heading text-[8.5vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[4.8vw]"
          >
            Hi, I&rsquo;m Saurabh
          </motion.h1>
        </div>

        {/* Hero Visual: Magnet-wrapped Circular Photo Portrait with Soft Emerald Glow */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-[220px] sm:w-[260px] md:w-[290px] lg:w-[310px] pointer-events-auto flex justify-center pb-2"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            <div className="relative w-full aspect-square rounded-full border-2 border-[rgba(232,237,242,0.18)] bg-gradient-to-b from-[#191D24] to-[#0C0D0E] hero-portrait-glow group">
              {/* Circular overflow-hidden container for image & overlays */}
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.16)_0%,transparent_70%)] pointer-events-none z-10"></div>

                <img
                  src="avatar.png"
                  alt="Saurabh Gaikwad - Salesforce Developer"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-100 transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none relative z-10"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E]/60 via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none z-10"></div>
              </div>

              {/* Professional floating badge anchored at bottom center */}
              <div className="absolute -bottom-3 sm:-bottom-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1 rounded-full bg-[#0C0D0E]/95 backdrop-blur-md border border-[rgba(232,237,242,0.18)] shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(16,185,129,0.2)] text-[10px] sm:text-xs uppercase tracking-widest text-[#E8EDF2] font-heading whitespace-nowrap">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                  Salesforce Dev
                </span>
                <span className="text-[#10B981] font-semibold">6x Certified</span>
              </div>
            </div>
          </Magnet>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-1 max-w-[220px] sm:max-w-[320px] md:max-w-[380px]"
        >
          <p
            className="text-[#E8EDF2] font-light uppercase tracking-wide leading-snug font-heading"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Building Salesforce solutions for real business problems.
          </p>
          <span className="text-[#E8EDF2] opacity-60 text-xs md:text-sm font-sans">
            Salesforce Developer &bull; 4.5 Years &bull; Apex, LWC &amp; Field Service
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-end sm:items-center gap-3"
        >
          <GhostButton href="#projects" label="View My Work" />
          <ContactButton
            label="Connect on LinkedIn"
            onClick={() => window.open('https://linkedin.com/in/saurabh-sanjay-gaikwad-02916a1b2', '_blank')}
          />
        </motion.div>
      </div>
    </section>
  );
};
