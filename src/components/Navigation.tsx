import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ArrowRight } from 'lucide-react';

interface NavigationProps {
  onOpenBooking: () => void;
  onOpenSearch?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenBooking, onOpenSearch }) => {
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
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#13260A]/10 py-3.5 shadow-sm'
            : 'bg-[#FAF8F5] py-4 sm:py-5 border-b border-[#13260A]/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Bold Brand Wordmark matching Lewis Howes style */}
            <a
              href="#"
              className="flex items-center gap-2 group"
            >
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0E0E0E] group-hover:text-[#13260A] transition-colors font-display uppercase">
                ROFIANTO
              </span>
            </a>

            {/* Center: Clean Modern Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wide text-[#0E0E0E]/80">
              <a href="#topics" className="hover:text-[#13260A] transition-colors">
                Topik Speaking
              </a>
              <a href="#book" className="hover:text-[#13260A] transition-colors">
                Buku &amp; Framework
              </a>
              <a href="#story" className="hover:text-[#13260A] transition-colors">
                My Story
              </a>
              <a href="#podcast" className="hover:text-[#13260A] transition-colors">
                Podcast &amp; Show
              </a>
              <a href="#insights" className="hover:text-[#13260A] transition-colors">
                Wawasan
              </a>
              <a href="#contact" className="hover:text-[#13260A] transition-colors">
                Kontak
              </a>
            </nav>

            {/* Right: Search Icon + Orange Pill CTA Button (matching Lewis Howes Subscribe Now) */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={onOpenSearch}
                aria-label="Cari Materi"
                className="p-2 text-[#0E0E0E]/60 hover:text-[#0E0E0E] transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#E2872A] hover:bg-[#cf741b] active:bg-[#b86111] transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>Undang Rofianto</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#E2872A] shadow-sm cursor-pointer"
              >
                Undang
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#0E0E0E] hover:text-[#13260A] focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#13260A]/10 px-6 pt-4 pb-8 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3.5 text-sm font-semibold text-[#0E0E0E]">
              <a
                href="#topics"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#13260A]/10 hover:text-[#13260A]"
              >
                Topik Speaking
              </a>
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#13260A]/10 hover:text-[#13260A]"
              >
                Buku &amp; Framework
              </a>
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#13260A]/10 hover:text-[#13260A]"
              >
                My Story
              </a>
              <a
                href="#podcast"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#13260A]/10 hover:text-[#13260A]"
              >
                Podcast &amp; Show
              </a>
              <a
                href="#insights"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#13260A]/10 hover:text-[#13260A]"
              >
                Wawasan
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#13260A]"
              >
                Kontak
              </a>
            </nav>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-full text-center text-xs font-bold text-white bg-[#E2872A] hover:bg-[#cf741b] transition-colors cursor-pointer"
              >
                Undang Rofianto sebagai Speaker
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
