import React from 'react';
import PickAnalysisClient from '@/app/components/pick';

import { promises as fs } from 'fs';
import path from 'path';
import { validatePickArray } from '@/app/lib/validation';

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
                                const slugify = (text: string): string => {
                                  return String(text)
                                    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, '-')
                                    .replace(/(^-|-$)/g, '');
                                };
                                const dayPicks = picksForDay.map(pick => ({
                                  date: `${year}-${month}-${dayFile.split('.')[0]}`,
                                  id: pick?.id
                                    ? String(pick.id)
                                    : (pick?.homeTeam && pick?.awayTeam
                                        ? `${slugify(pick.homeTeam)}-x-${slugify(pick.awayTeam)}`
                                        : '')
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
        console.error("[Build Error] Não foi possível ler o diretório base 'app/data'.", error);
        return [];
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
export default async function PickAnalysisPage({ params = { id: 'futebol-002', date: new Date().toISOString().split('T')[0]} }: { params: { id: string, date: string} }) {
    const pickId = params.id || 'futebol-002';
    const pickDate = params.date || new Date().toISOString().split('T')[0];

    const year = pickDate.substring(0,4);
    const month = pickDate.substring(5,7);
    const day = pickDate.substring(8,10);

    const filePath = path.join(process.cwd(), 'app', 'data', 'football', year, month, `${day}.json`);
    let initialPick: any = null;
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        const raw = JSON.parse(content);
        const arr = Array.isArray(raw) ? raw : Array.isArray(raw?.data) ? raw.data : [];
        const normalized = validatePickArray(arr).map(p => ({ ...p, date: p.date && p.date.length === 10 ? p.date : pickDate }));
        const slugify = (text: string): string => {
            return String(text)
              .normalize('NFD').replace(/\p{Diacritic}/gu, '')
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
        };
        initialPick = normalized.find((p: any) => p.id === pickId)
          || arr.find((p: any) => p.id === pickId)
          || normalized.find((p: any) => `${slugify(p.homeTeam)}-x-${slugify(p.awayTeam)}` === pickId)
          || null;
    } catch (e) {
        initialPick = null;
    }

    return <PickAnalysisClient initialPick={initialPick} />;
}
