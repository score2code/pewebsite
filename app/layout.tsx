import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SWRegister from './sw-register';
// IMPORTADO: O novo componente de cabeçalho
import Header from '@/app/components/header';
// IMPORTADO: Hook para obter o caminho da rota atual (requer o uso do 'use client' ou de um wrapper)
// Importações de Next.js como usePathname são tipicamente adicionadas, mas vou manter a simulação simples.
// Para fins de demonstração neste contexto:

// Configura a fonte Inter, otimizada pelo Next.js
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Palpite Esportivo | Previsões e Estatísticas',
  description: 'Análises e palpites diários para apostas esportivas, com foco em alta taxa de acerto e transparência.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    // Nota: Em um projeto Next.js real, usaria usePathname() aqui para passar a rota atual.
    const currentPathSimulated = '/'; // A rota real seria obtida dinamicamente.

  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-900`}>

        {/* 1. O CABEÇALHO/MENU É ADICIONADO AQUI */}
        <Header currentPath={currentPathSimulated} />

        {/* 2. O CONTEÚDO DA ROTA ATUAL VEM A SEGUIR */}
        <main className="pb-12 px-4 max-w-6xl mx-auto">
            {children}
        </main>

        {/* O rodapé do site seria adicionado aqui */}

        <SWRegister />
      </body>
    </html>
  );
}
