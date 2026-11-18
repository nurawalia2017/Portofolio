import React, { useState } from 'react';
import type { MessageInput } from '../types';
import { sendMessage } from '../services/api';
import { 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Mail, 
  MessageCircle, 
  ChevronDown, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [isEmailDropdownOpen, setIsEmailDropdownOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const [formData, setFormData] = useState<MessageInput>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Email targets & WhatsApp target
  const primaryEmail = "nurawalia2017@gmail.com";
  const backupEmail = "nurawalia04@gmail.com";
  const whatsAppPhone = "6281341119439";

  // Build WhatsApp message containing all fields recorded in the form
  const buildWhatsAppMessage = () => {
    if (!formData.name && !formData.email && !formData.subject && !formData.message) {
      return 'Halo Nur Awalia, saya telah melihat portofolio Anda dan tertarik untuk berdiskusi mengenai kerja sama / peluang kerja.';
    }

    const lines = [
      'Halo Nur Awalia, saya menghubungi Anda melalui formulir kontak portofolio:',
      '',
      formData.name ? `👤 Nama: ${formData.name}` : null,
      formData.email ? `📧 Email: ${formData.email}` : null,
      formData.subject ? `🏢 Perusahaan / Subjek: ${formData.subject}` : null,
      '',
      '📝 Pesan:',
      formData.message || '(Belum menulis pesan khusus)'
    ].filter(item => item !== null);

    return lines.join('\n');
  };

  const getWhatsAppUrl = () => {
    return `https://wa.me/${whatsAppPhone}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
  };

  // Build Email Subject & Body with full form content
  const getEmailSubject = () => {
    if (formData.subject) {
      return `[Portofolio] ${formData.subject} - ${formData.name || 'Pengunjung'}`;
    }
    return `Pesan Kontak Portofolio dari ${formData.name || 'Pengunjung Website'}`;
  };

  const getEmailBody = () => {
    return [
      `Halo Nur Awalia,`,
      ``,
      `Berikut rincian pesan kontak yang dikirim melalui formulir website portofolio:`,
      `--------------------------------------------------`,
      `Nama Pengirim      : ${formData.name || '-'}`,
      `Email Pengirim     : ${formData.email || '-'}`,
      `Perusahaan/Subjek  : ${formData.subject || '-'}`,
      `--------------------------------------------------`,
      ``,
      `Isi Pesan:`,
      formData.message || '(Belum ada pesan tertulis)',
      ``,
      `Dikirim dari Formulir Kontak Portofolio Nur Awalia`
    ].join('\n');
  };

  const getMailtoUrl = (email: string) => {
    return `mailto:${email}?subject=${encodeURIComponent(getEmailSubject())}&body=${encodeURIComponent(getEmailBody())}`;
  };

  const getGmailWebUrl = (email: string) => {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(getEmailSubject())}&body=${encodeURIComponent(getEmailBody())}`;
  };

  const handleCopyEmail = (email: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleWhatsAppClick = () => {
    // If the visitor already typed message details, save to database as well
    if (formData.name && formData.message) {
      sendMessage(formData).catch(() => {});
    }
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await sendMessage(formData);
      setSuccess(response.message || 'Terima kasih! Pesan Anda telah tersimpan dan terhubung ke sistem kami.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#EAE5DC]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Title & Subtitle */}
        <div className="inline-block px-3 py-1 bg-white border border-[#EAE5DC] text-[11px] font-mono font-bold tracking-wider uppercase text-[#78716C] mb-4">
          Kontak & Informasi
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] mb-6">
          Hubungi Saya
        </h2>

        <p className="text-base sm:text-lg text-[#57534E] max-w-xl mx-auto mb-10 leading-relaxed">
          Tertarik untuk bekerja sama, membutuhkan tenaga administrasi &amp; IT Support yang andal, atau ingin berdiskusi? Tuliskan pesan di bawah dan pilih cara pengiriman langsung ke kontak saya.
        </p>

        {/* Form Container */}
        <div className="p-8 sm:p-12 bg-white border border-[#EAE5DC] shadow-[6px_6px_0px_0px_#EAE5DC] text-left max-w-2xl mx-auto">
          
          {success && (
            <div className="mb-6 p-4 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
                <span>{success}</span>
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#059669] text-white rounded text-xs font-mono font-bold hover:bg-[#047857] transition-colors self-start sm:self-auto"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Lanjut ke WhatsApp →
              </a>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 rounded-md bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] flex items-center gap-3 text-sm">
              <AlertCircle className="w-5 h-5 text-[#DC2626] shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-2 font-mono">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Budi Santoso"
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] placeholder-[#A8A29E] focus:outline-none focus:border-[#171717] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-2 font-mono">
                  Alamat Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="budi@perusahaan.com"
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] placeholder-[#A8A29E] focus:outline-none focus:border-[#171717] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-2 font-mono">
                Perusahaan / Subjek
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Tawaran Kerjasama / Lowongan IT Support"
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] placeholder-[#A8A29E] focus:outline-none focus:border-[#171717] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-2 font-mono">
                Pesan / Keterangan *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tuliskan pesan, tawaran kerja, atau pertanyaan Anda di sini..."
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717] placeholder-[#A8A29E] focus:outline-none focus:border-[#171717] text-sm resize-none"
              />
            </div>

            {/* Tombol Aksi Kontak Langsung */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              {/* Tombol 1: Simpan Pesan ke Sistem Database */}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-md font-bold text-[#171717] bg-[#F59E0B] hover:bg-[#D97706] hover:text-white border border-[#171717] btn-neo transition-all disabled:opacity-50 text-sm cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Menyimpan Pesan...
                  </>
                ) : (
                  'Kirim Pesan'
                )}
              </button>

              {/* Tombol 2: Dropdown Pilihan Kirim via Email */}
              <div className="relative w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setIsEmailDropdownOpen(!isEmailDropdownOpen)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md font-bold text-[#171717] bg-white hover:bg-[#F5F2EB] border border-[#171717] btn-neo transition-all text-sm cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#F59E0B]" />
                  Kirim via Email
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isEmailDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isEmailDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-20" 
                      onClick={() => setIsEmailDropdownOpen(false)} 
                    />
                    <div className="absolute left-0 sm:left-auto sm:right-0 bottom-full mb-2 w-full sm:w-72 bg-white border border-[#171717] shadow-[4px_4px_0px_#171717] rounded-md p-2 z-30 space-y-2">
                      
                      {/* Opsi Email Utama */}
                      <div className="p-2.5 bg-[#FAF8F5] border border-[#EAE5DC] rounded">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono font-bold uppercase text-[#F59E0B]">
                            Email Utama
                          </span>
                          <button
                            type="button"
                            onClick={(e) => handleCopyEmail(primaryEmail, e)}
                            className="inline-flex items-center gap-1 text-[10px] font-mono text-[#78716C] hover:text-[#171717]"
                            title="Salin email"
                          >
                            {copiedEmail === primaryEmail ? (
                              <span className="text-[#10B981] font-bold inline-flex items-center gap-0.5">
                                <Check className="w-3 h-3" /> Tersalin!
                              </span>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" /> Salin
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-xs font-mono font-bold text-[#171717] mb-2 truncate">
                          {primaryEmail}
                        </p>
                        <div className="flex items-center gap-2">
                          <a
                            href={getMailtoUrl(primaryEmail)}
                            onClick={() => setIsEmailDropdownOpen(false)}
                            className="flex-1 text-center py-1.5 px-2 bg-white border border-[#D6D0C5] text-[11px] font-bold text-[#171717] hover:border-[#171717] rounded transition-colors"
                          >
                            Aplikasi Email
                          </a>
                          <a
                            href={getGmailWebUrl(primaryEmail)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsEmailDropdownOpen(false)}
                            className="flex-1 text-center py-1.5 px-2 bg-[#EA4335] text-white text-[11px] font-bold hover:bg-[#D93025] rounded transition-colors inline-flex items-center justify-center gap-1"
                          >
                            Gmail Web <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>

                      {/* Opsi Email Cadangan */}
                      <div className="p-2.5 bg-[#FAF8F5] border border-[#EAE5DC] rounded">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono font-bold uppercase text-[#78716C]">
                            Email Cadangan
                          </span>
                          <button
                            type="button"
                            onClick={(e) => handleCopyEmail(backupEmail, e)}
                            className="inline-flex items-center gap-1 text-[10px] font-mono text-[#78716C] hover:text-[#171717]"
                            title="Salin email"
                          >
                            {copiedEmail === backupEmail ? (
                              <span className="text-[#10B981] font-bold inline-flex items-center gap-0.5">
                                <Check className="w-3 h-3" /> Tersalin!
                              </span>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" /> Salin
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-xs font-mono font-bold text-[#171717] mb-2 truncate">
                          {backupEmail}
                        </p>
                        <div className="flex items-center gap-2">
                          <a
                            href={getMailtoUrl(backupEmail)}
                            onClick={() => setIsEmailDropdownOpen(false)}
                            className="flex-1 text-center py-1.5 px-2 bg-white border border-[#D6D0C5] text-[11px] font-bold text-[#171717] hover:border-[#171717] rounded transition-colors"
                          >
                            Aplikasi Email
                          </a>
                          <a
                            href={getGmailWebUrl(backupEmail)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsEmailDropdownOpen(false)}
                            className="flex-1 text-center py-1.5 px-2 bg-[#EA4335] text-white text-[11px] font-bold hover:bg-[#D93025] rounded transition-colors inline-flex items-center justify-center gap-1"
                          >
                            Gmail Web <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>

                    </div>
                  </>
                )}
              </div>

              {/* Tombol 3: Kirim via WhatsApp Langsung */}
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md font-bold text-[#065F46] bg-[#ECFDF5] hover:bg-[#D1FAE5] border border-[#059669] shadow-[3px_3px_0px_#059669] hover:shadow-[4px_4px_0px_#059669] transition-all text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#059669]" />
                Kirim via WhatsApp
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
