import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IntroductionSectionProps {
  onOpenBooking: () => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#FAF8F5] border-t border-[#13260A]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Section Numbering */}
        <div className="flex items-center justify-between border-b border-[#13260A]/15 pb-4 mb-14 sm:mb-20">
          <span className="text-xs font-bold tracking-widest text-[#13260A] uppercase font-display">
            01 / TENTANG &amp; NILAI UTAMA
          </span>
          <span className="text-xs font-semibold text-[#0E0E0E]/50 tracking-wider uppercase font-sans">
            ESENSI PERUBAHAN
          </span>
        </div>

        {/* Top Split: Real Stage Photography & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Authentic Live Stage Keynote Photography */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-[#0E0E0E] border border-[#13260A]/20 shadow-[6px_6px_0px_0px_#13260A]">
                <img
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80"
                  alt="Live keynote speech stage with spotlight and microphone"
                  className="w-full h-full object-cover grayscale contrast-125 filter hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                
                {/* Filmic Tint & Stage Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 text-[#FAF8F5] z-10 space-y-1">
                  <div className="text-[11px] font-bold tracking-wider text-[#E2872A] uppercase font-display">
                    DOKUMENTASI PANGGUNG
                  </div>
                  <div className="font-bold text-base font-display">
                    Panggung Tanpa Klise Motivasi
                  </div>
                  <p className="text-xs text-[#FAF8F5]/80 font-serif italic">
                    Dialog intensif dua arah bersama audiens muda &amp; profesional.
                  </p>
                </div>
              </div>

              <div className="mt-2.5 flex items-center justify-between text-xs font-semibold text-[#0E0E0E]/50 tracking-wider uppercase font-sans">
                <span>Panggung Utama</span>
                <span>Interaktif &amp; Solutif</span>
              </div>
            </div>
          </div>

          {/* Right Column: Commanding Headline & Manifesto Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#13260A] font-display">
                MANIFESTO PERSONAL
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E0E0E] tracking-tight leading-[1.05] font-display [text-wrap:balance]">
                Setiap orang punya potensi untuk naik level.
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-[#0E0E0E]/85 leading-relaxed font-normal font-sans">
              <p>
                Banyak orang sebenarnya memiliki potensi besar, tetapi terhambat oleh rasa takut, kebingungan, kebiasaan yang tidak produktif, atau tidak tahu harus mulai dari mana.
              </p>
              
              <blockquote className="pl-5 border-l-2 border-[#13260A] text-lg sm:text-xl font-serif italic text-[#13260A] font-medium leading-relaxed my-4">
                "Saya percaya motivasi bukan sekadar membuat seseorang merasa semangat. Motivasi yang baik harus membuat seseorang melihat kemungkinan baru dan berani mengambil langkah nyata."
              </blockquote>

              <p>
                Melalui perpaduan sains perilaku, framework tindakan bertahap, dan pemanfaatan alat modern seperti kecerdasan buatan (AI), setiap materi dirancang agar peserta tidak pulang dengan catatan kosong, melainkan rencana kerja terukur yang siap dieksekusi esok hari.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#13260A] hover:text-[#0E0E0E] group cursor-pointer border-b border-[#13260A] pb-1 font-sans"
              >
                <span>Undang Rofianto Berbicara di Acara Anda</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#E2872A]" />
              </button>
            </div>

          </div>

        </div>

        {/* Why Event Organizers Choose Rofianto: Clean Dynamic Editorial Index */}
        <div className="pt-16 border-t border-[#13260A]/15">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#13260A] block mb-2 font-display">
              NILAI BAGI PANITIA PENYELENGGARA
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E0E0E] tracking-tight font-display">
              Mengapa Penyelenggara Acara Memilih Rofianto?
            </h3>
            <p className="text-sm text-[#0E0E0E]/70 mt-2 font-normal leading-relaxed font-sans">
              Kami memahami beban tanggung jawab panitia: Anda membutuhkan narasumber yang tidak hanya memukau audiens, tetapi juga tepat waktu, mudah dikoordinasikan, dan meninggalkan dampak terukur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            
            <div className="pt-6 border-t-2 border-[#13260A] space-y-3">
              <span className="font-serif italic font-bold text-2xl text-[#13260A] block">
                01.
              </span>
              <h4 className="text-lg font-bold text-[#0E0E0E] font-display">
                Berbasis Sistem, Bukan Sekadar Hype
              </h4>
              <p className="text-sm text-[#0E0E0E]/75 leading-relaxed font-normal font-sans">
                Bukan seminar yang hanya membuat peserta bertepuk tangan lalu lupa esok paginya. Materi dibawakan dengan alur framework terstruktur sehingga audiens memiliki langkah konkret 24 jam pertama.
              </p>
            </div>

            <div className="pt-6 border-t-2 border-[#13260A] space-y-3">
              <span className="font-serif italic font-bold text-2xl text-[#13260A] block">
                02.
              </span>
              <h4 className="text-lg font-bold text-[#0E0E0E] font-display">
                Relevan dengan Era AI &amp; Generasi Digital
              </h4>
              <p className="text-sm text-[#0E0E0E]/75 leading-relaxed font-normal font-sans">
                Dengan latar belakang teknologi dan pemasaran digital, materi menjawab tantangan nyata generasi muda: mengatasi overthinking, memotong pekerjaan repetitif dengan AI, dan membangun reputasi bernilai.
              </p>
            </div>

            <div className="pt-6 border-t-2 border-[#13260A] space-y-3">
              <span className="font-serif italic font-bold text-2xl text-[#13260A] block">
                03.
              </span>
              <h4 className="text-lg font-bold text-[#0E0E0E] font-display">
                Bahasa Relatable &amp; Koordinasi Profesional
              </h4>
              <p className="text-sm text-[#0E0E0E]/75 leading-relaxed font-normal font-sans">
                Gaya panggung yang hangat, cerdas, dan tanpa sikap menggurui. Koordinasi pra-acara cepat, dilengkapi slide 16:9 siap pakai, naskah pembacaan MC resmi, serta technical rider panggung yang teruji.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
