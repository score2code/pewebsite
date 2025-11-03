import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SWRegister from './sw-register';
import Header from '@/app/components/header';
import Script from 'next/script';
import Analytics from '@/app/components/analytics';

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
    const currentPathSimulated = '/';

  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-900`}>
        <Analytics />

        <Header currentPath={currentPathSimulated} />

        <main className="pb-12 px-4 max-w-6xl mx-auto">
            {children}
        </main>

        <SWRegister />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
