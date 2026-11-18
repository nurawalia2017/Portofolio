import React, { useState } from 'react';
import type { Project } from '../types';
import { Plus, ZoomIn, X } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
  onOpenAddModal: () => void;
}

const defaultProjects: Project[] = [
  {
    title: "Administrasi Sekolah & Pengolahan Data (SMKN 2 Gowa)",
    slug: "administrasi-sekolah-smkn-2-gowa",
    description: "Penyusunan rekapitulasi nilai tugas dan kehadiran siswa kelas X & XI TKJ ke dalam spreadsheet terstruktur untuk mendukung kelancaran pelaporan nilai semester dan arsip akademik sekolah.",
    category: "Administrasi",
    imageUrl: "/projects/amsp_gowa_image14.jpeg",
    tags: ["Spreadsheet Nilai", "Presensi Siswa", "Arsip Akademik", "SMKN 2 Gowa"],
    orderIndex: 1
  },
  {
    title: "Pemeliharaan Komputer & Instalasi PC Lab (SMKN 2 Gowa)",
    slug: "pembenahan-lab-instalasi-pc-smkn-2-gowa",
    description: "Penataan perangkat keras PC laboratorium, penggantian komponen kabel yang aus, serta instalasi ulang sistem operasi agar unit komputer siap digunakan untuk simulasi ANBK dan ujian siswa.",
    category: "IT Support",
    imageUrl: "/projects/amsp_gowa_image6.jpeg",
    tags: ["Perakitan PC", "Instalasi OS Lab", "Kesiapan ANBK", "SMKN 2 Gowa"],
    orderIndex: 2
  },
  {
    title: "Pendampingan Praktik Jaringan Komputer Siswa (SMKN 2 Gowa)",
    slug: "pendampingan-praktik-jaringan-tkj",
    description: "Bimbingan praktik siswa jurusan TKJ dalam merakit kabel LAN tipe straight/cross, pengupasan kabel UTP, hingga pengujian keberhasilan transmisi data menggunakan LAN tester.",
    category: "IT Support",
    imageUrl: "/projects/amsp_gowa_image19.jpeg",
    tags: ["Kabel UTP Straight/Cross", "Uji LAN Tester", "Praktik TKJ", "SMKN 2 Gowa"],
    orderIndex: 3
  },
  {
    title: "Optimasi Website & SEO On-Page (CV. Rumah Mesin)",
    slug: "optimasi-seo-onpage-cv-rumah-mesin",
    description: "Penerapan optimasi pada halaman web produk mesin perajang, meliputi penyesuaian target kata kunci pencarian, penulisan meta tag yang menarik, dan kompresi media visual.",
    category: "Digital Marketing",
    imageUrl: "/projects/magang_rumahmesin_image3.jpeg",
    tags: ["Optimasi Web Produk", "Target Kata Kunci", "Meta Tag & Heading", "CV. Rumah Mesin"],
    orderIndex: 4
  },
  {
    title: "Pengelolaan Konten & Artikel Web (CV. Rumah Mesin)",
    slug: "seo-offpage-artikel-backlink-rumah-mesin",
    description: "Penerbitan artikel panduan dan spesifikasi mesin industri pada dashboard WordPress, dilengkapi infografis pendukung untuk memudahkan calon pembeli memahami manfaat produk.",
    category: "Digital Marketing",
    imageUrl: "/projects/magang_rumahmesin_image4.jpeg",
    tags: ["Publikasi WordPress", "Artikel Spesifikasi", "Konten Edukatif", "CV. Rumah Mesin"],
    orderIndex: 5
  },
  {
    title: "Pelatihan Desain Grafis Canva Siswa (SMKN 2 Gowa)",
    slug: "workshop-desain-grafis-canva-siswa-tkj",
    description: "Pelaksanaan workshop pengenalan fitur-fitur Canva, memfasilitasi puluhan siswa kejuruan dalam memproduksi slide presentasi interaktif dan poster tugas digital mandiri.",
    category: "Desain Grafis",
    imageUrl: "/projects/amsp_gowa_image20.jpeg",
    tags: ["Workshop Canva", "Poster Edukasi", "Slide Presentasi", "SMKN 2 Gowa"],
    orderIndex: 6
  }
];

export const Projects: React.FC<ProjectsProps> = ({ projects, onOpenAddModal }) => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<{
    imageUrl: string;
    title: string;
    category?: string;
    description?: string;
  } | null>(null);

  const displayList = projects && projects.length > 0 ? projects : defaultProjects;

  const dynamicCategories = ['All', ...Array.from(new Set(displayList.map(p => p.category).filter(Boolean)))];
  const categories = dynamicCategories.length > 1 ? dynamicCategories : ['All', 'Administrasi', 'IT Support', 'Digital Marketing'];

  const filtered = filter === 'All'
    ? displayList
    : displayList.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="portfolio" className="py-24 bg-[#FAF8F5] border-t border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-block px-3 py-1 bg-white border border-[#EAE5DC] text-[11px] font-mono font-bold tracking-wider uppercase text-[#78716C] mb-4">
              Portofolio Proyek
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] mb-4">
              Portofolio Proyek
            </h2>
            <p className="text-base sm:text-lg text-[#57534E] max-w-xl">
              Kumpulan hasil karya dan proyek nyata yang diselesaikan selama Praktik Industri di CV. Rumah Mesin serta program Asistensi Mengajar di SMKN 2 Gowa.
            </p>
          </div>

          {onOpenAddModal && (
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenAddModal}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-semibold text-[#171717] bg-white hover:bg-[#F5F2EB] border border-[#171717] btn-neo transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                Tambah Proyek
              </button>
            </div>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                filter === cat
                  ? 'bg-[#171717] text-white'
                  : 'bg-white text-[#57534E] hover:text-[#171717] border border-[#EAE5DC]'
              }`}
            >
              {cat === 'All' ? 'Semua Proyek' : cat}
            </button>
          ))}
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <div 
              key={item.id || idx} 
              className="group flex flex-col bg-white border border-[#EAE5DC] hover:border-[#171717] p-5 shadow-[4px_4px_0px_0px_#EAE5DC] hover:shadow-[8px_8px_0px_0px_#171717] img-card-interactive transition-all duration-300"
            >
              
              {/* Framed Image Container with Animation & Zoom Trigger */}
              <div 
                onClick={() => setSelectedImage({
                  imageUrl: item.imageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                  title: item.title,
                  category: item.category,
                  description: item.description
                })}
                className="relative aspect-[16/10] overflow-hidden bg-[#171717] mb-5 border border-[#EAE5DC] image-shine cursor-pointer group/img"
              >
                <img
                  src={item.imageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-105 transition-all duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                
                {/* Category Badge with hover slide */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-[#FAF8F5] border border-[#171717] text-[10px] font-mono font-bold tracking-wider uppercase text-[#171717] shadow-[2px_2px_0px_#171717] group-hover:translate-x-1 transition-transform duration-300">
                  {item.category}
                </div>

                {/* Animated Hover Hint Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="px-3 py-1.5 bg-[#171717]/90 border border-[#F59E0B] text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-3.5 h-3.5 text-[#F59E0B]" />
                    Klik Perbesar
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-[#171717] tracking-tight group-hover:text-[#F59E0B] transition-colors mb-2">
                {item.title}
              </h3>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Tech Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-mono bg-[#FAF8F5] border border-[#EAE5DC] text-[#78716C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>

      {/* Animated Image Preview Modal (Lightbox) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative bg-white border-2 border-[#171717] shadow-[10px_10px_0px_#171717] max-w-3xl w-full overflow-hidden animate-modal-pop"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#EAE5DC] bg-[#FAF8F5]">
              <div className="flex items-center gap-2 min-w-0">
                <span className="px-2 py-0.5 bg-[#F59E0B] text-[#171717] text-[10px] font-mono font-bold uppercase border border-[#171717] shrink-0">
                  {selectedImage.category || 'Dokumentasi'}
                </span>
                <span className="text-xs font-mono font-bold text-[#171717] truncate">
                  {selectedImage.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 bg-white border border-[#171717] hover:bg-[#F59E0B] hover:text-white transition-colors cursor-pointer shrink-0 ml-3"
                aria-label="Tutup pratinjau"
              >
                <X className="w-4 h-4 text-[#171717]" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative aspect-[16/10] bg-[#171717] overflow-hidden flex items-center justify-center">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#EAE5DC]">
              <h4 className="font-extrabold text-[#171717] text-base mb-1">
                {selectedImage.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
