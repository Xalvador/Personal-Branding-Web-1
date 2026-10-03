import React from 'react';

const MEDIA_PARTNERS = [
  { name: 'KOMPAS', style: 'font-serif font-black tracking-widest' },
  { name: 'TEMPO', style: 'font-serif font-bold tracking-wider' },
  { name: 'TECH IN ASIA', style: 'font-display font-black tracking-tighter' },
  { name: 'KONTAN', style: 'font-sans font-black tracking-wider' },
  { name: 'DETIK.COM', style: 'font-display font-extrabold tracking-tight' },
  { name: 'FORBES ID', style: 'font-serif font-black tracking-widest' },
  { name: 'UNIV. INDONESIA', style: 'font-serif font-semibold tracking-wide' },
  { name: 'INSTITUT TEKNOLOGI BANDUNG', style: 'font-sans font-bold tracking-tight' },
  { name: 'STARTUP HUB', style: 'font-display font-extrabold tracking-wide' }
];

export const MediaLogoBar: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 bg-[#FAF8F5] border-b border-[#13260A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#0E0E0E]/40 font-display">
            Dipercaya &amp; Berkolaborasi Bersama Berbagai Media, Kampus &amp; Institusi
          </span>
        </div>

        {/* Clean Grayscale Horizontal Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12 opacity-45 hover:opacity-75 transition-opacity duration-300">
          {MEDIA_PARTNERS.map((partner, idx) => (
            <span
              key={idx}
              className={`text-sm sm:text-base text-[#0E0E0E] grayscale select-none ${partner.style}`}
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
