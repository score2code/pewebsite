import Link from 'next/link';

interface RelatedGuide {
  title: string;
  slug: string;
  description: string;
}

export default function RelatedGuides({ guides }: { guides: RelatedGuide[] }) {
  if (!guides.length) return null;

  return (
    <section className="mt-12 pt-8 border-t border-light-300 dark:border-dark-600">
      <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-6">
        Guias Relacionados
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guias/${guide.slug}`}
            className="group focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-xl"
          >
            <div className="h-full bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6
              border border-light-300 dark:border-dark-600
              shadow-custom dark:shadow-custom-dark backdrop-blur-sm
              group-hover:border-purple-500 dark:group-hover:border-purple-400
              transition-all duration-300">
              <h3 className="text-xl font-bold text-dark-900 dark:text-light-100 mb-2">
                {guide.title}
              </h3>
              <p className="text-dark-900/70 dark:text-light-100/70">
                {guide.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
