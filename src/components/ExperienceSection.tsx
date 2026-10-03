import React from 'react';
import { motion } from 'framer-motion';
import { MotionReveal } from './ui/motion-reveal';
import {
  GraduationCap,
  Sparkles,
  Building2,
  Cpu,
  Radio,
  ShoppingBag,
  Newspaper,
  ShieldCheck,
  Compass,
  Globe2,
  Zap,
  Users2,
  Award,
  Flag,
  HeartHandshake,
  BookOpen
} from 'lucide-react';

interface PartnerItem {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  abbr: string;
}

const ROW_TOP_PARTNERS: PartnerItem[] = [
  {
    name: 'Universitas Indonesia',
    category: 'Mitra Kampus & BEM',
    icon: GraduationCap,
    abbr: 'UI'
  },
  {
    name: 'Google for Startups',
    category: 'Inkubasi AI & Ekosistem',
    icon: Sparkles,
    abbr: 'GFS'
  },
  {
    name: 'Bank Central Asia',
    category: 'In-House Leadership',
    icon: Building2,
    abbr: 'BCA'
  },
  {
    name: 'Institut Teknologi Bandung',
    category: 'Tech & Innovation Forum',
    icon: Cpu,
    abbr: 'ITB'
  },
  {
    name: 'Telkom Indonesia',
    category: 'Digital Workforce Training',
    icon: Radio,
    abbr: 'TLK'
  },
  {
    name: 'Shopee Indonesia',
    category: 'Youth Career Initiative',
    icon: ShoppingBag,
    abbr: 'SHP'
  },
  {
    name: 'Kompas Gramedia',
    category: 'Edukasi & Media Partner',
    icon: Newspaper,
    abbr: 'KG'
  },
  {
    name: 'Paragon Technology',
    category: 'Growth Mindset Workshop',
    icon: ShieldCheck,
    abbr: 'PTI'
  }
];

const ROW_BOTTOM_PARTNERS: PartnerItem[] = [
  {
    name: 'Universitas Gadjah Mada',
    category: 'Stadium General & Seminar',
    icon: Compass,
    abbr: 'UGM'
  },
  {
    name: 'Tech In Asia Indonesia',
    category: 'Keynote Speaker Summit',
    icon: Globe2,
    abbr: 'TIA'
  },
  {
    name: 'Astra International',
    category: 'Talent Management Program',
    icon: Zap,
    abbr: 'AST'
  },
  {
    name: 'BEM Nusantara',
    category: 'National Youth Forum',
    icon: Users2,
    abbr: 'BN'
  },
  {
    name: 'Startup World Cup ID',
    category: 'Innovation Keynote',
    icon: Award,
    abbr: 'SWC'
  },
  {
    name: 'Kemenpora RI',
    category: 'Inisiatif Pemuda Berdampak',
    icon: Flag,
    abbr: 'KMP'
  },
  {
    name: 'GoTo Impact Foundation',
    category: 'Social Innovation & AI',
    icon: HeartHandshake,
    abbr: 'GIF'
  },
  {
    name: 'Universitas Airlangga',
    category: 'Masterclass Mahasiswa',
    icon: BookOpen,
    abbr: 'UNAIR'
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#13260A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with MotionReveal */}
        <MotionReveal>
          <div className="flex items-center justify-between border-b border-[#13260A]/15 pb-4 mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-widest text-[#13260A] uppercase font-display">
              06 / JAM TERBANG &amp; JEJAK AUDIENS
            </span>
            <span className="text-xs font-semibold text-[#0E0E0E]/50 tracking-wider uppercase font-sans">
              REKAM JEJAK
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-3xl mb-14 sm:mb-18 space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0E0E0E] tracking-tight leading-[1.04] font-display [text-wrap:balance]">
              Berbicara untuk Menggerakkan, Bukan Sekadar Menghibur.
            </h2>
            <p className="text-base sm:text-lg text-[#0E0E0E]/80 leading-relaxed font-normal font-sans">
              Komitmen teguh untuk menghadirkan materi yang bernas, interaktif, dan meninggalkan jejak perubahan pola pikir yang dapat diuji pada setiap panggung yang dipercayakan.
            </p>
          </div>
        </MotionReveal>

        {/* Monumental Editorial Numbers Strip */}
        <MotionReveal delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-[#13260A]/15 divide-y sm:divide-y-0 sm:divide-x divide-[#13260A]/15 mb-20 sm:mb-24">
            
            <div className="py-8 sm:py-10 sm:px-8 first:pl-0 space-y-1.5">
              <div className="text-4xl sm:text-6xl font-black text-[#13260A] font-display tracking-tight">
                XX<span className="text-[#E2872A] font-serif font-normal">+</span>
              </div>
              <div className="text-xs font-bold tracking-wider text-[#0E0E0E] uppercase pt-2 border-t border-[#13260A]/10 font-display">
                Speaking Sessions
              </div>
              <p className="text-xs text-[#0E0E0E]/70 font-sans">
                Keynote, seminar akbar, &amp; in-house masterclass.
              </p>
            </div>

            <div className="py-8 sm:py-10 sm:px-8 space-y-1.5">
              <div className="text-4xl sm:text-6xl font-black text-[#13260A] font-display tracking-tight">
                XX,XXX<span className="text-[#E2872A] font-serif font-normal">+</span>
              </div>
              <div className="text-xs font-bold tracking-wider text-[#0E0E0E] uppercase pt-2 border-t border-[#13260A]/10 font-display">
                Peserta Terdampak
              </div>
              <p className="text-xs text-[#0E0E0E]/70 font-sans">
                Mahasiswa, profesional muda, &amp; praktisi.
              </p>
            </div>

            <div className="py-8 sm:py-10 sm:px-8 space-y-1.5">
              <div className="text-4xl sm:text-6xl font-black text-[#13260A] font-display tracking-tight">
                XX<span className="text-[#E2872A] font-serif font-normal">+</span>
              </div>
              <div className="text-xs font-bold tracking-wider text-[#0E0E0E] uppercase pt-2 border-t border-[#13260A]/10 font-display">
                Organisasi Mitra
              </div>
              <p className="text-xs text-[#0E0E0E]/70 font-sans">
                Universitas, korporasi, &amp; komunitas rintisan.
              </p>
            </div>

            <div className="py-8 sm:py-10 sm:px-8 last:pr-0 space-y-1.5">
              <div className="text-4xl sm:text-6xl font-black text-[#13260A] font-display tracking-tight">
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
        </MotionReveal>

        {/* Editorial Photo Asset: Auditorium Lecture Hall */}
        <MotionReveal delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-20 sm:mb-24">
            <div className="lg:col-span-7">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-[#0E0E0E] border border-[#13260A]/20 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                  alt="Auditorium lecture hall full of engaged audience members"
                  className="w-full h-full object-cover grayscale contrast-115 filter hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#0E0E0E]/60 uppercase tracking-wider font-sans">
                <span>Dokumentasi Partisipasi Audiens</span>
                <span>Ruang Seminar &amp; Auditorium</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold tracking-wider uppercase text-[#13260A] font-display">
                DINAMIKA AUDIENS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E0E0E] font-display tracking-tight leading-snug">
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
        </MotionReveal>

        {/* 
          NEW 2-ROW OPPOSITE ANIMATED LOGOS SECTION:
          Row 1 scrolling to LEFT, Row 2 scrolling to RIGHT with smooth seamless loop!
        */}
        <MotionReveal delay={0.2}>
          <div className="rounded-3xl border border-[#13260A]/15 bg-[#F2EFE8]/70 p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
            
            {/* Header info */}
            <div className="max-w-2xl mb-8 sm:mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#13260A] block mb-1 font-display">
                MITRA INSTITUSIONAL &amp; JEJARING
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0E0E0E] tracking-tight">
                Jejaring Kolaborasi &amp; Mitra Terpilih
              </h3>
              <p className="text-xs sm:text-sm text-[#0E0E0E]/70 mt-1 font-sans">
                Organisasi, kampus, korporasi, dan komunitas yang telah bekerja sama menghadirkan panggung dan masterclass Rofianto.
              </p>
            </div>

            {/* Marquee Container with Horizontal Left/Right Fade Mask */}
            <div className="space-y-4 sm:space-y-5 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] overflow-hidden py-1">
              
              {/* ROW 1: ANIMASI BERJALAN KE KIRI (Continuous Marquee Left) */}
              <div className="flex overflow-hidden select-none">
                <motion.div
                  animate={{
                    x: ['0%', '-50%'],
                  }}
                  transition={{
                    duration: 32,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="flex items-center gap-4 sm:gap-5 shrink-0"
                >
                  {[...ROW_TOP_PARTNERS, ...ROW_TOP_PARTNERS].map((partner, idx) => {
                    const IconComponent = partner.icon;
                    return (
                      <div
                        key={`row1-${idx}`}
                        className="p-4 sm:p-5 rounded-2xl bg-white border border-[#13260A]/10 shadow-sm hover:shadow-md hover:border-[#13260A]/30 flex items-center gap-3.5 min-w-[260px] sm:min-w-[280px] shrink-0 transition-all duration-300 group cursor-default"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#13260A]/10 text-[#13260A] flex items-center justify-center shrink-0 group-hover:bg-[#13260A] group-hover:text-white transition-colors duration-300">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-[#0E0E0E] font-display truncate group-hover:text-[#13260A] transition-colors">
                            {partner.name}
                          </div>
                          <div className="text-[11px] font-semibold text-[#13260A]/70 uppercase tracking-wider font-sans truncate">
                            {partner.category}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* ROW 2: ANIMASI BERJALAN KE KANAN (Continuous Marquee Right) */}
              <div className="flex overflow-hidden select-none">
                <motion.div
                  animate={{
                    x: ['-50%', '0%'],
                  }}
                  transition={{
                    duration: 36,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="flex items-center gap-4 sm:gap-5 shrink-0"
                >
                  {[...ROW_BOTTOM_PARTNERS, ...ROW_BOTTOM_PARTNERS].map((partner, idx) => {
                    const IconComponent = partner.icon;
                    return (
                      <div
                        key={`row2-${idx}`}
                        className="p-4 sm:p-5 rounded-2xl bg-white border border-[#13260A]/10 shadow-sm hover:shadow-md hover:border-[#13260A]/30 flex items-center gap-3.5 min-w-[260px] sm:min-w-[280px] shrink-0 transition-all duration-300 group cursor-default"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#13260A]/10 text-[#13260A] flex items-center justify-center shrink-0 group-hover:bg-[#E2872A] group-hover:text-white transition-colors duration-300">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-[#0E0E0E] font-display truncate group-hover:text-[#13260A] transition-colors">
                            {partner.name}
                          </div>
                          <div className="text-[11px] font-semibold text-[#13260A]/70 uppercase tracking-wider font-sans truncate">
                            {partner.category}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

            </div>

            {/* Bottom verified indicator */}
            <div className="mt-6 pt-4 border-t border-[#13260A]/10 flex items-center justify-between text-xs text-[#0E0E0E]/50 font-sans">
              <span>*Terbuka untuk kolaborasi keynote, seminar kampus, dan in-house masterclass.</span>
              <span className="font-semibold text-[#13260A]">100% Sesi Terverifikasi</span>
            </div>

          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
