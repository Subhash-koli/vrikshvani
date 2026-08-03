'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle2, AlertTriangle, X, Info } from 'lucide-react';

export type ToastVariant = 'success' | 'warning' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  variant: ToastVariant;
}

// Simple event bus for triggering toasts from anywhere
const listeners: ((toast: Toast) => void)[] = [];

export function toast(message: string, variant: ToastVariant = 'success') {
  const id = `toast_${Date.now()}`;
  const newToast: Toast = { id, message, variant };
  listeners.forEach((l) => l(newToast));
}

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handler = (t: Toast) => {
      setToasts((prev) => [...prev, t]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((x) => x.id !== t.id));
      }, 4000);
    };
    listeners.push(handler);
    return () => {
      const idx = listeners.indexOf(handler);
      if (idx > -1) listeners.splice(idx, 1);
    };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-24 right-4 z-[1000] flex flex-col gap-3 max-w-sm">
      {toasts.map((t) => {
        const Icon = t.variant === 'success' ? CheckCircle2 :
                     t.variant === 'warning' ? AlertTriangle :
                     t.variant === 'error' ? X : Info;
        const colorClass = t.variant === 'success' ? 'border-[#8AD74C]/40 text-[#8AD74C]' :
                           t.variant === 'warning' ? 'border-[#E8D07C]/40 text-[#E8D07C]' :
                           t.variant === 'error' ? 'border-red-500/40 text-red-400' :
                           'border-white/20 text-[#A3B18A]';
        return (
          <div
            key={t.id}
            className={`flex items-start gap-3 bg-[#0F2B18]/95 backdrop-blur-xl border ${colorClass} rounded-2xl px-4 py-3 shadow-2xl animate-slideIn`}
          >
            <Icon className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="text-sm text-[#F7F6F2] leading-relaxed">{t.message}</p>
            <button
              onClick={() => setToasts((p) => p.filter((x) => x.id !== t.id))}
              className="text-[#A3B18A] hover:text-[#F7F6F2] transition-colors shrink-0 ml-auto"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToastContainer;
