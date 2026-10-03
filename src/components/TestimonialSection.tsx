import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialPlaceholder {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  event: string;
}

const TESTIMONIAL_SLOTS: TestimonialPlaceholder[] = [
  {
    id: 't-1',
    quote: 'Sesi yang dibawakan sangat aplikatif dan membuka sudut pandang baru bagi seluruh peserta kami. Materi tidak sekadar motivasi semangat sesaat, melainkan ada framework konkret dan tindak lanjut yang jelas.',
    name: '[Nama Penyelenggara / Klien]',
    role: 'Ketua Pelaksana / HR Lead',
    organization: '[Nama Institusi / Organisasi]',
    event: 'Seminar Nasional / In-House Training'
  },
  {
    id: 't-2',
    quote: 'Penyampaian Rofianto sangat relevan dengan dinamika generasi muda saat ini. Energi panggungnya hangat, cerdas, dan interaktif sehingga audiens bertahan fokus dari awal hingga akhir sesi tanya jawab.',
    name: '[Nama Pimpinan Acara]',
    role: 'Head of Talent & Community',
    organization: '[Nama Komunitas / Kampus]',
    event: 'Youth Conference & Leadership Summit'
  },
  {
    id: 't-3',
    quote: 'Materi AI dan produktivitas yang dibagikan benar-benar membantu tim kami memotong pekerjaan repetitif dan lebih berani mengeksekusi ide-ide strategis dengan sistem yang rapi.',
    name: '[Nama Perwakilan Korporasi]',
    role: 'Director / Project Lead',
    organization: '[Perusahaan / Organisasi]',
    event: 'Executive Masterclass & Workshop'
  }
];

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIAL_SLOTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIAL_SLOTS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIAL_SLOTS[currentIndex];

  return (
    <section className="py-24 md:py-36 bg-[#F2EFE8] border-t border-[#13260A]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#13260A]/15 pb-4 mb-14 sm:mb-20">
          <span className="text-xs font-bold tracking-widest text-[#13260A] uppercase font-display">
            07 / TESTIMONI &amp; REFLEKSI KLIEN
          </span>
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-[#0E0E0E]/50 tracking-wider uppercase font-sans">
              Testimoni 0{currentIndex + 1} dari 0{TESTIMONIAL_SLOTS.length}
            </span>
            <div className="flex items-center gap-1 border-l border-[#13260A]/20 pl-3">
              <button
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                className="p-2 border border-[#13260A]/20 bg-[#FAF8F5] hover:bg-[#13260A] hover:text-[#FAF8F5] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Testimonial"
                className="p-2 border border-[#13260A]/20 bg-[#FAF8F5] hover:bg-[#13260A] hover:text-[#FAF8F5] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Large Editorial Pull-Quote Layout */}
        <div className="max-w-5xl mx-auto py-8 sm:py-14 space-y-12">
          
          <div className="space-y-6">
            <span className="font-serif text-6xl sm:text-7xl text-[#13260A] opacity-40 block font-normal leading-none">
              “
            </span>
            <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-serif italic text-[#0E0E0E] leading-[1.2] font-normal [text-wrap:balance]">
              {active.quote}
            </blockquote>
          </div>

          <div className="pt-8 border-t-2 border-[#13260A] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <div className="text-lg font-bold font-display tracking-tight text-[#0E0E0E]">
                {active.name}
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-[#13260A] mt-1 font-sans">
                {active.role} · {active.organization}
              </div>
            </div>

            <div className="text-xs font-semibold text-[#0E0E0E]/60 tracking-wider uppercase font-sans">
              Agenda Acara: {active.event}
            </div>
          </div>

        </div>

        <div className="text-center pt-8 text-xs font-medium text-[#0E0E0E]/50 tracking-wider font-sans">
          *Disiapkan untuk memuat testimoni autentik penyelenggara yang bekerja sama dengan Rofianto.
        </div>

      </div>
    </section>
  );
};
