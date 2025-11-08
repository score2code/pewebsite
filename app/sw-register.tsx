'use client';
import { useEffect } from 'react';

export default function SWRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Versão dinâmica por build via query param para forçar atualização
      const version = process.env.NEXT_PUBLIC_CACHE_VERSION || `${Date.now()}`;
      const swUrl = `/sw.js?v=${encodeURIComponent(version)}`;
      navigator.serviceWorker.register(swUrl, { scope: '/' })
        .then((reg) => {
          // Opcional: tentativa de update imediato ao carregar
          if (reg.update) {
            try { reg.update(); } catch {}
          }
        })
        .catch(console.warn);
    }
  }, []);
  return null;
}
