import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0D0E] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* 4 Developer-Relevant Decorative Visuals */}
      {/* Top-Left: Code Editor Mockup */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} duration={0.9} x={-80} y={0}>
          <div className="w-[120px] sm:w-[160px] md:w-[210px] rounded-xl bg-[#131518]/95 border border-[rgba(232,237,242,0.12)] p-2.5 sm:p-3 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-1.5 pb-2 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]"></span>
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              <span className="text-[9px] font-mono text-[#E8EDF2]/50 ml-1 truncate">CaseTrigger.cls</span>
            </div>
            <div className="mt-2 space-y-1 font-mono text-[9px] sm:text-[10px] text-[#E8EDF2]/80 leading-snug">
              <div className="text-[#10B981]">trigger CaseTrigger on Case</div>
              <div className="text-[#E8EDF2]/60">(before insert) &#123;</div>
              <div className="pl-2 text-[#34D399]">Handler.execute();</div>
              <div className="text-[#E8EDF2]/60">&#125;</div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom-Left: Salesforce Cloud Logo Badge */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} duration={0.9} x={-80} y={0}>
          <div className="w-[100px] sm:w-[140px] md:w-[180px] rounded-2xl bg-gradient-to-br from-[#191D24] to-[#131518] border border-[#10B981]/30 p-4 shadow-2xl flex flex-col items-center justify-center gap-2">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#10B981]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
            <span className="text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-white">
              Salesforce
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Top-Right: Certification Ribbon Badge */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} duration={0.9} x={80} y={0}>
          <div className="w-[120px] sm:w-[160px] md:w-[210px] rounded-2xl bg-[#131518]/95 border border-[#10B981]/30 p-3 shadow-2xl flex items-center gap-3 backdrop-blur-md">
            <div className="w-10 h-10 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 011.397.893v5.604a1 1 0 01-.553.894L11 15.677V18a1 1 0 11-2 0v-2.323l-6.397-3.186A1 1 0 012 11.598V5.994a1 1 0 011.397-.893l1.599.8L9 4.323V3a1 1 0 011-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase font-mono text-[#10B981] font-semibold">Certified</span>
              <span className="text-xs font-heading font-bold text-white leading-tight">6x Verified</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom-Right: Terminal/CLI Card with Blinking Cursor */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} duration={0.9} x={80} y={0}>
          <div className="w-[130px] sm:w-[170px] md:w-[220px] rounded-xl bg-[#090B0D] border border-[rgba(232,237,242,0.12)] p-3 shadow-2xl font-mono text-[9px] sm:text-[10px]">
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10 text-white/40">
              <span>bash &bull; sf-cli</span>
              <span className="text-[#10B981]">online</span>
            </div>
            <div className="text-[#E8EDF2]/80">$ sf project deploy</div>
            <div className="text-[#10B981] mt-1">&check; 124 components</div>
            <div className="mt-1 text-[#10B981] flex items-center gap-1">
              <span>ready</span>
              <span className="inline-block w-1.5 h-3 bg-[#10B981] animate-blink"></span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto w-full">
        {/* Heading: "About Me" */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center whitespace-nowrap mb-10 sm:mb-14 md:mb-16 font-heading"
            style={{ fontSize: 'clamp(3rem, 10vw, 130px)' }}
          >
            About Me
          </h2>
        </FadeIn>

        {/* Scroll-Driven Animated Text */}
        <div className="mb-16 sm:mb-20 md:mb-24 px-4 w-full flex justify-center">
          <AnimatedText text="With over four and a half years building on Salesforce, i focus on Apex, Lightning Web Components, and Field Service solutions, i truly enjoy solving real business problems for enterprise teams. Let's build something useful together!" />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.2} y={30}>
          <ContactButton
            label="Say Hello"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </FadeIn>
      </div>
    </section>
  );
};
