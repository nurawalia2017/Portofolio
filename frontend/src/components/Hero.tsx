import React from 'react';
import type { Profile } from '../types';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

interface HeroProps {
  profile: Profile | null;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const name = profile?.name || 'Nur Awalia';
  const title = profile?.title || 'Pendidikan Teknik Informatika, IT Support & Jaringan Komputer';
  const bio = profile?.bio || 'Saya Nur Awalia, alumni S1 Pendidikan Teknik Informatika dan Komputer dari Universitas Negeri Makassar dengan dasar keilmuan di bidang teknologi informasi, sistem komputer, dan jaringan. Saya memiliki pengalaman dalam pemeliharaan perangkat laboratorium komputer (IT Support), pendampingan praktik jaringan komputer siswa kejuruan, serta pengelolaan website dan optimasi konten digital. Didukung kemampuan pengolahan data yang teliti serta kerja yang bertanggung jawab, saya siap berkontribusi secara profesional di bidang teknologi informasi dan operasional kerja.';
  const avatar = profile?.avatarUrl && profile.avatarUrl !== 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80'
    ? profile.avatarUrl
    : '/profile.jpg';

  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Greeting & Name */}
          <div className="lg:col-span-7 flex flex-col justify-start">

            {/* ========================================================================= */}
            {/* >>> ATUR JARAK / SPASI KE ATAS DI SINI:                                  */}
            {/* Ganti angka "30px" di bawah ini sesuai selera (misal: 10px, 20px, 40px) */}
            {/* ========================================================================= */}
            <div className="mt-[10px] mb-3 inline-block w-fit">
              <span className="px-4 py-1.5 bg-white border border-[#171717] rounded-sm text-sm sm:text-base font-semibold text-[#171717] shadow-[2px_2px_0px_0px_#171717]">
                Halo semuanya!
              </span>
            </div>

            {/* Nama "Nur Awalia" warna kuning/amber tebal persis seperti di Gambar 1 */}
            <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-black tracking-tight text-[#EAA023] mb-3 leading-none font-sans drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              {name}
            </h1>

            {/* Tagline Profesi */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mb-5">
              {title}
            </h2>

            {/* Bio deskripsi (Tentang Saya) */}
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl mb-8">
              {bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-md text-sm sm:text-base font-bold text-[#171717] bg-[#F59E0B] hover:bg-[#D97706] hover:text-white border border-[#171717] btn-neo transition-all"
              >
                Lihat Portofolio
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profile?.resumeUrl || "/cv_nur_awalia.pdf"}
                download="CV_Nur_Awalia.pdf"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-md text-sm sm:text-base font-bold text-[#171717] bg-white hover:bg-[#F5F2EB] border border-[#171717] btn-neo transition-all"
              >
                <Download className="w-4 h-4 text-[#F59E0B]" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Framed Portrait Image with Animations */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md group">
              {/* Decorative Geometric Backdrop Accent */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#F59E0B]/20 via-[#171717]/5 to-[#F59E0B]/25 rounded-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 -z-10" />

              {/* Main Photo Frame with Gentle Float Animation */}
              <div className="p-3 bg-white border-2 border-[#171717] shadow-[6px_6px_0px_0px_#171717] group-hover:shadow-[12px_12px_0px_0px_#F59E0B] group-hover:border-[#171717] transition-all duration-500 animate-float">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#171717] image-shine rounded-xs">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-full h-full object-cover object-center group-hover:scale-106 group-hover:brightness-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle glossy gradient reveal on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-5">
                    <span className="text-white text-xs font-mono font-bold tracking-wider uppercase bg-[#171717]/90 px-3 py-1.5 border border-white/20 backdrop-blur-xs shadow-md">
                      Nur Awalia, S.Pd.
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Badge - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white border-2 border-[#171717] shadow-[4px_4px_0px_#171717] rounded-md hidden sm:flex items-center gap-2 animate-float-delayed z-10 text-xs font-mono font-bold text-[#171717]">
                <Sparkles className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Pendidikan Teknik Informatika &amp; Komputer • IT Support</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
