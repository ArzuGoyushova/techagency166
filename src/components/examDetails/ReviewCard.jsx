import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar } from "react-icons/fa";

const ReviewCard = () => {
    const { t } = useTranslation('global');

    return (
        <div className="bg-gray-50 lg:w-[373px] lg:h-[188px] md:w-48 w-full rounded-lg p-6 text-start">
            <h1 className="text-xl font-bold mb-4">İlahə Nəzərova</h1>
            <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center'>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <FaStar key={index} className='me-1' />
                    ))}
                    <FaStar color="lightGray" className='me-1' />
                    <span className='ms-2 md:text-xs lg:text-m'>{t('reviewCard.date')}</span>
                </div>
            </div>
            <div>
                <p className='mb-4 text-xs'>{t('reviewCard.comment')}</p>
            </div> 
        </div>
    );
};

export default ReviewCard;
