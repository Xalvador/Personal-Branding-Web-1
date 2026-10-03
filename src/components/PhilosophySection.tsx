import React from 'react';
import { PHILOSOPHY_DATA } from '../data/websiteData';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#FAF8F5] border-t border-[#13260A]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#13260A]/15 pb-4 mb-14 sm:mb-20">
          <span className="text-xs font-bold tracking-widest text-[#13260A] uppercase font-display">
            03 / PILAR FILOSOFI UTAMA
          </span>
          <span className="text-xs font-semibold text-[#0E0E0E]/50 tracking-wider uppercase font-sans">
            FONDASI
          </span>
        </div>

        {/* Section Title & Subheadline */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E0E0E] tracking-tight leading-[1.04] font-display [text-wrap:balance]">
            Naik Level Bukan Tentang Menjadi Orang Lain.
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-[#13260A] font-medium leading-relaxed">
            "Naik level berarti menjadi versi diri yang lebih sadar, lebih berani, lebih produktif, dan lebih bermanfaat."
          </p>
        </div>

        {/* 4 Architectural Columns with Hairline Borders & Monumental Serif Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#13260A]/15 divide-y md:divide-y-0 md:divide-x divide-[#13260A]/15">
          {PHILOSOPHY_DATA.map((col) => (
            <div
              key={col.number}
              className="py-10 lg:py-12 px-0 md:px-8 lg:px-10 first:pl-0 last:pr-0 space-y-6 flex flex-col justify-between group hover:bg-[#F2EFE8]/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-5xl sm:text-6xl font-normal text-[#13260A] block tracking-tight">
                    {col.number}
                  </span>
                  <span className="text-xs font-bold tracking-wider uppercase text-[#E2872A] font-display">
                    {col.title}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-[#0E0E0E] tracking-tight">
                  {col.tagline}
                </h3>

                <p className="text-sm text-[#0E0E0E]/80 leading-relaxed font-normal font-sans">
                  "{col.description}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#13260A]/10 space-y-2">
                <span className="text-xs font-bold tracking-wider uppercase text-[#13260A] block font-display">
                  Penerapan Kunci:
                </span>
                <ul className="space-y-1.5 text-xs text-[#0E0E0E]/75 font-sans">
                  {col.keyPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-[#E2872A] font-bold shrink-0">→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
