import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { validatePickArray } from '@/app/lib/validation';

export const dynamic = 'error';
export const revalidate = false;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const typeParam = searchParams.get('type') || 'soccer';
    const typeMap: Record<string, string> = {
      futebol: 'soccer',
      'futebol-americano': 'football',
    };
    const type = typeMap[typeParam] ?? typeParam;
    const date = searchParams.get('date');
    const id = searchParams.get('id');

    if (!date) {
      return NextResponse.json({
        data: null,
        message: 'Parâmetro "date" é obrigatório no formato YYYY-MM-DD.'
      }, { status: 400 });
    }

    // Validar tipo suportado
    const allowedTypes = new Set(['soccer', 'football']);
    if (!allowedTypes.has(type)) {
      return NextResponse.json({
        data: null,
        message: 'Parâmetro "type" inválido. Use "soccer" ou "football".'
      }, { status: 400 });
    }

    // Montar caminho do arquivo estático: public/data/<type>/<YYYY>/<MM>/<DD>.json
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const filePath = path.join(process.cwd(), 'public', 'data', type, year, month, `${day}.json`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({
        data: [],
        message: 'Arquivo de dados não encontrado para a data fornecida.'
      }, { status: 404 });
    }

    try {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const json = JSON.parse(raw);
      const validated = validatePickArray(Array.isArray(json) ? json : []);

      // Filtrar por id se fornecido
      const data = id ? validated.filter(p => p.id === id) : validated;

      return NextResponse.json({ data }, { status: 200 });
    } catch (e) {
      return NextResponse.json({
        data: [],
        message: 'Erro ao ler ou validar dados de palpites.'
      }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar palpites' },
      { status: 500 }
    );
  }
}