import React from 'react';
import { TIMELINE_DATA } from '../data/websiteData';

export const StorySection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#F2EFE8] border-t border-[#13260A]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#13260A]/15 pb-4 mb-14 sm:mb-20">
          <span className="text-xs font-bold tracking-widest text-[#13260A] uppercase font-display">
            02 / PERJALANAN &amp; LATAR BELAKANG
          </span>
          <span className="text-xs font-semibold text-[#0E0E0E]/50 tracking-wider uppercase font-sans">
            JEJAK PENGALAMAN
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Title Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E0E0E] tracking-tight leading-[1.05] font-display [text-wrap:balance]">
              Saya tidak memulai dari tempat yang sempurna.
            </h2>
            
            <p className="text-base sm:text-lg text-[#0E0E0E]/80 leading-relaxed font-normal font-sans">
              Setiap materi dan perspektif yang saya bagikan di panggung bukan berasal dari teori buku yang abstrak, melainkan lahir dari proses jatuh-bangun, pergulatan konsistensi, serta eksperimen nyata di dunia rekayasa perangkat lunak, pemasaran digital, dan wirausaha rintisan.
            </p>

            <div className="pt-4 border-t border-[#13260A]/15">
              <span className="text-xs font-bold text-[#13260A] uppercase tracking-wider block font-display">
                Prinsip Pengalaman:
              </span>
              <p className="text-xs text-[#0E0E0E]/70 mt-1 font-serif italic">
                "Kredibilitas seorang pembicara bukan diukur dari seberapa fasih ia berteori, melainkan seberapa jujur ia membagikan kenyataan di lapangan."
              </p>
            </div>
          </div>

          {/* Right Chronological Monograph Column (Clean Typographic Index) */}
          <div className="lg:col-span-7 space-y-8 divide-y divide-[#13260A]/15">
            {TIMELINE_DATA.map((milestone, idx) => (
              <div key={idx} className={`${idx !== 0 ? 'pt-8' : ''} space-y-2 group`}>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold tracking-wider text-[#E2872A] uppercase font-display">
                    {milestone.period}
                  </span>
                  <span className="text-xs font-semibold text-[#0E0E0E]/40 font-sans">
                    Fase 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E0E0E] font-display tracking-tight group-hover:text-[#13260A] transition-colors">
                  {milestone.theme}
                </h3>

                <p className="text-sm text-[#0E0E0E]/80 leading-relaxed font-normal font-sans pt-1">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Monograph Closing Pull-Quote Banner */}
        <div className="p-10 sm:p-14 bg-[#13260A] text-[#FAF8F5] shadow-[8px_8px_0px_0px_#E2872A] border border-[#13260A] max-w-4xl mx-auto space-y-5 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic font-normal text-[#E6DFD1] leading-relaxed">
            "Perjalanan saya membuat saya percaya bahwa kita tidak harus menunggu sempurna untuk mulai bergerak."
          </p>
          <div className="w-16 h-0.5 bg-[#E2872A] mx-auto opacity-80" />
          <p className="text-sm sm:text-base font-bold font-display tracking-widest uppercase text-[#FAF8F5]">
            Kita hanya perlu mulai, belajar, memperbaiki, dan terus naik level.
          </p>
        </div>

      </div>
    </section>
  );
};
