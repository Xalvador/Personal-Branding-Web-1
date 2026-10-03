import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Copy } from 'lucide-react';
import { SPEAKING_TOPICS_DATA } from '../data/websiteData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTopic?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedTopic = '',
}) => {
  const [formData, setFormData] = useState({
    nama: '',
    organisasi: '',
    email: '',
    whatsapp: '',
    jenisAcara: 'Seminar',
    tanggalAcara: '',
    jumlahPeserta: '100 - 300 Orang',
    topik: preselectedTopic || SPEAKING_TOPICS_DATA[0].title,
    pesan: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedTopic) {
      setFormData((prev) => ({ ...prev, topik: preselectedTopic }));
    }
  }, [preselectedTopic]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWaText = () => {
    return encodeURIComponent(
      `Halo Tim Manajemen Rofianto,\n\n` +
      `Saya ingin mengajukan permohonan pembicara untuk Rofianto:\n` +
      `• Nama: ${formData.nama || '-'}\n` +
      `• Organisasi / Kampus: ${formData.organisasi || '-'}\n` +
      `• Email: ${formData.email || '-'}\n` +
      `• WhatsApp: ${formData.whatsapp || '-'}\n` +
      `• Jenis Acara: ${formData.jenisAcara}\n` +
      `• Tanggal: ${formData.tanggalAcara || 'Menyesuaikan'}\n` +
      `• Jumlah Peserta: ${formData.jumlahPeserta}\n` +
      `• Topik Pilihan: ${formData.topik}\n` +
      `• Catatan: ${formData.pesan || '-'}\n\n` +
      `Mohon informasi ketersediaan jadwal serta prosedur administrasi. Terima kasih!`
    );
  };

  const handleCopy = () => {
    const text = 
      `Permohonan Speaking - Rofianto\n` +
      `Nama: ${formData.nama}\n` +
      `Organisasi: ${formData.organisasi}\n` +
      `Email: ${formData.email}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      `Jenis Acara: ${formData.jenisAcara}\n` +
      `Tanggal: ${formData.tanggalAcara || 'Menyesuaikan'}\n` +
      `Jumlah Peserta: ${formData.jumlahPeserta}\n` +
      `Topik: ${formData.topik}\n` +
      `Pesan: ${formData.pesan || '-'}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/6281234567890?text=${generateWaText()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E0E0E]/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] border border-[#13260A] p-8 sm:p-10 space-y-6 shadow-[12px_12px_0px_0px_#13260A] my-8 max-h-[92vh] overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#13260A]/15">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#13260A] font-display">
              PERMOHONAN SPEAKING
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0E0E0E] tracking-tight font-display mt-0.5">
              Undang Rofianto sebagai Speaker
            </h2>
            <p className="text-xs text-[#0E0E0E]/70 mt-1 font-sans">
              Lengkapi formulir untuk cek jadwal dan koordinasi administrasi panitia.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#0E0E0E]/60 hover:text-[#0E0E0E] hover:bg-[#F2EFE8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-1 font-display">
                  Nama Anda / PIC *
                </label>
                <input
                  type="text"
                  required
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Nama Lengkap"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#13260A]/20 text-xs sm:text-sm text-[#0E0E0E] focus:outline-none focus:border-[#13260A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-1 font-display">
                  Institusi / Organisasi *
                </label>
                <input
                  type="text"
                  required
                  name="organisasi"
                  value={formData.organisasi}
                  onChange={handleChange}
                  placeholder="Nama Kampus / Perusahaan"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#13260A]/20 text-xs sm:text-sm text-[#0E0E0E] focus:outline-none focus:border-[#13260A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-1 font-display">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@domain.com"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#13260A]/20 text-xs sm:text-sm text-[#0E0E0E] focus:outline-none focus:border-[#13260A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-1 font-display">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="081234567890"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#13260A]/20 text-xs sm:text-sm text-[#0E0E0E] focus:outline-none focus:border-[#13260A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-1 font-display">
                  Jenis Acara
                </label>
                <select
                  name="jenisAcara"
                  value={formData.jenisAcara}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#13260A]/20 text-xs text-[#0E0E0E] focus:outline-none focus:border-[#13260A]"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-1 font-display">
                  Estimasi Tanggal
                </label>
                <input
                  type="date"
                  name="tanggalAcara"
                  value={formData.tanggalAcara}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#13260A]/20 text-xs sm:text-sm text-[#0E0E0E] focus:outline-none focus:border-[#13260A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-1 font-display">
                  Topik Pilihan
                </label>
                <select
                  name="topik"
                  value={formData.topik}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#13260A]/20 text-xs text-[#0E0E0E] focus:outline-none focus:border-[#13260A]"
                >
                  {SPEAKING_TOPICS_DATA.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                  <option value="Topik Kustom / Konsultasi Tema">Topik Kustom / Konsultasi Tema</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-1 font-display">
                  Jumlah Peserta
                </label>
                <select
                  name="jumlahPeserta"
                  value={formData.jumlahPeserta}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#13260A]/20 text-xs sm:text-sm text-[#0E0E0E] focus:outline-none focus:border-[#13260A]"
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
              <label className="block text-xs font-bold uppercase tracking-wider text-[#13260A] mb-1 font-display">
                Pesan Tambahan
              </label>
              <textarea
                rows={2}
                name="pesan"
                value={formData.pesan}
                onChange={handleChange}
                placeholder="Sasaran utama sesi atau profil audiens..."
                className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#13260A]/20 text-xs sm:text-sm text-[#0E0E0E] placeholder-[#0E0E0E]/40 focus:outline-none focus:border-[#13260A]"
              />
            </div>

            <div className="pt-3 border-t border-[#13260A]/10 flex items-center justify-between gap-3">
              <span className="text-xs text-[#0E0E0E]/50">
                Waktu Respons: 1x24 jam kerja
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold tracking-widest uppercase text-[#FAF8F5] bg-[#13260A] hover:bg-[#0E0E0E] transition-colors flex items-center gap-1.5 cursor-pointer font-sans"
              >
                <span>Kirim Permintaan</span>
                <Send className="w-3.5 h-3.5 text-[#E2872A]" />
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-4 font-sans">
            <div className="w-12 h-12 bg-[#13260A] text-[#E2872A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-[#0E0E0E] font-display">
              Permintaan Telah Diformat
            </h3>

            <p className="text-xs text-[#0E0E0E]/80 max-w-sm mx-auto leading-relaxed">
              Brief speaking telah dirangkum dan siap diteruskan langsung ke WhatsApp manajemen Rofianto.
            </p>

            <div className="p-4 bg-[#F2EFE8] border-l-2 border-[#13260A] text-left text-xs space-y-1 text-[#0E0E0E]">
              <div>• Pemohon: {formData.nama} ({formData.organisasi})</div>
              <div>• Acara: {formData.jenisAcara} ({formData.jumlahPeserta})</div>
              <div>• Topik: {formData.topik}</div>
              <div>• Tanggal: {formData.tanggalAcara || 'Menyesuaikan'}</div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Kirim Langsung ke WhatsApp Resmi</span>
              </button>

              <button
                onClick={handleCopy}
                className="w-full py-2.5 px-4 bg-[#FAF8F5] border border-[#13260A]/30 hover:bg-[#F2EFE8] text-[#0E0E0E] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-[#13260A]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Tersalin!' : 'Salin Format Surat Permohonan'}</span>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[#13260A] hover:underline uppercase tracking-wider font-sans"
              >
                ← Ubah Data Permohonan
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
