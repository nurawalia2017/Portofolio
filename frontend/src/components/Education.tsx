import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const highlights = [
    { label: 'Gelar Akademik', value: 'S.Pd.' },
    { label: 'Indeks Prestasi Kumulatif', value: '3,89 / 4,00' },
  ];

  const relevantSubjects = [
    'Jaringan Komputer & Komunikasi Data',
    'Pemeliharaan & Troubleshooting PC',
    'Sistem Operasi & Instalasi Software',
    'Basis Data & Pengolahan Data Digital',
    'Multimedia & Desain Grafis Digital',
    'Teknologi Informasi & Komunikasi (TIK)'
  ];

  return (
    <section id="education" className="py-24 bg-[#FAF8F5] border-t border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="inline-block px-3 py-1 bg-white border border-[#EAE5DC] text-[11px] font-mono font-bold tracking-wider uppercase text-[#78716C] mb-4">
            Pendidikan
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] mb-4">
            Pendidikan Terakhir
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Alumni S1 Pendidikan Teknik Informatika dan Komputer di Universitas Negeri Makassar dengan fokus keilmuan pada teknologi informasi, sistem dan jaringan komputer, serta pemeliharaan perangkat keras dan lunak.
          </p>
        </div>

        {/* Main Education Showcase Card */}
        <div className="bg-white border border-[#EAE5DC] p-8 sm:p-10 shadow-[4px_4px_0px_0px_#EAE5DC] hover:shadow-[4px_4px_0px_0px_#171717] transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Detail Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 bg-[#FAF8F5] border border-[#EAE5DC] rounded-md text-[#EAA023]">
                  <GraduationCap className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#78716C]">
                    Perguruan Tinggi Negeri
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                    Universitas Negeri Makassar (UNM)
                  </h3>
                </div>
              </div>

              <div className="space-y-2 mb-6 pl-1 sm:pl-2">
                <p className="text-lg sm:text-xl font-bold text-[#171717]">
                  S1 Pendidikan Teknik Informatika dan Komputer (PTIK)
                </p>
                <p className="text-sm text-[#57534E]">
                  Fakultas Teknik — Jurusan Teknik Informatika dan Komputer
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#78716C] pt-1">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                    Agustus 2022 – Mei 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                    Makassar, Sulawesi Selatan
                  </span>
                </div>
              </div>

              {/* Mata Kuliah / Bidang Pembelajaran */}
              <div className="pt-4 border-t border-[#EAE5DC]">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-[#F59E0B]" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#171717]">
                    Bidang yang Dipelajari:
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {relevantSubjects.map((sub, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#57534E]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metric Grid */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#EAE5DC] p-6 rounded-sm space-y-5 self-start">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#EAE5DC]">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#EAA023]" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#171717]">
                    Informasi Akademik
                  </span>
                </div>
                <span className="px-2.5 py-0.5 bg-white border border-[#EAE5DC] text-[10px] font-mono font-bold uppercase text-[#171717]">
                  Agustus 2022 – Mei 2026
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="bg-white border border-[#EAE5DC] p-4 flex flex-col justify-between">
                    <div className="text-xl sm:text-2xl font-black text-[#171717] tracking-tight font-sans leading-tight">
                      {item.value}
                    </div>
                    <div className="text-[10px] font-mono font-semibold uppercase text-[#78716C] mt-2">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

