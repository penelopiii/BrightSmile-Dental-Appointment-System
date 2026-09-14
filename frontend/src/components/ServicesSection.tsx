import React from 'react';
import { Clock } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  price: string;
  duration: string;
}

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  const services: ServiceItem[] = [
    {
      title: 'Dental\nCleaning',
      description: 'Deep hygiene and calculus scaling',
      price: '₱999',
      duration: '45 min',
    },
    {
      title: 'Tooth\nExtraction',
      description: 'Safe, rapid and painless minor surgery',
      price: '₱3200',
      duration: '60 min',
    },
    {
      title: 'Brace\nConsultation',
      description: 'Orthodontics and path to optimal alignment',
      price: '₱2500',
      duration: '120 min',
    },
  ];

  return (
    <section id="services" className="w-full bg-white pt-10 pb-16 sm:pt-12 sm:pb-20 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102a45] tracking-[-0.02em] mb-3">
            Our Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg tracking-[-0.01em]">
            State of the art treatments tailored specifically for your dental health
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => onSelectService?.(service)}
              className="group bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_28px_rgba(0,0,0,0.06)] border border-slate-100/90 flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(14,108,184,0.12)] hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 cursor-pointer"
            >
              {/* Top part: Title & Description */}
              <div>
                <h3 className="text-[#0e6cb8] font-extrabold text-2xl sm:text-[26px] leading-tight whitespace-pre-line group-hover:text-[#0c5ba0] transition-colors tracking-[-0.02em]">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm sm:text-[15px] mt-3 leading-relaxed tracking-[-0.01em]">
                  {service.description}
                </p>
              </div>

              {/* Bottom part: Price & Duration */}
              <div className="pt-8 sm:pt-10 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-black text-[#0e6cb8] tracking-[-0.02em] group-hover:scale-105 transition-transform duration-200 origin-left inline-block">
                  {service.price}
                </span>

                <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
                  <Clock size={16} className="text-slate-400 stroke-[2.2] group-hover:rotate-45 transition-transform duration-300" />
                  <span>{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

