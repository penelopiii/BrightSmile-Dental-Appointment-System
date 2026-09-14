import React from 'react';
import {
  Star,
  CalendarCheck,
  Microscope,
  Bell,
  UserCheck,
  Clock3,
} from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const WhyChooseUsSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <Star size={22} className="stroke-[2.2]" />,
      title: 'Experienced Dentists',
      description:
        'Our board-certified professionals have decades of combined pediatric & adult care experience.',
    },
    {
      icon: <CalendarCheck size={22} className="stroke-[2.2]" />,
      title: 'Easy Online Booking',
      description:
        'No phone tags. Lock in your dental slot within seconds via our interactive responsive booking.',
    },
    {
      icon: <Microscope size={22} className="stroke-[2.2]" />,
      title: 'Modern Equipment',
      description:
        'Ultra low-radiation 3D scanners, fully sterilized chairs, and precise digital tracking systems.',
    },
    {
      icon: <Bell size={22} className="stroke-[2.2]" />,
      title: 'Appointment Reminders',
      description:
        'Stay updated with your upcoming appointments and avoid missing your scheduled visit.',
    },
    {
      icon: <UserCheck size={22} className="stroke-[2.2]" />,
      title: 'Personalized Dental Care',
      description:
        'Find the right dental service based on your needs and get care suited to your concerns.',
    },
    {
      icon: <Clock3 size={22} className="stroke-[2.2]" />,
      title: 'Flexible Scheduling',
      description:
        'View available dates and times so you can choose a schedule that works for you.',
    },
  ];

  return (
    <section id="why-choose-us" className="w-full bg-[#0e6cb8] py-16 sm:py-24 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-tight">
            Why<br />Choose Us
          </h2>
        </div>

        {/* 6 Features Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-start group hover:-translate-y-1.5 transition-transform duration-300 cursor-default">
              {/* Circular White Icon Badge with bounce & rotation */}
              <div className="w-12 h-12 rounded-full bg-white text-[#0e6cb8] flex items-center justify-center shadow-md mb-5 group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-xl transition-all duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-bold text-white mb-2.5 tracking-[-0.02em] group-hover:text-blue-100 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-blue-100/90 text-sm sm:text-[15px] leading-relaxed max-w-sm tracking-[-0.01em]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

