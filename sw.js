// sw.js — PWA cache leve com versão dinâmica por build
/* eslint-disable no-restricted-globals */
(() => {
  const href = (self && self.location && self.location.href) || '';
  const match = href.match(/[?&]v=([^&]+)/);
  const VERSION = match ? decodeURIComponent(match[1]) : 'dev';
  const SCOPE_PATH = new URL(self.registration.scope).pathname.replace(/\/$/, '');
  const CACHE_NAME = `pwa-cache-${VERSION}`;
  const MAX_ENTRIES = 60;

  // Apenas assets estáticos essenciais; não cachear HTML nem JSON
  const CORE = [
    `${SCOPE_PATH}/manifest.webmanifest`,
    `${SCOPE_PATH}/favicon.ico`,
  ];

  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => cache.addAll(CORE))
        .then(() => self.skipWaiting())
    );
  });

  self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : Promise.resolve())));
      await self.clients.claim();
    })());
  });

  function shouldCache(req) {
    try {
      if (req.method !== 'GET') return false;
      const url = new URL(req.url);
      // Fora do escopo do site
      if (!url.pathname.startsWith(SCOPE_PATH)) return false;

      const ext = url.pathname.split('.').pop();
      const dest = req.destination;

      // Não cachear HTML (document) nem JSON
      if (dest === 'document') return false;
      if ((ext || '').toLowerCase() === 'json') return false;
      const accept = req.headers.get('accept') || '';
      if (accept.includes('application/json')) return false;
      if (url.pathname.startsWith(`${SCOPE_PATH}/api/`)) return false;

      // Cachear apenas assets estáticos comuns
      const staticExts = ['js', 'css', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'ico', 'woff', 'woff2'];
      return staticExts.includes((ext || '').toLowerCase());
    } catch {
      return false;
    }
  }

  async function pruneCache(cache) {
    try {
      const keys = await cache.keys();
      if (keys.length <= MAX_ENTRIES) return;
      const excess = keys.length - MAX_ENTRIES;
      for (let i = 0; i < excess; i++) {
        await cache.delete(keys[i]);
      }
    } catch {}
  }

  self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (!shouldCache(req)) return;

    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req);
      if (cached) {
        // SWR: revalida em background
        event.waitUntil((async () => {
          try {
            const fresh = await fetch(req);
            if (fresh && fresh.ok) {
              await cache.put(req, fresh.clone());
              await pruneCache(cache);
            }
          } catch {}
        })());
        return cached;
      }

      try {
        const res = await fetch(req);
        if (res && res.ok) {
          await cache.put(req, res.clone());
          await pruneCache(cache);
        }
        return res;
      } catch {
        return Response.error();
      }
    })());
  });
})();
