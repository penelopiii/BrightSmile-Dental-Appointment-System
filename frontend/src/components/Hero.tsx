import React from 'react';
import { Calendar } from 'lucide-react';

interface HeroProps {
  onBookAppointment?: () => void;
  onVisitClinic?: () => void;
}

interface FloatingReviewCard {
  name: string;
  location: string;
  statement: React.ReactNode;
  desktopPosition: string;
  animationClass: string;
}

export const Hero: React.FC<HeroProps> = ({
  onBookAppointment,
  onVisitClinic,
}) => {
  // 6 Scattered Review Cards with unique, organic coordinates & rotations
  const cards: FloatingReviewCard[] = [
    {
      name: '@its_john',
      location: 'Manila, Philippines',
      statement: (
        <>
          The booking process was <strong className="font-bold text-slate-800">incredibly fast.</strong>
        </>
      ),
      // Upper-left, shifted inward toward headline
      desktopPosition: 'top-3 lg:top-5 left-6 xl:left-18 -rotate-2',
      animationClass: 'animate-float-1',
    },
    {
      name: 'Mary Grace',
      location: 'Makati, Philippines',
      statement: (
        <>
          Wow! <strong className="font-bold text-slate-800">Modern &amp; Clean facilities..</strong>
        </>
      ),
      // Lower-left, shifted to far left edge (matching reference image)
      desktopPosition: 'bottom-3 lg:bottom-5 left-0 xl:left-4 rotate-[1.5deg]',
      animationClass: 'animate-float-2',
    },
    {
      name: '@charlotte_k',
      location: 'Quezon City, Philippines',
      statement: (
        <>
          Best dental experience! Completely <strong className="font-bold text-slate-800">painless and gentle.</strong>
        </>
      ),
      // Mid-left, staggered inward between top and bottom
      desktopPosition: 'top-[48%] left-8 xl:left-20 -translate-y-1/2 -rotate-1',
      animationClass: 'animate-float-3',
    },
    {
      name: '@justin_',
      location: 'Manila, Philippines',
      statement: <>I appreciate the staff &amp; dentist so much...</>,
      // Upper-right, shifted near the outer edge
      desktopPosition: 'top-4 lg:top-6 right-4 xl:right-14 rotate-2',
      animationClass: 'animate-float-2',
    },
    {
      name: 'David Tan',
      location: 'Taguig, Philippines',
      statement: (
        <>
          State-of-the-art clinic setup, <strong className="font-bold text-slate-800">super clean</strong> and organized.
        </>
      ),
      // Lower-right, tucked closer to the center
      desktopPosition: 'bottom-3 lg:bottom-5 right-8 xl:right-18 -rotate-2',
      animationClass: 'animate-float-4',
    },
    {
      name: '@sophia_m',
      location: 'Pasig, Philippines',
      statement: (
        <>
          Friendly dentists who explain every step clearly. <strong className="font-bold text-slate-800">10/10 service!</strong>
        </>
      ),
      // Mid-right, pushed outward
      desktopPosition: 'top-[50%] right-2 xl:right-6 -translate-y-1/2 rotate-1',
      animationClass: 'animate-float-1',
    },
  ];

  return (
    <section className="relative w-full bg-[#eef6fc] overflow-hidden pt-5 pb-8 lg:pt-8 lg:pb-12 border-b border-blue-100/60">
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 min-h-[500px] lg:min-h-[560px] xl:min-h-[600px] flex items-center justify-center">
        
        {/* Desktop Scattered Review Cards (Floating organically across the canvas) */}
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`hidden lg:block absolute z-10 bg-white rounded-[24px] p-5 xl:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-slate-100/90 w-[220px] xl:w-[250px] hover:scale-110 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 cursor-pointer ${card.desktopPosition} ${card.animationClass}`}
          >
            <p className="text-[#0e6cb8] font-bold text-base tracking-[-0.02em]">
              {card.name}
            </p>
            <p className="text-slate-400 text-xs mt-0.5 mb-2.5 tracking-[-0.01em]">
              {card.location}
            </p>
            <p className="text-slate-600 text-[13.5px] leading-snug tracking-[-0.01em]">
              {card.statement}
            </p>
          </div>
        ))}

        {/* Center Content Block: Compact, Well-Proportioned Headline, Subtitle, CTA Buttons */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto py-4 sm:py-6">
          {/* Main Title: Semibold with "Our Priority." in system blue */}
          <h1 className="text-5xl sm:text-7xl lg:text-[76px] xl:text-[84px] font-semibold tracking-[-0.02em] leading-[1.08] mb-5 sm:mb-6 animate-fade-in-up">
            <span className="text-[#102a45] block">Your Smile,</span>
            <span className="text-[#0e6cb8] block">Our Priority.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#3d526b] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-7 sm:mb-8 tracking-[-0.01em] animate-fade-in-up [animation-delay:150ms]">
            Experience gentle, professional dental care from online booking to your healthy recovery. Friendly dentists, modern setups.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto animate-fade-in-up [animation-delay:300ms]">
            <button
              onClick={onBookAppointment}
              className="relative overflow-hidden group w-full sm:w-auto bg-[#0e6cb8] hover:bg-[#0c5ba0] active:scale-[0.98] text-white font-semibold text-base sm:text-lg px-8 py-3.5 sm:px-9 sm:py-4 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3 transition-all duration-300 tracking-[-0.01em] cursor-pointer"
            >
              {/* Shimmer sweep effect */}
              <span
                aria-hidden="true"
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer pointer-events-none"
              />
              <span className="relative z-10">Book Appointment</span>
              <Calendar size={20} className="stroke-[2.2] relative z-10 group-hover:scale-110 transition-transform duration-200" />
            </button>

            <button
              onClick={onVisitClinic}
              className="w-full sm:w-auto bg-white/85 backdrop-blur-xs hover:bg-white active:scale-[0.98] text-[#0e6cb8] font-semibold text-base sm:text-lg px-8 py-3.5 sm:px-9 sm:py-4 rounded-2xl border-2 border-[#0e6cb8]/40 hover:border-[#0e6cb8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 tracking-[-0.01em] shadow-xs cursor-pointer"
            >
              Visit Our Clinic
            </button>
          </div>
        </div>

      </div>

      {/* Mobile & Tablet view: 6 cards in a staggered responsive grid with floating animations */}
      <div className="lg:hidden max-w-[1440px] mx-auto px-4 sm:px-6 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-[22px] p-5 shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between hover:scale-[1.02] transition-transform ${card.animationClass}`}
            >
              <div>
                <p className="text-[#0e6cb8] font-bold text-sm tracking-[-0.02em]">
                  {card.name}
                </p>
                <p className="text-slate-400 text-xs tracking-[-0.01em] mt-0.5 mb-2">
                  {card.location}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed tracking-[-0.01em]">
                  {card.statement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
