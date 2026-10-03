import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
  onScrollToContact: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking, onScrollToContact }) => {
  return (
    <section className="py-24 md:py-36 bg-[#13260A] text-[#FAF8F5] border-t border-[#13260A] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8 relative z-10">
        
        <span className="text-xs font-bold tracking-widest text-[#E2872A] uppercase block font-display">
          11 / UNDANGAN &amp; KOLABORASI ACARA
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#FAF8F5] tracking-tight leading-[1.04] font-display [text-wrap:balance]">
          Punya event yang ingin dibuat <br />
          <span className="font-serif italic font-normal text-[#E6DFD1]">
            lebih bermakna?
          </span>
        </h2>

        <p className="text-base sm:text-xl text-[#E6DFD1]/85 max-w-2xl mx-auto leading-relaxed font-normal font-sans">
          "Undang Rofianto untuk berbicara di seminar, workshop, talkshow, komunitas, atau event Anda."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-10 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0E0E0E] bg-[#E2872A] hover:bg-[#d4761b] transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-md font-sans"
          >
            <span>Undang Saya sebagai Speaker</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onScrollToContact}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FAF8F5] hover:text-white bg-transparent hover:bg-[#FAF8F5]/10 border border-[#FAF8F5]/30 transition-colors flex items-center justify-center gap-2 cursor-pointer font-sans"
          >
            <Mail className="w-4 h-4 text-[#E2872A]" />
            <span>Hubungi Manajemen</span>
          </button>
        </div>

      </div>
    </section>
  );
};
