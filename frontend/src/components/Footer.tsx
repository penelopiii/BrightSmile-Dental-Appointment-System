import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="socials" className="w-full bg-[#0e6cb8] text-white pt-14 pb-12 sm:pt-16 sm:pb-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Row: Brand & Socials */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold tracking-[-0.02em] select-none">
              BrightSmile
            </span>
            <p className="text-blue-100/90 text-sm sm:text-base font-normal mt-1.5 tracking-[-0.01em]">
              Your Smile, Our Priority.
            </p>
          </div>

          {/* Social Icons matching screenshot */}
          <div className="flex items-center gap-5 sm:gap-6">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BrightSmile on Instagram"
              className="p-1 text-white hover:text-blue-200 hover:scale-110 transition-all duration-200"
            >
              <svg
                className="w-6 h-6 fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BrightSmile on Twitter"
              className="p-1 text-white hover:text-blue-200 hover:scale-110 transition-all duration-200"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BrightSmile on Facebook"
              className="p-1 text-white hover:text-blue-200 hover:scale-110 transition-all duration-200"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 sm:mt-16 text-blue-100/80 text-xs sm:text-sm font-normal">
          <p>© 2026 BrightSmile Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

