import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, Phone, Instagram, Linkedin, Youtube, Video, Copy } from 'lucide-react';
import { MotionReveal } from './ui/motion-reveal';

interface ContactFormData {
  nama: string;
  organisasi: string;
  email: string;
  whatsapp: string;
  jenisAcara: string;
  tanggalAcara: string;
  jumlahPeserta: string;
  pesan: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nama: '',
    organisasi: '',
    email: '',
    whatsapp: '',
    jenisAcara: 'Seminar',
    tanggalAcara: '',
    jumlahPeserta: '100 - 300 Orang',
    pesan: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWaText = () => {
    return encodeURIComponent(
      `Halo Tim Manajemen Rofianto,\n\n` +
      `Saya ingin mengundang Rofianto sebagai speaker:\n` +
      `• Nama: ${formData.nama || '-'}\n` +
      `• Organisasi / Kampus: ${formData.organisasi || '-'}\n` +
      `• Email: ${formData.email || '-'}\n` +
      `• WhatsApp: ${formData.whatsapp || '-'}\n` +
      `• Jenis Acara: ${formData.jenisAcara}\n` +
      `• Tanggal: ${formData.tanggalAcara || 'Menyesuaikan'}\n` +
      `• Jumlah Peserta: ${formData.jumlahPeserta}\n` +
      `• Pesan / Sasaran: ${formData.pesan || '-'}\n\n` +
      `Mohon informasi ketersediaan jadwal. Terima kasih!`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const url = `https://wa.me/6281234567890?text=${generateWaText()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopySummary = () => {
    const text = 
      `Permohonan Speaking - Rofianto\n` +
      `Nama: ${formData.nama}\n` +
      `Organisasi: ${formData.organisasi}\n` +
      `Email: ${formData.email}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      `Jenis Acara: ${formData.jenisAcara}\n` +
      `Tanggal: ${formData.tanggalAcara || 'Menyesuaikan'}\n` +
      `Jumlah Peserta: ${formData.jumlahPeserta}\n` +
      `Pesan: ${formData.pesan || '-'}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#FAF8F5] border-t border-[#13260A]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <MotionReveal>
          {/* Section Header */}
          <div className="flex items-center justify-between border-b border-[#13260A]/15 pb-4 mb-14 sm:mb-20">
            <span className="text-xs font-bold tracking-widest text-[#13260A] uppercase font-display">
              12 / KONTAK &amp; RESERVASI JADWAL
            </span>
            <span className="text-xs font-semibold text-[#0E0E0E]/50 tracking-wider uppercase font-sans">
              FORMULIR RESMI
            </span>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Form Header & Description */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E0E0E] tracking-tight leading-[1.04] font-display [text-wrap:balance]">
              Let's Create <br />
              <span className="font-serif italic font-normal text-[#13260A]">
                an Impact.
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-[#0E0E0E]/80 leading-relaxed font-normal font-sans">
              Lengkapi formulir di samping untuk mendiskusikan tanggal acara, format pembicaraan, dan rancangan materi yang paling berdampak bagi audiens Anda.
            </p>

            <div className="pt-6 border-t border-[#13260A]/15 space-y-4">
              <span className="text-xs font-bold tracking-wider uppercase text-[#13260A] block font-display">
                Kontak Langsung Manajemen:
              </span>

              <div className="space-y-2 text-xs font-medium font-sans">
                <div className="flex items-center gap-2 text-[#0E0E0E]">
                  <Phone className="w-3.5 h-3.5 text-[#E2872A]" />
                  <span>WhatsApp Resmi: +62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-2 text-[#0E0E0E]">
                  <Mail className="w-3.5 h-3.5 text-[#E2872A]" />
                  <span>Email Koordinasi: contact@rofianto.id</span>
                </div>
              </div>

              <div className="text-xs font-sans text-[#0E0E0E]/50 pt-2">
                *Waktu Respons: Maksimal 1x24 jam kerja panitia.
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Form */}
          <div className="lg:col-span-7 bg-white border border-[#13260A]/15 rounded-3xl p-8 sm:p-12 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-2 font-display">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      placeholder="Nama PIC Acara"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#13260A]/20 text-sm text-[#0E0E0E] placeholder-[#0E0E0E]/40 focus:outline-none focus:border-[#13260A] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-2 font-display">
                      Organisasi / Kampus *
                    </label>
                    <input
                      type="text"
                      required
                      name="organisasi"
                      value={formData.organisasi}
                      onChange={handleChange}
                      placeholder="Nama Institusi / BEM / Perusahaan"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#13260A]/20 text-sm text-[#0E0E0E] placeholder-[#0E0E0E]/40 focus:outline-none focus:border-[#13260A] font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-2 font-display">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@organisasi.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#13260A]/20 text-sm text-[#0E0E0E] placeholder-[#0E0E0E]/40 focus:outline-none focus:border-[#13260A] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-2 font-display">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="081234567890"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#13260A]/20 text-sm text-[#0E0E0E] placeholder-[#0E0E0E]/40 focus:outline-none focus:border-[#13260A] font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-2 font-display">
                      Jenis Acara
                    </label>
                    <select
                      name="jenisAcara"
                      value={formData.jenisAcara}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-[#FAF8F5] border border-[#13260A]/20 text-sm text-[#0E0E0E] focus:outline-none focus:border-[#13260A] font-sans"
                    >
                      <option value="Seminar">Seminar</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Talkshow">Talkshow</option>
                      <option value="Corporate Training">Corporate Training</option>
                      <option value="Community Event">Community Event</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-2 font-display">
                      Tanggal Acara
                    </label>
                    <input
                      type="date"
                      name="tanggalAcara"
                      value={formData.tanggalAcara}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-[#FAF8F5] border border-[#13260A]/20 text-sm text-[#0E0E0E] focus:outline-none focus:border-[#13260A] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-2 font-display">
                      Jumlah Peserta
                    </label>
                    <select
                      name="jumlahPeserta"
                      value={formData.jumlahPeserta}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-[#FAF8F5] border border-[#13260A]/20 text-sm text-[#0E0E0E] focus:outline-none focus:border-[#13260A] font-sans"
                    >
                      <option value="< 50 Orang">&lt; 50 Orang</option>
                      <option value="50 - 150 Orang">50 - 150 Orang</option>
                      <option value="150 - 500 Orang">150 - 500 Orang</option>
                      <option value="500 - 1.500 Orang">500 - 1.500 Orang</option>
                      <option value="> 1.500 Orang">&gt; 1.500 Orang</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-2 font-display">
                    Pesan &amp; Sasaran Khusus Acara
                  </label>
                  <textarea
                    rows={3}
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleChange}
                    placeholder="Ceritakan gambaran umum audiens dan hasil yang ingin dicapai..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#13260A]/20 text-sm text-[#0E0E0E] placeholder-[#0E0E0E]/40 focus:outline-none focus:border-[#13260A] font-sans"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#E2872A] hover:bg-[#cf741b] active:bg-[#b86111] transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-md font-sans"
                  >
                    <span>Kirim Permintaan Speaking</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>

              </form>
            ) : (
              /* Confirmation Screen */
              <div className="text-center py-10 space-y-6">
                <div className="w-14 h-14 bg-[#13260A] text-[#E2872A] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-[#0E0E0E] font-display">
                  Permintaan Speaking Telah Dirangkum
                </h3>

                <p className="text-sm text-[#0E0E0E]/80 max-w-md mx-auto leading-relaxed font-sans">
                  Terima kasih, <strong>{formData.nama}</strong> dari <strong>{formData.organisasi}</strong>. Data telah siap untuk diteruskan ke tim manajemen.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendWhatsApp}
                    className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-sans text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Lanjutkan ke WhatsApp Manajemen</span>
                  </button>

                  <button
                    onClick={handleCopySummary}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#FAF8F5] border border-[#13260A]/20 hover:bg-[#FAF8F5]/80 text-[#0E0E0E] font-sans text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-[#13260A]" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Tersalin!' : 'Salin Teks Permohonan'}</span>
                  </button>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#13260A] hover:underline uppercase tracking-wider font-sans"
                  >
                    ← Edit Formulir Kembali
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
        </MotionReveal>

      </div>
    </section>
  );
};
