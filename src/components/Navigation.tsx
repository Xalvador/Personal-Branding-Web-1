import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onOpenBooking: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#13260A]/10 py-4 shadow-[0_1px_0_0_rgba(19,38,10,0.05)]'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Left: Typographic Wordmark */}
            <a
              href="#"
              className="flex items-baseline gap-3 group"
            >
              <span className="text-xl sm:text-2xl font-extrabold tracking-[0.18em] text-[#0E0E0E] group-hover:text-[#13260A] transition-colors font-display uppercase">
                ROFIANTO
              </span>
              <span className="hidden sm:inline-block text-xs font-sans font-semibold text-[#13260A]/70 border-l border-[#13260A]/20 pl-3">
                Speaker &amp; Growth Practitioner
              </span>
            </a>

            {/* Center: Editorial Navigation Links */}
            <nav className="hidden lg:flex items-center gap-10 text-xs font-semibold tracking-wider text-[#0E0E0E]/70 uppercase">
              <a href="#about" className="hover:text-[#13260A] hover:underline underline-offset-8 transition-colors">
                About
              </a>
              <a href="#speaking" className="hover:text-[#13260A] hover:underline underline-offset-8 transition-colors">
                Speaking
              </a>
              <a href="#topics" className="hover:text-[#13260A] hover:underline underline-offset-8 transition-colors">
                Topics
              </a>
              <a href="#experience" className="hover:text-[#13260A] hover:underline underline-offset-8 transition-colors">
                Experience
              </a>
              <a href="#insights" className="hover:text-[#13260A] hover:underline underline-offset-8 transition-colors">
                Insights
              </a>
              <a href="#contact" className="hover:text-[#13260A] hover:underline underline-offset-8 transition-colors">
                Contact
              </a>
            </nav>

            {/* Right: Sharp Masculine CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-2.5 text-xs font-bold tracking-widest uppercase text-[#FAF8F5] bg-[#13260A] hover:bg-[#0E0E0E] active:bg-[#1E3A10] transition-colors whitespace-nowrap cursor-pointer shadow-sm"
              >
                Undang Saya
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0E0E0E] hover:text-[#13260A] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#13260A]/10 px-6 pt-4 pb-8 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3.5 text-xs font-bold tracking-widest uppercase text-[#0E0E0E]">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#13260A]/10 hover:text-[#13260A]"
              >
                About
              </a>
              <a
                href="#speaking"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#13260A]/10 hover:text-[#13260A]"
              >
                Speaking
              </a>
              <a
                href="#topics"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#13260A]/10 hover:text-[#13260A]"
              >
                Topics
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#13260A]/10 hover:text-[#13260A]"
              >
                Experience
              </a>
              <a
                href="#insights"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#13260A]/10 hover:text-[#13260A]"
              >
                Insights
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#13260A]"
              >
                Contact
              </a>
            </nav>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 text-center text-xs font-bold tracking-widest uppercase text-[#FAF8F5] bg-[#13260A] hover:bg-[#0E0E0E] transition-colors cursor-pointer"
              >
                Undang Saya
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Mobile CTA bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#13260A]/15 px-6 py-3.5 shadow-xl flex items-center justify-between gap-4">
        <div>
          <span className="font-extrabold text-sm tracking-wider uppercase text-[#13260A] block">Rofianto</span>
          <span className="text-[#0E0E0E]/60 text-xs font-sans font-medium">Motivator &amp; Public Speaker</span>
        </div>
        <button
          onClick={onOpenBooking}
          className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase text-[#FAF8F5] bg-[#13260A] shadow-sm whitespace-nowrap cursor-pointer"
        >
          Undang Saya
        </button>
      </div>
    </>
  );
};
