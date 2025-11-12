import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

function listPickRoutes() {
  const base = path.join(process.cwd(), 'app', 'data');
  const dirToSlug: Record<string, string> = {
    soccer: 'futebol',
    football: 'futebol-americano',
  };
  const sportsDirs = Object.keys(dirToSlug);
  const items: { url: string; lastModified: string }[] = [];

  for (const sportDirName of sportsDirs) {
    const sportDir = path.join(base, sportDirName);
    if (!fs.existsSync(sportDir)) continue;

    const years = fs.readdirSync(sportDir).filter((y) => /\d{4}/.test(y));
    for (const year of years) {
      const yearDir = path.join(sportDir, year);
      const months = fs.readdirSync(yearDir).filter((m) => /\d{2}/.test(m));
      for (const month of months) {
        const monthDir = path.join(yearDir, month);
        const files = fs.readdirSync(monthDir).filter((f) => f.endsWith('.json'));
        for (const file of files) {
          const date = file.replace('.json', '');
          const fullPath = path.join(monthDir, file);
          try {
            const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8')) as any[];
            for (const pick of content) {
              if (!pick?.id) continue;
              const sportSlug = dirToSlug[sportDirName];
              const url = `${siteUrl}/${sportSlug}/${year}-${month}-${date}/${pick.id}`;
              items.push({ url, lastModified: new Date().toISOString() });
            }
          } catch {
            // skip invalid JSON
          }
        }
      }
    }
  }

  return items;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const baseRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now },
    { url: `${siteUrl}/entretenimento`, lastModified: now },
    { url: `${siteUrl}/entretenimento/tic-tac-toe/`, lastModified: now },
    { url: `${siteUrl}/entretenimento/memory/`, lastModified: now },
    { url: `${siteUrl}/entretenimento/whack-a-mole/`, lastModified: now },
  ];

  // Include guides by scanning directory names under app/guias
  try {
    const guidesDir = path.join(process.cwd(), 'app', 'conteudos', 'guias');
    const entries = fs.readdirSync(guidesDir, { withFileTypes: true });
    const guideSlugs = entries
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .filter((name) => name !== 'page.tsx');
    // Agora os guias vivem sob /conteudos/guias/ no site
    const guideRoutes = guideSlugs.map((slug) => ({ url: `${siteUrl}/conteudos/guias/${slug}/`, lastModified: now }));
    // Include conteudos by scanning directory names under app/conteudos
    const conteudosDir = path.join(process.cwd(), 'app', 'conteudos');
    const conteudosEntries = fs.readdirSync(conteudosDir, { withFileTypes: true });
    const conteudosDirs = conteudosEntries.filter((e) => e.isDirectory()).map((e) => e.name);
    const conteudosRoutes: MetadataRoute.Sitemap = [];
    conteudosDirs.forEach((dir) => {
      conteudosRoutes.push({ url: `${siteUrl}/conteudos/${dir}/`, lastModified: now });
      // scan subpages
      const subDir = path.join(conteudosDir, dir);
      try {
        const subEntries = fs.readdirSync(subDir, { withFileTypes: true });
        subEntries.forEach((se) => {
          if (se.isDirectory()) {
            conteudosRoutes.push({ url: `${siteUrl}/conteudos/${dir}/${se.name}/`, lastModified: now });
          }
        });
      } catch {}
    });
    // Inclui o índice de conteúdo e de guias
    const extraRoutes: MetadataRoute.Sitemap = [
      { url: `${siteUrl}/conteudos/`, lastModified: now },
      { url: `${siteUrl}/conteudos/guias/`, lastModified: now },
    ];
    return [...baseRoutes, ...extraRoutes, ...guideRoutes, ...conteudosRoutes, ...listPickRoutes()];
  } catch {
    return [...baseRoutes, { url: `${siteUrl}/conteudos/`, lastModified: now }, { url: `${siteUrl}/conteudos/guias/`, lastModified: now }, ...listPickRoutes()];
  }
}
