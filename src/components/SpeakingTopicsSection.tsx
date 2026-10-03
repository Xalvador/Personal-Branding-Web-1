import React from 'react';
import { SPEAKING_TOPICS_DATA } from '../data/websiteData';
import { ArrowRight } from 'lucide-react';

interface SpeakingTopicsSectionProps {
  onSelectTopicForBooking: (topicTitle: string) => void;
}

export const SpeakingTopicsSection: React.FC<SpeakingTopicsSectionProps> = ({ onSelectTopicForBooking }) => {
  return (
    <section id="topics" className="py-24 md:py-36 bg-[#F2EFE8] border-t border-[#13260A]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#13260A]/15 pb-4 mb-14 sm:mb-20">
          <span className="text-xs font-bold tracking-widest text-[#13260A] uppercase font-display">
            04 / SILABUS &amp; TOPIK SPEAKING
          </span>
          <span className="text-xs font-semibold text-[#0E0E0E]/50 tracking-wider uppercase font-sans">
            6 MODUL UTAMA
          </span>
        </div>

        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E0E0E] tracking-tight leading-[1.04] font-display [text-wrap:balance]">
            Topik yang Saya Bawakan
          </h2>
          <p className="text-base sm:text-lg text-[#0E0E0E]/80 leading-relaxed font-normal font-sans">
            Materi yang dirancang untuk membuka perspektif, membangun keberanian, dan mendorong audiens mengambil tindakan nyata. Disertai studi kasus dan framework terapan.
          </p>
        </div>

        {/* Editorial Catalogue Grid: 2 Columns of Razor-Sharp Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SPEAKING_TOPICS_DATA.map((topic) => (
            <div
              key={topic.id}
              className="bg-[#FAF8F5] border border-[#13260A]/15 p-8 sm:p-10 flex flex-col justify-between hover:border-[#13260A]/50 transition-all duration-300 shadow-[4px_4px_0px_0px_#13260A]/5 hover:shadow-[6px_6px_0px_0px_#13260A] group"
            >
              <div className="space-y-4">
                
                {/* Header Tag */}
                <div className="flex items-baseline justify-between border-b border-[#13260A]/10 pb-3">
                  <span className="text-xs font-bold tracking-wider text-[#13260A] uppercase font-display">
                    MODUL {topic.number}
                  </span>
                  <span className="text-xs font-semibold text-[#0E0E0E]/60 uppercase font-sans">
                    {topic.formats[0]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E0E0E] tracking-tight font-display group-hover:text-[#13260A] transition-colors">
                  {topic.title}
                </h3>

                {/* Subtitle with Serif Italic Accent */}
                <p className="text-sm font-serif italic text-[#13260A] font-medium leading-snug">
                  "{topic.subtitle}"
                </p>

                {/* Description */}
                <p className="text-sm text-[#0E0E0E]/80 leading-relaxed font-normal font-sans pt-1">
                  {topic.description}
                </p>

                {/* Target Audience Bar */}
                <div className="pt-2 text-xs text-[#0E0E0E]/80 flex items-baseline gap-2 font-sans">
                  <span className="text-[#E2872A] font-bold uppercase tracking-wider font-display">Target Audiens:</span>
                  <span className="font-medium">{topic.audience}</span>
                </div>

                {/* Learning Outcomes */}
                <div className="pt-4 border-t border-[#13260A]/10 space-y-1.5">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#13260A] block font-display">
                    Hasil Pembelajaran Utama:
                  </span>
                  <ul className="space-y-1 text-xs text-[#0E0E0E]/75 font-sans">
                    {topic.outcomes.map((out, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2">
                        <span className="text-[#13260A] shrink-0 font-bold">•</span>
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Direct CTA */}
              <div className="pt-8 mt-6 border-t border-[#13260A]/10">
                <button
                  onClick={() => onSelectTopicForBooking(topic.title)}
                  className="w-full py-3 px-5 text-xs font-bold tracking-widest uppercase text-[#FAF8F5] bg-[#13260A] hover:bg-[#0E0E0E] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm font-sans"
                >
                  <span>Pilih Topik Ini untuk Acara Anda</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E2872A]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Topic Banner */}
        <div className="mt-16 p-8 border border-[#13260A]/20 bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#13260A] block mb-1 font-display">
              KUSTOMISASI TOPIK KHUSUS
            </span>
            <p className="text-sm text-[#0E0E0E]/80 font-sans">
              Punya tema khusus dari panitia atau tema rapat kerja perusahaan? Sesi dapat dikurasi sesuai sasaran acara Anda.
            </p>
          </div>
          <button
            onClick={() => onSelectTopicForBooking('Topik Kustom Sesuai Arahan Panitia')}
            className="px-6 py-3 text-xs font-bold tracking-widest uppercase text-[#0E0E0E] hover:text-[#13260A] bg-transparent hover:bg-[#E6DFD1]/50 border border-[#13260A]/30 transition-colors whitespace-nowrap cursor-pointer shrink-0 font-sans"
          >
            Konsultasikan Tema Acara
          </button>
        </div>

      </div>
    </section>
  );
};
