import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  name?: string;
}

export const Footer: React.FC<FooterProps> = ({ name = "Nur Awalia" }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#EAE5DC] bg-[#FAF8F5] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="font-extrabold text-xl tracking-tight text-[#171717]">
              {name}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-xs text-[#78716C]">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-md bg-white border border-[#EAE5DC] hover:border-[#171717] text-[#171717] btn-neo transition-all"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
