import React from 'react';
import { FadeIn } from './FadeIn';

interface CertDetail {
  code: string;
  name: string;
  description: string;
  logo: string;
}

const detailedCerts: CertDetail[] = [
  {
    code: 'PD-II',
    name: 'Salesforce Certified Platform Developer II',
    description: 'Advanced programmatic architecture, asynchronous Apex, complex data modeling, governor optimization, and integration patterns.',
    logo: 'assets/certifications/platform_developer_2.png',
  },
  {
    code: 'PD-I',
    name: 'Salesforce Certified Platform Developer I',
    description: 'Core Apex programmatic architecture, triggers, visual frameworks, and governor-limit compliant data operations.',
    logo: 'assets/certifications/platform_developer_1.png',
  },
  {
    code: 'ADM-201',
    name: 'Salesforce Certified Administrator',
    description: 'Enterprise configuration, role hierarchies, sharing rules, security models, and declarative Flow automation.',
    logo: 'assets/certifications/administrator.png',
  },
  {
    code: 'SCC',
    name: 'Salesforce Certified Sales Cloud Consultant',
    description: 'Sales process architecture, lead-to-opportunity lifecycles, forecasting, territory design, and CRM rollouts.',
    logo: 'assets/certifications/sales_cloud_consultant.png',
  },
  {
    code: 'AGENT',
    name: 'Salesforce Certified Agentforce Specialist',
    description: 'Autonomous AI agents, prompt templates, action topics, Data Cloud grounding, and real-time reasoning workflows.',
    logo: 'assets/certifications/agentforce_specialist.png',
  },
  {
    code: 'AI-ASC',
    name: 'Salesforce Certified AI Associate',
    description: 'Foundational AI fundamentals, machine learning in CRM, generative models, and ethical AI deployment principles.',
    logo: 'assets/certifications/ai_associate.png',
  },
];

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-[#0C0D0E] pt-24 sm:pt-32 md:pt-36 pb-24 sm:pb-32 select-none"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-10 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 mb-4">
          <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-[#10B981] font-semibold font-mono">
            Trailhead Verified Accreditations
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <FadeIn delay={0} y={30}>
            <h2
              className="hero-heading font-black uppercase leading-tight tracking-tight font-heading"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 90px)' }}
            >
              Certifications
            </h2>
          </FadeIn>
          <p className="text-[#E8EDF2]/60 text-sm sm:text-base max-w-md font-light">
            Salesforce-certified accreditations covering programmatic development, enterprise administration, AI architectures, and CRM consulting.
          </p>
        </div>
      </div>

      {/* Normal Responsive Grid Display: 6 Certification Cards */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="flex flex-wrap justify-center gap-6">
          {detailedCerts.map((cert) => (
            <div
              key={cert.code}
              className="cert-card-interactive w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-[30px] bg-[#131518] border border-[rgba(232,237,242,0.08)] p-6 sm:p-7 flex flex-col justify-between group select-none"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/40 border border-white/5 p-2 flex items-center justify-center overflow-hidden group-hover:border-[#10B981]/40 transition-colors">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]" />
                    <img
                      src={cert.logo}
                      alt={`${cert.name} Badge`}
                      className="w-full h-full object-contain relative z-10 filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] text-xs font-mono font-bold uppercase tracking-wider">
                    {cert.code}
                  </span>
                </div>

                <h3 className="font-bold text-lg sm:text-xl text-white font-heading leading-snug group-hover:text-[#34D399] transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#E8EDF2]/65 font-sans mt-3 font-light leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-[11px] font-semibold uppercase tracking-wider">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified
                </span>
                <a
                  href="https://www.salesforce.com/trailblazer/sgaikwad1997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10B981] hover:text-white transition-colors flex items-center gap-1 font-semibold group-hover:translate-x-1 duration-200 pointer-events-auto"
                >
                  Verify &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
