
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
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen pt-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border-l-4 border-blue-500 dark:border-blue-500">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Análise das Melhores Casas de Apostas</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">Comparamos e avaliamos as plataformas para ajudar você a escolher a ideal.</p>
                </div>

                <div className="space-y-8">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
}
