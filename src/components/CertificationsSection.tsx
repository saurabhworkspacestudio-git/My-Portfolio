import React, { useRef, useEffect } from 'react';
import { FadeIn } from './FadeIn';

interface CertDetail {
  code: string;
  name: string;
  description: string;
  logo: string;
}

const detailedCerts: CertDetail[] = [
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

// Row 1 & Row 2 arrangements
const row1Certs = [
  detailedCerts[0],
  detailedCerts[1],
  detailedCerts[2],
  detailedCerts[3],
  detailedCerts[4],
  detailedCerts[0],
  detailedCerts[1],
];

const row2Certs = [
  detailedCerts[3],
  detailedCerts[4],
  detailedCerts[2],
  detailedCerts[0],
  detailedCerts[1],
  detailedCerts[3],
  detailedCerts[4],
];

export const CertificationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      if (rect.bottom >= -150 && rect.top <= windowH + 150) {
        const totalDistance = windowH + rect.height;
        const progress = (windowH - rect.top) / totalDistance;
        const clamped = Math.max(0, Math.min(1, progress));

        const offset1 = 60 - clamped * 700;
        const offset2 = -650 + clamped * 700;

        row1Ref.current.style.transform = `translate3d(${offset1}px, 0, 0)`;
        row2Ref.current.style.transform = `translate3d(${offset2}px, 0, 0)`;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const renderCard = (cert: CertDetail, idx: number) => (
    <div
      key={`${cert.code}-${idx}`}
      className="cert-card-interactive w-[310px] sm:w-[350px] md:w-[380px] shrink-0 rounded-[30px] bg-[#131518] border border-[rgba(232,237,242,0.08)] p-6 flex flex-col justify-between group select-none"
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

        <h3 className="font-bold text-base sm:text-lg text-white font-heading leading-snug group-hover:text-[#34D399] transition-colors">
          {cert.name}
        </h3>
        <p className="text-xs sm:text-sm text-[#E8EDF2]/65 font-sans mt-2.5 font-light leading-relaxed">
          {cert.description}
        </p>
      </div>

      <div className="pt-4 mt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono">
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
  );

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative w-full bg-[#0C0D0E] pt-24 sm:pt-32 md:pt-40 pb-24 sm:pb-32 select-none overflow-hidden"
    >
      {/* Section Header: clean without help text */}
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-10 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 mb-4">
          <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-[#10B981] font-semibold font-mono">
            Trailhead Verified Accreditations
          </span>
        </div>
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase leading-tight tracking-tight font-heading"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 90px)' }}
          >
            Certifications
          </h2>
        </FadeIn>
      </div>

      {/* Dual Opposing Scroll Rows */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 sm:gap-8">
        {/* Row 1: moves right-to-left on scroll */}
        <div
          id="cert-row-1"
          ref={row1Ref}
          className="cert-scroll-row pl-5 sm:pl-8 md:pl-10"
        >
          {row1Certs.map((cert, idx) => renderCard(cert, idx))}
        </div>

        {/* Row 2: moves left-to-right on scroll */}
        <div
          id="cert-row-2"
          ref={row2Ref}
          className="cert-scroll-row pl-5 sm:pl-8 md:pl-10"
        >
          {row2Certs.map((cert, idx) => renderCard(cert, idx))}
        </div>
      </div>
    </section>
  );
};
