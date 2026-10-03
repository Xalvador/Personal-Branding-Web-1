import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { MotionReveal } from './ui/motion-reveal';
import { TIMELINE_DATA } from '../data/websiteData';

export const StorySection: React.FC = () => {
  const [showFullTimeline, setShowFullTimeline] = useState(false);

  return (
    <section id="story" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#13260A]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Story Copy (Matching Lewis Howes My Story) */}
          <div className="lg:col-span-7 space-y-6">
            <MotionReveal duration={0.8} yOffset={24}>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#13260A] font-display">
                My Story
              </div>

              {/* Giant Serif Headline (Matches: 'How an awkward boy from Ohio became...') */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0E0E0E] tracking-tight leading-[1.12] [text-wrap:balance] mt-2 mb-4">
                Bagaimana seorang praktisi teknologi membangun sistem untuk membantu ribuan pemuda naik level...
              </h2>

              {/* Narrative text */}
              <div className="space-y-4 text-base sm:text-lg text-[#0E0E0E]/80 leading-relaxed font-sans mb-8">
                <p>
                  Saya tidak memulai dari panggung yang megah atau latar belakang yang serba mudah. Di masa awal menggeluti rekayasa perangkat lunak dan pemasaran digital, saya berulang kali mengalami sindrom keraguan diri, kelelahan konsistensi, dan ketakutan akan kegagalan.
                </p>
                <p>
                  Titik balik terbesar hadir ketika saya menyadari bahwa euforia motivasi sesaat tidak pernah bertahan lama. Yang benar-benar mengubah arah hidup adalah <strong>sistem kebiasaan mikro, kejujuran mengevaluasi diri, dan keberanian memanfaatkan teknologi terkini seperti AI</strong> untuk melipatgandakan dampak.
                </p>
              </div>

              {/* Pill CTA Button (Matches: 'Discover my story →') */}
              <div>
                <button
                  onClick={() => setShowFullTimeline(true)}
                  className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#0E0E0E] bg-transparent hover:bg-[#E6DFD1]/50 border-2 border-[#13260A]/30 hover:border-[#13260A] transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Baca Perjalanan Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Cutout Portrait Over Diagonal Geometric Slash (Matching Lewis Howes Right Side) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <MotionReveal delay={0.2} duration={0.85} yOffset={24} className="w-full flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] flex items-end justify-center">
                
                {/* Crisp Diagonal Geometric Slash Backdrop (Iconic Lewis Howes style) */}
                <div className="absolute inset-0 -rotate-3 rounded-3xl bg-gradient-to-tr from-[#E6DFD1] via-[#F2EFE8] to-[#E6DFD1]/60 transform scale-95 border border-[#13260A]/10 shadow-lg pointer-events-none" />
                <div className="absolute inset-0 rotate-3 rounded-3xl bg-[#13260A]/5 transform scale-90 pointer-events-none" />

                {/* Portrait Image of Rofianto smiling warmly and confidently */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-xl border border-white/80">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
                    alt="Rofianto — Personal Story and Growth Journey"
                    className="w-full h-full object-cover object-top filter contrast-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle soft vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E2872A] block font-display">
                      ROFIANTO
                    </span>
                    <p className="text-xs font-serif italic text-white/90">
                      "Kita tidak harus menunggu sempurna untuk mulai bergerak."
                    </p>
                  </div>
                </div>

              </div>
            </MotionReveal>
          </div>

        </div>

      </div>

      {/* Full Timeline Modal */}
      {showFullTimeline && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl border border-[#13260A]/20 p-8 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#13260A]/15 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#13260A] font-display">
                  CHRONICLE
                </span>
                <h3 className="text-2xl font-black text-[#0E0E0E] font-display">
                  Fase Perjalanan &amp; Pembelajaran
                </h3>
              </div>
              <button
                onClick={() => setShowFullTimeline(false)}
                className="p-2 text-[#0E0E0E]/60 hover:text-[#0E0E0E] transition-colors rounded-full hover:bg-black/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 divide-y divide-[#13260A]/10">
              {TIMELINE_DATA.map((item, idx) => (
                <div key={idx} className={`${idx !== 0 ? 'pt-6' : ''} space-y-1.5`}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#E2872A] uppercase tracking-wider font-display">
                      {item.period}
                    </span>
                    <span className="text-xs text-[#0E0E0E]/40 font-sans font-medium">
                      Langkah 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#0E0E0E] font-display">
                    {item.theme}
                  </h4>
                  <p className="text-sm text-[#0E0E0E]/80 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 mt-6 border-t border-[#13260A]/15 text-center">
              <button
                onClick={() => setShowFullTimeline(false)}
                className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#13260A] hover:bg-[#0E0E0E] transition-all cursor-pointer"
              >
                Tutup Catatan
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
