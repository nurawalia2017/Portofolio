import React from 'react';

export const WhatIDo: React.FC = () => {
  const skills = [
    {
      number: '01',
      title: 'Pengolahan Data & Dokumen Digital',
      description: 'Pengolahan dan rekapitulasi data menggunakan Microsoft Office (Word, Excel) dan Google Workspace, penyusunan laporan kegiatan, serta manajemen dokumen digital secara rapi dan teratur.',
      reportSource: 'Pengalaman asistensi akademik di SMKN 2 Gowa',
      tags: ['Microsoft Excel', 'Microsoft Word', 'Google Workspace', 'Pengolahan Data Digital', 'Manajemen Dokumen']
    },
    {
      number: '02',
      title: 'IT Support & Pemeliharaan Komputer',
      description: 'Pengecekan fungsi perangkat PC, instalasi sistem operasi dan aplikasi pendukung, perbaikan kendala teknis ringan pada perangkat/kabel, serta pemeliharaan fasilitas komputer.',
      reportSource: 'Pengalaman teknis lab komputer di SMKN 2 Gowa',
      tags: ['Pemeliharaan PC', 'Instalasi Software', 'Jaringan Dasar', 'Perawatan Komputer']
    },
    {
      number: '03',
      title: 'Pemasaran Digital & Optimasi Website',
      description: 'Riset kata kunci pencarian, penerapan optimasi konten halaman web (SEO dasar), serta penulisan artikel informatif agar website lebih mudah ditemukan di Google.',
      reportSource: 'Pengalaman Praktik Industri di CV. Rumah Mesin',
      tags: ['Riset Kata Kunci', 'Optimasi Web (SEO)', 'Penulisan Konten', 'Pemasaran Digital']
    },
    {
      number: '04',
      title: 'Pengelolaan Website & Desain Grafis',
      description: 'Penerbitan dan pembaruan artikel pada website berbasis WordPress, serta pembuatan materi visual kreatif seperti materi presentasi, banner informasi, dan poster menggunakan Canva.',
      reportSource: 'Pengalaman di CV. Rumah Mesin & SMKN 2 Gowa',
      tags: ['CMS WordPress', 'Desain Canva', 'Pengelolaan Konten', 'Materi Visual']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#FAF8F5] border-t border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Section Title & Intro */}
          <div className="lg:col-span-5">
            <div className="inline-block px-3 py-1 bg-white border border-[#EAE5DC] text-[11px] font-mono font-bold tracking-wider uppercase text-[#78716C] mb-4">
              Keahlian
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] mb-6">
              Keahlian & Pengalaman
            </h2>
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-md mb-6">
              Keterampilan di bidang teknologi informasi, IT Support, pengelolaan jaringan, dan sistem digital yang diperoleh melalui pengalaman akademik serta praktik nyata.
            </p>
            <div className="p-4 bg-white border border-[#EAE5DC] rounded-sm text-xs text-[#78716C] space-y-2 max-w-md shadow-[2px_2px_0px_#EAE5DC]">
              <div className="font-semibold text-[#171717] font-mono uppercase tracking-wider">Sumber Pengalaman:</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                <span className="font-medium text-[#44403C]">SMKN 2 Gowa — Asistensi Lab & Pendampingan TKJ</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#171717]"></span>
                <span className="font-medium text-[#44403C]">CV. Rumah Mesin — Praktik Industri & Website</span>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Skills List */}
          <div className="lg:col-span-7 space-y-10">
            {skills.map((item) => (
              <div key={item.number} className="group border-b border-[#EAE5DC] pb-8 last:border-b-0">
                <div className="flex items-baseline gap-6 mb-2">
                  <span className="text-sm font-mono font-bold text-[#A8A29E] tracking-wider group-hover:text-[#F59E0B] transition-colors">
                    {item.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight group-hover:text-[#F59E0B] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="pl-12">
                  <span className="inline-block text-[11px] font-mono text-[#D97706] font-semibold mb-2">
                    {item.reportSource}
                  </span>
                  <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  {/* Skill Badges & Link to Portfolio */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white border border-[#EAE5DC] rounded-sm text-xs font-mono font-medium text-[#44403C] shadow-[1px_1px_0px_#EAE5DC]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#portfolio"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#171717] hover:text-[#F59E0B] transition-colors"
                    >
                      Lihat Dokumentasi Proyek →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
