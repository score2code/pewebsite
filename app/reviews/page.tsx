
import { Review } from '@/app/types';
import reviewsData from '@/app/data/reviews.json';
import ReviewCard from '@/app/components/review/card';

async function getReviews(): Promise<Review[]> {
    // In a real app, this could be a database call or an API fetch.
    return reviewsData;
}

export default async function ReviewsPage() {
    const reviews = await getReviews();

    return (
        <div className="min-h-screen pt-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-3">
                        Análise de Plataformas de Trading Esportivo
                    </h1>
                    <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                        Avaliações detalhadas das principais plataformas para análise e estatísticas esportivas.
                    </p>
                </div>

                <div className="space-y-6">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
}
