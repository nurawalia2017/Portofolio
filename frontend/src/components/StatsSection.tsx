import React from 'react';

export const StatsSection: React.FC = () => {
  const domains = [
    'SISTEM & JARINGAN KOMPUTER',
    'IT SUPPORT & PEMELIHARAAN LAB',
    'PENDAMPINGAN PRAKTIK TKJ',
    'OPTIMASI SEO & KONTEN DIGITAL',
    'PENGELOLAAN CMS WORDPRESS',
    'PENGOLAHAN DATA & DOKUMEN'
  ];

  const stats = [
    { value: '3.89', label: 'IPK PENDIDIKAN TIK' },
    { value: 'UNM', label: 'UNIVERSITAS NEGERI MAKASSAR' },
    { value: 'Jaringan', label: 'JARINGAN & SISTEM KOMPUTER' },
    { value: 'IT Support', label: 'PEMELIHARAAN KOMPUTER' },
  ];

  return (
    <section id="stats" className="pt-8 pb-24 bg-[#FAF8F5] border-t border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Domain Ticker Row */}
        <div className="py-8 mb-16 overflow-hidden border-b border-[#EAE5DC]/80">
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-10 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#A8A29E] uppercase font-mono">
            {domains.map((item, idx) => (
              <span key={idx} className="hover:text-[#171717] transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 4-Column Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center sm:text-left">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] mb-2 font-sans">
                {item.value}
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.15em] text-[#78716C] uppercase font-mono">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
