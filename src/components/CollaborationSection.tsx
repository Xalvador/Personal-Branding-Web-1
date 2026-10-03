import React from 'react';
import { COLLABORATION_TYPES } from '../data/websiteData';
import { ArrowRight } from 'lucide-react';

interface CollaborationSectionProps {
  onSelectCollaboration: (type: string) => void;
}

export const CollaborationSection: React.FC<CollaborationSectionProps> = ({ onSelectCollaboration }) => {
  return (
    <section className="py-24 md:py-36 bg-[#FAF8F5] border-t border-[#13260A]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#13260A]/15 pb-4 mb-14 sm:mb-20">
          <span className="text-xs font-bold tracking-widest text-[#13260A] uppercase font-display">
            10 / FORMAT KOLABORASI &amp; ACARA
          </span>
          <span className="text-xs font-semibold text-[#0E0E0E]/50 tracking-wider uppercase font-sans">
            4 FORMAT
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E0E0E] tracking-tight leading-[1.04] font-display [text-wrap:balance]">
            Mari Berkolaborasi.
          </h2>
          <p className="text-base sm:text-lg font-serif italic text-[#13260A] font-medium leading-relaxed">
            "Saya terbuka untuk berbagai format acara dan kolaborasi yang memiliki tujuan untuk memberikan value nyata kepada audiens."
          </p>
        </div>

        {/* 4 Architectural Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#13260A]/15 divide-y md:divide-y-0 md:divide-x divide-[#13260A]/15">
          {COLLABORATION_TYPES.map((collab, idx) => (
            <div
              key={collab.id}
              className="py-10 lg:py-12 px-0 md:px-8 lg:px-10 first:pl-0 last:pr-0 space-y-6 flex flex-col justify-between group hover:bg-[#F2EFE8]/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-[#13260A]/10 pb-3">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#E2872A] font-display">
                    PERAN 0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#0E0E0E]/50 uppercase font-sans">
                    KEMITRAAN
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#0E0E0E] tracking-tight font-display">
                  {collab.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#0E0E0E]/80 leading-relaxed font-normal font-sans">
                  {collab.description}
                </p>

                <div className="pt-4 border-t border-[#13260A]/10 space-y-1.5">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#13260A] block font-display">
                    Cakupan Acara:
                  </span>
                  <ul className="space-y-1 text-xs text-[#0E0E0E]/75 font-sans">
                    {collab.examples.map((ex, eIdx) => (
                      <li key={eIdx} className="flex items-start gap-2">
                        <span className="text-[#13260A] font-bold shrink-0">•</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#13260A]/10">
                <button
                  onClick={() => onSelectCollaboration(collab.title)}
                  className="w-full py-2.5 px-3 border border-[#13260A]/30 hover:border-[#13260A] bg-transparent hover:bg-[#13260A] hover:text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase text-[#0E0E0E] transition-colors flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <span>Ajukan Format Ini</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E2872A]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
