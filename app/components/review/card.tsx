
"use client";

import Image from 'next/image';
import { Review } from '@/app/types';
import { Star, ThumbsUp, ThumbsDown, Award } from 'lucide-react';

interface ReviewCardProps {
    review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    return (
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl overflow-hidden
            border border-light-300 dark:border-dark-600
            shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
            <div className="p-6">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <div className="p-2 bg-light-200/50 dark:bg-dark-700/50 rounded-xl">
                            <Image src={review.logoUrl} alt={`${review.name} logo`} width={80} height={80} className="rounded-lg" />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">{review.name}</h2>
                        <div className="flex items-center mt-1">
                            <span className="text-purple-600 dark:text-purple-400 font-bold text-lg flex items-center">
                                <Star size={20} className="mr-1 fill-current" /> {review.rating.toFixed(1)}
                            </span>
                            <span className="text-dark-900/70 dark:text-light-100/70 ml-2">/ 5.0</span>
                        </div>
                    </div>
                </div>

                <div className="my-4">
                    <div className="flex items-center text-purple-600 dark:text-purple-400 mb-2">
                        <ThumbsUp size={18} className="mr-2" />
                        <h3 className="font-semibold">Destaques</h3>
                    </div>
                    <ul className="list-disc list-inside text-dark-900/70 dark:text-light-100/70 space-y-1">
                        {review.pros.map((pro, index) => <li key={index}>{pro}</li>)}
                    </ul>
                </div>

                <div className="my-4">
                    <div className="flex items-center text-purple-600 dark:text-purple-400 mb-2">
                        <ThumbsDown size={18} className="mr-2" />
                        <h3 className="font-semibold">Limitações</h3>
                    </div>
                    <ul className="list-disc list-inside text-dark-900/70 dark:text-light-100/70 space-y-1">
                        {review.cons.map((con, index) => <li key={index}>{con}</li>)}
                    </ul>
                </div>

                <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-4 mt-4 flex items-center">
                    <Award size={20} className="text-purple-600 dark:text-purple-400 mr-3" />
                    <div>
                        <h4 className="font-bold text-dark-900 dark:text-light-100">Recursos Premium</h4>
                        <p className="text-dark-900/70 dark:text-light-100/70">{review.bonus}</p>
                    </div>
                </div>
            </div>

            <a href={review.affiliateLink} target="_blank" rel="noopener noreferrer"
                className="block bg-purple-600 dark:bg-purple-500 text-center py-3 font-bold text-white
                    hover:bg-purple-700 dark:hover:bg-purple-600
                    transition-colors duration-300
                    focus:outline-none focus:ring-2 focus:ring-purple-500">
                Acessar Plataforma
            </a>
        </div>
    );
};

export default ReviewCard;
