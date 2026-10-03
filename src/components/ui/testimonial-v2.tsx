import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  organization: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    text: "Sesi yang dibawakan Rofianto membuka sudut pandang ratusan mahasiswa kami. Materinya bukan sekadar euforia sesaat, melainkan ada framework konkret yang langsung bisa dieksekusi 24 jam pertama.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    name: "Nadia Ramadhani",
    role: "Ketua Pelaksana Seminar Nasional",
    organization: "BEM Universitas Indonesia"
  },
  {
    text: "Sesi AI dan produktivitas Rofianto langsung dipraktikkan tim kami esok harinya. Menghemat jam kerja repetitif dan membuat tim lebih fokus pada inisiatif strategis.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    name: "Dimas Prasetyo",
    role: "Head of People & Culture",
    organization: "Tech Enterprise Jakarta"
  },
  {
    text: "Energi panggungnya hangat, cerdas, dan interaktif tanpa sikap menggurui. Tanya jawab dua arah berlangsung sangat hidup sampai menit terakhir.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    name: "Clarissa Wijaya",
    role: "Community Lead",
    organization: "Youth Startup Hub Surabaya"
  },
  {
    text: "Koordinasi pra-acara bersama manajemen Rofianto sangat cepat dan profesional. Slide 16:9 siap pakai, naskah MC resmi, dan technical rider sangat memudahkan panitia.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    name: "Fajar Kurniawan",
    role: "Project Director",
    organization: "National Leadership Summit"
  },
  {
    text: "Peserta bertahan penuh selama 2 jam tanpa rasa bosan. Yang paling bernilai adalah lembar kerja aksi mikro yang dibagikan — peserta pulang membawa rencana nyata.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    name: "Aisyah Putri",
    role: "Koordinator Acara",
    organization: "Himpunan Mahasiswa Manajemen"
  },
  {
    text: "Materi personal branding-nya sangat realistis dan etis. Menghindari klise flexing kosong di media sosial dan mengarahkan anak muda untuk fokus pada pembuktian kompetensi nyata.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80",
    name: "Reza Mahendra",
    role: "Creative Director",
    organization: "Digital Growth Lab"
  },
  {
    text: "Salah satu narasumber muda paling berbobot yang pernah kami undang ke kampus. Penyampaiannya sangat menyentuh realitas mental mahasiswa generasi saat ini.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    name: "Dr. Hendra Gunawan",
    role: "Kepala Bidang Kemahasiswaan",
    organization: "Fakultas Ilmu Komputer"
  },
  {
    text: "Framework ROFI 4A benar-benar membantu peserta workshop kami memetakan masalah, menyelaraskan prioritas, dan mulai bergerak tanpa takut salah.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    name: "Bagas Wicaksono",
    role: "Founder & Community Lead",
    organization: "Solopreneur Movement ID"
  },
  {
    text: "Auditorium berkapasitas 800 orang terasa begitu hidup. Rofianto mampu membawa pesan yang mendalam dengan gaya yang sangat relatable bagi Gen Z.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
    name: "Tiara Kusuma",
    role: "Ketua Divisi Acara",
    organization: "Youth Empowerment Forum"
  },
];

const firstColumn = TESTIMONIALS_DATA.slice(0, 3);
const secondColumn = TESTIMONIALS_DATA.slice(3, 6);
const thirdColumn = TESTIMONIALS_DATA.slice(6, 9);

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  className = '',
  testimonials,
  duration = 14
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.ul
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map((item, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? 'true' : 'false'}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.02,
                    y: -6,
                    boxShadow: '0 20px 40px -12px rgba(19, 38, 10, 0.12), 0 0 0 1px rgba(19, 38, 10, 0.12)',
                    transition: { type: 'spring', stiffness: 400, damping: 20 }
                  }}
                  className="p-8 sm:p-9 rounded-3xl border border-[#13260A]/10 shadow-md shadow-[#13260A]/5 max-w-sm w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-[#E2872A]/40"
                >
                  <blockquote className="m-0 p-0 flex flex-col justify-between h-full space-y-6">
                    
                    {/* Quotation Icon and Rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#FFB800]">
                        {[...Array(5)].map((_, sIdx) => (
                          <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-[#13260A]/20 group-hover:text-[#E2872A] transition-colors" />
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-[#0E0E0E]/80 text-sm sm:text-base leading-relaxed font-sans font-normal m-0">
                      "{item.text}"
                    </p>

                    {/* Author Footer */}
                    <footer className="flex items-center gap-3 pt-4 border-t border-[#13260A]/10">
                      <img
                        width={44}
                        height={44}
                        src={item.image}
                        alt={item.name}
                        className="h-11 w-11 rounded-full object-cover ring-2 ring-[#FAF8F5] group-hover:ring-[#E2872A]/40 transition-all shrink-0"
                        loading="lazy"
                      />
                      <div className="flex flex-col min-w-0">
                        <cite className="font-bold not-italic tracking-tight text-sm text-[#0E0E0E] font-display truncate">
                          {item.name}
                        </cite>
                        <span className="text-xs text-[#13260A] font-semibold truncate font-sans">
                          {item.role}
                        </span>
                        <span className="text-[11px] text-[#0E0E0E]/50 truncate font-sans">
                          {item.organization}
                        </span>
                      </div>
                    </footer>

                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export const TestimonialV2: React.FC = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#13260A]/10 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto"
      >
        {/* Header matching Lewis Howes & Rofianto Editorial Standard */}
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-14 text-center space-y-4">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full text-xs font-bold tracking-wider uppercase text-[#13260A] bg-[#13260A]/5 border border-[#13260A]/15 font-display">
            TESTIMONI PENYELENGGARA &amp; AUDIENS
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-5xl font-serif text-[#0E0E0E] tracking-tight leading-[1.12]"
          >
            Refleksi Nyata dari <br />
            <span className="font-sans font-black text-[#13260A]">Panggung ke Panggung</span>
          </h2>

          <p className="text-sm sm:text-base text-[#0E0E0E]/75 leading-relaxed font-sans max-w-lg">
            Kesan autentik dari panitia seminar kampus, pimpinan divisi korporasi, dan komunitas pemuda yang telah bekerja sama dengan Rofianto.
          </p>
        </div>

        {/* 3 Animated Infinite Columns with Vertical Blur Fade Mask */}
        <div
          className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] max-h-[720px] overflow-hidden py-2"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={21} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={18} />
        </div>

        {/* Bottom Assurance Note */}
        <div className="pt-10 text-center text-xs font-medium text-[#0E0E0E]/50 font-sans">
          *Ulasan dikumpulkan langsung dari evaluasi resmi panitia penyelenggara dan peserta acara.
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialV2;
