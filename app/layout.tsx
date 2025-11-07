import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SWRegister from './sw-register';
import Header from '@/app/components/header';
import Script from 'next/script';
import Analytics from '@/app/components/analytics';
import { ThemeProvider } from './components/theme-provider';
import { Suspense } from 'react';
import NotificationSystem from '@/app/components/notifications/system';

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
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="theme">
          <div className="min-h-screen bg-gradient-to-b from-light-50 to-light-200 dark:from-dark-900 dark:to-dark-950 text-dark-900 dark:text-light-100 transition-colors duration-300">
            <Analytics />

            {GA_ID && (
              <>
                <Script
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                  strategy="afterInteractive"
                />
                <Script id="ga4-init" strategy="afterInteractive">
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);} 
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', { anonymize_ip: true });
                  `}
                </Script>
              </>
            )}

            <div className="min-h-screen flex flex-col">
              {/* Beta Banner */}
              <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 text-white">
                <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2">
                  <svg
                    className="h-4 w-4 text-white/90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-11.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM9 9.5a1 1 0 011-1h.25a1 1 0 011 1v5a1 1 0 01-1 1H10a1 1 0 01-1-1v-5z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm md:text-base font-medium text-center">
                    Projeto em fase beta — recursos e dados em constante evolução.
                  </p>
                </div>
              </div>
              <Header currentPath={currentPathSimulated} />

              <NotificationSystem />
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
