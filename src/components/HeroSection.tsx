import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreTopics: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onExploreTopics }) => {
  return (
    <section className="relative pt-36 pb-28 md:pt-48 md:pb-40 overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Minimalist Editorial Masthead Bar */}
        <div className="border-b border-[#13260A]/15 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E2872A]" />
            <span className="text-xs font-bold tracking-widest text-[#13260A] uppercase font-display">
              ROFIANTO • MOTIVATOR &amp; PUBLIC SPEAKER • GROWTH PRACTITIONER
            </span>
          </div>
          <div className="text-xs font-semibold text-[#0E0E0E]/50 tracking-wider uppercase font-sans">
            SURABAYA &amp; JAKARTA, INDONESIA
          </div>
        </div>

        {/* 
          ABSOLUTE FOCAL POINT: 
          Massive whitespace, monumental scale, high-contrast editorial serif typography 
        */}
        <div className="pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 border-b border-[#13260A]/15">
          <div className="max-w-6xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#E2872A] block mb-6 font-display">
              FILOSOFI &amp; GERAKAN
            </span>
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[7.25rem] xl:text-[8.5rem] font-serif font-normal tracking-[-0.035em] leading-[0.93] text-[#0E0E0E] [text-wrap:balance]">
              Naik Level. <br />
              <span className="italic font-normal text-[#13260A] tracking-[-0.025em] block mt-2 sm:mt-4">
                Hidup Berdampak.
              </span>
            </h1>
          </div>
        </div>

        {/* Lower Editorial Split Layout (Subheadline, Organizer Matrix, and Tailored Photography) */}
        <div className="pt-16 sm:pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Subheadline, CTAs, and Quick-Scan Organizer Matrix */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Thoughtful, Human, Non-Generic Subheadline */}
            <p className="text-lg sm:text-2xl text-[#0E0E0E]/85 leading-relaxed font-normal max-w-2xl font-sans [text-wrap:balance]">
              Saya membantu generasi muda, mahasiswa, dan profesional keluar dari overthinking, membangun sistem kerja cerdas dengan AI, serta mengeksekusi rencana nyata tanpa bergantung pada euforia motivasi sesaat.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FAF8F5] bg-[#13260A] hover:bg-[#0E0E0E] active:bg-[#1E3A10] transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-sm"
              >
                <span>Undang Saya sebagai Speaker</span>
                <ArrowRight className="w-4 h-4 text-[#E2872A]" />
              </button>

              <button
                onClick={onExploreTopics}
                className="px-8 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0E0E0E] hover:text-[#13260A] bg-transparent hover:bg-[#E6DFD1]/40 border border-[#13260A]/25 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lihat 6 Topik Speaking</span>
              </button>
            </div>

            {/* 5-Second Organizer Metadata Matrix (Clean Lines, High Legibility, No AI Slop Brackets) */}
            <div className="pt-10 border-t border-[#13260A]/15 grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-wider uppercase text-[#13260A] block font-display">
                  Topik Utama
                </span>
                <p className="text-[#0E0E0E]/80 font-medium leading-snug font-sans text-xs">
                  Growth Mindset, Eksekusi Aksi, Produktivitas AI &amp; Personal Branding.
                </p>
              </div>

              <div className="space-y-2 sm:border-l sm:border-[#13260A]/15 sm:pl-6">
                <span className="text-xs font-bold tracking-wider uppercase text-[#13260A] block font-display">
                  Target Audiens
                </span>
                <p className="text-[#0E0E0E]/80 font-medium leading-snug font-sans text-xs">
                  Mahasiswa, Gen Z, Fresh Graduates, &amp; Tim In-House Korporasi.
                </p>
              </div>

              <div className="space-y-2 sm:border-l sm:border-[#13260A]/15 sm:pl-6">
                <span className="text-xs font-bold tracking-wider uppercase text-[#C8681B] block font-display">
                  Prinsip Sesi
                </span>
                <p className="text-[#0E0E0E]/80 font-medium leading-snug font-sans text-xs">
                  Framework ROFI 4A: Berorientasi tindakan terukur, zero toxic-positivity.
                </p>
              </div>
            </div>

            {/* Supported Formats */}
            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-[#0E0E0E]/70 uppercase tracking-wider font-sans">
              <span>Seminar Akbar</span>
              <span className="text-[#13260A]/30">•</span>
              <span>Interactive Workshop</span>
              <span className="text-[#13260A]/30">•</span>
              <span>Panel Discussion</span>
              <span className="text-[#13260A]/30">•</span>
              <span>Corporate In-House</span>
            </div>

          </div>

          {/* Right Column: Tailored Formal Portrait Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              
              {/* Frame with Sharp Drop Shadow & Border */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E6DFD1] border border-[#13260A]/20 shadow-[8px_8px_0px_0px_#13260A]">
                
                {/* Real High-Contrast Editorial Portrait Photography */}
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80"
                  alt="Rofianto — Motivator and Public Speaker in tailored formal suit"
                  className="w-full h-full object-cover object-top grayscale contrast-110 filter hover:grayscale-0 transition-all duration-700"
                  loading="eager"
                />

                {/* Subtle Filmic Tone & Bottom Plaque */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 text-[#FAF8F5] z-10 space-y-1.5">
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#E2872A] font-display">
                    PROFIL PEMBICARA RESMI
                  </div>
                  <div className="font-display font-bold text-xl tracking-tight">
                    Rofianto
                  </div>
                  <p className="text-xs text-[#FAF8F5]/85 font-serif italic leading-relaxed">
                    "Setiap orang punya potensi untuk naik level, tetapi perubahan membutuhkan sistem dan tindakan nyata."
                  </p>
                </div>
              </div>

              {/* Editorial Caption */}
              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#0E0E0E]/60 uppercase tracking-wider font-sans">
                <span>Dokumentasi Resmi</span>
                <span>Portret Panggung</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
