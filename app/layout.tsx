import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SWRegister from './sw-register';

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
  return (
    <html lang="pt-BR">
      {/* Aplica a fonte Inter em todo o body */}
      <body className={`${inter.className} bg-gray-900`}>
        {children}
        <SWRegister />
      </body>
    </html>
  );
}