import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar, FaArrowRight } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { PiNotepadFill } from "react-icons/pi";
import { IoCalendarClear } from "react-icons/io5";

const Information = () => {
    const { t } = useTranslation('global');

    return (
        <div className="container mx-auto md:px-16 px-4 my-20 md:flex md:space-x-4">
            <div className="bg-gray-50 lg:w-3/5 md:w-1/2 sm:w-full rounded-lg p-6 text-start shadow-lg mb-8 md:mb-0">
                <h1 className="text-xl font-bold mb-8">{t('cardDetails.information')}</h1>
                <div className='lg:flex items-center lg:space-x-16 space-y-4 mb-8 '>
                    <div className='flex items-center'>
                        <GoClockFill size={20} />
                        <span className='ms-2'>{t('cardDetails.duration')}</span>
                    </div>
                    <div className='flex items-center'>
                        <PiNotepadFill size={20} />
                        <span className='ms-2'>{t('cardDetails.questionCount')}</span>
                    </div>
                    <div className='flex items-center'>
                        <IoCalendarClear size={20} />
                        <span className='ms-2'>{t('cardDetails.date')}</span>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold mb-8">{t('cardDetails.questions')}</h1>
                    <ul style={{ listStyleType: 'disc', }} className='ms-6 mt-4 mb-16 space-y-4'>
                        <li>{t('cardDetails.desc1')}</li>
                        <li>{t('cardDetails.desc2')}</li>
                    </ul>

                </div>
            </div>
            <div className="bg-gray-50 lg:w-2/5 md:w-1/2 sm:w-full rounded-lg p-6 text-start shadow-lg space-y-6">
                 <h1 className="text-xl font-bold mb-8">{t('examResults.title')}</h1>
                <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center space-x-4 relative'>
                    <span className='bg-yellow-500 rounded-full p-2 relative'>
                        <FaStar size={16} color='white' />
                        <div className='absolute left-1.5 -top-1 w-5 h-3 bg-blue-900 clip-bottom'></div>
                    </span>
                    <span className='font-semibold'>İlahə Nəzərova</span>
                </div>
                <div className='space-x-4 flex items-center lg:text-m md:text-sm'>
                <span>{t('examResults.winner1')}</span>
                <a href=""> <FaArrowRight/></a>
                </div>
                </div>
                <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center space-x-4 relative'>
                    <span className='bg-gray-300 rounded-full p-2 relative'>
                        <FaStar size={16} color='white' />
                        <div className='absolute left-1.5 -top-1 w-5 h-3 bg-blue-900 clip-bottom'></div>
                    </span>
                    <span className='font-semibold'>İlahə Nəzərova</span>
                </div>
                <div className='space-x-4 flex items-center lg:text-m md:text-sm'>
                <span>{t('examResults.winner2')}</span>
                <a href=""> <FaArrowRight/></a>
                </div>
                </div>
                <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center space-x-4 relative'>
                    <span className='bg-red-500 rounded-full p-2 relative'>
                        <FaStar size={16} color='white' />
                        <div className='absolute left-1.5 -top-1 w-5 h-3 bg-blue-900 clip-bottom'></div>
                    </span>
                    <span className='font-semibold'>İlahə Nəzərova</span>
                </div>
                <div className='space-x-4 flex items-center lg:text-m md:text-sm'>
                <span>{t('examResults.winner4')}</span>
                <a href=""> <FaArrowRight/></a>
                </div>
                </div>
                <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center space-x-4 relative'>
                    <span className='bg-gray-300 rounded-full py-1 relative'>
                        <span className='px-3 font-semibold'>4</span>
                    </span>
                    <span className='font-semibold'>İlahə Nəzərova</span>
                </div>
                <div className='space-x-4 flex items-center lg:text-m md:text-sm'>
                <span>{t('examResults.winner1')}</span>
                <a href=""> <FaArrowRight/></a>
                </div>
                </div>
                <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center space-x-4 relative'>
                    <span className='bg-gray-300 rounded-full py-1 relative'>
                        <span className='px-3 font-semibold'>5</span>
                    </span>
                    <span className='font-semibold'>İlahə Nəzərova</span>
                </div>
                <div className='space-x-4 flex items-center lg:text-m md:text-sm'>
                <span>{t('examResults.winner5')}</span>
                <a href=""> <FaArrowRight/></a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Information;
