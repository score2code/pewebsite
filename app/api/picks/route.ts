import { NextResponse, NextRequest } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * Rota GET para buscar palpites com base na data.
 * Acessa um arquivo JSON local: /app/data/{ano}/{mes}/{dia}.json
 *
 * Exemplo de uso: GET /api/picks/?date=2025-11-04
 */
export async function GET(request: NextRequest) {
    // 1. CORREÇÃO: Acessar parâmetros de query usando a URL do objeto Request
    // O erro anterior estava aqui, tentando ler 'req.query'
    const url = new URL(request.url);
    const dateQuery = url.searchParams.get('date'); // Pega o valor de '?date=YYYY-MM-DD'

    if (!dateQuery) {
        return NextResponse.json({
            data: [],
            message: 'Parâmetro "date" é obrigatório no formato YYYY-MM-DD.'
        }, { status: 400 });
    }

    // 2. Montar o caminho do arquivo (filePath)
    const [year, month, day] = dateQuery.split('-');

    if (!year || !month || !day) {
        return NextResponse.json({
            data: [],
            message: 'Formato de data inválido. Use YYYY-MM-DD.'
        }, { status: 400 });
    }

    // O caminho que você mencionou é: app/data/2025/11/04.json
    const filePath = path.join(process.cwd(), 'app', 'data', year, month, `${day}.json`);

    try {
        // 3. Tenta ler o arquivo de forma assíncrona
        const fileContent = await fs.readFile(filePath, 'utf-8');

        // 4. Faz o parse do conteúdo JSON
        const data = JSON.parse(fileContent);

        // 5. Retorna os dados encontrados (status 200 OK)
        return NextResponse.json({
            data: data,
            message: 'Palpites encontrados com sucesso.'
        });

    } catch (error: any) {
        // 6. Tratamento de erro (Arquivo não encontrado ou erro de leitura/parse)

        // Se o erro for que o arquivo não existe (ENOENT), retorna a mensagem original.
        if (error.code === 'ENOENT') {
             console.log(`[API Picks] Arquivo não encontrado: ${filePath}`);
             return NextResponse.json({
                data: [],
                message: 'Nenhum palpite encontrado para a data.'
            }, { status: 200 }); // Retorna 200, pois é uma resposta esperada
        }

        // Para outros erros (ex: JSON inválido, permissão), retorna 500
        console.error(`[API Picks] Erro ao processar o arquivo ${filePath}:`, error);
        return NextResponse.json({
            data: [],
            message: `Erro interno no servidor: ${error.message}`
        }, { status: 500 });
    }
}

// Para usar as funções do Node (fs, path) no Next.js App Router,
// é necessário adicionar um trecho de configuração para garantir que o ambiente seja Node.js (não Edge).
// Este trecho é útil, mas pode ser omitido se você já estiver em um ambiente Node.
/*
export const runtime = 'nodejs';
*/
