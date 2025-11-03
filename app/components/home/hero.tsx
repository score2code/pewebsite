import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="text-center bg-light-100/50 dark:bg-dark-800/50 rounded-2xl p-8 sm:p-12 mb-10 shadow-custom dark:shadow-custom-dark backdrop-blur-sm border border-light-300 dark:border-dark-600 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-dark-900 dark:text-light-100 mb-4">
                Seu Ponto de Partida para <span className="text-purple-600 dark:text-purple-400">Apostas Inteligentes</span>
            </h2>
            <p className="text-xl text-dark-900/70 dark:text-light-100/70 mb-8 max-w-2xl mx-auto">
                Acesse análises, prognósticos e as melhores odds para lucrar com seus palpites esportivos.
            </p>
            <Link
                href="/futebol"
                className="inline-block px-8 py-4 bg-purple-600 dark:bg-purple-500 text-white font-bold text-lg rounded-xl
                shadow-custom dark:shadow-custom-dark hover:bg-purple-700 dark:hover:bg-purple-600
                transition-all duration-300 transform hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
                Ver Palpites de Futebol HOJE!
            </Link>
        </div>
    );
};

export default Hero;
