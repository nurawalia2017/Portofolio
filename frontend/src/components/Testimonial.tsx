import React from 'react';

export const Testimonial: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#EAE5DC]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Quote Icon */}
        <div className="mb-6 flex justify-center">
          <svg
            className="w-10 h-10 text-[#F59E0B]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Large Quote */}
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#171717] leading-snug mb-8">
          “Nur Awalia adalah mahasiswa yang berdedikasi tinggi, teliti, dan bertanggung jawab. Baik dalam menangani pengelolaan administrasi, pendampingan teknis siswa, maupun tugas publikasi digital, hasil kerjanya selalu rapi dan memuaskan.”
        </blockquote>

        {/* Author Attribution */}
        <div className="space-y-1">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#171717] font-mono">
            Muhammad Asri, S.T.
          </div>
          <div className="text-xs sm:text-sm text-[#78716C]">
            Guru Pamong TKJ, UPT SMKN 2 Gowa
          </div>
        </div>

      </div>
    </section>
  );
};
