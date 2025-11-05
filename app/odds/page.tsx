
import OddsCalculator from '@/app/components/odds/calculator';

// ...existing code...

export default async function OddsPage() {

    return (
        <div className="min-h-screen pt-8 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-3">
                        Ferramentas de Odds
                    </h1>
                    <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                        Explore e use ferramentas para entender e calcular odds. Não exibimos comparativos de casas aqui.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600">
                        <h2 className="text-2xl font-semibold mb-2">Como interpretar odds</h2>
                        <p className="text-dark-900/70 dark:text-light-100/70">
                            Odds representam o retorno potencial sobre uma aposta e embutem uma
                            probabilidade implícita. Compare sua estimativa com a do mercado para
                            identificar valor. Utilize a calculadora abaixo para converter formatos,
                            calcular retorno e entender a probabilidade implícita.
                        </p>
                    </div>

                    <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600">
                        <h2 className="text-2xl font-semibold mb-4">Calculadora de Odds</h2>
                        <OddsCalculator />
                    </div>
                </div>
            </div>
        </div>
    );
}
