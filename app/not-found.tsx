import React from 'react';
// Ícones para o design 404
import { AlertTriangle, Home } from 'lucide-react';
// IMPORTANTE: Em um projeto Next.js real, envolva o <a> com o <Link> do Next.js.
// import Link from 'next/link';

/**
 * Componente da Página Não Encontrada (404).
 * Deve ser usado no ficheiro 'not-found.tsx' na raiz do seu App Router.
 */
const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] text-center p-6">

            <div className="bg-gray-800 p-10 rounded-xl shadow-2xl border-t-4 border-red-600 max-w-lg w-full">

                <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-500" />

                <h1 className="text-7xl font-extrabold text-white mb-4">
                    404
                </h1>

                <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                    Página Não Encontrada
                </h2>

                <p className="text-gray-400 mb-8">
                    Desculpe, a rota que tentou aceder não existe ou foi movida.
                    Verifique o URL ou regresse à página inicial.
                </p>

                {/* Botão de Navegação */}
                {/* Em Next.js: <Link href="/" passHref>...</Link> */}
                <a
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-[1.02]"
                >
                    <Home className="w-5 h-5 mr-2" />
                    Voltar para o Início
                </a>
            </div>

        </div>
    );
};

export default NotFoundPage;
