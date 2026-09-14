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
      desktopPosition: 'top-10 lg:top-14 left-6 xl:left-20 -rotate-2',
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
      desktopPosition: 'bottom-10 lg:bottom-16 left-0 xl:left-4 rotate-[1.5deg]',
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
      desktopPosition: 'top-[48%] left-10 xl:left-24 -translate-y-1/2 -rotate-1',
      animationClass: 'animate-float-3',
    },
    {
      name: '@justin_',
      location: 'Manila, Philippines',
      statement: <>I appreciate the staff &amp; dentist so much...</>,
      // Upper-right, shifted near the outer edge
      desktopPosition: 'top-12 lg:top-16 right-4 xl:right-16 rotate-2',
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
      desktopPosition: 'bottom-10 lg:bottom-16 right-10 xl:right-24 -rotate-2',
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
      desktopPosition: 'top-[50%] right-2 xl:right-8 -translate-y-1/2 rotate-1',
      animationClass: 'animate-float-1',
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#ffffff] via-[#eaf5fe] via-45% to-[#bfe2fa] overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-blue-100/60">
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 min-h-[640px] lg:min-h-[760px] xl:min-h-[820px] flex items-center justify-center">
        
        {/* Desktop Scattered Review Cards (Floating organically across the canvas) */}
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`hidden lg:block absolute z-10 bg-white rounded-[24px] p-5 xl:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-slate-100/90 w-[220px] xl:w-[255px] hover:scale-110 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 cursor-pointer ${card.desktopPosition} ${card.animationClass}`}
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

        {/* Center Content Block: Expanded Headline, Subtitle, CTA Buttons */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto py-8 sm:py-14">
          {/* Main Title: Expanded Semibold with "Our Priority." in system blue */}
          <h1 className="text-5xl sm:text-7xl lg:text-[80px] xl:text-[90px] font-semibold tracking-[-0.02em] leading-[1.08] mb-7 sm:mb-9">
            <span className="text-[#102a45] block">Your Smile,</span>
            <span className="text-[#0e6cb8] block">Our Priority.</span>
          </h1>

          {/* Subtitle: Expanded & Relaxed */}
          <p className="text-[#3d526b] text-lg sm:text-xl lg:text-[22px] font-normal leading-relaxed max-w-2xl mb-10 sm:mb-12 tracking-[-0.01em]">
            Experience gentle, professional dental care from online booking to your healthy recovery. Friendly dentists, modern setups.
          </p>

          {/* CTA Buttons: Generous size & padding */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <button
              onClick={onBookAppointment}
              className="w-full sm:w-auto bg-[#0e6cb8] hover:bg-[#0c5ba0] active:scale-[0.98] text-white font-semibold text-base sm:text-lg px-8 py-4 sm:px-9 sm:py-4.5 rounded-2xl shadow-md hover:shadow-lg flex items-center justify-center gap-3 transition-all duration-200 tracking-[-0.01em]"
            >
              <span>Book Appointment</span>
              <Calendar size={21} className="stroke-[2.2]" />
            </button>

            <button
              onClick={onVisitClinic}
              className="w-full sm:w-auto bg-white/85 backdrop-blur-xs hover:bg-white active:scale-[0.98] text-[#0e6cb8] font-semibold text-base sm:text-lg px-8 py-4 sm:px-9 sm:py-4.5 rounded-2xl border-2 border-[#0e6cb8]/40 hover:border-[#0e6cb8] transition-all duration-200 tracking-[-0.01em] shadow-xs"
            >
              Visit Our Clinic
            </button>
          </div>
        </div>

      </div>

      {/* Mobile & Tablet view: 6 cards in a staggered responsive grid with floating animations */}
      <div className="lg:hidden max-w-[1440px] mx-auto px-4 sm:px-6 mt-6">
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
