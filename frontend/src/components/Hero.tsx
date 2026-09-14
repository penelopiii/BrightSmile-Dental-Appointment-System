import React from 'react';
import { Calendar } from 'lucide-react';

interface HeroProps {
  onBookAppointment?: () => void;
  onVisitClinic?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookAppointment,
  onVisitClinic,
}) => {
  return (
    <section className="relative w-full bg-[#f0f7fd] overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-blue-100/40">
      {/* Big Watermark Typography in Background */}
      <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 z-0">
        {/* Top Left: 12 Years operating */}
        <div className="absolute top-2 left-4 sm:left-8 lg:left-12 text-[#94c1ec]/55 font-black text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-[-0.02em]">
          12 Years<br />operating
        </div>

        {/* Top Right: 2000+ customers */}
        <div className="absolute top-2 right-4 sm:right-8 lg:right-12 text-right text-[#94c1ec]/55 font-black text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-[-0.02em]">
          2000+<br />customers
        </div>

        {/* Lower Left: industry-grade */}
        <div className="hidden md:block absolute bottom-2 left-4 sm:left-8 lg:left-12 text-[#94c1ec]/50 font-black text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em]">
          industry-grade
        </div>

        {/* Lower Right: modernized */}
        <div className="hidden md:block absolute bottom-2 right-4 sm:right-8 lg:right-12 text-[#94c1ec]/50 font-black text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em]">
          modernized
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Responsive 3-Column Layout on Desktop ensuring NO overlap */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-4 pt-4 pb-8 sm:py-10">
          
          {/* Left Column: Floating Review Badges (lg:col-span-3) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-8 justify-center items-start">
            {/* Card 1: @its_john */}
            <div className="bg-white rounded-[24px] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100/90 w-full max-w-[250px] hover:-translate-y-1 transition-transform duration-300">
              <p className="text-[#0e6cb8] font-bold text-base tracking-[-0.02em]">@its_john</p>
              <p className="text-slate-400 text-xs mt-0.5 mb-2.5 tracking-[-0.01em]">Manila, Philippines</p>
              <p className="text-slate-600 text-[13px] leading-snug tracking-[-0.01em]">
                The booking process was <strong className="font-bold text-slate-800">incredibly fast.</strong>
              </p>
            </div>

            {/* Card 2: Mary Grace */}
            <div className="bg-white rounded-[24px] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100/90 w-full max-w-[250px] hover:-translate-y-1 transition-transform duration-300">
              <p className="text-[#0e6cb8] font-bold text-base tracking-[-0.02em]">Mary Grace</p>
              <p className="text-slate-400 text-xs mt-0.5 mb-2.5 tracking-[-0.01em]">Makati, Philippines</p>
              <p className="text-slate-600 text-[13px] leading-snug tracking-[-0.01em]">
                Wow! <strong className="font-bold text-slate-800">Modern &amp; Clean facilities..</strong>
              </p>
            </div>
          </div>

          {/* Center Column: Headline, Subtitle, CTA Buttons (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-4">
            {/* Main Title: Semibold with "Our Priority." in system blue */}
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] xl:text-[76px] font-semibold tracking-[-0.02em] leading-[1.08] mb-6 sm:mb-7">
              <span className="text-[#102a45] block">Your Smile,</span>
              <span className="text-[#0e6cb8] block">Our Priority.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#3d526b] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-8 sm:mb-10 tracking-[-0.01em]">
              Experience gentle, professional dental care from online booking to your healthy recovery. Friendly dentists, modern setups.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
              <button
                onClick={onBookAppointment}
                className="w-full sm:w-auto bg-[#0e6cb8] hover:bg-[#0c5ba0] active:scale-[0.98] text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-sm hover:shadow-md flex items-center justify-center gap-2.5 transition-all duration-200 tracking-[-0.01em]"
              >
                <span>Book Appointment</span>
                <Calendar size={19} className="stroke-[2.2]" />
              </button>

              <button
                onClick={onVisitClinic}
                className="w-full sm:w-auto bg-[#e5f1fc] hover:bg-[#d8eafb] active:scale-[0.98] text-[#0e6cb8] font-semibold text-base px-7 py-3.5 rounded-xl border border-[#0e6cb8]/60 transition-all duration-200 tracking-[-0.01em]"
              >
                Visit Our Clinic
              </button>
            </div>
          </div>

          {/* Right Column: Floating Review Badge (lg:col-span-3) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-center items-end">
            {/* Card 3: @justin_ */}
            <div className="bg-white rounded-[24px] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100/90 w-full max-w-[250px] hover:-translate-y-1 transition-transform duration-300">
              <p className="text-[#0e6cb8] font-bold text-base tracking-[-0.02em]">@justin_</p>
              <p className="text-slate-400 text-xs mt-0.5 mb-2.5 tracking-[-0.01em]">Manila, Philippines</p>
              <p className="text-slate-600 text-[13px] leading-snug tracking-[-0.01em]">
                I appreciate the staff &amp; dentist so much...
              </p>
            </div>
          </div>

        </div>

        {/* Mobile & Tablet preview of the 3 cards (cleanly stacked below CTA buttons) */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 relative z-10">
          <div className="bg-white rounded-[20px] p-4 shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-slate-100">
            <p className="text-[#0e6cb8] font-bold text-sm tracking-[-0.02em]">@its_john</p>
            <p className="text-slate-400 text-xs tracking-[-0.01em]">Manila, Philippines</p>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed tracking-[-0.01em]">
              The booking process was <strong className="font-semibold text-slate-800">incredibly fast.</strong>
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-4 shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-slate-100">
            <p className="text-[#0e6cb8] font-bold text-sm tracking-[-0.02em]">Mary Grace</p>
            <p className="text-slate-400 text-xs tracking-[-0.01em]">Makati, Philippines</p>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed tracking-[-0.01em]">
              Wow! <strong className="font-semibold text-slate-800">Modern &amp; Clean facilities..</strong>
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-4 shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-slate-100">
            <p className="text-[#0e6cb8] font-bold text-sm tracking-[-0.02em]">@justin_</p>
            <p className="text-slate-400 text-xs tracking-[-0.01em]">Manila, Philippines</p>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed tracking-[-0.01em]">
              I appreciate the staff &amp; dentist so much...
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
