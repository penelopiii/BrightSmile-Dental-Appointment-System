import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import MapPlaceholder from './MapPlaceholder';

export const FindUsSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-[#0e6cb8] stroke-[2.2] flex-shrink-0" />,
      text: '1214 ABC Hills, 0987 Makati, Philippines',
      href: 'https://maps.google.com/?q=Makati,Philippines',
      isExternal: true,
    },
    {
      icon: <Phone size={24} className="text-[#0e6cb8] stroke-[2.2] flex-shrink-0" />,
      text: '(555) 123-4567',
      href: 'tel:+15551234567',
      isExternal: false,
    },
    {
      icon: <Mail size={24} className="text-[#0e6cb8] stroke-[2.2] flex-shrink-0" />,
      text: 'hello@brightsmileclinic.com',
      href: 'mailto:hello@brightsmileclinic.com',
      isExternal: false,
    },
  ];

  return (
    <section id="contact" className="w-full bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102a45] tracking-[-0.02em] mb-8 sm:mb-10">
          Find Us
        </h2>

        {/* Map Container */}
        <div className="w-full mb-8 sm:mb-12">
          <MapPlaceholder />
        </div>

        {/* Contact Information List */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.href}
              target={info.isExternal ? '_blank' : undefined}
              rel={info.isExternal ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 text-slate-700 hover:text-[#0e6cb8] transition-colors group w-fit"
            >
              <div className="p-1 group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <span className="text-base sm:text-lg lg:text-xl font-medium text-[#2d3f56] group-hover:text-[#0e6cb8] tracking-[-0.01em]">
                {info.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;

