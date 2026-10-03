export interface TimelineMilestone {
  period: string;
  theme: string;
  description: string;
}

export interface PhilosophyCard {
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyPoints: string[];
}

export interface TopicItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  audience: string;
  outcomes: string[];
  formats: string[];
}

export interface FrameworkStep {
  name: 'AWARE' | 'ALIGN' | 'ACT' | 'ACCELERATE';
  indonesianTitle: string;
  definition: string;
  detail: string;
}

export interface InsightCard {
  id: string;
  category: 'Mindset' | 'AI' | 'Productivity' | 'Business' | 'Personal Growth' | 'Life';
  title: string;
  description: string;
  readTime: string;
  keyIdea: string;
}

export interface GalleryItem {
  id: string;
  category: 'Speaking' | 'Workshop' | 'Audience' | 'Behind the scenes' | 'Content' | 'Business';
  title: string;
  location: string;
  aspect: string;
}

export interface CollaborationType {
  id: string;
  title: 'SPEAKER' | 'TRAINER' | 'MODERATOR' | 'COLLABORATION';
  description: string;
  examples: string[];
}

// 1. Personal Story Timeline
export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    period: 'Fase Fondasi',
    theme: 'Technology and Software Background',
    description: 'Mengawali perjalanan dari dunia teknologi, rekayasa perangkat lunak, dan pemahaman logika komputasi. Membentuk cara berpikir analitis dan berorientasi sistem.'
  },
  {
    period: 'Fase Akselerasi',
    theme: 'Digital Marketing & Growth Operations',
    description: 'Mendalami strategi pemasaran digital, operasional program, dan pertumbuhan audiens. Belajar bagaimana mengomunikasikan nilai secara efektif ke publik luas.'
  },
  {
    period: 'Fase Pembelajaran',
    theme: 'Personal Struggles & Overcoming Inconsistency',
    description: 'Mengalami pergulatan nyata dengan keraguan diri, kebiasaan yang tidak produktif, dan rasa bimbang. Menjadi titik balik krusial untuk menemukan pentingnya disiplin dan sistem.'
  },
  {
    period: 'Fase Eksplorasi',
    theme: 'Entrepreneurship & AI Exploration',
    description: 'Membangun rintisan bisnis, menguji model baru, dan mengadopsi Artificial Intelligence secara mendalam untuk efisiensi kerja yang terukur.'
  },
  {
    period: 'Fase Berkelanjutan',
    theme: 'Building Systems & Helping Others Grow',
    description: 'Mendedikasikan energi untuk membagikan wawasan praktis kepada generasi muda, mahasiswa, dan profesional agar mereka juga mampu naik level dan hidup berdampak.'
  }
];

// 2. Philosophy Cards
export const PHILOSOPHY_DATA: PhilosophyCard[] = [
  {
    number: '01',
    title: 'MINDSET',
    tagline: 'Melihat Diri & Peluang Lebih Jernih',
    description: 'Melihat diri, masalah, dan peluang dengan perspektif yang lebih sehat dan konstruktif.',
    keyPoints: [
      'Menghancurkan ilusi fixed mindset & imposter syndrome',
      'Reframing kegagalan sebagai data pertumbuhan',
      'Fokus pada kendali internal daripada mengeluh'
    ]
  },
  {
    number: '02',
    title: 'ACTION',
    tagline: 'Menutup Jurang Antara Ide & Eksekusi',
    description: 'Mengubah insight menjadi tindakan nyata, bukan hanya konsumsi motivasi.',
    keyPoints: [
      'Menghentikan overthinking yang melumpuhkan',
      'Prinsip aksi mikro harian yang terukur',
      'Membangun momentum daripada menunggu mood'
    ]
  },
  {
    number: '03',
    title: 'AI',
    tagline: 'Leverage Teknologi Masa Depan',
    description: 'Memanfaatkan teknologi untuk bekerja lebih cepat, belajar lebih baik, dan membuka peluang baru.',
    keyPoints: [
      'Pemanfaatan AI untuk melipatgandakan output kerja',
      'Membebaskan waktu dari hal-hal repetitif',
      'Memperkuat kemampuan unik manusia dengan AI'
    ]
  },
  {
    number: '04',
    title: 'IMPACT',
    tagline: 'Bermanfaat Bagi Sesama',
    description: 'Membangun kehidupan yang tidak hanya berhasil untuk diri sendiri, tetapi juga memberi manfaat bagi orang lain.',
    keyPoints: [
      'Menyelaraskan ambisi pribadi dengan kebermanfaatan',
      'Menciptakan nilai nyata bagi lingkungan sekitar',
      'Membangun legasi yang berkelanjutan'
    ]
  }
];

// 3. Speaking Topics
export const SPEAKING_TOPICS_DATA: TopicItem[] = [
  {
    id: 'mindset-naik-level',
    number: '01',
    title: 'Mindset Naik Level',
    subtitle: 'Mengubah pola pikir, menghadapi keterbatasan, dan membangun keberanian untuk berkembang.',
    description: 'Sesi mendalam tentang bagaimana merombak batasan mental internal. Mengajarkan audiens cara membangun mentalitas tangguh yang adaptif terhadap perubahan dan tantangan hidup modern.',
    audience: 'Mahasiswa, Fresh Graduate, & Komunitas Pemuda',
    outcomes: [
      'Peta identifikasi mental blocker dan fixed mindset',
      'Framework membangun keberanian melangkah',
      'Rencana aksi personal 14 hari pasca-sesi'
    ],
    formats: ['Keynote (60-90 mnt)', 'Workshop (2-3 jam)']
  },
  {
    id: 'overthinking-to-action',
    number: '02',
    title: 'Dari Overthinking ke Action',
    subtitle: 'Membantu audiens keluar dari terlalu banyak berpikir dan mulai mengambil langkah nyata.',
    description: 'Banyak potensi mati karena overthinking. Sesi ini membekali audiens dengan psikologi aksi mikro, membedah mengapa kita prokrastinasi, dan teknik memutus rantai keraguan diri.',
    audience: 'Gen Z, Creative Workers, & Early Professionals',
    outcomes: [
      'Aturan 5 detik untuk memutus siklus overthinking',
      'Metode dekonstruksi tugas rumit menjadi langkah kecil',
      'Sistem akuntabilitas personal agar tidak mudah menyerah'
    ],
    formats: ['Keynote (60-90 mnt)', 'Interactive Seminar', 'Workshop']
  },
  {
    id: 'ai-produktivitas',
    number: '03',
    title: 'AI untuk Produktivitas',
    subtitle: 'Cara memanfaatkan AI untuk bekerja lebih cepat, belajar lebih efisien, dan meningkatkan kemampuan.',
    description: 'Bukan sekadar teori teknologi, melainkan panduan taktis menerapkan AI ke dalam rutinitas kerja harian dan akademik. Bagaimana menjadi profesional yang bernilai 3x lipat dengan bantuan AI.',
    audience: 'Young Professionals, Tim In-House, & Pegiat Teknologi',
    outcomes: [
      'Kerangka kerja prompt engineering yang solutif',
      'Alur kerja otomatisasi tugas administratif dan riset',
      'Menjaga sentuhan autentik manusia dalam era mesin'
    ],
    formats: ['Masterclass (2-4 jam)', 'Hands-on Bootcamp', 'Keynote']
  },
  {
    id: 'personal-branding-digital',
    number: '04',
    title: 'Personal Branding untuk Generasi Digital',
    subtitle: 'Membangun reputasi dan value di era digital.',
    description: 'Membangun personal brand bukan tentang flexing atau kepalsuan, melainkan mengartikulasikan keahlian sejati dan nilai Anda secara konsisten agar menjadi magnet peluang karier.',
    audience: 'Mahasiswa Tingkat Akhir, Job Seekers, & Solopreneur',
    outcomes: [
      'Menemukan niche & diferensiasi kompetensi Anda',
      'Strategi distribusi konten berbobot di LinkedIn & media sosial',
      'Mengubah reputasi digital menjadi kemitraan profesional nyata'
    ],
    formats: ['Keynote (60-90 mnt)', 'Workshop Interaktif']
  },
  {
    id: 'berani-membangun-masa-depan',
    number: '05',
    title: 'Berani Membangun Masa Depan',
    subtitle: 'Menemukan arah dan membangun keberanian untuk menciptakan masa depan.',
    description: 'Didesain khusus untuk mahasiswa, fresh graduate, dan profesional muda yang sedang berada di persimpangan jalan hidup. Memberikan kompas nilai dan ketenangan dalam melangkah.',
    audience: 'Generasi Muda, Organisasi Mahasiswa, & Pelajar',
    outcomes: [
      'Menentukan prioritas kompas hidup 3-5 tahun ke depan',
      'Mengatasi ketakutan akan kegagalan dan penolakan',
      'Membangun jejaring pertemanan yang saling mengangkat'
    ],
    formats: ['Keynote Inspiratif', 'Talkshow Akbar', 'Stadium General']
  },
  {
    id: 'entrepreneurship-solopreneur',
    number: '06',
    title: 'Entrepreneurship & Solopreneur',
    subtitle: 'Membangun skill, sistem, dan peluang dengan memanfaatkan teknologi dan AI.',
    description: 'Panduan pragmatis memulai usaha ramping (lean business) dari nol. Membahas bagaimana satu orang dengan bantuan teknologi dan AI dapat mengelola bisnis yang menguntungkan.',
    audience: 'Founder Rintisan, Komunitas Startup, & Wirausaha Muda',
    outcomes: [
      'Validasi ide bisnis cepat tanpa modal besar',
      'Membangun sistem operasional solopreneur yang efisien',
      'Manajemen cashflow dan ketahanan mental wirausaha'
    ],
    formats: ['Workshop Praktis', 'Bootcamp Intensif (1-2 hari)']
  }
];

// 4. ROFI 4A Framework
export const FRAMEWORK_STEPS: FrameworkStep[] = [
  {
    name: 'AWARE',
    indonesianTitle: 'Sadar Diri & Kondisi',
    definition: 'Sadari kondisi diri, masalah, potensi, dan tujuan.',
    detail: 'Langkah pertama perubahan adalah kejujuran radikal melihat titik awal. Mengenali blindspot, kebiasaan yang menghambat, dan mendefinisikan apa yang sebenarnya ingin dicapai.'
  },
  {
    name: 'ALIGN',
    indonesianTitle: 'Selaras Nilai & Prioritas',
    definition: 'Selaraskan tujuan dengan nilai dan prioritas hidup.',
    detail: 'Menghindari jebakan mengejar kesuksesan semu. Memastikan setiap energi dan ambisi sejalan dengan prinsip integritas, kesehatan mental, dan kontribusi nyata.'
  },
  {
    name: 'ACT',
    indonesianTitle: 'Eksekusi Nyata Tanpa Tunda',
    definition: 'Ubah niat menjadi tindakan nyata.',
    detail: 'Motivasi tanpa tindakan adalah halusinasi. Memecah visi besar menjadi langkah mikro harian yang konsisten dan membangun ketahanan saat menghadapi rintangan.'
  },
  {
    name: 'ACCELERATE',
    indonesianTitle: 'Akselerasi dengan Sistem & AI',
    definition: 'Gunakan AI, teknologi, sistem, dan networking untuk mempercepat pertumbuhan.',
    detail: 'Memanfaatkan leverage modern: otomatisasi alur kerja, alat kecerdasan buatan, dan jejaring kolaboratif agar dampak yang dihasilkan berlipat ganda tanpa burnout.'
  }
];

// 5. Featured Insights
export const FEATURED_INSIGHTS: InsightCard[] = [
  {
    id: 'insight-1',
    category: 'Mindset',
    title: 'Mengapa Overthinking Adalah Bentuk Ketakutan yang Menyamar Jadi Kehati-hatian',
    description: 'Kita sering menipu diri sendiri dengan mengira kita sedang "berpikir matang", padahal sebenarnya otak kita hanya sedang mencari alasan untuk menunda.',
    readTime: '4 min baca',
    keyIdea: 'Keberanian dimulai dari toleransi terhadap ketidaksempurnaan.'
  },
  {
    id: 'insight-2',
    category: 'AI',
    title: 'Bagaimana AI Mengubah Cara Kita Belajar dan Bekerja Secara Fundamental',
    description: 'AI tidak akan menggantikan orang yang berpikir kritis, tetapi akan memperlebar jurang pemisah antara mereka yang tahu cara memanfaatkan leverage dan yang enggan beradaptasi.',
    readTime: '5 min baca',
    keyIdea: 'AI adalah co-pilot kecerdasan, bukan pengganti integritas.'
  },
  {
    id: 'insight-3',
    category: 'Productivity',
    title: 'Sistem Mengalahkan Motivasi: Mengapa Kebiasaan Kecil Selalu Menang',
    description: 'Anda tidak naik ke level tujuan Anda; Anda bertahan di level sistem yang Anda bangun. Cara merancang rutinitas harian yang tahan terhadap mood turun.',
    readTime: '3 min baca',
    keyIdea: 'Konsistensi 15 menit setiap hari melampaui ledakan semangat 8 jam sekali sebulan.'
  },
  {
    id: 'insight-4',
    category: 'Business',
    title: 'Solopreneur Modern: Membangun Bisnis Bernilai Tinggi dengan Tim Minimalis',
    description: 'Bagaimana perpaduan antara tools AI, otomatisasi cloud, dan personal brand yang kuat memungkinkan satu orang mengelola operasional setara agensi kecil.',
    readTime: '6 min baca',
    keyIdea: 'Efisiensi dan kejelasan proposisi nilai adalah mata uang tertinggi.'
  },
  {
    id: 'insight-5',
    category: 'Personal Growth',
    title: 'Seni Berkata "Tidak" Agar Bisa Berkata "Ya" pada Hal yang Benar-Benar Berdampak',
    description: 'Keberanian menolak tawaran yang lumayan baik adalah satu-satunya cara menyisakan ruang mental untuk hal-hal yang benar-benar esensial dalam hidup.',
    readTime: '4 min baca',
    keyIdea: 'Fokus bukan sekadar memilih apa yang dikerjakan, tapi apa yang disingkirkan.'
  },
  {
    id: 'insight-6',
    category: 'Life',
    title: 'Makna Hidup Berdampak: Mengapa Keberhasilan Sendirian Tidak Pernah Cukup',
    description: 'Naik level sejati diukur bukan dari seberapa banyak kita kumpulkan, melainkan seberapa banyak orang yang terbantu melangkah lebih jauh karena kehadiran kita.',
    readTime: '5 min baca',
    keyIdea: 'Dampak nyata adalah warisan yang tak lekang waktu.'
  }
];

// 6. Collaboration Types
export const COLLABORATION_TYPES: CollaborationType[] = [
  {
    id: 'speaker',
    title: 'SPEAKER',
    description: 'Seminar, conference, talkshow, community event.',
    examples: [
      'Keynote Speech Konferensi Nasional',
      'Stadium General Kampus & Pelantikan Organisasi',
      'Youth Summit & Community Gathering'
    ]
  },
  {
    id: 'trainer',
    title: 'TRAINER',
    description: 'Workshop dan training berbasis praktik.',
    examples: [
      'Corporate In-House Workshop (AI & Produktivitas)',
      'Training Leadership & Mindset Tim',
      'Inkubasi Solopreneur & Mahasiswa Berprestasi'
    ]
  },
  {
    id: 'moderator',
    title: 'MODERATOR',
    description: 'Panel discussion dan event moderation.',
    examples: [
      'Moderasi Diskusi Panel Tingkat Nasional',
      'Fireside Chat dengan Tokoh Industri & Pimpinan Korporasi',
      'Fasilitasi Sesi Dialog Strategis'
    ]
  },
  {
    id: 'collaboration',
    title: 'COLLABORATION',
    description: 'Education, content, campaign, and digital projects.',
    examples: [
      'Brand Ambassadorship untuk Produk Edukasi/Teknologi',
      'Kolaborasi Konten Edukatif Digital',
      'Inisiatif Program Pemberdayaan Pemuda'
    ]
  }
];

// 7. Gallery Categories & Items
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g-1', category: 'Speaking', title: 'Keynote Session di Hadapan Ratusan Mahasiswa', location: 'Auditorium Kampus', aspect: 'col-span-1 md:col-span-2' },
  { id: 'g-2', category: 'Workshop', title: 'Hands-on AI & Productivity Lab', location: 'Innovation Hub', aspect: 'col-span-1' },
  { id: 'g-3', category: 'Audience', title: 'Interaksi & Tanya Jawab Hangat Bersama Peserta', location: 'Grand Ballroom', aspect: 'col-span-1' },
  { id: 'g-4', category: 'Behind the scenes', title: 'Persiapan Materi & Soundcheck Pra-Acara', location: 'Backstage', aspect: 'col-span-1' },
  { id: 'g-5', category: 'Content', title: 'Rekaman Sesi Podcast & Diskusi Pemikiran', location: 'Studio Media', aspect: 'col-span-1 md:col-span-2' },
  { id: 'g-6', category: 'Business', title: 'Sesi Diskusi Strategis Bersama Inisiator Komunitas', location: 'Co-Working Space', aspect: 'col-span-1' }
];
