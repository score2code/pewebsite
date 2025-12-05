"use client";
import { useEffect, useMemo, useState } from 'react';

function todayKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function encodeToken(k: string): string {
  return typeof window !== 'undefined' ? btoa(`${k}|ok|${k.length * 3}`) : '';
}

function checkPassword(input: string): boolean {
  const target = typeof window !== 'undefined' ? atob('MzAw') : '300';
  return String(input || '').trim() === target;
}

export default function PrivadoGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [show, setShow] = useState(false);
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState('');

  const key = useMemo(() => `privado_access_${todayKey()}`, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored && stored === encodeToken(todayKey())) {
        setUnlocked(true);
        setShow(false);
        return;
      }
    } catch {}
    setShow(true);
  }, [key]);

  function submit() {
    if (checkPassword(pwd)) {
      try {
        localStorage.setItem(key, encodeToken(todayKey()));
      } catch {}
      setUnlocked(true);
      setShow(false);
      setErr('');
    } else {
      setErr('Senha incorreta');
    }
  }

  if (!unlocked) {
    return (
      <div className="relative">
        {show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 w-full max-w-sm mx-auto rounded-xl bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 p-6 shadow-custom dark:shadow-custom-dark">
              <h2 className="text-xl font-semibold text-dark-900 dark:text-light-100 mb-2">Área Privada</h2>
              <p className="text-sm text-dark-900/70 dark:text-light-100/70 mb-4">Informe a senha. Dica: relacionado ao que vem depois de casa no WhatsApp.</p>
              <input
                type="password"
                value={pwd}
                onChange={e => setPwd(e.target.value)}
                className="w-full text-sm bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded px-2 py-2"
                placeholder="Senha"
              />
              {err && <div className="mt-2 text-xs text-red-700 dark:text-red-400">{err}</div>}
              <div className="mt-4 flex justify-end gap-2">
                <button onClick={submit} className="text-sm px-3 py-2 rounded border border-light-300 dark:border-dark-600 bg-light-200 dark:bg-dark-700">Entrar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return <>{children}</>;
}

