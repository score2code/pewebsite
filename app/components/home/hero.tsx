import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="text-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 sm:p-12 mb-10 shadow-xl border-t-4 border-green-500">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                Seu Ponto de Partida para <span className="text-green-500">Apostas Inteligentes</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Acesse análises, prognósticos e as melhores odds para lucrar com seus palpites esportivos.
            </p>
            <Link
                href="/futebol"
                className="inline-block px-8 py-3 bg-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-500 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
                Ver Palpites de Futebol HOJE!
            </Link>
        </div>
    );
};

export default Hero;
