import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Observasi & Perencanaan Kerja',
      description: 'Melakukan pengecekan awal terhadap kebutuhan tugas, seperti observasi fasilitas lab komputer, koordinasi data absensi sekolah, atau riset kata kunci untuk artikel.'
    },
    {
      number: '02',
      title: 'Pengolahan Data & Penataan Berkas',
      description: 'Menginput dan merekapitulasi data kehadiran serta nilai siswa secara rapi menggunakan spreadsheet (Excel/Google Sheets), serta mengarsipkan dokumen dengan teratur.'
    },
    {
      number: '03',
      title: 'Penanganan Teknis & Pembaruan Konten',
      description: 'Membantu pengecekan perangkat PC lab, pendampingan praktik dasar jaringan (kabel UTP), serta penulisan dan pengunggahan artikel SEO di CMS WordPress.'
    },
    {
      number: '04',
      title: 'Pengecekan Akhir & Pelaporan',
      description: 'Memeriksa kembali keakuratan data yang telah dikerjakan, mendokumentasikan kegiatan kerja, serta menyusun laporan pertanggungjawaban yang rapi dan tepat waktu.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Alur Kerja & Tanggung Jawab
          </h2>
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            Cara kerja yang teratur, teliti, dan bertanggung jawab dalam pemeliharaan sistem komputer, bantuan teknis IT, serta pengelolaan informasi digital.
          </p>
        </div>

        {/* 4-Step Process Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col border-t border-[#262626] pt-8">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#F59E0B] mb-6">
                {step.number}
              </span>
              <h3 className="text-xl font-bold tracking-tight mb-3 text-white">
                {step.title}
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
