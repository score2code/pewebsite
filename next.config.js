module.exports = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    // Versão dinâmica por build para o Service Worker
    NEXT_PUBLIC_CACHE_VERSION: Date.now().toString(),
    NEXT_PUBLIC_TARGET_KEY: 'Fioriel'
  },
};
