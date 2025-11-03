import * as fs from 'fs/promises';
import * as path from 'path';

export interface PickData {
    id: string;
    league: string;
    homeTeam: string;
    awayTeam: string;
    dateTime: string;
    tip: string;
    odds: number;
    confidence: number;
    result?: 'Win' | 'Loss' | 'Pending';
    analysis?: string;
}

/**
 * Busca os palpites para uma data específica (ou hoje) diretamente do sistema de arquivos.
 * Esta função só pode ser chamada por um Server Component.
 * @param dateString Opcional, data no formato 'YYYY-MM-DD'.
 * @returns Array de PickData ou um array vazio.
 */
export async function getDailyPicks(dateString?: string): Promise<PickData[]> {
    try {
        const date = dateString ? new Date(dateString) : new Date();

        // Formata a data para YYYY/MM/DD
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        // Cria o caminho do arquivo JSON: /project-root/data/soccer/YYYY/MM/DD.json
        // process.cwd() garante que o caminho seja absoluto a partir da raiz do projeto.
        const filePath = path.join(process.cwd(), 'data', String(year), month, `${day}.json`);

        // Lê o conteúdo do arquivo
        const fileContent = await fs.readFile(filePath, 'utf-8');

        // Faz o parse do conteúdo e retorna.
        return JSON.parse(fileContent) as PickData[];

    } catch (error) {
        // Se o arquivo não for encontrado (ENOENT), é esperado. Retorna array vazio.
        if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
            // console.log(`Nenhum arquivo de palpites encontrado.`);
            return [];
        }
        // Se for outro erro, logamos e retornamos vazio.
        console.error("Erro inesperado ao buscar dados do sistema de arquivos:", error);
        return [];
    }
}
