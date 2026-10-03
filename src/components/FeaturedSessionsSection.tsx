import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SessionCard {
  id: string;
  topicTitle: string;
  speakerTag: string;
  subtitle: string;
  photoUrl: string;
}

const FEATURED_SESSIONS: SessionCard[] = [
  {
    id: 's-1',
    topicTitle: 'Mindset Naik Level',
    speakerTag: 'Keynote Utama',
    subtitle: 'Mengubah pola pikir, menghadapi keterbatasan mental, dan membangun keberanian melangkah.',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's-2',
    topicTitle: 'Dari Overthinking ke Action',
    speakerTag: 'Psikologi Aksi',
    subtitle: 'Memutus rantai keraguan diri dan mengeksekusi rencana dengan metode aksi mikro harian.',
    photoUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's-3',
    topicTitle: 'AI untuk Produktivitas',
    speakerTag: 'Masterclass Taktis',
    subtitle: 'Alur kerja memanfaatkan kecerdasan buatan untuk efisiensi riset, kerja kreatif, dan eksekusi cepat.',
    photoUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's-4',
    topicTitle: 'Personal Branding Digital',
    speakerTag: 'Karier & Reputasi',
    subtitle: 'Membangun reputasi berbobot secara konsisten agar menjadi magnet peluang profesional nyata.',
    photoUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
  }
];

interface FeaturedSessionsSectionProps {
  onSelectTopic: (topicTitle: string) => void;
  onViewAllTopics: () => void;
}

export const FeaturedSessionsSection: React.FC<FeaturedSessionsSectionProps> = ({
  onSelectTopic,
  onViewAllTopics
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? FEATURED_SESSIONS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === FEATURED_SESSIONS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="topics" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Left Title + 'All Episodes ->' + Right Circular Arrows (Matching Lewis Howes) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          
          <div className="flex items-baseline gap-4 sm:gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E0E0E] tracking-tight font-display">
              Featured Sessions
            </h2>
            <button
              onClick={onViewAllTopics}
              className="text-xs sm:text-sm font-bold text-[#0E0E0E]/70 hover:text-[#E2872A] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Semua Topik</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Circular Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full border border-[#0E0E0E]/20 hover:border-[#0E0E0E] bg-white flex items-center justify-center text-[#0E0E0E] hover:bg-[#FAF8F5] transition-all shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full border border-[#0E0E0E]/20 hover:border-[#0E0E0E] bg-white flex items-center justify-center text-[#0E0E0E] hover:bg-[#FAF8F5] transition-all shadow-sm cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* 4-Card Grid matching Lewis Howes 'Featured Guests' */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_SESSIONS.map((session) => (
            <div
              key={session.id}
              onClick={() => onSelectTopic(session.topicTitle)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Box with Rounded Corners and Bottom Typography */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#13260A] shadow-md group-hover:shadow-xl transition-all duration-300">
                <img
                  src={session.photoUrl}
                  alt={session.topicTitle}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  loading="lazy"
                />

                {/* Gradient Overlay for bottom text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                    {session.speakerTag}
                  </span>
                </div>

                {/* Bottom Left Card Title (Matching Lewis Howes bold name style) */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif leading-tight drop-shadow-sm group-hover:text-[#E2872A] transition-colors">
                    {session.topicTitle}
                  </h3>
                </div>
              </div>

              {/* Sub-description underneath card */}
              <div className="pt-3 px-1">
                <p className="text-xs sm:text-sm text-[#0E0E0E]/75 leading-snug line-clamp-2 font-sans">
                  {session.subtitle}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#E2872A] mt-1.5 group-hover:translate-x-1 transition-transform">
                  <span>Pilih Sesi Ini</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
