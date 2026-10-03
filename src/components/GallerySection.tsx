import React, { useState } from 'react';

interface GalleryPhoto {
  id: string;
  category: 'Speaking' | 'Workshop' | 'Audience' | 'Behind the scenes' | 'Content' | 'Business';
  title: string;
  location: string;
  imgUrl: string;
  fig: string;
  colSpan: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-1',
    category: 'Speaking',
    title: 'Keynote Session di Hadapan Ratusan Peserta',
    location: 'Grand Auditorium, Jakarta',
    imgUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    fig: 'Dokumentasi 01',
    colSpan: 'col-span-1 lg:col-span-2'
  },
  {
    id: 'g-2',
    category: 'Workshop',
    title: 'Hands-on AI & Productivity Masterclass',
    location: 'Innovation Hall, Surabaya',
    imgUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    fig: 'Dokumentasi 02',
    colSpan: 'col-span-1'
  },
  {
    id: 'g-3',
    category: 'Audience',
    title: 'Interaksi & Diskusi Panel Dua Arah',
    location: 'Youth Conference Center',
    imgUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    fig: 'Dokumentasi 03',
    colSpan: 'col-span-1'
  },
  {
    id: 'g-4',
    category: 'Behind the scenes',
    title: 'Eksplorasi Sistem AI & Kurasi Materi',
    location: 'Creative Studio',
    imgUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    fig: 'Dokumentasi 04',
    colSpan: 'col-span-1'
  },
  {
    id: 'g-5',
    category: 'Content',
    title: 'Sesi Diskusi Pemikiran & Podcast',
    location: 'Media Broadcast Room',
    imgUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    fig: 'Dokumentasi 05',
    colSpan: 'col-span-1'
  },
  {
    id: 'g-6',
    category: 'Business',
    title: 'Sesi Sinkronisasi Strategis Tim In-House',
    location: 'Corporate HQ, Jakarta',
    imgUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    fig: 'Dokumentasi 06',
    colSpan: 'col-span-1 lg:col-span-2'
  }
];

export const GallerySection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Speaking', 'Workshop', 'Audience', 'Behind the scenes', 'Content', 'Business'];

  const filteredItems = GALLERY_PHOTOS.filter((item) => {
    if (filterCategory === 'All') return true;
    return item.category === filterCategory;
  });

  return (
    <section className="py-24 md:py-36 bg-[#F2EFE8] border-t border-[#13260A]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#13260A]/15 pb-4 mb-14 sm:mb-20">
          <span className="text-xs font-bold tracking-widest text-[#13260A] uppercase font-display">
            09 / DOKUMENTASI VISUAL &amp; KEGIATAN
          </span>
          <span className="text-xs font-semibold text-[#0E0E0E]/50 tracking-wider uppercase font-sans">
            ARSIP KEGIATAN
          </span>
        </div>

        {/* Section Headline & Filter Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E0E0E] tracking-tight leading-[1.04] font-display [text-wrap:balance]">
              Behind the Journey
            </h2>
            <p className="text-base sm:text-lg text-[#0E0E0E]/80 leading-relaxed font-normal font-sans">
              Dokumentasi panggung langsung, interaksi intensif bersama peserta, masterclass interaktif, dan momen riset di balik layar.
            </p>
          </div>

          {/* Minimalist Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer font-sans ${
                  filterCategory === cat
                    ? 'bg-[#13260A] text-[#FAF8F5]'
                    : 'bg-[#FAF8F5] text-[#0E0E0E]/70 border border-[#13260A]/15 hover:text-[#0E0E0E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Real Editorial Photo Essay Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-[#FAF8F5] border border-[#13260A]/15 p-4 shadow-[4px_4px_0px_0px_#13260A]/5 hover:shadow-[6px_6px_0px_0px_#13260A] transition-all duration-300 ${item.colSpan} group`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0E0E0E]">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale contrast-110 filter group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 text-[#FAF8F5] z-10">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#E2872A] font-display">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base font-display tracking-tight mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </div>

              <div className="pt-3 px-1 flex items-center justify-between text-xs font-semibold text-[#0E0E0E]/60 uppercase tracking-wider font-sans">
                <span>{item.fig}</span>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
