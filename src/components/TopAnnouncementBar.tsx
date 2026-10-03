import React from 'react';
import { ArrowRight, BookOpen, X } from 'lucide-react';

interface TopAnnouncementBarProps {
  onLearnMore: () => void;
}

export const TopAnnouncementBar: React.FC<TopAnnouncementBarProps> = ({ onLearnMore }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#183B0E] text-[#FAF8F5] text-xs py-2.5 px-4 sm:px-8 relative z-50 border-b border-[#FAF8F5]/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left / Center content with book icon */}
        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          <div className="hidden sm:flex items-center justify-center w-6 h-6 rounded bg-[#E2872A] text-[#111111] font-bold text-[10px] shrink-0 uppercase tracking-wider font-display">
            NEW
          </div>
          <p className="font-sans text-xs sm:text-sm font-medium text-center sm:text-left">
            <span className="font-bold text-[#E2872A]">Buku &amp; Framework Terbaru:</span>{' '}
            <span className="text-[#FAF8F5]">Naik Level – Panduan Praktis Menutup Jurang Antara Ide &amp; Eksekusi</span>
          </p>
        </div>

        {/* Right CTA pill button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onLearnMore}
            className="px-4 py-1.5 rounded-full bg-[#FAF8F5] text-[#111111] hover:bg-[#FAF8F5]/90 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
          >
            <span>Pelajari Panduan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-[#FAF8F5]/60 hover:text-white transition-colors cursor-pointer"
            aria-label="Tutup Pengumuman"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
