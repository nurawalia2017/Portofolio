import React, { useState } from 'react';
import { X, Loader2, PlusCircle } from 'lucide-react';
import { createProject } from '../services/api';
import type { Project } from '../types';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newProject: Project) => void;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Fullstack');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('React, Bun, PostgreSQL');
  const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80');
  const [demoUrl, setDemoUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [featured, setFeatured] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const tagList = tags.split(',').map(t => t.trim()).filter(Boolean);
      const res = await createProject({
        title,
        category,
        description,
        tags: tagList,
        imageUrl,
        demoUrl: demoUrl || undefined,
        githubUrl: githubUrl || undefined,
        featured
      });
      onSuccess(res.data);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Gagal menyimpan proyek');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl rounded-none bg-white border-2 border-[#171717] p-8 shadow-[8px_8px_0px_0px_#171717] max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#EAE5DC] mb-6">
          <div className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-[#F59E0B]" />
            <h3 className="text-lg font-bold text-[#171717]">Tambah Proyek ke PostgreSQL</h3>
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
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
              Judul Proyek *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. E-Commerce Performance Revamp"
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
                Kategori *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717]"
              >
                <option value="Fullstack">Fullstack</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Paid Acquisition">Paid Acquisition</option>
                <option value="Organic Growth">Organic Growth</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
                Tags (Pisahkan koma)
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="React, Bun, Postgres"
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
              Deskripsi Singkat *
            </label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Jelaskan hasil dan arsitektur kampanye/proyek..."
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717] resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
              URL Gambar Thumbnail
            </label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
                Demo Link (opsional)
              </label>
              <input
                type="text"
                value={demoUrl}
                onChange={(e) => setDemoUrl(e.target.value)}
                placeholder="https://demo.example.com"
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 font-mono">
                GitHub Link (opsional)
              </label>
              <input
                type="text"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/..."
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] text-sm focus:outline-none focus:border-[#171717]"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="featured"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="rounded-none border-[#171717] text-[#F59E0B]"
            />
            <label htmlFor="featured" className="text-xs text-[#57534E]">
              Tandai sebagai Proyek Unggulan (Featured)
            </label>
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
              Simpan ke Database
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
