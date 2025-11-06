import Link from 'next/link';
import { games } from './games';
import Breadcrumb from '@/app/components/ui/breadcrumb';

export default function EntertainmentPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb className="mb-4" />
      <header className="text-center">
        <h1 className="text-3xl font-bold text-dark-900 dark:text-light-100">Entretenimento</h1>
        <p className="text-dark-900/70 dark:text-light-100/70">Área de jogos</p>
      </header>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => (
            <Link key={game.slug} href={`/entretenimento/${game.slug}/`} className="block">
              <div className="h-full p-4 rounded-xl border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 shadow-custom dark:shadow-custom-dark hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold text-dark-900 dark:text-light-100">{game.title}</h2>
                <p className="text-sm text-dark-900/70 dark:text-light-100/70 mt-1">{game.description}</p>
                <div className="mt-3 inline-block px-3 py-1 bg-purple-600 text-white rounded-md text-sm">Jogar</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
