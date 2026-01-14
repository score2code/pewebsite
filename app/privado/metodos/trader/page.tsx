import type { Metadata } from 'next';
import React from 'react';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import Link from 'next/link';

import others from './methods/others.json'
import over from './methods/over.json'
import anti from './patterns/anti.json'

export const metadata: Metadata = {
  title: 'Métodos Trader - Operações em Exchange',
  description: 'Estratégias de Trading: LTD, Correct Score e Scalping',
  robots: { index: false, follow: false },
};

export default function MetodoTraderPage() {
  const metodos = others;
  const overMetodos = over;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />
        {/* Header */}
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Métodos Trader: Exchange</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Foco em leitura de mercado, variação de odds e tempo de exposição em bolsa esportiva.</p>
          <div className="mt-3">
            <Link href="/privado/planejamento" className="text-sm inline-flex items-center gap-1 text-purple-700 dark:text-purple-400 font-medium">Ver Planejamento →</Link>
          </div>
        </header>

        {/* Anti-Padrões */}
        <section className="mb-8 bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <span className="text-2xl">🚫</span>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 dark:text-white uppercase text-sm tracking-widest">Anti-Padrões</h2>
              <p className="text-xs text-gray-600 dark:text-gray-400">Erros comprovados em suas anotações reais</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {anti.map((item) => item.title && (
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold text-lg flex-shrink-0">❌</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">{item.description}</p>
                    <p className="text-xs text-red-600 dark:text-red-400 mt-2 italic">{item.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
              <strong>Lembrete:</strong> Estes erros custaram entre 22% e 100% da stake. Evitá-los aumenta sua taxa de acerto em 30%+
            </p>
          </div>
        </section>

        {/* Grid Principal - Métodos Core */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metodos.map((metodo, index) => (
            <section
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col shadow-lg"
            >
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Estratégia {index + 1}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{metodo.titulo}</h3>
              </div>

              <div className="space-y-4 flex-grow text-sm text-gray-700 dark:text-gray-300">
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-900/50">
                  <span className="block font-semibold text-gray-900 dark:text-white uppercase text-[10px] tracking-widest mb-1">Seleção</span>
                  <p className="text-xs">{metodo.selecao}</p>
                </div>

                <div>
                  <span className="block font-semibold text-gray-900 dark:text-white uppercase text-[10px] tracking-widest">Entrada e Live</span>
                  <p className="font-medium text-gray-900 dark:text-white text-xs">{metodo.entrada}</p>
                  <p className="italic text-xs mt-1 text-gray-600 dark:text-gray-400">{metodo.validacao}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-2 rounded bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                    <span className="block font-bold text-emerald-700 dark:text-emerald-400 uppercase text-[9px] tracking-widest">Alvo (Lucro)</span>
                    <p className="text-[11px] leading-tight mt-1">{metodo.lucro}</p>
                  </div>
                  <div className="p-2 rounded bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <span className="block font-bold text-red-700 dark:text-red-400 uppercase text-[9px] tracking-widest">Stop (Saída)</span>
                    <p className="text-[11px] leading-tight mt-1">{metodo.stopLoss}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                  <strong>Observação:</strong> {metodo.obs}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Métodos Over */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {overMetodos.map((metodo, index) => (
            <section
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col shadow-lg"
            >
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">Alta Variância</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{metodo.titulo}</h3>
              </div>

              <div className="space-y-4 flex-grow text-sm text-gray-700 dark:text-gray-300">
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-900/50">
                  <span className="block font-semibold text-gray-900 dark:text-white uppercase text-[10px] tracking-widest mb-1">Seleção</span>
                  <p className="text-xs">{metodo.selecao}</p>
                </div>

                <div>
                  <span className="block font-semibold text-gray-900 dark:text-white uppercase text-[10px] tracking-widest">Entrada e Live</span>
                  <p className="font-medium text-gray-900 dark:text-white text-xs">{metodo.entrada}</p>
                  <p className="italic text-xs mt-1 text-gray-600 dark:text-gray-400">{metodo.validacao}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-2 rounded bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                    <span className="block font-bold text-emerald-700 dark:text-emerald-400 uppercase text-[9px] tracking-widest">Alvo (Lucro)</span>
                    <p className="text-[11px] leading-tight mt-1">{metodo.lucro}</p>
                  </div>
                  <div className="p-2 rounded bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <span className="block font-bold text-red-700 dark:text-red-400 uppercase text-[9px] tracking-widest">Stop (Saída)</span>
                    <p className="text-[11px] leading-tight mt-1">{metodo.stopLoss}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                  <strong>Observação:</strong> {metodo.obs}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Footer Info Box */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-3 uppercase text-sm tracking-widest">Checklist de Operação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-600 dark:text-purple-400">1. Liquidez</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Verificar se o mercado tem volume acima de R$ 50k para facilitar entradas e saídas rápidas.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-600 dark:text-purple-400">2. Exposição</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Respeitar o limite de 20% da banca em responsabilidade por jogo. Overs: máx 5% da banca.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-600 dark:text-purple-400">3. Critério AP</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Não operar por "nome" do time. Se o gráfico de pressão estiver baixo, não entre.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
