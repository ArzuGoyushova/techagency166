import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar } from "react-icons/fa";
import { GoClockFill, GoDotFill } from "react-icons/go";
import { examTypes } from '../../constants/constant';
import { useNavigate } from 'react-router-dom';

const Card = ({ exam, tag }) => {
    const { t } = useTranslation('global');
    const selectedType = examTypes.find(type => type.id === exam);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/exam-details');
    };

    return (
        <div className="bg-gray-50 md:w-[373px] sm:w-full rounded-lg p-6 text-start">
            <h1 className="text-xl font-bold mb-8">{t('cardDetails.title')}</h1>
            <div className='flex items-center justify-between mb-8'>
                <div className='flex items-center'>
                    <GoClockFill size={18} />
                    <span className='ms-2'>{t('cardDetails.duration')}</span>
                </div>
                <div className='flex items-center'>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <FaStar key={index} className='me-1' />
                    ))}
                    <FaStar color="lightGray" className='me-1' />
                    <GoDotFill size={14} />
                    <span className='ms-2'>{t('cardDetails.reviews')}</span>
                </div>
            </div>
            <div>
                <p className='mb-4'>{t('cardDetails.questions')}</p>
                <ul style={{ listStyleType: 'disc', }} className='ms-6 my-4'>
                    <li>{t('cardDetails.desc1')}</li>
                    <li>{t('cardDetails.desc2')}</li>
                </ul>

            </div>
            <hr />
            <div className='my-6 space-x-4'>
            <span className='px-4 py-2 bg-gray-200 rounded-lg font-bold'>{t(`${selectedType.title}`)}</span>
            <span className='px-4 py-2 bg-gray-200 rounded-lg font-bold'>{tag}</span>
            </div>  
            <button className='border border-black w-full py-2 rounded-lg font-semibold hover:bg-gray-200' onClick={handleButtonClick}>
            {t('cardDetails.button')}
                </button>  
        </div>
    );
};

export default Card;
