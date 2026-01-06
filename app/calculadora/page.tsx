'use client';

import React, { useState } from 'react';
import { Calculator, TrendingUp, AlertCircle, Info } from 'lucide-react';

export default function DuplaChanceCalculator() {
  const [odd1X, setOdd1X] = useState('');
  const [oddX2, setOddX2] = useState('');
  const [odd12, setOdd12] = useState('');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const o1x = parseFloat(odd1X);
    const ox2 = parseFloat(oddX2);
    const o12 = parseFloat(odd12);

    if (!o1x || !ox2 || !o12 || o1x <= 1 || ox2 <= 1 || o12 <= 1) {
      alert('Por favor, insira odds válidas (maiores que 1.00)');
      return;
    }

    // Probabilidades implícitas
    const prob1X = (1 / o1x) * 100;
    const probX2 = (1 / ox2) * 100;
    const prob12 = (1 / o12) * 100;

    // Probabilidades individuais
    const empate = (prob1X + probX2 - prob12) / 2;
    const casa = prob1X - empate;
    const fora = probX2 - empate;

    // Encontrar a maior probabilidade individual
    const probabilidades = [
      { tipo: 'Casa', valor: casa },
      { tipo: 'Empate', valor: empate },
      { tipo: 'Fora', valor: fora }
    ].sort((a, b) => b.valor - a.valor);

    const maiorProb = probabilidades[0];
    const segundaMaiorProb = probabilidades[1];

    // Calcular diferença em pontos percentuais
    const difPontos = maiorProb.valor - segundaMaiorProb.valor;

    // Só recomenda se a diferença for >= 25 pontos percentuais
    const temCenarioDefinido = difPontos >= 25;

    // Coberturas reais
    const cobertura1X = casa + empate;
    const coberturaX2 = fora + empate;
    const cobertura12 = casa + fora;

    // Índices de segurança
    const indice1X = cobertura1X / prob1X;
    const indiceX2 = coberturaX2 / probX2;
    const indice12 = cobertura12 / prob12;

    // Determinar melhor opção de dupla chance baseada no cenário
    const opcoes = [
      { nome: '1X', indice: indice1X, odd: o1x, cobertura: cobertura1X },
      { nome: 'X2', indice: indiceX2, odd: ox2, cobertura: coberturaX2 },
      { nome: '12', indice: indice12, odd: o12, cobertura: cobertura12 }
    ];

    // Se cenário definido, escolhe a dupla chance que cobre o resultado mais provável
    let melhorOpcao;
    if (temCenarioDefinido) {
      if (maiorProb.tipo === 'Casa') {
        melhorOpcao = opcoes.find(o => o.nome === '1X') || opcoes[0];
      } else if (maiorProb.tipo === 'Fora') {
        melhorOpcao = opcoes.find(o => o.nome === 'X2') || opcoes[1];
      } else {
        // Empate é o mais provável - escolhe a opção com melhor cobertura que inclui empate
        const opcoesComEmpate = [opcoes[0], opcoes[1]]; // 1X e X2
        melhorOpcao = opcoesComEmpate.sort((a, b) => b.cobertura - a.cobertura)[0];
      }
    } else {
      // Cenário indefinido - escolhe maior cobertura
      melhorOpcao = [...opcoes].sort((a, b) => b.cobertura - a.cobertura)[0];
    }

    setResult({
      probabilidades: { casa, empate, fora },
      coberturas: { cobertura1X, coberturaX2, cobertura12 },
      indices: { indice1X, indiceX2, indice12 },
      melhorOpcao,
      opcoes,
      temCenarioDefinido,
      maiorProb,
      segundaMaiorProb,
      difPontos: difPontos.toFixed(1)
    });
  };

  const getStatusColor = (indice: number) => {
    if (indice >= 1.05) return 'text-green-700 dark:text-green-400 bg-green-50/50 dark:bg-green-900/10 border-green-100 dark:border-green-800';
    if (indice >= 0.98) return 'text-blue-700 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800';
    return 'text-red-700 dark:text-red-400 bg-red-50/50 dark:bg-red-900/10 border-red-100 dark:border-red-800';
  };

  const getStatusText = (indice: number) => {
    if (indice >= 1.05) return 'Excelente Valor';
    if (indice >= 0.98) return 'Equilibrado';
    return 'Desfavorável';
  };

  return (
    <div className="min-h-screen bg-light-50 dark:bg-dark-900 p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        {/* Card Principal */}
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-7 h-7 text-green-600 dark:text-green-400" />
            <h1 className="text-2xl md:text-3xl font-semibold text-dark-900 dark:text-light-100">
              Calculadora de Dupla Chance
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label htmlFor="odd1x" className="block text-sm font-medium text-dark-900/80 dark:text-light-100/80 mb-2">
                Odd 1X (Casa ou Empate)
              </label>
              <input
                id="odd1x"
                type="number"
                step="0.01"
                value={odd1X}
                onChange={(e) => setOdd1X(e.target.value)}
                placeholder="Ex: 1.55"
                className="w-full px-4 py-3 bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded-lg focus:border-green-500 dark:focus:border-green-400 focus:outline-none text-dark-900 dark:text-light-100 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="oddx2" className="block text-sm font-medium text-dark-900/80 dark:text-light-100/80 mb-2">
                Odd X2 (Empate ou Fora)
              </label>
              <input
                id="oddx2"
                type="number"
                step="0.01"
                value={oddX2}
                onChange={(e) => setOddX2(e.target.value)}
                placeholder="Ex: 1.60"
                className="w-full px-4 py-3 bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none text-dark-900 dark:text-light-100 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="odd12" className="block text-sm font-medium text-dark-900/80 dark:text-light-100/80 mb-2">
                Odd 12 (Casa ou Fora)
              </label>
              <input
                id="odd12"
                type="number"
                step="0.01"
                value={odd12}
                onChange={(e) => setOdd12(e.target.value)}
                placeholder="Ex: 2.40"
                className="w-full px-4 py-3 bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded-lg focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none text-dark-900 dark:text-light-100 transition-colors"
              />
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-md"
          >
            Calcular Análise
          </button>
        </div>

        {result && (
          <div className="space-y-6">
            {/* Probabilidades Individuais */}
            <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-dark-900 dark:text-light-100 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                Probabilidades dos Resultados
              </h2>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 p-4 rounded-lg text-center transition-all hover:shadow-md">
                  <div className="text-xs text-dark-900/70 dark:text-light-100/70 mb-1 uppercase tracking-wider">Casa Vence</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400">
                    {result.probabilidades.casa.toFixed(1)}%
                  </div>
                </div>
                <div className="bg-yellow-50/50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-800 p-4 rounded-lg text-center transition-all hover:shadow-md">
                  <div className="text-xs text-dark-900/70 dark:text-light-100/70 mb-1 uppercase tracking-wider">Empate</div>
                  <div className="text-2xl md:text-3xl font-bold text-yellow-700 dark:text-yellow-400">
                    {result.probabilidades.empate.toFixed(1)}%
                  </div>
                </div>
                <div className="bg-purple-50/50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800 p-4 rounded-lg text-center transition-all hover:shadow-md">
                  <div className="text-xs text-dark-900/70 dark:text-light-100/70 mb-1 uppercase tracking-wider">Fora Vence</div>
                  <div className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-purple-400">
                    {result.probabilidades.fora.toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>

            {/* Análise das Opções */}
            <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-dark-900 dark:text-light-100 mb-4">
                Análise de Valor das Opções
              </h2>
              <div className="space-y-3">
                {result.opcoes.map((opcao: any) => (
                  <div
                    key={opcao.nome}
                    className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                      opcao.nome === result.melhorOpcao.nome
                        ? 'border-green-500 dark:border-green-400 bg-green-50/30 dark:bg-green-900/20'
                        : 'border-light-300 dark:border-dark-600 bg-light-100/30 dark:bg-dark-800/30'
                    }`}
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl md:text-2xl font-bold text-dark-900 dark:text-light-100">
                          {opcao.nome}
                        </span>
                        <span className="text-lg text-dark-900/70 dark:text-light-100/70">
                          @{opcao.odd.toFixed(2)}
                        </span>
                        {opcao.nome === result.melhorOpcao.nome && (
                          <span className="bg-green-600 dark:bg-green-700 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                            Melhor Opção
                          </span>
                        )}
                      </div>
                      <div className={`px-3 py-1.5 rounded-lg text-sm font-semibold border ${getStatusColor(opcao.indice)}`}>
                        {getStatusText(opcao.indice)}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-dark-900/70 dark:text-light-100/70 uppercase tracking-wider mb-1">Cobertura Real</div>
                        <div className="text-xl font-bold text-dark-900 dark:text-light-100">
                          {opcao.cobertura.toFixed(1)}%
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-dark-900/70 dark:text-light-100/70 uppercase tracking-wider mb-1">Índice de Segurança</div>
                        <div className="text-xl font-bold text-dark-900 dark:text-light-100">
                          {opcao.indice.toFixed(3)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recomendação */}
            <div className={`rounded-xl p-6 border shadow-custom dark:shadow-custom-dark backdrop-blur-sm ${
              result.temCenarioDefinido
                ? 'bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800'
                : 'bg-orange-50/50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800'
            }`}>
              <div className="flex gap-3">
                <Info className={`w-5 h-5 shrink-0 mt-1 ${
                  result.temCenarioDefinido
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-orange-600 dark:text-orange-400'
                }`} />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100 mb-2">
                    {result.temCenarioDefinido ? '✓ Cenário Definido - Recomendação Forte' : '⚠ Cenário Indefinido - Evitar'}
                  </h3>

                  {result.temCenarioDefinido ? (
                    <>
                      <p className="text-dark-900/90 dark:text-light-100/90 leading-relaxed mb-3">
                        <strong className="text-green-700 dark:text-green-400">{result.maiorProb.tipo}</strong> é claramente o resultado mais provável com <strong>{result.maiorProb.valor.toFixed(1)}%</strong>,
                        tendo <strong>{result.difPontos} pontos percentuais</strong> de vantagem sobre {result.segundaMaiorProb.tipo} ({result.segundaMaiorProb.valor.toFixed(1)}%).
                      </p>
                      <div className="bg-white/50 dark:bg-dark-900/30 rounded-lg p-4 mb-3 border border-green-200/50 dark:border-green-800/50">
                        <p className="text-sm font-semibold text-dark-900 dark:text-light-100 mb-2">📊 Aposta Recomendada:</p>
                        <div className="flex items-center gap-3 bg-green-100/50 dark:bg-green-900/20 rounded-lg p-3 border border-green-300 dark:border-green-700">
                          <span className="text-2xl font-bold text-green-700 dark:text-green-400">{result.melhorOpcao.nome}</span>
                          <span className="text-xl text-dark-900/70 dark:text-light-100/70">@{result.melhorOpcao.odd.toFixed(2)}</span>
                          <span className="ml-auto text-sm text-green-800 dark:text-green-300">Cobertura: {result.melhorOpcao.cobertura.toFixed(1)}%</span>
                        </div>
                      </div>
                      <div className="bg-green-100/50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                        <p className="text-sm text-green-800/90 dark:text-green-300/90 italic leading-relaxed">
                          <strong>Análise:</strong> Diferença de {result.difPontos} pontos percentuais atende o critério mínimo de 25 pontos.
                          A opção {result.melhorOpcao.nome} cobre o cenário mais provável com {result.melhorOpcao.cobertura.toFixed(1)}% de probabilidade.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-dark-900/90 dark:text-light-100/90 leading-relaxed mb-3">
                        Os resultados estão muito equilibrados. <strong className="text-orange-700 dark:text-orange-400">{result.maiorProb.tipo}</strong> ({result.maiorProb.valor.toFixed(1)}%)
                        tem apenas <strong>{result.difPontos} pontos percentuais</strong> de vantagem sobre <strong>{result.segundaMaiorProb.tipo}</strong> ({result.segundaMaiorProb.valor.toFixed(1)}%).
                      </p>
                      <div className="bg-orange-100/50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3 mb-3">
                        <p className="text-sm text-orange-800/90 dark:text-orange-300/90 leading-relaxed">
                          <strong>⚠ Risco elevado:</strong> Diferença de apenas {result.difPontos} pontos (abaixo do mínimo de 25 pontos).
                          O jogo é muito imprevisível, sem cenário claro dominante.
                        </p>
                      </div>
                      <div className="bg-red-50/50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-3">
                        <p className="text-sm text-red-800/90 dark:text-red-300/90 font-semibold">
                          🚫 Recomendação: EVITAR este jogo. Aguarde oportunidades com cenários mais definidos (diferença ≥ 25 pontos percentuais).
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
