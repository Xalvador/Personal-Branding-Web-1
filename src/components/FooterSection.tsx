import React from 'react';
import { ArrowUp } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] text-[#FAF8F5] py-20 border-t border-[#13260A]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#FAF8F5]/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#"
              className="text-2xl sm:text-3xl font-black tracking-[0.18em] text-[#FAF8F5] font-display uppercase inline-block"
            >
              ROFIANTO
            </a>
            
            <p className="text-xs sm:text-sm text-[#E6DFD1]/70 max-w-md leading-relaxed font-normal font-sans">
              Motivator &amp; Public Speaker. Membantu generasi muda membangun mindset tangguh, keberanian mengambil tindakan nyata, produktivitas berbasis AI, dan sistem kehidupan yang berkelanjutan.
            </p>

            <div className="text-sm font-serif italic text-[#E2872A] pt-1">
              "Naik Level. Hidup Berdampak."
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold tracking-wider uppercase text-[#FAF8F5] font-display">
              Navigasi Halaman
            </div>
            <ul className="space-y-2 text-xs font-semibold tracking-wider uppercase text-[#E6DFD1]/70 font-sans">
              <li>
                <a href="#about" className="hover:text-[#FAF8F5] transition-colors">01. Tentang Rofianto</a>
              </li>
              <li>
                <a href="#topics" className="hover:text-[#FAF8F5] transition-colors">02. Topik Speaking</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FAF8F5] transition-colors">03. Rekam Jejak</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-[#FAF8F5] transition-colors">04. Esai &amp; Catatan</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FAF8F5] transition-colors">05. Kontak &amp; Booking</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold tracking-wider uppercase text-[#FAF8F5] font-display">
              Kontak Manajemen
            </div>
            <p className="text-xs text-[#E6DFD1]/70 leading-relaxed font-sans">
              Jadwal pembicara keynote, workshop in-house, panel diskusi, dan seminar nasional:
            </p>
            <div className="text-xs font-semibold text-[#E2872A] font-sans">
              contact@rofianto.id
            </div>
            <div className="text-xs text-[#E6DFD1]/70 font-sans">
              WhatsApp: +62 812-3456-7890
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#E6DFD1]/50 uppercase tracking-wider font-sans">
          <div>
            &copy; {new Date().getFullYear()} ROFIANTO. HAK CIPTA DILINDUNGI.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#FAF8F5] transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E2872A]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
