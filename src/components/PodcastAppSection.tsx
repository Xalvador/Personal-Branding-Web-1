import React from 'react';
import { Play, RotateCcw, RotateCw, Star, Headphones } from 'lucide-react';
import { MotionReveal } from './ui/motion-reveal';

export const PodcastAppSection: React.FC = () => {
  return (
    <section id="podcast" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#13260A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Realistic Smartphone Mockup (Matching Lewis Howes Show App Frame) */}
          <div className="lg:col-span-5 flex justify-center">
            <MotionReveal duration={0.85} yOffset={24} className="w-full flex justify-center">
              <div className="relative w-full max-w-[300px] sm:max-w-[320px] rounded-[44px] bg-[#111111] p-3.5 shadow-2xl border-4 border-gray-300">
                
                {/* Phone Speaker Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#111111] rounded-full z-30 flex items-center justify-center">
                  <div className="w-12 h-1 bg-gray-700 rounded-full" />
                </div>

                {/* Phone Screen Container */}
                <div className="relative rounded-[36px] overflow-hidden bg-[#0A1605] text-white aspect-[9/18.5] flex flex-col justify-between p-5 pt-8 border border-white/10">
                  
                  {/* Phone Status Bar */}
                  <div className="flex items-center justify-between text-[11px] text-white/70 font-sans px-1">
                    <span>09:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white/70" />
                      <span>5G</span>
                    </div>
                  </div>

                  {/* Podcast Cover Artwork */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A3A0A] via-[#13260A] to-[#0A1605] p-5 flex flex-col justify-between shadow-lg border border-white/15 my-auto">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#E2872A] font-display">
                      OFFICIAL AUDIO SERIES
                    </div>
                    <div>
                      <div className="text-2xl font-black font-display tracking-tight text-white leading-tight">
                        NAIK LEVEL
                      </div>
                      <div className="text-xs text-white/70 font-serif italic">
                        with Rofianto
                      </div>
                    </div>
                  </div>

                  {/* Orange Banner (Matches: 'Over 1 Billion Downloads') */}
                  <div className="bg-[#E2872A] text-[#111111] py-1.5 px-3 rounded-full text-center text-xs font-bold font-display uppercase tracking-wide shadow-md">
                    Ribuan Pendengar Aktif
                  </div>

                  {/* Player Controls (15s back, Play, 30s forward) */}
                  <div className="flex items-center justify-center gap-6 py-2 text-white">
                    <button className="p-1 hover:text-[#E2872A] transition-colors" aria-label="Rewind 15s">
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-lg hover:scale-105 transition-transform" aria-label="Play Episode">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </button>
                    <button className="p-1 hover:text-[#E2872A] transition-colors" aria-label="Forward 30s">
                      <RotateCw className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 5-Star Rating (Matches: 'Over 20,000 Reviews') */}
                  <div className="text-center space-y-1 pb-1">
                    <div className="flex items-center justify-center gap-1 text-[#FFB800]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <div className="text-[11px] text-white/75 font-sans font-medium">
                      Rating 4.9 ★ di Spotify &amp; Apple Podcasts
                    </div>
                  </div>

                </div>

              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Copy & Official Platform Badges (Matching Lewis Howes) */}
          <div className="lg:col-span-7 space-y-6">
            <MotionReveal delay={0.15} duration={0.8} yOffset={24}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E0E0E] tracking-tight font-display [text-wrap:balance]">
                The Naik Level Show
              </h2>

              <p className="text-base sm:text-lg text-[#0E0E0E]/80 leading-relaxed font-sans mt-4 mb-6">
                <strong>The Naik Level Show</strong> membagikan obrolan mendalam dan refleksi taktis bersama praktisi, pendiri startup, akademisi, dan pemuda inspiratif — dirancang untuk membantu Anda memutus siklus overthinking, memanfaatkan teknologi modern, dan menjalani hidup dengan keberanian nyata.
              </p>

              {/* 4 Official Platform Pill Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                
                {/* Apple Podcasts */}
                <a
                  href="https://podcasts.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#13260A]/15 hover:border-[#13260A] shadow-sm hover:shadow transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#0E0E0E]/60 uppercase tracking-wider font-semibold">Dengarkan di</div>
                    <div className="text-sm font-bold text-[#0E0E0E] group-hover:text-[#13260A]">Apple Podcasts</div>
                  </div>
                </a>

                {/* Spotify */}
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#13260A]/15 hover:border-[#13260A] shadow-sm hover:shadow transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#0E0E0E]/60 uppercase tracking-wider font-semibold">Dengarkan di</div>
                    <div className="text-sm font-bold text-[#0E0E0E] group-hover:text-[#13260A]">Spotify</div>
                  </div>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#13260A]/15 hover:border-[#13260A] shadow-sm hover:shadow transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#0E0E0E]/60 uppercase tracking-wider font-semibold">Tonton &amp; Dengar di</div>
                    <div className="text-sm font-bold text-[#0E0E0E] group-hover:text-[#13260A]">YouTube Series</div>
                  </div>
                </a>

                {/* Newsletter / Web RSS */}
                <a
                  href="#insights"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#13260A]/15 hover:border-[#13260A] shadow-sm hover:shadow transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#E2872A] text-white flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#0E0E0E]/60 uppercase tracking-wider font-semibold">Baca Ringkasan di</div>
                    <div className="text-sm font-bold text-[#0E0E0E] group-hover:text-[#13260A]">Web &amp; Newsletter</div>
                  </div>
                </a>

              </div>
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
