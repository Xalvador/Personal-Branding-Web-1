import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { MotionReveal } from './ui/motion-reveal';

interface ArticleItem {
  id: string;
  category: string;
  tag: string;
  date: string;
  title: string;
  thumbnail: string;
}

const CATEGORIES = [
  {
    id: 'mindset',
    title: 'Mindset',
    description: 'Pelajari cara merombak batasan mental, mengatasi imposter syndrome, dan membangun ketahanan diri dalam menghadapi ketidakpastian zaman.'
  },
  {
    id: 'ai',
    title: 'Produktivitas & AI',
    description: 'Strategi taktis mengintegrasikan AI ke dalam rutinitas kerja dan belajar untuk melipatgandakan kecepatan eksekusi tanpa kehilangan esensi autentik.'
  },
  {
    id: 'branding',
    title: 'Personal Branding',
    description: 'Membangun reputasi dan nilai diri di era digital secara berbobot dan konsisten agar membuka peluang karier dan bisnis nyata.'
  },
  {
    id: 'business',
    title: 'Karier & Bisnis',
    description: 'Wawasan seputar memulai usaha ramping (lean business), negosiasi, kepemimpinan tim muda, dan manajemen peluang.'
  },
  {
    id: 'habits',
    title: 'Life & Habits',
    description: 'Membangun sistem kebiasaan harian, disiplin waktu, dan menjaga keselarasan antara ambisi dengan kedamaian batin.'
  }
];

const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'art-1',
    category: 'mindset',
    tag: 'ESAI · MINDSET',
    date: 'OKT 2026',
    title: 'Mengapa Overthinking Adalah Bentuk Ketakutan yang Menyamar Jadi Kehati-hatian',
    thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'art-2',
    category: 'mindset',
    tag: 'REFLEKSI · MINDSET',
    date: 'SEP 2026',
    title: 'Seni Memutus Siklus Keraguan Diri dengan Aturan Tindakan 5 Detik',
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'art-3',
    category: 'ai',
    tag: 'TEKNOLOGI · AI',
    date: 'SEP 2026',
    title: 'Bagaimana AI Mengubah Cara Kita Belajar dan Bekerja Secara Fundamental',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'art-4',
    category: 'ai',
    tag: 'PRODUKTIVITAS · SISTEM',
    date: 'AGU 2026',
    title: 'Sistem Mengalahkan Motivasi: Mengapa Kebiasaan Kecil Selalu Menang',
    thumbnail: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'art-5',
    category: 'branding',
    tag: 'REPUTASI · KARIER',
    date: 'AGU 2026',
    title: 'Personal Branding Tanpa Flexing: Mengartikulasikan Keahlian Nyata di Era Digital',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=300&q=80'
  }
];

export const TopicsArchiveSection: React.FC = () => {
  const [selectedCatId, setSelectedCatId] = useState<string>('mindset');

  const activeCategory = CATEGORIES.find((c) => c.id === selectedCatId) || CATEGORIES[0];

  const filteredArticles = ARTICLES_DATA.filter((a) => {
    if (selectedCatId === 'mindset') return true;
    return a.category === selectedCatId;
  });

  return (
    <section id="insights" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#13260A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Category Navigator matching Lewis Howes Left Side */}
          <div className="lg:col-span-5 space-y-8">
            <MotionReveal duration={0.8} yOffset={24}>
              {/* Active Category Display */}
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-serif text-[#0E0E0E] tracking-tight leading-tight">
                  {activeCategory.title}
                </h2>
                <p className="text-sm sm:text-base text-[#0E0E0E]/75 leading-relaxed font-sans">
                  {activeCategory.description}
                </p>
                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E0E0E] hover:text-[#E2872A] transition-colors"
                  >
                    <span>Semua Tulisan &amp; Catatan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Inactive Category Navigation Links Stack in Large Typography */}
              <div className="pt-6 border-t border-[#13260A]/15 space-y-3">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCatId(cat.id)}
                    className={`block text-2xl sm:text-3xl font-serif transition-colors text-left cursor-pointer ${
                      selectedCatId === cat.id
                        ? 'text-[#13260A] font-bold underline underline-offset-8 decoration-2 decoration-[#E2872A]'
                        : 'text-[#0E0E0E]/35 hover:text-[#0E0E0E]'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Stacked Article / Episode Rows matching Lewis Howes */}
          <div className="lg:col-span-7 space-y-6 divide-y divide-[#13260A]/10">
            <MotionReveal delay={0.15} duration={0.8} yOffset={24}>
              {filteredArticles.map((article, idx) => (
                <div
                  key={article.id}
                  className={`${idx !== 0 ? 'pt-6' : ''} flex items-start gap-4 sm:gap-6 group cursor-pointer`}
                >
                  {/* Thumbnail Photo on the Left */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-gray-200 shrink-0 shadow-sm">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Article Info on the Right */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-[#0E0E0E]/50 uppercase font-display">
                      <span className="text-[#E2872A]">{article.tag}</span>
                      <span>/</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-display text-[#0E0E0E] group-hover:text-[#13260A] transition-colors leading-snug">
                      {article.title}
                    </h3>
                  </div>
                </div>
              ))}
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
