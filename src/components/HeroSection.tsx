import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreTopics: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onExploreTopics }) => {
  return (
    <section className="pt-2 pb-8 sm:pb-12 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Theatrical Cinema Rounded Card Container (Iconic Lewis Howes Hero Layout) */}
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-end items-center text-center p-6 sm:p-12 lg:p-16 border border-[#13260A]/10 bg-[#071304]">
          
          {/* Deep Theatrical Stage Background with Atmospheric Spotlight Beam */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#091705]/90 via-[#13260A]/95 to-[#071304] z-0" />
          
          {/* Subtle Stage Lighting Accents (Cyan/Emerald & Warm Golden Rim Light) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[420px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent pointer-events-none z-0" />
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#E2872A]/10 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none z-0" />

          {/* Center Keynote Speaker Photograph */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="relative w-full h-full max-w-3xl mx-auto flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1400&q=85"
                alt="Rofianto Keynote Speaker Stage Presence"
                className="w-full h-full object-cover object-top opacity-55 contrast-125 filter mix-blend-luminosity scale-105"
              />
              {/* Radial gradient mask to focus on face and stage presence */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071304] via-[#071304]/60 to-transparent" />
            </div>
          </div>

          {/* Centered Editorial Typography Overlay (Matching Lewis Howes Exact Rhythm) */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8 pb-4">
            
            <div className="space-y-1 sm:space-y-2">
              {/* Italic Serif Top Line (Matches: 'Become the Hero of') */}
              <div className="font-serif italic font-normal text-2xl sm:text-4xl lg:text-5xl text-[#FAF8F5]/90 tracking-tight [text-wrap:balance]">
                Naik Level &amp;
              </div>

              {/* Bold Sans Bottom Line (Matches: 'Your Own Story') */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-display text-white tracking-tight leading-[1.05] uppercase drop-shadow-md">
                Hidup Berdampak
              </h1>
            </div>

            {/* Sub-Manifesto */}
            <p className="text-xs sm:text-sm md:text-base text-[#FAF8F5]/80 max-w-xl mx-auto leading-relaxed font-sans font-normal">
              Membantu generasi muda, mahasiswa, dan profesional keluar dari overthinking, membangun sistem produktivitas dengan AI, serta mengeksekusi rencana nyata.
            </p>

            {/* White Pill Action Button (Matches: 'Start Here →') */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#0E0E0E] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Mulai Dari Sini</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreTopics}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm tracking-wide transition-all backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lihat Topik Keynote</span>
              </button>
            </div>

          </div>

          {/* Bottom subtle edge glow */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E2872A]/40 to-transparent" />

        </div>

      </div>
    </section>
  );
};
