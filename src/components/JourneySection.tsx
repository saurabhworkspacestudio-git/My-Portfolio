import React from 'react';
import { FadeIn } from './FadeIn';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: '2021',
    title: 'B.E. Computer Engineering',
    description: "JSPM's Imperial College of Engineering and Research, Pune.",
  },
  {
    year: 'Jul 2021',
    title: 'Cognizant Technology Solutions',
    description: 'Joined as Salesforce Developer, kicking off deep enterprise cloud specialization.',
  },
  {
    year: 'Sales Cloud',
    title: 'Veeva CRM • Pharma',
    description: 'Pharmaceutical domain: Apex, Triggers, LWC, Flows, Validation Rules, data migration.',
  },
  {
    year: 'Mar 2026',
    title: 'Field Service (Bayer)',
    description: "Moved onto Bayer's global Field Service (FSL) implementation, Manufacturing domain.",
  },
  {
    year: 'Today',
    title: 'Still Learning • Building',
    description: '6x Certified Trailblazer advancing into Platform Developer II, Agentforce AI, Async Apex, and modern architectures.',
  },
];

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="relative w-full bg-[#0C0D0E] px-5 sm:px-8 md:px-10 py-20 sm:py-28 select-none">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-20 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#10B981] font-semibold font-mono">
              Experience &bull; Career Path
            </span>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-3xl sm:text-5xl md:text-6xl mt-2 font-heading">
              Career Journey
            </h2>
          </div>
          <p className="text-[#E8EDF2] opacity-60 text-sm sm:text-base max-w-md font-light font-sans">
            Each milestone connected along a timeline of continuous learning, complex CRM architectures, and enterprise delivery.
          </p>
        </div>

        {/* Timeline Grid with Connecting Line */}
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-6 right-6 h-[1.5px] bg-[#10B981]/25 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative z-10">
            {milestones.map((milestone, i) => (
              <FadeIn key={milestone.year} delay={i * 0.12} y={20}>
                <div className="rounded-3xl border border-[rgba(232,237,242,0.08)] bg-[#131518] p-6 flex flex-col justify-between hover:border-[#10B981]/40 transition-all duration-300 group h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#10B981] font-heading">
                      {milestone.year}
                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#10B981] ring-4 ring-[#10B981]/20"></span>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-medium text-base sm:text-lg text-white font-heading uppercase leading-tight">
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-[#E8EDF2] opacity-60 mt-2 font-light leading-relaxed font-sans">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
