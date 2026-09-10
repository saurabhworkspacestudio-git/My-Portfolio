import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';

interface ProjectData {
  number: string;
  name: string;
  domain: string;
  summary: string;
  bullets: string[];
  tags: string[];
  leftTopTitle: string;
  leftTopDiagram: React.ReactNode;
  leftBottomTitle: string;
  leftBottomContent: React.ReactNode;
  footerClient: string;
  footerDomain: string;
}

const projects: ProjectData[] = [
  {
    number: '01',
    name: 'Salesforce Field Service',
    domain: 'Bayer • Manufacturing Domain',
    summary:
      'Contributing to a global Field Service (FSL) implementation, building and enhancing solutions across the core FSL object model.',
    bullets: [
      'Developed and enhanced Lightning Web Components (LWC) to improve Field Service user experience',
      'Implemented Apex Classes and Triggers across Work Orders, Assets, Equipment, and Service Appointments',
      'Built Record-Triggered Flows and Validation Rules to automate business processes and improve data quality',
      'Optimized SOQL queries and Apex logic following governor limit best practices',
    ],
    tags: ['Apex', 'LWC', 'Flows', 'SOQL', 'Field Service (FSL)'],
    leftTopTitle: 'FSL Object Architecture',
    leftTopDiagram: (
      <div className="grid grid-cols-3 gap-2 py-2">
        <div className="rounded-xl bg-[#0C0D0E] border border-[#10B981]/30 p-2 text-center text-[10px] font-mono font-semibold text-white">Work Order</div>
        <div className="rounded-xl bg-[#0C0D0E] border border-[#10B981]/30 p-2 text-center text-[10px] font-mono font-semibold text-white">Asset</div>
        <div className="rounded-xl bg-[#0C0D0E] border border-[#10B981]/30 p-2 text-center text-[10px] font-mono font-semibold text-white">Service Appt</div>
      </div>
    ),
    leftBottomTitle: 'Performance • Governor Limits',
    leftBottomContent: (
      <div className="p-3 rounded-2xl bg-[#131518]/90 border border-white/5 space-y-1.5 text-[11px] font-mono text-[#E8EDF2]/80">
        <div className="flex justify-between"><span>SOQL Queries:</span><span className="text-[#10B981]">Batched &bull; Compliant</span></div>
        <div className="flex justify-between"><span>DML Statements:</span><span className="text-[#10B981]">Bulkified</span></div>
        <div className="flex justify-between"><span>Trigger Recursion:</span><span className="text-[#10B981]">Handled</span></div>
      </div>
    ),
    footerClient: 'CLIENT: BAYER',
    footerDomain: 'DOMAIN: MANUFACTURING',
  },
  {
    number: '02',
    name: 'Sales Cloud & Veeva CRM',
    domain: 'Pharmaceutical Domain',
    summary:
      'Built and automated core sales processes for a pharmaceutical-domain implementation on Sales Cloud and Veeva CRM.',
    bullets: [
      'Developed Apex, Triggers, and Lightning Web Components for Sales Cloud and Veeva CRM',
      'Configured business process automation using Flows and Validation Rules',
      'Performed bulk data migration using Data Loader with high data accuracy',
      'Mentored junior developers and contributed to technical discussions and code reviews',
    ],
    tags: ['Apex', 'LWC', 'Data Loader', 'Veeva CRM'],
    leftTopTitle: 'Data Loader Migration Pipeline',
    leftTopDiagram: (
      <div className="grid grid-cols-2 gap-2 py-2">
        <div className="rounded-xl bg-[#0C0D0E] border border-[#10B981]/30 p-2 text-center text-[10px] font-mono font-semibold text-white">Legacy DB</div>
        <div className="rounded-xl bg-[#0C0D0E] border border-[#10B981]/30 p-2 text-center text-[10px] font-mono font-semibold text-white">Veeva CRM</div>
      </div>
    ),
    leftBottomTitle: 'Compliance • Mentorship',
    leftBottomContent: (
      <div className="p-3 rounded-2xl bg-[#131518]/90 border border-white/5 space-y-1.5 text-[11px] font-mono text-[#E8EDF2]/80">
        <div className="flex justify-between"><span>Data Accuracy:</span><span className="text-[#10B981]">High Integrity</span></div>
        <div className="flex justify-between"><span>Automation:</span><span className="text-[#10B981]">Flows &amp; Rules</span></div>
        <div className="flex justify-between"><span>Mentorship:</span><span className="text-[#10B981]">Code Reviews</span></div>
      </div>
    ),
    footerClient: 'CLIENT: COGNIZANT',
    footerDomain: 'DOMAIN: PHARMACEUTICAL',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32"
      style={{ top: `calc(5rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[rgba(232,237,242,0.12)] bg-[#131518] p-4 sm:p-6 md:p-8 flex flex-col gap-6 shadow-[0_30px_60px_rgba(0,0,0,0.95)] will-change-transform"
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-white/10">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-black text-[#E8EDF2] leading-none tracking-tight font-heading"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                {project.number === '01' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#34D399] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                    Current Project
                  </span>
                )}
                <span className="text-xs uppercase tracking-widest text-[#10B981] font-semibold font-mono">
                  {project.domain}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-medium uppercase text-[#E8EDF2] tracking-tight font-heading mt-0.5">
                {project.name}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setDetailsOpen(!detailsOpen)}
            className="live-project-btn ghost-btn inline-flex items-center justify-center rounded-full uppercase tracking-widest font-medium px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-heading cursor-pointer"
          >
            {detailsOpen ? 'Hide Details' : 'View Details'}
          </button>
        </div>

        {/* Bottom Row: 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
          {/* Left Column (40% width) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div
              className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#0C0D0E] border border-[rgba(232,237,242,0.08)] p-5 flex flex-col justify-between"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#10B981] font-mono font-bold">
                  {project.leftTopTitle}
                </span>
                <span className="text-xs text-white/40 font-mono">UML</span>
              </div>
              {project.leftTopDiagram}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#34D399] font-mono text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#0C0D0E] border border-[rgba(232,237,242,0.08)] p-5 flex flex-col justify-between"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#10B981] font-mono font-bold">
                  {project.leftBottomTitle}
                </span>
                <p className="text-xs text-[#E8EDF2]/70 mt-2 font-light leading-relaxed font-sans">
                  {project.summary}
                </p>
              </div>
              {project.leftBottomContent}
            </div>
          </div>

          {/* Right Column (60% width) */}
          <div className="md:col-span-7 h-full">
            <div className="w-full h-full min-h-[260px] md:min-h-[400px] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-gradient-to-br from-[#191D24] to-[#0C0D0E] p-6 sm:p-8 border border-[rgba(232,237,242,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-[#10B981] font-bold font-mono">
                    Core Project Deliverables
                  </span>
                  <div className="flex gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#34D399] text-[10px] font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="mt-4 space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base font-light text-[#E8EDF2]/90 leading-relaxed font-sans">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#10B981] text-lg font-mono">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Details Accordion */}
                <AnimatePresence>
                  {detailsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-white/10 text-xs text-[#E8EDF2]/70 font-mono bg-[#0C0D0E]/60 p-4 rounded-2xl"
                    >
                      <div className="font-bold text-[#10B981] uppercase mb-1">Architecture Highlights:</div>
                      <div>Engineered with modular Apex handler frameworks, bulkified trigger architectures, and automated regression testing.</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#E8EDF2]/50 border-t border-white/10">
                <span>{project.footerClient}</span>
                <span>{project.footerDomain}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0D0E] z-10 px-5 sm:px-8 md:px-10 pt-24 sm:pt-32 pb-32 select-none"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading: "Projects" */}
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-20 sm:mb-24 md:mb-32 font-heading"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Sticky Stacking Cards Container */}
        <div className="relative flex flex-col pb-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
