import React from 'react';
import type { Experience } from '../types';
import { Briefcase, Calendar, MapPin, Building2, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface SubActivity {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

interface EnhancedExperience extends Experience {
  activities?: SubActivity[];
}

interface ExperiencesProps {
  experiences?: Experience[];
}

const detailedExperiences: EnhancedExperience[] = [
  {
    role: "Asistensi Mengajar & Administrasi Sekolah (AMSP)",
    company: "UPT SMKN 2 Gowa (Jurusan TKJ)",
    location: "Gowa, Sulawesi Selatan",
    period: "September 2024 – Desember 2024",
    type: "work",
    description: "Program Pengenalan Lapangan Persekolahan (AMSP) yang berfokus pada pemeliharaan sarana laboratorium komputer, bimbingan praktik kejuruan siswa TKJ, dan bantuan administrasi akademik sekolah.",
    skillsUsed: ["Pemeliharaan PC", "Instalasi Software", "Jaringan Komputer", "Microsoft Excel", "Google Workspace", "Desain Canva"],
    orderIndex: 1,
    activities: [
      {
        number: "01",
        title: "IT Support & Pemeliharaan Komputer Lab",
        description: "Pengecekan fungsi perangkat PC, instalasi sistem operasi dan aplikasi pendukung, perbaikan kendala teknis ringan pada perangkat/kabel, serta pemeliharaan fasilitas komputer.",
        tags: ["Pemeliharaan PC", "Instalasi Software", "Jaringan Dasar", "Perawatan Komputer"]
      },
      {
        number: "02",
        title: "Administrasi & Pengolahan Data",
        description: "Pengelolaan berkas administrasi, rekapitulasi data absensi dan nilai, serta penyusunan dokumen kerja menggunakan Microsoft Office (Word, Excel) dan Google Workspace secara rapi dan teratur.",
        tags: ["Microsoft Excel", "Microsoft Word", "Google Workspace", "Pengolahan Data", "Pengarsipan Dokumen"]
      },
      {
        number: "03",
        title: "Pendampingan Praktik Jaringan & Pelatihan Desain",
        description: "Pendampingan siswa kelas X TKJ dalam memahami dasar konektivitas jaringan komputer, perakitan kabel LAN, serta penyelenggaraan pelatihan desain grafis materi presentasi menggunakan Canva.",
        tags: ["Jaringan Komputer", "Perakitan Kabel LAN", "Desain Canva", "Pendampingan Siswa"]
      }
    ]
  },
  {
    role: "Digital Marketing & Website (Praktik Industri)",
    company: "CV. Rumah Mesin",
    location: "Yogyakarta, Indonesia",
    period: "Desember 2024 – Februari 2025",
    type: "work",
    description: "Program Praktik Industri di CV. Rumah Mesin dengan fokus utama pada optimasi keterlihatan website di mesin pencari (SEO), penulisan artikel informatif produk, serta pengelolaan platform digital.",
    skillsUsed: ["Optimasi Web (SEO)", "CMS WordPress", "Riset Kata Kunci", "Penulisan Konten", "Pemasaran Digital", "Desain Materi Visual"],
    orderIndex: 2,
    activities: [
      {
        number: "01",
        title: "Pemasaran Digital & Optimasi Website (SEO)",
        description: "Riset kata kunci pencarian, penerapan teknik SEO On-Page (meta description, struktur heading H1-H3, alt text gambar), serta penulisan artikel informatif agar website lebih mudah ditemukan di Google.",
        tags: ["SEO On-Page", "Riset Kata Kunci", "Struktur Heading H1-H3", "Pemasaran Digital"]
      },
      {
        number: "02",
        title: "Pengelolaan Website & Desain Grafis",
        description: "Penerbitan dan pembaruan artikel pada website berbasis WordPress, serta pembuatan materi visual kreatif seperti materi presentasi, banner informasi, dan poster menggunakan Canva.",
        tags: ["CMS WordPress", "Desain Canva", "Pengelolaan Konten", "Materi Visual"]
      }
    ]
  }
];

export const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  // Gunakan data pengalaman terperinci default yang telah dilengkapi aktivitas nyata
  const actualList = detailedExperiences;

  return (
    <section id="experience" className="py-24 bg-[#FAF8F5] border-t border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block px-3 py-1 bg-white border border-[#EAE5DC] text-[11px] font-mono font-bold tracking-wider uppercase text-[#78716C] mb-4">
            Pengalaman
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] mb-4">
            Pengalaman Praktik & Kerja
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Rekam jejak pengalaman nyata yang diperoleh melalui program Praktik Industri di perusahaan manufaktur & pemasaran digital serta Asistensi Mengajar di sekolah kejuruan.
          </p>
        </div>

        {/* Timeline / Experience Cards Grid */}
        <div className="space-y-12">
          {actualList.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[#EAE5DC] p-6 sm:p-10 shadow-[4px_4px_0px_0px_#EAE5DC] hover:shadow-[4px_4px_0px_0px_#171717] transition-all group"
            >
              {/* Header: Role & Company */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6 pb-6 border-b border-[#EAE5DC]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 bg-[#FAF8F5] border border-[#EAE5DC] rounded text-[#EAA023]">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#78716C]">
                      Pengalaman Kerja Nyata
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight group-hover:text-[#EAA023] transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#57534E] mt-2">
                    <span className="inline-flex items-center gap-1.5 text-[#171717]">
                      <Building2 className="w-4 h-4 text-[#EAA023]" />
                      {item.company}
                    </span>
                    {item.location && (
                      <span className="inline-flex items-center gap-1 text-xs text-[#78716C] font-mono">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Period Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF8F5] border border-[#EAE5DC] text-xs font-mono font-bold text-[#171717] self-start">
                  <Calendar className="w-3.5 h-3.5 text-[#EAA023]" />
                  {item.period}
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-[#57534E] leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Detail Kegiatan / Tanggung Jawab Nyata */}
              {item.activities && item.activities.length > 0 && (
                <div className="pt-6 border-t border-[#EAE5DC]/80">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#EAA023]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
                      Tugas & Tanggung Jawab Utama:
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {item.activities.map((act, aIdx) => (
                      <div 
                        key={aIdx} 
                        className="bg-[#FAF8F5] border border-[#EAE5DC] p-5 rounded-sm flex flex-col justify-between hover:border-[#171717] transition-all"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[11px] font-mono font-bold text-[#EAA023]">
                              {act.number}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-[#78716C] uppercase">
                              Kegiatan
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-[#171717] mb-2 leading-snug">
                            {act.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
                            {act.description}
                          </p>
                        </div>

                        <div>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-3 pt-2 border-t border-[#EAE5DC]/60">
                            {act.tags.map((tag, tIdx) => (
                              <span 
                                key={tIdx}
                                className="px-2 py-0.5 bg-white border border-[#EAE5DC] text-[10px] font-mono font-medium text-[#44403C]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Link ke Proyek */}
                          <a
                            href="#portfolio"
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#EAA023] hover:text-[#D97706] transition-colors group/link"
                          >
                            <span>Lihat Proyek Terkait</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
