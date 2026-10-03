import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const BottomCtaBanner: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Theatrical Dark Rounded Box matching Lewis Howes Bottom Banner */}
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-r from-[#071304] via-[#13260A] to-[#0A1605] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/10">
          
          {/* Subtle Stage Radial Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#E2872A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Side: Headline & Inline Form (Matching Lewis Howes) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#FAF8F5] tracking-tight leading-[1.08] [text-wrap:balance]">
                  Bergabung Bersama Ribuan Generasi Muda dalam Perjalanan
                </h2>
                <div className="text-4xl sm:text-6xl lg:text-7xl font-black font-display text-white tracking-tight leading-none uppercase">
                  Naik Level.
                </div>
              </div>

              <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed font-sans">
                Dapatkan kurasi mingguan tentang alur kerja AI, sistem anti-overthinking, dan panduan praktis bertumbuh langsung di inbox Anda.
              </p>

              {/* Inline Form matching Lewis Howes (First Name, Email, Subscribe Now) */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2 max-w-xl">
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full sm:w-1/3 px-4 py-3.5 rounded-full bg-white text-[#0E0E0E] text-xs sm:text-sm placeholder-[#0E0E0E]/40 focus:outline-none focus:ring-2 focus:ring-[#E2872A]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Alamat Email Anda"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:w-1/2 px-4 py-3.5 rounded-full bg-white text-[#0E0E0E] text-xs sm:text-sm placeholder-[#0E0E0E]/40 focus:outline-none focus:ring-2 focus:ring-[#E2872A]"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#E2872A] hover:bg-[#cf741b] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Daftar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-2xl bg-white/10 border border-white/20 flex items-center gap-3 text-white max-w-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-medium">
                    Terima kasih, {name || 'Kawan'}! Anda telah terdaftar dalam buletin mingguan Naik Level.
                  </span>
                </div>
              )}

              <p className="text-[11px] text-white/50 font-sans">
                Privasi Anda terjaga sepenuhnya. Bebas spam, Anda bisa berhenti berlangganan kapan saja.
              </p>

            </div>

            {/* Right Side: Cutout Speaker Photo with Floating Preview Card */}
            <div className="lg:col-span-5 flex flex-col items-center relative">
              
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
                  alt="Rofianto Keynote Speaker"
                  className="w-full h-full object-cover object-top filter contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Book/Card Preview at bottom right (Matching Lewis Howes book badge) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md text-[#0E0E0E] p-3 rounded-xl shadow-xl flex items-center gap-3 border border-white/40">
                  <div className="w-10 h-12 rounded bg-[#13260A] text-white flex flex-col items-center justify-center text-[9px] font-black font-display shrink-0 p-1 text-center">
                    <span>NAIK</span>
                    <span className="text-[#E2872A]">LVL</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] font-bold text-[#E2872A] uppercase tracking-wider block font-display">
                      PANDUAN RESMI
                    </span>
                    <div className="text-xs font-bold text-[#0E0E0E] truncate">
                      Framework ROFI 4A
                    </div>
                    <div className="text-[10px] text-[#0E0E0E]/60 truncate">
                      Tersedia dalam sesi keynote &amp; training
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
