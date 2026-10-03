import React from 'react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-36 bg-[#FAF8F5] border-t border-[#13260A]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#13260A]/15 pb-4 mb-14 sm:mb-20">
          <span className="text-xs font-bold tracking-widest text-[#13260A] uppercase font-display">
            06 / JAM TERBANG &amp; JEJAK AUDIENS
          </span>
          <span className="text-xs font-semibold text-[#0E0E0E]/50 tracking-wider uppercase font-sans">
            REKAM JEJAK
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E0E0E] tracking-tight leading-[1.04] font-display [text-wrap:balance]">
            Berbicara untuk Menggerakkan, Bukan Sekadar Menghibur.
          </h2>
          <p className="text-base sm:text-lg text-[#0E0E0E]/80 leading-relaxed font-normal font-sans">
            Komitmen teguh untuk menghadirkan materi yang bernas, interaktif, dan meninggalkan jejak perubahan pola pikir yang dapat diuji pada setiap panggung yang dipercayakan.
          </p>
        </div>

        {/* Monumental Editorial Numbers Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-[#13260A]/15 divide-y sm:divide-y-0 sm:divide-x divide-[#13260A]/15 mb-24">
          
          <div className="py-10 sm:py-12 sm:px-8 first:pl-0 space-y-2">
            <div className="text-5xl sm:text-7xl font-black text-[#13260A] font-display tracking-tight">
              XX<span className="text-[#E2872A] font-serif font-normal">+</span>
            </div>
            <div className="text-xs font-bold tracking-wider text-[#0E0E0E] uppercase pt-2 border-t border-[#13260A]/10 font-display">
              Speaking Sessions
            </div>
            <p className="text-xs text-[#0E0E0E]/70 font-sans">
              Keynote, seminar akbar, &amp; in-house masterclass.
            </p>
          </div>

          <div className="py-10 sm:py-12 sm:px-8 space-y-2">
            <div className="text-5xl sm:text-7xl font-black text-[#13260A] font-display tracking-tight">
              XX,XXX<span className="text-[#E2872A] font-serif font-normal">+</span>
            </div>
            <div className="text-xs font-bold tracking-wider text-[#0E0E0E] uppercase pt-2 border-t border-[#13260A]/10 font-display">
              Peserta Terdampak
            </div>
            <p className="text-xs text-[#0E0E0E]/70 font-sans">
              Mahasiswa, profesional muda, &amp; praktisi.
            </p>
          </div>

          <div className="py-10 sm:py-12 sm:px-8 space-y-2">
            <div className="text-5xl sm:text-7xl font-black text-[#13260A] font-display tracking-tight">
              XX<span className="text-[#E2872A] font-serif font-normal">+</span>
            </div>
            <div className="text-xs font-bold tracking-wider text-[#0E0E0E] uppercase pt-2 border-t border-[#13260A]/10 font-display">
              Organisasi Mitra
            </div>
            <p className="text-xs text-[#0E0E0E]/70 font-sans">
              Universitas, korporasi, &amp; komunitas rintisan.
            </p>
          </div>

          <div className="py-10 sm:py-12 sm:px-8 last:pr-0 space-y-2">
            <div className="text-5xl sm:text-7xl font-black text-[#13260A] font-display tracking-tight">
              XX<span className="text-[#E2872A] font-serif font-normal">+</span>
            </div>
            <div className="text-xs font-bold tracking-wider text-[#0E0E0E] uppercase pt-2 border-t border-[#13260A]/10 font-display">
              Event &amp; Konferensi
            </div>
            <p className="text-xs text-[#0E0E0E]/70 font-sans">
              Skala regional dan nasional di Indonesia.
            </p>
          </div>

        </div>

        {/* Editorial Photo Asset: Atmospheric Auditorium Hall */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="aspect-[16/9] overflow-hidden bg-[#0E0E0E] border border-[#13260A]/20 shadow-[6px_6px_0px_0px_#13260A]">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                alt="Auditorium lecture hall full of engaged audience members"
                className="w-full h-full object-cover grayscale contrast-115 filter hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between text-xs font-semibold text-[#0E0E0E]/60 uppercase tracking-wider font-sans">
              <span>Dokumentasi Partisipasi Audiens</span>
              <span>Ruang Seminar &amp; Auditorium</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-wider uppercase text-[#13260A] font-display">
              DINAMIKA AUDIENS
            </span>
            <h3 className="text-3xl font-extrabold text-[#0E0E0E] font-display tracking-tight leading-snug">
              Menghadirkan Atmosfer Panggung yang Hidup &amp; Partisipatif.
            </h3>
            <p className="text-sm text-[#0E0E0E]/80 leading-relaxed font-normal font-sans">
              Sesi Rofianto tidak menempatkan pembicara sebagai sosok yang serba tahu, melainkan fasilitator yang memandu audiens menggali kembali potensi dan keberanian mengambil keputusan besar dalam hidup mereka.
            </p>
            <div className="pt-2 text-xs text-[#13260A] font-bold tracking-wider uppercase font-display">
              ✓ Tanya Jawab Dua Arah • Studi Kasus Nyata • Audit Aksi Personal
            </div>
          </div>
        </div>

        {/* Architectural Partner Grid */}
        <div className="border border-[#13260A]/15 bg-[#F2EFE8] p-8 sm:p-12">
          <div className="max-w-xl mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[#13260A] block mb-1 font-display">
              MITRA INSTITUSIONAL
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0E0E0E]">
              Jejaring Kolaborasi &amp; Mitra Terpilih
            </h3>
            <p className="text-xs text-[#0E0E0E]/60 mt-1 font-sans">
              Slot resmi organisasi, kampus, dan korporasi yang bekerja sama dengan Rofianto.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-[#13260A]/15">
            {[
              'Mitra Universitas',
              'Youth Community Hub',
              'Corporate Talent Org',
              'Tech Accelerator',
              'National Summit',
              'Himpunan Mahasiswa',
              'Creative Incubator',
              'Yayasan Pendidikan',
              'Entrepreneur Network',
              'Leadership Forum'
            ].map((partner, idx) => (
              <div
                key={idx}
                className="border-r border-b border-[#13260A]/15 p-5 bg-[#FAF8F5] flex flex-col items-center justify-center text-center min-h-[85px] hover:bg-[#FAF8F5]/80 transition-colors"
              >
                <span className="text-xs font-bold text-[#0E0E0E] font-display">
                  {partner}
                </span>
                <span className="text-[11px] font-semibold text-[#13260A]/60 mt-1 tracking-wider uppercase font-sans">
                  Mitra Terverifikasi
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
