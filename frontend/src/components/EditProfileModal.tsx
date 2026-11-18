import React, { useState, useEffect } from 'react';
import { X, Loader2, UserCheck } from 'lucide-react';
import { updateProfile } from '../services/api';
import type { Profile } from '../types';

interface EditProfileModalProps {
  isOpen: boolean;
  profile: Profile | null;
  onClose: () => void;
  onSuccess: (updated: Profile) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({ 
  isOpen, 
  profile, 
  onClose, 
  onSuccess 
}) => {
  const [formData, setFormData] = useState<Partial<Profile>>({
    name: '',
    title: '',
    bio: '',
    avatarUrl: '',
    email: '',
    location: '',
    githubUrl: '',
    linkedinUrl: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || '',
        title: profile.title || '',
        bio: profile.bio || '',
        avatarUrl: profile.avatarUrl || '',
        email: profile.email || '',
        location: profile.location || '',
        githubUrl: profile.githubUrl || '',
        linkedinUrl: profile.linkedinUrl || '',
      });
    }
  }, [profile, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await updateProfile(formData);
      onSuccess(res.data);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Gagal memperbarui profil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white border-2 border-[#171717] p-8 shadow-[8px_8px_0px_0px_#171717] max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#EAE5DC] mb-6">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#F59E0B]" />
            <h3 className="text-lg font-bold text-[#171717]">Edit Profil & Biodata</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#78716C] hover:text-black hover:bg-[#FAF8F5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
                Nama Lengkap *
              </label>
              <input
                type="text"
                required
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Pratama"
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@example.com"
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
              Judul Profesi / Tagline *
            </label>
            <input
              type="text"
              required
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Full Stack Engineer & Web Architect"
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
              Deskripsi Bio / Ringkasan Diri *
            </label>
            <textarea
              required
              rows={3}
              value={formData.bio || ''}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Ceritakan keahlian utama dan fokus pengembangan software Anda..."
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717] resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
              URL Foto Avatar
            </label>
            <input
              type="text"
              value={formData.avatarUrl || ''}
              onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
              placeholder="https://..."
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
                GitHub URL
              </label>
              <input
                type="text"
                value={formData.githubUrl || ''}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                placeholder="https://github.com/..."
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
                Lokasi
              </label>
              <input
                type="text"
                value={formData.location || ''}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Jakarta, Indonesia"
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717]"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#EAE5DC]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-[#57534E] hover:text-[#171717]"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 text-xs font-bold text-[#171717] bg-[#F59E0B] hover:bg-[#D97706] hover:text-white border border-[#171717] btn-neo disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin inline mr-1.5" /> : null}
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

