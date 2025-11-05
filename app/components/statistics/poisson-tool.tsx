"use client";
import { useMemo, useState } from 'react';

function poissonDistribution(lambda: number, maxGoals: number): number[] {
  const probs: number[] = new Array(maxGoals + 1).fill(0);
  const base = Math.exp(-lambda);
  probs[0] = base;
  for (let k = 1; k <= maxGoals; k++) {
    probs[k] = probs[k - 1] * (lambda / k);
  }
  return probs;
}

export default function PoissonTool() {
  const [lambdaHome, setLambdaHome] = useState<number>(1.4);
  const [lambdaAway, setLambdaAway] = useState<number>(1.1);
  const [maxGoals, setMaxGoals] = useState<number>(6);
  const [threshold, setThreshold] = useState<number>(2.5);

  const homeDist = useMemo(() => poissonDistribution(lambdaHome, maxGoals), [lambdaHome, maxGoals]);
  const awayDist = useMemo(() => poissonDistribution(lambdaAway, maxGoals), [lambdaAway, maxGoals]);

  const matrix = useMemo(() => {
    const m: number[][] = [];
    for (let i = 0; i <= maxGoals; i++) {
      const row: number[] = [];
      for (let j = 0; j <= maxGoals; j++) {
        row.push(homeDist[i] * awayDist[j]);
      }
      m.push(row);
    }
    return m;
  }, [homeDist, awayDist, maxGoals]);

  const summary = useMemo(() => {
    let pHome = 0, pDraw = 0, pAway = 0, pBTTS = 0, pOver = 0, pUnder = 0;
    for (let i = 0; i <= maxGoals; i++) {
      for (let j = 0; j <= maxGoals; j++) {
        const p = matrix[i][j];
        if (i > j) pHome += p;
        else if (i < j) pAway += p;
        else pDraw += p;
        if (i > 0 && j > 0) pBTTS += p;
        if (i + j > threshold) pOver += p;
        else pUnder += p;
      }
    }
    // ajustar pequenas diferenças por truncamento de maxGoals
    const total = pHome + pDraw + pAway;
    const scale = total > 0 ? 1 / total : 1;
    pHome *= scale; pDraw *= scale; pAway *= scale;
    return { pHome, pDraw, pAway, pBTTS, pOver, pUnder };
  }, [matrix, maxGoals, threshold]);

  return (
    <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600">
      <h2 className="text-2xl font-semibold mb-4">Ferramenta Poisson de Probabilidades</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1">Média de gols (Casa)</label>
              <input type="number" step="0.1" min={0} value={lambdaHome}
                     onChange={e => setLambdaHome(parseFloat(e.target.value))}
                     className="w-full rounded-md border p-2 bg-white dark:bg-dark-700" />
            </div>
            <div>
              <label className="block text-sm mb-1">Média de gols (Visitante)</label>
              <input type="number" step="0.1" min={0} value={lambdaAway}
                     onChange={e => setLambdaAway(parseFloat(e.target.value))}
                     className="w-full rounded-md border p-2 bg-white dark:bg-dark-700" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3">
            <div>
              <label className="block text-sm mb-1">Máx. placar avaliado</label>
              <input type="number" step="1" min={4} value={maxGoals}
                     onChange={e => setMaxGoals(parseInt(e.target.value))}
                     className="w-full rounded-md border p-2 bg-white dark:bg-dark-700" />
            </div>
            <div>
              <label className="block text-sm mb-1">Linha Over/Under</label>
              <input type="number" step="0.5" min={0} value={threshold}
                     onChange={e => setThreshold(parseFloat(e.target.value))}
                     className="w-full rounded-md border p-2 bg-white dark:bg-dark-700" />
            </div>
          </div>
        </div>

        <div className="rounded-md p-3 bg-light-200 dark:bg-dark-700">
          <div className="flex justify-between"><span>Casa</span><strong>{(summary.pHome * 100).toFixed(1)}%</strong></div>
          <div className="flex justify-between mt-2"><span>Empate</span><strong>{(summary.pDraw * 100).toFixed(1)}%</strong></div>
          <div className="flex justify-between mt-2"><span>Visitante</span><strong>{(summary.pAway * 100).toFixed(1)}%</strong></div>
          <div className="flex justify-between mt-2"><span>BTTS (Ambos marcam)</span><strong>{(summary.pBTTS * 100).toFixed(1)}%</strong></div>
          <div className="flex justify-between mt-2"><span>Over {threshold}</span><strong>{(summary.pOver * 100).toFixed(1)}%</strong></div>
          <div className="flex justify-between mt-2"><span>Under {threshold}</span><strong>{(summary.pUnder * 100).toFixed(1)}%</strong></div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Distribuição de placares</h3>
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-2">Placar</th>
                <th className="text-left p-2">Probabilidade</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row, i) => (
                row.map((p, j) => (
                  <tr key={`${i}-${j}`} className="border-t border-light-300 dark:border-dark-600">
                    <td className="p-2">{i} - {j}</td>
                    <td className="p-2">{(p * 100).toFixed(2)}%</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 text-sm text-dark-900/70 dark:text-light-100/70">
        <p>
          A distribuição de Poisson modela o número de gols esperados em um intervalo.
          Ajuste as médias (λ) para refletir força ofensiva/defensiva, ritmo e contexto
          de jogo, e compare com odds de mercado para encontrar valor.
        </p>
      </div>
    </div>
  );
}