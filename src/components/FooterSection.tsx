import React from 'react';
import { ArrowUp, Instagram, Linkedin, Youtube, Video, Facebook } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] text-[#0E0E0E] py-16 sm:py-20 border-t border-[#13260A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid matching Lewis Howes Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#13260A]/10">
          
          {/* Left Column: Brand Info, Legal & Social Icons */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-2xl sm:text-3xl font-black tracking-tight text-[#0E0E0E] font-display uppercase inline-block"
            >
              ROFIANTO
            </a>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#0E0E0E]/60 font-sans">
              <a href="#about" className="hover:text-[#13260A] transition-colors">Syarat &amp; Ketentuan</a>
              <span>/</span>
              <a href="#about" className="hover:text-[#13260A] transition-colors">Kebijakan Privasi</a>
              <span>/</span>
              <a href="#topics" className="hover:text-[#13260A] transition-colors">Peta Situs</a>
            </div>

            <div className="text-xs text-[#0E0E0E]/60 font-sans">
              Hak Cipta &copy; {new Date().getFullYear()} Rofianto Media. Hak Cipta Dilindungi.
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-3 pt-2 text-[#0E0E0E]/70">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#0E0E0E]/20 flex items-center justify-center hover:bg-[#13260A] hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-[#0E0E0E]/20 flex items-center justify-center hover:bg-[#13260A] hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full border border-[#0E0E0E]/20 flex items-center justify-center hover:bg-[#13260A] hover:text-white transition-colors"
              >
                <Video className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-[#0E0E0E]/20 flex items-center justify-center hover:bg-[#13260A] hover:text-white transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: About Rofianto (Matches: About Lewis Howes) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0E0E0E] font-display">
              Tentang Rofianto
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#0E0E0E]/70">
              <li>
                <a href="#story" className="hover:text-[#13260A] transition-colors">My Story</a>
              </li>
              <li>
                <a href="#topics" className="hover:text-[#13260A] transition-colors">Speaking &amp; Keynote</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#13260A] transition-colors">Rekam Jejak Sesi</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#13260A] transition-colors">Kontak Manajemen</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#13260A] transition-colors">Kolaborasi &amp; Media</a>
              </li>
            </ul>
          </div>

          {/* Column 3: The Naik Level Show (Matches: The School of Greatness) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0E0E0E] font-display">
              The Naik Level Show
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#0E0E0E]/70">
              <li>
                <a href="#podcast" className="hover:text-[#13260A] transition-colors">Featured Series</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-[#13260A] transition-colors">Mindset</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-[#13260A] transition-colors">Produktivitas &amp; AI</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-[#13260A] transition-colors">Personal Branding</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-[#13260A] transition-colors">Karier &amp; Bisnis</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Program & Komunitas (Matches: Greatness Community) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0E0E0E] font-display">
              Program &amp; Komunitas
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#0E0E0E]/70">
              <li>
                <a href="#book" className="hover:text-[#13260A] transition-colors">Buku &amp; Lembar Kerja</a>
              </li>
              <li>
                <a href="#topics" className="hover:text-[#13260A] transition-colors">Seminar Akbar &amp; Summit</a>
              </li>
              <li>
                <a href="#topics" className="hover:text-[#13260A] transition-colors">In-House Training AI</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#13260A] transition-colors">Technical Rider Panitia</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Back to top button */}
        <div className="pt-8 flex justify-end">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-[#0E0E0E]/70 hover:text-[#13260A] transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E2872A]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
