import { NextResponse, NextRequest } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * Rota GET para buscar palpites com base na data, com filtro opcional por ID.
 * Acessa um arquivo JSON local: /app/data/{ano}/{mes}/{dia}.json
 *
 * Exemplo de uso:
 * GET /api/picks/?type=soccer&date=2025-11-04
 * GET /api/picks/?type=soccerdate=2025-11-04&id=futebol-002
 */
export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const typeQuery = url.searchParams.get('type') || 'soccer';
    const dateQuery = url.searchParams.get('date'); // Pega o valor de '?date=YYYY-MM-DD'
    const idQuery = url.searchParams.get('id');       // 🆕 Pega o valor do novo filtro '?id=...'

    if (!dateQuery) {
        return NextResponse.json({
            data: null, // Mudança para 'null' se estivermos a procurar um item
            message: 'Parâmetro "date" é obrigatório no formato YYYY-MM-DD.'
        }, { status: 400 });
    }

    // 1. Montar o caminho do arquivo (filePath)
    const [year, month, day] = dateQuery.split('-');

    if (!year || !month || !day) {
        return NextResponse.json({
            data: null,
            message: 'Formato de data inválido. Use YYYY-MM-DD.'
        }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'app', 'data', typeQuery, year, month, `${day}.json`);
    let data;

    try {
        // 2. Tenta ler o arquivo de forma assíncrona
        const fileContent = await fs.readFile(filePath, 'utf-8');

        // 3. Faz o parse do conteúdo JSON
        data = JSON.parse(fileContent);

        // O conteúdo deve ser um array de palpites
        if (!Array.isArray(data)) {
            throw new Error("O arquivo JSON não contém um array de palpites.");
        }

    } catch (error: any) {
        // 4. Tratamento de erro (Arquivo não encontrado ou erro de leitura/parse)
        if (error.code === 'ENOENT') {
             console.log(`[API Picks] Arquivo não encontrado: ${filePath}`);
             return NextResponse.json({
                data: idQuery ? null : [], // Se procura por ID, retorna null; senão, array vazio.
                message: 'Nenhum palpite encontrado para a data.'
            }, { status: 200 });
        }

        console.error(`[API Picks] Erro ao processar o arquivo ${filePath}:`, error);
        return NextResponse.json({
            data: null,
            message: `Erro interno no servidor: ${error.message}`
        }, { status: 500 });
    }

    // 5. 🆕 Aplicar Filtro por ID (se fornecido)
    if (idQuery) {
        // Assume que cada item no array 'data' tem uma propriedade 'id'
        const pick = data.find((p: any) => p.id === idQuery);

        if (!pick) {
            return NextResponse.json({
                data: null,
                message: `Palpite com ID '${idQuery}' não encontrado para a data '${dateQuery}'.`
            }, { status: 404 });
        }

        // Se encontrou, retorna o objeto único, não um array
        return NextResponse.json({
            data: pick,
            message: 'Palpite único encontrado com sucesso.'
        });
    }


    // 6. Retorna todos os dados da data (se não houver filtro de ID)
    return NextResponse.json({
        data: data,
        message: 'Palpites encontrados com sucesso.'
    });
}
