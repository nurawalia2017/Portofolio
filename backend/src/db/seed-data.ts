export const initialProfile = {
  name: "Nur Awalia",
  title: "Pendidikan Teknik Informatika, IT Support & Jaringan Komputer",
  bio: "Saya Nur Awalia, alumni S1 Pendidikan Teknik Informatika dan Komputer dari Universitas Negeri Makassar dengan dasar keilmuan di bidang teknologi informasi, sistem komputer, dan jaringan. Saya memiliki pengalaman dalam pemeliharaan perangkat laboratorium komputer (IT Support), pendampingan praktik jaringan komputer siswa kejuruan, serta pengelolaan website dan optimasi konten digital. Didukung kemampuan pengolahan data yang teliti serta kerja yang bertanggung jawab, saya siap berkontribusi secara profesional di bidang teknologi informasi dan operasional kerja.",
  avatarUrl: "/profile.jpg",
  email: "nurawalia2017@gmail.com / nurawalia04@gmail.com",
  location: "Makassar, Indonesia",
  githubUrl: "",
  linkedinUrl: "https://linkedin.com",
  twitterUrl: "",
  resumeUrl: "/cv_nur_awalia.pdf",
  statusAvailable: true
};

export const initialSkills = [
  { name: "Administrasi Perkantoran & Berkas", category: "Keahlian Utama", proficiency: 92, icon: "FileText", orderIndex: 1 },
  { name: "Pengolahan Data & Dokumen", category: "Keahlian Utama", proficiency: 90, icon: "FileSpreadsheet", orderIndex: 2 },
  { name: "Microsoft Office (Word, Excel, PPT)", category: "Produktivitas", proficiency: 92, icon: "CheckCircle2", orderIndex: 3 },
  { name: "Google Workspace (Docs, Sheets, Drive)", category: "Produktivitas", proficiency: 90, icon: "Layers", orderIndex: 4 },
  { name: "IT Support & Pemeliharaan Komputer", category: "Teknis", proficiency: 85, icon: "Cpu", orderIndex: 5 },
  { name: "Dasar Pemasaran Digital & Konten", category: "Pemasaran", proficiency: 82, icon: "Globe", orderIndex: 6 }
];

export const initialProjects = [
  {
    title: "Administrasi Sekolah & Pengolahan Data (SMKN 2 Gowa)",
    slug: "administrasi-sekolah-smkn-2-gowa",
    description: "Penyusunan rekapitulasi nilai tugas dan kehadiran siswa kelas X & XI TKJ ke dalam spreadsheet terstruktur untuk mendukung kelancaran pelaporan nilai semester dan arsip akademik sekolah.",
    longDescription: "Mengelola kelengkapan administrasi akademik siswa jurusan Teknik Komputer dan Jaringan selama program AMSP di SMKN 2 Gowa menggunakan Microsoft Excel dan Google Workspace secara teratur.",
    category: "Administrasi",
    imageUrl: "/projects/amsp_gowa_image14.jpeg",
    demoUrl: "#",
    githubUrl: "",
    tags: ["Spreadsheet Nilai", "Presensi Siswa", "Arsip Akademik", "SMKN 2 Gowa"],
    featured: true,
    orderIndex: 1
  },
  {
    title: "Pemeliharaan Komputer & Instalasi PC Lab (SMKN 2 Gowa)",
    slug: "pembenahan-lab-instalasi-pc-smkn-2-gowa",
    description: "Penataan perangkat keras PC laboratorium, penggantian komponen kabel yang aus, serta instalasi ulang sistem operasi agar unit komputer siap digunakan untuk simulasi ANBK dan ujian siswa.",
    longDescription: "Memastikan kesiapan puluhan unit PC di laboratorium komputer SMKN 2 Gowa agar siap digunakan untuk proses belajar mengajar, simulasi ANBK, dan praktikum kejuruan siswa.",
    category: "IT Support",
    imageUrl: "/projects/amsp_gowa_image6.jpeg",
    demoUrl: "#",
    githubUrl: "",
    tags: ["Perakitan PC", "Instalasi OS Lab", "Kesiapan ANBK", "SMKN 2 Gowa"],
    featured: true,
    orderIndex: 2
  },
  {
    title: "Pendampingan Praktik Jaringan Komputer Siswa (SMKN 2 Gowa)",
    slug: "pendampingan-praktik-jaringan-tkj",
    description: "Bimbingan praktik siswa jurusan TKJ dalam merakit kabel LAN tipe straight/cross, pengupasan kabel UTP, hingga pengujian keberhasilan transmisi data menggunakan LAN tester.",
    longDescription: "Membantu guru pamong dalam membimbing siswa memahami konektivitas fisik jaringan lokal (LAN), perakitan kabel jaringan, dan pengenalan dasar sistem komputer.",
    category: "IT Support",
    imageUrl: "/projects/amsp_gowa_image19.jpeg",
    demoUrl: "#",
    githubUrl: "",
    tags: ["Kabel UTP Straight/Cross", "Uji LAN Tester", "Praktik TKJ", "SMKN 2 Gowa"],
    featured: true,
    orderIndex: 3
  },
  {
    title: "Optimasi Website & SEO On-Page (CV. Rumah Mesin)",
    slug: "optimasi-seo-onpage-cv-rumah-mesin",
    description: "Penerapan optimasi pada halaman web produk mesin perajang, meliputi penyesuaian target kata kunci pencarian, penulisan meta tag yang menarik, dan kompresi media visual.",
    longDescription: "Proyek optimasi konten web produk mesin UMKM di CV. Rumah Mesin. Menerapkan teknik SEO On-Page (meta description, struktur heading H1-H3, alt text gambar), optimasi permalink, kompresi gambar, dan penulisan artikel informatif.",
    category: "Digital Marketing",
    imageUrl: "/projects/magang_rumahmesin_image3.jpeg",
    demoUrl: "#",
    githubUrl: "",
    tags: ["Optimasi Web Produk", "Target Kata Kunci", "Meta Tag & Heading", "CV. Rumah Mesin"],
    featured: true,
    orderIndex: 4
  },
  {
    title: "Pengelolaan Konten & Artikel Web (CV. Rumah Mesin)",
    slug: "seo-offpage-artikel-backlink-rumah-mesin",
    description: "Penerbitan artikel panduan dan spesifikasi mesin industri pada dashboard WordPress, dilengkapi infografis pendukung untuk memudahkan calon pembeli memahami manfaat produk.",
    longDescription: "Menerapkan pengelolaan konten dan penerbitan artikel pendukung untuk memperluas jangkauan informasi produk mesin industri di CV. Rumah Mesin.",
    category: "Digital Marketing",
    imageUrl: "/projects/magang_rumahmesin_image4.jpeg",
    demoUrl: "#",
    githubUrl: "",
    tags: ["Publikasi WordPress", "Artikel Spesifikasi", "Konten Edukatif", "CV. Rumah Mesin"],
    featured: true,
    orderIndex: 5
  },
  {
    title: "Pelatihan Desain Grafis Canva Siswa (SMKN 2 Gowa)",
    slug: "workshop-desain-grafis-canva-siswa-tkj",
    description: "Pelaksanaan workshop pengenalan fitur-fitur Canva, memfasilitasi puluhan siswa kejuruan dalam memproduksi slide presentasi interaktif dan poster tugas digital mandiri.",
    longDescription: "Inisiatif program kerja mahasiswa AMSP di SMKN 2 Gowa untuk mengenalkan fitur-fitur Canva kepada siswa agar mampu memvisualisasikan tugas sekolah secara kreatif dan menarik.",
    category: "Desain Grafis",
    imageUrl: "/projects/amsp_gowa_image20.jpeg",
    demoUrl: "#",
    githubUrl: "",
    tags: ["Workshop Canva", "Poster Edukasi", "Slide Presentasi", "SMKN 2 Gowa"],
    featured: true,
    orderIndex: 6
  }
];

export const initialExperiences = [
  {
    role: "Asistensi Mengajar & Administrasi Sekolah (AMSP)",
    company: "UPT SMKN 2 Gowa (Jurusan TKJ)",
    location: "Gowa, Sulawesi Selatan",
    period: "September 2024 - Desember 2024",
    type: "work",
    description: "Membantu pengelolaan berkas administrasi sekolah, rekapitulasi data presensi dan nilai siswa, pemeliharaan perangkat lab komputer, serta pendampingan praktik dasar siswa.",
    skillsUsed: ["Administrasi Data", "Microsoft Excel", "Google Workspace", "Pemeliharaan Komputer", "Jaringan Dasar"],
    orderIndex: 1
  },
  {
    role: "Digital Marketing & Website (Praktik Industri)",
    company: "CV. Rumah Mesin",
    location: "Yogyakarta, Indonesia",
    period: "Desember 2024 - Februari 2025",
    type: "work",
    description: "Melakukan riset kata kunci pencarian, penulisan dan optimasi artikel produk informatif pada CMS WordPress, serta pemeliharaan konten halaman website.",
    skillsUsed: ["Optimasi Web (SEO)", "CMS WordPress", "Riset Kata Kunci", "Penulisan Konten", "Pemasaran Digital"],
    orderIndex: 2
  },
  {
    role: "S1 Pendidikan Teknik Informatika & Komputer (S.Pd.)",
    company: "Universitas Negeri Makassar (UNM)",
    location: "Makassar, Indonesia",
    period: "Agustus 2022 – Mei 2026",
    type: "education",
    description: "Lulusan sarjana S1 Pendidikan Teknik Informatika dan Komputer dengan fokus keilmuan pada teknologi informasi, sistem komputer, dan jaringan (IPK 3,89).",
    skillsUsed: ["Teknik Komputer", "Jaringan Komputer", "Teknologi Informasi", "Pengolahan Data"],
    orderIndex: 3
  }
];
