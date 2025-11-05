import { notFound } from 'next/navigation';
import { games } from '../games';
import dynamic from 'next/dynamic';
import EngagementTracker from '../components/engagement-tracker';

const TicTacToe = dynamic(() => import('../components/tic-tac-toe'), { ssr: false });
const MemoryMatch = dynamic(() => import('../components/memory-match'), { ssr: false });
const WhackAMole = dynamic(() => import('../components/whack-a-mole'), { ssr: false });

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = games.find((g) => g.slug === params.slug);
  if (!game) {
    notFound();
    return null;
  }

  function renderGame(slug: string) {
    switch (slug) {
      case 'tic-tac-toe':
        return <TicTacToe />;
      case 'memory-match':
        return <MemoryMatch />;
      case 'whack-a-mole':
        return <WhackAMole />;
      default:
        return null;
    }
  }

  return (
    <div className="space-y-6">
      <EngagementTracker slug={params.slug} />
      <header className="text-center">
        <h1 className="text-2xl font-bold text-dark-900 dark:text-light-100">{game.title}</h1>
        <p className="text-dark-900/70 dark:text-light-100/70">{game.description}</p>
      </header>
      <section className="max-w-2xl mx-auto w-full p-4 rounded-xl border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 shadow-custom dark:shadow-custom-dark">
        {renderGame(game.slug)}
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}
