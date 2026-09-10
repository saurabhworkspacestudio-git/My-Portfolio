import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';

interface SkillCategory {
  number: string;
  name: string;
  description: string;
  chips: string[];
}

const skillsData: SkillCategory[] = [
  {
    number: '01',
    name: 'Platform',
    description: 'Specialized enterprise clouds and mission-critical object architectures.',
    chips: ['Sales Cloud', 'Service Cloud', 'Salesforce Field Service (FSL)', 'Veeva CRM'],
  },
  {
    number: '02',
    name: 'Development',
    description: 'Custom programmatic engineering across front-end and back-end logic.',
    chips: ['Apex', 'Lightning Web Components (LWC)', 'JavaScript', 'SOQL', 'SOSL'],
  },
  {
    number: '03',
    name: 'Automation',
    description: 'Declarative and programmatic workflows, business rules, and trigger frameworks.',
    chips: ['Flows', 'Triggers', 'Validation Rules', 'Workflow Rules', 'Process Builder'],
  },
  {
    number: '04',
    name: 'Integration',
    description: 'External connectivity, RESTful interfaces, and secure data contracts.',
    chips: ['REST API', 'JSON', 'Postman'],
  },
  {
    number: '05',
    name: 'Tools',
    description: 'Professional toolbelt for CI/CD, local development, and metadata operations.',
    chips: ['Git', 'Salesforce DX', 'VS Code', 'Data Loader', 'Workbench', 'Salesforce Inspector'],
  },
];

export const SkillsSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleCategory = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="skills"
      className="relative w-full bg-[#FFFFFF] text-[#0C0D0E] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-28 select-none z-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading: "Skills" */}
        <FadeIn delay={0} y={30}>
          <h2
            className="font-black uppercase text-[#0C0D0E] text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 font-heading"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* Vertical List with Expandable Chips on Click */}
        <div className="flex flex-col border-t border-[rgba(12,13,14,0.15)]">
          {skillsData.map((category, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <FadeIn key={category.number} delay={index * 0.1} y={25}>
                <div className="border-b border-[rgba(12,13,14,0.15)] py-8 sm:py-10 md:py-12">
                  <div
                    onClick={() => toggleCategory(index)}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10 cursor-pointer group"
                  >
                    {/* Number */}
                    <div
                      className="font-black text-[#0C0D0E] leading-none shrink-0 tracking-tight font-heading group-hover:text-[#10B981] transition-colors"
                      style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                    >
                      {category.number}
                    </div>

                    {/* Name & Subtext */}
                    <div className="flex flex-col gap-2 flex-grow">
                      <div className="flex items-center justify-between">
                        <h3
                          className="font-medium uppercase tracking-tight text-[#0C0D0E] leading-tight font-heading"
                          style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                        >
                          {category.name}
                        </h3>
                        <span className="text-sm font-mono text-[#10B981] font-semibold">
                          {isExpanded ? '▲ Collapse' : '▼ Expand'}
                        </span>
                      </div>
                      <p className="font-light leading-relaxed text-[#0C0D0E] opacity-60 text-sm sm:text-base font-sans">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Expandable Chips */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-2.5 mt-6 pt-4 border-t border-[#0C0D0E]/10">
                          {category.chips.map((chip, chipIndex) => (
                            <motion.span
                              key={chip}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: chipIndex * 0.04 }}
                              className="px-4 py-2 rounded-full border border-[rgba(16,185,129,0.35)] bg-[#10B981]/10 text-[#0C0D0E] font-medium text-xs sm:text-sm uppercase tracking-wider font-heading"
                            >
                              {chip}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
