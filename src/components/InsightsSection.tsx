import React, { useState } from 'react';
import { FEATURED_INSIGHTS, InsightCard } from '../data/websiteData';
import { ArrowUpRight, X, Instagram, Linkedin, Youtube, Video } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const [selectedInsight, setSelectedInsight] = useState<InsightCard | null>(null);

  return (
    <section id="insights" className="py-24 md:py-36 bg-[#FAF8F5] border-t border-[#13260A]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#13260A]/15 pb-4 mb-14 sm:mb-20">
          <span className="text-xs font-bold tracking-widest text-[#13260A] uppercase font-display">
            08 / CATATAN &amp; ESAI PUBLIK
          </span>
          <span className="text-xs font-semibold text-[#0E0E0E]/50 tracking-wider uppercase font-sans">
            PIKIRAN TERBUKA
          </span>
        </div>

        {/* Section Headline & Channels */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E0E0E] tracking-tight leading-[1.04] font-display [text-wrap:balance]">
              Pikiran yang Saya Bagikan
            </h2>
            <p className="text-base sm:text-lg text-[#0E0E0E]/80 leading-relaxed font-normal font-sans">
              Kumpulan catatan pemikiran berkala seputar Mindset, AI, Produktivitas, Bisnis, dan Pertumbuhan Personal untuk generasi digital.
            </p>
          </div>

          {/* Social Channels Strip */}
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#13260A]/20 bg-[#F2EFE8] hover:bg-[#13260A] hover:text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase text-[#0E0E0E] transition-colors font-sans"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E2872A]" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#13260A]/20 bg-[#F2EFE8] hover:bg-[#13260A] hover:text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase text-[#0E0E0E] transition-colors font-sans"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#E2872A]" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#13260A]/20 bg-[#F2EFE8] hover:bg-[#13260A] hover:text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase text-[#0E0E0E] transition-colors font-sans"
            >
              <Video className="w-3.5 h-3.5 text-[#E2872A]" />
              <span>TikTok</span>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#13260A]/20 bg-[#F2EFE8] hover:bg-[#13260A] hover:text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase text-[#0E0E0E] transition-colors font-sans"
            >
              <Youtube className="w-3.5 h-3.5 text-[#E2872A]" />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* Journal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_INSIGHTS.map((item) => (
            <div
              key={item.id}
              className="bg-[#F2EFE8] border border-[#13260A]/15 p-8 flex flex-col justify-between hover:border-[#13260A]/50 transition-all duration-300 shadow-[4px_4px_0px_0px_#13260A]/5 hover:shadow-[6px_6px_0px_0px_#13260A] group"
            >
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-[#13260A]/10 pb-3">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#13260A] font-display">
                    {item.category}
                  </span>
                  <span className="text-xs font-medium text-[#0E0E0E]/50 font-sans">
                    {item.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0E0E0E] tracking-tight font-display group-hover:text-[#13260A] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#0E0E0E]/75 leading-relaxed font-normal font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#13260A]/10 flex items-center justify-between">
                <span className="text-xs font-serif italic text-[#13260A]">
                  "{item.keyIdea}"
                </span>
                <button
                  onClick={() => setSelectedInsight(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#0E0E0E] hover:text-[#13260A] cursor-pointer font-sans"
                >
                  <span>Baca</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E2872A]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {selectedInsight && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E0E0E]/80 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-[#FAF8F5] border border-[#13260A] p-8 sm:p-10 space-y-6 shadow-[10px_10px_0px_0px_#13260A]">
            <div className="flex items-start justify-between border-b border-[#13260A]/15 pb-4">
              <div>
                <span className="text-xs font-bold text-[#13260A] uppercase tracking-wider font-display">
                  {selectedInsight.category} · {selectedInsight.readTime}
                </span>
                <h3 className="text-2xl font-bold text-[#0E0E0E] font-display tracking-tight mt-1">
                  {selectedInsight.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedInsight(null)}
                className="p-1 text-[#0E0E0E]/60 hover:text-[#0E0E0E] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-[#F2EFE8] border-l-2 border-[#13260A] text-xs font-sans font-semibold text-[#13260A]">
              PRINSIP INTI: "{selectedInsight.keyIdea}"
            </div>

            <p className="text-sm sm:text-base text-[#0E0E0E]/85 leading-relaxed font-normal font-sans">
              {selectedInsight.description}
            </p>

            <p className="text-xs text-[#0E0E0E]/60 font-serif italic">
              Kajian pemikiran ini didistribusikan secara berkala melalui LinkedIn Newsletter dan kanal resmi Rofianto.
            </p>

            <div className="pt-4 border-t border-[#13260A]/15 flex justify-end">
              <button
                onClick={() => setSelectedInsight(null)}
                className="px-6 py-2.5 text-xs font-bold tracking-widest uppercase text-[#FAF8F5] bg-[#13260A] hover:bg-[#0E0E0E] transition-colors cursor-pointer font-sans"
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
