import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Socials', href: '#socials' },
  ];

  return (
    <header className="w-full bg-[#f4f9fd] sticky top-0 z-50 backdrop-blur-md bg-opacity-95 border-b border-blue-50/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <span className="text-2xl sm:text-[26px] font-extrabold tracking-[-0.02em] text-[#0e6cb8] select-none transition-transform group-hover:scale-[1.02]">
            BrightSmile
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <div className="flex items-center gap-7 lg:gap-9 text-[15px] font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0e6cb8] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Us Pill Button */}
          <a
            href="#contact"
            onClick={onContactClick}
            className="bg-[#0e6cb8] hover:bg-[#0c5ba0] active:scale-95 text-white font-semibold text-[15px] px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-700 hover:text-[#0e6cb8] hover:bg-blue-50 transition-colors"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-blue-100 px-6 py-5 shadow-lg backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-[#0e6cb8] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onContactClick) onContactClick();
                }}
                className="inline-block text-center w-full bg-[#0e6cb8] hover:bg-[#0c5ba0] text-white font-semibold text-[15px] py-3 rounded-full shadow-sm transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
