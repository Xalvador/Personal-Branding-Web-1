import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { MotionReveal, StaggerContainer, StaggerItem } from './ui/motion-reveal';

interface ThreePillarsSectionProps {
  onOpenBooking: () => void;
  onExploreBooks: () => void;
  onExploreTopics: () => void;
}

export const ThreePillarsSection: React.FC<ThreePillarsSectionProps> = ({
  onOpenBooking,
  onExploreBooks,
  onExploreTopics
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#13260A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Title Left + Round Navigation Arrows Right (Matching Lewis Howes) */}
        <MotionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E0E0E] tracking-tight font-display [text-wrap:balance]">
                Bergabung Bersama Gerakan Naik Level &amp; Wujudkan Potensi Nyata
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                aria-label="Previous Pillar"
                className="w-10 h-10 rounded-full border border-[#0E0E0E]/20 hover:border-[#0E0E0E] bg-white flex items-center justify-center text-[#0E0E0E] hover:bg-[#FAF8F5] transition-all shadow-sm cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                aria-label="Next Pillar"
                className="w-10 h-10 rounded-full border border-[#0E0E0E]/20 hover:border-[#0E0E0E] bg-white flex items-center justify-center text-[#0E0E0E] hover:bg-[#FAF8F5] transition-all shadow-sm cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </MotionReveal>

        {/* 3-Card Category Grid matching Lewis Howes (Books, Summit, Documentary) */}
        <StaggerContainer staggerChildren={0.14} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Books & Frameworks */}
          <StaggerItem>
            <div className="bg-[#F2EFE8] rounded-3xl p-8 sm:p-9 flex flex-col justify-between border border-[#13260A]/10 shadow-sm hover:shadow-md transition-shadow group h-full">
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-serif text-[#0E0E0E] tracking-tight">
                  Buku &amp; Framework
                </h3>
                
                <p className="text-sm text-[#0E0E0E]/75 leading-relaxed font-sans">
                  Panduan praktis dan lembar kerja sistem aksi nyata yang dirancang untuk membantu Anda melompat dari zona nyaman ke eksekusi berdampak.
                </p>

                <div>
                  <button
                    onClick={onExploreBooks}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E0E0E] hover:text-[#E2872A] transition-colors cursor-pointer font-sans"
                  >
                    <span>Jelajahi Panduan</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Bottom Graphic Stack (Books) */}
              <div className="mt-8 pt-6 border-t border-[#13260A]/10 flex justify-center">
                <div className="relative w-full max-w-[240px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gradient-to-tr from-[#13260A] to-[#204410] p-4 text-white flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-[#E2872A] tracking-wider uppercase font-display">
                    EDISI KHUSUS
                  </span>
                  <div>
                    <div className="text-lg font-black font-display leading-tight">NAIK LEVEL</div>
                    <div className="text-[10px] text-white/70 font-sans">Framework ROFI 4A</div>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Card 2: Summit & Seminars */}
          <StaggerItem>
            <div className="bg-[#F2EFE8] rounded-3xl p-8 sm:p-9 flex flex-col justify-between border border-[#13260A]/10 shadow-sm hover:shadow-md transition-shadow group h-full">
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-serif text-[#0E0E0E] tracking-tight">
                  Summit &amp; Seminar
                </h3>
                
                <p className="text-sm text-[#0E0E0E]/75 leading-relaxed font-sans">
                  Sesi panggung akbar dan konferensi dua arah yang dirancang untuk membuka wawasan, membakar semangat keberanian, dan menyatukan energi perubahan.
                </p>

                <div>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E0E0E] hover:text-[#E2872A] transition-colors cursor-pointer font-sans"
                  >
                    <span>Undang Speaker</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Bottom Graphic Banner (Summit Ticket/Stage) */}
              <div className="mt-8 pt-6 border-t border-[#13260A]/10 flex justify-center">
                <div className="relative w-full max-w-[240px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#0E0E0E] to-[#1A3A0A] p-4 text-white flex flex-col justify-between border border-white/10">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-bold text-[#FFB800] uppercase font-display">SUMMIT NASIONAL</span>
                    <span className="text-white/60">2026</span>
                  </div>
                  <div>
                    <div className="text-base font-bold font-display">Keynote Speaker</div>
                    <div className="text-xs text-[#E2872A] font-semibold">Rofianto Live Stage</div>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Card 3: Masterclass & In-House Training */}
          <StaggerItem>
            <div className="bg-[#F2EFE8] rounded-3xl p-8 sm:p-9 flex flex-col justify-between border border-[#13260A]/10 shadow-sm hover:shadow-md transition-shadow group h-full">
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-serif text-[#0E0E0E] tracking-tight">
                  AI &amp; Training
                </h3>
                
                <p className="text-sm text-[#0E0E0E]/75 leading-relaxed font-sans">
                  Masterclass intensif dan workshop in-house berorientasi praktik langsung: implementasi alur kerja AI, automasi tugas harian, dan personal branding etis.
                </p>

                <div>
                  <button
                    onClick={onExploreTopics}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E0E0E] hover:text-[#E2872A] transition-colors cursor-pointer font-sans"
                  >
                    <span>Lihat Silabus</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Bottom Graphic Banner (Masterclass) */}
              <div className="mt-8 pt-6 border-t border-[#13260A]/10 flex justify-center">
                <div className="relative w-full max-w-[240px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gradient-to-tr from-[#183B0E] via-[#13260A] to-[#0A1605] p-4 text-white flex flex-col justify-between border border-white/10">
                  <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase font-display">
                    HANDS-ON WORKSHOP
                  </span>
                  <div>
                    <div className="text-base font-bold font-display">AI for Productivity</div>
                    <div className="text-[10px] text-white/70">Tim Korporasi &amp; Komunitas</div>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>

      </div>
    </section>
  );
};
