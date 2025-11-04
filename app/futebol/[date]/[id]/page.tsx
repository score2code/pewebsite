
import React from 'react';
import PickAnalysisClient from '@/app/components/pick';
import { promises as fs } from 'fs';
import path from 'path';

export async function generateStaticParams() {
    const dataDir = path.join(process.cwd(), 'public', 'data', 'soccer');
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
                                  date: `${year}-${month}-${dayFile.split('.')[0]}`,
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
        console.error("[Build Error] Não foi possível ler o diretório base 'public/data'.", error);
        return [];
    }

    return allPicks;
}

export default function PickAnalysisPage({ params }: { params: { id: string, date: string} }) {
    const pickId = params.id;
    const pickDate = params.date;

    return <PickAnalysisClient pickId={pickId} type="soccer" date={pickDate} />;
}
