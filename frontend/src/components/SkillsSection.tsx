import React from 'react';
import {
  Monitor,
  Globe,
  CheckCircle2,
  Sparkles,
  FileSpreadsheet,
  Network,
  Wrench,
  FileCode,
  Search,
  FileText,
  TrendingUp,
  Palette,
  Cloud,
  Layers
} from 'lucide-react';

interface SkillItem {
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillGroup {
  id: string;
  title: string;
  source: string;
  period: string;
  category: string;
  summary: string;
  accentColor: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

export const SkillsSection: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      id: 'it-support-admin',
      title: 'IT Support & Administrasi Sekolah',
      source: 'UPT SMKN 2 Gowa',
      period: 'Sep 2024 – Des 2024',
      category: 'Teknologi Informasi & Lab Komputer',
      summary: 'Keahlian teknis yang diterapkan dalam pemeliharaan sarana lab komputer, perbaikan kendala perangkat, pendampingan jaringan TKJ, serta pengelolaan administrasi akademik.',
      accentColor: '#F59E0B',
      icon: Monitor,
      skills: [
        {
          name: 'Pemeliharaan PC',
          desc: 'Pengecekan fungsi hardware, pembersihan komponen, dan perbaikan kendala teknis ringan pada PC lab.',
          icon: Wrench,
        },
        {
          name: 'Instalasi Software',
          desc: 'Instalasi sistem operasi Windows, software penunjang pembelajaran, dan utilitas perangkat lab.',
          icon: FileCode,
        },
        {
          name: 'Jaringan Komputer',
          desc: 'Perakitan kabel LAN (crimping RJ45), pengujian kontinuitas kabel UTP, dan konektivitas lab.',
          icon: Network,
        },
        {
          name: 'Microsoft Excel',
          desc: 'Pengolahan dan rekapitulasi data absensi siswa, nilai akademik, serta pembuatan format laporan rapi.',
          icon: FileSpreadsheet,
        },
        {
          name: 'Google Workspace',
          desc: 'Pengorganisasian berkas digital di Google Drive, kolaborasi dokumen daring (Docs & Sheets).',
          icon: Cloud,
        },
        {
          name: 'Desain Canva',
          desc: 'Pembuatan slide presentasi materi pembelajaran, modul ringkas, serta poster visual informatif.',
          icon: Palette,
        },
      ],
    },
    {
      id: 'digital-marketing-web',
      title: 'Digital Marketing & Pengelolaan Website',
      source: 'CV. Rumah Mesin',
      period: 'Des 2024 – Feb 2025',
      category: 'Pemasaran Digital & Optimasi Web',
      summary: 'Keahlian digital yang diterapkan dalam optimalisasi visibilitas website manufaktur di mesin pencari Google, pengelolaan konten CMS WordPress, dan produksi materi promosi visual.',
      accentColor: '#10B981',
      icon: Globe,
      skills: [
        {
          name: 'Optimasi Web (SEO)',
          desc: 'Penerapan SEO On-Page (meta description, struktur heading H1-H3, dan optimasi gambar alt text).',
          icon: Search,
        },
        {
          name: 'CMS WordPress',
          desc: 'Penerbitan dan pembaruan artikel produk manufaktur, pengelolaan tata letak halaman, dan konten web.',
          icon: Layers,
        },
        {
          name: 'Riset Kata Kunci',
          desc: 'Analisis volume dan intensitas kata kunci pencarian calon pelanggan melalui Google Search & Trends.',
          icon: TrendingUp,
        },
        {
          name: 'Penulisan Konten',
          desc: 'Penyusunan artikel informatif mengenai fungsi dan spesifikasi mesin industri yang ramah pembaca.',
          icon: FileText,
        },
        {
          name: 'Pemasaran Digital',
          desc: 'Strategi penyiaran informasi produk secara digital guna memperluas jangkauan dan lalu lintas organik.',
          icon: Sparkles,
        },
        {
          name: 'Desain Materi Visual',
          desc: 'Perancangan materi visual kreatif seperti banner promosi, infografis produk, dan materi presentasi via Canva.',
          icon: Palette,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#FAF8F5] border-t border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-block px-3 py-1 bg-white border border-[#EAE5DC] text-[11px] font-mono font-bold tracking-wider uppercase text-[#78716C] mb-4">
            Keahlian Terapan
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] mb-4">
            Ringkasan Keahlian yang Diterapkan
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Daftar kompetensi teknis dan praktis yang diterapkan secara langsung dalam program Asistensi Mengajar di sekolah kejuruan dan Praktik Industri di lingkungan perusahaan.
          </p>
        </div>

        {/* 2-Column Showcase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white border border-[#EAE5DC] p-6 sm:p-8 shadow-[4px_4px_0px_0px_#EAE5DC] hover:shadow-[4px_4px_0px_0px_#171717] transition-all"
            >
              {/* Grid of 6 Applied Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {group.skills.map((skill, sIdx) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={sIdx}
                      className="p-3.5 bg-[#FAF8F5] border border-[#EAE5DC] rounded-sm hover:border-[#171717] transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <SkillIcon className="w-3.5 h-3.5 text-[#EAA023] shrink-0" />
                          <span className="text-xs font-bold text-[#171717] leading-snug">
                            {skill.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#78716C] leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
