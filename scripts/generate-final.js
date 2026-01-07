const fs = require('fs/promises');
const path = require('path');

async function readJson(filePath) {
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function isAllowedPrediction(pred) {
  const p = (pred || '').toLowerCase();
  return !p; // placeholder, real check happens in isAllowedPick
}

function pickKey(p) {
  return `${p.id || `${p.homeTeam}-${p.awayTeam}`}|${p.prediction}`;
}

async function collectCandidates() {
  const baseDir = path.join(process.cwd(), 'app', 'data', 'soccer', '2026', '01');
  const days = [
    '07','08','09','10','11','12','13','14','15','16','17','18','19','20','21'
  ];
  const candidates = [];
  for (const d of days) {
    const file = path.join(baseDir, `${d}.json`);
    const arr = await readJson(file);
    if (!Array.isArray(arr)) continue;
    for (const p of arr) {
      const prediction = p.prediction || '';
      const confidence = Number(p.confidence ?? 0);
      const predLower = prediction.toLowerCase();
      const isUnder = predLower.includes('under') || predLower.includes('menos');
      const isHandicap = predLower.includes('handicap');
      const allowed =
        (!isUnder && !isHandicap && confidence >= 70) ||
        (isUnder && confidence >= 90) ||
        (isHandicap && confidence >= 80);
      if (allowed) {
        candidates.push({
          id: p.id,
          league: p.league,
          homeTeam: p.homeTeam,
          awayTeam: p.awayTeam,
          date: p.date,
          time: p.time,
          prediction: prediction,
          confidence,
        });
      }
    }
  }
  // sort by confidence desc, then stable by date/time for variety
  candidates.sort((a, b) => {
    if (b.confidence !== a.confidence) return b.confidence - a.confidence;
    const ad = a.date.localeCompare(b.date);
    if (ad !== 0) return ad;
    return (a.time || '').localeCompare(b.time || '');
  });
  return candidates;
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true }).catch(() => {});
}

async function writeBilhetes(files) {
  const outDir = path.join(process.cwd(), 'app', 'data', 'final');
  await ensureDir(outDir);
  for (let i = 0; i < files.length; i++) {
    const picks = files[i];
    const outPath = path.join(outDir, `bilhete-${i + 1}.json`);
    const payload = picks.map(p => ({
      league: p.league,
      homeTeam: p.homeTeam,
      awayTeam: p.awayTeam,
      date: p.date,
      time: p.time,
      prediction: p.prediction,
    }));
    await fs.writeFile(outPath, JSON.stringify(payload, null, 2) + '\n', 'utf8');
    console.log(`[write] ${outPath} (${payload.length})`);
  }
}

async function main() {
  const quotas = [30, 30, 30, 30, 20, 20, 13, 13];
  const numFiles = quotas.length;
  const files = Array.from({ length: numFiles }, () => []);
  const perFileDateCount = Array.from({ length: numFiles }, () => new Map());
  const globalKeyCount = new Map();
  const perFileKeys = Array.from({ length: numFiles }, () => new Set());

  const candidates = await collectCandidates();
  if (candidates.length < quotas.reduce((a, b) => a + b, 0)) {
    console.warn(`[warn] Poucos candidatos (${candidates.length}) para a meta de 186. Ainda assim distribuirei o máximo possível respeitando as restrições.`);
  }

  // helper to check if we can add pick to file idx
  const canAdd = (idx, pick, key) => {
    if (files[idx].length >= quotas[idx]) return false;
    const date = pick.date;
    const dc = perFileDateCount[idx].get(date) || 0;
    if (dc >= 3) return false;
    const kc = globalKeyCount.get(key) || 0;
    if (kc >= 2) return false;
    if (perFileKeys[idx].has(key)) return false; // evitar duplicar dentro do mesmo arquivo
    return true;
  };

  // Try to distribute fairly
  for (const pick of candidates) {
    const key = pickKey(pick);
    // Allow up to 2 occurrences across different files
    while ((globalKeyCount.get(key) || 0) < 2) {
      // Prefer files with more remaining quota; avoid exceeding per-date limit
      // Sort indices by remaining capacity desc, then by current per-file date count asc
      const indices = Array.from({ length: numFiles }, (_, i) => i).sort((i, j) => {
        const remI = quotas[i] - files[i].length;
        const remJ = quotas[j] - files[j].length;
        if (remJ !== remI) return remJ - remI;
        const di = perFileDateCount[i].get(pick.date) || 0;
        const dj = perFileDateCount[j].get(pick.date) || 0;
        return di - dj;
      });
      let placedOnce = false;
      for (const idx of indices) {
        if (canAdd(idx, pick, key)) {
          files[idx].push(pick);
          const date = pick.date;
          perFileDateCount[idx].set(date, (perFileDateCount[idx].get(date) || 0) + 1);
          perFileKeys[idx].add(key);
          globalKeyCount.set(key, (globalKeyCount.get(key) || 0) + 1);
          placedOnce = true;
          break; // try next occurrence in another file
        }
      }
      if (!placedOnce) break;
      // stop early if all quotas met
      const doneNow = files.every((arr, i) => arr.length >= quotas[i]);
      if (doneNow) break;
    }
    // stop early if all quotas met
    const done = files.every((arr, i) => arr.length >= quotas[i]);
    if (done) break;
  }

  // Report constraints
  for (let i = 0; i < numFiles; i++) {
    console.log(`[file ${i + 1}] total=${files[i].length}`);
    for (const [date, cnt] of perFileDateCount[i].entries()) {
      if (cnt > 3) {
        console.warn(`  [violation] ${date} tem ${cnt} palpites (máx 3)`);
      }
    }
  }

  await writeBilhetes(files);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
