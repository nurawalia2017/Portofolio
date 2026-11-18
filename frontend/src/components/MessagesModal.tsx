import React, { useState, useEffect } from 'react';
import { X, Mail, Check, RefreshCw, Calendar, User } from 'lucide-react';
import { fetchMessages, markMessageAsRead } from '../services/api';
import type { ContactMessage } from '../types';

interface MessagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MessagesModal: React.FC<MessagesModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMessages = async () => {
    setLoading(true);
    try {
      const data = await fetchMessages();
      setMessages(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadMessages();
    }
  }, [isOpen]);

  const handleMarkRead = async (id: number) => {
    await markMessageAsRead(id);
    setMessages(prev => prev.map(m => m.id === id ? { ...m, isRead: true } : m));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border-2 border-[#171717] p-8 shadow-[8px_8px_0px_0px_#171717] max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#EAE5DC] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FAF8F5] border border-[#D6D0C5] text-[#171717]">
              <Mail className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#171717]">
                Pesan Kontak Masuk
              </h3>
              <p className="text-xs text-[#78716C] font-mono">
                Tersimpan di database PostgreSQL
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadMessages}
              disabled={loading}
              className="p-2 text-[#78716C] hover:text-[#171717] hover:bg-[#FAF8F5] transition-colors"
              title="Refresh"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#78716C] hover:text-[#171717] hover:bg-[#FAF8F5] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content List */}
        <div className="overflow-y-auto py-5 space-y-4 flex-1 pr-1">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <Mail className="w-12 h-12 text-[#D6D0C5] mx-auto mb-3" />
              <p className="text-sm font-semibold text-[#44403C]">Belum ada pesan yang masuk.</p>
              <p className="text-xs text-[#78716C] mt-1">Kirim pesan melalui formulir kontak untuk melihatnya di sini.</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-5 border transition-all ${
                  msg.isRead
                    ? 'bg-[#FAF8F5] border-[#EAE5DC]'
                    : 'bg-white border-[#171717] shadow-[3px_3px_0px_0px_#171717]'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#F59E0B]" />
                    <span className="font-bold text-[#171717] text-sm">{msg.name}</span>
                    <span className="text-xs text-[#78716C] font-mono">({msg.email})</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {!msg.isRead ? (
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-[#FEF3C7] text-[#92400E] border border-[#F59E0B] font-mono">
                        BARU
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 text-[10px] font-medium bg-[#EAE5DC] text-[#78716C] font-mono">
                        DIBACA
                      </span>
                    )}

                    <div className="flex items-center gap-1 text-[11px] text-[#78716C] font-mono">
                      <Calendar className="w-3 h-3" />
                      {new Date(msg.createdAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>

                {msg.subject && (
                  <div className="text-xs font-semibold text-[#171717] mb-1">
                    Company/Subject: {msg.subject}
                  </div>
                )}

                <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed bg-white p-3 border border-[#EAE5DC] mt-2">
                  {msg.message}
                </p>

                {!msg.isRead && (
                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => handleMarkRead(msg.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#171717] bg-[#FAF8F5] border border-[#171717] hover:bg-[#F59E0B] transition-colors"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Tandai Dibaca
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#EAE5DC] flex justify-between items-center text-xs text-[#78716C] font-mono">
          <span>Total Pesan: {messages.length}</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#171717] hover:bg-black text-white text-xs font-bold"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
