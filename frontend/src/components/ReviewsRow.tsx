import React from 'react';
import { Star } from 'lucide-react';

export const ReviewsRow: React.FC = () => {
  const reviews = [
    {
      name: 'Emily Dela Cruz',
      location: 'Makati, Philippipines',
      rating: 5,
      comment:
        'The booking process was incredibly fast. Dr. Jenkins explained everything clearly during my cleaning, very gentle and careful!',
    },
    {
      name: '@janna_34',
      location: 'Laguna, Philippines',
      rating: 5,
      comment:
        'Painless tooth extraction. Outstanding staff, sterile clean rooms, and absolute professional service. Strongly recommended.',
    },
    {
      name: 'Anna Chiu',
      location: 'Ortigas, Philippines',
      rating: 5,
      comment:
        'Very convenient! I was able to book my appointment without calling the clinic and liked how easy it was to find an available dentist and schedule my visit.',
    },
  ];

  return (
    <section id="reviews" className="relative w-full bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[22px] p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Header: User Info & Stars */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-[#0e6cb8] font-bold text-base sm:text-[17px] tracking-[-0.02em]">
                      {review.name}
                    </h3>
                    <p className="text-slate-400 text-xs mt-0.5 tracking-[-0.01em]">
                      {review.location}
                    </p>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={17}
                        className="fill-[#f59e0b] text-[#f59e0b]"
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-[14px] sm:text-[15px] leading-relaxed tracking-[-0.01em]">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsRow;
