import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const dynamic = 'force-static';
export const revalidate = false;

/**
 * Serves static JSON files for picks under /api/picks/<file>.json
 * Supported patterns:
 * - soccer-YYYY-MM-DD.json -> returns list of picks for date
 * - soccer-YYYY-MM-DD-<id>.json -> returns single pick by id
 * Same for "football" type.
 */
export async function GET(_req: Request, { params }: { params: { file: string } }) {
  try {
    const fileParam = params.file || '';
    // Normalize and strip optional trailing slash
    const fileName = fileParam.replace(/\/$/, '');
    const withoutExt = fileName.endsWith('.json') ? fileName.slice(0, -5) : fileName;

    const parts = withoutExt.split('-');
    if (parts.length < 4) {
      return NextResponse.json({ data: null, message: 'Formato de arquivo inválido.' }, { status: 400 });
}

// Note: generateStaticParams is not supported for route handlers.

    const type = parts[0]; // 'soccer' | 'football'
    const year = parts[1];
    const month = parts[2];
    const day = parts[3];
    const id = parts.length > 4 ? parts.slice(4).join('-') : null;

    const srcPath = path.join(process.cwd(), 'public', 'data', type, year, month, `${day}.json`);

    let picks: any[] = [];
    try {
      const content = await fs.readFile(srcPath, 'utf-8');
      const parsed = JSON.parse(content);
      picks = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return NextResponse.json({ data: null, message: 'Arquivo não encontrado.' }, { status: 404 });
    }

    if (!id) {
      return NextResponse.json({ data: picks, message: 'Palpites encontrados com sucesso.' }, { status: 200 });
    }

    const pick = picks.find((p) => p.id === id);
    if (!pick) {
      return NextResponse.json({ data: null, message: 'Palpite não encontrado.' }, { status: 404 });
    }

    return NextResponse.json({ data: pick, message: 'Palpite único encontrado com sucesso.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, message: 'Erro ao processar requisição.' }, { status: 500 });
  }
}