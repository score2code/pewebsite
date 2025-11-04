import React from 'react';
import { AlertTriangle, Home, Compass } from 'lucide-react';
import Link from 'next/link';

/**
 * Página 404 com estilo alinhado ao tema do site.
 */
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6">
      <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm max-w-lg w-full p-8">
        <div className="flex flex-col items-center">
          <AlertTriangle className="w-12 h-12 mb-4 text-purple-600 dark:text-purple-400" />
          <h1 className="text-3xl font-bold text-dark-900 dark:text-light-100 mb-2">Página não encontrada</h1>
          <p className="text-dark-900/70 dark:text-light-100/70 mb-6">
            O conteúdo que você procura não existe ou foi movido.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none"
            >
              <Home className="w-5 h-5 mr-2" />
              Voltar para o Início
            </Link>

            <Link
              href="/futebol/"
              className="inline-flex items-center justify-center px-5 py-3 bg-light-200/50 dark:bg-dark-700/50 text-purple-600 dark:text-purple-400 border border-light-300 dark:border-dark-600 font-semibold rounded-lg transition-colors duration-200 focus:outline-none"
            >
              <Compass className="w-5 h-5 mr-2" />
              Ver Palpites de Futebol
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
