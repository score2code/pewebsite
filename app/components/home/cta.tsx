import React from 'react';
import { BarChart3 } from 'lucide-react';

const Cta = () => {
    return (
        <div className="bg-light-100/50 dark:bg-dark-800/50 p-8 rounded-xl
            border-2 border-dashed border-purple-500/30 dark:border-purple-400/30
            text-center mb-12 backdrop-blur-sm
            hover:border-purple-500 dark:hover:border-purple-400
            transition-all duration-300">
            <p className="text-lg font-semibold text-dark-900 dark:text-light-100 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                Análises precisas e confiáveis para você.
                <span className="ml-2 text-purple-600 dark:text-purple-400">Confira nosso conteúdo!</span>
            </p>
        </div>
    );
};

export default Cta;
