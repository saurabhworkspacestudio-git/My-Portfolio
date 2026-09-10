import React, { useEffect, useRef } from 'react';

interface TechItem {
  name: string;
  icon: string;
}

const row1Items: TechItem[] = [
  { name: 'Apex', icon: '⚡' },
  { name: 'LWC', icon: '</>' },
  { name: 'SOQL / SOSL', icon: '🔍' },
  { name: 'Flows', icon: '⚙️' },
  { name: 'Triggers', icon: '🎯' },
  { name: 'Validation Rules', icon: '🛡️' },
  { name: 'REST API', icon: '🌐' },
  { name: 'JSON', icon: '{ }' },
  { name: 'Postman', icon: '🚀' },
  { name: 'Git', icon: '🌱' },
  { name: 'Salesforce DX', icon: '☁️' },
];

const row2Items: TechItem[] = [
  { name: 'VS Code', icon: '💻' },
  { name: 'Data Loader', icon: '📥' },
  { name: 'Workbench', icon: '🔧' },
  { name: 'Salesforce Inspector', icon: '🔎' },
  { name: 'Sales Cloud', icon: '💼' },
  { name: 'Service Cloud', icon: '🎧' },
  { name: 'Field Service (FSL)', icon: '🚚' },
  { name: 'Veeva CRM', icon: '💊' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'Salesforce Trailhead', icon: '🏔️' },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;

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

  const triple = <T,>(arr: T[]): T[] => [...arr, ...arr, ...arr];

  return (
    <section
      ref={sectionRef}
      id="marquee-section"
      className="relative w-full bg-[#0A0E1A] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3 select-none"
    >
      {/* Row 1: Moves RIGHT on scroll */}
      <div
        ref={row1Ref}
        className="flex gap-3 will-change-transform"
        style={{ transition: 'transform 0.05s linear' }}
      >
        {triple(row1Items).map((item, index) => (
          <div
            key={`row1-${item.name}-${index}`}
            className="shrink-0 w-[220px] h-[130px] rounded-2xl bg-[#111827] border border-[rgba(215,226,234,0.12)] flex flex-col items-center justify-center gap-2.5 p-4 hover:border-[#0176D3] hover:shadow-[0_0_20px_rgba(1,118,211,0.25)] transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0176D3]/15 flex items-center justify-center text-[#0176D3] font-bold font-mono text-lg">
              {item.icon}
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider font-heading text-white">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div
        ref={row2Ref}
        className="flex gap-3 will-change-transform"
        style={{ transition: 'transform 0.05s linear' }}
      >
        {triple(row2Items).map((item, index) => (
          <div
            key={`row2-${item.name}-${index}`}
            className="shrink-0 w-[220px] h-[130px] rounded-2xl bg-[#111827] border border-[rgba(215,226,234,0.12)] flex flex-col items-center justify-center gap-2.5 p-4 hover:border-[#0176D3] hover:shadow-[0_0_20px_rgba(1,118,211,0.25)] transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0176D3]/15 flex items-center justify-center text-[#0176D3] font-bold font-mono text-lg">
              {item.icon}
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider font-heading text-white">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
