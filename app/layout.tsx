import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SWRegister from './sw-register';
import Header from '@/app/components/header';
import Script from 'next/script';
import Analytics from '@/app/components/analytics';
import { ThemeProvider } from './components/theme-provider';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Palpites do dia | Previsões e Estatísticas',
  description: 'Análises e palpites diários para eventos esportivos, com foco em alta taxa de acerto e transparência.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPathSimulated = '/';

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-gradient-to-b from-light-50 to-light-200 dark:from-dark-900 dark:to-dark-950 text-dark-900 dark:text-light-100 transition-colors duration-300">
            <Analytics />

            <div className="min-h-screen flex flex-col">
              <Header currentPath={currentPathSimulated} />

              <main className="flex-grow pb-12 px-4 max-w-6xl mx-auto w-full">
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-[200px]">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-600"></div>
                  </div>
                }>
                  {children}
                </Suspense>
              </main>

              <footer className="mt-auto py-6 bg-light-100/80 dark:bg-dark-800/80 backdrop-blur-lg border-t border-light-300 dark:border-dark-600">
                <div className="max-w-6xl mx-auto px-4 text-center text-dark-900/70 dark:text-light-100/70">
                  <p className="text-sm">&copy; {new Date().getFullYear()} Palpites do dia. Todos os direitos reservados.</p>
                </div>
              </footer>
            </div>

            <SWRegister />

            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
              crossOrigin="anonymous"
              strategy="afterInteractive"
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
