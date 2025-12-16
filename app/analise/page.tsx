import Link from 'next/link';
import games from '../data/analise/games.json';

function formatarData(data: string) {
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
}

// Função auxiliar para transformar strings em slugs
function slugify(text: string) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/[^\w-]+/g, '');
}

export default function AnalisePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Jogos para Análise</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game) => (
          <Link key={`${game.homeTeam}-${game.awayTeam}-${game.date}`} href={`/analise/${game.date}/${slugify(game.homeTeam)}-x-${slugify(game.awayTeam)}`} className="block bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{game.homeTeam} <span className="text-gray-500 dark:text-gray-400">vs</span> {game.awayTeam}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{game.league}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{formatarData(game.date)} - {game.time}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
