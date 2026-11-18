import React, { useState } from 'react';
import { Menu, X, Inbox, UserCog } from 'lucide-react';

interface NavbarProps {
  name?: string;
  onOpenMessages?: () => void;
  onEditProfile?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  name = "Nur Awalia", 
  onOpenMessages,
  onEditProfile 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Tentang', href: '#home' },
    { label: 'Pendidikan', href: '#education' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Portofolio', href: '#portfolio' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#EAE5DC]/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand / Logo */}
          <div className="flex items-center gap-3">
            <a href="#home" className="group">
              <span className="font-extrabold text-2xl tracking-tight text-[#171717] group-hover:opacity-80 transition-opacity">
                {name}
              </span>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-7 text-[13px] font-medium text-[#44403C]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#F59E0B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 pl-4 border-l border-[#EAE5DC]">
              {onEditProfile && (
                <button
                  onClick={onEditProfile}
                  className="p-2 rounded-lg text-[#57534E] hover:text-[#171717] hover:bg-[#EAE5DC] transition-colors"
                  title="Edit Data Profil & Biodata"
                >
                  <UserCog className="w-4 h-4" />
                </button>
              )}

              {onOpenMessages && (
                <button
                  onClick={onOpenMessages}
                  className="p-2 rounded-lg text-[#57534E] hover:text-[#171717] hover:bg-[#EAE5DC] transition-colors"
                  title="Lihat pesan masuk"
                >
                  <Inbox className="w-4 h-4" />
                </button>
              )}

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-md text-xs font-semibold text-[#171717] bg-[#F59E0B] hover:bg-[#D97706] hover:text-white border border-[#171717] btn-neo transition-all"
              >
                Hubungi Saya
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-1">
            {onEditProfile && (
              <button
                onClick={onEditProfile}
                className="p-2 text-[#44403C] hover:text-black"
                title="Edit Profil"
              >
                <UserCog className="w-5 h-5" />
              </button>
            )}
            {onOpenMessages && (
              <button
                onClick={onOpenMessages}
                className="p-2 text-[#44403C] hover:text-black"
                title="Pesan"
              >
                <Inbox className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#171717] hover:bg-[#EAE5DC] rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#EAE5DC] px-6 py-5 space-y-4 shadow-lg animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold text-[#292524] hover:text-[#F59E0B] py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 rounded-md text-sm font-semibold text-[#171717] bg-[#F59E0B] border border-[#171717] btn-neo"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
