// Simple sync: mirrors app/data to public/data for dev/build
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true }).catch(() => {});
}

async function copyRecursive(src, dest) {
  const stats = await fsp.stat(src).catch(() => null);
  if (!stats) return;
  if (stats.isDirectory()) {
    await ensureDir(dest);
    const entries = await fsp.readdir(src);
    for (const entry of entries) {
      await copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    await ensureDir(path.dirname(dest));
    await fsp.copyFile(src, dest);
  }
}

async function removeDirSafe(dir) {
  try {
    await fsp.rm(dir, { recursive: true, force: true });
  } catch {}
}

async function main() {
  const projectRoot = process.cwd();
  const src = path.join(projectRoot, 'app', 'data');
  const dest = path.join(projectRoot, 'public', 'data');

  // If app/data does not exist, do nothing
  if (!fs.existsSync(src)) {
    console.log('[sync-data] Skipped: app/data not found.');
    return;
  }

  // Clean destination to avoid stale files
  await removeDirSafe(dest);
  await copyRecursive(src, dest);
  console.log('[sync-data] Mirrored app/data -> public/data');
}

main().catch((err) => {
  console.error('[sync-data] Failed:', err);
  process.exit(1);
});