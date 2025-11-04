'use client';
import { useEffect } from 'react';

export default function SWRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Sempre usar caminho absoluto da raiz para o ServiceWorker
      const swUrl = '/sw.js';
      navigator.serviceWorker.register(swUrl, { scope: '/' }).catch(console.warn);
    }
  }, []);
  return null;
}
