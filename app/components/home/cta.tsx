'use client'

import React from 'react';
import { BarChart3 } from 'lucide-react';

const Cta = () => {
    return (
        <div className="bg-gray-900 p-6 rounded-xl border border-dashed border-gray-700 text-center mb-12">
            <p className="text-lg font-semibold text-gray-300">
                <BarChart3 className="inline w-5 h-5 text-green-500 mr-2" />
                Mais de 100 mil apostadores confiam em nossas análises diariamente. Junte-se à comunidade vencedora!
            </p>
        </div>
    );
};

export default Cta;
