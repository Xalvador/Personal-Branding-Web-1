import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { MotionReveal } from './ui/motion-reveal';

interface FeaturedBookSectionProps {
  onLearnMore: () => void;
}

export const FeaturedBookSection: React.FC<FeaturedBookSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="book" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#13260A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Book Mockup with Yellow Badge (Matching Lewis Howes) */}
          <div className="lg:col-span-5 flex justify-center">
            <MotionReveal duration={0.8} yOffset={24} className="w-full flex justify-center">
              <div className="relative max-w-sm w-full">
                
                {/* Yellow Badge (Matches #1 New Release on amazon) */}
                <div className="absolute -top-3 left-4 z-20 bg-[#FFB800] text-[#111111] px-3.5 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1 font-display">
                  <Sparkles className="w-3 h-3 text-[#111111]" />
                  <span>#1 Panduan Praktis Eksekusi</span>
                </div>

                {/* 3D Book Cover Presentation in Deep Brand Forest Green */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A3A0A] via-[#13260A] to-[#0A1605] text-white p-8 sm:p-10 shadow-2xl border-4 border-white/80 aspect-[3/4] flex flex-col justify-between">
                  
                  {/* Book Header */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#E2872A] block font-display">
                      PANDUAN &amp; FRAMEWORK RESMI
                    </span>
                    <div className="text-xs text-white/70 font-sans tracking-wide">
                      ROFIANTO
                    </div>
                  </div>

                  {/* Book Main Title in Massive Display Font */}
                  <div className="space-y-2 my-auto py-6">
                    <div className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white leading-none">
                      NAIK
                    </div>
                    <div className="text-4xl sm:text-5xl font-black font-display tracking-tight text-[#E2872A] leading-none">
                      LEVEL
                    </div>
                    <div className="pt-2 text-xs font-serif italic text-white/80 leading-snug">
                      Dari Overthinking Menuju Tindakan Nyata &amp; Hidup Berdampak
                    </div>
                  </div>

                  {/* Book Footer */}
                  <div className="pt-4 border-t border-white/20 flex items-center justify-between text-[11px] text-white/70">
                    <span>METODOLOGI ROFI 4A</span>
                    <span className="font-bold text-[#E2872A]">EDISI RESMI</span>
                  </div>

                </div>

                {/* Soft Ground Shadow */}
                <div className="w-4/5 mx-auto h-5 bg-black/20 rounded-full blur-md -mt-2" />

              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Editorial Copy matching Lewis Howes */}
          <div className="lg:col-span-7 space-y-6">
            <MotionReveal delay={0.15} duration={0.8} yOffset={24}>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#13260A] font-display">
                Buku &amp; Framework Resmi
              </div>

              {/* Giant Serif Headline (Matches: 'Your Path to Peace, Freedom, and Financial Abundance') */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0E0E0E] tracking-tight leading-[1.12] [text-wrap:balance] mt-2 mb-4">
                Jalan Terarah Menuju Keberanian, Produktivitas, dan Dampak Nyata
              </h2>

              {/* Sub-description */}
              <p className="text-base sm:text-lg text-[#0E0E0E]/80 leading-relaxed font-sans mb-6">
                Rofianto merumuskan <strong>Framework ROFI 4A</strong> sebagai kompas taktis bagi mahasiswa, fresh graduate, dan profesional muda yang kerap terjebak dalam siklus kebingungan, imposter syndrome, dan distraksi digital.
              </p>

              {/* Bullet Highlights */}
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#0E0E0E]/80 font-sans mb-8">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#13260A] shrink-0 mt-0.5" />
                  <span>Membongkar akar overthinking dan mengubahnya menjadi rencana 14 hari pertama.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#13260A] shrink-0 mt-0.5" />
                  <span>Panduan praktis integrasi prompt dan workflow AI untuk mempercepat output kerja harian.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#13260A] shrink-0 mt-0.5" />
                  <span>Membangun reputasi diri (personal branding) autentik tanpa terjebak flexing kosong.</span>
                </div>
              </div>

              {/* Orange Pill CTA Button (Matches: 'Learn More →') */}
              <div>
                <button
                  onClick={onLearnMore}
                  className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#E2872A] hover:bg-[#cf741b] active:bg-[#b86111] transition-all shadow-md flex items-center gap-2 cursor-pointer group"
                >
                  <span>Pelajari Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
