import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiSolidCommentDots } from "react-icons/bi";
import { FaStar } from 'react-icons/fa';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const { t } = useTranslation('global');

    const renderStars = (rating) => {
        const stars = [];

        for (let i = 0; i < 5; i++) {
            const isGray = i >= rating;
            stars.push(<FaStar key={i} className={isGray ? 'text-gray-400 me-1' : 'me-1'} />);
        }
        return stars;
    };

    const [numCards, setNumCards] = useState(18);

    const handleShowMore = () => {
        setNumCards(numCards + 3);
    };

    return (
        <div className="container mx-auto md:px-16 px-4 mb-16">
            <div className="w-full text-center h-100 md:mt-24 mt-12">
                <h1 className="text-2xl md:text-[44px] font-bold md:my-8 my-4">{t('reviews.title')}</h1>
                <div className='bg-gray-50 w-full h-80 shadow-lg rounded-lg p-4 flex'>
                    <div className='lg:w-1/5 w-1/2 h-full flex flex-col justify-center items-center'>
                        <h1 className='md:text-8xl text-6xl'>4.9</h1>
                        <div className='flex space-x-4 items-center'>
                            <BiSolidCommentDots />
                            <span>440 {t('reviews.subtitle')}</span>
                        </div>
                    </div>
                    <div className="lg:w-3/5 w-1/2 h-full flex flex-col justify-center items-start me-12 md:me-0">
                        {[
                            { count: 378, rating: 5, width: 400 },
                            { count: 24, rating: 4, width: 100 },
                            { count: 21, rating: 3, width: 80 },
                            { count: 15, rating: 2, width: 40 },
                            { count: 2, rating: 1, width: 20 },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <span className="w-20">{item.count}</span>
                                {renderStars(item.rating)}
                                <div style={{ width: `${item.width}px` }} className="h-2 bg-gray-300 rounded-full hidden lg:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1 md:my-16 my-8">
                    {[...Array(numCards)].map((_, index) => (
                        <div key={index} className="md:w-1/3 w-full mb-4 md:mb-0">
                            <ReviewCard />
                        </div>
                    ))}

                </div>
                <div className="text-center my-8 mx-auto">
                    <button onClick={handleShowMore} className='border border-gray-400 px-4 py-2 font-semibold rounded-lg hover:bg-gray-200'>{t('mostUsed.button')}</button>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Reviews;
