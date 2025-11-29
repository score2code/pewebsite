#!/usr/bin/env node
// Atualiza JSONs em app/data/soccer/2025/11 adicionando status: "pending" quando ausente
const fs = require('fs/promises');
const path = require('path');

async function main() {
  const baseDir = path.join(process.cwd(), 'app', 'data', 'soccer', '2025', '11');
  let files;
  try {
    files = await fs.readdir(baseDir);
  } catch (e) {
    console.error('Não foi possível ler o diretório:', baseDir, e.message);
    process.exit(1);
  }

  const jsonFiles = files.filter(f => f.endsWith('.json'));
  let totalUpdatedItems = 0;
  for (const f of jsonFiles) {
    const filePath = path.join(baseDir, f);
    try {
      const txt = await fs.readFile(filePath, 'utf-8');
      let parsed;
      try {
        parsed = JSON.parse(txt);
      } catch (e) {
        console.warn(`[skip] JSON inválido: ${filePath}`);
        continue;
      }

      const isArray = Array.isArray(parsed);
      const arr = isArray ? parsed : (Array.isArray(parsed?.data) ? parsed.data : null);
      if (!Array.isArray(arr)) {
        console.warn(`[skip] Estrutura não suportada em ${filePath}`);
        continue;
      }

      let updatedCount = 0;
      for (const item of arr) {
        if (item && typeof item === 'object') {
          const hasStatus = Object.prototype.hasOwnProperty.call(item, 'status');
          if (!hasStatus) {
            item.status = 'pending';
            updatedCount++;
          }
        }
      }

      if (updatedCount > 0) {
        const out = isArray ? arr : { ...parsed, data: arr };
        const jsonOut = JSON.stringify(out, null, 2) + '\n';
        await fs.writeFile(filePath, jsonOut, 'utf-8');
        console.log(`[ok] ${f}: adicionados status=pending em ${updatedCount} itens`);
        totalUpdatedItems += updatedCount;
      } else {
        console.log(`[ok] ${f}: nenhum item necessitou alteração`);
      }
    } catch (e) {
      console.error(`[erro] ${filePath}:`, e.message);
    }
  }

  console.log(`Concluído. Total de itens atualizados: ${totalUpdatedItems}`);
}

main();

