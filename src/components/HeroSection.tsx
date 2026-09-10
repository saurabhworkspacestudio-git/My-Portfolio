import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './ContactButton';
import { GhostButton } from './LiveProjectButton';
import { Magnet } from './Magnet';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0D0E] select-none">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-20 font-heading"
      >
        <a
          href="#about"
          className="text-[#E8EDF2] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-colors duration-200 hover:text-[#10B981]"
        >
          About
        </a>
        <a
          href="#certifications"
          className="text-[#E8EDF2] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-colors duration-200 hover:text-[#10B981]"
        >
          Certifications
        </a>
        <a
          href="#journey"
          className="text-[#E8EDF2] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-colors duration-200 hover:text-[#10B981]"
        >
          Journey
        </a>
        <a
          href="#projects"
          className="text-[#E8EDF2] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-colors duration-200 hover:text-[#10B981]"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="text-[#E8EDF2] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-colors duration-200 hover:text-[#10B981]"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="text-[#E8EDF2] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-colors duration-200 hover:text-[#10B981]"
        >
          Contact
        </a>
      </motion.nav>

      {/* Hero Heading: "Hi, I'm Saurabh" */}
      <div className="w-full overflow-hidden py-2 sm:py-3 flex justify-center items-center z-0 mt-6 sm:mt-4 md:-mt-5">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-[-0.01em] leading-[0.95] whitespace-nowrap w-full text-center font-heading text-[9vw] sm:text-[8vw] md:text-[6.5vw]"
        >
          Hi, I&rsquo;m Saurabh
        </motion.h1>
      </div>

      {/* Hero Visual: Magnet-wrapped Photo Portrait with Soft Emerald Glow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[240px] sm:w-[300px] md:w-[360px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto flex justify-center"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex justify-center"
        >
          <div className="relative w-full aspect-[4/5] rounded-[36px] sm:rounded-[44px] overflow-hidden border border-[rgba(232,237,242,0.12)] bg-gradient-to-b from-[#191D24] to-[#0C0D0E] hero-portrait-glow group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18)_0%,transparent_70%)] pointer-events-none"></div>

            <img
              src="avatar.jpg"
              alt="Saurabh Gaikwad - Salesforce Developer"
              className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-95 transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none relative z-10"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-transparent to-transparent opacity-75 z-10 pointer-events-none"></div>
            
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between px-3 py-1.5 rounded-full bg-[#0C0D0E]/90 backdrop-blur-md border border-[rgba(232,237,242,0.12)] text-[11px] sm:text-xs uppercase tracking-widest text-[#E8EDF2] font-heading">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                Salesforce Dev
              </span>
              <span className="text-[#10B981] font-semibold">5x Certified</span>
            </div>
          </div>
        </Magnet>
      </motion.div>

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
