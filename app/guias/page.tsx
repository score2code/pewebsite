
import Link from 'next/link';

const guides = [
    {
        title: 'Como Gerenciar sua Banca de Apostas',
        slug: 'como-gerenciar-sua-banca',
        description: 'Aprenda a proteger seu capital e a garantir a sustentabilidade nas suas apostas a longo prazo.'
    },
    {
        title: 'O que é Handicap Asiático?',
        slug: 'o-que-e-handicap-asiatico',
        description: 'Desvende um dos mercados mais lucrativos e entenda como ele elimina o empate da equação.'
    },
    {
        title: 'Guia de Mercados de Gols (Over/Under)',
        slug: 'guia-de-mercados-de-gols',
        description: 'Aprenda a apostar no total de gols de uma partida, uma alternativa popular ao mercado de vencedor.'
    }
];

export default function GuidesPage() {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen pt-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 border-l-4 border-yellow-500">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Guias e Tutoriais de Apostas</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">Aprenda com nossos especialistas e aprimore suas estratégias de apostas.</p>
                </div>

                <div className="space-y-6">
                    {guides.map((guide) => (
                        <Link key={guide.slug} href={`/guias/${guide.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 rounded-xl">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
                                <h2 className="text-2xl font-bold text-yellow-500">{guide.title}</h2>
                                <p className="text-gray-700 dark:text-gray-400 mt-2">{guide.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
