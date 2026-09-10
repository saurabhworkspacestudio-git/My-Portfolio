import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    number: '01',
    name: 'Apex & LWC Architecture',
    description:
      'End-to-end development of custom Lightning Web Components, Apex controllers, and scalable trigger frameworks designed for peak performance and strict governor limits.',
  },
  {
    number: '02',
    name: 'Salesforce Field Service (FSL)',
    description:
      'Engineering robust field operations across Work Orders, Service Appointments, Inventory, and Asset lifecycles for global manufacturing and service enterprises.',
  },
  {
    number: '03',
    name: 'Sales Cloud & Veeva CRM',
    description:
      'Tailored CRM implementations for pharmaceutical and enterprise domains, optimizing lead-to-opportunity lifecycles and compliance automation.',
  },
  {
    number: '04',
    name: 'Process Automation & Flows',
    description:
      'Crafting high-efficiency Record-Triggered Flows, complex business logic, validation architectures, and high-volume data migration strategies.',
  },
  {
    number: '05',
    name: 'System Integrations & APIs',
    description:
      'Connecting Salesforce to external enterprise ERPs and third-party systems via secure REST/SOAP APIs, JSON payloads, and real-time event messaging.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none z-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <h2
            className="font-black uppercase text-[#0C0C0C] text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Expertise
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {servicesData.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.1} y={25}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] gap-6 sm:gap-10">
                {/* Number on the left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 tracking-tight"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Name & Description on the right */}
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h3
                    className="font-medium uppercase tracking-tight text-[#0C0C0C] leading-tight"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
