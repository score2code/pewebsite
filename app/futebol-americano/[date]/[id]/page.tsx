import React from 'react';
import PickAnalysisClient from '@/app/components/pick';

import { promises as fs } from 'fs';
import path from 'path';

// --- Funções do SERVIDOR/BUILD (Obrigatórias) ---

/**
 * Lê o sistema de ficheiros para gerar dinamicamente todos os IDs para o build estático.
 * @returns {Promise<{id: string}[]>}
 */
export async function generateStaticParams() {
    // Tenta ler o diretório onde os JSONs estão.
    const dataDir = path.join(process.cwd(), 'app', 'data', 'football');
    let allPicks = [];

    try {
        const years = await fs.readdir(dataDir);

        for (const year of years) {
            const yearPath = path.join(dataDir, year);
            const months = await fs.readdir(yearPath);

            for (const month of months) {
                const monthPath = path.join(yearPath, month);
                const dayFiles = await fs.readdir(monthPath);

                for (const dayFile of dayFiles) {
                    if (path.extname(dayFile) === '.json') {
                        const filePath = path.join(monthPath, dayFile);

                        try {
                            const fileContent = await fs.readFile(filePath, 'utf-8');
                            const picksForDay = JSON.parse(fileContent);

                            if (Array.isArray(picksForDay)) {
                                const dayPicks = picksForDay.map(pick => ({
                                  date: `${year}-${month}-${dayFile.split('.')[0]}`, // <--- A CHAVETA '}' EXTRA ESTÁ AQUI
                                  id: pick.id
                                }));
                                allPicks.push(...dayPicks);
                            }
                        } catch (e) {
                            console.warn(`[Build Warning] Erro ao ler ou analisar o ficheiro ${filePath}:`, e);
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.error("[Build Error] Não foi possível ler o diretório base 'app/data'. Recorrendo a IDs simulados.", error);
        // Fallback: Retorna IDs de mock para garantir que o build estático não falha totalmente.
        return [
            { date: '2025-11-04', id: 'futebol-001' },
            { date: '2025-11-04', id: 'futebol-002' },
        ];
    }

    // Devolve a lista final de IDs únicos para o Next.js build
    return allPicks;
}


// --- Componente Principal da Rota /futebol/[id] (SERVER COMPONENT) ---

/**
 * Componente da Página de Análise (Server Side).
 * Recebe o ID da rota e passa-o para o componente Cliente.
 * @param {{ params: { id: string ; date: string } }} props
 */
export default function PickAnalysisPage({ params = { id: 'futebol-002', date: new Date().toISOString().split('T')[0]} }: { params: { id: string, date: string} }) {
    // Garante que usamos o ID necessário
    const pickId = params.id || 'futebol-002';
    const pickDate = params.date || new Date().toISOString().split('T')[0];

    // Renderiza o Cliente Component, passando o ID necessário.
    return <PickAnalysisClient pickId={pickId} type="football" date={pickDate} />;
}
