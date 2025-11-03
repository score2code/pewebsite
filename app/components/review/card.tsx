
"use client";

import Image from 'next/image';
import { Review } from '@/app/types';
import { Star, ThumbsUp, ThumbsDown, Award } from 'lucide-react';

interface ReviewCardProps {
    review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <Image src={review.logoUrl} alt={`${review.name} logo`} width={80} height={80} className="rounded-full" />
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{review.name}</h2>
                        <div className="flex items-center mt-1">
                            <span className="text-yellow-500 font-bold text-lg flex items-center">
                                <Star size={20} className="mr-1 fill-current" /> {review.rating.toFixed(1)}
                            </span>
                            <span className="text-gray-700 dark:text-gray-400 ml-2">/ 5.0</span>
                        </div>
                    </div>
                </div>

                <div className="my-4">
                    <div className="flex items-center text-green-600 dark:text-green-400 mb-2">
                        <ThumbsUp size={18} className="mr-2" />
                        <h3 className="font-semibold">Prós</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        {review.pros.map((pro, index) => <li key={index}>{pro}</li>)}
                    </ul>
                </div>

                <div className="my-4">
                    <div className="flex items-center text-red-600 dark:text-red-400 mb-2">
                        <ThumbsDown size={18} className="mr-2" />
                        <h3 className="font-semibold">Contras</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        {review.cons.map((con, index) => <li key={index}>{con}</li>)}
                    </ul>
                </div>

                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-3 mt-4 flex items-center">
                    <Award size={20} className="text-yellow-500 mr-3" />
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Bônus de Boas-Vindas</h4>
                        <p className="text-gray-700 dark:text-gray-300">{review.bonus}</p>
                    </div>
                </div>
            </div>

            <a href={review.affiliateLink} target="_blank" rel="noopener noreferrer" className="block bg-green-600 text-center py-3 font-bold text-white hover:bg-green-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Visitar {review.name}
            </a>
        </div>
    );
};

export default ReviewCard;
