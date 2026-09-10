import React from 'react';
import { HeroSection } from './components/HeroSection';
import { CertificationsSection } from './components/CertificationsSection';
import { JourneySection } from './components/JourneySection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#0C0D0E] text-[#E8EDF2] font-['Inter',sans-serif] overflow-x-clip select-none">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Certifications Section (Scroll-Driven Opposing Horizontal Rows) */}
      <CertificationsSection />

      {/* 3. Journey Section (Career Timeline) */}
      <JourneySection />

      {/* 4. About Section */}
      <AboutSection />

      {/* 5. Projects Section (Sticky Stacking Cards) */}
      <ProjectsSection />

      {/* 6. Skills Section (Expandable Categories) */}
      <SkillsSection />

      {/* 7. Contact Section */}
      <ContactSection />
    </div>
  );
};

export default App;
